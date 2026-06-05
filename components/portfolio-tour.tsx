"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, ArrowLeft } from "lucide-react"
import { AnimatedTourAvatar } from "@/components/animated-tour-avatar"

interface TourStep {
  target: string
  title: string
  description: string
  position: "top" | "bottom" | "left" | "right"
}

const tourSteps: TourStep[] = [
  {
    target: "hero",
    title: "Welcome!",
    description: "This is my portfolio showcasing my journey as a Full-Stack Developer",
    position: "bottom",
  },
  {
    target: "about",
    title: "About Me",
    description: "Learn more about my background and what drives me",
    position: "top",
  },
  {
    target: "experience",
    title: "Experience",
    description: "Explore my professional journey and key achievements",
    position: "top",
  },
  {
    target: "projects",
    title: "Projects",
    description: "Check out the projects I've built and contributed to",
    position: "top",
  },
  {
    target: "skills",
    title: "Skills",
    description: "Discover the technologies and tools I work with",
    position: "top",
  },
  {
    target: "contact",
    title: "Get in Touch",
    description: "Ready to connect? Send me a message or download my resume",
    position: "top",
  },
]

export function PortfolioTour() {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [hasSeenTour, setHasSeenTour] = useState(false)

  useEffect(() => {
    const tourSeen = localStorage.getItem("portfolio-tour-seen")
    if (!tourSeen) {
      setTimeout(() => setIsActive(true), 1000)
    } else {
      setHasSeenTour(true)
    }
  }, [])

  const handleClose = () => {
    setIsActive(false)
    localStorage.setItem("portfolio-tour-seen", "true")
    setHasSeenTour(true)
    window.scrollTo({ top: 0, behavior: "smooth" }) // Added scroll to top when tour is closed
  }

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      scrollToTarget(tourSteps[currentStep + 1].target)
    } else {
      handleClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      scrollToTarget(tourSteps[currentStep - 1].target)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setIsActive(true)
    scrollToTarget(tourSteps[0].target)
  }

  const scrollToTarget = (target: string) => {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  useEffect(() => {
    if (isActive) {
      scrollToTarget(tourSteps[currentStep].target)
    }
  }, [currentStep, isActive])

  const currentTourStep = tourSteps[currentStep]

  if (!isActive && hasSeenTour) {
    return (
      <button
        onClick={handleRestart}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Restart tour"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>
    )
  }

  if (!isActive) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in" />

      {/* Tour Card */}
      <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-in slide-in-from-bottom-4 duration-300">
        <div className="rounded-lg border bg-card p-6 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close tour</span>
          </button>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-500">
              <AnimatedTourAvatar isTalking={isActive} />
              <div className="flex-1 space-y-2 pt-1">
                <h3 className="text-lg font-semibold">{currentTourStep.title}</h3>
                <p className="text-sm text-muted-foreground">{currentTourStep.description}</p>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep ? "w-6 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentStep + 1} of {tourSteps.length}
              </span>

              <Button size="sm" onClick={handleNext} className="gap-2">
                {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
                {currentStep === tourSteps.length - 1 ? <X className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
