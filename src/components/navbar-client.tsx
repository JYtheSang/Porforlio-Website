"use client"

import Image from "next/image"

export function NavbarClient() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-9 pb-4 flex items-center justify-between">

        {/* Left: logo */}
        <a href="/" className="block">
          <Image
            src="/logo.png"
            alt="Jie Yang"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        </a>

        {/* Right: nav links */}
        <div className="flex items-center gap-[36px]">
          <a
            href="#work"
            className="text-[13px] font-bold tracking-[1px] uppercase text-[#4682f1] hover:opacity-80 transition-opacity"
          >
            Design
          </a>
          <a
            href="/about"
            className="text-[13px] font-bold tracking-[1px] uppercase text-[#0a0a0a] hover:opacity-60 transition-opacity"
          >
            About Me
          </a>
        </div>

      </div>
    </nav>
  )
}
