"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

const ease = [0.4, 0, 0.2, 1] as const

let hasPlayedAnimation = false

export function Hero() {
  const skip = hasPlayedAnimation

  useEffect(() => {
    hasPlayedAnimation = true
  }, [])

  return (
      <header className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-12 pb-24 flex flex-col gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-normal text-[#fafafa] max-w-3xl">
        <motion.span
          className="inline w-[500px] leading-[81%]"
          initial={{ opacity: skip ? 1 : 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={skip ? { duration: 0 } : { duration: 1.5, delay: 0.4, ease }}
        >
          I design, prototype, and ship.
        </motion.span>
        <motion.span
          className="block mt-4 text-2xl text-[#94a3b8]"
          initial={{ opacity: skip ? 1 : 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={skip ? { duration: 0 } : { duration: 1.5, delay: 0.8, ease }}
        >
          Bringing ideas to life through design and code.
        </motion.span>
      </h1>
    </header>
  )
}
