import { Users, HeartHandshake, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  {
    icon: Users,
    title: "Community",
    description:
      "Build lifelong friendships and become part of a vibrant network of young leaders.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description:
      "Create meaningful impact through projects that uplift communities and inspire change.",
  },
  {
    icon: Trophy,
    title: "Leadership",
    description:
      "Develop confidence, communication, management and leadership skills through real experiences.",
  },
];

export default function WhyRCMG() {
  return (
    <section id="why-rcmg" className="py-32 px-8 bg-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-[#f8f6f1] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
            Why RCMG
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-[#0f172a]">
            More Than A Club
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-slate-600 leading-relaxed text-base md:text-lg">
            We provide opportunities to lead, serve, grow and create lasting
            memories while making a real difference in society.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal
                key={feature.title}
                variant="fade-up"
                delay={index * 0.1}
                duration={0.8}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 30px 60px -15px rgba(15, 23, 42, 0.08)",
                  }}
                  className="
                    h-full
                    bg-[#f8f6f1]/60
                    border
                    border-black/5
                    rounded-[32px]
                    p-10
                    shadow-sm
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 border border-black/5">
                    <Icon
                      size={28}
                      className="text-[#0f172a]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
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