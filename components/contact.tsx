"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Send } from "lucide-react"
import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { sendEmail } from "@/app/actions/send-email"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const form = e.currentTarget

    try {
      console.log("[v0] Calling sendEmail...")
      const result = await sendEmail(formData)
      console.log("[v0] sendEmail result:", result)

      if (result?.success) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." })
        form.reset()
      } else {
        console.log("[v0] Email failed:", result?.error)
        setStatus({ type: "error", message: result?.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      console.error("[v0] Exception in handleSubmit:", error)
      setStatus({ type: "error", message: "An unexpected error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5" ref={ref}>
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/8 via-transparent to-accent/8" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-mono text-sm font-black uppercase tracking-[0.2em]">Let's Connect</span>
            <h2 className="text-6xl sm:text-7xl font-black tracking-tighter">Get In Touch</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Whether it&apos;s for a collaboration, consultation, or just a technical discussion—let&apos;s connect and create something impactful together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <Card className="border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Contact Information</CardTitle>
                <CardDescription className="text-base">Choose your preferred way to reach out</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sudharsansivasurya19@gmail.com&su=Hi%20Sudharsan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      sudharsansivasurya19@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">Phone</p>
                    <a
                      href="https://wa.me/919487266264?text=Hi%20Sudharsan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9487266264
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium mb-1">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/sudharsan-siva-surya-balasubramaniam-b62236220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Send a Message</CardTitle>
                <CardDescription className="text-base">I'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={4}
                      required
                      disabled={isSubmitting}
                    />
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

                  <Button type="submit" className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all text-white font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
