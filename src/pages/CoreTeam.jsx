import PageTransition from "../components/animations/PageTransition";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import { motion } from "framer-motion";

const president = {
  name: "Chittansh Pancholi",
  position: "President",
  image: "/images/team/chittansh.jpeg",
};

const ipp = {
  name: "Parin Gala",
  position: "Immediate Past President",
  image: "/images/team/parin.JPG",
};

const secretary = {
  name: "Shraddha Sutar",
  position: "Secretary",
  image: "/images/team/shraddha.jpeg",
};

const vicePresidents = [
  {
    name: "Om Walanju",
    position: "Vice President",
    image: "/images/team/om.jpg",
  },
  {
    name: "Triman Oberoi",
    position: "Vice President",
    image: "/images/team/triman.jpeg",
  },
  {
    name: "Yashvi Shah",
    position: "Vice President & Sergeant-at-Arms",
    image: "/images/team/yashvi.png",
  },
];

const jointSecretaries = [
  {
    name: "Prajyot Mahajan",
    position: "Joint Secretary",
    image: "/images/team/prajyot.jpeg",
  },
  {
    name: "Tanishka Chandan",
    position: "Joint Secretary",
    image: "/images/team/tanishka.png",
  },
];

const treasurers = [
  {
    name: "Kunjal Pal",
    position: "Treasurer",
    image: "/images/team/kunjal.jpg",
  },
  {
    name: "Purav Shah",
    position: "Treasurer",
    image: "/images/team/purav.png",
  },
];

const saa = {
  name: "Yashvi Shah",
  position: "Vice President & Sergeant-at-Arms",
  image: "/images/team/yashvi.png",
};

const hrd = [
  {
    name: "Khushi Modi",
    position: "Human Resource Development",
    image: "/images/team/khushi.jpg",
  },
  {
    name: "Sanjana Sardesai",
    position: "Human Resource Development",
    image: "/images/team/sanjana.jpg",
  },
  {
    name: "Sayam Parekh",
    position: "Human Resource Development",
    image: "/images/team/sayam.jpg",
  },
];

const avenues = [
  {
    name: "Ayush Shah",
    position: "Chairman – Public Relations & Marketing",
    image: "/images/team/ayush.png",
  },
  {
    name: "Gauri Pawaskar",
    position: "Chairwoman – A3 Avenue",
    image: "/images/team/gauri.jpeg",
  },
  {
    name: "Hraday Karani",
    position: "Chairman – Community Service",
    image: "/images/team/hraday.png",
  },
  {
    name: "Siddhesh Dicholkar",
    position: "Chairman – Sports Avenue",
    image: "/images/team/siddhesh.png",
  },
];

const advisor = {
  name: "Tisha Kothari",
  position: "Club Advisor",
  image: "/images/team/tisha.jpeg",
};

function TeamCard({ member, featured = false, index = 0 }) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 0.08} duration={0.6}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.015,
          boxShadow: "0 25px 50px -15px rgba(15, 23, 42, 0.08)",
        }}
        className={`group overflow-hidden bg-white border border-black/5 transition-all duration-500 rounded-[32px] ${
          featured
            ? "shadow-md ring-1 ring-amber-500/20 bg-gradient-to-b from-white to-amber-50/10"
            : "shadow-sm"
        }`}
      >
        <div className="overflow-hidden aspect-square relative bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/600x600/e2e8f0/475569?text=RCMG+Team";
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

export default function CoreTeam() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-16">
        <ScrollReveal variant="fade-up" duration={0.8}>
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
            Leadership Team
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a] tracking-tight">
            Meet The Team
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            Behind every project, initiative and achievement is a team
            of passionate leaders committed to service, fellowship and
            impact.
          </p>
        </ScrollReveal>
      </section>

      {/* Team Toggle */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        <ScrollReveal variant="scale" duration={0.6} className="flex justify-center">
          <div className="bg-white rounded-full p-2 shadow-sm border border-slate-200 flex gap-2">
            <button
              className="
                px-6
                py-3
                rounded-full
                bg-[#0f172a]
                text-white
                font-medium
                cursor-default
              "
            >
              Core Team
            </button>

            <Link
              to="/bod"
              className="
                px-6
                py-3
                rounded-full
                text-slate-600
                hover:bg-slate-100
                transition-all
                font-medium
              "
            >
              Board of Directors
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Presidential Triad (President, IPP, Secretary) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Executive Office
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TeamCard member={president} featured index={0} />
          <TeamCard member={ipp} featured index={1} />
          <TeamCard member={secretary} featured index={2} />
        </div>
      </section>

      {/* Vice Presidents */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-black/5 bg-[#f8f6f1]/40">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Vice Presidents
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {vicePresidents.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Joint Secretaries */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-black/5 bg-white">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Joint Secretaries
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {jointSecretaries.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Treasurers */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-black/5 bg-[#f8f6f1]/40">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Treasurers
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {treasurers.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Sergeant-at-Arms */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-black/5 bg-white">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Sergeant-at-Arms
          </h2>
        </ScrollReveal>
        <div className="max-w-md mx-auto">
          <TeamCard member={saa} />
        </div>
      </section>

      {/* HRD */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 border-t border-black/5 bg-[#f8f6f1]/40">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Human Resource Development
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hrd.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Chairpersons & Avenue Heads */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 border-t border-black/5 bg-white">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Chairpersons & Avenue Heads
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {avenues.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Club Advisor */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 border-t border-black/5 bg-[#f8f6f1]/40">
        <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
            Club Advisor
          </h2>
        </ScrollReveal>
        <div className="max-w-md mx-auto">
          <TeamCard member={advisor} featured />
        </div>
      </section>
    </PageTransition>
  );
}