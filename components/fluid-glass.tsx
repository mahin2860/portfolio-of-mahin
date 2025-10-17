"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface FluidGlassProps {
  children: React.ReactNode
  className?: string
}

export function FluidGlass({ children, className }: FluidGlassProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      {children}
    </div>
  )
}
