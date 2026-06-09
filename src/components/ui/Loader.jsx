import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-[#f8f6f1]
            flex
            items-center
            justify-center
          "
        >
          <div className="text-center">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                text-6xl
                md:text-8xl
                font-bold
                text-[#0f172a]
              "
            >
              RCMG
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-4
                uppercase
                tracking-[0.35em]
                text-xs
                text-slate-500
              "
            >
              Rotaract Club of Mumbai Ghatkopar
            </motion.p>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 220,
              }}
              transition={{
                duration: 1.5,
              }}
              className="
                h-[2px]
                bg-[#0f172a]
                mx-auto
                mt-10
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}