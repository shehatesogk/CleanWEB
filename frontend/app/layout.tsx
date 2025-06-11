import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { AppProvider } from "@/contexts/app-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CleanWeb - Защита от вредоносных сайтов",
  description: "Модерация и защита пользователей от вредоносных веб-ресурсов",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <AppProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
        </AppProvider>
      </body>
    </html>
  )
}
