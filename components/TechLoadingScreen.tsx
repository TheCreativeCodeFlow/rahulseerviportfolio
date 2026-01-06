"use client"

import { useState, useEffect } from "react"

interface TechLoadingScreenProps {
    onComplete?: () => void
}

const SYSTEMS = [
    "INITIALIZING KERNEL...",
    "LOADING GRAPHICS DRIVERS 5.4.2...",
    "ALLOCATING MEMORY BLOCKS...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING USER PROFILE...",
    "COMPILATING ASSETS...",
    "RENDERING VIEWPORT...",
    "SYSTEM ONLINE",
]

export default function TechLoadingScreen({ onComplete }: TechLoadingScreenProps) {
    const [progress, setProgress] = useState(0)
    const [logs, setLogs] = useState<string[]>([])
    const [activeSystem, setActiveSystem] = useState(0)

    useEffect(() => {
        // Progress timer
        const totalTime = 3000 // 3 seconds total load time
        const intervalTime = 30
        const steps = totalTime / intervalTime
        const increment = 100 / steps

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment
                if (next >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return next
            })
        }, intervalTime)

        // Log timer
        const logTimer = setInterval(() => {
            setActiveSystem((prev) => {
                if (prev < SYSTEMS.length - 1) {
                    setLogs((currentLogs) => [...currentLogs, SYSTEMS[prev]])
                    return prev + 1
                }
                return prev
            })
        }, totalTime / SYSTEMS.length)

        // Completion timeout
        const completionTimeout = setTimeout(() => {
            if (onComplete) onComplete()
        }, totalTime + 500)

        return () => {
            clearInterval(timer)
            clearInterval(logTimer)
            clearTimeout(completionTimeout)
        }
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-black text-primary font-mono flex flex-col items-center justify-center p-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10 space-y-8">
                {/* Main Display */}
                <div className="tech-border bg-black/80 p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,243,255,0.1)]">
                    <div className="flex justify-between items-end mb-4 border-b border-primary/30 pb-2">
                        <h1 className="text-2xl font-bold tracking-widest text-glow">SYSTEM BOOT</h1>
                        <span className="text-xl font-bold">{Math.min(100, Math.floor(progress))}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-secondary/20 relative overflow-hidden mb-6">
                        <div
                            className="h-full bg-primary shadow-[0_0_10px_#00f3ff]"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* System Logs */}
                    <div className="h-48 overflow-hidden font-mono text-sm space-y-1 text-primary/70 relative">
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                        {logs.map((log, i) => (
                            <div key={i} className="animate-fade-in">
                                <span className="text-secondary mr-2">{`>`}</span>
                                {log}
                            </div>
                        ))}
                        <div className="animate-pulse text-primary">
                            <span className="text-secondary mr-2">{`>`}</span>
                            {SYSTEMS[activeSystem]}
                            <span className="animate-blink inline-block w-2 h-4 bg-primary ml-1 align-middle"></span>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <div>ID: RS-PORTFOLIO-V2</div>
                    <div>SECURE CONNECTION VERIFIED</div>
                </div>
            </div>
        </div>
    )
}
