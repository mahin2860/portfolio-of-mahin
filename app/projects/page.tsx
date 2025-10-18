"use client"

import { ProjectsSection } from "@/components/projects-section"
import { TargetCursor } from "@/components/target-cursor"
import { Navigation } from "@/components/navigation"
import { PillNav } from "@/components/pill-nav"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen page-background projects-page">
      <TargetCursor />
      <Navigation />
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Skills", href: "/skills" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/projects"
      />
      <main>
        <ProjectsSection />
      </main>
    </div>
  )
}