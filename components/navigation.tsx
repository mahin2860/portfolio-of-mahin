"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hide the navigation when scrolling
  if (scrolled) {
    return null
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Removed the name display from the main navigation */}
          <div></div>

          <div className="flex items-center gap-4 md:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  pathname === item.href ? "text-cyan-400 font-bold" : ""
                }`}
              >
                {item.name}
                {/* Add underline for active item */}
                {pathname === item.href && (
                  <motion.div
                    className="h-0.5 bg-cyan-400 mt-1"
                    layoutId="nav-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}