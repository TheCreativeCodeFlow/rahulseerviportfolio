"use client"

import { ExternalLink, Github, Calendar, Tag, Database } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "UNO Game",
      description:
        "A fully functional UNO card game built with Java, featuring multiplayer support, game logic implementation, and an intuitive user interface.",
      image: "/images/uno-game-thumbnail.png",
      technologies: ["Java", "Swing", "OOP", "Game Logic"],
      liveDemo: "https://uno-game-app-3w67.vercel.app/",
      sourceCode: "https://github.com/TheCreativeCodeFlow/Uno-Game-App",
      featured: true,
      date: "2024",
    },
    {
      title: "Mentor's Mark - NGO Platform",
      description:
        "A comprehensive NGO platform designed to connect mentors with students, facilitating educational guidance and career development. Features user registration, mentor-student matching, resource sharing, and progress tracking to empower underprivileged communities through quality mentorship.",
      image: "/images/mentors-mark-thumbnail.png",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://mentor-s-mark-qvn3.vercel.app/",
      sourceCode: "https://github.com/TheCreativeCodeFlow/Mentor-s-Mark",
      featured: true,
      date: "2024",
    },
    {
      title: "Traffic Video Analysis System",
      description:
        "A sophisticated web application for analyzing traffic patterns using video processing, built with Next.js and Canvas API for real-time visualization.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Canvas API", "Video Processing", "React"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
      date: "2024",
    },
    {
      title: "University Management System",
      description:
        "A comprehensive web application for managing university operations including student enrollment, course management, and administrative tasks.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      date: "2023",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data processing capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Python", "Data Visualization"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
      date: "2023",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary mr-2">/</span>Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col rounded-sm overflow-hidden bg-card/10 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden bg-black">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                {/* Scan Line Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Database className="w-24 h-24 text-primary" />
                </div>

                <div className="flex items-center mb-4 relative z-10">
                  <Calendar className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-gray-400 font-mono">{project.date}</span>
                  <span className="ml-4 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-medium rounded-sm tracking-wider uppercase">
                    Featured_Unit
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-mono group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-sm flex items-center hover:border-primary/50 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1 text-primary" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 relative z-10">
                  <a
                    href={project.liveDemo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/50 text-primary font-mono text-sm hover:bg-primary/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE_DEMO
                  </a>
                  <a
                    href={project.sourceCode}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/50 text-secondary font-mono text-sm hover:bg-secondary/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    SOURCE_CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white font-mono uppercase tracking-widest"><span className="text-secondary mr-2">{`>`}</span>Other Protocols</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-sm bg-card/10 border border-white/5 hover:border-secondary/50 transition-all duration-300 card-hover relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm text-gray-400 font-mono">{project.date}</span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveDemo}
                      className="p-2 rounded-sm bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.sourceCode}
                      className="p-2 rounded-sm bg-white/5 hover:bg-secondary/20 hover:text-secondary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h4>

                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/5 border border-white/5 text-gray-400 text-xs rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/TheCreativeCodeFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono hover:bg-white/5 transition-all text-sm tracking-widest"
          >
            <Github className="w-5 h-5" />
            ACCESS_GITHUB_REPOSITORY
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
