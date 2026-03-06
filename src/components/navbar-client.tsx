"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { TextScramble } from "@/components/ui/text-scramble"

export function NavbarClient() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const isAbout = pathname === "/about"

  return (
    <nav className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-9 pb-4 flex items-center justify-between">

        {/* Left: name */}
        <Link href="/" className="text-[17px] font-bold text-[#fafafa] transition-opacity">
          <TextScramble text="Jie Yang" targetText="杨捷" />
        </Link>

        {/* Right: nav links */}
        <div className="flex items-center gap-[36px]">
          <Link
            href="/"
            className={`text-[13px] font-bold tracking-[0px] ${
              isHome ? "text-[#60a5fa] hover:opacity-80" : "text-[#fafafa] hover:opacity-60"
            } transition-opacity`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-[13px] font-bold tracking-normal ${
              isAbout ? "text-[#60a5fa] hover:opacity-80" : "text-[#fafafa] hover:opacity-60"
            } transition-opacity`}
          >
            About Me
          </Link>
        </div>

      </div>
    </nav>
  )
}
