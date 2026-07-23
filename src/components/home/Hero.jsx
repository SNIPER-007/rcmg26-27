import { motion } from "framer-motion";
import { Spark, DotGrid, RotaryGear, CurvedLine } from "../ui/FloatingDecorations";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // out-expo
      },
    },
  };

  return (
    <section className="relative px-8 py-36 md:py-48 overflow-hidden bg-[#f8f6f1]">
      
      {/* Premium Background Mesh & Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e2ded5]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100/25 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Floating Graphics */}
      <RotaryGear className="absolute top-[12%] right-[-50px] md:right-[5%] opacity-40" />
      <DotGrid className="absolute left-[8%] top-[25%] opacity-30 hidden md:block" />
      <Spark className="absolute left-[12%] bottom-[20%] opacity-40 text-amber-600/30" />
      <Spark className="absolute right-[15%] top-[20%] opacity-40 text-slate-800/30" delay={2} />
      <CurvedLine className="absolute bottom-[10%] left-[5%] opacity-20 hidden lg:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
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
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="
            mt-10
            text-6xl
            md:text-8xl
            lg:text-[120px]
            font-bold
            leading-[0.95]
            tracking-tight
            text-[#0f172a]
            max-w-4xl
          "
        >
          Building
          <br />
          <span className="bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#475569] bg-clip-text text-transparent">
            Impact
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
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
        </motion.p>

        <motion.div
          variants={itemVariants}
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
              bg-[#0f172a]
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
        </motion.div>

      </motion.div>
    </section>
  );
}