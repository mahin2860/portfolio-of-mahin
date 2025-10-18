"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface DoodleProps {
  className?: string
  animate?: boolean
  delay?: number
  duration?: number
}

export function StarDoodle({ className = "", animate = true, delay = 0, duration = 20 }: DoodleProps) {
  return (
    <motion.div
      className={`text-accent/20 ${className}`}
      animate={animate ? { rotate: 360 } : {}}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
      </svg>
    </motion.div>
  )
}

export function MoonDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`text-pale-sand/30 ${className}`}
      animate={animate ? { x: [0, 5, 0], y: [0, -5, 0] } : {}}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
      </svg>
    </motion.div>
  )
}

export function CloudDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`text-soft-blush/40 ${className}`}
      animate={animate ? { x: [0, 3, 0] } : {}}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z" />
      </svg>
    </motion.div>
  )
}

export function HeartDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`text-bronze-orange/40 ${className}`}
      animate={animate ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
    </motion.div>
  )
}

export function CircleDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`rounded-full border-2 border-secondary/20 ${className}`}
      animate={animate ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

export function SquareDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`rounded-lg border-2 border-accent/20 ${className}`}
      animate={animate ? { rotate: [0, 10, 0] } : {}}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

export function TriangleDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`text-mint-green/30 ${className}`}
      animate={animate ? { rotate: [0, 15, 0] } : {}}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1,21L12,3L23,21H1Z" />
      </svg>
    </motion.div>
  )
}

export function SparkleDoodle({ className = "", animate = true, delay = 0 }: DoodleProps) {
  return (
    <motion.div
      className={`text-amber-gold/50 ${className}`}
      animate={animate ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12,0L14.59,8.41L23,11L14.59,13.59L12,22L9.41,13.59L1,11L9.41,8.41L12,0Z" />
      </svg>
    </motion.div>
  )
}