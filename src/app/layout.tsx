import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { NavbarClient } from "@/components/navbar-client"

import "./globals.css"

export const metadata: Metadata = {
  title: "Jie Yang",
  description: "Product Design · UX Strategy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className="antialiased">
        <NavbarClient />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
