import Image from "next/image"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "SAP CoPilot — Jie Yang",
  description: "SAP CoPilot product design case study.",
}

const images = Array.from({ length: 19 }, (_, i) => i + 1)

export default function SAPCopilot() {
  return (
    <main className="pb-24">

      {/* Images stacked with no gap */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="w-full overflow-hidden rounded-2xl">
          {images.map((n) => (
            <Image
              key={n}
              src={`/projects/sap-copilot/${n}.jpg`}
              alt={`SAP CoPilot — slide ${n}`}
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
