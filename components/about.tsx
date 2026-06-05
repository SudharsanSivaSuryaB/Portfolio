"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-xl">01.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm an enthusiastic Software Developer with a strong background in Electronics and Communication
                  Engineering and practical experience in full-stack development using{" "}
                  <span className="text-foreground font-medium">Golang, React, TypeScript, and Node.js</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in WebSocket integration, backend testing, and AI-driven solutions, with experience
                  contributing to projects like AVALON and PPS at Avasoft. Known for a proactive mindset, quick
                  adaptability, and passion for building scalable, high-quality applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Bachelor of Engineering (B.E.)</h3>
                  <p className="text-muted-foreground font-medium">Electronics and Communication Engineering</p>
                  <p className="text-sm text-muted-foreground">KPR Institute of Engineering and Technology</p>
                  <p className="text-sm text-muted-foreground">2020 – 2024</p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      GPA: 7.9
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
