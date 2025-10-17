"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SkillsPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/#skills")
  }, [router])

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-muted-foreground">Taking you to the skills section</p>
      </div>
    </div>
  )
}