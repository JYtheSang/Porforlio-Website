"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { projects, Project, type ProjectCategory } from "@/lib/projects"

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const CURSOR_OFFSET_X = 8
const CARD_HEIGHT_EST = 140
const CARD_WIDTH = 280
const VIEWPORT_PADDING = 16

export interface ProjectGridProps {
  category?: ProjectCategory | null
}

export function ProjectGrid({ category = null }: ProjectGridProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const filteredProjects = category
    ? projects.filter((p) => p.category === category)
    : projects

  useEffect(() => {
    setMounted(true)
    const mql = window.matchMedia("(max-width: 768px)")
    setIsMobile(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 1 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      let x = e.clientX + CURSOR_OFFSET_X
      let y = e.clientY - CARD_HEIGHT_EST - 4
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
      <motion.div
        key={category ?? "all"}
        className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-8 max-[960px]:gap-5"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.a
            key={project.title}
            href={project.href}
            {...(!project.href.startsWith("/") && { target: "_blank", rel: "noopener noreferrer" })}
            className="block"
            variants={cardVariants}
            {...(!isMobile && {
              onMouseEnter: () => setHoveredProject(project),
              onMouseLeave: () => setHoveredProject(null),
            })}
          >
            <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#27272a] mb-3">
              {project.href === "/fixpert" ? (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <Image
                    src="/projects/fixpert/logo.png"
                    alt={project.title}
                    width={280}
                    height={105}
                    className="w-auto h-auto max-w-[70%] max-h-[50%] object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={533}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-base font-medium tracking-[-0.31px] leading-6 text-[#fafafa] truncate">
                {project.title}
              </span>
              <span className="text-sm font-normal tracking-[-0.15px] leading-5 text-[#a1a1aa] whitespace-nowrap ml-2">
                {project.year}
              </span>
            </div>
            <p className="text-sm font-medium tracking-[-0.15px] leading-5 text-[#94a3b8] px-1">
              {project.action}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {mounted && !isMobile &&
        createPortal(
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                className="fixed top-0 left-0 z-50 pointer-events-none bg-[#f9fafb] rounded-2xl p-5 w-[280px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-xl font-medium leading-snug tracking-tight text-[#0a0a0a] mb-4">
                  {hoveredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hoveredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-black rounded-full px-3 py-1 text-sm tracking-[-0.15px] text-[#0a0a0a] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
