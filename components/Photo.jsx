"use client";

import { motion } from "framer-motion";
import { Repeat } from "lucide-react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/image1.png"
            priority
            quality={100}
            layout="fill"
            alt="me"
            className="object-contain"
          />
        </motion.div>
        {/*circle*/}
        <motion.svg
          className="w-[420px] xl:w-[620px] h-[420px] xl:h-[620px]"
          fill="transparent"
          viewBox="0 0 620 620"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="310"
            cy="310"
            r="300"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
