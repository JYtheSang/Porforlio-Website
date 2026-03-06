"use client"

import Image from "next/image"
import { useState } from "react"

const sections = [
  { label: "Overview",    slides: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { label: "Methodology", slides: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] },
  { label: "Findings",    slides: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
  { label: "Conclusions", slides: [50, 51, 52, 53, 54] },
]

export default function CapeGallery() {
  const [activeSection, setActiveSection] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)

  const { slides } = sections[activeSection]
  const current = slides[slideIdx]
  const total = slides.length

  function goTo(section: number) {
    setActiveSection(section)
    setSlideIdx(0)
  }

  return (
    <div className="mt-12 max-w-[800px] mx-auto px-6">
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-[#27272a] mb-6">
        {sections.map((s, i) => (
          <button
            key={s.label}
            onClick={() => goTo(i)}
            className={`px-4 py-2.5 text-sm font-medium tracking-wide transition-colors relative ${
              activeSection === i ? "text-[#fafafa]" : "text-[#71717a] hover:text-[#a1a1aa]"
            }`}
          >
            {s.label}
            {activeSection === i && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-[#fafafa]" />
            )}
          </button>
        ))}
      </div>

      {/* Slide */}
      <div className="w-full overflow-hidden rounded-2xl">
        <Image
          key={current}
          src={`/projects/discharge-doc-evaluation/${current}.webp`}
          alt={`Evaluating the CAPE — slide ${current}`}
          width={1600}
          height={1200}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setSlideIdx(i => Math.max(0, i - 1))}
          disabled={slideIdx === 0}
          className="px-4 py-2 text-sm text-[#71717a] hover:text-[#fafafa] disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>
        <span className="text-xs text-[#52525b] tabular-nums">
          {slideIdx + 1} / {total}
        </span>
        <button
          onClick={() => setSlideIdx(i => Math.min(total - 1, i + 1))}
          disabled={slideIdx === total - 1}
          className="px-4 py-2 text-sm text-[#71717a] hover:text-[#fafafa] disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
