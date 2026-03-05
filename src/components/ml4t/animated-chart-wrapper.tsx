"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedChartWrapperProps {
  children: React.ReactNode
  /** Placeholder matches chart area dimensions to prevent layout shift */
  placeholderClassName?: string
}

export function AnimatedChartWrapper({
  children,
  placeholderClassName = "h-[260px] md:h-[300px]",
}: AnimatedChartWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
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
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full">
      {isVisible ? children : (
        <div className={`w-full shrink-0 px-4 pt-4 ${placeholderClassName}`} aria-hidden />
      )}
    </div>
  )
}
