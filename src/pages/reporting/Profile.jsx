import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { Award, User, Phone, Mail, AwardIcon, Bookmark } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [eventsChaired, setEventsChaired] = useState(0);

  useEffect(() => {
    async function loadChairedStats() {
      try {
        const eventsRef = collection(db, "events");
        const snap = await getDocs(eventsRef);
        let count = 0;
        snap.forEach((doc) => {
          if (doc.data().chairperson === user.username) {
            count++;
          }
        });
        setEventsChaired(count);
      } catch (err) {
        console.error("Error loading chaired stats:", err);
      } finally {
        setLoading(false);
      }
    }
    loadChairedStats();
  }, [user.username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Member Profile
        </h1>
        <p className="text-slate-500 font-semibold text-sm">
          Overview of your RCMG member parameters and metrics.
        </p>
      </div>

      {/* Main Profile Info Card */}
      <ScrollReveal variant="scale" duration={0.8}>
        <div className="bg-white border border-slate-200/60 rounded-[36px] p-8 shadow-sm space-y-8 relative overflow-hidden">
          {/* Subtle colored accent block */}
          <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-[#7C3AED]/10 uppercase">
              {user.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">{user.name}</h2>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mt-1">
                {user.designation} — RCMG District 3141
              </p>
            </div>
          </div>

          {/* Details list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <User size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Username</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">@{user.username}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Bookmark size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Portal Role</p>
                <p className="font-semibold text-[#0F172A] mt-0.5 capitalize">{user.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Email Address</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {user.email || <span className="text-slate-300 italic">Not provided</span>}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Phone Number</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {user.phone || <span className="text-slate-300 italic">Not provided</span>}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <AwardIcon size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Rotary International ID</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {user.riId || <span className="text-slate-300 italic">Not registered</span>}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Date of Birth</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {user.dob || <span className="text-slate-300 italic">Not provided</span>}
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic metrics */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
                <Award size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm">Project Chaired</h4>
                <p className="text-xs text-slate-400 font-semibold uppercase">Dynamic calculation</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-5xl font-black text-[#0F172A] tracking-tight">
                {eventsChaired}
              </span>
              <span className="text-xs text-slate-400 block font-bold uppercase tracking-wider mt-1">
                Events
              </span>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
}
