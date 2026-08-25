import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { doc, getDoc, setDoc, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import { Save, ArrowLeft, AlertCircle, Search, UserCheck, X } from "lucide-react";

const avenuesList = [
  "Community Service",
  "Events and Fellowship",
  "Sports",
  "Professional Development",
  "Entrepreneurship Development",
  "Digital Communication",
  "Editorial",
  "International Service",
  "Social Media",
  "PR & Marketing",
  "Partners-In-Service",
  "Human Resource Development",
];

export default function ReportForm() {
  const { id } = useParams(); // For edit mode
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [allMembers, setAllMembers] = useState([]);

  // Form Fields State
  const [projectName, setProjectName] = useState("");
  const [venue, setVenue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [avenue1, setAvenue1] = useState("Community Service");
  const [avenue2, setAvenue2] = useState("");
  const [projectLevel, setProjectLevel] = useState("Club");
  const [projectFrequency, setProjectFrequency] = useState("One-time");
  const [projectHours, setProjectHours] = useState(0);
  const [totalManHours, setTotalManHours] = useState(0);
  const [aim, setAim] = useState("");
  const [processExecution, setProcessExecution] = useState("");
  const [impactAnalysis, setImpactAnalysis] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [chairperson, setChairperson] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [sponsorship, setSponsorship] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [clubName, setClubName] = useState("Rotaract Club of Mumbai Ghatkopar");
  const [zone, setZone] = useState("Zone 3B");
  const [riYear, setRiYear] = useState("2026-27");
  const [reportedBy, setReportedBy] = useState("");

  // Attendance Multi-Select State
  const [selectedAttendedMembers, setSelectedAttendedMembers] = useState([]);
  const [attendanceSearch, setAttendanceSearch] = useState("");
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close attendance dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAttendanceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate Quarter automatically
  const getQuarterFromDate = (dateString) => {
    if (!dateString) return 1;
    const parts = dateString.split("-");
    if (parts.length < 2) return 1;
    const month = parseInt(parts[1], 10);
    if (month >= 7 && month <= 9) return 1;
    if (month >= 10 && month <= 12) return 2;
    if (month >= 1 && month <= 3) return 3;
    if (month >= 4 && month <= 6) return 4;
    return 1;
  };

  const calculatedQuarter = getQuarterFromDate(startDate);
  const calculatedProfit = parseFloat(income || 0) + parseFloat(sponsorship || 0) - parseFloat(expense || 0);

  // Auto-calculate Club Attendance Count & Total Man Hours dynamically
  useEffect(() => {
    const memberCount = selectedAttendedMembers.length;
    // Set club attendance to selected members count if any members are selected
    if (memberCount > 0) {
      setAttendance(memberCount);
    }
    const hrs = parseFloat(projectHours || 0);
    const ext = parseFloat(attendees || 0);
    const calculatedManHrs = (memberCount + ext) * hrs;
    setTotalManHours(calculatedManHrs);
  }, [selectedAttendedMembers, attendees, projectHours]);

  // Load Members from users collection and Event data if in Edit Mode
  useEffect(() => {
    async function initForm() {
      try {
        // Load users from Firestore users collection for chairperson selection and attendance tracking
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        const usersList = [];
        usersSnap.forEach((docSnap) => {
          const u = docSnap.data();
          if (!u._placeholder) {
            usersList.push({
              id: docSnap.id,
              username: u.username || docSnap.id,
              name: u.name || docSnap.id,
              designation: u.designation || "",
              category: u.category || "CORE",
            });
          }
        });

        usersList.sort((a, b) => a.name.localeCompare(b.name));
        setAllMembers(usersList);

        // Default chairperson to logged in user if creating
        if (!id) {
          setChairperson(user.username || user.id || "");
        }

        // If Edit Mode, load event doc
        if (id) {
          const eventRef = doc(db, "events", id);
          const eventSnap = await getDoc(eventRef);
          if (!eventSnap.exists()) {
            setError("Report not found.");
            setLoading(false);
            return;
          }

          const evt = eventSnap.data();

          // Security check: President or Owner only
          const isPresident = user.role && user.role.toLowerCase() === "president";
          const isOwner = evt.reportedBy === user.username || evt.reportedById === user.id;
          if (!isPresident && !isOwner) {
            setError("Security restriction: You are not authorized to edit this report.");
            setLoading(false);
            return;
          }

          // Populate states
          setProjectName(evt.projectName || evt.title || "");
          setVenue(evt.venue || "");
          setStartDate(evt.startDate || "");
          setEndDate(evt.endDate || "");
          setAvenue1(evt.avenue1 || "Community Service");
          setAvenue2(evt.avenue2 || "");
          setProjectLevel(evt.projectLevel || "Club");
          setProjectFrequency(evt.projectFrequency || "One-time");
          setProjectHours(evt.projectHours || 0);
          setTotalManHours(evt.totalManHours || 0);
          setAim(evt.aim || "");
          setProcessExecution(evt.processExecution || "");
          setImpactAnalysis(evt.impactAnalysis || "");
          setFollowUp(evt.followUp || "");
          setChairperson(evt.chairperson || evt.chairpersonId || "");
          setImageUrls(evt.images ? evt.images.join(", ") : "");
          setIncome(evt.income || 0);
          setExpense(evt.expense || 0);
          setSponsorship(evt.sponsorship || 0);
          setAttendance(evt.attendance || 0);
          setAttendees(evt.attendees || 0);
          setClubName(evt.clubName || evt.club || "Rotaract Club of Mumbai Ghatkopar");
          setZone(evt.zone || "Zone 3B");
          setRiYear(evt.riYear || "2026-27");
          setReportedBy(evt.reportedBy || "");

          if (evt.attendedMembers && Array.isArray(evt.attendedMembers)) {
            setSelectedAttendedMembers(evt.attendedMembers);
          }
        }
      } catch (err) {
        console.error("Error loading form dependencies:", err);
        setError("Error pre-filling report details.");
      } finally {
        setLoading(false);
      }
    }
    initForm();
  }, [id, user]);

  // Handle adding an attended member to the bubble list
  const handleAddAttendedMember = (member) => {
    const exists = selectedAttendedMembers.some(
      (m) => m.id === member.id || m.username === member.username
    );
    if (!exists) {
      setSelectedAttendedMembers((prev) => [...prev, member]);
    }
    setAttendanceSearch("");
    setIsAttendanceDropdownOpen(false);
  };

  // Handle removing an attended member bubble
  const handleRemoveAttendedMember = (memberId) => {
    setSelectedAttendedMembers((prev) =>
      prev.filter((m) => m.id !== memberId && m.username !== memberId)
    );
  };

  // Filter members list for attendance search
  const matchingMembersForAttendance = allMembers.filter((m) => {
    const isAlreadySelected = selectedAttendedMembers.some(
      (selected) => selected.id === m.id || (selected.username && selected.username === m.username)
    );
    if (isAlreadySelected) return false;
    if (!attendanceSearch.trim()) return true;
    const query = attendanceSearch.toLowerCase().trim();
    return (
      m.name.toLowerCase().includes(query) ||
      (m.username && m.username.toLowerCase().includes(query)) ||
      (m.designation && m.designation.toLowerCase().includes(query))
    );
  });

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const imagesArray = imageUrls
      ? imageUrls.split(",").map((url) => url.trim()).filter((url) => url !== "")
      : [];

    const selectedChairpersonObj = allMembers.find(
      (c) => c.username === chairperson || c.id === chairperson
    );
    const chairpersonName = selectedChairpersonObj ? selectedChairpersonObj.name : chairperson;
    const chairpersonId = selectedChairpersonObj ? selectedChairpersonObj.id : chairperson;

    const reportData = {
      projectName,
      title: projectName,
      venue,
      startDate,
      endDate,
      quarter: calculatedQuarter,
      avenue1,
      avenue2,
      projectLevel,
      projectFrequency,
      projectHours: parseFloat(projectHours || 0),
      totalManHours: parseFloat(totalManHours || 0),
      aim,
      processExecution,
      impactAnalysis,
      followUp,
      chairperson,
      chairpersonId,
      chairpersonName,
      images: imagesArray,
      income: parseFloat(income || 0),
      expense: parseFloat(expense || 0),
      sponsorship: parseFloat(sponsorship || 0),
      profit: calculatedProfit,
      attendance: parseInt(attendance || selectedAttendedMembers.length, 10),
      attendees: parseInt(attendees || 0, 10),
      attendedMembers: selectedAttendedMembers,
      clubName,
      club: clubName,
      zone,
      riYear,
      status: "submitted",
      updatedAt: new Date().toISOString(),
    };

    try {
      if (id) {
        // Edit Mode
        const eventRef = doc(db, "events", id);
        await setDoc(
          eventRef,
          {
            ...reportData,
            reportedBy: reportedBy || user.username,
            reportedById: user.id || user.username.toLowerCase(),
          },
          { merge: true }
        );
      } else {
        // Create Mode
        const eventsCol = collection(db, "events");
        await addDoc(eventsCol, {
          ...reportData,
          reportedBy: user.username,
          reportedById: user.id || user.username.toLowerCase(),
          createdAt: new Date().toISOString(),
        });
      }
      navigate("/reporting/projects");
    } catch (err) {
      console.error("Error saving report document:", err);
      setError("Failed to save report. Please check database permissions.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          to="/reporting/projects"
          className="p-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl text-slate-500 shadow-sm hover:text-[#0F172A] transition-colors"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            {id ? "Edit Project Report" : "Create Project Report"}
          </h1>
          <p className="text-slate-500 font-semibold text-sm">
            Quarter Q{calculatedQuarter} will be calculated automatically.
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="shrink-0 mt-0.5" size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Form Container */}
      {!error || !id ? (
        <form onSubmit={handleSave} className="space-y-8">
          {/* Section 1: Basic Details */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-slate-100">
              1. Basic Project Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Name *</label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Venue *</label>
                <input
                  type="text"
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Start Date *</label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">End Date *</label>
                <input
                  type="date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Avenue 1 *</label>
                <select
                  value={avenue1}
                  onChange={(e) => setAvenue1(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold cursor-pointer"
                >
                  {avenuesList.map((av) => (
                    <option key={av} value={av}>{av}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Avenue 2 (Optional)</label>
                <select
                  value={avenue2}
                  onChange={(e) => setAvenue2(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold cursor-pointer"
                >
                  <option value="">None</option>
                  {avenuesList.map((av) => (
                    <option key={av} value={av}>{av}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Level</label>
                <select
                  value={projectLevel}
                  onChange={(e) => setProjectLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold cursor-pointer"
                >
                  <option value="Club">Club</option>
                  <option value="Joint">Joint</option>
                  <option value="Zone">Zone</option>
                  <option value="District">District</option>
                  <option value="International">International</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Frequency</label>
                <select
                  value={projectFrequency}
                  onChange={(e) => setProjectFrequency(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold cursor-pointer"
                >
                  <option value="One-time">One-time</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Hours (per person)</label>
                <input
                  type="number"
                  step="0.5"
                  value={projectHours}
                  onChange={(e) => setProjectHours(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Auto-Calculated Man Hours</label>
                <input
                  type="number"
                  disabled
                  value={totalManHours}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none text-[#7C3AED] font-extrabold"
                />
                <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                  ({selectedAttendedMembers.length || attendance} Club + {attendees || 0} External) × {projectHours || 0} hrs
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Narrative Description */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-slate-100">
              2. Descriptions & Objectives
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Aim / Objective of the Project *</label>
                <textarea
                  required
                  rows="3"
                  value={aim}
                  onChange={(e) => setAim(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Process & Execution Details *</label>
                <textarea
                  required
                  rows="4"
                  value={processExecution}
                  onChange={(e) => setProcessExecution(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Impact Analysis *</label>
                <textarea
                  required
                  rows="3"
                  value={impactAnalysis}
                  onChange={(e) => setImpactAnalysis(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Follow Up Plan</label>
                <textarea
                  rows="2"
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Finance & Attendance Details */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-slate-100">
              3. Finance & Attendance Details
            </h3>

            {/* Club Members Attendance Interactive Multi-Select */}
            <div className="space-y-3 bg-[#FAF7F2]/40 p-5 rounded-2xl border border-slate-200/60" ref={dropdownRef}>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <UserCheck size={16} className="text-[#7C3AED]" />
                  <span>Select Attended Club Members (Type Name to Search)</span>
                </label>
                <span className="text-xs font-extrabold text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full">
                  {selectedAttendedMembers.length} Members Attended
                </span>
              </div>

              {/* Selected Bubble Chips */}
              <div className="flex flex-wrap gap-2 min-h-[48px] p-3 bg-white border border-slate-200 rounded-2xl items-center shadow-inner">
                {selectedAttendedMembers.length === 0 ? (
                  <span className="text-xs text-slate-400 font-semibold px-2 italic">
                    No members selected yet. Type a name below to add members (e.g. Chittansh, Naman, Phreesha)...
                  </span>
                ) : (
                  selectedAttendedMembers.map((m) => (
                    <span
                      key={m.id || m.username}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#7C3AED]/15 to-[#2563EB]/15 border border-[#7C3AED]/30 text-[#7C3AED] rounded-full text-xs font-extrabold shadow-sm transition-all animate-fadeIn"
                    >
                      <span>{m.name}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveAttendedMember(m.id || m.username)}
                        className="w-4 h-4 rounded-full bg-[#7C3AED]/20 hover:bg-[#7C3AED] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-xs font-bold"
                        title="Remove member"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Search Bar Input & Dropdown */}
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    placeholder="Type member name (e.g. Chittansh, Naman, Apurva)..."
                    value={attendanceSearch}
                    onFocus={() => setIsAttendanceDropdownOpen(true)}
                    onChange={(e) => {
                      setAttendanceSearch(e.target.value);
                      setIsAttendanceDropdownOpen(true);
                    }}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-xl text-sm outline-none font-semibold transition-all shadow-sm"
                  />
                </div>

                {/* Dropdown Options */}
                {isAttendanceDropdownOpen && matchingMembersForAttendance.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-60 overflow-y-auto p-2">
                    {matchingMembersForAttendance.slice(0, 20).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleAddAttendedMember(m)}
                        className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-[#FAF7F2] transition-colors flex items-center justify-between cursor-pointer border-b border-slate-50 last:border-0"
                      >
                        <div>
                          <p className="text-xs font-extrabold text-[#0F172A]">{m.name}</p>
                          <p className="text-[10px] text-slate-400 font-semibold">{m.designation} · {m.category}</p>
                        </div>
                        <span className="text-xs text-[#7C3AED] font-bold bg-[#7C3AED]/10 px-2.5 py-1 rounded-lg">
                          + Add Member
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Income (₹)</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Expense (₹)</label>
                <input
                  type="number"
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sponsorship (₹)</label>
                <input
                  type="number"
                  value={sponsorship}
                  onChange={(e) => setSponsorship(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Calculated Net Profit</label>
                <input
                  type="text"
                  disabled
                  value={`₹${calculatedProfit}`}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none text-[#0F172A] font-extrabold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Auto Club Attendance Count
                </label>
                <input
                  type="number"
                  value={attendance}
                  onChange={(e) => setAttendance(parseInt(e.target.value || 0, 10))}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold text-[#7C3AED]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">External Attendees</label>
                <input
                  type="number"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Administration & Media */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-slate-100">
              4. Administration & Media Fills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Chairperson *</label>
                <select
                  value={chairperson}
                  onChange={(e) => setChairperson(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold cursor-pointer"
                >
                  <option value="">Select Chairperson...</option>
                  {allMembers.map((ch) => (
                    <option key={ch.id} value={ch.username || ch.id}>
                      {ch.name} {ch.designation ? `(${ch.designation})` : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">RI Year</label>
                <input
                  type="text"
                  value={riYear}
                  onChange={(e) => setRiYear(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Rotary Zone</label>
                <input
                  type="text"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Host Rotaract Club</label>
                <input
                  type="text"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none font-semibold"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Image URLs (comma-separated, do NOT upload files)
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/pic1.jpg, https://example.com/pic2.jpg"
                  value={imageUrls}
                  onChange={(e) => setImageUrls(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C3AED] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all cursor-pointer disabled:opacity-50"
            >
              <Save size={18} />
              <span>{saving ? "Saving Report..." : "Submit Project Report"}</span>
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
