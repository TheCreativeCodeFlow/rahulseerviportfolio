"use client"

import { usePathname } from "next/navigation"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isLoginPage = pathname === "/admin/login"

    return (
        <div className="min-h-screen bg-black">
            {!isLoginPage && <AdminSidebar />}
            <div className={`${!isLoginPage ? "md:ml-64" : ""} min-h-screen transition-all duration-300`}>
                {children}
            </div>
        </div>
    )
}
