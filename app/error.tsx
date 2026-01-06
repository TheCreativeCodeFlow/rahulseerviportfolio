"use client"

import { useEffect } from "react"
import { RefreshCw, AlertTriangle } from "lucide-react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-tech-black font-mono text-destructive">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#3f0000_1px,transparent_1px),linear-gradient(to_bottom,#3f0000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

            <div className="relative z-10 max-w-lg w-full px-4">
                <div className="bg-black/80 border border-destructive/50 p-8 rounded-sm shadow-[0_0_30px_rgba(255,0,0,0.2)] backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-6 border-b border-destructive/30 pb-4">
                        <AlertTriangle className="w-12 h-12 text-destructive animate-pulse" />
                        <div>
                            <h2 className="text-2xl font-bold tracking-widest text-destructive">SYSTEM MALFUNCTION</h2>
                            <p className="text-xs text-destructive/70">ERROR_CODE: 0x{error.digest || 'UNKNOWN'}</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <p className="text-gray-300">
                            <span className="text-destructive mr-2">{`>`}</span>
                            Critical error detected in application runtime.
                        </p>
                        <p className="text-gray-400 text-sm bg-destructive/5 p-4 rounded border border-destructive/10 font-mono">
                            {error.message || "An unexpected error occurred while processing your request."}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={() => reset()}
                            className="group flex items-center gap-2 px-8 py-3 bg-destructive/10 border border-destructive/50 text-destructive hover:bg-destructive/20 transition-all rounded-sm font-bold tracking-wider"
                        >
                            <RefreshCw className="w-5 h-5 group-hover:animate-spin" />
                            <span>INITIATE_System_REBOOT</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 text-xs text-destructive/50 font-mono animate-pulse">
                WARNING: SYSTEM_ instability_DETECTED
            </div>
        </div>
    )
}
