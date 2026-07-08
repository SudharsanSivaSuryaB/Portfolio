"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { useRef, useState } from "react"
import { Briefcase, Trash2, Plus, Edit2 } from "lucide-react"
import { useEditMode } from "@/context/edit-mode-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const initialExperiences: Experience[] = [
  {
    id: "1",
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
    id: "2",
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
  const { isEditMode } = useEditMode()
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingExp, setEditingExp] = useState<Experience | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [newExp, setNewExp] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    technologies: "",
  })

  const handleAddExperience = () => {
    if (newExp.title && newExp.company && newExp.period && newExp.description) {
      const descArray = newExp.description.split("\n").filter((d) => d.trim())
      const techArray = newExp.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t)

      const exp: Experience = {
        id: Date.now().toString(),
        title: newExp.title,
        company: newExp.company,
        period: newExp.period,
        description: descArray,
        technologies: techArray,
      }
      setExperiences([...experiences, exp])
      setNewExp({ title: "", company: "", period: "", description: "", technologies: "" })
      setIsAddDialogOpen(false)
    }
  }

  const handleEditExperience = (exp: Experience) => {
    setEditingExp(exp)
    setNewExp({
      title: exp.title,
      company: exp.company,
      period: exp.period,
      description: exp.description.join("\n"),
      technologies: exp.technologies.join(", "),
    })
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    if (editingExp && newExp.title && newExp.company && newExp.period && newExp.description) {
      const descArray = newExp.description.split("\n").filter((d) => d.trim())
      const techArray = newExp.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t)

      setExperiences(
        experiences.map((e) =>
          e.id === editingExp.id
            ? {
                ...e,
                title: newExp.title,
                company: newExp.company,
                period: newExp.period,
                description: descArray,
                technologies: techArray,
              }
            : e
        )
      )
      setEditingExp(null)
      setNewExp({ title: "", company: "", period: "", description: "", technologies: "" })
      setIsEditDialogOpen(false)
    }
  }

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id))
  }

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background" ref={ref}>
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/8 via-transparent to-primary/8" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4 flex-1">
                <span className="text-primary font-mono text-2xl font-black">2.</span>
                <h2 className="text-6xl sm:text-7xl font-black tracking-tighter">Professional Experience</h2>
                <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                  Building scalable systems and innovative solutions across multiple organizations, from early-stage startups to enterprise environments.
                </p>
              </div>
              {isEditMode && (
                <Button
                  onClick={() => setIsAddDialogOpen(true)}
                  size="sm"
                  className="gap-2 mt-1"
                >
                  <Plus className="h-4 w-4" />
                  Add Experience
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden sm:block" />

            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                className="relative border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:via-primary/0 before:to-accent/0 before:opacity-0 before:group-hover:opacity-10 before:transition-opacity before:duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-8 -translate-x-7 hidden sm:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-primary border-2 border-background relative z-10 group-hover:w-6 group-hover:h-6 transition-all group-hover:-translate-x-0.5" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4 sm:ml-4">
                    <div className="p-3 rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-lg leading-tight">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="w-fit text-xs">
                            {exp.period}
                          </Badge>
                          {isEditMode && (
                            <div className="flex gap-1">
                              <button
                                onClick={() => handleEditExperience(exp)}
                                className="p-1 rounded-md hover:bg-primary/20 text-primary transition-all"
                                title="Edit experience"
                              >
                                <Edit2 className="h-3 w-3" />
                              </button>
                              <button
                                onClick={() => handleDeleteExperience(exp.id)}
                                className="p-1 rounded-md hover:bg-red-500/20 hover:text-red-600 text-muted-foreground transition-all"
                                title="Delete experience"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-sm font-medium text-primary/70">{exp.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4 sm:ml-4">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex gap-3 text-sm">
                        <span className="text-primary mt-0.5 text-xs flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="font-mono text-xs hover:bg-primary/20 transition-colors cursor-default"
                      >
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

      {/* Add Experience Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Experience</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Job Title</label>
                <Input
                  placeholder="e.g., Senior Developer"
                  value={newExp.title}
                  onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Company</label>
                <Input
                  placeholder="e.g., Tech Corp"
                  value={newExp.company}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Period</label>
              <Input
                placeholder="e.g., Jan 2024 - Present"
                value={newExp.period}
                onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description (one bullet point per line)</label>
              <Textarea
                placeholder="Enter responsibilities and achievements. Each line becomes a bullet point."
                value={newExp.description}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                rows={6}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Technologies (comma-separated)</label>
              <Input
                placeholder="e.g., React, TypeScript, Node.js"
                value={newExp.technologies}
                onChange={(e) => setNewExp({ ...newExp, technologies: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddExperience}>Add Experience</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Experience Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Experience</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Job Title</label>
                <Input
                  placeholder="Job title"
                  value={newExp.title}
                  onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Company</label>
                <Input
                  placeholder="Company name"
                  value={newExp.company}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Period</label>
              <Input
                placeholder="e.g., Jan 2024 - Present"
                value={newExp.period}
                onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description (one bullet point per line)</label>
              <Textarea
                placeholder="Enter responsibilities and achievements. Each line becomes a bullet point."
                value={newExp.description}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                rows={6}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Technologies (comma-separated)</label>
              <Input
                placeholder="e.g., React, TypeScript, Node.js"
                value={newExp.technologies}
                onChange={(e) => setNewExp({ ...newExp, technologies: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
