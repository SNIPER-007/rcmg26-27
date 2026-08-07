import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Spark, RotaryGear, FloatingSticker } from "../ui/FloatingDecorations";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const routeDecorations = {
    about: [
      { title: "Legacy", subtitle: "About RCMG", className: "top-[5%] left-[6%] hidden xl:block z-0" },
      { title: "Four Decades", subtitle: "Growth", className: "bottom-[14%] right-[8%] hidden xl:block z-0", tone: "dark" },
    ],
    coreTeam: [
      { title: "Leadership Team", subtitle: "Core", className: "top-[5%] right-[8%] hidden xl:block z-0", tone: "dark" },
      { title: "Collaboration", subtitle: "Together", className: "top-[14%] left-[6%] hidden xl:block z-0" },
      { title: "Service", subtitle: "Avenue", className: "bottom-[14%] left-[7%] hidden 2xl:block z-0" },
    ],
    achievements: [
      { title: "AARA", subtitle: "Recognition", className: "top-[12%] left-[6%] hidden xl:block z-0" },
      { title: "Legacy Continues", subtitle: "Impact", className: "bottom-[14%] right-[8%] hidden xl:block z-0", tone: "dark" },
    ],
    sponsors: [
      { title: "Partnership", subtitle: "Brand Partner", className: "top-[12%] right-[6%] hidden xl:block z-0", tone: "dark" },
      { title: "Together We Grow", subtitle: "Community Impact", className: "bottom-[16%] left-[7%] hidden xl:block z-0" },
    ],
    getInvolved: [
      { title: "Join Us", subtitle: "Volunteer", className: "top-[13%] left-[6%] hidden xl:block z-0" },
      { title: "Make A Difference", subtitle: "Lead", className: "bottom-[14%] right-[8%] hidden xl:block z-0", tone: "dark" },
    ],
    blogs: [
      { title: "Stories", subtitle: "Journey", className: "top-[10%] right-[6%] hidden xl:block z-0", tone: "dark" },
      { title: "Inspiration", subtitle: "Community", className: "bottom-[28%] left-[7%] hidden xl:block z-0" },
    ],
  };

  const pageKey =
    pathname === "/"
      ? "home"
      : pathname.startsWith("/about")
        ? "about"
        : pathname.startsWith("/core-team")
          ? "coreTeam"
          : pathname.startsWith("/achievements")
            ? "achievements"
            : pathname.startsWith("/sponsors")
              ? "sponsors"
              : pathname.startsWith("/get-involved")
                ? "getInvolved"
                : pathname.startsWith("/blogs")
                  ? "blogs"
                  : "home";

  const stickers = pageKey === "home" ? [] : routeDecorations[pageKey] || [];

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.05),transparent_26%),radial-gradient(circle_at_85%_14%,rgba(245,158,11,0.05),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(15,23,42,0.025),transparent_30%)] pointer-events-none" />

      {/* Global Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none animate-blob z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/5 blur-[150px] pointer-events-none animate-blob-delayed z-0" />
      <div className="absolute top-[60%] left-[-15%] w-[450px] h-[450px] rounded-full bg-[#F59E0B]/5 blur-[120px] pointer-events-none animate-blob z-0" />

      {/* Subtle floating vector gear outline in the page background */}
      <RotaryGear className="absolute top-[15%] right-[5%] opacity-[0.03] z-0 pointer-events-none" />
      <RotaryGear className="absolute bottom-[25%] left-[2%] opacity-[0.02] z-0 pointer-events-none scale-150" />
      <Spark className="absolute top-[30%] left-[8%] opacity-[0.04] z-0 pointer-events-none text-[#1d4ed8]" />
      <Spark className="absolute bottom-[40%] right-[10%] opacity-[0.04] z-0 pointer-events-none text-[#f59e0b]" />

      {stickers.map((sticker) => (
        <FloatingSticker
          key={`${sticker.subtitle}-${sticker.title}`}
          title={sticker.title}
          subtitle={sticker.subtitle}
          className={sticker.className}
          tone={sticker.tone}
        />
      ))}

      <Navbar />

      <main className="pt-28 min-h-screen relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}