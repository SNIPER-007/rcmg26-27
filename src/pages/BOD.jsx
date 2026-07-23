import PageTransition from "../components/animations/PageTransition";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import { motion } from "framer-motion";

const communityService = [
  {
    name: "Hraday Karani",
    position: "Chairman",
    image: "/images/team/hraday.png",
  },
  {
    name: "Hitanshee",
    position: "Director",
    image: "/images/team/hitanshee.png",
  },
  {
    name: "Position Available",
    position: "Vacant",
    image: "/images/team/placeholder.png",
  },
];

const clubService = [
  {
    name: "Yaj",
    position: "Director",
    image: "/images/team/yaj.png",
  },
  {
    name: "Eshva",
    position: "Director",
    image: "/images/team/eshva.png",
  },
  {
    name: "Simran",
    position: "Director",
    image: "/images/team/simran.png",
  },
];

const sports = [
  {
    name: "Siddhesh Dicholkar",
    position: "Chairman",
    image: "/images/team/siddhesh.png",
  },
  {
    name: "Atharva",
    position: "Director",
    image: "/images/team/atharva.png",
  },
  {
    name: "Position Available",
    position: "Vacant",
    image: "/images/team/placeholder.png",
  },
];

const professionalDevelopment = [
  {
    name: "Gauri Pawaskar",
    position: "Chairwoman",
    image: "/images/team/gauri.jpeg",
  },
  {
    name: "Sneha",
    position: "Director",
    image: "/images/team/sneha.png",
  },
  {
    name: "Position Available",
    position: "Vacant",
    image: "/images/team/placeholder.png",
  },
];

const entrepreneurshipDevelopment = [
  {
    name: "Gauri Pawaskar",
    position: "Chairwoman",
    image: "/images/team/gauri.jpeg",
  },
  {
    name: "Chetan",
    position: "Director",
    image: "/images/team/chetan.png",
  },
  {
    name: "Jill",
    position: "Director",
    image: "/images/team/jill.png",
  },
];

const prm = [
  {
    name: "Ayush Shah",
    position: "Chairman",
    image: "/images/team/ayush.png",
  },
  {
    name: "Chetan",
    position: "Director",
    image: "/images/team/chetan.png",
  },
  {
    name: "Jill",
    position: "Director",
    image: "/images/team/jill.png",
  },
];

const digitalCommunication = [
  {
    name: "Avanti Shirkande",
    position: "Director",
    image: "/images/team/avanti.png",
  },
  {
    name: "Position Available",
    position: "Vacant",
    image: "/images/team/placeholder.png",
  },
];

const editorial = [
  {
    name: "Merrisca",
    position: "Director",
    image: "/images/team/merrisca.png",
  },
  {
    name: "Abhishek",
    position: "Director",
    image: "/images/team/abhishek.png",
  },
];

const internationalService = [
  {
    name: "Avanti Shirkande",
    position: "Director",
    image: "/images/team/avanti.png",
  },
  {
    name: "Merrisca",
    position: "Director",
    image: "/images/team/merrisca.png",
  },
];

const partnersInService = [
  {
    name: "Eshva",
    position: "Director",
    image: "/images/team/eshva.png",
  },
  {
    name: "Hitanshee",
    position: "Director",
    image: "/images/team/hitanshee.png",
  },
];

const socialMedia = [
  {
    name: "Aditya",
    position: "Director",
    image: "/images/team/aditya.png",
  },
  {
    name: "Abhishek",
    position: "Director",
    image: "/images/team/abhishek.png",
  },
  {
    name: "Simran",
    position: "Director",
    image: "/images/team/simran.png",
  },
];

function BODCard({ member, index = 0 }) {
  const isVacant = member.position === "Vacant" || member.name === "Position Available";

  return (
    <ScrollReveal variant="fade-up" delay={index * 0.08} duration={0.6}>
      <motion.div
        whileHover={isVacant ? {} : {
          y: -8,
          scale: 1.015,
          boxShadow: "0 25px 50px -15px rgba(15, 23, 42, 0.08)",
        }}
        className={`group overflow-hidden bg-white border border-black/5 transition-all duration-500 rounded-[32px] shadow-sm ${
          isVacant ? "opacity-60" : ""
        }`}
      >
        <div className="overflow-hidden aspect-square relative bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isVacant ? "" : "group-hover:scale-105"
            }`}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/600x600/e2e8f0/475569?text=RCMG+BOD";
            }}
          />
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            {member.position}
          </p>

          <h3 className="mt-2 text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-tight">
            {member.name}
          </h3>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function AvenueSection({ title, members, isOdd = false }) {
  return (
    <section className={`py-20 border-t border-black/5 ${
      isOdd ? "bg-[#f8f6f1]/40" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            {title}
          </h2>
        </ScrollReveal>

        <div
          className={`grid gap-8 max-w-5xl mx-auto ${
            members.length === 2
              ? "md:grid-cols-2 max-w-3xl"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {members.map((member, i) => (
            <BODCard
              key={`${title}-${member.name}`}
              member={member}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BOD() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-16">
        <ScrollReveal variant="fade-up" duration={0.8}>
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
            Leadership Team
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a] tracking-tight">
            Board of Directors
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            The directors driving each avenue and creating impact
            throughout the year.
          </p>
        </ScrollReveal>
      </section>

      {/* Toggle */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        <ScrollReveal variant="scale" duration={0.6} className="flex justify-center">
          <div className="bg-white rounded-full p-2 shadow-sm border border-slate-200 flex gap-2">
            <Link
              to="/core-team"
              className="px-6 py-3 rounded-full text-slate-600 hover:bg-slate-100 transition-all font-medium"
            >
              Core Team
            </Link>

            <button className="px-6 py-3 rounded-full bg-[#0f172a] text-white font-medium cursor-default">
              Board of Directors
            </button>
          </div>
        </ScrollReveal>
      </section>

      <AvenueSection
        title="Community Service"
        members={communityService}
        isOdd={true}
      />

      <AvenueSection
        title="Club Service"
        members={clubService}
        isOdd={false}
      />

      <AvenueSection
        title="Sports"
        members={sports}
        isOdd={true}
      />

      <AvenueSection
        title="Professional Development"
        members={professionalDevelopment}
        isOdd={false}
      />

      <AvenueSection
        title="Entrepreneurship Development"
        members={entrepreneurshipDevelopment}
        isOdd={true}
      />

      <AvenueSection
        title="Public Relations & Marketing"
        members={prm}
        isOdd={false}
      />

      <AvenueSection
        title="Digital Communication"
        members={digitalCommunication}
        isOdd={true}
      />

      <AvenueSection
        title="Editorial"
        members={editorial}
        isOdd={false}
      />

      <AvenueSection
        title="International Service"
        members={internationalService}
        isOdd={true}
      />

      <AvenueSection
        title="Partners In Service"
        members={partnersInService}
        isOdd={false}
      />

      <AvenueSection
        title="Social Media"
        members={socialMedia}
        isOdd={true}
      />
    </PageTransition>
  );
}