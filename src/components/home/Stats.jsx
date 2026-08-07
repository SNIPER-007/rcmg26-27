import { Users, Briefcase, Handshake, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import ScrollReveal from "../ui/ScrollReveal";

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

        <ScrollReveal variant="fade-up" duration={0.75} className="mb-10 text-center">
          <p className="section-label mx-auto">
            RCMG Snapshot
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <ScrollReveal
                key={stat.label}
                variant={index % 2 === 0 ? "fade-up" : "scale"}
                delay={index * 0.08}
                duration={0.7}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 24px 50px -18px rgba(15, 23, 42, 0.12)",
                  }}
                  className="
                    premium-card-soft
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
                      text-slate-500
                    "
                  />

                  <h3 className="metric-number text-5xl font-bold">
                    <AnimatedCounter value={stat.number} />
                  </h3>

                  <p className="mt-3 caption-copy text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}