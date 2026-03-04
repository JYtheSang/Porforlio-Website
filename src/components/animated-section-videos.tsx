"use client"

import { useEffect, useRef, useState } from "react"

const VIDEOS = [
  "/projects/paypal/paypal-theme-1.mov",
  "/projects/paypal/paypal-theme-2.mov",
  "/projects/paypal/paypal-theme-3.mov",
]

export function AnimatedSectionVideos() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      videoRefs.current.forEach((v) => { if (v) v.play().catch(() => {}) })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            videoRefs.current.forEach((v) => { if (v) v.play().catch(() => {}) })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => { observer.disconnect() }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden bg-white transform transition-all duration-[2000ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ borderRadius: "4%" }}
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-[4.5rem] p-6 sm:p-10 md:p-12 lg:p-16">
        {VIDEOS.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex-1 min-w-0"
            style={{
              maxWidth: "min(260px, 24%)",
              aspectRatio: "816 / 1692",
              borderRadius: "8%",
            }}
          >
            <video
              ref={(el) => { videoRefs.current[i] = el }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={src} />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
