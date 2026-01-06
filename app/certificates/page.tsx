"use client"

import { useState } from "react"
import { Award, Search, Filter } from "lucide-react"
import CertificateCard from "@/components/CertificateCard"

// Placeholder data - meaningful sample data
const CERTIFICATES = [
    {
        id: 1,
        title: "Big Data Analytics Specialist",
        issuer: "Coursera / IBM",
        date: "2024",
        imageUrl: "/images/cert-placeholder.svg",
        credentialUrl: "https://coursera.org",
        category: "Data Science"
    },
    {
        id: 2,
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2023",
        imageUrl: "/images/cert-placeholder.svg",
        credentialUrl: "https://frontendmasters.com",
        category: "Web Development"
    },
    {
        id: 3,
        title: "Java Programming Masterclass",
        issuer: "Udemy",
        date: "2023",
        imageUrl: "/images/cert-placeholder.svg",
        credentialUrl: "https://udemy.com",
        category: "Programming"
    },
    {
        id: 4,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        imageUrl: "/images/cert-placeholder.svg",
        credentialUrl: "https://aws.amazon.com",
        category: "Cloud"
    },
]

export default function CertificatesPage() {
    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState("")

    const categories = ["All", ...Array.from(new Set(CERTIFICATES.map(c => c.category)))]

    // Filter and search logic
    const filteredCertificates = CERTIFICATES.filter(cert => {
        const matchesFilter = filter === "All" || cert.category === filter
        const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) ||
            cert.issuer.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    return (
        <div className="min-h-screen pt-20 pb-20 container-custom">
            <div className="text-center mb-16 animate-fade-in space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="text-primary mr-2">{`//`}</span>
                    CERTIFICATIONS
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Verified credentials and technical achievements.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center bg-card/20 p-6 rounded-sm border border-white/5 backdrop-blur-sm">
                {/* Search */}
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="SEARCH_DB..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-sm py-2 pl-10 pr-4 focus:outline-none focus:border-primary/50 focus:text-glow transition-all font-mono text-sm"
                    />
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1 text-xs font-mono tracking-wider border transition-all ${filter === cat
                                ? "bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(0,243,255,0.3)]"
                                : "bg-transparent border-white/10 text-muted-foreground hover:border-white/30"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {filteredCertificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCertificates.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            imageUrl={cert.imageUrl}
                            credentialUrl={cert.credentialUrl}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-muted-foreground font-mono border border-dashed border-white/10 rounded-sm">
                    NO MATCHING RECORDS FOUND IN DATABASE
                </div>
            )}
        </div>
    )
}
