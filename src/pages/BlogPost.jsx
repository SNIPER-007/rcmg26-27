import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import PageTransition from "../components/animations/PageTransition";
import { blogsData } from "../data/blogsData";
import ScrollReveal from "../components/ui/ScrollReveal";
import ParallaxImage from "../components/ui/ParallaxImage";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const galleryRef = useRef(null);

  // Read scroll progress for sticky progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const selectedBlog = blogsData.find((item) => item.id === id);
    setBlog(selectedBlog || null);
  }, [id]);

  if (!blog) {
    return (
      <PageTransition>
        <div className="max-w-xl mx-auto text-center py-48 px-6">
          <h2 className="text-3xl font-bold text-[#0f172a]">Article Not Found</h2>
          <p className="mt-4 text-slate-500">The blog post you are looking for does not exist.</p>
          <Link to="/blogs" className="mt-8 inline-block text-amber-600 font-bold hover:underline">
            Back to Blogs
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Get related blogs
  const relatedBlogs = blogsData.filter((item) => blog.relatedIds.includes(item.id));

  // Scroll gallery helper
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageTransition>
      {/* Sticky Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0f172a] z-50 origin-left"
        style={{ scaleX }}
      />

      <article className="pb-32 bg-[#f8f6f1]/20">
        
        {/* Cover Hero */}
        <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden bg-slate-200">
          <ParallaxImage
            src={blog.coverImage}
            alt={blog.title}
            containerClassName="w-full h-full"
            onError={(e) => {
              e.target.src = "https://placehold.co/1920x1080/e2e8f0/64748b?text=Cover+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-10 left-0 right-0 max-w-5xl mx-auto px-6 md:px-8 text-white z-10">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Blogs</span>
            </Link>
            
            <div>
              <span className="bg-amber-500 text-[#0f172a] font-bold text-xs uppercase px-3 py-1.5 rounded-full">
                {blog.category}
              </span>
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Metadata Details */}
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-semibold border-b border-slate-200/80 pb-6">
            <div className="flex items-center gap-1.5">
              <User size={16} className="text-slate-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-slate-400" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-slate-400" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Render Rich Content Blocks */}
          <div className="mt-10 space-y-8 text-[#0f172a] leading-relaxed text-base md:text-lg">
            {blog.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p key={idx} className="text-slate-700">
                    {block.text}
                  </p>
                );
              }
              
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-[#0f172a] pl-6 py-2 my-8 italic text-xl text-[#0f172a] font-medium bg-[#f8f6f1]/60 rounded-r-2xl pr-4"
                  >
                    "{block.text}"
                    {block.author && (
                      <cite className="block mt-3 text-sm not-italic font-bold text-slate-500 uppercase tracking-wide">
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }
              
              if (block.type === "image") {
                return (
                  <figure key={idx} className="my-10 rounded-[28px] overflow-hidden border border-black/5 shadow-sm">
                    <img
                      src={block.src}
                      alt={block.caption || "Blog visual"}
                      className="w-full h-auto object-cover max-h-[500px]"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/800x500/e2e8f0/64748b?text=Article+Image";
                      }}
                    />
                    {block.caption && (
                      <figcaption className="bg-slate-50 text-slate-400 text-sm p-4 text-center border-t border-slate-100 font-medium">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Instagram-Style Swipe Gallery */}
          {blog.gallery && blog.gallery.length > 0 && (
            <div className="my-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                  Article Highlights
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => scrollGallery("left")}
                    className="p-2 border border-slate-200 bg-white hover:bg-slate-50 rounded-full transition shadow-sm"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={() => scrollGallery("right")}
                    className="p-2 border border-slate-200 bg-white hover:bg-slate-50 rounded-full transition shadow-sm"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Slider Row */}
              <div
                ref={galleryRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 -mx-4 px-4 select-none cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: "none" }}
              >
                {blog.gallery.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="min-w-[280px] md:min-w-[400px] h-[300px] md:h-[380px] rounded-3xl overflow-hidden snap-start flex-shrink-0 shadow-sm border border-black/5 bg-slate-100"
                  >
                    <img
                      src={imgSrc}
                      alt={`Gallery Highlight ${i + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=RCMG+Highlight";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Blogs Block */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 mt-20 border-t border-slate-200 pt-16">
            <h3 className="text-3xl font-bold tracking-tight mb-10 text-center text-[#0f172a]">
              Related Stories
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <ScrollReveal key={relatedBlog.id} variant="fade-up" duration={0.6}>
                  <div className="bg-white border border-black/5 hover:border-black/10 hover:shadow-md transition-all duration-300 rounded-[32px] overflow-hidden flex flex-col h-full">
                    <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                      <img
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/800x500/e2e8f0/64748b?text=Related+Blog";
                        }}
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                          {relatedBlog.category}
                        </span>
                        
                        <h4 className="mt-2 text-xl font-bold text-[#0f172a] tracking-tight leading-tight line-clamp-2">
                          <Link to={`/blogs/${relatedBlog.id}`}>{relatedBlog.title}</Link>
                        </h4>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                        <span className="text-xs text-slate-400 font-medium">
                          {relatedBlog.readTime}
                        </span>
                        
                        <Link
                          to={`/blogs/${relatedBlog.id}`}
                          className="text-[#0f172a] font-bold text-sm inline-flex items-center gap-1 hover:text-slate-800"
                        >
                          <span>Read</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </article>
    </PageTransition>
  );
}
