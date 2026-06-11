import { motion } from "framer-motion";

const moments = [
  "/images/home/m1.jpg",
  "/images/home/m2.jpg",
  "/images/home/m3.jpg",
  "/images/home/m4.jpg",
  "/images/home/m5.jpg",
];

export default function Moments() {
  const duplicatedMoments = [...moments, ...moments];

  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="uppercase tracking-[0.35em] text-sm text-slate-500 text-center">
          Our Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
          Moments That Define Us
        </h2>

        <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto">
          Memories, impact, friendships and moments that define our journey.
        </p>

      </div>

      <div className="mt-16 overflow-hidden">

        <motion.div
          className="flex gap-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {duplicatedMoments.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                min-w-[320px]
                md:min-w-[500px]
                h-[420px]
                md:h-[520px]
                rounded-[32px]
                overflow-hidden
                shadow-xl
                bg-slate-200
              "
            >
              <img
                src={image}
                alt={`Moment ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                "
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/1200x800/e2e8f0/64748b?text=RCMG+Moment";
                }}
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  text-white
                "
              >
                <p className="text-lg font-semibold">
                  RCMG Memories
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}