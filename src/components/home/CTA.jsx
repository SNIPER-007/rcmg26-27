import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 px-8">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          max-w-6xl
          mx-auto
          rounded-[40px]
          bg-[#0f172a]
          text-white
          text-center
          p-16
        "
      >
        <p className="uppercase tracking-[0.35em] text-sm text-blue-200">
          Join The Movement
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold">
          Ready To Create Impact?
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-300">
          Become part of a community that believes in service,
          leadership, fellowship and growth.
        </p>

        <button
          className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-white
            text-[#0f172a]
            font-semibold
            hover:scale-105
            transition
          "
        >
          Get Involved
        </button>
      </motion.div>

    </section>
  );
}