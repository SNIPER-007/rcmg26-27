import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <img
  src="/images/logo/2026-27.png"
  alt="RCMG Logo"
  className="
    h-24
    w-auto
    object-contain
  "
/>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-5 text-slate-300">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-white transition">
                About
              </Link>

              <Link to="/core-team" className="hover:text-white transition">
                Team
              </Link>

              <Link to="/sponsors" className="hover:text-white transition">
                Sponsors
              </Link>

              <Link to="/achievements" className="hover:text-white transition">
                Achievements
              </Link>

              <Link to="/get-involved" className="hover:text-white transition">
                Get Involved
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-3 mt-5 text-slate-300">

              <a
                href="https://instagram.com/rotaractghatkopar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/rotaractclubofmumbaighatkopar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:rtr.chittanshpancholi@gmail.com"
                className="hover:text-white transition"
              >
                Email
              </a>

            </div>

            <p className="mt-5 text-slate-400 text-sm">
              Ghatkopar, Mumbai, Maharashtra, India
            </p>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">

          <p className="text-slate-400 text-sm">
            © 2026 Rotaract Club of Mumbai Ghatkopar
          </p>

          <p className="text-slate-500 text-xs mt-2">
            President 2026-27: Rtr. Chittansh Pancholi
          </p>

          <p className="text-slate-600 text-xs mt-1">
            Website Designed & Developed by Rtr. Chittansh Pancholi
          </p>

        </div>

      </div>
    </footer>
  );
}