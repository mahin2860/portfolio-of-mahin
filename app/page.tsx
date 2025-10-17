"use client"

import { TargetCursor } from "@/components/target-cursor"
import { PillNav } from "@/components/pill-nav"
import { Suspense, lazy } from "react"
const HeroSection = lazy(() => import("@/components/hero-section").then(m => ({ default: m.HeroSection })))
const ProjectsSection = lazy(() => import("@/components/projects-section").then(m => ({ default: m.ProjectsSection })))
const SkillsSection = lazy(() => import("@/components/skills-section").then(m => ({ default: m.SkillsSection })))
const ContactSection = lazy(() => import("@/components/contact-section").then(m => ({ default: m.ContactSection })))
import { Footer } from "@/components/footer"
import { useSectionObserver } from "@/hooks/use-section-observer"

export default function Home() {
  const { isClient } = useSectionObserver()

  return (
    <div className="relative min-h-screen page-background home-page">
      <TargetCursor />
      <PillNav
        items={[
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="#home"
      />
      <main>
        <Suspense fallback={<div style={{ height: "80vh" }} />}> 
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div style={{ height: "80vh" }} />}> 
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div style={{ height: "80vh" }} />}> 
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<div style={{ height: "80vh" }} />}> 
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}