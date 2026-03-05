"use client"

import Image, { type ImageProps } from "next/image"
import { useEffect, useRef, useState } from "react"

type AnimatedSectionImageProps = ImageProps & {
  containerClassName?: string
}

export function AnimatedSectionImage({
  className,
  containerClassName,
  ...imageProps
}: AnimatedSectionImageProps) {
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
      {
        threshold: 0.25,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`w-full rounded-2xl overflow-hidden bg-[#18181b] transform transition-all duration-2000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${containerClassName ?? ""}`}
    >
      <Image
        {...imageProps}
        className={`block w-full h-auto ${className ?? ""}`}
      />
    </div>
  )
}

