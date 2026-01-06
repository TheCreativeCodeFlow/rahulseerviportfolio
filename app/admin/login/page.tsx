"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function AdminLogin() {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            })

            const data = await res.json()

            if (res.ok) {
                router.push("/admin")
                router.refresh()
            } else {
                setError(data.error || "Access Denied")
            }
        } catch (err) {
            setError("System Malfunction")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="relative z-10 w-full max-w-md p-8">
                <div className="glass-panel p-8 rounded-sm shadow-[0_0_50px_rgba(0,243,255,0.1)] border border-primary/20">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/50 animate-pulse-slow">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold font-mono text-white tracking-widest">SECURE_ACCESS</h1>
                        <p className="text-xs text-primary mt-2 uppercase tracking-[0.2em]">{`// RESTRICTED AREA`}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono text-gray-400 mb-2 uppercase">Input Access Key</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 text-white font-mono focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-center tracking-widest"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-xs font-mono text-center bg-red-500/10 py-2 border border-red-500/20 rounded-sm">
                                [ERROR] {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary/10 border border-primary/50 text-primary py-3 font-mono font-bold tracking-wider hover:bg-primary/20 transition-all rounded-sm uppercase text-sm"
                        >
                            Initiate Login_
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
