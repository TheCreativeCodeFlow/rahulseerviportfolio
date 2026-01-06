"use client"

import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"

interface CertificateCardProps {
    title: string
    issuer: string
    date: string
    imageUrl?: string
    credentialUrl?: string
}

const CertificateCard = ({ title, issuer, date, imageUrl, credentialUrl }: CertificateCardProps) => {
    return (
        <div className="group relative tech-border bg-card/40 backdrop-blur-md p-1 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]">
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="w-full h-48 relative bg-black/50 overflow-hidden mb-4 rounded-sm border-b border-white/5">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <Award className="w-16 h-16 opacity-20" />
                    </div>
                )}

                {/* Scan line effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent translate-y-[-100%] group-hover:animate-scan-line pointer-events-none"></div>
            </div>

            <div className="p-4 space-y-3 relative z-10">
                <div>
                    <h3 className="text-xl font-bold text-primary truncate group-hover:text-glow transition-all">{title}</h3>
                    <p className="text-sm text-secondary font-mono">{issuer}</p>
                </div>

                <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-4 pt-4 border-t border-white/5">
                    <span>{date}</span>
                    {credentialUrl && (
                        <a
                            href={credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:text-white transition-colors"
                        >
                            VERIFY <ExternalLink className="w-3 h-3" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CertificateCard
