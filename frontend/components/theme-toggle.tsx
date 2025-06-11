"use client"

import { Sun, Moon } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export default function ThemeToggle() {
  const { theme, setTheme } = useApp()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
      )}
    </button>
  )
}
