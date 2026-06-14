import PageTransition from "../components/animations/PageTransition";

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
    image: "/images/team/sayam.png",
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

function TeamCard({ member, featured = false }) {
  return (
    <div
      className={`bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        featured
          ? "rounded-3xl shadow-lg ring-2 ring-[#0f172a]/10"
          : "rounded-3xl shadow-sm"
      }`}
    >
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

export default function CoreTeam() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-24">
        <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
          Leadership Team
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a]">
          Meet The Team
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
          Behind every project, initiative and achievement is a team
          of passionate leaders committed to service, fellowship and
          impact.
        </p>
      </section>

      {/* President */}
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <TeamCard member={president} featured />
      </section>

      {/* IPP */}
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <TeamCard member={ipp} featured />
      </section>

      {/* Secretary */}
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <TeamCard member={secretary} featured />
      </section>

      {/* Vice Presidents */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Vice Presidents
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {vicePresidents.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Joint Secretaries */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Joint Secretaries
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {jointSecretaries.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Treasurers */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Treasurers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {treasurers.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Sergeant-at-Arms */}
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Sergeant-at-Arms
        </h2>

        <TeamCard member={saa} />
      </section>

      {/* HRD */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-4xl font-bold text-center">
          Human Resource Development
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {hrd.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Chairpersons & Avenue Heads */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-4xl font-bold text-center">
          Chairpersons & Avenue Heads
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {avenues.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>
      </section>

      {/* Club Advisor */}
      <section className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Club Advisor
        </h2>

        <TeamCard member={advisor} featured />
      </section>
    </PageTransition>
  );
}