"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-tech-black font-mono text-primary">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

            {/* Glitch Effect 404 */}
            <div className="relative z-10 text-center mb-8">
                <h1 className="text-9xl font-bold tracking-tighter text-glow animate-pulse">
                    404
                </h1>
                <div className="absolute top-0 left-0 w-full h-full text-secondary opacity-50 animate-pulse-fast transform translate-x-1">
                    404
                </div>
            </div>

            <div className="relative z-10 text-center space-y-6 max-w-md px-4">
                <div className="p-6 bg-card/20 border border-primary/30 backdrop-blur-md rounded-sm box-glow">
                    <h2 className="text-2xl font-bold text-white mb-2">ERROR: PAGE_NOT_FOUND</h2>
                    <p className="text-gray-400 mb-6">
                        The requested resource could not be located in the system memory. It may have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 transition-all rounded-sm group"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>RETURN_HOME</span>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary/10 border border-secondary/50 text-secondary hover:bg-secondary/20 transition-all rounded-sm group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>GO_BACK</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 text-xs text-gray-500 font-mono">
                SYSTEM_ID: RS-PORTFOLIO-V2 // ERROR_LOG_404
            </div>
        </div>
    )
}
