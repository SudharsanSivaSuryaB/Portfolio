"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Star } from "lucide-react"

// Add your original testimonials here
// Template:
// {
//   name: "Person Name",
//   role: "Job Title at Company",
//   content: "Your actual testimonial text here...",
//   rating: 5, // 1-5 stars
//   initials: "PN", // First letter of name and last name
// }

const testimonials = [
  // Add your testimonials below
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-primary font-mono text-2xl font-black">04.</span>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">Testimonials</h2>
              <div className="hidden md:flex flex-1 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Recognition from colleagues and clients I&apos;ve collaborated with on challenging projects.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 space-y-5">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed text-base">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
