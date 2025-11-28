"use client"

import { motion, useInView } from "framer-motion"
import { GlareHover } from "./glare-hover"
import { Rocket, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { StarDoodle, MoonDoodle, HeartDoodle, CircleDoodle, SquareDoodle, SparkleDoodle } from "@/components/doodle-elements"

const projects = [
  {
    title: "This Is Us",
    description:
      "Currently raising a startup focused on building innovative solutions for modern challenges. Leading the technical architecture and product development.",
    icon: Rocket,
    status: "In Progress",
    tags: ["Startup", "Full-Stack", "Leadership"],
    direction: "right",
    logo: "/Thisisus main logo.png",
    viewUrl: "https://thisisus-dev.vercel.app",
  },
  {
    title: "Notionary",
    description:
      "An online notepad community platform where users can create, share, and collaborate on notes. Building a seamless experience for knowledge sharing.",
    icon: FileText,
    status: "Active Development",
    tags: ["Community", "Real-time", "Collaboration"],
    direction: "left",
    logo: "/notionary-logo.png",
    viewUrl: "https://notionary-psi.vercel.app",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Trigger WAAPI left-to-right animation for project cards when section enters view
  useEffect(() => {
    if (!isInView || !sectionRef.current) return
    const root = sectionRef.current as HTMLElement
    const cards = Array.from(root.querySelectorAll('.circle')) as HTMLElement[]
    cards.forEach((el, index) => {
      try {
        el.animate(
          [
            { transform: 'translateX(-120px)', opacity: 0 },
            { transform: 'translateX(0px)', opacity: 1 }
          ],
          {
            duration: 600,
            delay: index * 120,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'backwards',
          }
        )
      } catch {}
    })
  }, [isInView])

  return (
    <section id="projects" className="relative responsive-padding" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        
        {/* Doodle elements for the projects section */}
        <StarDoodle className="absolute top-20 left-10 w-6 h-6" delay={0.5} />
        <MoonDoodle className="absolute top-32 right-16 w-8 h-8" delay={1} />
        <HeartDoodle className="absolute bottom-40 left-20 w-5 h-5" delay={1.5} />
        <CircleDoodle className="absolute top-1/3 right-32 w-10 h-10" delay={2} />
        <SquareDoodle className="absolute bottom-32 right-24 w-7 h-7" delay={2.5} />
        <SparkleDoodle className="absolute top-1/4 left-1/3 w-4 h-4" delay={3} />
        <StarDoodle className="absolute bottom-1/4 left-1/4 w-5 h-5" delay={3.5} />
        <HeartDoodle className="absolute top-3/4 right-1/3 w-6 h-6" delay={4} />
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
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subheader text-muted-foreground"
          >
            Building the future, one project at a time
          </motion.p>
        </motion.div>

        <div className="projects-separator my-10" />
        <div className="grid gap-8 responsive-gap md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
              } : {
                opacity: 0,
                y: 100,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <GlareHover className="h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="circle relative h-full overflow-hidden rounded-xl border-2 border-blue-400/30 bg-card p-8 shadow-lg hover:border-accent hover:shadow-accent/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 p-3 shadow-lg shadow-accent/20"
                      >
                        {project.logo ? (
                          <div className="relative h-12 w-12">
                            <Image 
                              src={project.logo} 
                              alt={`${project.title} logo`} 
                              fill 
                              className="object-contain" 
                            />
                          </div>
                        ) : (
                          <project.icon className="h-8 w-8 text-foreground" />
                        )}
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-full border border-foreground/30 bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground shadow-lg"
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    {/* Accent sweep animation instead of logo */}
                    <motion.div
                      aria-hidden
                      className="relative h-1.5 w-40 overflow-hidden rounded-full bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20"
                    >
                      <motion.span
                        className="absolute -left-1/3 top-0 h-full w-1/3 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(196, 118, 35, 0), rgba(161, 209, 177, 0.6), rgba(196, 118, 35, 0))",
                        }}
                        animate={{ x: ["-10%", "110%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      />
                    </motion.div>

                    <div className="space-y-3">
                      <h3 className="project-title font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="project-description leading-relaxed text-foreground/80">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.6 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="rounded-md border-2 border-foreground/20 bg-card/80 px-3 py-1 text-sm font-medium backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {project.viewUrl && (
                      <div className="pt-2">
                        <motion.a
                          href={project.viewUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-foreground/40 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Project</span>
                          <motion.span
                            className="relative inline-block"
                            animate={{ x: [0, 2, 0] }}
                            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
