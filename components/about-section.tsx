"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" className="relative responsive-padding py-20" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 space-y-4 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header font-rosca font-bold tracking-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subheader text-muted-foreground"
          >
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="projects-separator my-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <motion.p 
              className="text-foreground mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm a 19-year-old tech enthusiast with a passion for creating innovative solutions through code.
            </motion.p>
            
            <motion.p 
              className="text-foreground mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              My journey in technology began early, and I've since developed expertise in web application development,
              database management, and modern frontend frameworks.
            </motion.p>
            
            <motion.p 
              className="text-foreground mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I specialize in building responsive, user-friendly applications using cutting-edge technologies like
              React, Next.js, and Node.js. My approach combines technical excellence with creative problem-solving.
            </motion.p>
            
            <motion.p 
              className="text-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge with the developer community.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}