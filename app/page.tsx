"use client"

import { useState } from "react";
import MousePointer from "./utils/MousePosition";
import { motion } from "motion/react"

export default function Home() {

  const { x, y } = MousePointer()
  const [hover, isHovered] = useState<boolean>(false)
  const size = hover ? 400 : 40;


  return (
    <div className="max-h-full max-w-screen  bg-neutral-950 flex justify-center items-center flex-col text-center">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.3
        }}
        className="h-screen w-screen flex justify-center items-center font-sans text-4xl font-bold tracking-tighter text-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello👋I am <motion.span className="text-amber-500">Vineet</motion.span> a Frontend <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-blue-400"
          >Designer</motion.span> and <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-green-400"
          >Developer</motion.span> 🎨
        </motion.div>
      </motion.div>
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-11/12 pt-10 text-center text-xs font-mono opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default"
      >
        Hover the text above
      </motion.div>

      <motion.div
        animate={{
          // @ts-ignore-error
          webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          webkitMaskSize: `${size}px`
        }}
        transition={{
          type: "tween",
          ease: "backOut"
        }}
        id="mask"
        className="h-screen flex justify-center items-center font-sans text-4xl font-bold tracking-tighter text-white">
        <div
          onMouseEnter={() => isHovered(true)}
          onMouseLeave={() => isHovered(false)}
          className="relative group"
        >
          <span className="text-black">What I do ? </span> {" "}
          <span className="text-white"> I craft </span>
          <span className="text-black">digital experiences</span>
          <span className="text-white">that breathe life into the web 🌟</span>
        </div>
      </motion.div>

    </div>
  );
}
