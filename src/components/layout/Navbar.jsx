import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/core-team" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Achievements", path: "/achievements" },
    { name: "Get Involved", path: "/get-involved" },
  ];

  return (
    <>
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
            max-w-[90rem]
            mx-auto
            px-8
            lg:px-12
            h-32
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="/images/logo/2026-27.png"
              alt="RCMG Logo"
              className="
                h-20
                lg:h-28
                w-auto
                object-contain
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-12
            "
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative
                  text-xl
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-[#0f172a]"
                      : "text-slate-600 hover:text-[#0f172a]"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="
                          absolute
                          -bottom-2
                          left-0
                          w-full
                          h-[3px]
                          bg-[#0f172a]
                          rounded-full
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[999]
              bg-[#0f172a]
              text-white
              flex
              flex-col
            "
          >
            <div className="flex justify-between items-center p-6">
              <img
                src="/images/logo/2026-27.png"
                alt="RCMG Logo"
                className="h-16 w-auto"
              />

              <button onClick={() => setMenuOpen(false)}>
                <X size={36} />
              </button>
            </div>

            <div
              className="
                flex-1
                flex
                flex-col
                items-center
                justify-center
                gap-10
              "
            >
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-3xl
                    md:text-4xl
                    font-bold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }
                  `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}