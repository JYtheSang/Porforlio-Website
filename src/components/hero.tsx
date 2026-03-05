"use client"

import { motion } from "framer-motion"

const ease = [0.4, 0, 0.2, 1] as const

export function Hero() {
  return (
      <header className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-12 pb-24 flex flex-col gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-normal text-[#fafafa] max-w-3xl">
        <motion.span
          className="inline w-[500px] leading-[81%]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease }}
        >
          I design simple solutions to complex problems.
        </motion.span>
        <motion.span
          className="block mt-4 text-2xl text-[#94a3b8]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease }}
        >
          Combining design, code, and AI.
        </motion.span>
      </h1>
      <motion.section
        className="grid grid-cols-3 gap-x-1 text-sm text-[#94a3b8]/90 w-[298px]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease }}
      >
        <div className="flex w-fit flex-col gap-0.5">
          <span>2024–Present</span>
          <span>2019–2024</span>
          <span>2016–2019</span>
        </div>
        <div className="flex w-fit flex-col gap-0.5">
          <span>Georgia Tech</span>
          <span>PayPal</span>
          <span>SAP Labs</span>
        </div>
        <div className="flex w-fit flex-col gap-0.5">
          <span>OMSCS</span>
          <span>Senior Product Designer</span>
          <span className="w-[150px]">UX Design Specialist</span>
        </div>
      </motion.section>
      <motion.div
        className="mt-1 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#a1a1aa]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease }}
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-ping" />
          <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.35)]" />
        </span>
        <span>Available for work</span>
      </motion.div>
    </header>
  )
}
