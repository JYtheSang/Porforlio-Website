"use client"

import Image from "next/image"

export function NavbarClient() {
  return (
    <nav className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-9 pb-4 flex items-center justify-between">

        {/* Left: logo */}
        <a href="/" className="block h-[32px] w-[32px]">
          <Image
            src="/projects/logo_squared.png"
            alt="Jie Yang"
            width={50}
            height={50}
            className="rounded-none object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </a>

        {/* Right: nav links */}
        <div className="flex items-center gap-[36px]">
          <a
            href="#work"
            className="text-[13px] font-bold tracking-[1px] uppercase text-[#60a5fa] hover:opacity-80 transition-opacity"
          >
            Design
          </a>
          <a
            href="/about"
            className="text-[13px] font-bold tracking-[1px] uppercase text-[#fafafa] hover:opacity-60 transition-opacity"
          >
            About Me
          </a>
        </div>

      </div>
    </nav>
  )
}
