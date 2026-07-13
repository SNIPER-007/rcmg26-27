import { motion } from "framer-motion";

export function Spark({ className = "", delay = 0 }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#0f172a]/10 ${className}`}
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
      className={`text-[#0f172a]/5 ${className}`}
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
      className={`text-[#0f172a]/3 ${className}`}
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
      className={`text-[#0f172a]/5 ${className}`}
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

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sparkles */}
      <Spark className="absolute top-[15%] left-[8%]" delay={0} />
      <Spark className="absolute bottom-[20%] right-[10%]" delay={2} />
      <Spark className="absolute top-[60%] right-[8%]" delay={4} />

      {/* Gears / Rotaract reference */}
      <RotaryGear className="absolute top-[10%] -right-16 md:right-10" />
      <RotaryGear className="absolute -bottom-16 -left-16 opacity-75" />

      {/* Dot Grid */}
      <DotGrid className="absolute top-[40%] left-[5%] opacity-50" />
      <DotGrid className="absolute bottom-[40%] right-[5%] opacity-50" />

      {/* Curved Paths */}
      <CurvedLine className="absolute top-[30%] right-[20%] hidden md:block" />
      <CurvedLine className="absolute bottom-[25%] left-[20%] hidden md:block" />
    </div>
  );
}
