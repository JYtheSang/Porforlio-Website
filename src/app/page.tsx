import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"
import { Linkedin, Instagram, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
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
