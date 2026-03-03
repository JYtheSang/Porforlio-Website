import type { Metadata } from "next"
import { NavbarClient } from "@/components/navbar-client"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jie Yang — Design Portfolio",
  description: "Product Design · UX Strategy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className="antialiased">
        <NavbarClient />
        {children}
      </body>
    </html>
  )
}
