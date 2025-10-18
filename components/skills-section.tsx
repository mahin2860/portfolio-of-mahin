"use client"

import { motion, useInView } from "framer-motion"
import { SpotlightCard } from "./spotlight-card"
import { MagicBento } from "./magic-bento"
import { FluidGlass } from "./fluid-glass"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { GridBackground } from "@/components/ui/grid-background"
import { StarDoodle, MoonDoodle, CloudDoodle, HeartDoodle, CircleDoodle, SquareDoodle, TriangleDoodle, SparkleDoodle } from "@/components/doodle-elements"

const skills = [
  {
    name: "HTML",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    category: "frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Supabase",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "SQL",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SEO with AI",
    category: "other",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
]

const tools = [
  {
    name: "PyCharm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
]

export function SkillsSection() {
  const sectionRef = useRef(null)
  const orbitalRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [rotationSpeed, setRotationSpeed] = useState({ orbit1: 24, orbit2: 20, orbit3: 16, orbit4: 12 })
  const [isHovering, setIsHovering] = useState(false)

  // Handle mouse movement for orbital control
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering || !orbitalRef.current) return
      
      const rect = orbitalRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate distance from center
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      // Calculate angle and distance
      const angle = Math.atan2(deltaY, deltaX)
      const distance = Math.min(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY) / (rect.width / 2))
      
      // Adjust rotation speed based on mouse position
      const baseSpeed = 20
      const speedFactor = 1 + distance * 2 // Speed up when mouse is further from center
      const directionFactor = deltaX > 0 ? 1 : -1 // Change direction based on horizontal position
      
      setRotationSpeed({
        orbit1: baseSpeed * speedFactor * directionFactor,
        orbit2: baseSpeed * speedFactor * directionFactor * 0.8,
        orbit3: baseSpeed * speedFactor * directionFactor * 0.6,
        orbit4: baseSpeed * speedFactor * directionFactor * 0.4
      })
    }

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering])

  return (
    <section id="skills" className="relative responsive-padding" ref={sectionRef}>
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20">
        <GridBackground 
          gridSize="12:12"
          colors={{
            background: "bg-background",
            borderColor: "border-cyan-500/10",
            borderSize: "1px",
            borderStyle: "solid",
          }}
          beams={{
            count: 6,
            colors: [
              "bg-cyan-400/40",
              "bg-purple-400/40",
              "bg-pink-400/40",
            ],
            shadow: "shadow-lg shadow-cyan-400/30 rounded-full",
            speed: 8,
          }}
        />
      </div>
      
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
        
        {/* Doodle elements for the skills section */}
        <StarDoodle className="absolute top-20 left-10 w-6 h-6" delay={0.5} />
        <MoonDoodle className="absolute top-32 right-16 w-8 h-8" delay={1} />
        <CloudDoodle className="absolute bottom-40 left-20 w-10 h-6" delay={1.5} />
        <HeartDoodle className="absolute top-1/3 right-32 w-5 h-5" delay={2} />
        <CircleDoodle className="absolute bottom-32 right-24 w-8 h-8" delay={2.5} />
        <SquareDoodle className="absolute top-1/4 left-1/3 w-7 h-7" delay={3} />
        <TriangleDoodle className="absolute bottom-1/4 left-1/4 w-6 h-6" delay={3.5} />
        <SparkleDoodle className="absolute top-3/4 right-1/3 w-4 h-4" delay={4} />
      </div>

      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header font-rosca font-bold tracking-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase"
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subheader text-muted-foreground"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-background/50 backdrop-blur-sm p-8">
          {/* Box Grid Background */}
          <div className="absolute inset-0 -z-10">
            <GridBackground 
              gridSize="12:12"
              colors={{
                background: "bg-background/60",
                borderColor: "border-primary/10",
                borderSize: "1px",
                borderStyle: "solid",
              }}
              beams={{
                count: 4,
                colors: [
                  "bg-cyan-400/30",
                  "bg-purple-400/30",
                  "bg-pink-400/30",
                  "bg-blue-400/30",
                ],
                shadow: "shadow-md shadow-cyan-400/20 rounded-full",
                speed: 6,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 responsive-gap items-start mb-16">
            {/* Left column - Orbital animation */}
            <div 
              ref={orbitalRef}
              className="relative mx-auto lg:mx-0 lg:ml-28 my-8 lg:my-20 h-80 w-80 group sm:h-72 sm:w-72 max-sm:h-64 max-sm:w-64 max-[400px]:h-56 max-[400px]:w-56 transform-gpu"
              style={{ transform: "translateZ(0)" }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false)
                // Reset to default speeds when not hovering
                setRotationSpeed({ orbit1: 24, orbit2: 20, orbit3: 16, orbit4: 12 })
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center transform-gpu" style={{ transform: "translateZ(20px)" }}>
                <div className="rounded-full bg-background/60 px-5 py-2 text-lg font-extrabold tracking-wide text-foreground shadow-inner border border-border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg max-sm:px-4 max-sm:py-1 max-sm:text-base max-[400px]:text-sm transform-gpu" style={{ transform: "translateZ(30px)" }}>
                  Skills
                </div>
              </div>
              {/* Orbit 1 - HTML/CSS/JS/TS with 3D effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/30 transition-all duration-300 group-hover:border-primary/50 transform-gpu"
                style={{ transform: "translateZ(10px)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: rotationSpeed.orbit1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 max-sm:-top-3 transform-gpu" style={{ transform: "translateZ(15px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[0]?.logo || "/placeholder.svg"} alt="HTML" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 transition-transform duration-300 hover:scale-125 hover:-translate-x-1 max-sm:-left-3 transform-gpu" style={{ transform: "translateZ(15px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[1]?.logo || "/placeholder.svg"} alt="CSS" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:translate-y-1 max-sm:-bottom-3 transform-gpu" style={{ transform: "translateZ(15px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[2]?.logo || "/placeholder.svg"} alt="JavaScript" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 transition-transform duration-300 hover:scale-125 hover:translate-x-1 max-sm:-right-3 transform-gpu" style={{ transform: "translateZ(15px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[3]?.logo || "/placeholder.svg"} alt="TypeScript" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
              {/* Orbit 2 - Next.js / Supabase with 3D effect */}
              <motion.div
                className="absolute inset-6 rounded-full border border-secondary/30 transition-all duration-300 group-hover:border-secondary/50 sm:inset-5 max-sm:inset-4 transform-gpu"
                style={{ transform: "translateZ(5px)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: rotationSpeed.orbit2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 max-sm:-top-3 transform-gpu" style={{ transform: "translateZ(10px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[4]?.logo || "/placeholder.svg"} alt="Next.js" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:translate-y-1 max-sm:-bottom-3 transform-gpu" style={{ transform: "translateZ(10px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[5]?.logo || "/placeholder.svg"} alt="Supabase" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
              {/* Orbit 3 - SQL / Git with 3D effect */}
              <motion.div
                className="absolute inset-12 rounded-full border border-accent/30 transition-all duration-300 group-hover:border-accent/50 sm:inset-10 max-sm:inset-8 transform-gpu"
                style={{ transform: "translateZ(0px)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: rotationSpeed.orbit3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:-translate-y-1 max-sm:-top-3 transform-gpu" style={{ transform: "translateZ(5px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={skills[6]?.logo || "/placeholder.svg"} alt="SQL" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-125 hover:translate-y-1 max-sm:-bottom-3 transform-gpu" style={{ transform: "translateZ(5px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={tools[3]?.logo || "/placeholder.svg"} alt="Git" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
              {/* Orbit 4 - VS Code / GitHub with 3D effect */}
              <motion.div
                className="absolute inset-20 rounded-full border border-foreground/20 transition-all duration-300 group-hover:border-foreground/40 sm:inset-16 max-sm:inset-12 transform-gpu"
                style={{ transform: "translateZ(-5px)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: rotationSpeed.orbit4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 transition-transform duration-300 hover:scale-125 hover:-translate-x-1 max-sm:-left-3 transform-gpu" style={{ transform: "translateZ(0px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={tools[1]?.logo || "/placeholder.svg"} alt="VS Code" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 transition-transform duration-300 hover:scale-125 hover:translate-x-1 max-sm:-right-3 transform-gpu" style={{ transform: "translateZ(0px)" }}>
                  <div className="relative h-6 w-6 max-sm:h-5 max-sm:w-5">
                    <Image src={tools[2]?.logo || "/placeholder.svg"} alt="GitHub" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right column - All 8 skills in organized grid */}
            <div className="space-y-8 mt-8 lg:mt-0">
              <MagicBento delay={0}>
                <FluidGlass className="p-0">
                  <SpotlightCard className="border-0 bg-transparent p-8 border border-cyan-200/30">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      className="skill-category mb-6 text-2xl font-bold text-cyan-400"
                    >
                      Frontend & Backend
                    </motion.h3>
                    {/* Layout: All 8 skills in organized grid */}
                    <div className="space-y-4">
                      {/* First row - HTML, CSS */}
                      <div className="grid grid-cols-2 gap-4">
                        {skills.slice(0, 2).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
                            transition={{
                              delay: index * 0.08,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 100,
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -5,
                              boxShadow: "0 10px 25px rgba(255, 102, 179, 0.3)",
                            }}
                            className="group relative flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-gradient-to-br from-background/80 to-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-primary/20"
                          >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 group-hover:opacity-100" />

                            <motion.div
                              className="relative h-12 w-12"
                              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </motion.div>
                            <span className="skill-name relative text-center text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Second row - JavaScript, TypeScript */}
                      <div className="grid grid-cols-2 gap-4">
                        {skills.slice(2, 4).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
                            transition={{
                              delay: (index + 2) * 0.08,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 100,
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -5,
                              boxShadow: "0 10px 25px rgba(255, 102, 179, 0.3)",
                            }}
                            className="group relative flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-gradient-to-br from-background/80 to-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-primary/20"
                          >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 group-hover:opacity-100" />

                            <motion.div
                              className="relative h-12 w-12"
                              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </motion.div>
                            <span className="skill-name relative text-center text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Third row - Next.js, Supabase, SQL, SEO with AI - aligned to the left */}
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {skills.slice(4).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5, y: 50 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
                            transition={{
                              delay: (index + 4) * 0.08,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 100,
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -5,
                              boxShadow: "0 10px 25px rgba(255, 102, 179, 0.3)",
                            }}
                            className="group relative flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-gradient-to-br from-background/80 to-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-primary/20"
                          >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 group-hover:opacity-100" />

                            <motion.div
                              className="relative h-12 w-12"
                              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Image
                                src={skill.logo || "/placeholder.svg"}
                                alt={skill.name}
                                fill
                                className="object-contain"
                              />
                            </motion.div>
                            <span className="skill-name relative text-center text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </FluidGlass>
              </MagicBento>
            </div>
          </div>
          
          {/* Development Tools - Centered below the grid */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <MagicBento delay={0.2}>
              <FluidGlass className="p-0">
                <SpotlightCard className="border-0 bg-transparent p-8 border border-cyan-200/30">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    className="skill-category mb-6 text-2xl font-bold text-purple-400 text-center"
                  >
                    Development Tools
                  </motion.h3>
                  <div className="grid grid-cols-2 gap-4 responsive-gap md:grid-cols-2 lg:grid-cols-4">
                    {tools.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          boxShadow: "0 10px 25px rgba(161, 94, 255, 0.3)",
                        }}
                        className="group relative flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-gradient-to-br from-background/80 to-card/50 backdrop-blur-sm p-4 transition-all hover:border-secondary hover:bg-secondary/10 shadow-md hover:shadow-secondary/20"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/0 via-accent/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:from-secondary/5 group-hover:via-accent/5 group-hover:to-primary/5 group-hover:opacity-100" />

                        <motion.div
                          className="relative h-12 w-12"
                          whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={tool.logo || "/placeholder.svg"}
                            alt={tool.name}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                        <span className="skill-name relative text-center text-sm font-medium text-foreground">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </SpotlightCard>
              </FluidGlass>
            </MagicBento>
          </div>
        </div>
      </div>
    </section>
  )
}