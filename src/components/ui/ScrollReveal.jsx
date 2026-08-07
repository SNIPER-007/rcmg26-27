import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  once = true,
}) {
  const getVariants = () => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(8px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-20px", amount: threshold }}
      variants={getVariants()}
      transition={{
        duration: duration * 1.08,
        delay,
        ease: [0.16, 1, 0.3, 1], // premium custom bezier curve (out-expo)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
