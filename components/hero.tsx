"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone, Github, ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Premium animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift" />

      {/* Premium grid overlay with glassmorphism */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated accent blobs with enhanced colors */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-gradient-to-l from-blue-400/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl w-full relative z-10">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Premium Badge with glassmorphism */}
          <div className="flex items-center gap-2 w-fit animate-fade-in-up">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-lg hover:from-primary/30 hover:to-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
          </div>

          {/* Main headline with premium typography */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-primary/80 font-mono uppercase tracking-[0.3em] animate-fade-in-up font-semibold">
                Welcome to my digital workspace
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-balance leading-none animate-fade-in-up bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent" style={{ animationDelay: "0.1s" }}>
                Sudharsan Siva Surya B
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-in-up" style={{ animationDelay: "0.15s" }} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/90 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Full-Stack Engineer & AI-Driven Product Builder
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Engineering scalable, high-performance systems with{" "}
              <span className="text-primary font-bold">Golang, React, TypeScript & Generative AI</span>. Specialized in full-stack architecture, real-time communication, and intelligent automation for enterprise solutions.
            </p>
          </div>

          {/* Premium CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="gap-2 group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-2xl transition-all duration-300 text-white font-semibold text-base hover:-translate-y-1">
              <a href="#contact">
                Start a Conversation
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 border-2 border-primary/40 hover:border-primary/80 hover:bg-primary/10 font-semibold text-base transition-all duration-300 hover:-translate-y-1"
              variant="outline"
            >
              <a href="#projects">Explore My Work</a>
            </Button>
          </div>

          {/* Premium Social Links with enhanced interactions */}
          <div className="flex gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://github.com/SudharsanSivaSuryaB"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 hover:from-primary/40 hover:to-accent/40 transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/30">
                <Github className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sudharsan-siva-surya-balasubramaniam-b62236220"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 hover:from-blue-500/40 hover:to-blue-600/40 transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                <Linkedin className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-blue-500 transition-colors">LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="group flex flex-col items-center gap-2 transition-all duration-300"
              aria-label="Send Email"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 hover:from-purple-500/40 hover:to-purple-600/40 transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                <Mail className="h-6 w-6 text-purple-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-purple-500 transition-colors">Email</span>
            </a>
            <a
              href="https://wa.me/919487266264?text=Hi%20Sudharsan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-300"
              aria-label="Connect on WhatsApp"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 hover:from-green-500/40 hover:to-green-600/40 transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-green-500/30">
                <Phone className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-green-500 transition-colors">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase font-mono text-muted-foreground tracking-wider">Scroll</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
