import Image from "next/image"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "SAP Fiori for iOS — Jie Yang",
  description: "Built the iOS design language for SAP Fiori — extending enterprise floorplans and object-page patterns to native mobile.",
}

const GUIDELINE_URL =
  "https://www.sap.com/design-system/fiori-design-ios/v26-1/page-types/object-details"

const images = Array.from({ length: 9 }, (_, i) => i + 1)

export default function SAPFioriIOS() {
  return (
    <main className="pb-24">
      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-10 flex flex-col gap-5 text-base leading-7 text-[#64748b] border-b border-[#e4e4e7] pb-10">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#71717a] mb-3">
            SAP · 2016–2019
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] leading-tight">
            SAP Fiori for iOS Design System
          </h1>
        </div>
        <p>
          At SAP, I helped define the{" "}
          <strong className="text-[#0a0a0a] font-semibold">iOS design language for Fiori</strong> — translating
          enterprise floorplans, components, and interaction patterns from web into native mobile. The goal was
          consistency across platforms while respecting iOS conventions: navigation, typography, touch targets,
          and motion that feel at home on iPhone and iPad.
        </p>
        <p>
          Here is one of the components I defined — the{" "}
          <strong className="text-[#0a0a0a] font-semibold">Object Details</strong>, a core Fiori floorplan
          that organizes dense business data into scannable sections with clear hierarchy. SAP&apos;s iOS
          guideline for that pattern is linked below; my work extended it into{" "}
          <strong className="text-[#0a0a0a] font-semibold">
            native iOS components and layouts
          </strong>{" "}
          that product teams could adopt at scale.
        </p>
        <a
          href={GUIDELINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] hover:opacity-80 transition-opacity"
        >
          Open SAP Object Details guideline
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="mt-10">
        <div className="max-w-[800px] mx-auto px-6 mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
            More about the project
          </h2>
        </div>

        <div className="max-w-[1250px] mx-auto px-6">
          <div className="w-full overflow-hidden rounded-2xl">
            {images.map((n) => (
              <Image
                key={n}
                src={`/projects/sap-fiori-ios/${n}.jpg`}
                alt={`SAP Fiori for iOS — slide ${n}`}
                width={1600}
                height={900}
                className="w-full h-auto block"
                loading={n <= 3 ? "eager" : "lazy"}
                priority={n === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
