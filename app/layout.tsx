import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { orbitron, satreco, anton } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Erfan Noor Mahin - Tech Enthusiast & Developer",
  description:
    "19-year-old tech enthusiast specializing in web application development and database management. Building innovative solutions with modern technologies.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable} ${satreco.variable} ${anton.variable}`}>
        <div className="page-background min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}