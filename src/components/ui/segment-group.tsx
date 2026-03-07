"use client"

import { useState } from "react"
import { motion, LayoutGroup } from "framer-motion"
import type { ProjectCategory } from "@/lib/projects"

const DEFAULT_OPTIONS: ProjectCategory[] = [
  "Product Design",
  "Engineering",
  "User Research",
  "Industrial Design",
]

const LABELS: Record<ProjectCategory, { emoji: string; short: string }> = {
  "Product Design": { emoji: "📟", short: "Design" },
  "Engineering": { emoji: "🛠", short: "Eng" },
  "User Research": { emoji: "🔍", short: "Research" },
  "Industrial Design": { emoji: "🕹", short: "Industrial" },
}

export interface ProjectSegmentGroupProps {
  options?: ProjectCategory[]
  value?: ProjectCategory
  onValueChange?: (details: { value: ProjectCategory }) => void
  defaultValue?: ProjectCategory
  className?: string
}

export function ProjectSegmentGroup({
  options = DEFAULT_OPTIONS,
  value,
  onValueChange,
  className,
}: ProjectSegmentGroupProps) {
  const [hovered, setHovered] = useState<ProjectCategory | null>(null)

  return (
    <div className={className}>
      <LayoutGroup>
        <div
          role="radiogroup"
          aria-orientation="horizontal"
          className="flex w-full gap-0.5 bg-[#17181c] border border-[#2a2d36] p-1 rounded-lg"
          onMouseLeave={() => setHovered(null)}
        >
          {options.map((option) => {
            const isSelected = option === value
            const isHovered = option === hovered
            const textColor = isSelected ? "#fafafa" : isHovered ? "#d4d4d8" : "#94a3b8"
            return (
              <motion.button
                key={option}
                role="radio"
                aria-checked={isSelected}
                onClick={() => onValueChange?.({ value: option })}
                onMouseEnter={() => setHovered(option)}
                whileTap={{ scale: 0.96 }}
                className="flex flex-auto min-w-0 items-center justify-center relative select-none cursor-pointer text-xs sm:text-sm font-medium px-2 sm:px-4 py-2 rounded-md focus-visible:outline-none"
                animate={{ color: textColor }}
                transition={{ duration: 0.15 }}
              >
                {/* Selected indicator — full weight, always visible */}
                {isSelected && (
                  <motion.span
                    layoutId="tab-selected"
                    className="absolute inset-0 bg-[#27272a] rounded-md border border-[#2a2d36] shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {/* Hover indicator — lighter ghost, only on unselected tabs */}
                {isHovered && !isSelected && (
                  <motion.span
                    layoutId="tab-hover"
                    className="absolute inset-0 bg-white/[0.04] rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="inline-flex items-center gap-1.5 min-w-0 relative z-10 pointer-events-none">
                  <span className="shrink-0">{LABELS[option].emoji}</span>
                  <span className="truncate sm:hidden">{LABELS[option].short}</span>
                  <span className="truncate hidden sm:inline">{option}</span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </LayoutGroup>
    </div>
  )
}
