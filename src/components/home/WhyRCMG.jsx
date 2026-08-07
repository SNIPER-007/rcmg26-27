import { Users, HeartHandshake, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { FloatingSticker } from "../ui/FloatingDecorations";

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
      <FloatingSticker title="Service Above Self" subtitle="RCMG" className="top-[12%] right-[4%] hidden xl:block" tone="dark" />
      <FloatingSticker title="Award Winning Club" subtitle="Recognition" className="bottom-[12%] left-[4%] hidden xl:block" />

      <div className="max-w-7xl mx-auto relative z-10">

        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16 md:mb-18">
          <p className="section-label mx-auto">
            Why RCMG
          </p>

          <h2 className="section-title mt-5 text-5xl md:text-6xl font-bold">
            More Than A Club
          </h2>

          <p className="body-copy mt-6 max-w-xl mx-auto text-base md:text-lg">
            We provide opportunities to lead, serve, grow and create lasting
            memories while making a real difference in society.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal
                key={feature.title}
                variant={index === 0 ? "fade-left" : index === 1 ? "blur" : "fade-right"}
                delay={index * 0.1}
                duration={0.8}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 32px 64px -18px rgba(15, 23, 42, 0.12)",
                  }}
                  className="
                    h-full
                    bg-[#f8f6f1]/60
                    border
                    border-black/5
                    rounded-[32px]
                    p-8 md:p-9
                    shadow-sm
                    premium-card-soft
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

                  <h3 className="section-title text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="body-copy mt-4 text-sm md:text-base">
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