"use client"

import Link from "next/link"
import { useApp } from "@/contexts/app-context"
import { Heart, Mail, Github, Instagram, Shield, Users } from "lucide-react"
import Image from "next/image";

export default function AboutPage() {
  const { t } = useApp()

  const team = [
    {
      name: "Аман Нурай",
      role: "Основатель & CEO",
      description: "Backend разработчик",
      avatar: "/team/beavis.jpg",
    },
    {
      name: "Чен Максим",
      role: "Главный модератор",
      description: "Frontend разработчик",
      avatar: "/team/butthead.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6 drop-shadow-[0_0_14px_rgba(96,165,250,0.8)] animate-float" />
          <h1 className="text-4xl font-bold mb-4 neon-text">{t("about.title")}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        {/* Mission */}
        <div className="glass-effect p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center neon-text">{t("about.mission.title")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{t("about.mission.protection.title")}</h3>
              <p className="text-gray-300 mb-4">{t("about.mission.protection.desc")}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{t("about.mission.community.title")}</h3>
              <p className="text-gray-300 mb-4">{t("about.mission.community.desc")}</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">
            {t("about.team.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-effect p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    priority={index < 2}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="glass-effect p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">{t("about.achievements.title")}</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">1,247</div>
              <div className="text-gray-300 text-sm">{t("home.stats.blocked")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">15,892</div>
              <div className="text-gray-300 text-sm">{t("home.stats.protected")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">98.7%</div>
              <div className="text-gray-300 text-sm">{t("home.stats.accuracy")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">{t("about.achievements.monitoring")}</div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="glass-effect p-8 rounded-2xl mb-12">
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t("about.support.title")}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t("about.support.desc")}</p>
            <div className="flex justify-center">
              <Link
                href="/support"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105"
              >
                {t("about.support.donate")}
              </Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">{t("about.contact.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <a
              href="mailto:shehatesogk@gmail.com"
              className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300">shehatesogk@gmail.com</span>
            </a>
            <a
              href="https://github.com/shehatesogk"
              className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-gray-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/shehatesogk"
              className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group"
            >
              <Instagram className="w-8 h-8 text-pink-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
