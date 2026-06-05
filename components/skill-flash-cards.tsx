"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Zap, Brain, Code2, Database, Briefcase, BarChart3 } from "lucide-react"

interface FlashCard {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  skills: string[]
  description: string
}

const flashCards: FlashCard[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    icon: Code2,
    color: "from-blue-500/20 to-blue-600/20",
    description: "Complete end-to-end application development",
    skills: ["React", "TypeScript", "Node.js", "Golang", "PostgreSQL", "Next.js", "REST APIs", "WebSocket"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/20",
    description: "Data-driven insights and visualization",
    skills: ["Python", "Pandas", "Power BI", "Data Visualization", "SQL", "Statistical Analysis", "NumPy", "Matplotlib"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/20",
    description: "Intelligent systems and predictive models",
    skills: ["Machine Learning", "LSTM", "Python", "Scikit-learn", "NLP", "AI Agents", "Relevance AI", "Deep Learning"],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: Database,
    color: "from-orange-500/20 to-orange-600/20",
    description: "Scalable and high-performance systems",
    skills: ["Golang", "Node.js", "Microservices", "API Design", "Database Optimization", "Cloud Services", "Authentication", "AWS"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Zap,
    color: "from-cyan-500/20 to-cyan-600/20",
    description: "Responsive and interactive user interfaces",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Responsive Design", "UI/UX", "Performance Optimization"],
  },
  {
    id: "professional",
    title: "Professional Skills",
    icon: Briefcase,
    color: "from-pink-500/20 to-pink-600/20",
    description: "Core competencies for team success",
    skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Adaptability", "Time Management", "Collaboration", "ABAP"],
  },
]

const colorMap = {
  "full-stack": {
    border: "border-blue-500/40",
    text: "text-blue-500",
    badge: "bg-blue-500/20 hover:bg-blue-500/30",
    bg: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  "data-analytics": {
    border: "border-emerald-500/40",
    text: "text-emerald-500",
    badge: "bg-emerald-500/20 hover:bg-emerald-500/30",
    bg: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  "ai-ml": {
    border: "border-purple-500/40",
    text: "text-purple-500",
    badge: "bg-purple-500/20 hover:bg-purple-500/30",
    bg: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  "backend": {
    border: "border-orange-500/40",
    text: "text-orange-500",
    badge: "bg-orange-500/20 hover:bg-orange-500/30",
    bg: "from-orange-500/20 via-orange-500/10 to-transparent",
  },
  "frontend": {
    border: "border-cyan-500/40",
    text: "text-cyan-500",
    badge: "bg-cyan-500/20 hover:bg-cyan-500/30",
    bg: "from-cyan-500/20 via-cyan-500/10 to-transparent",
  },
  "professional": {
    border: "border-pink-500/40",
    text: "text-pink-500",
    badge: "bg-pink-500/20 hover:bg-pink-500/30",
    bg: "from-pink-500/20 via-pink-500/10 to-transparent",
  },
}

export function SkillFlashCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? flashCards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === flashCards.length - 1 ? 0 : prev + 1))
  }

  const currentCard = flashCards[currentIndex]
  const colors = colorMap[currentCard.id as keyof typeof colorMap]
  const Icon = currentCard.icon

  return (
    <div className="w-full space-y-8">
      {/* Flash Card */}
      <div className="relative">
        <Card
          className={`relative overflow-hidden border-2 ${colors.border} transition-all duration-500 group bg-gradient-to-br ${colors.bg} backdrop-blur-sm min-h-80 flex flex-col justify-between`}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:via-primary/2 group-hover:to-accent/5 transition-all duration-300" />

          <CardContent className="relative z-10 space-y-6 flex flex-col justify-between h-full pt-8 pb-8">
            <div className="space-y-4">
              {/* Icon and Title */}
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${currentCard.color} w-fit`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight">{currentCard.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {currentCard.description}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-foreground/60">Core Skills</p>
              <div className="flex flex-wrap gap-2">
                {currentCard.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className={`${colors.badge} border border-current/20 text-foreground font-medium cursor-default transition-all`}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Counter */}
        <div className="absolute top-4 right-4 z-20">
          <Badge variant="secondary" className="font-mono text-sm">
            {currentIndex + 1} / {flashCards.length}
          </Badge>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrevious}
          className="p-3 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group/btn"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2 justify-center flex-1">
          {flashCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-lg border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group/btn"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <p className="text-xs text-center text-muted-foreground">
        Use arrow buttons or click dots to explore different skill categories
      </p>
    </div>
  )
}
