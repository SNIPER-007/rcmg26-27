import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  speed = 40, // Pixel offset range for parallax movement
  onError,
}) {
  const containerRef = useRef(null);

  // Monitor scroll progress relative to this specific image container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 to 1) to vertical transform offset
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }}
        className={`w-full h-full object-cover absolute inset-0 ${className}`}
        onError={onError}
      />
    </div>
  );
}
