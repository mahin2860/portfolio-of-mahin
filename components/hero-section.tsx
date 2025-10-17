"use client"

import { motion, easeOut } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { FloatingElement } from "./floating-element"
import { FluidGlass } from "./fluid-glass"
import { StarButton } from "@/components/ui/star-button"
import { HoverButton } from "@/components/ui/hover-glow-button"
import { SplitTextAnimation } from "@/components/split-text-animation"

export function HeroSection() {
  const blobRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!blobRef.current || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        x: 60,
        y: -40,
        scale: 1.08,
        rotate: 8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 0.6,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  }

  const greeting = "Hi I'm"
  const name = "Erfan Noor Mahin"
  const title = "19-year-old tech enthusiast"

  return (
    <section id="home" className="relative w-full overflow-hidden responsive-padding in-view flex items-center py-20 min-h-screen" ref={sectionRef}>
      {/* Warm Dreamscape gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Organic blob backdrop with warm dreamscape colors */}
        <div
          ref={blobRef}
          className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] blur-2xl"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 50%, rgba(255,102,179,0.55), rgba(91,142,255,0.35) 60%, rgba(255,212,71,0.2) 100%)",
            clipPath:
              "path('M 175 0 C 240 15 300 60 320 130 C 340 200 320 270 270 310 C 220 350 140 360 85 320 C 30 280 0 200 10 130 C 20 60 110 -15 175 0 Z')",
            opacity: 0.9,
          }}
        />
        {/* Additional gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF66B3]/50 to-[#5B8EFF]/30"></div>
        
        {/* Decorative background elements above and below content */}
        {/* Star-shaped doodles */}
        <motion.div 
          className="absolute top-20 left-10 w-8 h-8 text-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-6 h-6 text-primary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        {/* Additional stars on the right side */}
        <motion.div 
          className="absolute top-1/4 right-24 w-4 h-4 text-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-16 w-5 h-5 text-secondary/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-2/3 right-32 w-3 h-3 text-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        {/* Additional thematic stars on the right side */}
        <motion.div 
          className="absolute top-1/5 right-40 w-3 h-3 text-amber-200/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-3/5 right-36 w-4 h-4 text-mint-green/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-2/5 right-44 w-2 h-2 text-soft-blush/50"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        {/* Additional moon elements */}
        <motion.div 
          className="absolute top-4/5 right-28 w-8 h-8 text-pale-sand/30"
          animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
          </svg>
        </motion.div>
        
        {/* Crescent moon variant */}
        <motion.div 
          className="absolute top-1/3 right-48 w-6 h-6 text-bronze-orange/20"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2Z" />
            <path d="M12 22C12 22 12 22 12 22C12 22 12 22 12 22C12 22 12 22 12 22C12 22 12 22 12 22Z" />
          </svg>
        </motion.div>
        
        {/* Moon on the right side */}
        <motion.div 
          className="absolute top-1/2 right-8 w-12 h-12 text-accent/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
          </svg>
        </motion.div>
        
        {/* Additional star near the moon */}
        <motion.div 
          className="absolute top-2/5 right-12 w-4 h-4 text-secondary/40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </motion.div>
        
        {/* Oval-shaped doodles */}
        <motion.div 
          className="absolute top-1/3 right-20 w-16 h-10 rounded-full border-2 border-secondary/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-20 w-12 h-8 rounded-full border-2 border-accent/20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional small oval on the right */}
        <motion.div 
          className="absolute top-3/4 right-40 w-8 h-5 rounded-full border-2 border-amber-gold/20"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="fluid-container">
        {/* Fixed layout with profile image always on the left */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left side - Image content (fixed on left, always visible) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96"
          >
            <div className="relative responsive-image overflow-hidden rounded-[48%_52%_45%_55%/55%_45%_55%_45%] ring-2 ring-primary/40 shadow-2xl mx-auto lg:mx-0">
              <Image src="/erfan-profile.jpg" alt="Erfan Noor Mahin" fill className="object-cover" priority />
            </div>

            {/* Decorative elements with animations */}
            <motion.div className="absolute -right-4 -top-4 h-16 w-16 rounded-2xl border border-primary/20 md:-right-6 md:-top-6 md:h-24 md:w-24" animate={{ rotate: 15 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} />
            <motion.div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl border border-accent/20 md:-bottom-6 md:-left-6 md:h-28 md:w-28" animate={{ rotate: -12 }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }} />
            
            {/* Additional square-shaped background doodles */}
            <motion.div className="absolute -left-8 top-1/4 h-12 w-12 rounded-2xl border border-secondary/20" animate={{ rotate: 8 }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} />
            <motion.div className="absolute right-1/4 -bottom-8 h-16 w-16 rounded-2xl border border-primary/15" animate={{ rotate: -15 }} transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }} />
            <motion.div className="absolute left-1/3 -top-8 h-14 w-14 rounded-2xl border border-accent/15" animate={{ rotate: 12 }} transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse" }} />
            
            {/* Additional decorative elements around the profile */}
            <motion.div 
              className="absolute -right-8 top-1/3 w-6 h-6 rounded-full border-2 border-secondary/20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute -left-8 bottom-1/3 w-5 h-5 text-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right side - Content (responsive text that scales with screen size) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-grow w-full text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hero-greeting font-bold text-white"
              >
                {greeting.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.h1 className="hero-name font-extrabold leading-tight tracking-tight text-left antialiased">
                <div className="flex flex-col items-start">
                  <SplitTextAnimation 
                    text="Erfan Noor Mahin" 
                    className="inline-block text-white font-bold font-satreco" 
                    style={{ fontFamily: "var(--font-anton), var(--font-satreco), 'Encode Sans Expanded', var(--font-orbitron), var(--font-geist-sans)" }}
                    delay={0.3}
                    staggerDelay={0.05}
                  />
                </div>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="hero-title font-semibold text-white text-left"
              >
                <SplitTextAnimation 
                  text={title} 
                  className="inline-block" 
                  delay={1.0}
                  staggerDelay={0.03}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="hero-description leading-relaxed text-white text-left my-8"
            >
              Passionate about building modern web applications and managing databases. I craft digital experiences that
              blend innovative design with robust engineering, creating solutions that are both beautiful and
              functional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const targetId = "projects"
                  const element = document.getElementById(targetId)
                  if (element) {
                    const offset = 100
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
                  }
                }}
                className="px-6 py-3 bg-accent text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg responsive-btn"
              >
                View My Work
              </button>
              <button
                onClick={() => {
                  const targetId = "contact"
                  const element = document.getElementById(targetId)
                  if (element) {
                    const offset = 100
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" })
                  }
                }}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg responsive-btn"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}