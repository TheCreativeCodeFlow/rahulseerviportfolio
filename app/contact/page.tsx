"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Copy,
  Clock,
} from "lucide-react"
import LoadingScreen from "@/components/LoadingScreens"

export default function Contact() {
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [emailCopied, setEmailCopied] = useState(false)

  // Initialize EmailJS after loading screen completes
  useEffect(() => {
    if (!loading) {
      // Load EmailJS script
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      script.async = true
      script.onload = () => {
        // Initialize EmailJS with your public key
        if (window.emailjs) {
          window.emailjs.init("3t8qc2zrUtsJAAx8u") // Replace with your EmailJS public key
        }
      }
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [loading])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("seervirahul2004@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    setSuccessMessage("")

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded")
      }

      // EmailJS configuration
      const serviceID = "service_axepp2l" // Replace with your EmailJS service ID
      const templateID = "template_iscnkrj" // Main template (email to you)
      const autoReplyTemplateID = "template_lgc0wbf" // Auto-reply template (email to user)

      // Template parameters for main email (to you)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Rahul Seervi",
        reply_to: formData.email,
        timestamp: new Date().toLocaleString(),
      }

      // Template parameters for auto-reply email (to user)
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        reply_to: formData.email,
        from_name: "Rahul Seervi",
        from_email: "seervirahul2004@gmail.com",
        user_message: formData.message,
        user_name: formData.name,
        user_email: formData.email,
        timestamp: new Date().toLocaleString(),
        portfolio_url: "https://rahulseerviportfolio.vercel.app",
        linkedin_url: "https://www.linkedin.com/in/rahul-seervi-a14440289/",
        github_url: "https://github.com/TheCreativeCodeFlow",
      }

      console.log("📧 Sending emails via EmailJS...")

      // Send main email to you
      console.log("📨 Sending main email to portfolio owner...")
      const mainResponse = await window.emailjs.send(serviceID, templateID, templateParams)
      console.log("✅ Main email sent successfully:", mainResponse)

      // Send auto-reply email to user
      console.log("📨 Sending auto-reply email to user...")
      try {
        const autoReplyResponse = await window.emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams)
        console.log("✅ Auto-reply email sent successfully:", autoReplyResponse)
      } catch (autoReplyError) {
        console.warn("⚠️ Auto-reply failed, but main email was sent:", autoReplyError)
        // Don't fail the whole process if auto-reply fails
      }

      setSubmitStatus("success")
      setSuccessMessage("🎉 Message sent successfully! I'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", message: "" })

      // Auto-hide success message after 15 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setSuccessMessage("")
      }, 15000)
    } catch (error: unknown) {
      console.error("❌ EmailJS error:", error)

      const errorMessage = error instanceof Error
        ? error.message
        : (error as { text?: string })?.text || "Failed to send message. Please try contacting me directly via email."

      setSubmitStatus("error")
      setErrorMessage(errorMessage)

      // Auto-hide error message after 10 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 10000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      value: "seervirahul2004@gmail.com",
      link: "mailto:seervirahul2004@gmail.com",
      copyable: true,
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      value: "+91 8583024122",
      link: "tel:+918583024122",
      copyable: false,
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      value: "India",
      link: "#",
      copyable: false,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "GitHub",
      url: "https://github.com/TheCreativeCodeFlow",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-seervi-a14440289/?originalSubdomain=in",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      name: "Twitter",
      url: "https://twitter.com/rahulseervi",
      color: "hover:bg-blue-400",
    },
  ]

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} type="contact" />
  }

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 px-4 lg:px-0">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h2>
                <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology and innovation. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300 group"
                  >
                    <a href={info.link} className="flex items-center flex-1">
                      <div className="p-3 rounded-lg bg-primary-orange text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{info.title}</h4>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </a>
                    {info.copyable && (
                      <button
                        onClick={copyEmail}
                        className={`p-2 rounded-lg transition-all duration-300 ${emailCopied
                            ? "bg-green-600 text-white"
                            : "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                          }`}
                        title={emailCopied ? "Copied!" : "Copy email"}
                      >
                        {emailCopied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-400 mr-3" />
                  <div>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">Quick Response Time</p>
                    <p className="text-blue-300 text-xs sm:text-sm">I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary-orange/10 to-yellow-500/10 border border-primary-orange/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse mr-3"></div>
                  <span className="text-primary-orange font-medium text-sm sm:text-base">
                    Available for new opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 mx-4 lg:mx-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-colors duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello!"
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/1000 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-900/30 border border-green-500/30 text-green-400 animate-in fade-in-0 duration-500">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{successMessage}</p>
                        <p className="text-xs text-green-300 mt-1">✅ Your message has been delivered successfully!</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/30 text-red-400 animate-in fade-in-0 duration-500">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{errorMessage}</p>
                        <p className="text-xs text-red-300 mt-1">
                          Please try again or email me directly at{" "}
                          <a href="mailto:seervirahul2004@gmail.com" className="underline hover:text-red-200">
                            seervirahul2004@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
              {[
                {
                  question: "What's your response time?",
                  answer: "I typically respond to emails within 24 hours during weekdays, often much sooner!",
                },
                {
                  question: "Are you available for freelance work?",
                  answer: "Yes! I'm open to freelance projects and collaborations. Let's discuss your requirements.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in Java, React, Next.js, MongoDB, and Big Data Analytics technologies.",
                },
                {
                  question: "Do you work on mobile app projects?",
                  answer:
                    "Yes, I have experience with Android development using Kotlin and can work on mobile projects.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">{faq.question}</h4>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
