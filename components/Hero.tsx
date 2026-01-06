"use client"

import { useState, useEffect } from "react"
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const [heroData, setHeroData] = useState<any>(null)
  const [text, setText] = useState("")

  // Fetch data on mount
  useEffect(() => {
    fetch('/api/content/hero')
      .then(res => res.json())
      .then(data => setHeroData(data))
      .catch(err => console.error("Failed to load hero data", err))
  }, [])

  // Typing effect
  useEffect(() => {
    if (!heroData) return

    const fullText = heroData.typingText || "B.Tech CSE Student | Big Data Analytics Specialist"
    let index = 0

    // Reset text when data loads
    setText("")

    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [heroData])

  const handleDownloadResume = () => {
    if (!heroData) return
    const link = document.createElement("a")
    link.href = heroData.resumeLink || "/Rahul-Seervi.pdf"
    link.download = heroData.resumeLink?.split('/').pop() || "Rahul-Seervi.pdf"
    link.click()
  }

  if (!heroData) return null // Or a skeleton loader

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-tech-black">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Ambient Glows - Optimized for Mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse-fast"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] animate-pulse-fast"></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Profile Image with Tech Ring */}
          <div className="mb-6 sm:mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-black p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                {/* Placeholder for actual image or logo */}
                <span className="text-4xl sm:text-5xl font-bold text-primary group-hover:text-glow transition-all duration-300">RS</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 mb-8">
            <h2 className="text-primary font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">System Identity Verified</h2>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-white mb-2">
              {heroData.title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">{heroData.title.split(" ")[1]}</span>
            </h1>
          </div>

          <div className="h-16 mb-8 flex justify-center items-center">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-mono text-gray-300">
                <span className="text-primary mr-2">{`>`}</span>
                {text}
                <span className="animate-blink inline-block w-3 h-6 bg-primary ml-1 align-middle"></span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={handleDownloadResume}
              className="group relative px-8 py-3 bg-primary/10 overflow-hidden rounded-sm transition-all hover:bg-primary/20"
            >
              <div className="absolute inset-0 w-full h-full border border-primary/50 group-hover:border-primary transition-colors"></div>
              <div className="relative flex items-center justify-center gap-2 font-mono text-primary font-bold tracking-wider">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>DOWNLOAD_CV</span>
              </div>
            </button>

            <a
              href="#projects"
              className="group relative px-8 py-3 bg-secondary/10 overflow-hidden rounded-sm transition-all hover:bg-secondary/20"
            >
              <div className="absolute inset-0 w-full h-full border border-secondary/50 group-hover:border-secondary transition-colors"></div>
              <div className="relative flex items-center justify-center gap-2 font-mono text-secondary font-bold tracking-wider">
                <span>VIEW_PROJECTS</span>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { href: heroData.socialLinks.github, icon: Github, color: "hover:text-primary" },
              { href: heroData.socialLinks.linkedin, icon: Linkedin, color: "hover:text-secondary" },
              { href: heroData.socialLinks.email, icon: Mail, color: "hover:text-accent" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/10 ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow opacity-50">
            <ArrowDown className="w-6 h-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
