import { Link, Navigate, Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ArrowLeft, LayoutDashboard, FileText, PlusCircle, User, LogOut } from "lucide-react";

export default function ReportingLayout() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/reporting/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/reporting/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/reporting/dashboard", icon: LayoutDashboard },
    { name: "Reports & Projects", path: "/reporting/projects", icon: FileText },
    { name: "Create Report", path: "/reporting/create", icon: PlusCircle },
    { name: "Profile", path: "/reporting/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F172A] flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:sticky md:top-0 md:h-screen md:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo / Branding */}
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <img src="/images/logo/2026-27.png" alt="RCMG Logo" className="h-10 w-auto object-contain" />
            <div>
              <h2 className="font-extrabold text-sm tracking-tight text-[#0F172A]">RCMG Portal</h2>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{user.designation}</p>
            </div>
          </div>

          <div className="px-4 pt-4">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-white hover:text-[#0F172A]"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all ${
                      isActive
                        ? "bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/20"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#0F172A]"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer / User Session Details */}
        <div className="p-4 border-t border-slate-100">
          <div className="px-4 py-3 mb-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-slate-200 flex items-center justify-center font-bold text-xs uppercase text-[#7C3AED]">
              {user.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="overflow-hidden">
              <h4 className="font-bold text-sm text-[#0F172A] truncate">{user.name}</h4>
              <p className="text-xs text-slate-400 font-semibold capitalize">{user.role}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-rose-600 hover:bg-rose-50 font-semibold text-sm transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}
