import PageTransition from "../components/animations/PageTransition";
import { Trophy, Award, Star, Medal } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";
import ParallaxImage from "../components/ui/ParallaxImage";
import { motion } from "framer-motion";

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
    rank: "#10",
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
      "Contributed towards Zone 3B securing 2nd Runner Up position in District 3141.",
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
        <ScrollReveal variant="fade-up" duration={0.8}>
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
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
              tracking-tight
            "
          >
            Our Achievements
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            Every milestone reflects the dedication, passion and impact
            created by our members, projects and collaborations.
          </p>
        </ScrollReveal>
      </section>
      
      {/* About AARA: Split Layout (TEXT | IMAGE) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-right" duration={0.8}>
              <div className="bg-white rounded-[32px] p-10 md:p-12 border border-black/5 shadow-sm">
                <p className="uppercase tracking-[0.35em] text-xs font-bold text-slate-400">
                  Academy for Awarding Rotaract Achievements
                </p>

                <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
                  What Is AARA?
                </h2>

                <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
                  The Academy for Awarding Rotaract Achievements (AARA) is one
                  of the most prestigious recognitions within Rotaract District
                  3141. It celebrates the year-long efforts of clubs and members
                  across community service, professional development, fellowship,
                  leadership and overall impact.
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
                  Every project, initiative and contribution throughout the year
                  culminates at AARA, where clubs are recognised for their
                  achievements and ranked amongst the leading Rotaract clubs in
                  the district.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-left" duration={0.8}>
              <div className="h-[480px] rounded-[32px] overflow-hidden shadow-lg border border-black/5">
                <ParallaxImage
                  src="/images/gallery/achievements.jpg"
                  alt="AARA Trophy RCMG"
                  containerClassName="w-full h-full"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=AARA+Awards";
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section className="py-24 bg-[#f8f6f1]/50 border-t border-black/5">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              AARA Rankings
            </h2>

            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Over the years, RCMG has consistently been recognised amongst
              the leading Rotaract Clubs in District 3141 through service,
              leadership, fellowship and community impact.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {rankings.map((item, index) => (
              <ScrollReveal
                key={item.year}
                variant="fade-up"
                delay={index * 0.08}
                duration={0.7}
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
                  }}
                  className="
                    bg-white
                    rounded-[28px]
                    p-8 md:p-10
                    shadow-sm
                    border
                    border-black/5
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="min-w-[160px]">
                      <span className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-extrabold text-amber-600 tracking-tight">
                        {item.rank}
                      </h3>

                      <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32 border-t border-black/5">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
            Featured Milestones
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <ScrollReveal
                key={achievement.title}
                variant="fade-up"
                delay={index * 0.08}
                duration={0.6}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -15px rgba(15, 23, 42, 0.08)",
                  }}
                  className="
                    h-full
                    bg-white
                    border
                    border-black/5
                    rounded-[32px]
                    p-8 md:p-10
                    shadow-sm
                    transition-all
                    duration-300
                    flex
                    flex-col
                  "
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#f8f6f1] flex items-center justify-center border border-black/5 mb-6">
                    <Icon
                      size={28}
                      className="text-[#0f172a]"
                    />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">
                    {achievement.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base flex-1">
                    {achievement.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <ScrollReveal variant="scale" duration={0.8}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Building Excellence
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-base md:text-lg">
              Awards are a result of consistent service, leadership
              and the collective effort of every member who contributes
              to the RCMG legacy. Every recognition inspires us to
              dream bigger, serve better and continue building a future
              worthy of the generations that came before us.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}