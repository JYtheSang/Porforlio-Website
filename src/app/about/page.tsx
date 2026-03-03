import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me — Jie Yang",
  description: "Jie Yang is a user-centered designer born in Shanghai and currently based in the San Francisco Bay Area.",
}

export default function About() {
  return (
    <main className="max-w-[1250px] w-full mx-auto px-6 md:px-24 py-16">
      <div className="max-w-[580px]">

        <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#f5f5f5] mb-10">
          <Image
            src="/about-photo.jpg"
            alt="Jie Yang"
            width={800}
            height={533}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#6a7282] mb-4">
          About Me
        </p>

        <div className="flex flex-col gap-5 text-base leading-7 text-[#374151]">
          <p>
            Jie Yang is a user-centered designer born in Shanghai and currently based in the San Francisco Bay Area. He began his career in industrial design, where hands-on making and problem-solving shaped his approach to design. With a strong interest in understanding real user needs, he enjoys translating abstract problems into tangible, usable solutions.
          </p>
          <p>
            Jie earned a Bachelor&apos;s degree from <strong className="text-[#0a0a0a] font-semibold">Tongji University</strong>, completing his undergraduate studies at the <strong className="text-[#0a0a0a] font-semibold">Institute of Design (IIT)</strong>. He has worked at <strong className="text-[#0a0a0a] font-semibold">SAP</strong> and <strong className="text-[#0a0a0a] font-semibold">PayPal</strong>, contributing to consumer-facing digital products and cross-functional teams.
          </p>
          <p>
            As his work evolved, Jie became increasingly interested in how emerging technologies can be applied to improve people&apos;s lives in more meaningful and natural ways. He is currently pursuing a Master&apos;s degree in Computer Science at <strong className="text-[#0a0a0a] font-semibold">Georgia Tech (OMSCS)</strong> to deepen his technical understanding and strengthen the bridge between design and engineering.
          </p>
        </div>

        <a
          href="/Resume_JieY.pdf"
          download
          className="inline-flex items-center mt-10 px-5 py-2.5 bg-[#0a0a0a] text-white text-[13px] font-bold tracking-[1px] uppercase rounded-lg hover:opacity-80 transition-opacity"
        >
          Resume
        </a>

      </div>
    </main>
  )
}
