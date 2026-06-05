"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const certifications = [
  {
    title: "My SQL",
    issuer: "GUVI (HCL Partnership)",
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_guvi-certificate-activity-7403176355380617216-giSK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "Data Analytics using Pandas Tamil",
    issuer: "GUVI (HCL Partnership)",
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_dataanalytics-pandas-guvi-activity-7402735922309455872-uqft?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "EF SET English Certificate 69/100 (C1 Advanced)",
    issuer: "EF SET",
    date: "May 2025",
    link: "https://cert.efset.org/en/V88zmX",
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Google",
    date: "Feb 2024",
    link: "https://cloudskillsboost.google/public_profiles/db3680ce-7830-47bc-bdf4-b6c9b15b9c34/badges/7925925",
  },
  {
    title: "IT and Cybersecurity Risk Management Essential Training",
    issuer: "LinkedIn Learning",
    date: "Dec 2022",
    link: "https://linkedin.com/learning/certificates/00cdb2bcf673d4200764a0516f2daf6daf4ec95c861bbcac43a74e15eedbdbad",
  },
  {
    title: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    date: "Mar 2024",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_just-finished-pcep-certification-activity-7171048402158383104-9NFV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "Acquiring Data Fundamentals",
    issuer: "NASSCOM",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1Eup1tt5CXJqdbyWxzS0sr0Eo9YYD069w/view?usp=sharing",
  },
  {
    title: "SQL - Database",
    issuer: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/VEAKZPCV",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Coding Ninjas",
    link: "https://drive.google.com/file/d/1pYYD8DxdwR2wbDUeB0JzxXvHrILldJtk/view?usp=sharing",
  },
]

const hackerRankCerts = [
  {
    title: "Problem Solving (Basic)",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_hackerrank-problem-solving-activity-7190926332938084354-GxLA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "Java (Basic)",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_hackerrank-java-basic-activity-7190925291991494656-6E-F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "SQL (Basic)",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_hackerrank-sql-basic-activity-7190926918039265281-u2k7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "Python (Basic)",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_hackerrank-python-basic-activity-7190925605645787136-skVb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
  {
    title: "Software Engineer Intern",
    link: "https://www.linkedin.com/posts/sudharsan-siva-surya-balasubramaniam-b62236220_hackerrank-software-intern-activity-7190926069661630466-kpei?utm_source=share&utm_medium=member_desktop&rcm=ACoAADeQOfoBJMAvf4gTSKZfq1Pcc8smSJwi7t4",
  },
]

export function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`space-y-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-mono text-xl">05.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Certifications</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group relative"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="space-y-1">
                      <CardTitle className="text-sm leading-tight text-balance pr-6">{cert.title}</CardTitle>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      {cert.date && <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              HackerRank Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hackerRankCerts.map((cert, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group relative"
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div className="space-y-1">
                        <CardTitle className="text-sm leading-tight text-balance pr-6">{cert.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">HackerRank</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
