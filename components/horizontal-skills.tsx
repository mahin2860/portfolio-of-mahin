"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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
  {
    name: "PyCharm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Sublime Text",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sublime/sublime-original.svg",
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

export function HorizontalSkills() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const scrollPosition = window.scrollY
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight
      
      // Calculate how far through the section we are (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (scrollPosition - containerTop + windowHeight) / (containerHeight + windowHeight)
      ))
      
      // Update the progress bar
      const progressBar = container.querySelector('.progress-bar') as HTMLElement
      if (progressBar) {
        progressBar.style.width = `${scrollProgress * 100}%`
      }
      
      // Update the horizontal scroll position
      const skillContainer = container.querySelector('.skills-container') as HTMLElement
      if (skillContainer) {
        // Scroll through the skills based on scroll progress
        const maxScroll = 50 // Percentage to scroll
        skillContainer.style.transform = `translateX(-${scrollProgress * maxScroll}%)`
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative px-4 py-20 md:px-8 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <p className="text-lg text-foreground/80">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="relative h-[70vh] overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-[#5B8EFF] to-[#A15EFF] backdrop-blur-sm">
          {/* Progress bar */}
          <div className="absolute bottom-6 left-0 right-0 h-1 bg-[#C9B6FF]/30 mx-8 rounded-full z-20">
            <div 
              className="progress-bar h-full bg-gradient-to-r from-[#FF66B3] to-[#FFD447] rounded-full w-0"
            ></div>
          </div>

          {/* Horizontal scrolling skills container */}
          <div className="absolute inset-0 flex items-center">
            <div className="skills-container flex w-max">
              {/* First set of skills */}
              {skills.map((skill, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 w-[300px] h-[400px] flex flex-col items-center justify-center mx-8"
                >
                  <div className="relative w-32 h-32 rounded-2xl border-2 border-[#C9B6FF]/40 bg-gradient-to-br from-[#1A1A40]/80 to-[#2A2150]/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#FF66B3]/30">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF66B3]/20 via-[#A15EFF]/20 to-[#5B8EFF]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 w-20 h-20">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[#C9B6FF]">
                    {skill.name}
                  </h3>
                </div>
              ))}

              {/* Duplicate set of skills for seamless loop */}
              {skills.map((skill, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 w-[300px] h-[400px] flex flex-col items-center justify-center mx-8"
                >
                  <div className="relative w-32 h-32 rounded-2xl border-2 border-[#C9B6FF]/40 bg-gradient-to-br from-[#1A1A40]/80 to-[#2A2150]/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-[#FF66B3]/30">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF66B3]/20 via-[#A15EFF]/20 to-[#5B8EFF]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 w-20 h-20">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[#C9B6FF]">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1A1A40] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1A1A40] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}