import { motion, useScroll, useTransform } from "framer-motion";

export function Spark({ className = "", delay = 0 }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#0f172a]/16 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <path
        d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

export function DotGrid({ className = "" }) {
  return (
    <svg
      width="100"
      height="100"
      className={`text-[#0f172a]/10 ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function RotaryGear({ className = "" }) {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#0f172a]/6 ${className}`}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Outer spokes simulating a gear outline */}
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="15"
          x2="50"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}

export function CurvedLine({ className = "" }) {
  return (
    <svg
      width="300"
      height="100"
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#0f172a]/9 ${className}`}
    >
      <path
        d="M0 50 C 75 10, 75 90, 150 50 C 225 10, 225 90, 300 50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FloatingSticker({
  title,
  subtitle,
  className = "",
  tone = "light",
}) {
  const toneClass = tone === "dark" ? "premium-sticker-dark" : "premium-sticker";
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.95], [1, 0.96, 0.72, 0.45]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
      style={{ transform: "scale(0.78)", transformOrigin: "center" }}
    >
      <motion.div
        style={{ opacity, y, willChange: "transform, opacity" }}
        className={`${toneClass} rounded-[24px] px-4 py-3`}
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1d4ed8] shadow-[0_0_0_6px_rgba(29,78,216,0.12)]" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-400">
              {subtitle}
            </p>
            <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
              {title}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.06),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(245,158,11,0.07),transparent_26%),radial-gradient(circle_at_50%_92%,rgba(15,23,42,0.03),transparent_32%)]" />

      {/* Sparkles */}
      <Spark className="absolute top-[15%] left-[8%]" delay={0} />
      <Spark className="absolute bottom-[20%] right-[10%]" delay={2} />
      <Spark className="absolute top-[60%] right-[8%]" delay={4} />

      {/* Gears / Rotaract reference */}
      <RotaryGear className="absolute top-[10%] -right-16 md:right-10" />
      <RotaryGear className="absolute -bottom-16 -left-16 opacity-80" />

      {/* Dot Grid */}
      <DotGrid className="absolute top-[40%] left-[5%] opacity-60" />
      <DotGrid className="absolute bottom-[40%] right-[5%] opacity-60" />

      {/* Curved Paths */}
      <CurvedLine className="absolute top-[30%] right-[20%] hidden md:block" />
      <CurvedLine className="absolute bottom-[25%] left-[20%] hidden md:block" />

      {/* Floating informational stickers */}
      <FloatingSticker
        title="District 3141"
        subtitle="Rotaract Network"
        className="top-[12%] left-[6%] hidden lg:block"
      />
      <FloatingSticker
        title="Since 2007"
        subtitle="Legacy"
        className="top-[22%] right-[8%] hidden xl:block"
        tone="dark"
      />
      <FloatingSticker
        title="Service • Leadership • Fellowship"
        subtitle="RCMG"
        className="bottom-[18%] left-[8%] hidden lg:block"
      />
      <FloatingSticker
        title="Mumbai Ghatkopar"
        subtitle="Community"
        className="bottom-[14%] right-[8%] hidden xl:block"
        tone="dark"
      />
    </div>
  );
}
