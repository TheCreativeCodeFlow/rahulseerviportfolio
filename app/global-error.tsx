"use client"

import { useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white`}>
                <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
                    <div className="max-w-md w-full text-center space-y-6">
                        <h1 className="text-4xl font-bold text-red-500 tracking-widest">FATAL SYSTEM ERROR</h1>

                        <div className="p-6 border border-red-500/30 bg-red-950/20 rounded-sm">
                            <p className="font-mono text-red-400 mb-4">{`>_`} KERNEL_PANIC_DETECTED</p>
                            <p className="text-gray-400 text-sm">{error.message}</p>
                        </div>

                        <button
                            onClick={() => reset()}
                            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider rounded-sm transition-colors"
                        >
                            HARD_RESET
                        </button>
                    </div>
                </div>
            </body>
        </html>
    )
}
