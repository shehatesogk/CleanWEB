'use client';
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import { Shield,Zap,Users } from "lucide-react"

function HomePage() {
  const { t } = useApp()

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-float mb-8">
            <Shield className="w-24 h-24 text-blue-400 mx-auto mb-6 drop-shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">{t("home.hero.title")}</h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{t("home.hero.subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/report"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 neon-glow hover:scale-105 group"
            >
              {t("home.hero.report_button")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 glass-effect hover:bg-white/10 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t("home.hero.learn_more")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text">{t("home.mission.title")}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <Shield className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t("home.features.protection.title")}</h3>
              <p className="text-gray-300">{t("home.features.protection.desc")}</p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t("home.features.moderation.title")}</h3>
              <p className="text-gray-300">{t("home.features.moderation.desc")}</p>
            </div>

            <div className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <Users className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{t("home.features.community.title")}</h3>
              <p className="text-gray-300">{t("home.features.community.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2 neon-text">1,247</div>
              <div className="text-gray-300">{t("home.stats.blocked")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2 neon-text">15,892</div>
              <div className="text-gray-300">{t("home.stats.protected")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2 neon-text">98.7%</div>
              <div className="text-gray-300">{t("home.stats.accuracy")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function HomePageWrapper() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
