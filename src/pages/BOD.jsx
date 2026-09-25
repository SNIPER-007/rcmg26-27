import PageTransition from "../components/animations/PageTransition";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import { motion } from "framer-motion";

const communityService = [
  {
    name: "Rtr. Hitanshee Doshi",
    position: "Director",
    image: "/images/team/hitanshee.png",
  },
  {
    name: "Rtr. Yashvi Doshi",
    position: "Director",
    image: "/images/team/yashvidoshi.jpg",
  },
];

const clubService = [
  {
    name: "Rtr. Eshva Padia",
    position: "Director",
    image: "/images/team/eshva.jpg",
  },
  {
    name: "Rtr. Simran Shreya",
    position: "Director",
    image: "/images/team/simran.jpg",
  },
  {
    name: "Rtr. Yaj Shah",
    position: "Director",
    image: "/images/team/yaj.jpg",
  },
];

const sports = [
  {
    name: "Rtr. Naytik Chordiya",
    position: "Director",
    image: "/images/team/naytik.jpg",
  },
  {
    name: "Rtr. Pratham Satra",
    position: "Director",
    image: "/images/team/pratham.jpg",
  },
];

const professionalDevelopment = [
  {
    name: "Rtr. Saikumar Mahale",
    position: "Director",
    image: "/images/team/saikumar.jpg",
  },
  {
    name: "Rtr. Sneha Singh",
    position: "Director",
    image: "/images/team/sneha.jpg",
  },
];

const entrepreneurshipDevelopment = [
  {
    name: "Rtr. Chetan Bhabad",
    position: "Director",
    image: "/images/team/chetan.png",
  },
  {
    name: "Rtr. Jill Shah",
    position: "Director",
    image: "/images/team/jill.jpg",
  },
];

const prm = [
  {
    name: "Rtr. Chetan Bhabad",
    position: "Director",
    image: "/images/team/chetan.png",
  },
  {
    name: "Rtr. Jill Shah",
    position: "Director",
    image: "/images/team/jill.jpg",
  },
];

const digitalCommunication = [
  {
    name: "Rtr. Avanti Shirkande",
    position: "Director",
    image: "/images/team/avanti.jpg",
  },
  {
    name: "Rtr. Harsh Pawar",
    position: "Director",
    image: "/images/team/harsh.jpg",
  },
  {
    name: "Rtr. Tanvi Kadam",
    position: "Director",
    image: "/images/team/tanvi.jpg",
  },
];

const editorial = [
  {
    name: "Rtr. Abhishek Yadav",
    position: "Director",
    image: "/images/team/abhishek.jpg",
  },
  {
    name: "Rtr. Merrisca Pereira",
    position: "Director",
    image: "/images/team/merrisca.jpg",
  },
  {
    name: "Rtr. Najar Balia",
    position: "Director",
    image: "/images/team/najar.jpg",
  },
];

const internationalService = [
  {
    name: "Rtr. Avanti Shirkande",
    position: "Director",
    image: "/images/team/avanti.jpg",
  },
  {
    name: "Rtr. Merrisca Pereira",
    position: "Director",
    image: "/images/team/merrisca.jpg",
  },
];

const partnersInService = [
  {
    name: "Rtr. Eshva Padia",
    position: "Director",
    image: "/images/team/eshva.jpg",
  },
  {
    name: "Rtr. Hitanshee Doshi",
    position: "Director",
    image: "/images/team/hitanshee.png",
  },
];

const socialMedia = [
  {
    name: "Rtr. Abhishek Yadav",
    position: "Director",
    image: "/images/team/abhishek.jpg",
  },
  {
    name: "Rtr. Aditya Hemani",
    position: "Director",
    image: "/images/team/aditya.png",
  },
  {
    name: "Rtr. Simran Shreya",
    position: "Director",
    image: "/images/team/simran.jpg",
  },
];

function BODCard({ member, index = 0 }) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 0.08} duration={0.6}>
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.015,
          boxShadow: "0 25px 50px -15px rgba(15, 23, 42, 0.08)",
        }}
        className="group overflow-hidden bg-white border border-black/5 transition-all duration-500 rounded-[32px] shadow-sm"
      >
        <div className="overflow-hidden aspect-square relative bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      <AvenueSection title="Community Service" members={communityService} isOdd={true} />
      <AvenueSection title="Club Service" members={clubService} isOdd={false} />
      <AvenueSection title="Sports" members={sports} isOdd={true} />
      <AvenueSection title="Professional Development" members={professionalDevelopment} isOdd={false} />
      <AvenueSection title="Entrepreneurship Development" members={entrepreneurshipDevelopment} isOdd={true} />
      <AvenueSection title="Public Relations & Marketing" members={prm} isOdd={false} />
      <AvenueSection title="Digital Communication" members={digitalCommunication} isOdd={true} />
      <AvenueSection title="Editorial" members={editorial} isOdd={false} />
      <AvenueSection title="International Service" members={internationalService} isOdd={true} />
      <AvenueSection title="Partners In Service" members={partnersInService} isOdd={false} />
      <AvenueSection title="Social Media" members={socialMedia} isOdd={true} />
    </PageTransition>
  );
}