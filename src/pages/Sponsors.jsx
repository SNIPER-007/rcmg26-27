import PageTransition from "../components/animations/PageTransition";

const currentSponsors = [
  "Labdhi",
  "Roswalt Realty",
  "Enrich",
  "Diced Dynasty",
  "Love Sugar Dough",
  "Case Khazana",
  "Aakar Media",
  "FoodSpot",
  "Prism Optics",
  "Kefi by Palak",
];

const pastSponsors = [
  "Amazon Prime",
  "MidDay Mumbai",
  "Maruti Suzuki",
  "Cadbury",
  "Nestlé",
  "93.5 RED FM",
  "NykaaLand",
  "Freakins India",
  "L'Oréal",
  "Bean Kaffe",
  "Pink Frosting",
  "Laxmi Farsan",
  "Radiant Tattoos",
  "Kandivali Times",
  "Lalta Pav Bhaji",
  "Lens and Specs",
  "Raas Rang Thane",
  "Maggie",
  "Desserts Haven",
  "Art of Badges",
  "Siletta Gold",
  "DigiMart",
  "Prakash Sarees",
  "Vardhaman Group",
];

export default function Sponsors() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">

        {/* Hero */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Partnerships
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a]">
            Sponsors & Partners
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            Every collaboration helps us create greater impact,
            reach more communities and empower more young leaders.
          </p>
        </div>

        {/* Why Partner With RCMG */}
        <div className="mt-24">

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Why Partner With RCMG?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-center text-slate-600">
            For nearly four decades, RCMG has connected brands,
            businesses and organizations with a passionate community
            of young leaders, students and professionals through
            impactful events, projects and district-wide initiatives.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-[28px] p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Brand Visibility
              </h3>

              <p className="mt-4 text-slate-600">
                Reach a diverse audience through events,
                campaigns, digital promotions and community initiatives.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Community Impact
              </h3>

              <p className="mt-4 text-slate-600">
                Associate your brand with meaningful youth-led
                service projects and social initiatives.
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Long-Term Relationships
              </h3>

              <p className="mt-4 text-slate-600">
                Build lasting partnerships with one of Mumbai's
                most active and established Rotaract clubs.
              </p>
            </div>

          </div>

        </div>

        {/* Partnership Opportunities */}
        <div className="mt-28">

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Partnership Opportunities 2026-27
          </h2>

          <div
            className="
              mt-10
              rounded-[32px]
              bg-white
              p-12
              text-center
              shadow-sm
            "
          >
            <p className="text-lg text-slate-600">
              As we begin our 2026-27 journey, we are actively
              seeking sponsors, collaborators and partners who
              share our vision of creating impact, empowering
              youth and building stronger communities.
            </p>

            <p className="mt-4 font-semibold text-[#0f172a]">
              Sponsorship opportunities are now open.
            </p>
          </div>

        </div>

        {/* 2025-26 Sponsors */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            2025-26 Sponsors & Partners
          </h2>

          <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
            Our 2025-26 journey was made possible through the support
            of these valued sponsors and partners.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {currentSponsors.map((sponsor) => (
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

        {/* Past Sponsors */}
        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            Our Extended Partner Network
          </h2>

          <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
            Over the years, numerous brands and organizations have
            been part of the RCMG journey, helping us create
            meaningful impact through events, projects and
            community initiatives.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {pastSponsors.map((sponsor) => (
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

        {/* Stats */}
        <div className="mt-28 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
            <h2 className="text-6xl font-bold text-[#0f172a]">
              120+
            </h2>

            <p className="mt-3 text-slate-600">
              Collaborations & Sponsorships
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
            <h2 className="text-6xl font-bold text-[#0f172a]">
              39+
            </h2>

            <p className="mt-3 text-slate-600">
              Years of Legacy
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 text-center shadow-sm">
            <h2 className="text-6xl font-bold text-[#0f172a]">
              1000+
            </h2>

            <p className="mt-3 text-slate-600">
              Members & Alumni
            </p>
          </div>

        </div>

        {/* CTA */}
        <div
          className="
            mt-24
            bg-[#0f172a]
            text-white
            rounded-[40px]
            p-12 md:p-16
            text-center
          "
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Partner With A Legacy
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-300">
            As we begin our 2026-27 journey, we welcome sponsors,
            collaborators and partners who wish to create meaningful
            impact alongside one of Mumbai's most active Rotaract clubs.
          </p>

          <a
  href="https://wa.me/917738969033?text=Hey!%20I%20am%20interested%20in%20learning%20more%20about%20the%20Rotaract%20Club%20of%20Mumbai%20Ghatkopar.%20I%20would%20love%20to%20explore%20a%20collaboration%20or%20sponsorship%20opportunity%20with%20your%20club."
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block
    mt-10
    bg-white
    px-8
    py-4
    rounded-full
    font-semibold
    text-lg
    border
    border-[#0f172a]
  "
  style={{ color: "#0f172a" }}
>
  Partner With RCMG
</a>

        </div>

      </div>
    </PageTransition>
  );
}