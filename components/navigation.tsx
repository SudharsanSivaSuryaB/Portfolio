"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Edit3, LogOut } from "lucide-react"
import { useEditMode } from "@/context/edit-mode-context"
import { PinVerificationDialog } from "@/components/pin-verification-dialog"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPinDialogOpen, setIsPinDialogOpen] = useState(false)
  const { isEditMode, setIsEditMode } = useEditMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEditClick = () => {
    if (isEditMode) {
      setIsEditMode(false)
    } else {
      setIsPinDialogOpen(true)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            SSB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm" className="text-sm">
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <div className="w-px h-6 bg-border mx-1" />
            <Button
              variant={isEditMode ? "destructive" : "outline"}
              size="sm"
              onClick={handleEditClick}
              className="gap-2 text-sm"
            >
              {isEditMode ? (
                <>
                  <LogOut className="h-4 w-4" />
                  Exit Edit
                </>
              ) : (
                <>
                  <Edit3 className="h-4 w-4" />
                  Edit
                </>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant={isEditMode ? "destructive" : "outline"}
              size="icon"
              onClick={handleEditClick}
            >
              {isEditMode ? (
                <LogOut className="h-4 w-4" />
              ) : (
                <Edit3 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* PIN Verification Dialog */}
      <PinVerificationDialog isOpen={isPinDialogOpen} onOpenChange={setIsPinDialogOpen} />
    </nav>
  )
}
