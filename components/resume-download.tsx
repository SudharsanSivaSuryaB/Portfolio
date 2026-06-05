"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Download, FileText } from "lucide-react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { trackResumeDownload } from "@/app/actions/track-resume-download"

const RESUME_URL =
  "https://blobs.vusercontent.net/blob/Sudharsan%20Siva%20Surya%20B%20Resume-ut3ZezARoFizNcPbkXY3dogjdvNn9U.pdf"

export function ResumeDownload() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    website: "",
  })

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
    link.href = RESUME_URL
    link.download = "SUDHARSAN-SIVA-SURYA-B_Resume.pdf"
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
      console.log("[v0] Resetting form after success message")
      setStatus(null)
      setFormValues({ name: "", company: "", website: "" })
    }, 3000)
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
              <span className="text-primary font-mono text-xl">05.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Download My Resume</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Interested in learning more? Fill in your details below to download my complete resume.
            </p>
          </div>

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
    </section>
  )
}
