import PageTransition from "../components/animations/PageTransition";

const sponsors = [
  "Amazon Prime",
  "MidDay Mumbai",
  "Cadbury",
  "Maruti Suzuki",
  "Nestle",
  "93.5 RED FM",
  "NykaaLand",
  "Freakins India",
  "L'Oreal",
  "Bean Kaffe",
  "Foodspot",
  "Pink Frosting",
];

export default function Sponsors() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-8 py-32">

        {/* Hero */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Partnerships
          </p>

          <h1 className="mt-4 text-6xl md:text-7xl font-bold text-[#0f172a]">
            Sponsors & Partners
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            Every collaboration helps us create greater impact,
            reach more communities and empower more young leaders.
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">
            Current Sponsors
          </h2>

          <div
            className="
              mt-8
              rounded-[32px]
              bg-white
              p-12
              text-center
              shadow-sm
            "
          >
            <p className="text-slate-500">
              Sponsorship opportunities are currently open.
            </p>

            <p className="mt-3 text-lg font-medium">
              Become our next partner.
            </p>
          </div>
        </div>

        {/* Past Sponsors */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center">
            Past Partners
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {sponsors.map((sponsor) => (
              <div
                key={sponsor}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-sm
                  hover:-translate-y-2
                  transition-all
                "
              >
                {sponsor}
              </div>
            ))}

          </div>
        </div>

        {/* Collaboration Stat */}
        <div className="mt-28 text-center">
          <h2 className="text-7xl font-bold text-[#0f172a]">
            120+
          </h2>

          <p className="mt-4 text-slate-600">
            Collaborations & Sponsorships
          </p>
        </div>

        {/* CTA */}
        <div
          className="
            mt-24
            bg-[#0f172a]
            text-white
            rounded-[40px]
            p-16
            text-center
          "
        >
          <h2 className="text-5xl font-bold">
            Become A Partner
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-300">
            Join us in creating meaningful impact through
            youth-led initiatives and community projects.
          </p>

          <button
            className="
              mt-10
              bg-white
              text-[#0f172a]
              px-8
              py-4
              rounded-full
              font-semibold
            "
          >
            Partner With RCMG
          </button>
        </div>

      </div>
    </PageTransition>
  );
}