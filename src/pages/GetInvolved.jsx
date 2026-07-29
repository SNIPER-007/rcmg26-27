import PageTransition from "../components/animations/PageTransition";
import {
  Users,
  Trophy,
  HeartHandshake,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";
import ParallaxImage from "../components/ui/ParallaxImage";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const experiences = [
  "Community Service",
  "Professional Development",
  "Sports",
  "International Service",
  "District Events",
  "Leadership Opportunities",
];

export default function GetInvolved() {
  const steps = [
    { title: "Join RCMG", desc: "Express interest and attend our general meetings." },
    { title: "Attend Events", desc: "Participate in social service, sports and fellowship events." },
    { title: "Lead Projects", desc: "Take charge of events and spearhead service projects." },
    { title: "Become A Director", desc: "Step up to manage a dedicated avenue of service." },
    { title: "Become A Leader", desc: "Guide the club as part of the core executive team." },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <ScrollReveal variant="fade-up" duration={0.8}>
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
            Join The Movement
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
            Get Involved
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            Join a community of passionate young leaders who believe in
            creating impact, building friendships and growing together.
          </p>
        </ScrollReveal>
      </section>

      {/* Why Join RCMG */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
            Why Join RCMG?
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Leadership",
              desc: "Develop confidence and leadership skills through real-world projects and responsibilities."
            },
            {
              icon: HeartHandshake,
              title: "Service",
              desc: "Create meaningful impact through community projects, initiatives and social causes."
            },
            {
              icon: Users,
              title: "Fellowship",
              desc: "Build lifelong friendships and connections with like-minded individuals."
            },
            {
              icon: Briefcase,
              title: "Professional Growth",
              desc: "Enhance communication, networking and professional development skills."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
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
                  className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm h-full flex flex-col transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#f8f6f1] border border-black/5 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#0f172a]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base flex-1">
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Split layout: What you'll experience */}
      <section className="bg-white py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-right" duration={0.8}>
                <div className="h-[480px] rounded-[32px] overflow-hidden shadow-lg border border-black/5">
                  <ParallaxImage
                    src="/images/gallery/leadership.jpg"
                    alt="Volunteering experience"
                    containerClassName="w-full h-full"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=RCMG+Experience";
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" duration={0.8}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
                  What You'll Experience
                </h2>

                <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
                  From service projects and leadership opportunities to
                  district events and lifelong friendships, every experience
                  at RCMG helps you grow personally and professionally.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {experiences.map((item, i) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-[#f8f6f1]/60 border border-black/5 rounded-2xl p-5 text-left transition-all font-semibold text-[#0f172a]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Connected Journey Section */}
      <section className="py-32 bg-[#f8f6f1]/40 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your RCMG Journey
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-xl mx-auto">
              How you grow from a guest into a district leader.
            </p>
          </ScrollReveal>

          {/* Horizontal / Vertical Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line (Desktop) */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-200 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, index) => (
                <ScrollReveal
                  key={step.title}
                  variant="fade-up"
                  delay={index * 0.1}
                  duration={0.6}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step bubble */}
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#0f172a", color: "#ffffff" }}
                    className="w-14 h-14 rounded-full bg-white border-2 border-[#0f172a] text-[#0f172a] flex items-center justify-center font-bold text-lg shadow-sm transition-colors duration-300"
                  >
                    {index + 1}
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold text-[#0f172a] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Stats with Counters */}
      <section className="pb-32 bg-white pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal variant="fade-up" delay={0} duration={0.8}>
              <div className="bg-[#f8f6f1]/60 border border-black/5 rounded-[32px] p-10 text-center shadow-sm">
                <h2 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="1000+" />
                </h2>

                <p className="mt-4 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  Members & Alumni
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1} duration={0.8}>
              <div className="bg-[#f8f6f1]/60 border border-black/5 rounded-[32px] p-10 text-center shadow-sm">
                <h2 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="18+" />
                </h2>

                <p className="mt-4 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  Years of Impact
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} duration={0.8}>
              <div className="bg-[#f8f6f1]/60 border border-black/5 rounded-[32px] p-10 text-center shadow-sm">
                <h2 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="2007" />
                </h2>

                <p className="mt-4 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  Club Chartered
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 md:px-8 bg-white">
        <ScrollReveal variant="scale" duration={0.8}>
          <div
            className="
              max-w-6xl
              mx-auto
              rounded-[40px]
              bg-[#0f172a]
              text-white
              p-12 md:p-16
              text-center
              shadow-xl
              relative
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-slate-800/40 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <p className="uppercase tracking-[0.35em] text-xs font-bold text-amber-200/90">
                Join The Movement
              </p>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
                Ready To Join RCMG?
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-slate-300 leading-relaxed text-sm md:text-base">
                Join a legacy that has empowered 1000+ members since 2007.
                Become part of a community that believes in leadership,
                service, fellowship and creating meaningful impact.
              </p>

              <a
                href="https://wa.me/917738969033?text=Hey!%20I%20came%20across%20RCMG%20through%20your%20website%20and%20would%20love%20to%20know%20more%20about%20joining%20the%20Rotaract%20Club%20of%20Mumbai%20Ghatkopar%20and%20the%20membership%20process."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-10
                  py-5
                  rounded-full
                  bg-white
                  font-bold
                  shadow-lg
                  hover:scale-104
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
                style={{ color: "#0f172a" }}
              >
                <span style={{ color: "#0f172a" }}>
                  Join Via WhatsApp
                </span>

                <ArrowRight
                  size={18}
                  style={{ color: "#0f172a" }}
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </PageTransition>
  );
}