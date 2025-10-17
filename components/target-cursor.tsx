"use client"

import { useEffect, useRef } from "react"

export function TargetCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const target = targetRef.current
    if (!cursor || !target) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
      target.style.left = e.clientX + "px"
      target.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 mix-blend-difference"
      />
      <div
        ref={targetRef}
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/50 mix-blend-difference transition-transform duration-100"
      />
    </>
  )
}
