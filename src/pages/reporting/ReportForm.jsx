import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { doc, getDoc, setDoc, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { Save, ArrowLeft, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  const [chairpersons, setChairpersons] = useState([]);

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

  // Load Chairpersons and Event data if in Edit Mode
  useEffect(() => {
    async function initForm() {
      try {
        // Load users for chairperson dropdown
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        const usersList = [];
        usersSnap.forEach((docSnap) => {
          const u = docSnap.data();
          usersList.push({ username: docSnap.id, name: u.name || docSnap.id });
        });
        setChairpersons(usersList);
        
        // Default chairperson to logged in user if creating
        if (!id) {
          setChairperson(user.username);
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

          // Check security access: President or Owner only
          const isPresident = user.role.toLowerCase() === "president";
          const isOwner = evt.reportedBy === user.username;
          if (!isPresident && !isOwner) {
            setError("Security restriction: You are not authorized to edit this report.");
            setLoading(false);
            return;
          }

          // Set states
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
          setChairperson(evt.chairperson || "");
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

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const imagesArray = imageUrls
      ? imageUrls.split(",").map((url) => url.trim()).filter((url) => url !== "")
      : [];

    const reportData = {
      projectName,
      title: projectName, // for backwards compatibility
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
      images: imagesArray,
      income: parseFloat(income || 0),
      expense: parseFloat(expense || 0),
      sponsorship: parseFloat(sponsorship || 0),
      profit: calculatedProfit,
      attendance: parseInt(attendance || 0, 10),
      attendees: parseInt(attendees || 0, 10),
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
        await setDoc(eventRef, {
          ...reportData,
          reportedBy: reportedBy || user.username,
        }, { merge: true });
      } else {
        // Create Mode
        const eventsCol = collection(db, "events");
        await addDoc(eventsCol, {
          ...reportData,
          reportedBy: user.username,
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
        <Link to="/reporting/projects" className="p-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl text-slate-500 shadow-sm hover:text-[#0F172A] transition-colors">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Hours</label>
                <input
                  type="number"
                  step="0.5"
                  value={projectHours}
                  onChange={(e) => setProjectHours(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Total Man Hours</label>
                <input
                  type="number"
                  value={totalManHours}
                  onChange={(e) => setTotalManHours(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-semibold">Aim / Objective of the Project *</label>
                <textarea
                  required
                  rows="3"
                  value={aim}
                  onChange={(e) => setAim(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-semibold font-semibold">Process & Execution Details *</label>
                <textarea
                  required
                  rows="4"
                  value={processExecution}
                  onChange={(e) => setProcessExecution(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-semibold">Impact Analysis *</label>
                <textarea
                  required
                  rows="3"
                  value={impactAnalysis}
                  onChange={(e) => setImpactAnalysis(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-semibold">Follow Up Plan</label>
                <textarea
                  rows="2"
                  value={followUp}
                  onChange={(e) => setFollowUp(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Financials & Attendance */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#0F172A] tracking-tight pb-3 border-b border-slate-100">
              3. Finance & Attendance Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Club Attendance</label>
                <input
                  type="number"
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-sm outline-none transition-colors font-semibold"
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
                  {chairpersons.map((ch) => (
                    <option key={ch.username} value={ch.username}>
                      {ch.name} (@{ch.username})
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
