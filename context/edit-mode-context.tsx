"use client"

import React, { createContext, useContext, useState } from "react"

interface EditModeContextType {
  isEditMode: boolean
  setIsEditMode: (value: boolean) => void
  showNumbering: boolean
  setShowNumbering: (value: boolean) => void
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined)

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [showNumbering, setShowNumbering] = useState(true)

  return (
    <EditModeContext.Provider value={{ isEditMode, setIsEditMode, showNumbering, setShowNumbering }}>
      {children}
    </EditModeContext.Provider>
  )
}

export function useEditMode() {
  const context = useContext(EditModeContext)
  if (!context) {
    throw new Error("useEditMode must be used within EditModeProvider")
  }
  return context
}
