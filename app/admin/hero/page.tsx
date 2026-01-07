"use client"

import { useState, useEffect } from "react"
import { Save, Loader2 } from "lucide-react"
import type { HeroData } from "@/types"

export default function HeroEditor() {
    const [data, setData] = useState<HeroData | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("/api/content/hero")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSocialChange = (key: string, value: string) => {
        setData({
            ...data,
            socialLinks: { ...data.socialLinks, [key]: value }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage("")

        try {
            const res = await fetch("/api/content/hero", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setMessage("System updated successfully.")
            } else {
                setMessage("Update failed.")
            }
        } catch (err) {
            setMessage("Error connecting to server.")
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <div className="p-8 text-primary font-mono">LOADING_DATA...</div>

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-mono text-white">
                    <span className="text-primary mr-2">/</span>EDIT_HERO
                </h1>
                {message && (
                    <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm rounded-sm">
                        {message}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="glass-panel p-6 rounded-sm space-y-4 border border-white/10">
                    <h2 className="text-xl font-bold text-white font-mono mb-4 border-b border-white/10 pb-2">Core Identity</h2>

                    <div className="grid gap-4">
                        <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Display Name</label>
                            <input
                                name="title"
                                value={data.title}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Subtitle / Role</label>
                            <input
                                name="subtitle"
                                value={data.subtitle}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Typing Text Animation</label>
                            <input
                                name="typingText"
                                value={data.typingText}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="glass-panel p-6 rounded-sm space-y-4 border border-white/10">
                    <h2 className="text-xl font-bold text-white font-mono mb-4 border-b border-white/10 pb-2">Bio & Resume</h2>

                    <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1">Short Description</label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1">Resume File Path (public/)</label>
                        <input
                            name="resumeLink"
                            value={data.resumeLink}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div className="glass-panel p-6 rounded-sm space-y-4 border border-white/10">
                    <h2 className="text-xl font-bold text-white font-mono mb-4 border-b border-white/10 pb-2">Connect Uplinks</h2>

                    <div className="grid gap-4">
                        {Object.keys(data.socialLinks).map((key) => (
                            <div key={key}>
                                <label className="block text-xs font-mono text-gray-400 mb-1 uppercase">{key}</label>
                                <input
                                    value={data.socialLinks[key]}
                                    onChange={(e) => handleSocialChange(key, e.target.value)}
                                    className="w-full bg-black/50 border border-white/10 p-3 rounded-sm text-white focus:border-primary focus:outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={saving}
                    className="fixed bottom-8 right-8 flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold font-mono rounded-sm hover:bg-white transition-all shadow-lg hover:shadow-primary/50"
                >
                    {saving ? <Loader2 className="animate-spin" /> : <Save />}
                    SAVE_CHANGES
                </button>
            </form>
        </div>
    )
}
