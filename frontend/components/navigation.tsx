"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, History, Info, Puzzle } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import ThemeToggle from "./theme-toggle"
import LanguageToggle from "./language-toggle"
import { Shield } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const { t } = useApp()

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/report", label: t("nav.report"), icon: FileText },
    { href: "/reports-log", label: t("nav.history"), icon: History },
    { href: "/extension", label: t("nav.extension"), icon: Puzzle },
    { href: "/about", label: t("nav.about"), icon: Info },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Shield className="text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-xl font-bold neon-text">
              Clean<span className="text-blue-400">Web</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 hover:bg-blue-500/20 ${
                    pathname === href ? "text-blue-400 bg-blue-500/10" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 border-l border-gray-600 pl-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <div className="flex space-x-2 border-l border-gray-600 pl-2">
              {navItems.map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    pathname === href
                      ? "text-blue-400 bg-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
