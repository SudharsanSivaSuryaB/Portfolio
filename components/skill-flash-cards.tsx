"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Zap, Brain, Code2, Database, Briefcase, BarChart3, Layers, Lightbulb, Trash2, Plus, Edit2 } from "lucide-react"
import { useEditMode } from "@/context/edit-mode-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface FlashCard {
  id: string
  title: string
  count: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  skills: string[]
  description: string
}

const initialFlashCards: FlashCard[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    count: "8 Technologies",
    icon: Code2,
    color: "from-blue-500/20 to-blue-600/20",
    description: "End-to-end application architecture and development",
    skills: ["React", "TypeScript", "Node.js", "Golang", "PostgreSQL", "Next.js", "REST APIs", "WebSocket"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    count: "6 Technologies",
    icon: BarChart3,
    color: "from-emerald-500/20 to-emerald-600/20",
    description: "Data-driven insights, visualization & statistical analysis",
    skills: ["Python", "Pandas", "Power BI", "SQL", "NumPy", "Statistical Analysis"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    count: "6 Technologies",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/20",
    description: "Intelligent systems, predictive models & neural networks",
    skills: ["Machine Learning", "LSTM", "Python", "Scikit-learn", "NLP", "Deep Learning"],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    count: "6 Technologies",
    icon: Database,
    color: "from-orange-500/20 to-orange-600/20",
    description: "Scalable architecture and high-performance systems",
    skills: ["Golang", "Node.js", "Microservices", "API Design", "PostgreSQL", "Real-time Systems"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    count: "6 Technologies",
    icon: Zap,
    color: "from-cyan-500/20 to-cyan-600/20",
    description: "Responsive design and interactive user experiences",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS", "Responsive Design"],
  },
  {
    id: "professional",
    title: "Professional Skills",
    count: "7 Competencies",
    icon: Briefcase,
    color: "from-pink-500/20 to-pink-600/20",
    description: "Core competencies essential for engineering excellence",
    skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Adaptability", "ABAP", "Time Management"],
  },
]

const colorMap = {
  "full-stack": {
    border: "border-blue-500/50",
    text: "text-blue-500",
    badge: "bg-blue-500/25 hover:bg-blue-500/40 border-blue-500/40 hover:border-blue-500/60",
    bg: "from-blue-500/25 via-blue-500/15 to-transparent",
    icon: "bg-blue-500/30 group-hover:bg-blue-500",
  },
  "data-analytics": {
    border: "border-emerald-500/50",
    text: "text-emerald-500",
    badge: "bg-emerald-500/25 hover:bg-emerald-500/40 border-emerald-500/40 hover:border-emerald-500/60",
    bg: "from-emerald-500/25 via-emerald-500/15 to-transparent",
    icon: "bg-emerald-500/30 group-hover:bg-emerald-500",
  },
  "ai-ml": {
    border: "border-purple-500/50",
    text: "text-purple-500",
    badge: "bg-purple-500/25 hover:bg-purple-500/40 border-purple-500/40 hover:border-purple-500/60",
    bg: "from-purple-500/25 via-purple-500/15 to-transparent",
    icon: "bg-purple-500/30 group-hover:bg-purple-500",
  },
  "backend": {
    border: "border-orange-500/50",
    text: "text-orange-500",
    badge: "bg-orange-500/25 hover:bg-orange-500/40 border-orange-500/40 hover:border-orange-500/60",
    bg: "from-orange-500/25 via-orange-500/15 to-transparent",
    icon: "bg-orange-500/30 group-hover:bg-orange-500",
  },
  "frontend": {
    border: "border-cyan-500/50",
    text: "text-cyan-500",
    badge: "bg-cyan-500/25 hover:bg-cyan-500/40 border-cyan-500/40 hover:border-cyan-500/60",
    bg: "from-cyan-500/25 via-cyan-500/15 to-transparent",
    icon: "bg-cyan-500/30 group-hover:bg-cyan-500",
  },
  "professional": {
    border: "border-pink-500/50",
    text: "text-pink-500",
    badge: "bg-pink-500/25 hover:bg-pink-500/40 border-pink-500/40 hover:border-pink-500/60",
    bg: "from-pink-500/25 via-pink-500/15 to-transparent",
    icon: "bg-pink-500/30 group-hover:bg-pink-500",
  },
}

export function SkillFlashCards() {
  const { isEditMode } = useEditMode()
  const [flashCards, setFlashCards] = useState<FlashCard[]>(initialFlashCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingCard, setEditingCard] = useState<FlashCard | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    skills: "",
    icon: "Code2",
  })

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? flashCards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === flashCards.length - 1 ? 0 : prev + 1))
  }

  const handleAddCard = () => {
    if (newCard.title && newCard.description && newCard.skills) {
      const skillsArray = newCard.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
      const card: FlashCard = {
        id: Date.now().toString(),
        title: newCard.title,
        description: newCard.description,
        skills: skillsArray,
        count: `${skillsArray.length} Technologies`,
        icon: Code2,
        color: "from-blue-500/20 to-blue-600/20",
      }
      setFlashCards([...flashCards, card])
      setNewCard({ title: "", description: "", skills: "", icon: "Code2" })
      setIsAddDialogOpen(false)
    }
  }

  const handleEditCard = (card: FlashCard) => {
    setEditingCard(card)
    setNewCard({
      title: card.title,
      description: card.description,
      skills: card.skills.join(", "),
      icon: "Code2",
    })
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    if (editingCard && newCard.title && newCard.description && newCard.skills) {
      const skillsArray = newCard.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
      setFlashCards(
        flashCards.map((c) =>
          c.id === editingCard.id
            ? {
                ...c,
                title: newCard.title,
                description: newCard.description,
                skills: skillsArray,
                count: `${skillsArray.length} Technologies`,
              }
            : c
        )
      )
      setEditingCard(null)
      setNewCard({ title: "", description: "", skills: "", icon: "Code2" })
      setIsEditDialogOpen(false)
    }
  }

  const handleDeleteCard = (id: string) => {
    if (flashCards.length === 1) return
    const newCards = flashCards.filter((c) => c.id !== id)
    setFlashCards(newCards)
    if (currentIndex >= newCards.length) {
      setCurrentIndex(newCards.length - 1)
    }
  }

  const currentCard = flashCards[currentIndex]
  const colors = colorMap[currentCard.id as keyof typeof colorMap]
  const Icon = currentCard.icon

  return (
    <div className="w-full space-y-8 px-1">
      {/* Flash Card */}
      <div className="relative pt-2">
        {isEditMode && (
          <div className="absolute top-4 left-4 z-30 flex gap-1">
            <button
              onClick={() => handleEditCard(currentCard)}
              className="p-2 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-all"
              title="Edit card"
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleDeleteCard(currentCard.id)}
              disabled={flashCards.length === 1}
              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 hover:text-red-600 text-muted-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              title="Delete card"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
        <Card
          className={`relative overflow-hidden border ${colors.border} transition-all duration-500 group bg-gradient-to-br ${colors.bg} backdrop-blur-xl min-h-96 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1`}
        >
          {/* Animated background gradient with premium glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300" />

          {/* Premium shine effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-300" />

          <CardContent className="relative z-10 space-y-8 flex flex-col justify-between h-full pt-10 pb-10 px-10">
            <div className="space-y-6">
              {/* Icon and Title Section with Perfect Alignment */}
              <div className="space-y-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${currentCard.color} w-fit group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className={`h-9 w-9 ${colors.text} group-hover:text-white transition-colors`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-5xl font-black tracking-tight leading-tight">{currentCard.title}</h3>
                  <p className={`text-sm font-bold ${colors.text} uppercase tracking-widest`}>{currentCard.count}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium group-hover:text-foreground transition-colors">
                {currentCard.description}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50 group-hover:text-foreground/70 transition-colors">Featured Technologies</p>
              <div className="flex flex-wrap gap-3">
                {currentCard.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className={`${colors.badge} border text-foreground font-semibold cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md`}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Counter with Enhanced Styling */}
        <div className={`absolute z-20 ${isEditMode ? 'top-16 right-6' : 'top-6 right-6'}`}>
          <Badge className="font-mono text-xs font-bold px-3 py-1.5 bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/50 hover:border-primary/80 transition-all">
            {currentIndex + 1} / {flashCards.length}
          </Badge>
        </div>
      </div>

      {/* Navigation Controls with Enhanced Design */}
      <div className="flex items-center justify-between gap-4 px-2">
        <button
          onClick={handlePrevious}
          className="p-3 rounded-lg border border-primary/40 hover:border-primary/80 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group/btn shadow-md hover:shadow-lg hover:-translate-x-1"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5 text-primary/60 group-hover/btn:text-primary group-hover/btn:scale-110 transition-all" />
        </button>

        {/* Dots Indicator with Enhanced Styling */}
        <div className="flex gap-3 justify-center flex-1">
          {flashCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? "w-10 h-2.5 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/50"
                  : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/50 hover:shadow-md"
              }`}
              aria-label={`Go to card ${index + 1}`}
              title={`${flashCards[index].title}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-lg border border-primary/40 hover:border-primary/80 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group/btn shadow-md hover:shadow-lg hover:translate-x-1"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5 text-primary/60 group-hover/btn:text-primary group-hover/btn:scale-110 transition-all" />
        </button>
      </div>

      {/* Enhanced Keyboard Hint */}
      <p className="text-xs text-center text-muted-foreground hover:text-foreground transition-colors">
        <span className="font-semibold text-primary">Navigate</span> using arrow buttons • <span className="font-semibold text-primary">Hover</span> over dots to preview
      </p>

      {isEditMode && (
        <div className="flex justify-center">
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Skill Card
          </Button>
        </div>
      )}

      {/* Add Card Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Skill Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Card Title</label>
              <Input
                placeholder="e.g., Frontend Development"
                value={newCard.title}
                onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="e.g., Building modern, responsive user interfaces"
                value={newCard.description}
                onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
                rows={3}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Skills (comma-separated)</label>
              <Input
                placeholder="e.g., React, TypeScript, Tailwind CSS, JavaScript"
                value={newCard.skills}
                onChange={(e) => setNewCard({ ...newCard, skills: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCard}>Add Card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Card Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Skill Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Card Title</label>
              <Input
                placeholder="Card title"
                value={newCard.title}
                onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="Card description"
                value={newCard.description}
                onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
                rows={3}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Skills (comma-separated)</label>
              <Input
                placeholder="e.g., React, TypeScript, Tailwind CSS"
                value={newCard.skills}
                onChange={(e) => setNewCard({ ...newCard, skills: e.target.value })}
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
    </div>
  )
}
