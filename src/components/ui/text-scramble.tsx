"use client"

import { useState, useCallback, useRef, useEffect } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

interface TextScrambleProps {
  text: string
  targetText: string
  className?: string
}

export function TextScramble({
  text,
  targetText,
  className = "",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)
  const currentRef = useRef(text)

  const scrambleTo = useCallback((to: string) => {
    const from = currentRef.current
    frameRef.current = 0
    const maxLen = Math.max(from.length, to.length)
    const totalFrames = Math.max(maxLen * 2, 10)

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++
      const progress = frameRef.current / totalFrames

      const revealedCount = Math.floor(progress * to.length)
      const lenProgress = Math.min(progress * 1.2, 1)
      const currentLen = Math.round(
        from.length + (to.length - from.length) * lenProgress
      )

      const chars: string[] = []
      for (let i = 0; i < currentLen; i++) {
        if (i < revealedCount) {
          chars.push(to[i])
        } else {
          chars.push(CHARS[Math.floor(Math.random() * CHARS.length)])
        }
      }

      const newText = chars.join("")
      setDisplayText(newText)
      currentRef.current = newText

      if (frameRef.current >= totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(to)
        currentRef.current = to
      }
    }, 30)
  }, [])

  const handleMouseEnter = useCallback(() => {
    scrambleTo(targetText)
  }, [scrambleTo, targetText])

  const handleMouseLeave = useCallback(() => {
    scrambleTo(text)
  }, [scrambleTo, text])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0">{displayText}</span>
    </span>
  )
}
