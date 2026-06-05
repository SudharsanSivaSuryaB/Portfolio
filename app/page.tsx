import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { ResumeDownload } from "@/components/resume-download"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PortfolioTour } from "@/components/portfolio-tour"

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeDownload />
        <Certifications />
        <Contact />
        <Footer />
      </main>
      <PortfolioTour />
    </>
  )
}
