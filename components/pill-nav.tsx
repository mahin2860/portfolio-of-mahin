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
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowCompact((prev) => {
      // hysteresis: only show after >140px, hide after <60px
      if (!prev && latest > 140) return true
      if (prev && latest < 60) return false
      return prev
    })
  })

  // Track active section based on scroll position for items with #href
  useEffect(() => {
    const onScroll = () => {
      const offset = 120
      let bestIndex = activeIndex
      let bestDistance = Infinity
      items.forEach((item, index) => {
        // Only track scroll position for section links
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

  const waitForElement = (selector: string, timeout = 5000): Promise<Element | null> => {
    return new Promise((resolve) => {
      const element = document.getElementById(selector);
      if (element) {
        return resolve(element);
      }

      const observer = new MutationObserver(() => {
        const element = document.getElementById(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Timeout to prevent infinite waiting
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    // Set active index immediately for visual feedback
    setActiveIndex(index)
    
    // For external page links, let Next.js handle routing
    if (!href.startsWith("#")) {
      setOverlay(true)
      setTimeout(() => setOverlay(false), 700)
      return
    }
    
    // For section links, we prevent default and scroll
    e.preventDefault()
    setOverlay(true)

    const targetId = href.replace("#", "")
    
    waitForElement(targetId).then((element) => {
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
      } else {
        // Fallback: try to find the element by other means
        const elements = document.querySelectorAll(`[id='${targetId}'], [data-section='${targetId}']`);
        if (elements.length > 0) {
          const element = elements[0];
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }
      
      setTimeout(() => setOverlay(false), 700)
    });
  }

  return (
    <>
      {/* Only show the compact navbar that appears after scroll, with name restored */}
      <AnimatePresence>
        {showCompact && (
          <motion.nav
            key="compact"
            initial={{ x: -100, y: -20, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, y: 20, opacity: 1, scale: 1 }}
            exit={{ x: -100, y: -20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-4 left-4 z-50 max-md:top-2 max-md:left-2"
          >
            <div className="flex items-center gap-2 rounded-md border border-primary/30 bg-background/90 backdrop-blur-xl shadow-lg px-3 py-1.5 max-md:px-2 max-md:py-1 max-md:text-xs">
              {/* Restored the name display in PillNav as requested */}
              <div className="order-2 px-2 font-extrabold tracking-wide text-primary whitespace-nowrap max-md:px-1 max-md:text-xs">
                Erfan Noor Mahin
              </div>
              <div className="order-1 flex items-center gap-1 max-md:gap-0.5">
                {items.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, index)}
                    className="relative z-10 rounded-sm px-2.5 py-1 max-md:px-1.5 max-md:py-0.5 max-md:text-xs font-semibold text-foreground/90"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      <span className={activeIndex === index ? "text-primary font-bold" : "text-foreground/80"}>{item.label}</span>
                      <motion.span
                        layoutId="tube"
                        className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-px rounded-full max-md:h-0.5"
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