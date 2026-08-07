import { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { ArrowLeft, ShieldAlert, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/reporting/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoggingIn(true);

    try {
      await login(username, password, role);
      navigate("/reporting/dashboard");
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 relative overflow-hidden">
      <Link
        to="/"
        className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur transition-colors hover:text-[#0F172A] hover:bg-white"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      {/* Background blobs */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-[#7C3AED]/5 blur-[100px] rounded-full pointer-events-none animate-blob" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-[#EC4899]/5 blur-[100px] rounded-full pointer-events-none animate-blob-delayed" />

      <div className="w-full max-w-md z-10">
        <ScrollReveal variant="scale" duration={0.8}>
          <div className="glassmorphism rounded-[36px] border border-white/40 shadow-xl p-8 md:p-10">
            {/* Header info */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg shadow-[#7C3AED]/20 mx-auto mb-4">
                <LogIn className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">RCMG Portal</h2>
              <p className="mt-2 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                Internal Reporting Portal
              </p>
            </div>

            {/* Error prompt */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold rounded-2xl p-4 mb-6 flex items-start gap-3"
              >
                <ShieldAlert className="shrink-0 mt-0.5" size={16} />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. chittansh"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-5 py-4 bg-white border border-slate-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl text-[#0F172A] font-semibold text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-white border border-slate-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl text-[#0F172A] font-semibold text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Portal Role
                </label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-5 py-4 bg-white border border-slate-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-2xl text-[#0F172A] font-bold text-sm outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="President">President</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Joint Secretary">Joint Secretary</option>
                    <option value="Member">Member</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loggingIn}
                  className="w-full py-4 px-6 rounded-2xl text-white font-bold text-sm btn-animated-gradient shadow-md cursor-pointer transition-transform duration-300 disabled:opacity-50"
                >
                  {loggingIn ? "Logging in..." : "Login to Portal"}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center text-xs text-slate-400 font-semibold tracking-wide">
              Secure admin account provisioning active.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
