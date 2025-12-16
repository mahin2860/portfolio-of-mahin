import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { orbitron, spaceGrotesk, inter } from "@/lib/fonts"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Erfan Noor Mahin | Portfolio",
  description:
    "Personal portfolio showcasing web development projects and technical skills.",
  generator: "Next.js",
  authors: [{ name: "Erfan Noor Mahin" }],
  creator: "Erfan Noor Mahin",
  openGraph: {
    title: "Erfan Noor Mahin | Portfolio",
    description: "Personal portfolio showcasing web development projects and technical skills.",
    type: "website",
    locale: "en_US",
    siteName: "Erfan Noor Mahin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erfan Noor Mahin | Portfolio",
    description: "Personal portfolio showcasing web development projects and technical skills.",
    creator: "@erfannoormahin",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent right-click on images
              document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Prevent dragging of images
              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Prevent image selection
              document.addEventListener('selectstart', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
        <Navigation />
        <div className="page-background min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}