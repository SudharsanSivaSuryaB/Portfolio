"use client"

import type React from "react"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const { toast } = useToast()

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "sudharsansivasurya19@gmail.com"

    try {
      await navigator.clipboard.writeText(email)
      toast({
        title: "Email copied!",
        description: email,
        duration: 3000,
      })
    } catch (err) {
      toast({
        title: "Email address",
        description: email,
        duration: 5000,
      })
    }
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/SudharsanSivaSuryaB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/sudharsan-siva-surya-balasubramaniam-b62236220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </button>
            <a
              href="https://wa.me/919487266264?text=Hi%20Sudharsan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">Built by Sudharsan Siva Surya B</p>
          <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
