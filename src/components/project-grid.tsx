"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects, Project } from "@/lib/projects"

const ease = [0.4, 0, 0.2, 1] as const
const CURSOR_OFFSET_X = 20
const CARD_HEIGHT_EST = 200
const CARD_WIDTH = 260
const VIEWPORT_PADDING = 16

export function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 1 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      let x = e.clientX + CURSOR_OFFSET_X
      let y = e.clientY - CARD_HEIGHT_EST - 20
      x = Math.min(x, window.innerWidth - CARD_WIDTH - VIEWPORT_PADDING)
      x = Math.max(x, VIEWPORT_PADDING)
      y = Math.min(y, window.innerHeight - CARD_HEIGHT_EST - VIEWPORT_PADDING)
      y = Math.max(y, VIEWPORT_PADDING)
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.section
        id="work"
        className="max-w-[1250px] w-full mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.6, ease }}
      >
        <div className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-8 max-[960px]:gap-5">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#f5f5f5] mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={533}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-1 mb-1">
                <span className="text-base font-medium tracking-[-0.31px] leading-6 text-[#0a0a0a] truncate">
                  {project.title}
                </span>
                <span className="text-sm font-normal tracking-[-0.15px] leading-5 text-[#6a7282] whitespace-nowrap ml-2">
                  {project.year}
                </span>
              </div>
              <p className="text-sm font-medium tracking-[-0.15px] leading-5 text-[#4a5565] px-1">
                {project.action}
              </p>
            </a>
          ))}
        </div>
      </motion.section>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                className="fixed top-0 left-0 z-50 pointer-events-none bg-white rounded-2xl p-5 w-[260px] shadow-2xl"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex justify-end mb-6">
                  <span className="w-9 h-9 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </div>
                <p className="text-2xl font-bold tracking-tight leading-tight text-[#0a0a0a] mb-4">
                  {hoveredProject.title}
                </p>
                <span className="inline-flex border border-[#0a0a0a]/20 rounded-full px-3 py-1 text-sm text-[#0a0a0a]">
                  {hoveredProject.action}
                </span>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
