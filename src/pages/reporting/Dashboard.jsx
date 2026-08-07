import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, limit, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { FileText, PlusCircle, Clock, Award, Users, DollarSign, Calendar } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCount: 0,
    totalHours: 0,
    totalManHours: 0,
    totalIncome: 0,
    totalSponsorship: 0,
  });
  const [recentEvents, setRecentEvents] = useState([]);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const eventsRef = collection(db, "events");
        
        // Load recent events
        const qRecent = query(eventsRef, orderBy("createdAt", "desc"), limit(4));
        const snapRecent = await getDocs(qRecent);
        const eventsList = [];
        snapRecent.forEach((doc) => {
          eventsList.push({ id: doc.id, ...doc.data() });
        });
        setRecentEvents(eventsList);

        // Load all for stats calculation
        const allSnap = await getDocs(eventsRef);
        let count = 0;
        let hours = 0;
        let manHours = 0;
        let income = 0;
        let sponsorship = 0;

        allSnap.forEach((doc) => {
          const data = doc.data();
          count++;
          hours += parseFloat(data.projectHours || 0);
          manHours += parseFloat(data.totalManHours || 0);
          income += parseFloat(data.income || 0);
          sponsorship += parseFloat(data.sponsorship || 0);
        });

        setStats({
          totalCount: count,
          totalHours: hours,
          totalManHours: manHours,
          totalIncome: income,
          totalSponsorship: sponsorship,
        });

      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Dashboard
          </h1>
          <p className="text-slate-500 font-semibold text-sm">
            Welcome back, {user.name} — Rotaract Quarter summary active.
          </p>
        </div>

        <Link to="/reporting/create" className="inline-block">
          <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#7C3AED] text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#7C3AED]/20 transition-all cursor-pointer">
            <PlusCircle size={16} />
            <span>Create New Report</span>
          </button>
        </Link>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Reports", value: stats.totalCount, icon: FileText, color: "text-[#7C3AED] bg-[#7C3AED]/5" },
          { label: "Project Hours", value: stats.totalHours, icon: Clock, color: "text-[#2563EB] bg-[#2563EB]/5" },
          { label: "Total Man Hours", value: stats.totalManHours, icon: Users, color: "text-[#06B6D4] bg-[#06B6D4]/5" },
          { label: "Sponsorship Raised", value: `₹${stats.totalSponsorship}`, icon: DollarSign, color: "text-[#F59E0B] bg-[#F59E0B]/5" }
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.label} variant="scale" delay={index * 0.05} duration={0.5}>
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{item.label}</p>
                  <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {item.value}
                  </h3>
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <Icon size={22} />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Recent Activity & Quick Links */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Reports List */}
        <div className="lg:col-span-2 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold tracking-tight text-[#0F172A]">Recent Submissions</h3>
            <Link to="/reporting/projects" className="text-xs font-bold text-[#7C3AED] hover:underline">
              View All
            </Link>
          </div>

          {recentEvents.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
              <FileText className="mx-auto text-slate-300 mb-3" size={40} />
              <h4 className="font-bold text-slate-500 text-sm">No Reports Submitted Yet</h4>
              <p className="text-xs text-slate-400 mt-1 mb-4">Be the first to submit a Rotaract project report.</p>
              <Link to="/reporting/create" className="inline-block">
                <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold text-xs rounded-xl cursor-pointer">
                  Create Report
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentEvents.map((evt) => (
                <div key={evt.id} className="p-4 bg-[#FAF7F2]/60 border border-slate-200/40 rounded-2xl flex items-center justify-between hover:bg-[#FAF7F2] transition-colors">
                  <div className="overflow-hidden pr-4">
                    <h4 className="font-extrabold text-sm text-[#0F172A] truncate">{evt.projectName}</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-xs text-slate-400 font-semibold">
                      <span className="text-[#7C3AED]">{evt.avenue1}</span>
                      <span>•</span>
                      <span>Q{evt.quarter}</span>
                      <span>•</span>
                      <span>{evt.startDate}</span>
                    </div>
                  </div>

                  <Link to={`/reporting/projects`} className="shrink-0">
                    <button className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-[#0F172A] shadow-sm cursor-pointer">
                      View
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Portal Rules / Announcements */}
        <div className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#0F172A] mb-4">Submission Guide</h3>
            <ul className="space-y-3.5 text-xs text-slate-500 font-semibold leading-relaxed">
              <li className="flex gap-2.5">
                <Award className="text-[#F59E0B] shrink-0" size={16} />
                <span>**Quarters**: Automatically calculated from project start date.</span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="text-[#2563EB] shrink-0" size={16} />
                <span>**Man Hours**: Product of volunteers, attendees, and duration.</span>
              </li>
              <li className="flex gap-2.5">
                <Calendar className="text-[#06B6D4] shrink-0" size={16} />
                <span>**Reporting Cycle**: Submit reports within 3 days of project completion.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 bg-gradient-to-br from-[#7C3AED]/5 to-transparent p-4 rounded-2xl border border-[#7C3AED]/10">
            <h4 className="font-bold text-xs text-[#7C3AED] mb-1">Database Sync Status</h4>
            <p className="text-[10px] text-slate-400">Direct Firestore link active. Reporting is live on District 3141 metrics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
