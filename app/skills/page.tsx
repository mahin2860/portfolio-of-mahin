"use client"

import { SkillsSection } from "@/components/skills-section"
import { TargetCursor } from "@/components/target-cursor"
import { Navigation } from "@/components/navigation"
import { PillNav } from "@/components/pill-nav"

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen page-background skills-page">
      <TargetCursor />
      <Navigation />
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Skills", href: "/skills" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/skills"
      />
      <main>
        <SkillsSection />
      </main>
    </div>
  )
}