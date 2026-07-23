import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="py-32 px-8 bg-[#f8f6f1]">

      <ScrollReveal variant="scale" duration={0.8}>
        <div className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          bg-[#0f172a]
          text-white
          text-center
          p-16
          relative
          overflow-hidden
          shadow-xl
        "
        >
          {/* Subtle internal glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-800/50 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-amber-200/90">
              Join The Movement
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Ready To Create Impact?
            </h2>

            <p className="max-w-xl mx-auto mt-6 text-slate-300 leading-relaxed text-sm md:text-base">
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
                  hover:shadow-xl
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