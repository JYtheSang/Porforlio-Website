"use client"

export function NavbarClient() {
  return (
    <nav className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1250px] w-full mx-auto px-6 md:px-24 pt-9 pb-4 flex items-center justify-between">

        {/* Left: name */}
        <a href="/" className="text-[17px] font-bold text-[#fafafa] hover:opacity-80 transition-opacity">
          Jie Yang
        </a>

        {/* Right: nav links */}
        <div className="flex items-center gap-[36px]">
          <a
            href="#work"
            className="text-[13px] font-bold tracking-[0px] text-[#60a5fa] hover:opacity-80 transition-opacity"
          >
            Work
          </a>
          <a
            href="/about"
            className="text-[13px] font-bold tracking-normal text-[#fafafa] hover:opacity-60 transition-opacity"
          >
            About Me
          </a>
        </div>

      </div>
    </nav>
  )
}
