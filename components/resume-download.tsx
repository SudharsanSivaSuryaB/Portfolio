"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Download, FileText, Upload, Trash2, CheckCircle2, Clock } from "lucide-react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useEditMode } from "@/context/edit-mode-context"
import { trackResumeDownload } from "@/app/actions/track-resume-download"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

const INITIAL_RESUME_URL =
  "https://blobs.vusercontent.net/blob/Sudharsan%20Siva%20Surya%20B%20Resume-ut3ZezARoFizNcPbkXY3dogjdvNn9U.pdf"

interface Resume {
  id: string
  name: string
  url: string
  uploadedDate: string
  isActive: boolean
}

const initialResumes: Resume[] = [
  {
    id: "1",
    name: "Current Resume",
    url: INITIAL_RESUME_URL,
    uploadedDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
    isActive: true,
  },
]

export function ResumeDownload() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const { isEditMode } = useEditMode()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    website: "",
  })
  const [resumes, setResumes] = useState<Resume[]>(initialResumes)
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [newResumeName, setNewResumeName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const activeResume = resumes.find((r) => r.isActive) || resumes[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const website = formData.get("website") as string

    // Validate inputs
    if (!name || !company || !website) {
      setStatus({ type: "error", message: "Please fill in all fields" })
      setIsSubmitting(false)
      return
    }

    // Simple URL validation
    try {
      new URL(website)
    } catch {
      setStatus({ type: "error", message: "Please enter a valid website URL (including http:// or https://)" })
      setIsSubmitting(false)
      return
    }

    // Track the download
    const result = await trackResumeDownload({ name, company, website })

    if (!result.success) {
      console.error("[v0] Failed to track resume download:", result.error)
      // Still allow download even if tracking fails
    }

    // Trigger download
    const link = document.createElement("a")
    link.href = activeResume.url
    link.download = `${activeResume.name.replace(/\s+/g, "-")}.pdf`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setStatus({
      type: "success",
      message: `Thank you, ${name}! Your download will begin shortly.`,
    })
    setIsSubmitting(false)

    setTimeout(() => {
      setStatus(null)
      setFormValues({ name: "", company: "", website: "" })
    }, 3000)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setSelectedFile(file)
    }
  }

  const handleAddResume = async () => {
    if (!selectedFile || !newResumeName) {
      setStatus({ type: "error", message: "Please select a file and enter a name" })
      return
    }

    // Create a URL for the file (in real app, you'd upload to cloud storage)
    const fileUrl = URL.createObjectURL(selectedFile)
    
    const newResume: Resume = {
      id: Date.now().toString(),
      name: newResumeName,
      url: fileUrl,
      uploadedDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      isActive: false,
    }

    setResumes([...resumes, newResume])
    setNewResumeName("")
    setSelectedFile(null)
    setIsUploadDialogOpen(false)
    setStatus({ type: "success", message: "Resume uploaded successfully!" })
  }

  const handleSetActive = (id: string) => {
    setResumes(resumes.map((r) => ({ ...r, isActive: r.id === id })))
  }

  const handleDeleteResume = (id: string) => {
    if (resumes.length === 1) {
      setStatus({ type: "error", message: "You must keep at least one resume" })
      return
    }
    const toDelete = resumes.find((r) => r.id === id)
    if (toDelete?.isActive) {
      // Make another one active
      const newActive = resumes.find((r) => r.id !== id)
      if (newActive) newActive.isActive = true
    }
    setResumes(resumes.filter((r) => r.id !== id))
  }

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`space-y-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-primary font-mono text-2xl font-black">5.</span>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">Download My Resume</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Interested in learning more? Fill in your details below to download my complete resume.
            </p>
            {isEditMode && (
              <Button
                onClick={() => setIsUploadDialogOpen(true)}
                variant="outline"
                size="sm"
                className="mt-4 gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload New Resume
              </Button>
            )}
          </div>

          {isEditMode && resumes.length > 0 && (
            <Card className="border border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Resume Versions</CardTitle>
                <CardDescription>Manage your resume uploads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resumes.map((resume) => (
                    <div
                      key={resume.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{resume.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Uploaded {resume.uploadedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {resume.isActive && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-600 text-xs font-medium">
                            <CheckCircle2 className="h-3 w-3" />
                            Active
                          </div>
                        )}
                        {!resume.isActive && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleSetActive(resume.id)}
                            className="text-xs"
                          >
                            Set Active
                          </Button>
                        )}
                        <button
                          onClick={() => handleDeleteResume(resume.id)}
                          className="p-1.5 rounded-md hover:bg-red-500/20 hover:text-red-600 text-muted-foreground transition-all"
                          title="Delete resume"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Get My Resume</CardTitle>
              <CardDescription>
                Please provide your information to download my resume. I'd love to connect with you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resume-name">Your Name *</Label>
                  <Input
                    id="resume-name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className="transition-all focus:border-primary"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume-company">Company Name *</Label>
                  <Input
                    id="resume-company"
                    name="company"
                    placeholder="Your Company"
                    required
                    disabled={isSubmitting}
                    className="transition-all focus:border-primary"
                    value={formValues.company}
                    onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume-website">Company Website *</Label>
                  <Input
                    id="resume-website"
                    name="website"
                    type="url"
                    placeholder="https://www.example.com"
                    required
                    disabled={isSubmitting}
                    className="transition-all focus:border-primary"
                    value={formValues.website}
                    onChange={(e) => setFormValues({ ...formValues, website: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">Please include http:// or https://</p>
                </div>

                {status && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <Button type="submit" className="w-full gap-2" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Download Resume
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upload Resume Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload New Resume</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Resume Name</label>
              <Input
                placeholder="e.g., Updated Resume 2024"
                value={newResumeName}
                onChange={(e) => setNewResumeName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">PDF File</label>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleUploadClick}
                >
                  {selectedFile ? selectedFile.name : "Select PDF File"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Only PDF files are supported</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddResume} disabled={!selectedFile || !newResumeName}>
              Upload Resume
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
