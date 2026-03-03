import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"
import { Linkedin, Instagram } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <footer
        id="footer"
        className="max-w-[1250px] w-full mx-auto px-6 md:px-24 py-20 flex flex-col items-center gap-6"
      >
        <a
          href="mailto:jieyang@jieyangdesign.com"
          className="text-base font-normal tracking-[-0.31px] leading-6 text-[#101828] hover:text-[#0a0a0a] transition-colors"
        >
          Get in touch @ jieyang@jieyangdesign.com
        </a>
        <div
          id="socialLinks"
          className="flex items-center justify-center gap-[36px]"
        >
          <a
            href="https://www.linkedin.com/in/jieyangdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#0a0a0a] hover:opacity-60 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/jieyang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#0a0a0a] hover:opacity-60 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a
            href="/about"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#0a0a0a] hover:opacity-60 transition-opacity"
          >
            About Me
          </a>
        </div>
      </footer>
    </main>
  )
}
