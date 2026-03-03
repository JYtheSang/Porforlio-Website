"use client"

import { motion } from "framer-motion"

const ease = [0.4, 0, 0.2, 1] as const

export function Hero() {
  return (
    <header className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-8 pb-14 flex flex-col gap-6">
      <h1 className="text-5xl md:text-[38px] sm:text-3xl font-medium tracking-[-0.5px] leading-[58px] md:leading-12 sm:leading-9 text-[#0a0a0a] max-w-3xl">
      <motion.span
          className="inline"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease }}
        >
          Hi, I'm Jie Yang.
          <br />
        </motion.span>
        <motion.span
          className="inline"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease }}
        >
          I design simple solutions to complex problems.
        </motion.span>
        <motion.span
          className="block mt-2 text-[#99a1af]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease }}
        >
          Through design, code, and AI.
        </motion.span>
      </h1>
    </header>
  )
}
