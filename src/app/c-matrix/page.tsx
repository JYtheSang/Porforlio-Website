import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Matrix C — Jie Yang",
  description: "Matrix C — a personal wireless lighting system that combines LED light with intuitive gesture-based technology.",
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

export default function MatrixC() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/c-matrix/hero.jpg"
            alt="Matrix C — Customize Your Lighting"
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
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Industrial Design · Creative Tech · 2013</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Matrix C — Customize Your Lighting
          </h1>
        </div>
        <p>
          <strong className="text-[#fafafa] font-semibold">Matrix C</strong> is a personal wireless lighting system
          designed for real life and all its potential. It combines brilliant, energy-efficient LED light with intuitive
          gesture-based technology. The light, the bridge, and smart controls come together to forever change how you
          control and experience light.
        </p>
        <p className="text-[13px] text-[#71717a]">Jie Yang, Keyu Guo, Mo Zhang, Bo Chen · 10 weeks</p>
      </div>

      {/* How to Use */}
      <div className="mt-20">
        <SectionText title="How to Use Matrix C">
          <p>Three core interactions define the Matrix C experience.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: "draw.png",
              title: "Draw It",
              desc: "Matrix C detects finger movement using an internal LED matrix — draw any shape of light you want.",
            },
            {
              img: "connect.png",
              title: "Connect More",
              desc: "Install multiple boards and connect them together across walls, ceilings, or even floors.",
            },
            {
              img: "mood.png",
              title: "Change Mood",
              desc: "Switch between vibrant party colors or ambient tones for movie night and dinner.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#18181b] rounded-2xl overflow-hidden">
              <div className="w-full aspect-square overflow-hidden bg-white">
                <Image
                  src={`/projects/c-matrix/${item.img}`}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-base font-semibold text-[#fafafa] mb-1">{item.title}</p>
                <p className="text-sm leading-6 text-[#94a3b8]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo */}
      <div className="mt-20">
        <SectionText title="Live Demo">
          <p>The LED matrix reacts in real time to gesture input.</p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/c-matrix/demo.gif" alt="Matrix C live demo" />
        </div>
      </div>

      {/* Prototype */}
      <div className="mt-20">
        <SectionText title="Physical Prototypes">
          <p>Handcrafted boards exploring form factor and LED density configurations.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-3 gap-4">
          {["proto-1", "proto-2", "proto-3"].map((img) => (
            <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src={`/projects/c-matrix/${img}.jpg`}
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

      {/* Arduino */}
      <div className="mt-20">
        <SectionText title="Work with Arduino">
          <p>The system is built on Arduino, enabling custom gesture recognition and wireless light control.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-2 gap-4">
          {["arduino-1", "arduino-2", "arduino-3", "arduino-4"].map((img) => (
            <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src={`/projects/c-matrix/${img}.jpg`}
                alt={`Arduino ${img}`}
                width={800}
                height={533}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
