import { useEffect, useState } from "react"

export function useSectionObserver() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only toggle class if we're on the client
          if (typeof window !== 'undefined') {
            entry.target.classList.toggle("in-view", entry.isIntersecting)
          }
        })
      },
      { threshold: 0.2 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Return whether we're on the client for conditional rendering
  return { isClient }
}