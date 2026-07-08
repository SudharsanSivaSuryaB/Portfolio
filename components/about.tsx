"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { useRef, useState } from "react"
import { useEditMode } from "@/context/edit-mode-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Trash2, Plus, Edit2 } from "lucide-react"

interface AboutCard {
  id: string
  title: string
  content: string[]
}

const initialCards: AboutCard[] = [
  {
    id: "1",
    title: "Background",
    content: [
      "I'm an enthusiastic Software Developer with a strong background in Electronics and Communication Engineering and practical experience in full-stack development using Golang, React, TypeScript, and Node.js.",
      "Skilled in WebSocket integration, backend testing, and AI-driven solutions, with experience contributing to projects like AVALON and PPS at Avasoft. Known for a proactive mindset, quick adaptability, and passion for building scalable, high-quality applications.",
    ],
  },
  {
    id: "2",
    title: "Education",
    content: [
      "Bachelor of Engineering (B.E.) - Electronics and Communication Engineering",
      "KPR Institute of Engineering and Technology",
      "2020 – 2024",
      "GPA: 7.9 / 10",
    ],
  },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const { isEditMode } = useEditMode()
  const [cards, setCards] = useState<AboutCard[]>(initialCards)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingCard, setEditingCard] = useState<AboutCard | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [newCard, setNewCard] = useState({ title: "", content: "" })

  const handleAddCard = () => {
    if (newCard.title && newCard.content) {
      const contentArray = newCard.content.split("\n").filter((c) => c.trim())
      const card: AboutCard = {
        id: Date.now().toString(),
        title: newCard.title,
        content: contentArray,
      }
      setCards([...cards, card])
      setNewCard({ title: "", content: "" })
      setIsAddDialogOpen(false)
    }
  }

  const handleEditCard = (card: AboutCard) => {
    setEditingCard(card)
    setNewCard({ title: card.title, content: card.content.join("\n") })
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = () => {
    if (editingCard && newCard.title && newCard.content) {
      const contentArray = newCard.content.split("\n").filter((c) => c.trim())
      setCards(
        cards.map((c) =>
          c.id === editingCard.id ? { ...c, title: newCard.title, content: contentArray } : c
        )
      )
      setEditingCard(null)
      setNewCard({ title: "", content: "" })
      setIsEditDialogOpen(false)
    }
  }

  const handleDeleteCard = (id: string) => {
    setCards(cards.filter((c) => c.id !== id))
  }

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
              {isEditMode && (
                <Button
                  onClick={() => setIsAddDialogOpen(true)}
                  size="sm"
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Card
                </Button>
              )}
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Passionate about building scalable systems and delivering innovative solutions through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {cards.map((card) => (
              <Card
                key={card.id}
                className="group relative overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                    {isEditMode && (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditCard(card)}
                          className="p-1.5 rounded-md hover:bg-primary/20 text-primary transition-all"
                          title="Edit card"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCard(card.id)}
                          className="p-1.5 rounded-md hover:bg-red-500/20 hover:text-red-600 text-muted-foreground transition-all"
                          title="Delete card"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  {card.content.map((text, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed">
                      {text}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add Card Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Card Title</label>
              <Input
                placeholder="e.g., Skills"
                value={newCard.title}
                onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Content (one paragraph per line)</label>
              <Textarea
                placeholder="Enter content. Each line will be a separate paragraph."
                value={newCard.content}
                onChange={(e) => setNewCard({ ...newCard, content: e.target.value })}
                rows={6}
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
            <DialogTitle>Edit Card</DialogTitle>
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
              <label className="text-sm font-medium">Content (one paragraph per line)</label>
              <Textarea
                placeholder="Enter content. Each line will be a separate paragraph."
                value={newCard.content}
                onChange={(e) => setNewCard({ ...newCard, content: e.target.value })}
                rows={6}
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
