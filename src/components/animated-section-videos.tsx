"use client"

import { useEffect, useRef, useState } from "react"

const DEFAULT_VIDEOS = [
  "/projects/paypal/paypal-theme-1.mov",
  "/projects/paypal/paypal-theme-2.mov",
  "/projects/paypal/paypal-theme-3.mov",
]

const DURATION_PER_VIDEO_MS = 3000

interface AnimatedSectionVideosProps {
  videos?: string[]
  /** When true, plays one video at a time in sequence. When false, all play simultaneously. */
  sequential?: boolean
  /** When true, shows the "Playing" indicator under videos. */
  showPlayingIndicator?: boolean
}

export function AnimatedSectionVideos({
  videos = DEFAULT_VIDEOS,
  sequential = false,
  showPlayingIndicator = true,
}: AnimatedSectionVideosProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => { observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!isVisible || videos.length === 0) return

    if (!sequential) {
      videoRefs.current.forEach((v) => { if (v) v.play().catch(() => {}) })
      return
    }

    const playOne = (index: number) => {
      videoRefs.current.forEach((v, i) => {
        if (v) {
          if (i === index) {
            v.currentTime = 0
            v.play().catch(() => {})
          } else {
            v.pause()
          }
        }
      })
    }

    playOne(activeIndex)

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % videos.length
        playOne(next)
        return next
      })
    }, DURATION_PER_VIDEO_MS)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isVisible, videos.length, sequential])

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-2xl overflow-hidden bg-white transform transition-all duration-[2000ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-[4.5rem] p-6 sm:p-10 md:p-12 lg:p-16">
        {videos.map((src, i) => {
          const isPlaying = sequential ? i === activeIndex : true
          return (
            <div
              key={i}
              className="flex flex-col flex-1 min-w-0"
              style={{
                maxWidth: "min(260px, 24%)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "816 / 1692",
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
              <div className="mt-3 h-5 flex items-center justify-center">
                {showPlayingIndicator && isPlaying && (
                  <div className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#a1a1aa]">
                    <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-red-400/70 animate-ping" />
                      <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.35)]" />
                    </span>
                    <span>Playing</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
