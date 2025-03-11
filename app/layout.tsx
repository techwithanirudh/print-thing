import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"

import "@/styles/globals.css"

import { Header } from "@/components/header"
import type { ReactNode } from "react"
import { Providers } from "./providers"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Better Auth Next.js Starter",
    description:
        "Better Auth Next.js App Router Starter with Postgres, Drizzle, shadcn/ui and Tanstack Query"
}

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-svh`}
            >
                <Providers>
                    <Header />

                    <main className="p-4 flex flex-col grow">{children}</main>

                    <Toaster />
                </Providers>
            </body>
        </html>
    )
}
