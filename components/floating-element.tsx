"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FloatingElement({ children, delay = 0, duration = 3 }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
