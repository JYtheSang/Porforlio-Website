import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ryanair Adventure — Jie Yang",
  description: "Ryanair Adventure product design case study.",
}

const images = Array.from({ length: 8 }, (_, i) => i + 1)

export default function RyanairAdventure() {
  return (
    <main className="pb-24">

      {/* Images stacked with no gap */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full overflow-hidden rounded-2xl">
          {images.map((n) => (
            <Image
              key={n}
              src={`/projects/ryanair-adventure/${n}.jpg`}
              alt={`Ryanair Adventure — slide ${n}`}
              width={1600}
              height={900}
              className="w-full h-auto block"
              loading={n <= 3 ? "eager" : "lazy"}
              priority={n === 1}
            />
          ))}
        </div>
      </div>

    </main>
  )
}
