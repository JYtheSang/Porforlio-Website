import { Hero } from "@/components/hero"
import { ProjectSection } from "@/components/project-section"
import { BuiltWith } from "@/components/built-with"
import { Linkedin, Instagram, Mail, FileText } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <footer
        id="footer"
        className="max-w-[1250px] w-full mx-auto px-6 md:px-24 py-16 flex flex-col items-center gap-6"
      >
        <div
          id="socialLinks"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
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
            href="https://www.instagram.com/jyaanng"
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
          <a
            href="/Resume_JieY.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold tracking-[1px] uppercase text-[#fafafa] hover:opacity-60 transition-opacity"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      </footer>
      <BuiltWith />
    </main>
  )
}
