import PageTransition from "../components/animations/PageTransition";
import { Users, HeartHandshake, Trophy } from "lucide-react";

const timeline = [
  {
    year: "1987",
    title: "Club Chartered",
    description:
      "The Rotaract Club of Mumbai Ghatkopar began its journey, laying the foundation for decades of service and leadership.",
  },
  {
  year: "1000+",
  title: "Members & Alumni",
  description:
    "Over 1000 Rotaractors have been a part of the RCMG legacy, contributing to communities and professions across the world.",
  },
  {
    year: "Top 3",
    title: "Community Club",
    description:
      "Consistently recognized among the district's leading community-based clubs through impactful projects and initiatives.",
  },
  {
    year: "2023-24",
    title: "District Rank #11",
    description:
      "Ranked 11th among 147 Rotaract Clubs across Mumbai District.",
  },
  {
    year: "2024-25",
    title: "District Rank #16",
    description:
      "Continued district-wide recognition through service, fellowship and leadership.",
  },
  {
  year: "2025-26",
  title: "District Rank",
  description:
    "District ranking to be announced, continuing a tradition of excellence and impact.",
},
{
  year: "2026-27",
  title: "The Legacy Continues",
  description:
    "Building upon nearly four decades of service, leadership and fellowship while inspiring the next generation of changemakers.",
},
];

export default function About() {
  const gallery = [
  {
    image: "/images/gallery/community.jpg",
    title: "Community Service",
    description:
      "Creating meaningful impact through service initiatives and outreach programs.",
  },
  {
    image: "/images/gallery/fellowship.jpg",
    title: "Fellowship",
    description:
      "Building friendships, memories and connections that last beyond Rotaract.",
  },
  {
    image: "/images/gallery/professional.jpg",
    title: "Professional Development",
    description:
      "Equipping members with skills, confidence and opportunities for growth.",
  },
  {
    image: "/images/gallery/sports.jpg",
    title: "Sports",
    description:
      "Promoting teamwork, fitness and healthy competition through sporting events.",
  },
  {
    image: "/images/gallery/international.jpg",
    title: "International Service",
    description:
      "Connecting cultures and communities through global partnerships.",
  },
  {
    image: "/images/gallery/leadership.jpg",
    title: "Leadership",
    description:
      "Providing opportunities to lead projects, teams and initiatives.",
  },
];
  return (
    <PageTransition>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-24 md:pt-48 md:pb-32">

        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-slate-500">
          About Us
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
          Rotaract Club of
          <br />
          Mumbai Ghatkopar
        </h1>

        <p className="mt-8 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
          We are a youth-led community of changemakers committed
          to service, leadership, fellowship and personal growth.
          Through impactful projects and meaningful connections,
          we strive to create positive change within society.
        </p>

      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold text-[#0f172a]">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              RCMG brings together students and young professionals
              who share a passion for leadership, community service,
              networking and creating meaningful impact.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              As a Rotaract club under Rotary International, we
              believe in learning through action and empowering
              young people to lead positive change.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">

            <h3 className="text-2xl font-bold">
              Our Vision
            </h3>

            <p className="mt-4 text-slate-600">
              To empower youth to become leaders who create
              lasting impact through service, innovation and
              collaboration.
            </p>

            <h3 className="text-2xl font-bold mt-10">
              Our Mission
            </h3>

            <p className="mt-4 text-slate-600">
              To provide opportunities for growth, leadership,
              service and fellowship while building stronger
              communities.
            </p>

          </div>

        </div>

      </section>

      {/* Legacy Timeline */}
      <section className="py-28 bg-white">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500 text-center">
            Legacy
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
            Nearly Four Decades Of Impact
          </h2>

          <div className="mt-20 space-y-10">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#f8f6f1]
                  rounded-[28px]
                  p-8 md:p-10
                  border
                  border-black/5
                "
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">

                  <div
                    className="
                      text-2xl
                      md:text-4xl
                      font-bold
                      text-[#0f172a]
                      min-w-[140px]
                    "
                  >
                    {item.year}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>
      
      {/* Gallery */}
<section className="py-28 bg-white">

  <div className="max-w-7xl mx-auto px-6 md:px-8">

    <p className="uppercase tracking-[0.35em] text-sm text-slate-500 text-center">
      Moments
    </p>

    <h2 className="text-4xl md:text-6xl font-bold text-center mt-4">
      Moments That Define Us
    </h2>

    <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto">
      Every project, celebration and initiative adds another chapter
      to the RCMG story.
    </p>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

      {gallery.map((item) => (
        <div
          key={item.title}
          className="
            bg-[#f8f6f1]
            rounded-[28px]
            overflow-hidden
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">
              {item.description}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* Impact */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <h2 className="text-center text-4xl md:text-5xl font-bold">
            Impact At A Glance
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="text-center p-10 rounded-3xl bg-white">
              <Users size={40} className="mx-auto mb-5" />

              <h3 className="text-5xl font-bold">
                60+
              </h3>

              <p className="mt-3 text-slate-500">
                Active Members
              </p>
            </div>

            <div className="text-center p-10 rounded-3xl bg-white">
              <HeartHandshake size={40} className="mx-auto mb-5" />

              <h3 className="text-5xl font-bold">
                70+
              </h3>

              <p className="mt-3 text-slate-500">
                Community Projects
              </p>
            </div>

            <div className="text-center p-10 rounded-3xl bg-white">
              <Trophy size={40} className="mx-auto mb-5" />

              <h3 className="text-5xl font-bold">
                120+
              </h3>

              <p className="mt-3 text-slate-500">
                Collaborations
              </p>
            </div>

          </div>

        </div>

      </section>

    </PageTransition>
  );
}