import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Sub — Jie Yang",
  description: "Sub — an under-desk printer that saves your workspace and eliminates button confusion.",
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

function SectionImage({
  src,
  alt,
  whiteBg,
}: {
  src: string
  alt: string
  whiteBg?: boolean
}) {
  return (
    <div className="max-w-[800px] mx-auto px-6">
      <AnimatedSectionImage
        src={src}
        alt={alt}
        width={1600}
        height={900}
        loading="lazy"
        containerClassName={whiteBg ? "!bg-white p-8 sm:p-10 md:p-12" : undefined}
      />
    </div>
  )
}

export default function Sub() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/sub/hero.jpg"
            alt="Sub — A Printer That Saves Your Back"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-16 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Industrial Design · Product · 2012</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Sub — A Printer That Saves Your Back
          </h1>
        </div>
        <p>
          <strong className="text-[#fafafa] font-semibold">Sub</strong> is an elegant printer that lives under your desk.
          It occupies no tabletop space, keeps your environment clean, and has no physical buttons — all actions are
          handled on laptop, eliminating the confusion of traditional printer interfaces.
        </p>
        <p className="text-[13px] text-[#71717a]">Jie Yang, Hehuang Jin, Menghong Zhang · 10 weeks</p>
      </div>

      {/* The Problem */}
      <div className="mt-20">
        <SectionText title="The Problem">
          <p>Two core frustrations with existing printers drove this project.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#18181b] rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/projects/sub/problem-1.jpg"
                alt="Problem: printers take up too much space"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-[#fafafa] mb-2">1</p>
              <p className="text-[#94a3b8] text-sm leading-6">
                Most existing printers are huge. They sit on tables or floors and consume enormous amounts of workspace,
                invading the working area.
              </p>
            </div>
          </div>
          <div className="bg-[#18181b] rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/projects/sub/problem-2.jpg"
                alt="Problem: confusing printer interfaces"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold text-[#fafafa] mb-2">2</p>
              <p className="text-[#94a3b8] text-sm leading-6">
                Printers have complex interfaces with small screens and piles of buttons. Most buttons are never used
                in a lifetime — and people are always confused by them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="mt-20">
        <SectionText title="The Solution">
          <p>
            Sub mounts under the desk via a bracket system, completely clearing the work surface. Without a single
            physical button, all print jobs are managed directly from the laptop — simple, familiar, and fast.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/sub/sketch.jpg" alt="Sub concept sketch" />
        </div>
      </div>

      {/* Prototypes */}
      <div className="mt-20">
        <SectionText title="Prototyping">
          <p>Physical models exploring the mounting mechanism and form factor at 1:1 scale.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-2 gap-4">
          {["proto-1", "proto-2", "proto-3", "proto-4"].map((img) => (
            <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src={`/projects/sub/${img}.jpg`}
                alt={`Prototype ${img}`}
                width={800}
                height={533}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final Render */}
      <div className="mt-20">
        <SectionText title="The Printer">
          <p>Final rendered views of Sub in its intended environment — clean, quiet, out of sight.</p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/sub/render.jpg" alt="Sub final render" />
        </div>
        <div className="mt-6 max-w-[800px] mx-auto px-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden bg-[#18181b]">
            <Image
              src="/projects/sub/final-1.jpg"
              alt="Sub final product 1"
              width={800}
              height={533}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#18181b]">
            <Image
              src="/projects/sub/final-2.jpg"
              alt="Sub final product 2"
              width={800}
              height={533}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </main>
  )
}
