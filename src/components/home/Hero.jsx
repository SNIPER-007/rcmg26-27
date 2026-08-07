import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { Spark, DotGrid, RotaryGear, CurvedLine, FloatingSticker } from "../ui/FloatingDecorations";

export default function Hero() {
  const ringText = "Rotaract Club of Mumbai Ghatkopar 2026-27 Rotaract Club of Mumbai Ghatkopar 2026-27";

  return (
    <section className="relative px-8 py-32 md:py-40 overflow-hidden bg-[#f8f6f1]">
      
      {/* Premium Background Mesh & Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[52%] h-[52%] bg-[#dfe9ff]/55 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[52%] h-[52%] bg-amber-100/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(37,99,235,0.04),transparent_26%),radial-gradient(circle_at_50%_75%,rgba(245,158,11,0.04),transparent_28%)] pointer-events-none" />

      {/* Restored Hero Accents (grouped & scaled) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="relative w-full h-full"
          style={{ transform: "scale(0.9)", transformOrigin: "center" }}
        >
          <DotGrid className="absolute left-[7%] top-[22%] opacity-30 hidden md:block" />
          <Spark className="absolute left-[10%] bottom-[22%] opacity-45 text-[#1d4ed8] hidden lg:block" />
          <Spark className="absolute right-[14%] top-[18%] opacity-45 text-[#f59e0b] hidden lg:block" delay={2} />
          <CurvedLine className="absolute bottom-[11%] left-[5%] opacity-20 hidden lg:block" />

          <FloatingSticker title="District 3141" subtitle="Rotaract" className="top-[8%] left-[3%] hidden xl:block" />
          <FloatingSticker title="Since 2007" subtitle="Legacy" className="top-[14%] right-[3%] hidden xl:block" tone="dark" />
          <FloatingSticker title="Leadership • Service • Fellowship" subtitle="RCMG" className="bottom-[10%] left-[4%] hidden xl:block" />
          <FloatingSticker title="1000+ Leaders" subtitle="Community" className="right-[8%] bottom-[14%] hidden xl:block" />
          <FloatingSticker title="120+ Collaborations" subtitle="Impact" className="left-[10%] top-[16%] hidden xl:block" tone="dark" />

          <motion.div className="absolute right-[7%] top-[14%] hidden xl:block pointer-events-none">
            <div className="relative h-[360px] w-[360px]">
              <div className="absolute inset-[22px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.84),rgba(255,255,255,0.2)_58%,transparent_76%)] shadow-[0_24px_56px_-40px_rgba(15,23,42,0.48)]" />
              <div className="absolute inset-[34px] rounded-full border border-[#1d4ed8]/10" />
              <div className="absolute inset-[46px] rounded-full border border-[#1d4ed8]/14" />

              <motion.div
                animate={{ opacity: [0.52, 0.72, 0.52], scale: [0.992, 1, 0.992] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[96px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14),rgba(245,158,11,0.04)_45%,rgba(255,255,255,0)_72%)]"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 66, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
              >
                <svg
                  viewBox="0 0 360 360"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="hero-outer-ring"
                      d="M 180,68 a 112,112 0 1,1 0,224 a 112,112 0 1,1 0,-224"
                    />
                  </defs>
                  <text
                    className="fill-[#1d4ed8]"
                    fontSize="10"
                    fontWeight="800"
                    letterSpacing="1.4"
                    textAnchor="middle"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    <textPath href="#hero-outer-ring" startOffset="50%" method="align">
                      {ringText}
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="absolute inset-[88px] rounded-full border-[2px] border-[#0f172a]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[104px] rounded-full"
              >
                <RotaryGear className="absolute inset-0 h-full w-full text-[#f59e0b] opacity-95" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="absolute left-[4%] top-[26%] hidden xl:flex flex-col items-start gap-4 pointer-events-none">
            <FloatingSticker title="Building" subtitle="Impact" className="static" />
            <div className="flex items-center gap-3 pl-2">
              <Spark className="opacity-60 text-[#1d4ed8]" />
              <Spark className="opacity-35 text-[#f59e0b]" delay={1.5} />
            </div>
            <div className="flex items-center gap-4">
              <DotGrid className="opacity-35 scale-75 -translate-x-1" />
              <CurvedLine className="hidden xl:block opacity-20 w-[180px] h-[60px]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center pt-8 xl:pt-0">
        <ScrollReveal
          variant="fade-up"
          duration={0.8}
          className="
            uppercase
            tracking-[0.45em]
            text-xs
            sm:text-sm
            font-bold
            text-slate-500
          "
        >
          Rotaract Club of Mumbai Ghatkopar
        </ScrollReveal>

        <ScrollReveal
          variant="blur"
          duration={0.9}
          className="
            mt-10
            text-6xl
            md:text-8xl
            lg:text-[120px]
            font-bold
            leading-[0.9]
            tracking-[-0.05em]
            text-[#0f172a]
            max-w-4xl
          "
        >
          Building
          <br />
          <span className="gradient-text">
            Impact
          </span>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          delay={0.08}
          duration={0.8}
          className="
            mt-10
            max-w-2xl
            text-lg
            md:text-xl
            text-slate-600
            leading-relaxed
          "
        >
          A youth-driven community creating lasting impact through leadership, 
          social service, fellowship, and professional development.
        </ScrollReveal>

        <ScrollReveal
          variant="scale"
          delay={0.12}
          duration={0.75}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const el = document.getElementById("why-rcmg");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              px-10
              py-5
              rounded-full
              btn-animated-gradient premium-button
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              cursor-pointer
            "
          >
            Explore RCMG
          </motion.button>
          
          <motion.a
            href="https://wa.me/917738969033?text=Hey!%20I%20came%20across%20RCMG%20through%20your%20website%20and%20would%20love%20to%20know%20more%20about%20joining%20the%20Rotaract%20Club%20of%20Mumbai%20Ghatkopar%20and%20the%20membership%20process."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              px-10
              py-5
              rounded-full
              bg-white
              text-[#0f172a]
              font-semibold
              border
              border-black/10
              shadow-sm
              hover:bg-slate-50
              transition-all
              duration-300
              inline-block
            "
          >
            Join the Club
          </motion.a>
        </ScrollReveal>

      </div>
    </section>
  );
}