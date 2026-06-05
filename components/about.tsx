"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-mono text-2xl font-black">1.</span>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">About Me</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Passionate about building scalable systems and delivering innovative solutions through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="group relative overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">Background</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm an enthusiastic Software Developer with a strong background in Electronics and Communication
                  Engineering and practical experience in full-stack development using{" "}
                  <span className="text-foreground font-semibold">Golang, React, TypeScript, and Node.js</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in WebSocket integration, backend testing, and AI-driven solutions, with experience
                  contributing to projects like AVALON and PPS at Avasoft. Known for a proactive mindset, quick
                  adaptability, and passion for building scalable, high-quality applications.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Bachelor of Engineering (B.E.)</h3>
                    <p className="text-muted-foreground font-medium mt-1">Electronics and Communication Engineering</p>
                    <p className="text-sm text-muted-foreground mt-2">KPR Institute of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">2020 – 2024</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="inline-flex items-center px-3 py-2 bg-primary/15 text-primary rounded-lg text-sm font-medium">
                      <span className="text-xs mr-2">★</span>
                      GPA: 7.9 / 10
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
