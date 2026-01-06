"use client"

import { useState } from "react"
import { Heart, Github, Linkedin, Mail, ArrowUp, Copy, CheckCircle } from "lucide-react"

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEmailClick = async () => {
    const email = "seervirahul2004@gmail.com"

    try {
      // Try mailto first
      window.location.href = `mailto:${email}`
    } catch (error) {
      // If mailto fails, copy to clipboard
      try {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 3000)
      } catch (clipboardError) {
        // If clipboard fails, show alert
        alert(`Email: ${email}\n\nPlease copy this email address manually.`)
      }
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/TheCreativeCodeFlow",
      label: "GitHub",
      onClick: null,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in",
      label: "LinkedIn",
      onClick: null,
    },
    {
      icon: emailCopied ? <CheckCircle className="w-5 h-5" /> : <Mail className="w-5 h-5" />,
      href: null,
      label: emailCopied ? "Email Copied!" : "Email",
      onClick: handleEmailClick,
    },
  ]

  return (
    <footer className="bg-black border-t border-white/10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono tracking-wider"><span className="text-primary mr-1">R</span>AHUL <span className="text-secondary ml-1">S</span>EERVI</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              B.Tech CSE Student specializing in Big Data Analytics. Passionate about creating innovative solutions with
              modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) =>
                social.onClick ? (
                  <button
                    key={index}
                    onClick={social.onClick}
                    className={`p-2 rounded-sm transition-colors duration-300 hover:scale-110 border border-white/10 ${emailCopied ? "bg-green-900/50 text-green-400 border-green-500/50" : "bg-white/5 hover:bg-primary/20 hover:border-primary/50 hover:text-primary"
                      }`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-sm bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-colors duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ),
              )}
            </div>

            {/* Email Display */}
            {emailCopied && (
              <div className="animate-in fade-in-0 duration-500">
                <div className="inline-flex items-center px-3 py-2 bg-green-900/30 border border-green-500/30 rounded-sm text-green-400 text-sm font-mono">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  EMAIL_COPIED_TO_CLIPBOARD
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-mono text-primary">QUICK_LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-mono text-secondary">TRANSMISSION_DATA</h4>
            <div className="space-y-2 text-gray-400 text-sm font-mono">
              <div className="flex items-center justify-between group">
                <span className="group-hover:text-white transition-colors">seervirahul2004@gmail.com</span>
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
                  className="p-1 rounded hover:bg-white/10 transition-colors duration-300"
                  title="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p>ID: +91 8583024122</p>
              <p>LOC: India</p>
            </div>
            <div className="pt-4">
              <p className="text-xs text-secondary/70 uppercase tracking-widest">Open for new protocols</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>© {currentYear} Rahul Seervi. System Online.</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
