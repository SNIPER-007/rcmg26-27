import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { Search, Edit, Trash2, Calendar, FolderHeart, User2, AlertCircle } from "lucide-react";
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

export default function ReportList() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [chairpersons, setChairpersons] = useState([]);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [filterQuarter, setFilterQuarter] = useState("");
  const [filterAvenue1, setFilterAvenue1] = useState("");
  const [filterAvenue2, setFilterAvenue2] = useState("");
  const [filterChairperson, setFilterChairperson] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // newest | oldest

  useEffect(() => {
    async function loadReportsData() {
      try {
        const eventsRef = collection(db, "events");
        const snap = await getDocs(eventsRef);
        const list = [];
        snap.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...docSnap.data() });
        });
        setReports(list);

        // Load users to fill chairperson filter options
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        const usersList = [];
        usersSnap.forEach((docSnap) => {
          usersList.push({ username: docSnap.id, name: docSnap.data().name || docSnap.id });
        });
        setChairpersons(usersList);
      } catch (err) {
        console.error("Error loading reports list:", err);
      } finally {
        setLoading(false);
      }
    }
    loadReportsData();
  }, []);

  const handleDelete = async (reportId) => {
    if (user.role.toLowerCase() !== "president") {
      alert("Access Denied: Only the President can delete reports.");
      return;
    }

    if (!window.confirm("Are you sure you want to permanently delete this project report?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "events", reportId));
      setReports((prev) => prev.filter((r) => r.id !== reportId));
    } catch (err) {
      console.error("Error deleting report:", err);
      alert("Failed to delete report. Check database security rules.");
    }
  };

  // Perform client-side filter sorting
  const filteredReports = reports
    .filter((r) => {
      const matchSearch =
        !searchTerm ||
        r.projectName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.venue?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.aim?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchQuarter = !filterQuarter || r.quarter === parseInt(filterQuarter, 10);
      const matchAvenue1 = !filterAvenue1 || r.avenue1 === filterAvenue1;
      const matchAvenue2 = !filterAvenue2 || r.avenue2 === filterAvenue2;
      const matchChairperson = !filterChairperson || r.chairperson === filterChairperson;
      const matchDate = !filterDate || r.startDate === filterDate;
      const matchStatus = !filterStatus || r.status === filterStatus;

      return (
        matchSearch &&
        matchQuarter &&
        matchAvenue1 &&
        matchAvenue2 &&
        matchChairperson &&
        matchDate &&
        matchStatus
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || a.startDate || 0);
      const dateB = new Date(b.createdAt || b.startDate || 0);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isPresident = user.role.toLowerCase() === "president";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Projects & Reports
          </h1>
          <p className="text-slate-500 font-semibold text-sm">
            Review RCMG project reports, filtered chronologically.
          </p>
        </div>

        <Link to="/reporting/create" className="inline-block">
          <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#7C3AED] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all cursor-pointer">
            Create Report
          </button>
        </Link>
      </div>

      {/* Filters Container */}
      <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-[#0F172A] tracking-wide mb-2 uppercase">Search & Filters</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none transition-colors"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          </div>

          {/* Quarter */}
          <select
            value={filterQuarter}
            onChange={(e) => setFilterQuarter(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none cursor-pointer"
          >
            <option value="">All Quarters</option>
            <option value="1">Quarter 1 (Jul - Sep)</option>
            <option value="2">Quarter 2 (Oct - Dec)</option>
            <option value="3">Quarter 3 (Jan - Mar)</option>
            <option value="4">Quarter 4 (Apr - Jun)</option>
          </select>

          {/* Avenue 1 */}
          <select
            value={filterAvenue1}
            onChange={(e) => setFilterAvenue1(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none cursor-pointer"
          >
            <option value="">All Primary Avenues</option>
            {avenuesList.map((av) => (
              <option key={av} value={av}>{av}</option>
            ))}
          </select>

          {/* Avenue 2 */}
          <select
            value={filterAvenue2}
            onChange={(e) => setFilterAvenue2(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none cursor-pointer"
          >
            <option value="">All Secondary Avenues</option>
            {avenuesList.map((av) => (
              <option key={av} value={av}>{av}</option>
            ))}
          </select>

          {/* Chairperson */}
          <select
            value={filterChairperson}
            onChange={(e) => setFilterChairperson(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none cursor-pointer"
          >
            <option value="">All Chairpersons</option>
            {chairpersons.map((ch) => (
              <option key={ch.username} value={ch.username}>{ch.name}</option>
            ))}
          </select>

          {/* Date */}
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none"
          />

          {/* Status */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-semibold outline-none cursor-pointer"
          >
            <option value="">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="submitted">Submitted</option>
            <option value="approved">Approved</option>
          </select>

          {/* Sort & Order */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2.5 bg-[#FAF7F2]/50 border border-slate-200 focus:border-[#7C3AED] rounded-xl text-xs font-bold outline-none cursor-pointer"
          >
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
          </select>
        </div>
      </div>

      {/* Reports Listing Grid */}
      {filteredReports.length === 0 ? (
        <div className="bg-white border border-slate-200/60 rounded-3xl p-12 text-center shadow-sm">
          <AlertCircle className="mx-auto text-slate-300 mb-3 animate-pulse" size={44} />
          <h3 className="text-lg font-bold text-slate-600">No Reports Found</h3>
          <p className="text-sm text-slate-400 mt-1">Adjust your filter options or submit a new project report.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((report) => {
            const isOwner = report.reportedBy === user.username;
            const canEdit = isPresident || isOwner;

            return (
              <ScrollReveal key={report.id} variant="scale" duration={0.6}>
                <div className="bg-white border border-slate-200/60 rounded-[32px] p-6 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                  
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="bg-[#7C3AED]/5 text-[#7C3AED] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {report.avenue1}
                      </span>
                      <span className="text-slate-400 font-bold text-xs uppercase">
                        Q{report.quarter} Report
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight leading-snug line-clamp-2">
                      {report.projectName || report.title}
                    </h3>

                    <p className="text-slate-500 text-xs mt-3 line-clamp-3 leading-relaxed font-semibold">
                      {report.aim}
                    </p>
                  </div>

                  {/* Metadata & Actions */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-slate-400 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-300" />
                        <span>{report.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User2 size={14} className="text-slate-300" />
                        <span className="truncate">Chaired by: {report.chairperson}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Status: <span className={report.status === "approved" ? "text-emerald-600" : "text-amber-600"}>{report.status}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {canEdit && (
                          <Link to={`/reporting/edit/${report.id}`}>
                            <button className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-xl flex items-center justify-center transition-colors cursor-pointer">
                              <Edit size={14} />
                            </button>
                          </Link>
                        )}
                        {isPresident && (
                          <button
                            onClick={() => handleDelete(report.id)}
                            className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      )}

    </div>
  );
}
