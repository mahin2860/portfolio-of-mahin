"use client"

import { motion } from "framer-motion"
import { StarDoodle, HeartDoodle, SparkleDoodle } from "@/components/doodle-elements"

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-12 md:px-8 bg-background">
      <div className="absolute inset-0 -z-10">
        {/* Doodle elements for the footer */}
        <StarDoodle className="absolute top-4 left-10 w-4 h-4" delay={0.5} />
        <HeartDoodle className="absolute top-6 right-16 w-5 h-5" delay={1} />
        <SparkleDoodle className="absolute bottom-4 left-1/3 w-3 h-3" delay={1.5} />
        <StarDoodle className="absolute bottom-6 right-1/4 w-4 h-4" delay={2} />
      </div>
      
      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-foreground/80">
              © {new Date().getFullYear()} Erfan Noor Mahin. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60 mt-1">
              Built with Next.js, Framer Motion & Tailwind CSS
            </p>
          </div>
          <div className="flex space-x-4">

          </div>
        </motion.div>
      </div>
    </footer>
  )
}
