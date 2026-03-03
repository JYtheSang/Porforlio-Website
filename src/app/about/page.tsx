import Image from "next/image"
import type { Metadata } from "next"
import { Linkedin, Instagram, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About Me — Jie Yang",
  description: "Jie Yang is a user-centered designer born in Shanghai and currently based in the San Francisco Bay Area.",
}

export default function About() {
  return (
    <main>
      <div className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-16 pb-0">
        <div className="max-w-[580px]">

        <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#27272a] mb-10">
          <Image
            src="/about-photo.jpg"
            alt="Jie Yang"
            width={800}
            height={533}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#a1a1aa] mb-4">
          About Me
        </p>

        <div className="flex flex-col gap-5 text-base leading-7 text-[#94a3b8]">
          <p>
            Jie Yang is a user-centered designer born in Shanghai and currently based in the San Francisco Bay Area. He began his career in industrial design, where hands-on making and problem-solving shaped his approach to design. With a strong interest in understanding real user needs, he enjoys translating abstract problems into tangible, usable solutions.
          </p>
          <p>
            Jie earned a Bachelor&apos;s degree from <strong className="text-[#fafafa] font-semibold">Tongji University</strong>, completing his undergraduate studies at the <strong className="text-[#fafafa] font-semibold">Institute of Design (IIT)</strong>. He has worked at <strong className="text-[#fafafa] font-semibold">SAP</strong> and <strong className="text-[#fafafa] font-semibold">PayPal</strong>, contributing to consumer-facing digital products and cross-functional teams.
          </p>
          <p>
            As his work evolved, Jie became increasingly interested in how emerging technologies can be applied to improve people&apos;s lives in more meaningful and natural ways. He is currently pursuing a Master&apos;s degree in Computer Science at <strong className="text-[#fafafa] font-semibold">Georgia Tech (OMSCS)</strong> to deepen his technical understanding and strengthen the bridge between design and engineering.
          </p>
        </div>

          <a
            href="/Resume_JieY.pdf"
            download
            className="inline-flex items-center mt-10 px-5 py-2.5 bg-[#fafafa] text-[#0a0a0a] text-[13px] font-bold tracking-[1px] uppercase rounded-lg hover:opacity-80 transition-opacity"
          >
            Resume
          </a>
        </div>
      </div>

      <footer
        id="footer"
        className="max-w-[1250px] w-full mx-auto px-6 md:px-24 py-20 flex flex-col items-center gap-6"
      >
        <div
          id="socialLinks"
          className="flex items-center justify-center gap-[36px]"
        >
          <a
            href="https://www.linkedin.com/in/jieyangdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#fafafa] hover:opacity-60 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/jieyang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#fafafa] hover:opacity-60 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a
            href="mailto:jieydesign@gmail.com"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#fafafa] hover:opacity-60 transition-opacity"
            aria-label="Email jieydesign@gmail.com"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </footer>
    </main>
  )
}
