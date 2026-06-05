"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef, useState, useEffect } from "react"

interface StatItem {
  label: string
  value: number
  suffix: string
  description: string
}

// Add your original stats/metrics here
// Template:
// {
//   label: "Stat Name",
//   value: 20,
//   suffix: "+", // Can be "+", "%", "x", etc.
//   description: "Description of the metric",
// }

const stats: StatItem[] = [
  // Add your stats below - keep it to 4 items for optimal display
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return

    let startValue = 0
    const increment = value / 50
    const timer = setInterval(() => {
      startValue += increment
      if (startValue >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(startValue))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-6xl sm:text-7xl font-black text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="stats" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`space-y-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">Impact by Numbers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quantifiable results from engineering solutions and strategic implementations.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden p-8 rounded-xl border border-primary/20 hover:border-primary/60 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
