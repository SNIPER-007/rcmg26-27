import { Users, Briefcase, Handshake, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    icon: Users,
    number: "60+",
    label: "Members",
  },
  {
    icon: Briefcase,
    number: "70+",
    label: "Projects",
  },
  {
    icon: Handshake,
    number: "120+",
    label: "Collaborations",
  },
  {
    icon: Trophy,
    number: "3141",
    label: "District",
  },
];

export default function Stats() {
  return (
    <section className="px-8 py-24 bg-[#f8f6f1]">
      <div className="max-w-6xl mx-auto">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
                }}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  text-center
                  border
                  border-black/5
                  shadow-sm
                  transition-all
                  duration-300
                "
              >
                <Icon
                  size={36}
                  className="
                    mx-auto
                    mb-5
                    text-slate-400
                  "
                />

                <h3 className="text-5xl font-bold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value={stat.number} />
                </h3>

                <p className="mt-3 text-slate-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}