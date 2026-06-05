"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone, Github, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-5xl w-full relative z-10">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-muted-foreground font-mono">Hi, my name is</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Sudharsan Siva Surya B
              </h1>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground">
                I build things for the web.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm a full-stack software developer specializing in building exceptional digital experiences. Currently
              focused on creating scalable applications with{" "}
              <span className="text-primary font-medium">Golang, React, TypeScript</span>, and AI integration.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 group">
              <a href="#contact">
                Get In Touch
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="https://github.com/SudharsanSivaSuryaB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/sudharsan-siva-surya-balasubramaniam-b62236220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/919487266264?text=Hi%20Sudharsan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="WhatsApp"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
