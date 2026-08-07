import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-28 px-8 bg-[#f8f6f1]">

      <ScrollReveal variant="scale" duration={0.8}>
        <div className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          bg-[#0f172a]
          text-white
          text-center
          p-14 md:p-18
          relative
          overflow-hidden
          shadow-xl
        "
        >
          {/* Subtle internal glow */}
          <div className="absolute top-0 right-0 w-[340px] h-[340px] bg-slate-800/45 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_24%)] pointer-events-none" />
          <div className="absolute top-6 left-6 h-24 w-24 rounded-full border border-white/10 opacity-80 pointer-events-none" />
          <div className="absolute bottom-6 right-8 h-32 w-32 rounded-full border border-white/10 opacity-70 pointer-events-none" />
          <div className="absolute top-10 right-10 hidden md:block rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-white/70 backdrop-blur-sm bg-white/5">
            Rotary inspired impact
          </div>
          
          <div className="relative z-10">
            <p className="section-label mx-auto border-white/10 bg-white/10 !text-white/85">
              Join The Movement
            </p>

            <h2 className="section-title mt-6 text-4xl md:text-6xl font-bold !text-white tracking-[-0.04em] leading-[1.02]">
              Ready To Create Impact?
            </h2>

            <p className="body-copy max-w-xl mx-auto mt-6 text-sm md:text-base !text-slate-300">
              Become part of a community that believes in service,
              leadership, fellowship and growth.
            </p>

            <Link
              to="/get-involved"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-10
                  px-10
                  py-5
                  rounded-full
                  bg-white
                  text-[#0f172a]
                  font-bold
                  shadow-lg
                  cursor-pointer
                  transition-shadow
                  duration-300
                  hover:shadow-xl premium-button
                "
              >
                Get Involved
              </motion.button>
            </Link>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}