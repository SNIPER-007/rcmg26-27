import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative px-8 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-slate-300/30 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            uppercase
            tracking-[0.4em]
            text-sm
            text-slate-500
          "
        >
          Rotaract Club of Mumbai Ghatkopar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            mt-8
            text-6xl
            md:text-8xl
            lg:text-[120px]
            font-bold
            leading-none
            text-[#0f172a]
          "
        >
          Building
          <br />
          Communities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-lg
            text-slate-600
          "
        >
          A youth-driven community creating impact through
          leadership, service, fellowship and meaningful experiences.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-[#0f172a]
            text-white
            shadow-lg
          "
        >
          Explore RCMG
        </motion.button>

      </div>
    </section>
  );
}