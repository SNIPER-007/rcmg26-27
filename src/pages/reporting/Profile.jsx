import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { Award, User, Phone, Mail, AwardIcon, Bookmark, Calendar, FileText } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projectsChairedCount, setProjectsChairedCount] = useState(0);
  const [draftsSavedCount, setDraftsSavedCount] = useState(0);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;
      try {
        // Fetch user document from Firestore users collection using doc ID / username
        const userId = user.id || (user.username ? user.username.toLowerCase() : "");
        if (userId) {
          const userRef = doc(db, "users", userId);
          const snap = await getDoc(userRef);
          if (snap.exists()) {
            setProfileData(snap.data());
          } else {
            setProfileData(user);
          }
        } else {
          setProfileData(user);
        }

        // Calculate projects chaired from events collection
        const eventsRef = collection(db, "events");
        const eventsSnap = await getDocs(eventsRef);
        let chairedCount = 0;
        let draftsCount = 0;

        eventsSnap.forEach((docSnap) => {
          const data = docSnap.data();

          // Match chairperson by username or ID or name
          const isChairperson =
            (data.chairperson && user.username && data.chairperson.toLowerCase() === user.username.toLowerCase()) ||
            (data.chairpersonId && data.chairpersonId === userId) ||
            (data.chairpersonName && data.chairpersonName.toLowerCase() === user.name.toLowerCase());

          if (isChairperson) {
            chairedCount++;
          }

          // Drafts count by current user
          const isReporter =
            (data.reportedBy && user.username && data.reportedBy.toLowerCase() === user.username.toLowerCase()) ||
            (data.reportedById && data.reportedById === userId);

          if (isReporter && data.status === "draft") {
            draftsCount++;
          }
        });

        setProjectsChairedCount(chairedCount);
        setDraftsSavedCount(draftsCount);
      } catch (err) {
        console.error("Error loading profile data:", err);
        setProfileData(user);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const currentUser = profileData || user || {};

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
          My Profile
        </h1>
        <p className="text-slate-500 font-semibold text-sm">
          Overview of your RCMG member parameters and metrics.
        </p>
      </div>

      {/* Main Profile Info Card */}
      <ScrollReveal variant="scale" duration={0.8}>
        <div className="bg-white border border-slate-200/60 rounded-[36px] p-8 shadow-sm space-y-8 relative overflow-hidden">
          {/* Subtle colored accent block */}
          <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#EC4899]" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-[#7C3AED]/10 uppercase">
              {currentUser.name ? currentUser.name.split(" ").map(n => n[0]).join("") : "U"}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">{currentUser.name}</h2>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span>{currentUser.designation || "Member"}</span>
                <span>•</span>
                <span className="text-[#7C3AED] font-extrabold">{currentUser.category || "CORE"}</span>
                <span>•</span>
                <span>RCMG District 3141</span>
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
                <p className="font-semibold text-[#0F172A] mt-0.5">@{currentUser.username}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Bookmark size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Category & Role</p>
                <p className="font-semibold text-[#0F172A] mt-0.5 capitalize">
                  {currentUser.category || "CORE"} — {currentUser.role || currentUser.designation}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Email Address</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {currentUser.email || currentUser.emailAddress || <span className="text-slate-300 italic">Not added yet</span>}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Contact Number</p>
                <p className="font-semibold text-[#0F172A] mt-0.5">
                  {currentUser.phone || currentUser.contactNumber || <span className="text-slate-300 italic">Not added yet</span>}
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
                  {currentUser.riId || currentUser.rotaryInternationalId || <span className="text-slate-300 italic">Not added yet</span>}
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
                  {currentUser.dob || currentUser.dateOfBirth || <span className="text-slate-300 italic">Not added yet</span>}
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic metrics */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-2xl border border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs">Projects Chaired</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Calculated from events</p>
                </div>
              </div>
              <span className="text-3xl font-black text-[#0F172A] tracking-tight">
                {projectsChairedCount}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#FAF7F2] rounded-2xl border border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs">Drafts Saved</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Saved reports</p>
                </div>
              </div>
              <span className="text-3xl font-black text-[#0F172A] tracking-tight">
                {draftsSavedCount}
              </span>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
}
