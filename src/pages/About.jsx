import { useState } from "react";
import PageTransition from "../components/animations/PageTransition";
import { Users, HeartHandshake, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";
import ParallaxImage from "../components/ui/ParallaxImage";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "District Rank #10",
    description:
      "Continuing a tradition of excellence and impact.",
  },
  {
    year: "2026-27",
    title: "The Legacy Continues",
    description:
      "Building upon nearly four decades of service, leadership and fellowship while inspiring the next generation of changemakers.",
  },
];

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

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
        <ScrollReveal variant="fade-up" duration={0.8}>
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
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
              tracking-tight
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
        </ScrollReveal>
      </section>

      {/* Who We Are: Split Layout (TEXT | IMAGE) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fade-right" duration={0.8}>
            <h2 className="text-4xl font-bold text-[#0f172a] tracking-tight">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
              RCMG brings together students and young professionals
              who share a passion for leadership, community service,
              networking and creating meaningful impact.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
              As a Rotaract club under Rotary International, we
              believe in learning through action and empowering
              young people to lead positive change in Ghatkopar and across Mumbai.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" duration={0.8}>
            <div className="h-[400px] rounded-[32px] overflow-hidden shadow-lg border border-black/5">
              <ParallaxImage
                src="/images/gallery/community.jpg"
                alt="Who We Are - Youth Collaboration"
                containerClassName="w-full h-full"
                onError={(e) => {
                  e.target.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=RCMG+Community";
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission: Split Layout (IMAGE | TEXT) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="fade-right" duration={0.8} className="order-2 lg:order-1">
            <div className="h-[400px] rounded-[32px] overflow-hidden shadow-lg border border-black/5">
              <ParallaxImage
                src="/images/gallery/vision.jpg"
                alt="Our Vision and Mission"
                containerClassName="w-full h-full"
                onError={(e) => {
                  e.target.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=RCMG+Vision";
                }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" duration={0.8} className="order-1 lg:order-2">
            <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-sm border border-black/5">
              <h3 className="text-3xl font-bold text-[#0f172a] tracking-tight">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                To empower youth to become leaders who create
                lasting impact through service, innovation and
                collaboration, raising the standards of social value.
              </p>

              <h3 className="text-3xl font-bold mt-10 text-[#0f172a] tracking-tight">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                To provide opportunities for growth, leadership development,
                service initiatives, and global fellowship while building stronger, 
                healthier communities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Legacy Timeline: Animated Vertical Timeline */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-24">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
              Legacy
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-center mt-4 tracking-tight">
              Nearly Four Decades Of Impact
            </h2>
          </ScrollReveal>

          {/* Timeline Layout */}
          <div className="relative mt-12">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start md:items-center"
                  >
                    {/* Circle Pin on line */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0f172a] -translate-x-1/2 z-10 shadow-sm" />

                    {/* Timeline card block */}
                    <div
                      className={`
                        w-full md:w-[calc(50%-32px)] 
                        ml-10 md:ml-0 
                        ${isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
                      `}
                    >
                      <ScrollReveal
                        variant={isEven ? "fade-right" : "fade-left"}
                        duration={0.8}
                      >
                        <div className="bg-[#f8f6f1]/60 border border-black/5 hover:border-black/10 hover:shadow-md transition-all duration-300 rounded-[28px] p-8">
                          <span className="text-3xl font-extrabold text-[#0f172a]">
                            {item.year}
                          </span>
                          
                          <h3 className="text-2xl font-bold mt-2 text-[#0f172a] tracking-tight">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery: Responsive Grid with Hover Overlays and Lightbox */}
      <section className="py-32 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
              Moments
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-center mt-4 tracking-tight">
              Moments That Define Us
            </h2>

            <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Every project, celebration and initiative adds another chapter
              to the RCMG story. Click on any image to view details.
            </p>
          </ScrollReveal>

          {/* Masonry / Grid Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mt-16">
            {gallery.map((item, index) => (
              <ScrollReveal
                key={item.title}
                variant="scale"
                delay={index * 0.08}
                duration={0.6}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setActiveImageIndex(index)}
                  className="
                    group
                    relative
                    bg-[#f8f6f1]
                    rounded-[28px]
                    overflow-hidden
                    shadow-sm
                    cursor-pointer
                    border
                    border-black/5
                  "
                >
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=RCMG+Moment";
                      }}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    flex
                    flex-col
                    justify-end
                    p-8
                  "
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="mt-2 text-slate-200 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-md"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-slate-300 transition p-2 bg-white/10 rounded-full"
            >
              <X size={28} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
              }}
              className="absolute left-6 text-white hover:bg-white/10 p-3 rounded-full transition"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-white/10 shadow-2xl bg-slate-900">
                <img
                  src={gallery[activeImageIndex].image}
                  alt={gallery[activeImageIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <h3 className="text-white text-3xl font-bold mt-6 tracking-tight">
                {gallery[activeImageIndex].title}
              </h3>
              
              <p className="text-slate-400 mt-2 text-center max-w-xl text-base">
                {gallery[activeImageIndex].description}
              </p>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-6 text-white hover:bg-white/10 p-3 rounded-full transition"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact Section with AnimatedCounter */}
      <section className="py-32 bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal variant="fade-up" duration={0.8} className="text-center mb-16">
            <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
              Impact At A Glance
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal variant="fade-up" delay={0} duration={0.8}>
              <div className="text-center p-12 rounded-[32px] bg-white border border-black/5 shadow-sm">
                <Users size={36} className="mx-auto mb-6 text-slate-400" />
                
                <h3 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="60+" />
                </h3>

                <p className="mt-4 text-slate-500 font-semibold uppercase tracking-wider text-sm">
                  Active Members
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1} duration={0.8}>
              <div className="text-center p-12 rounded-[32px] bg-white border border-black/5 shadow-sm">
                <HeartHandshake size={36} className="mx-auto mb-6 text-slate-400" />
                
                <h3 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="70+" />
                </h3>

                <p className="mt-4 text-slate-500 font-semibold uppercase tracking-wider text-sm">
                  Community Projects
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2} duration={0.8}>
              <div className="text-center p-12 rounded-[32px] bg-white border border-black/5 shadow-sm">
                <Trophy size={36} className="mx-auto mb-6 text-slate-400" />
                
                <h3 className="text-6xl font-extrabold text-[#0f172a] tracking-tight">
                  <AnimatedCounter value="120+" />
                </h3>

                <p className="mt-4 text-slate-500 font-semibold uppercase tracking-wider text-sm">
                  Collaborations
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}