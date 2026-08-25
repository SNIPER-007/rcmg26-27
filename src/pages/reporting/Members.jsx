import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { Users, Search, ShieldCheck, UserCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Members() {
  const { user } = useAuth();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadMembers() {
      try {
        const usersRef = collection(db, "users");
        const snap = await getDocs(usersRef);
        const list = [];
        snap.forEach((docSnap) => {
          const data = docSnap.data();
          // Filter out placeholder docs if any
          if (!data._placeholder) {
            list.push({
              id: docSnap.id,
              name: data.name || docSnap.id,
              username: data.username || "",
              designation: data.designation || "Member",
              category: data.category || (data.role === "BOD" ? "BOD" : "CORE"),
              role: data.role || "",
              active: data.active !== false,
            });
          }
        });

        // Custom sort order: CORE -> BOD -> GBM
        const categoryOrder = { CORE: 1, BOD: 2, GBM: 3 };
        list.sort((a, b) => {
          const orderDiff = (categoryOrder[a.category] || 4) - (categoryOrder[b.category] || 4);
          if (orderDiff !== 0) return orderDiff;
          return a.name.localeCompare(b.name);
        });

        setMembers(list);
      } catch (err) {
        console.error("Error loading members directory:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
  }, []);

  const filteredMembers = members.filter((m) => {
    // Category match
    const matchesCategory =
      selectedCategory === "ALL" || m.category.toUpperCase() === selectedCategory.toUpperCase();

    // Search term match
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      m.name.toLowerCase().includes(term) ||
      m.designation.toLowerCase().includes(term) ||
      m.username.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const categoryBadgeColors = {
    CORE: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20",
    BOD: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
    GBM: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-3">
            <Users className="text-[#7C3AED]" size={30} />
            <span>Member Directory</span>
          </h1>
          <p className="text-slate-500 font-semibold text-sm mt-1">
            Complete RCMG member directory powered by Firestore.
          </p>
        </div>

        {/* Total Members Count */}
        <div className="bg-white border border-slate-200/60 rounded-2xl px-5 py-3 shadow-sm flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center font-bold">
            {members.length}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total RCMG Members</p>
            <p className="text-xs font-bold text-[#0F172A]">Core, BOD & General Body</p>
          </div>
        </div>
      </div>

      {/* Controls: Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 w-full sm:w-auto">
          {[
            { id: "ALL", label: "All Members" },
            { id: "CORE", label: "Core Team" },
            { id: "BOD", label: "Board of Directors" },
            { id: "GBM", label: "General Body" },
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "text-slate-500 hover:text-[#0F172A]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search by name or designation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200/60 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl text-xs font-semibold text-[#0F172A] outline-none transition-all"
          />
        </div>
      </div>

      {/* Members Grid */}
      {filteredMembers.length === 0 ? (
        <div className="bg-white border border-slate-200/60 rounded-3xl p-12 text-center shadow-sm">
          <Users className="mx-auto text-slate-300 mb-3" size={40} />
          <h3 className="font-bold text-slate-600 text-base">No Members Found</h3>
          <p className="text-xs text-slate-400 mt-1">Try adjusting your search query or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((m, index) => {
            const isCurrentUser = user && user.username && m.username && user.username.toLowerCase() === m.username.toLowerCase();
            return (
              <ScrollReveal key={m.id} variant="fade-up" delay={index * 0.03} duration={0.4}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-white border rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all ${
                    isCurrentUser ? "border-[#7C3AED] ring-2 ring-[#7C3AED]/20" : "border-slate-200/60"
                  }`}
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED]/10 to-[#EC4899]/10 text-[#7C3AED] flex items-center justify-center font-extrabold text-base uppercase border border-slate-100">
                        {m.name.split(" ").map(n => n[0]).join("")}
                      </div>

                      <div className="flex items-center gap-2">
                        {isCurrentUser && (
                          <span className="px-2.5 py-1 bg-[#7C3AED] text-white text-[10px] font-extrabold rounded-full tracking-wider uppercase flex items-center gap-1 shadow-sm">
                            <Star size={10} /> YOU
                          </span>
                        )}
                        <span
                          className={`px-3 py-1 text-[10px] font-bold rounded-full border uppercase tracking-wider ${
                            categoryBadgeColors[m.category] || categoryBadgeColors.GBM
                          }`}
                        >
                          {m.category === "CORE" ? "Core" : m.category === "BOD" ? "BOD" : "GBM"}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[#0F172A] text-lg tracking-tight">
                      {m.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                      {m.designation}
                    </p>
                  </div>

                  {/* Footer details */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      Active Member
                    </span>
                    {m.username && (
                      <span className="text-slate-400 text-[11px]">@{m.username}</span>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
