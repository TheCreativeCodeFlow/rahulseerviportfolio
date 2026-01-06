"use client"

import { GraduationCap, Code, Database, Brain } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "B.Tech in Computer Science Engineering with specialization in Big Data Analytics",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with Java, React, and modern web technologies",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Passionate about extracting insights from complex datasets",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Love tackling challenging problems with innovative solutions",
    },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="container-custom">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary mr-2">/</span>About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Get to know more about my journey, passion, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-sm blur opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="w-80 h-80 rounded-sm bg-black relative border border-white/10 p-2 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                <div className="w-full h-full bg-card/50 flex items-center justify-center relative z-10">
                  <span className="text-6xl font-bold text-primary group-hover:text-glow transition-all">RS</span>
                </div>

                {/* Tech Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed border-l-2 border-primary/30 pl-4">
                Hello! I'm Rahul Seervi, a passionate B.Tech Computer Science Engineering student specializing in Big
                Data Analytics. My journey in technology began with a curiosity about how data can transform
                decision-making and create meaningful impact.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I have hands-on experience in developing applications using Java, React, and various database
                technologies. My projects range from interactive games like UNO to sophisticated systems like Traffic
                Video Analysis using Next.js and Canvas API.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                diving deep into the latest trends in big data and analytics.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-sm bg-card/20 border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="text-primary mb-3 group-hover:text-glow group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
