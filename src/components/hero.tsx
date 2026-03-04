"use client"

import { motion } from "framer-motion"

const ease = [0.4, 0, 0.2, 1] as const

export function Hero() {
  return (
    <header className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-12 pb-24 flex flex-col gap-6">
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
          className="block mt-4 text-lg text-[#94a3b8]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease }}
        >
          Combining design, code, and AI.
        </motion.span>
      </h1>
      <motion.section
        className="flex flex-col gap-1 text-sm text-[#94a3b8]/90"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease }}
      >
        <div className="grid grid-cols-[auto_auto_1fr] gap-x-6 justify-items-start">
          <span>2024–Present</span>
          <span>Georgia Tech</span>
          <span>OMSCS</span>
        </div>
        <div className="grid grid-cols-[auto_auto_1fr] gap-x-6 justify-items-start">
          <span className="w-[77px]">2019–2024</span>
          <span>PayPal</span>
          <span>Senior Product Designer</span>
        </div>
        <div className="grid grid-cols-[auto_auto_1fr] gap-x-6 justify-items-start">
          <span>2016–2019</span>
          <span>SAP Labs</span>
          <span>UX Design Specialist</span>
        </div>
      </motion.section>
    </header>
  )
}
