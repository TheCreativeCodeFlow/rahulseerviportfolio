export default function AdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold font-mono text-white mb-2">
                <span className="text-primary mr-2">/</span>SYSTEM_DASHBOARD
            </h1>
            <p className="text-gray-400 mb-8">Welcome back, Administrator. Select a module to manage content.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Hero Section", desc: "Manage detailed bio, typing text, and resume link.", href: "/admin/hero", color: "border-primary/50 text-primary" },
                    { title: "Projects", desc: "Add, remove, or edit featured projects.", href: "/admin/projects", color: "border-secondary/50 text-secondary" },
                    { title: "Certificates", desc: "Update certifications and credentials.", href: "/admin/certificates", color: "border-green-500/50 text-green-500" },
                    { title: "Skills", desc: "Manage technical skills and categories.", href: "/admin/skills", color: "border-yellow-500/50 text-yellow-500" },
                    { title: "Contact", desc: "Update contact information and social links.", href: "/admin/contact", color: "border-red-500/50 text-red-500" },
                ].map((item, i) => (
                    <a key={i} href={item.href} className={`p-6 bg-card/10 border ${item.color} rounded-sm hover:bg-white/5 transition-all group`}>
                        <h3 className="text-xl font-bold mb-2 font-mono">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                        <div className="text-xs font-mono uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Access_Module {`->`}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}
