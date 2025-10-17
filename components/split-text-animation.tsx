"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

interface SplitTextAnimationProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  animationType?: "letters" | "words" | "both"
  style?: React.CSSProperties
}

export function SplitTextAnimation({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03,
  animationType = "letters",
  style = {}
}: SplitTextAnimationProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Get the targets (letters or words)
    const targets = textRef.current.querySelectorAll(".letter, .word")

    // Animation configuration with enhanced effect for Bitro font
    const animationConfig = {
      translateY: [50, 0],
      opacity: [0, 1],
      rotateX: [-90, 0],
      duration: 800,
      delay: stagger(staggerDelay, { start: delay * 1000 }),
      easing: "easeOutQuart"
    }

    // Create the animation
    const animation = animate(targets, animationConfig)

    // Cleanup function
    return () => {
      animation.pause()
    }
  }, [delay, staggerDelay, animationType])

  // Split text into words and letters
  const renderText = () => {
    if (animationType === "words") {
      return text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word inline-block mr-2">
          {word}
        </span>
      ))
    } else if (animationType === "letters") {
      return text.split("").map((char, charIndex) => (
        <span key={charIndex} className="letter inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    } else {
      // Both words and letters
      return text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="letter inline-block">
              {char}
            </span>
          ))}
        </span>
      ))
    }
  }

  return (
    <div ref={textRef} className={className} style={style}>
      {renderText()}
    </div>
  )
}