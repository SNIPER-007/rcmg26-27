import PageTransition from "../components/animations/PageTransition";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import ScrollReveal from "../components/ui/ScrollReveal";
import ParallaxImage from "../components/ui/ParallaxImage";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Blogs() {
  const featuredBlog = blogsData[0];
  const latestBlogs = blogsData.slice(1);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-bold text-slate-500">
              Insight & Stories
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#0f172a] tracking-tight">
              RCMG Blogs
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600 leading-relaxed text-base md:text-lg">
              Explore stories of impact, leadership lessons, fellowship retreats, 
              and voices of our youth changemakers.
            </p>
          </ScrollReveal>
        </div>

        {/* Featured Post */}
        {featuredBlog && (
          <ScrollReveal variant="fade-up" duration={0.8} className="mb-24">
            <div className="bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow duration-500">
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Featured Image */}
                <div className="lg:col-span-7 h-[300px] md:h-[450px] relative overflow-hidden bg-slate-100">
                  <ParallaxImage
                    src={featuredBlog.coverImage}
                    alt={featuredBlog.title}
                    containerClassName="w-full h-full"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=Featured+Blog";
                    }}
                  />
                </div>

                {/* Featured Content */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div>
                    <span className="bg-[#f8f6f1] text-[#0f172a] font-semibold text-xs uppercase px-3 py-1.5 rounded-full border border-black/5">
                      {featuredBlog.category}
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight tracking-tight hover:text-slate-800 transition-colors">
                    <Link to={`/blogs/${featuredBlog.id}`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-8 text-xs md:text-sm text-slate-400 font-medium border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-1.5">
                      <User size={16} />
                      <span>{featuredBlog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{featuredBlog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/blogs/${featuredBlog.id}`}
                      className="inline-block"
                    >
                      <motion.button
                        whileHover={{ scale: 1.03, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                          flex
                          items-center
                          gap-2
                          px-6
                          py-3.5
                          rounded-full
                          bg-[#0f172a]
                          text-white
                          font-semibold
                          shadow-sm
                          hover:shadow-md
                          transition-shadow
                          cursor-pointer
                        "
                      >
                        <span>Read Article</span>
                        <ArrowRight size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Latest Blogs Section */}
        {latestBlogs.length > 0 && (
          <div>
            <ScrollReveal variant="fade-up" duration={0.8} className="mb-12">
              <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Latest Publications
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {latestBlogs.map((blog, index) => (
                <ScrollReveal
                  key={blog.id}
                  variant="fade-up"
                  delay={index * 0.1}
                  duration={0.7}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      boxShadow: "0 25px 50px -15px rgba(15, 23, 42, 0.08)",
                    }}
                    className="
                      group
                      bg-white
                      border
                      border-black/5
                      rounded-[32px]
                      overflow-hidden
                      shadow-sm
                      transition-all
                      duration-500
                      flex
                      flex-col
                      h-full
                    "
                  >
                    {/* Blog Cover */}
                    <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/800x500/e2e8f0/64748b?text=Blog+Image";
                        }}
                      />
                      
                      <div className="absolute top-6 left-6 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-[#0f172a] font-bold text-xs uppercase px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-8 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#0f172a] tracking-tight leading-tight group-hover:text-slate-800 transition-colors">
                          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </h3>

                        <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-slate-100 pt-6">
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium mb-6">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>

                        <Link
                          to={`/blogs/${blog.id}`}
                          className="inline-flex items-center gap-2 font-bold text-sm text-[#0f172a] group-hover:text-slate-800 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
