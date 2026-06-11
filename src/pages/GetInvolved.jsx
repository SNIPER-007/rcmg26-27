import PageTransition from "../components/animations/PageTransition";
import {
  Users,
  Trophy,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

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

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <Users size={42} />
            <h3 className="mt-6 text-2xl font-bold">
              Network
            </h3>

            <p className="mt-4 text-slate-600">
              Meet students, professionals and leaders from across
              the city and district.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <Trophy size={42} />
            <h3 className="mt-6 text-2xl font-bold">
              Grow
            </h3>

            <p className="mt-4 text-slate-600">
              Build leadership, communication and project management
              skills through real experiences.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <HeartHandshake size={42} />
            <h3 className="mt-6 text-2xl font-bold">
              Serve
            </h3>

            <p className="mt-4 text-slate-600">
              Participate in projects that positively impact society
              and local communities.
            </p>
          </div>

        </div>

      </section>

      {/* Journey */}
      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Your Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0f172a] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Connect
              </h3>

              <p className="mt-3 text-slate-600">
                Reach out and learn more about the club.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0f172a] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Participate
              </h3>

              <p className="mt-3 text-slate-600">
                Attend meetings, projects and events.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0f172a] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Lead
              </h3>

              <p className="mt-3 text-slate-600">
                Take initiative and create meaningful impact.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
<section className="py-24 px-6 md:px-8">

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
      Become part of a community that believes in leadership,
      service, fellowship and creating meaningful impact.
    </p>

    <a
  href="https://wa.me/917738969033?text=Hey,%20I%20came%20across%20RCMG%20through%20your%20website%20and%20would%20love%20to%20know%20more%20about%20joining."
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
  style={{
    color: "#0f172a",
  }}
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