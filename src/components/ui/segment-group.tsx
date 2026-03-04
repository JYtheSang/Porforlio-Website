"use client"

import { SegmentGroup } from "@ark-ui/react/segment-group"
import type { ProjectCategory } from "@/lib/projects"

const DEFAULT_OPTIONS: ProjectCategory[] = [
  "Product Design",
  "Engineering",
  "User Research",
  "Industrial Design",
]

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
  defaultValue = "Product Design",
  className,
}: ProjectSegmentGroupProps) {
  return (
    <div className={className}>
      <SegmentGroup.Root
        orientation="horizontal"
        value={value}
        onValueChange={(details) => {
          if (details.value != null) onValueChange?.({ value: details.value as ProjectCategory })
        }}
        defaultValue={defaultValue}
        className="flex gap-0.5 bg-[#17181c] border border-[#2a2d36] relative p-1 rounded-lg"
      >
        <SegmentGroup.Indicator className="bg-[#27272a] z-10 rounded-md shadow-sm h-(--height) w-(--width) transition-all duration-200 border border-[#2a2d36]" />
        {options.map((option) => (
          <SegmentGroup.Item
            key={option}
            value={option}
            className="flex flex-1 items-center justify-center select-none cursor-pointer text-sm font-medium px-4 py-2 z-20 text-[#94a3b8] hover:text-[#fafafa] data-[state=checked]:text-[#fafafa] data-disabled:cursor-not-allowed data-disabled:opacity-40 transition-colors duration-200"
          >
            <SegmentGroup.ItemText>{option}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  )
}
