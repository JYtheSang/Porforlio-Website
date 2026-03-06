import type { Metadata } from "next"
import CapeGallery from "./CapeGallery"

export const metadata: Metadata = {
  title: "Evaluating the CAPE — Jie Yang",
  description: "A piloted research study evaluating a redesigned Emergency Department discharge document.",
}

export default function DischargeDocEvaluation() {
  return (
    <main className="pb-24">

      {/* Brief intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-16 flex flex-col gap-4 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">User Research · 2014–2016</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Evaluating the CAPE
          </h1>
        </div>
        <p>
          A piloted research study developed at the <strong className="text-[#fafafa] font-semibold">IIT Institute of Design</strong> in collaboration
          with UIC Hospital & Health Sciences System and UIC Comer Children&apos;s Hospital — evaluating a redesigned
          Emergency Department discharge document called the CAPE against existing discharge tools.
        </p>
        <p className="text-[13px] text-[#71717a]">Team · 6 months</p>
      </div>

      <CapeGallery />

    </main>
  )
}
