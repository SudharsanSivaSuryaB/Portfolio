"use client"

import { useEditMode } from "@/context/edit-mode-context"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

interface EditableSectionHeaderProps {
  number: string
  title: string
  description?: string
}

export function EditableSectionHeader({ number, title, description }: EditableSectionHeaderProps) {
  const { isEditMode, showNumbering, setShowNumbering } = useEditMode()

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {showNumbering && <span className="text-primary font-mono text-2xl font-black">{number}</span>}
        <h2 className="text-6xl sm:text-7xl font-black tracking-tighter">{title}</h2>
        {isEditMode && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowNumbering(!showNumbering)}
            title={showNumbering ? "Hide numbering" : "Show numbering"}
            className="gap-2 text-xs"
          >
            {showNumbering ? (
              <>
                <EyeOff className="h-4 w-4" />
                Hide #
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Show #
              </>
            )}
          </Button>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
