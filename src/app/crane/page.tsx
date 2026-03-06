import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Planning for Crane — Jie Yang",
  description: "Portfolio planning case study for Crane-USA.",
}

const slides = Array.from({ length: 11 }, (_, i) => i + 1)

export default function Crane() {
  return (
    <main className="pb-24">
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full overflow-hidden rounded-2xl">
          {slides.map((n) => (
            <Image
              key={n}
              src={`/projects/crane/${n}.webp`}
              alt={`Portfolio Planning for Crane-USA — slide ${n}`}
              width={1600}
              height={1200}
              className="w-full h-auto block"
              loading={n <= 2 ? "eager" : "lazy"}
              priority={n === 1}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
