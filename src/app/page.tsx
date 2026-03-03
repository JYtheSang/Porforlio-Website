import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <footer className="flex flex-col items-center gap-3 py-20 px-6 text-center">
        <a
          href="mailto:jieyang@jieyangdesign.com"
          className="text-base font-normal tracking-[-0.31px] leading-6 text-[#101828] hover:text-[#0a0a0a] transition-colors"
        >
          Get in touch @ jieyang@jieyangdesign.com
        </a>
        <div className="flex gap-2 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/jieyangdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal tracking-[-0.31px] leading-6 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            Linkedin/
          </a>
          <a
            href="https://www.instagram.com/jieyang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal tracking-[-0.31px] leading-6 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            Instagram/
          </a>
          <a
            href="https://www.jieyangdesign.com/about"
            className="text-base font-normal tracking-[-0.31px] leading-6 text-[#4a5565] hover:text-[#0a0a0a] transition-colors"
          >
            About
          </a>
        </div>
      </footer>
    </main>
  )
}
