import { motion } from "framer-motion";

const moments = [
  "/images/home/placeholder1.jpg",
  "/images/home/placeholder2.jpg",
  "/images/home/placeholder3.jpg",
  "/images/home/placeholder4.jpg",
  "/images/home/placeholder5.jpg",
];

export default function Moments() {
  return (
    <section className="py-32 px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Our Journey
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#0f172a]">
            Best Moments
          </h2>

        </div>

        <div className="flex gap-8 overflow-x-auto pb-4">

          {moments.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                min-w-[320px]
                h-[420px]
                rounded-[32px]
                overflow-hidden
                bg-white
                shadow-sm
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-full
                  h-full
                  bg-gradient-to-br
                  from-slate-200
                  to-slate-300
                  flex
                  items-center
                  justify-center
                  text-slate-500
                  text-lg
                "
              >
                Moment {index + 1}
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}