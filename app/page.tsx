"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Copy,
  CheckCircle,
  Code,
  Database,
  Smartphone,
} from "lucide-react"

import Hero from "@/components/Hero"
import TechLoadingScreen from "@/components/TechLoadingScreen"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)
  const fullText = "B.Tech CSE Student | Big Data Analytics Specialist"

  useEffect(() => {
    if (!loading) {
      let index = 0
      const timer = setInterval(() => {
        setText(fullText.slice(0, index))
        index++
        if (index > fullText.length) {
          clearInterval(timer)
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [loading])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Rahul-Seervi.pdf"
    link.download = "Rahul-Seervi.pdf"
    link.click()
  }

  const handleEmailClick = async () => {
    const email = "seervirahul2004@gmail.com"

    // Try mailto first
    try {
      window.location.href = `mailto:${email}`
    } catch (error) {
      // If mailto fails, copy to clipboard
      try {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 3000)
      } catch (clipboardError) {
        // If clipboard fails, show alert with email
        alert(`Email: ${email}\n\nPlease copy this email address manually.`)
      }
    }
  }

  const quickStats = [
    { icon: <Code className="w-6 h-6" />, label: "Projects", value: "15+" },
    { icon: <Database className="w-6 h-6" />, label: "Technologies", value: "10+" },
    { icon: <Smartphone className="w-6 h-6" />, label: "Experience", value: "2+ Years" },
  ]

  if (loading) {
    return <TechLoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <Hero />

      {/* Quick Stats */}
      <section className="py-12 bg-black/40 border-b border-primary/10 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-sm bg-card/20 border border-white/5 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                <div className="text-primary mb-3 flex justify-center group-hover:text-glow transition-all scale-110">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section-padding relative">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 tracking-wider">
            <span className="text-primary mr-2">/</span>EXPLORE_WORK
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "About Me", href: "/about", description: "Learn about my journey" },
              { title: "Skills", href: "/skills", description: "Technical expertise" },
              { title: "Projects", href: "/projects", description: "Featured work" },
              { title: "Certificates", href: "/certificates", description: "Verified Credentials" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-sm bg-card/40 border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-primary group-hover:text-glow transition-colors duration-300 relative z-10 font-mono uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm relative z-10">{item.description}</p>
                <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Email Alternatives */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Multiple Ways to Reach Me</h2>
            <p className="text-gray-400 mb-8">Choose your preferred method of contact</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Direct Email */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Direct Email</h3>
              <p className="text-xs text-gray-400 mb-3">seervirahul2004@gmail.com</p>
              <button onClick={handleEmailClick} className="w-full btn-primary text-sm py-2">
                Send Email
              </button>
            </div>

            {/* Copy Email */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Copy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Copy Email</h3>
              <p className="text-xs text-gray-400 mb-3">Copy to clipboard</p>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText("seervirahul2004@gmail.com")
                    setEmailCopied(true)
                    setTimeout(() => setEmailCopied(false), 3000)
                  } catch (error) {
                    alert("Email: seervirahul2004@gmail.com")
                  }
                }}
                className="w-full btn-secondary text-sm py-2"
              >
                {emailCopied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Contact Form */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">Contact Form</h3>
              <p className="text-xs text-gray-400 mb-3">Use our contact page</p>
              <Link href="/contact" className="w-full btn-secondary text-sm py-2 block">
                Contact Form
              </Link>
            </div>

            {/* LinkedIn Message */}
            <div className="p-4 bg-gray-900 rounded-lg text-center">
              <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-xs text-gray-400 mb-3">Professional network</p>
              <a
                href="https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-sm py-2 block"
              >
                Message Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
