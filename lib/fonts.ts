import { Orbitron, Space_Grotesk, Inter } from "next/font/google"

// Define the Orbitron font for tech-inspired look
export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "800", // Heavier weight for better display
  variable: "--font-orbitron",
})

// Headings: Space Grotesk
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-space-grotesk",
})

// Body: Inter
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-inter",
})