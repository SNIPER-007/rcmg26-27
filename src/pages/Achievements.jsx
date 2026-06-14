import PageTransition from "../components/animations/PageTransition";
import { Trophy, Award, Star, Medal } from "lucide-react";

const rankings = [
  {
    year: "2023-24",
    rank: "#11",
    description:
      "Ranked 11th amongst 147 Rotaract Clubs across District 3141.",
  },
  {
    year: "2024-25",
    rank: "#16",
    description:
      "Continued district-wide recognition through impactful service, fellowship and leadership.",
  },
  {
    year: "2025-26",
    rank: "TBA",
    description:
      "District rankings and recognitions to be announced on 11 July 2026.",
  },
  {
    year: "2026-27",
    rank: "The Legacy Continues",
    description:
      "Building upon decades of excellence while striving to reach even greater heights.",
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Zone Achievement",
    description:
      "Contributed towards Zone 3B securing 2nd Runner Up position.",
  },
  {
    icon: Award,
    title: "2024-25 District Ranking",
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
    title: "Awaiting AARA 2025-26",
    description:
      "District awards, recognitions and rankings to be announced on 11 July 2026.",
  },
  {
    icon: Trophy,
    title: "The Legacy Continues",
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
      
      {/* About AARA */}
<section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">

  <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm">

    <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
      Academy for Awarding Rotaract Achievements
    </p>

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a]">
      What Is AARA?
    </h2>

    <p className="mt-6 text-slate-600 leading-relaxed text-lg">
      The Academy for Awarding Rotaract Achievements (AARA) is one
      of the most prestigious recognitions within Rotaract District
      3141. It celebrates the year-long efforts of clubs and members
      across community service, professional development, fellowship,
      leadership and overall impact.
    </p>

    <p className="mt-4 text-slate-600 leading-relaxed text-lg">
      Every project, initiative and contribution throughout the year
      culminates at AARA, where clubs are recognised for their
      achievements and ranked amongst the leading Rotaract clubs in
      the district.
    </p>

  </div>

</section>

{/* Rankings */}
<section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">

  <h2 className="text-center text-4xl md:text-5xl font-bold">
    AARA Rankings
  </h2>

  <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto">
    Over the years, RCMG has consistently been recognised amongst
    the leading Rotaract Clubs in District 3141 through service,
    leadership, fellowship and community impact.
  </p>

  <div className="mt-16 space-y-6">

    {rankings.map((item) => (
      <div
        key={item.year}
        className="
          bg-white
          rounded-[28px]
          p-8 md:p-10
          shadow-sm
        "
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">

          <div className="min-w-[160px]">
            <p className="text-3xl font-bold">
              {item.year}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0f172a]">
              {item.rank}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.description}
            </p>
          </div>

        </div>
      </div>
    ))}

  </div>

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