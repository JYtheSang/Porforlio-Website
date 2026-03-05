import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedSectionImage } from "@/components/animated-section-image"

export const metadata: Metadata = {
  title: "Guardian — Jie Yang",
  description: "Guardian — a personal safety device designed to make surgical waiting easier for families in China.",
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

export default function Guardian() {
  return (
    <main className="pb-24">

      {/* Cover */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/guardian/hero.jpg"
            alt="Guardian — Making Surgical Waiting Easier"
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
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-3">Industrial Design · 2013</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#fafafa] leading-tight">
            Guardian — Making Surgical Waiting Easier
          </h1>
        </div>
        <p>
          Anxiety, tension, exhaustion — family members experience double pressure mentally and physically during
          surgical waiting. <strong className="text-[#fafafa] font-semibold">Guardian</strong> offers necessary resources
          of information, energy, and comfort within limited space and investment. This small package is designed to
          become a bridge between doctors and families — to alleviate negative emotions and establish a more harmonious
          patient-physician relationship.
        </p>
        <p className="text-[13px] text-[#71717a]">Individual · 10 weeks</p>
      </div>

      {/* China's Medical Battleground */}
      <div className="mt-20">
        <SectionText title="China's Medical Battleground">
          <p className="mb-4">
            <strong className="text-[#fafafa] font-semibold">Chinese doctors are becoming targets of patients' anger.</strong>
          </p>
          <p>
            China's hospitals are a battleground — not just for illness but also for tensions between physicians and patients.
            Medical staff are attacked at a rate of once every two weeks per hospital, according to the China Hospital
            Association. The government has since mandated emergency measures: one security guard per 20 beds, with guards
            accounting for no less than 3% of total medical staff.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden bg-[#18181b]">
              <Image
                src="/projects/guardian/stats.jpg"
                alt="Protest scene"
                width={800}
                height={533}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#18181b] flex flex-col items-center justify-center p-8 gap-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#fafafa] tracking-tight">27.3</p>
                <p className="text-sm text-[#94a3b8] mt-1">attacks per hospital / year</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-[#fafafa] tracking-tight">12.5%</p>
                <p className="text-sm text-[#94a3b8] mt-1">of hospitals over 100 attacks / year</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Waiting Area Problem */}
      <div className="mt-20">
        <SectionText title="Waiting in the Uncertainty Room">
          <p className="mb-4">
            Family members feel deeply uncertain as they wait for their loved one through surgery — sitting crouched in
            uncomfortable chairs, watching the door with every turn of a doorknob.
          </p>
          <p>
            In China, the situation is worse. In the partner hospital for this project, there is no dedicated waiting room —
            only a hallway with far too few chairs, where people wait, stand, lean, and smoke in stairwells.
          </p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden bg-[#18181b]">
            <Image
              src="/projects/guardian/hospital.jpg"
              alt="Hospital hallway"
              width={800}
              height={533}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#18181b]">
            <Image
              src="/projects/guardian/waiting-room.jpg"
              alt="Waiting room"
              width={800}
              height={533}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Key Issues */}
      <div className="mt-20">
        <SectionText title="Key Issues">
          <p className="mb-4">
            The waiting area is always crowded with anxious people. There are only 4 seats, but most stand or lean against
            walls. Two bathrooms, a small expensive café, and a single information window for doctor updates. People
            overflow into stairwells.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/guardian/key-issues.png" alt="Key issues diagram" whiteBg />
        </div>
      </div>

      {/* Mental & Physical Pressures */}
      <div className="mt-20">
        <div className="max-w-[800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa] mb-4">Mentally</h2>
            <ul className="space-y-4 text-[#94a3b8] text-base leading-7">
              <li><strong className="text-[#fafafa] font-semibold">Unoccupied time feels longer</strong> — Occasional distraction stops clock-watching, making time move forward.</li>
              <li><strong className="text-[#fafafa] font-semibold">Anxiety amplifies wait</strong> — Running through worst-case scenarios makes family members more distressed.</li>
              <li><strong className="text-[#fafafa] font-semibold">Uncertain waits feel longer</strong> — Clear time estimates dramatically improve the quality of waiting.</li>
              <li><strong className="text-[#fafafa] font-semibold">Solo waits feel longer</strong> — Company and support are essential, even for those who feel self-sufficient.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#fafafa] mb-4">Physically</h2>
            <ul className="space-y-4 text-[#94a3b8] text-base leading-7">
              <li><strong className="text-[#fafafa] font-semibold">Limited facilities</strong> — No dedicated rest areas add physical discomfort and compound emotional distress.</li>
              <li><strong className="text-[#fafafa] font-semibold">Lack of supplies</strong> — Families refuse to leave the area for hours, but hospitals provide nothing to sustain them.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* HMW */}
      <div className="mt-20 max-w-[800px] mx-auto px-6">
        <div className="border border-[#3f3f46] rounded-2xl p-10 text-center">
          <p className="text-xl font-semibold text-[#fafafa] leading-snug tracking-tight">
            How might we make surgical waiting less stressful — both physically and mentally?
          </p>
        </div>
      </div>

      {/* The Solution */}
      <div className="mt-20">
        <SectionText title="The Solution">
          <p>
            Guardian is a small care package distributed at the surgical waiting area. It contains four components,
            each addressing a specific unmet need discovered through field research.
          </p>
        </SectionText>
        <div className="mt-10">
          <SectionImage src="/projects/guardian/solution.jpg" alt="Guardian solution overview" />
        </div>
        <div className="mt-10 max-w-[800px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Information", desc: "A letter with doctor qualifications, estimated time, procedure steps, and after-surgery care instructions." },
            { num: "2", title: "Airbag", desc: "A portable lumbar cushion — since seating can't be added, families can at least lean against the wall comfortably." },
            { num: "3", title: "Snacks", desc: "Gum, chocolate, tea, and nuts — nutrients that reduce mental stress, saving a trip to the overpriced café." },
            { num: "4", title: "Water", desc: "Stay hydrated, stay healthy." },
          ].map((item) => (
            <div key={item.num} className="bg-[#18181b] rounded-2xl p-5">
              <p className="text-3xl font-bold text-[#fafafa] mb-1">{item.num}</p>
              <p className="text-base font-semibold text-[#fafafa] mb-2">{item.title}</p>
              <p className="text-sm leading-6 text-[#94a3b8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Gallery */}
      <div className="mt-20">
        <SectionText title="Product Photography">
          <p>The final Guardian kit, photographed in context.</p>
        </SectionText>
        <div className="mt-10 max-w-[800px] mx-auto px-6">
          <div className="rounded-2xl overflow-hidden bg-[#18181b] mb-4">
            <Image
              src="/projects/guardian/product-1.jpg"
              alt="Guardian product"
              width={1600}
              height={900}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["product-2", "product-3", "product-4", "product-5"].map((img) => (
              <div key={img} className="rounded-2xl overflow-hidden bg-[#18181b]">
                <Image
                  src={`/projects/guardian/${img}.jpg`}
                  alt={`Guardian ${img}`}
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

    </main>
  )
}
