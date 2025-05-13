import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rebays",
  description:
    "Rebays delivers innovative software solutions and seamless system integrations to power your business forward.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200">{children}</body>
    </html>
  )
}
