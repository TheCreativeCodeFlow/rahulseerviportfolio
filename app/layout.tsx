import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rahul Seervi - Portfolio",
  description:
    "B.Tech CSE Student specializing in Big Data Analytics. Passionate about Java, React, and modern web technologies.",
  keywords: "Rahul Seervi, Portfolio, B.Tech CSE, Big Data Analytics, Java, React, MongoDB, Web Developer",
  authors: [{ name: "Rahul Seervi" }],
  openGraph: {
    title: "Rahul Seervi - Portfolio",
    description: "B.Tech CSE Student specializing in Big Data Analytics",
    type: "website",
  },
  generator: 'v0.dev'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        <CustomCursor />
        <main>{children}</main>
      </body>
    </html>
  )
}
