import PageTransition from "../components/animations/PageTransition";
import { Link } from "react-router-dom";

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

function BODCard({ member }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full aspect-square object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/600x600/e2e8f0/475569?text=RCMG";
        }}
      />

      <div className="p-6">
        <p className="text-sm uppercase tracking-wider text-slate-500">
          {member.position}
        </p>

        <h3 className="mt-2 text-xl md:text-2xl font-bold text-[#0f172a]">
          {member.name}
        </h3>
      </div>
    </div>
  );
}

function AvenueSection({ title, members }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        {title}
      </h2>

      <div
        className={`grid gap-8 ${
          members.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {members.map((member) => (
          <BODCard
            key={`${title}-${member.name}`}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}

export default function BOD() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-24">
        <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
          Leadership Team
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a]">
          Board of Directors
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
          The directors driving each avenue and creating impact
          throughout the year.
        </p>
      </section>

      {/* Toggle */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-12">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-2 shadow-sm border border-slate-200 flex gap-2">
            <Link
              to="/core-team"
              className="px-6 py-3 rounded-full text-slate-600 hover:bg-slate-100 transition-all font-medium"
            >
              Core Team
            </Link>

            <button className="px-6 py-3 rounded-full bg-[#0f172a] text-white font-medium">
              Board of Directors
            </button>
          </div>
        </div>
      </section>

      <AvenueSection
        title="Community Service"
        members={communityService}
      />

      <AvenueSection
        title="Club Service"
        members={clubService}
      />

      <AvenueSection
        title="Sports"
        members={sports}
      />

      <AvenueSection
        title="Professional Development"
        members={professionalDevelopment}
      />

      <AvenueSection
        title="Entrepreneurship Development"
        members={entrepreneurshipDevelopment}
      />

      <AvenueSection
        title="Public Relations & Marketing"
        members={prm}
      />

      <AvenueSection
        title="Digital Communication"
        members={digitalCommunication}
      />

      <AvenueSection
        title="Editorial"
        members={editorial}
      />

      <AvenueSection
        title="International Service"
        members={internationalService}
      />

      <AvenueSection
        title="Partners In Service"
        members={partnersInService}
      />

      <AvenueSection
        title="Social Media"
        members={socialMedia}
      />
    </PageTransition>
  );
}