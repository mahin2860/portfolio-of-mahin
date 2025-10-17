"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const letters = textRef.current.querySelectorAll(".letter")

    letters.forEach((letter, index) => {
      const element = letter as HTMLElement
      setTimeout(
        () => {
          element.style.opacity = "1"
          element.style.transform = "translateY(0) rotateX(0)"
        },
        index * 50 + delay * 1000,
      )
    })
  }, [delay])

  return (
    <span ref={textRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block transition-all duration-500"
          style={{
            opacity: 0,
            transform: "translateY(20px) rotateX(-90deg)",
            transformOrigin: "center bottom",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
