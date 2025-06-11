"use client"

import { Globe } from "lucide-react"
import { useApp } from "@/contexts/app-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useApp()

  return (
    <button
      onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
      className="flex items-center space-x-1 p-2 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
      <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors uppercase">
        {language}
      </span>
    </button>
  )
}
