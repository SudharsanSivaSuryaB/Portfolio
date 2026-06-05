"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
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

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-xl">03.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Things I've Built</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Folder className="h-6 w-6" />
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                  {project.company && (
                    <CardDescription className="text-base font-medium">{project.company}</CardDescription>
                  )}
                  <Badge variant="secondary" className="w-fit">
                    {project.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary text-xs mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-mono">
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
