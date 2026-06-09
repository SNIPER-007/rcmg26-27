import { Users, HeartHandshake, Trophy } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Why RCMG
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-[#0f172a]">
            More Than A Club
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            We provide opportunities to lead, serve, grow and create lasting
            memories while making a real difference in society.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="
                  bg-[#f8f6f1]
                  rounded-[32px]
                  p-10
                  shadow-sm
                  hover:-translate-y-2
                  transition-all
                "
              >
                <Icon
                  size={42}
                  className="text-[#0f172a] mb-6"
                />

                <h3 className="text-2xl font-bold text-[#0f172a]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}