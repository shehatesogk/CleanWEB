"use client"

import type React from "react"

import { useState } from "react"
import { useApp } from "@/contexts/app-context"
import { Heart, CreditCard, DollarSign, Coffee, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { Shield } from "lucide-react"

export default function SupportPage() {
  const { t } = useApp()
  const [amount, setAmount] = useState<number | null>(10)
  const [customAmount, setCustomAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Симуляция отправки
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleAmountClick = (value: number) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount(null)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-effect p-8 rounded-2xl text-center max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold mb-4 text-green-400">Спасибо за поддержку!</h2>
          <p className="text-gray-300 mb-6">
            Ваше пожертвование поможет нам сделать интернет безопаснее для всех пользователей.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300"
          >
            Вернуться на главную
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-6 drop-shadow-[0_0_14px_rgba(255,0,0,0.8)] animate-pulse" />
          <h1 className="text-4xl font-bold mb-4 neon-text">Поддержать проект</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ваша поддержка помогает нам развивать проект и делать интернет безопаснее для всех пользователей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Почему стоит поддержать CleanWeb?</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Защита пользователей</h3>
                  <p className="text-gray-300 text-sm">
                    Мы блокируем тысячи вредоносных сайтов ежемесячно, защищая пользователей от мошенников
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Развитие технологий</h3>
                  <p className="text-gray-300 text-sm">
                    Мы постоянно совершенствуем наши алгоритмы обнаружения угроз и системы модерации
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Coffee className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Поддержка команды</h3>
                  <p className="text-gray-300 text-sm">
                    Наша небольшая команда работает 24/7, чтобы обрабатывать жалобы и блокировать угрозы
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Сделать пожертвование</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Выберите сумму</label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[5, 10, 25].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleAmountClick(value)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        amount === value ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gray-400 absolute ml-3" />
                  <input
                    type="number"
                    placeholder="Другая сумма"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя (необязательно)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email (для получения благодарности)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || (!amount && !customAmount)}
                className="w-full flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Поддержать проект
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Другие способы поддержки</h2>
          <p className="text-gray-300 mb-6">
            Вы также можете поддержать нас, сообщая о подозрительных сайтах или рассказывая о нашем проекте друзьям и
            коллегам
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 glass-effect hover:bg-white/10 rounded-lg font-semibold transition-all duration-300">
              Поделиться
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
