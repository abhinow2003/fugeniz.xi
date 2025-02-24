import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish(); // Notify parent to remove loader
    }, 2000); // 3 seconds loading screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    isVisible && (
      <motion.div 
        className="fixed inset-0 flex items-center justify-center bg-black z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white f2"
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 1, 0.2], 
            textShadow: ["0px 0px 10px #0ff", "0px 0px 20px #0ff", "0px 0px 10px #0ff"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          FUGENIZ.<span className="text-cyan-400">XI</span>
        </motion.h1>
      </motion.div>
    )
  );
};

export default Loader;
