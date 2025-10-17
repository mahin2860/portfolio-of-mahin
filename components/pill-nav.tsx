"use client"

import type React from "react"
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"

interface NavItem {
  label: string
  href: string
}

interface PillNavProps {
  items: NavItem[]
  activeHref?: string
  className?: string
}

export function PillNav({ items, activeHref = "/", className = "" }: PillNavProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showCompact, setShowCompact] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [shrinkProgress, setShrinkProgress] = useState(0) // 0 = full, 1 = shrunk
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowCompact((prev) => {
      // hysteresis: only show after >140px, hide after <60px
      if (!prev && latest > 140) return true
      if (prev && latest < 60) return false
      return prev
    })

    // Compute smooth shrink progress for primary navbar between 0 and 1
    const clamped = Math.max(0, Math.min(1, latest / 140))
    setShrinkProgress(clamped)
  })

  // Track active section based on scroll position for items with #href
  useEffect(() => {
    const onScroll = () => {
      const offset = 120
      let bestIndex = activeIndex
      let bestDistance = Infinity
      items.forEach((item, index) => {
        if (!item.href.startsWith('#')) return
        const id = item.href.slice(1)
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top - offset)
        if (rect.top <= offset && distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        }
      })
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [items, activeIndex])

  useEffect(() => {
    const index = items.findIndex((item) => item.href === activeHref)
    if (index !== -1) setActiveIndex(index)
  }, [activeHref, items])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    // Set active index immediately for visual feedback
    setActiveIndex(index)
    
    // For internal page links, we don't prevent default - let Next.js handle routing
    if (!href.startsWith("#")) {
      setOverlay(true)
      setTimeout(() => setOverlay(false), 700)
      return
    }
    
    // For section links, we prevent default and scroll
    e.preventDefault()
    setOverlay(true)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
    }
    
    setTimeout(() => setOverlay(false), 700)
  }

  return (
    <>
      {/* Full-width primary navbar (transparent with backdrop blur) */}
      <AnimatePresence>
        {!showCompact && (
          <motion.nav
            key="full"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -8 * shrinkProgress, opacity: 1 }}
            exit={{ y: -20, opacity: 0, height: "auto" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-40 ${className}`}
            style={{
              // Smaller base height; shrinks more
              height: `${40 - 12 * shrinkProgress}px`,
              backgroundColor: `rgba(30,30,30,${0.4 + 0.4 * shrinkProgress})`,
              backdropFilter: `saturate(${100 + 20 * shrinkProgress}%) blur(${8 + 4 * shrinkProgress}px)`,
            }}
          >
            <div className="fluid-container">
              <div className="flex items-center justify-between gap-3" style={{ height: "100%" }}>
                {/* No name at first as requested */}
                <div className="px-4 font-bold whitespace-nowrap tracking-wide text-transparent">&nbsp;</div>
                <div className="relative flex items-center gap-1 pr-2">
                  {items.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, index)}
                      className="relative z-10 rounded-sm text-sm font-semibold text-foreground/90"
                      style={{
                        paddingLeft: `${10 - 3 * shrinkProgress}px`,
                        paddingRight: `${10 - 3 * shrinkProgress}px`,
                        paddingTop: `${4 - 1 * shrinkProgress}px`,
                        paddingBottom: `${4 - 1 * shrinkProgress}px`,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative">
                        <span className={activeIndex === index ? "text-primary font-bold" : "text-foreground/80"}>{item.label}</span>
                        <motion.span
                          layoutId="tube"
                          className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px rounded-full"
                          style={{ background: "linear-gradient(90deg, rgba(255,102,179,0), rgba(255,102,179,0.7), rgba(255,102,179,0))" }}
                          animate={activeIndex === index ? { opacity: 1, scaleX: [0.3, 1, 0.96, 1] } : { opacity: 0.15, scaleX: 0.3 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Compact squared navbar that appears after scroll, left-aligned with flying animation */}
      <AnimatePresence>
        {showCompact && (
          <motion.nav
            key="compact"
            initial={{ x: -100, y: -20, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, y: 20, opacity: 1, scale: 1 }}
            exit={{ x: -100, y: -20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-4 left-4 z-50"
          >
            <div className="flex items-center gap-2 rounded-md border border-primary/30 bg-background/90 backdrop-blur-xl shadow-lg px-3 py-1.5">
              <div className="order-2 px-2 text-sm font-extrabold tracking-wide text-primary whitespace-nowrap">
                Erfan Noor Mahin
              </div>
              <div className="order-1 flex items-center gap-1">
                {items.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, index)}
                    className="relative z-10 rounded-sm px-2.5 py-1 text-xs font-semibold text-foreground/90"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      <span className={activeIndex === index ? "text-primary font-bold" : "text-foreground/80"}>{item.label}</span>
                      <motion.span
                        layoutId="tube"
                        className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-px rounded-full"
                        style={{ background: "linear-gradient(90deg, rgba(255,102,179,0), rgba(255,102,179,0.7), rgba(255,102,179,0))" }}
                        animate={activeIndex === index ? { opacity: 1, scaleX: [0.3, 1, 0.96, 1] } : { opacity: 0.15, scaleX: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Page overlap transition overlay */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            key="overlay"
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95"
          />
        )}
      </AnimatePresence>
    </>
  )
}