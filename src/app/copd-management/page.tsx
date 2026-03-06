import type { Metadata } from "next"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "COPD Management — Jie Yang",
  description: "Patient education design for the real world of COPD — a research and communication design project for Breathe.",
}

function SectionText({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[800px] mx-auto px-6 mt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa] mb-2">{title}</h2>
      <div className="text-base leading-7 text-[#94a3b8]">{children}</div>
    </div>
  )
}

export default function CopdManagement() {
  return (
    <main className="pb-24">

      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-16 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">User Research · 2014–2016</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Patient Education for the Real World of COPD
          </h1>
        </div>
        <p>
          <strong className="text-[#fafafa] font-semibold">Breathe</strong> is a Techstars-funded startup that designs
          apps for patients with chronic lung conditions — including asthma, COPD, and cystic fibrosis. These diseases,
          when poorly managed, consume billions of healthcare dollars.
        </p>
        <p>
          The goal of the apps is to help patients and families better manage lung conditions, especially after
          hospitalizations and in between doctor appointments — the critical moments when patients are least supported
          and yet most responsible for their own care.
        </p>
        <p className="text-[13px] text-[#71717a]">Individual · 6 weeks</p>
      </div>

      {/* Design Challenge */}
      <div className="mt-20 max-w-[800px] mx-auto px-6">
        <div className="border border-[#3f3f46] rounded-2xl p-10 text-center">
          <p className="text-xl font-semibold text-[#fafafa] leading-snug tracking-tight">
            What are the factors and forces at work in the home care context for COPD patients that Breathe could design for?
          </p>
        </div>
      </div>

      {/* Research Process */}
      <div className="mt-20">
        <SectionText title="Research & Synthesis">
          <p className="mb-4">
            The research centered on understanding the full ecosystem around a COPD patient — caregivers, family members,
            and patients themselves. Through interviews and contextual inquiry, key themes emerged around impact, daily
            struggles, emotional burden, and the dynamics between the three groups.
          </p>
          <p>
            The affinity map below captures the synthesized insights across hundreds of data points, grouped into
            behavioral and emotional patterns that shaped the communication design.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <AnimatedSectionImage
            src="/projects/copd/2.jpg"
            alt="Affinity mapping — sticky notes synthesis"
            width={542}
            height={542}
            loading="lazy"
            containerClassName="h-[320px]"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Outcome */}
      <div className="mt-20">
        <SectionText title="Communication Design Outcome">
          <p className="mb-4">
            The final deliverable is a layered infographic that maps the emotional and behavioral landscape across
            three key stakeholders — <strong className="text-[#fafafa] font-semibold">patients</strong>,{" "}
            <strong className="text-[#fafafa] font-semibold">caregivers</strong>, and{" "}
            <strong className="text-[#fafafa] font-semibold">family</strong> — showing how COPD reverberates through
            daily life far beyond the clinical setting.
          </p>
          <p>
            The visual system uses bold typographic hierarchy to surface the emotional undertow of living with COPD:
            dismiss fear, relieve regret, drive away sadness — and on the patient side, ask for support, move forward.
            Each theme is grounded in direct quotes and observed behaviors from field research.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <AnimatedSectionImage
            src="/projects/copd/1.jpg"
            alt="The Underestimated Impact of COPD — research infographic"
            width={1413}
            height={942}
            loading="lazy"
            containerClassName="!bg-white"
          />
        </div>
      </div>

    </main>
  )
}
