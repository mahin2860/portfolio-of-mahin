import { Orbitron } from "next/font/google"
import { Encode_Sans_Expanded } from "next/font/google"
import { Anton } from "next/font/google" // Adding Anton as a better alternative to Satreco

// Define the Orbitron font for tech-inspired look
export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "800", // Heavier weight for better display
  variable: "--font-orbitron",
})

// Define Encode Sans Expanded as a replacement for Satreco
export const satreco = Encode_Sans_Expanded({
  subsets: ["latin"],
  display: "swap",
  weight: "900", // Heaviest weight for bold statement
  variable: "--font-satreco",
})

// Alternative: Anton - A better match for Satreco's bold, wide characteristics
export const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-anton",
})