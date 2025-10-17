"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <motion.a href="#" className="text-xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Erfan</span>
          </motion.a>

          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium transition-colors hover:text-cyan-400"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
