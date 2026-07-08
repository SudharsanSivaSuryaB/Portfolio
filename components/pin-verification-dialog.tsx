"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"
import { useEditMode } from "@/context/edit-mode-context"

const SECURITY_PIN = "1419"

interface PinVerificationDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function PinVerificationDialog({ isOpen, onOpenChange }: PinVerificationDialogProps) {
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { setIsEditMode } = useEditMode()

  const handleVerify = () => {
    setIsLoading(true)
    setError("")

    // Simulate verification delay
    setTimeout(() => {
      if (pin === SECURITY_PIN) {
        setIsEditMode(true)
        setPin("")
        onOpenChange(false)
      } else {
        setError("Invalid PIN. Please try again.")
        setPin("")
      }
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && pin.length === 4) {
      handleVerify()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Enter Security PIN
          </DialogTitle>
          <DialogDescription>
            Enter the security PIN to enter edit mode and manage your portfolio content.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="pin" className="text-sm font-medium">
              PIN
            </label>
            <Input
              id="pin"
              type="password"
              placeholder="••••"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.slice(0, 4))
                setError("")
              }}
              onKeyPress={handleKeyPress}
              maxLength={4}
              className="text-center text-2xl tracking-widest"
              disabled={isLoading}
              autoFocus
            />
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleVerify}
              disabled={pin.length !== 4 || isLoading}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              {isLoading ? "Verifying..." : "Unlock"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
