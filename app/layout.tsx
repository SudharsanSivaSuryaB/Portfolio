import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EditModeProvider } from "@/context/edit-mode-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sudharsan Siva Surya B - Full-Stack Engineer & AI Developer",
  description:
    "Award-winning full-stack software engineer specializing in Golang, React, TypeScript, and generative AI. Building scalable, high-performance systems with real-time capabilities and intelligent automation. 20+ projects delivered across startups and enterprises.",
  keywords: [
    "Full-Stack Developer",
    "Golang Developer",
    "React Developer",
    "TypeScript",
    "AI Engineer",
    "Software Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  generator: "v0.app",
  applicationName: "Portfolio",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "Sudharsan Siva Surya B - Full-Stack Engineer",
    description: "Building scalable systems with Golang, React, TypeScript, and AI",
    type: "website",
    url: "https://sudharsansivasurya.com",
    siteName: "Sudharsan Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharsan Siva Surya B - Full-Stack Engineer",
    description: "Building scalable systems with Golang, React, TypeScript, and AI",
    creator: "@sudharsandev",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://sudharsansivasurya.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`font-sans antialiased bg-background`}>
        <EditModeProvider>
          {children}
          <Analytics />
        </EditModeProvider>
      </body>
    </html>
  )
}
