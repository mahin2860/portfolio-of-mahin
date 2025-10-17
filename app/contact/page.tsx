"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/#contact")
  }, [router])

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-muted-foreground">Taking you to the contact section</p>
      </div>
    </div>
  )
}