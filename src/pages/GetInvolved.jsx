import PageTransition from "../components/animations/PageTransition";
import {
  Users,
  Trophy,
  HeartHandshake,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const experiences = [
  "Community Service",
  "Professional Development",
  "Sports",
  "International Service",
  "District Events",
  "Leadership Opportunities",
];

export default function GetInvolved() {
  return (
    <PageTransition>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">

        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-slate-500">
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
          "
        >
          Get Involved
        </h1>

        <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
          Join a community of passionate young leaders who believe in
          creating impact, building friendships and growing together.
        </p>

      </section>

      {/* Why Join RCMG */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
          Why Join RCMG?
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <Users size={42} />

            <h3 className="mt-6 text-2xl font-bold">
              Leadership
            </h3>

            <p className="mt-4 text-slate-600">
              Develop confidence and leadership skills through
              real-world projects and responsibilities.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <HeartHandshake size={42} />

            <h3 className="mt-6 text-2xl font-bold">
              Service
            </h3>

            <p className="mt-4 text-slate-600">
              Create meaningful impact through community projects,
              initiatives and social causes.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <Users size={42} />

            <h3 className="mt-6 text-2xl font-bold">
              Fellowship
            </h3>

            <p className="mt-4 text-slate-600">
              Build lifelong friendships and connections with
              like-minded individuals.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <Briefcase size={42} />

            <h3 className="mt-6 text-2xl font-bold">
              Professional Growth
            </h3>

            <p className="mt-4 text-slate-600">
              Enhance communication, networking and professional
              development skills.
            </p>
          </div>

        </div>

      </section>

      {/* What You'll Experience */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2 className="text-center text-4xl md:text-5xl font-bold">
            What You'll Experience
          </h2>

          <p className="mt-6 text-center text-slate-600 max-w-3xl mx-auto">
            From service projects and leadership opportunities to
            district events and lifelong friendships, every experience
            at RCMG helps you grow personally and professionally.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            {experiences.map((item) => (
              <div
                key={item}
                className="
                  bg-[#f8f6f1]
                  rounded-[28px]
                  p-8
                  text-center
                  shadow-sm
                  hover:-translate-y-2
                  transition-all
                "
              >
                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Journey */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Your RCMG Journey
          </h2>

          <div className="grid md:grid-cols-5 gap-8 mt-16">

            {[
              "Join RCMG",
              "Attend Events",
              "Lead Projects",
              "Become A Director",
              "Become A Leader",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0f172a] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Legacy Stats */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
              <h2 className="text-6xl font-bold text-[#0f172a]">
                1000+
              </h2>

              <p className="mt-3 text-slate-600">
                Members & Alumni
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
              <h2 className="text-6xl font-bold text-[#0f172a]">
                39+
              </h2>

              <p className="mt-3 text-slate-600">
                Years of Impact
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
              <h2 className="text-5xl font-bold text-[#0f172a]">
  1987
</h2>

<p className="mt-3 text-slate-600">
  Club Chartered
</p>

              <p className="mt-3 text-slate-600">
                Building Leaders
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24 px-6 md:px-8">

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
          "
        >
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-blue-200">
            Join The Movement
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Ready To Join RCMG?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Join a legacy that has empowered 1000+ members since 1987.
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
              px-8
              py-4
              rounded-full
              bg-white
              font-semibold
              shadow-lg
              hover:scale-105
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

      </section>

    </PageTransition>
  );
}