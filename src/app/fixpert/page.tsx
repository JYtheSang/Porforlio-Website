import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Fixpert — Jie Yang",
  description: "Delivery Plus — a Fixperts service design project improving campus delivery efficiency in China.",
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
      <p className="text-base leading-7 text-[#94a3b8]">{children}</p>
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

export default function Fixpert() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden bg-white flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/fixpert/logo.png"
            alt="Fixperts"
            width={320}
            height={120}
            className="w-auto h-auto max-w-[60%] max-h-[40%] object-contain"
            priority
          />
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-[800px] mx-auto px-6 mt-16 flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
        <div className="mb-2">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Service Design · 2012</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Fixpert — Delivery Plus
          </h1>
        </div>
        <p>
          <strong className="text-[#fafafa] font-semibold">Delivery Plus</strong> is a service design
          project built within the Fixperts framework — a global initiative that encourages people to use
          creative thinking to improve everyday life.
        </p>
      </div>

      {/* Context — text only */}
      <div className="mt-20">
        <SectionText title="Alibaba and the Chinese Shipping Industry">
          One of the challenges for Chinese e-commerce companies — Alibaba being the largest — is that
          while some consolidation has come lately, the Chinese shipping industry is still fragmented into
          lots of small companies that ferociously compete to undercut each other on price, and timeliness
          and package care often suffer. Delivering packages to campus with high daily order volumes lacks
          a predefined service system, leaving employees to improvise their own solutions. Better-defined
          services at campus distribution points could dramatically increase satisfaction and foster
          customer loyalty.
        </SectionText>
      </div>

      {/* Old System — text above, image below */}
      <div className="mt-20">
        <SectionText title="The Old System">
          All packages were centralized at an open area on campus and delivery personnel would send text
          messages asking customers to come pick up their packages. Items were separated into two groups
          based on recipient name length — those with two characters versus three characters. Last names
          were written on packages, though this method remained difficult to read due to repetitive
          Chinese surnames and poor handwriting under time pressure.
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/fixpert/2.png" alt="The Old System" whiteBg />
        </div>
      </div>

      {/* New System — text above, image below */}
      <div className="mt-20">
        <SectionText title="The New System">
          The redesigned approach substitutes numbers for written Chinese characters — using the last two
          digits of a mobile number, giving only a 1% chance of repetition in 100 packages. Three piles
          organize shipments: Left (00–39), Middle (40–69), Right (70–99). This simple numeric convention
          required zero learning curve for customers and dramatically reduced retrieval time for delivery
          personnel.
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/fixpert/3.png" alt="The New System" whiteBg />
        </div>
      </div>

      {/* Implementation — text above, photo below */}
      <div className="mt-20">
        <SectionText title="Implementation">
          Stainless steel signage measuring approximately 30cm × 60cm, bent at 45 degrees, provides
          durability across weather conditions. Paper labels displaying number ranges in large font adhere
          to the metal surfaces with protective tape against moisture and dirt. This material is cheap,
          durable for any weather condition, and strong enough for many years of daily use. The system was
          deployed with Fan Zhao from Yuantong Express and immediately reduced the time customers spent
          locating their packages.
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/fixpert/5.jpg" alt="Implementation" />
        </div>
      </div>

      {/* YouTube Video */}
      <div className="mt-20">
        <SectionText title="Project Film">
          The project was documented as part of the Fixperts open-source film library — a growing archive
          of stories that captures designers and everyday people solving real problems for real people.
        </SectionText>
        <div className="max-w-[800px] mx-auto px-6 mt-10">
          <div className="w-full rounded-2xl overflow-hidden bg-[#18181b]" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube.com/embed/jOnKf56IhqA"
              title="Fixpert — Delivery Plus Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

    </main>
  )
}
