import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Pure — Jie Yang",
  description: "Pure — a crafted magnetic pen inspired by simplicity in East Asian culture.",
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

export default function Pure() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/pure/hero.png"
            alt="Pure — A Crafted Magnetic Pen"
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
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Industrial Design · Craft · 2012</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Pure — A Crafted Magnetic Pen
          </h1>
        </div>
        <p>
          The concept of craftsmanship fascinates me. It's about the quality of work, a passion for betterment, and the
          experience of making. Inspired by simplicity in East Asian culture, I designed{" "}
          <strong className="text-[#fafafa] font-semibold">Pure</strong> — a pen with minimal decoration and
          functionality, calling for a simple lifestyle free from the complexity of modern life.
        </p>
        <p className="text-[13px] text-[#71717a]">Individual · 10 weeks</p>
      </div>

      {/* Inspiration */}
      <div className="mt-20">
        <SectionText title="Inspiration">
          <p>
            East Asian minimalism — the philosophy that objects should carry only what is essential — guided every
            design decision. The pen should feel like it belongs in a quiet room.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/pure/inspiration.png" alt="Inspiration" whiteBg />
        </div>
      </div>

      {/* Exploration */}
      <div className="mt-20">
        <SectionText title="Exploration">
          <p>Sketches and form studies exploring silhouette, material, and proportion.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden bg-white">
            <Image
              src="/projects/pure/exploration-1.png"
              alt="Exploration sketches 1"
              width={800}
              height={600}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-white">
            <Image
              src="/projects/pure/exploration-2.png"
              alt="Exploration sketches 2"
              width={800}
              height={600}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 3D Printing & CNC */}
      <div className="mt-20">
        <SectionText title="3D Printing & CNC">
          <p>
            Digital fabrication tools — 3D printing and CNC milling — were used to iterate rapidly from sketch
            to physical form, testing grip, weight, and cap mechanism.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/projects/pure/3d-print.png"
              alt="3D printing and CNC process"
              width={1600}
              height={900}
              className="w-full h-full object-cover scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* The Pure Pen */}
      <div className="mt-20">
        <SectionText title="The Pure Pen">
          <p>The final magnetic pen — machined, assembled, and photographed.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden bg-[#18181b] mb-4">
            <Image
              src="/projects/pure/gallery-1.jpg"
              alt="Pure pen final"
              width={1600}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="rounded-2xl overflow-hidden bg-white">
              <Image
                src="/projects/pure/gallery-2.png"
                alt="Pure pen detail"
                width={800}
                height={600}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src="/projects/pure/gallery-3.jpg"
                alt="Pure pen close-up"
                width={800}
                height={533}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["gallery-4", "gallery-5", "gallery-6", "gallery-7"].map((img) => (
              <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
                <Image
                  src={`/projects/pure/${img}.jpg`}
                  alt={`Pure pen ${img}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
