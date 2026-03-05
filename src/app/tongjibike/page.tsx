import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Cycle Bike — Jie Yang",
  description: "Cycle Bike — a sustainable bike loaning and recycling service system for Tongji University.",
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

export default function TongjiCycle() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/tongjibike/hero.jpg"
            alt="Cycle — A Bike Loaning and Recycling System"
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
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Service Design · 2012</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Cycle — A Bike Loaning and Recycling System
          </h1>
        </div>
        <p>
          <strong className="text-[#fafafa] font-semibold">Cycle</strong> introduces a holistic sustainable transportation
          system for Tongji University. Students get a uniquely designed bike they can personalize with colors and
          materials — creating ownership, community, and pride. When students graduate, they return the bike for the
          next generation.
        </p>
        <p className="text-[13px] text-[#71717a]">
          Jie Yang, Frederic Jensen, Natascha Christensen, Karina Larsen, Helena Levison, Mette Morch, Ye Yin, Yuexin Du · 5 weeks
        </p>
      </div>

      {/* The Problem */}
      <div className="mt-20">
        <SectionText title="Unsustainable Biking Culture">
          <p className="mb-4">
            Tongji University has a deep-rooted problem with its campus biking culture. Students buy cheap bikes, neglect
            maintenance, and abandon them when they graduate — leaving piles of locked, rotting bikes that staff must
            constantly relocate.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden bg-[#18181b] mb-4">
            <Image
              src="/projects/tongjibike/campus-1.jpg"
              alt="Bikes on campus"
              width={1600}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6">
            {[
              { title: "Abandoned Bikes", desc: "When students graduate, many simply leave their bikes locked on campus. Abandoned bikes accumulate and become increasingly difficult to remove." },
              { title: "Broken Bikes", desc: "Bikes are not maintained. When damaged, students show no interest in repairs — even for minor issues." },
              { title: "No Ownership", desc: "Most bikes look identical, making them hard to locate when workers move them. Bikes are just tools, not connected to personal identity." },
            ].map((item) => (
              <div key={item.title} className="bg-[#18181b] rounded-2xl p-5">
                <p className="text-base font-semibold text-[#fafafa] mb-2">{item.title}</p>
                <p className="text-sm leading-6 text-[#94a3b8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Introducing Cycle */}
      <div className="mt-20 max-w-[800px] mx-auto px-6">
        <div className="border border-[#3f3f46] rounded-2xl p-10 text-center">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Introducing</p>
          <p className="text-4xl font-bold text-[#fafafa] tracking-tight mb-3">CYCLE</p>
          <p className="text-base text-[#94a3b8]">A sustainable bike loaning and recycling system</p>
        </div>
      </div>

      {/* The Bike */}
      <div className="mt-20">
        <SectionText title="The Cycle Bike">
          <p>
            Students choose colors and materials to personalize their bike — building community identity across campus.
            A recognizable, personalized bike fosters a deeper sense of ownership and responsibility.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/tongjibike/bike-design.png" alt="Cycle bike design" whiteBg />
        </div>
      </div>

      {/* The System */}
      <div className="mt-20">
        <SectionText title="The Service System">
          <p>
            The system consists of styling, bike finding, a service center, bike events, social media, and a
            graduation return loop — where used bikes cycle back to new incoming students.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/tongjibike/system.png" alt="Service system diagram" whiteBg />
        </div>
      </div>

      {/* Values */}
      <div className="mt-20">
        <SectionText title="The Value">
          <p>
            Through Cycle, Tongji students learn by doing — understanding how bikes work and how to care for them.
            Graduates leave campus with real mechanical literacy, and the campus becomes more colorful and alive.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/tongjibike/values.png" alt="Project values" whiteBg />
        </div>
      </div>

      {/* Exhibition */}
      <div className="mt-20">
        <SectionText title="Nordic Design & Innovation Week at Bridge 8, Shanghai">
          <p>
            Cycle was exhibited at the Nordic Design &amp; Innovation Week in Shanghai — demonstrating how service
            design thinking can transform institutional infrastructure.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden bg-[#18181b] mb-4">
            <Image
              src="/projects/tongjibike/exhibition.jpg"
              alt="Exhibition overview"
              width={1600}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["exhibition-1", "exhibition-2", "exhibition-3", "exhibition-4"].map((img) => (
              <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
                <Image
                  src={`/projects/tongjibike/${img}.jpg`}
                  alt={`Exhibition ${img}`}
                  width={800}
                  height={533}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mt-20">
        <SectionText title="Our Process">
          <p>Field research, prototyping, and iteration across five weeks.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-3 gap-4">
          {["process-1", "process-2", "process-3"].map((img) => (
            <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src={`/projects/tongjibike/${img}.jpg`}
                alt={`Process ${img}`}
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
