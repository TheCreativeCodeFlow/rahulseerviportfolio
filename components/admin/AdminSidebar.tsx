"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, User, FileText, Code, Folder, Award, Mail, LogOut } from "lucide-react"

const AdminSidebar = () => {
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" })
        router.push("/admin/login")
    }

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Hero Section", href: "/admin/hero", icon: User },
        { name: "About Me", href: "/admin/about", icon: FileText },
        { name: "Skills", href: "/admin/skills", icon: Code },
        { name: "Projects", href: "/admin/projects", icon: Folder },
        { name: "Certificates", href: "/admin/certificates", icon: Award },
        { name: "Contact Info", href: "/admin/contact", icon: Mail },
    ]

    return (
        <aside className="w-64 bg-card/10 backdrop-blur-md border-r border-white/10 h-screen fixed left-0 top-0 pt-20 hidden md:block">
            <div className="px-6 mb-8">
                <h2 className="text-xl font-bold font-mono text-primary tracking-widest">ADMIN_PANEL</h2>
            </div>
            <nav className="space-y-1 px-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-sm transition-all duration-200 group ${isActive
                                ? "bg-primary/20 text-primary border-l-2 border-primary"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "group-hover:text-primary"}`} />
                            <span className="font-mono text-sm">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="absolute bottom-8 left-0 w-full px-4">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-sm transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    <span className="font-mono text-sm">LOGOUT_SYSTEM</span>
                </button>
            </div>
        </aside>
    )
}

export default AdminSidebar
