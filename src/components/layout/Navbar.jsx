import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#f8f6f1]/90
        backdrop-blur-lg
        border-b
        border-black/5
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          h-28
          flex
          items-center
          justify-between
        "
      >
        <Link
          to="/"
          className="text-4xl font-bold text-[#0f172a]"
        >
          RCMG
        </Link>

        <nav className="flex gap-10 text-lg font-medium text-slate-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/core-team">Team</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/get-involved">Get Involved</Link>
        </nav>
      </div>
    </header>
  );
}