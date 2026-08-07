import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="flex flex-col gap-16 md:gap-20 lg:gap-28"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}