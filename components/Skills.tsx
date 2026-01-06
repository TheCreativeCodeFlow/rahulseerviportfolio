"use client"

import { Code, Database, Globe, Smartphone, Terminal, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-primary-orange to-red-500",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6" />,
      color: "from-primary-blue to-blue-600",
      skills: ["Java", "Node.js", "REST APIs", "Express.js"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      skills: ["MongoDB", "MySQL", "SQL", "Database Design"],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      skills: ["Kotlin", "Android Development"],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      skills: ["Git", "GitHub", "VSCode", "IntelliJ IDEA", "Canvas API", "JSON"],
    },
    {
      title: "Specialization",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-primary-dark-blue to-gray-800",
      skills: ["Big Data Analytics", "Data Processing", "Algorithm Design", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-black/50 relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary mr-2">/</span>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-sm bg-card/20 border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center mb-6 relative z-10">
                <div className={`p-3 rounded-sm bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 mr-4 shadow-[0_0_15px_rgba(0,243,255,0.2)]`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-mono tracking-wide">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-sm bg-black/40 border border-white/5 hover:border-primary/30 transition-colors duration-200"
                  >
                    <span className="text-gray-300 font-medium font-mono text-sm">{skill}</span>
                    <div className="w-1.5 h-3 bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_#00f3ff] transition-all"></div>
                  </div>
                ))}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-sm border border-primary/30 bg-primary/10 text-primary font-medium font-mono tracking-wider animate-pulse-fast">
            <Terminal className="w-5 h-5 mr-2" />
            ALWAYS_INITIALIZING_NEW_PROTOCOLS...
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
