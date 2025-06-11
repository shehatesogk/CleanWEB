"use client"

import { useApp } from "@/contexts/app-context"
import { Download, Shield, Zap, Eye, CheckCircle } from "lucide-react"

export default function ExtensionPage() {
  const { t } = useApp()

  const features = [
    {
      icon: Shield,
      title: "Умная Фильтрация Текста",
      description:
        "Скрывает не только слова из вашего черного списка, но и распознает токсичность и оскорбления с помощью искусственного интеллекта.",
      color: "text-blue-400",
    },
    {
      icon: Eye,
      title: "Анализ Изображений в Реальном Времени",
      description:
        "Автоматически находит и размывает нежелательный контент для взрослых (NSFW), защищая вас от неожиданных изображений.",
      color: "text-green-400",
    },
    {
      icon: Zap,
      title: "Полный Контроль и Приватность",
      description:
        "Легко управляйте всеми настройками, ведите личные черные списки и будьте уверены: все данные обрабатываются только на вашем компьютере.",
      color: "text-purple-400",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Shield className="w-16 h-16 text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,0.8)] animate-float" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">{t("extension.hero.title")}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t("extension.hero.description")}</p>

          <div className="flex justify-center">
            <a
                href="/CleanWEB.zip"
                download
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 neon-glow hover:scale-105 group">
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                {t("extension.hero.download")}
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">{t("extension.features.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <feature.icon
                  className={`w-12 h-12 ${feature.color} mb-6 mx-auto group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">{t("extension.how_it_works.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t("extension.how_it_works.step1.title")}</h3>
              <p className="text-gray-300">{t("extension.how_it_works.step1.desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t("extension.how_it_works.step2.title")}</h3>
              <p className="text-gray-300">{t("extension.how_it_works.step2.desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t("extension.how_it_works.step3.title")}</h3>
              <p className="text-gray-300">{t("extension.how_it_works.step3.desc")}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="glass-effect p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 neon-text">{t("extension.stats.title")}</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">65,000+</div>
              <div className="text-gray-300 text-sm">{t("extension.stats.downloads")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.1M+</div>
              <div className="text-gray-300 text-sm">{t("extension.stats.blocked_content")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
              <div className="text-gray-300 text-sm">{t("extension.stats.average_rating")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.2%</div>
              <div className="text-gray-300 text-sm">{t("extension.stats.satisfaction")}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect p-8 rounded-2xl">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t("extension.cta.title")}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t("extension.cta.description")}</p>
          <a
            href="/CleanWEB.zip"
            download
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition-all duration-300 neon-glow hover:scale-105">
            <Download className="mr-2 w-5 h-5" />
            {t("extension.cta.download_now")}
          </a>
        </div>
      </div>
    </div>
  )
}
