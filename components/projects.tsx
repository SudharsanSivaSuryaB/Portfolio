"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useRef, useState, useMemo } from "react"
import { Folder, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AVALON – AI-Integrated Project Management Tool",
    company: "Avasoft",
    role: "Software Developer",
    description:
      "Developed a comprehensive project management tool with Incorporated AI for task automation. Enabled real-time communication using WebSocket for seamless data transfer among users. Constructed and applied backend services for performance and scalability using Golang.",
    technologies: ["React TypeScript", "Node.js", "Golang", "WebSocket", "AI Integration"],
    highlights: [
      "AI-powered task automation",
      "Real-time WebSocket communication",
      "Scalable Golang backend",
      "Bug fixing and debugging",
    ],
  },
  {
    title: "PPS – Protection Plus Security",
    company: "Avasoft",
    role: "Software Developer",
    description:
      "Employee Management Tool - Built dynamic forms and data grids using React TypeScript for managing employee information. Integrated AWS Cognito for secure user authentication and session management.",
    technologies: ["React TypeScript", "Node.js", "Golang", "WebSocket", "AWS Cognito"],
    highlights: [
      "Dynamic forms and data grids",
      "AWS Cognito authentication",
      "Backend API test cases",
      "Real-time WebSocket updates",
    ],
  },
  {
    title: "Sales Forecasting Web Application",
    role: "Developer",
    description:
      "Forecasting Tool with LSTM AI Model - Innovated a sales forecasting web application using Python, implementing time series forecasting techniques with popular pip libraries like pandas, NumPy, and scikit-learn.",
    technologies: ["Python", "LSTM", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    highlights: [
      "Time series forecasting with LSTM",
      "Data preprocessing and feature engineering",
      "Accurate predictive models",
    ],
  },
  {
    title: "Emma - Email Writer AI for Recruitment",
    role: "Developer",
    description:
      "Built an intelligent AI agent using Relevance AI that analyzes resumes, PDFs, images, and videos to draft professional, personalized recruitment emails. Emma extracts key skills and achievements, then crafts structured, impactful outreach messages tailored to recipients.",
    technologies: ["Relevance AI", "AI Agents", "NLP", "Email Automation", "Content Analysis"],
    highlights: [
      "Extracts content from resumes, PDFs, images & videos",
      "Highlights key skills, achievements & value propositions",
      "Crafts recruiter-ready and client-focused emails",
      "Saves time while boosting professionalism",
    ],
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_ai-emailautomation-productivity-activity-7366869648530690050-H7yt?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Lina - LinkedIn Content Creator AI",
    role: "Developer",
    description:
      "Built an intelligent AI agent using Relevance AI that analyzes PDFs, images, videos, and documents to instantly generate engaging LinkedIn posts. Lina adapts content to various tones (Formal, Casual, Professional, Promotional) and adds relevant hashtags and CTAs for maximum engagement.",
    technologies: ["Relevance AI", "AI Agents", "NLP", "Content Generation", "Automation"],
    highlights: [
      "Analyzes multiple file formats (PDFs, images, videos)",
      "Generates tone-adaptive LinkedIn content",
      "Auto-generates relevant hashtags & CTAs",
      "Saves time while boosting creativity and engagement",
    ],
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_ai-innovation-contentcreation-activity-7366866179912556544-dwOB?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Smart Calculator App with Voice Recognition",
    role: "Developer",
    description:
      "Developed a smart calculator app powered by voice recognition technology. Just speak your equation and get instant results without typing. Designed to save time, boost productivity, and make complex math effortless across professional and personal settings.",
    technologies: ["Python", "Voice Recognition", "Speech Processing", "AI"],
    highlights: [
      "Voice-activated calculations",
      "Hands-free operation for quick math",
      "Supports complex equations",
      "Boosts efficiency and productivity",
    ],
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_voicerecognition-smartcalculator-innovation-activity-7366858925012312066-8aAb?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Offline Expense Tracker",
    role: "Developer",
    description:
      "A smart way to manage your money anytime, anywhere. This offline-first expense tracking app helps users record and categorize expenses without internet connectivity, providing detailed statistics and insights into spending patterns with secure local data storage.",
    technologies: ["Offline-First", "Local Storage", "Data Analytics", "Finance Management"],
    highlights: [
      "Seamlessly record & categorize expenses without internet",
      "Detailed statistics & insights into spending",
      "Add notes to track the story behind expenses",
      "Secure, offline-first environment for privacy",
    ],
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_expensetracker-offlinetools-financemanagement-activity-7366860497729585153-pdBD?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Jerry AI for Laptops and PC's",
    role: "Developer",
    description:
      "Pioneered a AI Assistant which is similar to the Google Assistant in mobile, but Instead of mobile my Jerry AI will perform the same tasks in Laptops and PC's.",
    technologies: ["Python", "AI", "Automation"],
    highlights: ["Voice-activated assistant", "Desktop automation", "AI-powered task execution"],
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_taskmanagement-aiautomation-workflowoptimization-activity-7366733789076602880-yX0a?utm_source=share&utm_medium=member_desktop",
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  // Extract all unique technologies
  const allTechs = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [])

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedFilter) return projects
    return projects.filter((project) => project.technologies.includes(selectedFilter))
  }, [selectedFilter])

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background" ref={ref}>
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/8 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4">
              <span className="text-primary font-mono text-2xl font-black">3.</span>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">Featured Projects</h2>
              <div className="hidden md:flex flex-1 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              A curated collection of projects showcasing expertise in full-stack development, generative AI integration, and scalable enterprise systems. Each project represents real-world solutions with measurable impact.
            </p>
          </div>

          {/* Advanced Technology Filter Buttons */}
          <div className="space-y-5 mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">Filter by Technology Stack</p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedFilter(null)}
                variant={selectedFilter === null ? "default" : "outline"}
                size="sm"
                className={`transition-all duration-300 ${
                  selectedFilter === null 
                    ? "bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30" 
                    : "border-muted-foreground/30 hover:border-primary/50"
                }`}
              >
                All Projects
              </Button>
              {allTechs.map((tech) => (
                <Button
                  key={tech}
                  onClick={() => setSelectedFilter(tech)}
                  variant={selectedFilter === tech ? "default" : "outline"}
                  size="sm"
                  className={`transition-all duration-300 font-medium ${
                    selectedFilter === tech 
                      ? "bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30" 
                      : "border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid with premium styling */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:via-primary/0 before:to-accent/0 before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="p-3 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Folder className="h-5 w-5" />
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <CardTitle className="text-lg text-balance leading-tight">{project.title}</CardTitle>
                    {project.company && (
                      <CardDescription className="text-sm font-medium text-primary/80">{project.company}</CardDescription>
                    )}
                    <Badge variant="secondary" className="w-fit mt-2 text-xs">
                      {project.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                        Highlights
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                            <span className="text-primary text-xs mt-0.5 flex-shrink-0">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          onClick={() => setSelectedFilter(tech)}
                          variant="outline"
                          className="text-xs font-mono cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center py-12">
                <p className="text-muted-foreground text-center">
                  No projects found with the selected technology. Try selecting a different filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
