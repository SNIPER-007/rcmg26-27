import { Users, Briefcase, Handshake, Trophy } from "lucide-react";

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
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-sm
                  hover:-translate-y-2
                  transition
                "
              >
                <Icon
                  size={36}
                  className="
                    mx-auto
                    mb-4
                    text-[#0f172a]
                  "
                />

                <h3 className="text-5xl font-bold">
                  {stat.number}
                </h3>

                <p className="mt-3 text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}