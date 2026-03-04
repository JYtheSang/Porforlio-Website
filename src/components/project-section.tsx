"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectSegmentGroup } from "@/components/ui/segment-group"
import { ProjectGrid } from "@/components/project-grid"
import type { ProjectCategory } from "@/lib/projects"

const ease = [0.4, 0, 0.2, 1] as const

export function ProjectSection() {
  const [category, setCategory] = useState<ProjectCategory>("Product Design")

  return (
    <motion.section
      id="work"
      className="max-w-[1250px] w-full mx-auto px-6 pb-16"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.6, ease }}
    >
      <ProjectSegmentGroup
        value={category}
        onValueChange={({ value }) => setCategory(value as ProjectCategory)}
        defaultValue="Product Design"
        className="max-w-[598px] mb-8"
      />
      <ProjectGrid category={category} />
    </motion.section>
  )
}
