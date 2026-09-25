import PageTransition from "../components/animations/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import { motion } from "framer-motion";

// 2026-27 Partners (New Term)
const sponsors2026_27 = [
  "Equity Engineers",
];

// 2025-26 Partners
const sponsors2025_26 = [
  "Roswalt Realty",
  "Labdhi Group",
  "Enrich Salons",
  "Diced Dynasty",
  "Love Sugar Dough",
  "Case Khazana",
  "Aakar Media",
  "FoodSpot",
  "Prism Optics",
  "Kefi by Palak",
];

// Past network
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

// Reusable typographic logo card matching Apple/Stripe partner grids
function SponsorLogoCard({ name, index = 0 }) {
  // Generate a distinct typographic style based on the name to simulate custom brand logos
  const getBrandLogoStyle = (brandName) => {
    const cleanName = brandName.trim();
    if (cleanName.includes(" ")) {
      const parts = cleanName.split(" ");
      return (
        <span className="flex items-center justify-center gap-1 font-sans">
          <span className="font-extrabold tracking-tight text-[#0f172a] uppercase group-hover:text-slate-800 transition-colors">{parts[0]}</span>
          <span className="font-light text-slate-400 group-hover:text-[#0f172a] transition-colors">{parts[1]}</span>
        </span>
      );
    }
    
    if (cleanName.length <= 6) {
      return (
        <span className="font-serif italic tracking-[0.2em] font-black uppercase text-[#0f172a] group-hover:text-amber-600 transition-colors">
          {cleanName}
        </span>
      );
    }
    
    return (
      <span className="font-mono tracking-widest font-bold uppercase text-slate-700 group-hover:text-[#0f172a] transition-colors">
        {cleanName}
      </span>
    );
  };

  return (
    <ScrollReveal variant="scale" delay={index * 0.05} duration={0.5}>
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.03,
          borderColor: "rgba(15, 23, 42, 0.15)",
          boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
        }}
        className="
          group
          h-28
          bg-white
          border
          border-black/5
          rounded-2xl
          flex
          items-center
          justify-center
          px-6
          py-4
          transition-all
          duration-300
          relative
          overflow-hidden
        "
      >
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0f172a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        
        <div className="relative z-10 text-center text-lg md:text-xl">
          {getBrandLogoStyle(name)}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Sponsors() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">

        {/* Hero */}
        <div className="text-center">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
              Partnerships
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a] tracking-tight">
              Sponsors & Partners
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600 leading-relaxed text-base md:text-lg">
              Every collaboration helps us create greater impact,
              reach more communities and empower more young leaders.
            </p>
          </ScrollReveal>
        </div>

        {/* Why Partner With RCMG */}
        <div className="mt-28">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why Partner With RCMG?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-center text-slate-600 leading-relaxed text-base md:text-lg">
              For nearly two decades, RCMG has connected brands,
              businesses and organizations with a passionate community
              of young leaders, students and professionals through
              impactful events, projects and district-wide initiatives.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <ScrollReveal variant="fade-up" delay={0} duration={0.6}>
              <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  Brand Visibility
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  Reach a diverse audience through events,
                  campaigns, digital promotions and community initiatives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1} duration={0.6}>
              <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  Community Impact
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  Associate your brand with meaningful youth-led
                  service projects and social initiatives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} duration={0.6}>
              <div className="bg-white rounded-[28px] p-8 border border-black/5 shadow-sm h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  Long-Term Relationships
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  Build lasting partnerships with one of Mumbai's
                  most active and established Rotaract clubs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Current Sponsors 2026-27 */}
        <div className="mt-32">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center">
            <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Current Sponsors 2026-27
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
              Leading organizations partnering with us for our current active term.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {sponsors2026_27.map((sponsor, i) => (
              <SponsorLogoCard
                key={`2026-27-${sponsor}`}
                name={sponsor}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* 2025-26 Sponsors */}
        <div className="mt-32">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center">
            <h2 className="text-4xl font-bold text-center text-[#0f172a] tracking-tight">
              2025-26 Sponsors & Partners
            </h2>

            <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
              Valued organizations that supported our mission during the 2025-26 term.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {sponsors2025_26.map((sponsor, i) => (
              <SponsorLogoCard
                key={`2025-26-${sponsor}`}
                name={sponsor}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Past Sponsors */}
        <div className="mt-32">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center">
            <h2 className="text-4xl font-bold text-[#0f172a] tracking-tight">
              Our Extended Partner Network
            </h2>

            <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
              Numerous brands and organizations that have partnered with RCMG over the years.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {pastSponsors.map((sponsor, i) => (
              <SponsorLogoCard
                key={`past-${sponsor}`}
                name={sponsor}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal variant="scale" duration={0.8} className="mt-32">
          <div
            className="
              bg-[#0f172a]
              text-white
              rounded-[40px]
              p-12 md:p-16
              text-center
              relative
              overflow-hidden
              shadow-xl
            "
          >
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-slate-800/40 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Partner With A Legacy
              </h2>

              <p className="max-w-2xl mx-auto mt-6 text-slate-300 leading-relaxed text-sm md:text-base">
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
                  px-10
                  py-5
                  rounded-full
                  font-bold
                  text-lg
                  shadow-lg
                  hover:scale-104
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
                style={{ color: "#0f172a" }}
              >
                Partner With RCMG
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </PageTransition>
  );
}