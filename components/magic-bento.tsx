"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagicBentoProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MagicBento({ children, className, delay = 0 }: MagicBentoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm", className)}
    >
      {children}
    </motion.div>
  )
}
