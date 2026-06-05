"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "AVASOFT",
    period: "July 2024 - May 2025",
    description: [
      "Spearheaded the development of AVALON, an AI-integrated project management tool",
      "Utilized WebSocket for real-time data transfer between users",
      "Applied AI tools to streamline development and enhance code efficiency",
      "Implemented backend services using Golang for scalable and high-performance applications",
      "Built responsive user interfaces using React TypeScript",
      "Established server-side logic with Node.js for the application backend",
      "Written test cases for the backend that are created using Golang and Node.js",
    ],
    technologies: ["Golang", "React", "TypeScript", "Node.js", "WebSocket", "AI Integration"],
  },
  {
    title: "Intern – Application Development",
    company: "Kaar Technologies",
    period: "6 months",
    description: [
      "Developed Python applications for automation and data processing tasks",
      "Studied the basics of ABAP, including core syntax, modularization, and typical SAP customization processes",
      "Engaged with ABAP programming fundamentals to understand SAP ERP workflows and business data manipulation",
    ],
    technologies: ["Python", "ABAP", "SAP ERP", "Automation"],
  },
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-xl">02.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Where I've Worked</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
