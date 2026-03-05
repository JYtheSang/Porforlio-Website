import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pinterest Explorer — Jie Yang",
  description: "Pinterest Explorer UX Strategy case study.",
}

const assets = [
  { file: "1.jpg", type: "jpg" },
  { file: "2.jpg", type: "jpg" },
  { file: "3.jpg", type: "jpg" },
  { file: "4.jpg", type: "jpg" },
  { file: "5.gif", type: "gif" },
  { file: "6.gif", type: "gif" },
  { file: "7.gif", type: "gif" },
  { file: "8.jpg", type: "jpg" },
]

export default function PinterestExplorer() {
  return (
    <main className="pb-24">

      {/* Images stacked with no gap */}
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="flex w-full flex-col overflow-hidden rounded-2xl">
          {assets.map(({ file, type }, i) => (
            <div
              key={file}
              className="leading-[0] [&:not(:last-child)]:-mb-1"
            >
              {type === "gif" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/projects/pinterest-explorer/${file}`}
                  alt={`Pinterest Explorer — slide ${i + 1}`}
                  className="w-full h-auto block"
                />
              ) : (
                <Image
                  src={`/projects/pinterest-explorer/${file}`}
                  alt={`Pinterest Explorer — slide ${i + 1}`}
                  width={1600}
                  height={900}
                  className="w-full h-auto block"
                  loading={i < 3 ? "eager" : "lazy"}
                  priority={i === 0}
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
