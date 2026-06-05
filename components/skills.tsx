"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import {
  Code2,
  Database,
  Wrench,
  Brain,
  Users,
  Target,
  Coffee,
  FileJson,
  Zap,
  Cpu,
  Flame,
  Layers,
  Palette,
  Smartphone,
  Lightbulb,
  BarChart3,
  Network,
  Monitor,
  GitBranch,
  Figma,
  BarChart2,
  MessageSquare,
  Clock,
  Circle,
} from "lucide-react"

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Programming Languages
  Java: Coffee,
  Python: Code2,
  C: FileJson,
  SQL: Database,
  HTML: Code2,
  CSS: Palette,
  JavaScript: Zap,
  TypeScript: Code2,
  Golang: Flame,
  // Backend & APIs
  "Node.js": Zap,
  WebSocket: Network,
  "REST APIs": Layers,
  PostgreSQL: Database,
  Firebase: Flame,
  // Frontend Development
  React: Circle, // Changed from Atom to Circle for React icon
  "Tailwind CSS": Palette,
  "Next.js": Monitor,
  "Responsive Design": Smartphone,
  // AI & Data Science
  "Data Analytics": BarChart3,
  "Machine Learning": Brain,
  LSTM: Lightbulb,
  Pandas: Database,
  NumPy: Cpu,
  "Scikit-learn": Brain,
  // Tools & Platforms
  Git: GitBranch,
  "VS Code": Monitor,
  Postman: Network,
  Figma: Figma,
  "Power BI": BarChart2,
  // Soft Skills
  "Problem Solving": Lightbulb,
  "Team Leadership": Users,
  "Time Management": Clock,
  Adaptability: Zap,
  Communication: MessageSquare,
}

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "SQL", "HTML", "CSS", "JavaScript", "TypeScript", "Golang"],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    skills: ["Golang", "Node.js", "WebSocket", "REST APIs", "PostgreSQL", "Firebase"],
  },
  {
    category: "Frontend Development",
    icon: Wrench,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Responsive Design"],
  },
  {
    category: "AI & Data Science",
    icon: Brain,
    skills: ["Data Analytics", "Machine Learning", "LSTM", "Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "VS Code", "Postman", "Figma", "Power BI"],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Team Leadership", "Time Management", "Adaptability", "Communication"],
  },
]

const interests = [
  "Full Stack Application Development",
  "Artificial Intelligence and Machine Learning",
  "Web Development and UI/UX Design",
  "Backend Programming",
  "Mobile Application Development",
  "Data Analysis and Visualization",
]

function getSkillIcon(skill: string) {
  return skillIcons[skill]
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background" ref={ref}>
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/8 via-transparent to-accent/8" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <span className="text-primary font-mono text-sm font-black uppercase tracking-[0.2em]">Core Competencies</span>
            <h2 className="text-6xl sm:text-7xl font-black tracking-tighter">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              A comprehensive suite of technical expertise and specialized competencies developed through hands-on experience and continuous learning in modern software engineering.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:via-primary/0 before:to-accent/0 before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => {
                        const SkillIcon = getSkillIcon(skill)
                        return (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs hover:bg-primary/30 transition-colors cursor-default"
                          >
                            {SkillIcon && <SkillIcon className="h-3 w-3" />}
                            {skill}
                          </Badge>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="group relative overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-xl bg-gradient-to-br from-card/80 via-card to-accent/5 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:to-accent/5 before:opacity-0 before:group-hover:opacity-20 before:transition-opacity before:duration-500">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Areas of Interest</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, i) => (
                  <div key={i} className="flex gap-3 items-start group/item">
                    <span className="text-primary text-xs mt-1 group-hover/item:scale-150 transition-transform">▹</span>
                    <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
