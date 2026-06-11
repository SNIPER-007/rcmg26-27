import PageTransition from "../components/animations/PageTransition";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Zone Achievement",
    description:
      "Contributed towards Zone 3B securing 2nd Runner Up position.",
  },
  {
    icon: Award,
    title: "AARA Recognition",
    description:
      "Secured 16th Rank amongst 147 Rotaract Clubs across Mumbai District.",
  },
  {
    icon: Star,
    title: "ACERS",
    description:
      "Recognized for impactful initiatives, member engagement and consistent service excellence.",
  },
  {
    icon: Medal,
    title: "AARA 2025-26",
    description:
      "District awards, recognitions and rankings to be announced on 11 July 2026.",
  },
  {
    icon: Trophy,
    title: "2026-27 Legacy Continues",
    description:
      "Nearly four decades of excellence have shaped the RCMG legacy. In 2026-27, we continue that journey with the same passion, stronger ambition and an unwavering commitment to raise the bar, create greater impact and leave an even bigger mark on the community we serve.",
  },
];

export default function Achievements() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">

        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-slate-500">
          Recognition & Success
        </p>

        <h1
          className="
            mt-4
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            text-[#0f172a]
            leading-[1.05]
          "
        >
          Our Achievements
        </h1>

        <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
          Every milestone reflects the dedication, passion and impact
          created by our members, projects and collaborations.
        </p>

      </section>

      {/* Achievement Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="
                  bg-white
                  rounded-[32px]
                  p-8 md:p-10
                  shadow-sm
                  hover:-translate-y-2
                  transition-all
                "
              >
                <Icon
                  size={48}
                  className="text-[#0f172a]"
                />

                <h3 className="mt-6 text-2xl md:text-3xl font-bold text-[#0f172a]">
                  {achievement.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* Impact Banner */}
      <section className="bg-[#0f172a] text-white py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Building Excellence
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Awards are a result of consistent service, leadership
            and the collective effort of every member who contributes
            to the RCMG legacy. Every recognition inspires us to
            dream bigger, serve better and continue building a future
            worthy of the generations that came before us.
          </p>

        </div>

      </section>
    </PageTransition>
  );
}