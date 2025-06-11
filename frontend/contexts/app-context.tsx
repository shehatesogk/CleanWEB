"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "ru" | "en"
type Theme = "dark" | "light"

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  t: (key: string) => string
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const translations = {
  ru: {
    "nav.home": "Главная",
    "nav.report": "Репорт",
    "nav.history": "История",
    "nav.extension": "Расширение",
    "nav.about": "О нас",

    "home.hero.title": "CleanWeb",
    "home.hero.subtitle":
      "Защищаем интернет от вредоносных сайтов и создаем безопасное пространство для всех пользователей",
    "home.hero.report_button": "Сообщить о сайте",
    "home.hero.learn_more": "Узнать больше",
    "home.mission.title": "Наша миссия",
    "home.features.protection.title": "Защита пользователей",
    "home.features.protection.desc":
      "Блокируем доступ к вредоносным сайтам и защищаем личные данные пользователей от мошенников",
    "home.features.moderation.title": "Быстрая модерация",
    "home.features.moderation.desc": "Оперативно обрабатываем жалобы и принимаем меры по блокировке опасных ресурсов",
    "home.features.community.title": "Сообщество",
    "home.features.community.desc": "Работаем вместе с пользователями для создания безопасного интернет-пространства",
    "home.stats.blocked": "Заблокированных сайтов",
    "home.stats.protected": "Защищенных пользователей",
    "home.stats.accuracy": "Точность модерации",

    "extension.hero.title": "CleanWeb Расширение",
    "extension.hero.description":
      "CleanWEB — это умный фильтр для вашего браузера, который автоматически скрывает нежелательные слова и изображения, создавая более чистое и безопасное онлайн-пространство.",
    "extension.hero.download": "Скачать расширение",
    "extension.hero.learn_more": "Узнать больше",
    "extension.features.title": "Возможности расширения",
    "extension.features.filter.title": "Умная фильтрация",
    "extension.features.filter.desc":
      "Автоматически скрывает нежелательный контент, включая слова, изображения и рекламу",
    "extension.features.privacy.title": "Защита приватности",
    "extension.features.privacy.desc": "Блокирует трекеры и защищает ваши личные данные от сбора",
    "extension.features.speed.title": "Быстрая работа",
    "extension.features.speed.desc": "Ускоряет загрузку страниц, блокируя ненужные элементы",
    "extension.browsers.title": "Поддерживаемые браузеры",
    "extension.browsers.users": "Пользователей",
    "extension.browsers.rating": "Рейтинг",
    "extension.browsers.download": "Скачать для",
    "extension.how_it_works.title": "Как это работает",
    "extension.how_it_works.step1.title": "Установите расширение",
    "extension.how_it_works.step1.desc": "Скачайте и установите CleanWeb из магазина вашего браузера",
    "extension.how_it_works.step2.title": "Настройте фильтры",
    "extension.how_it_works.step2.desc": "Выберите категории контента, которые хотите скрыть",
    "extension.how_it_works.step3.title": "Наслаждайтесь чистым интернетом",
    "extension.how_it_works.step3.desc": "Расширение автоматически фильтрует контент на всех сайтах",
    "extension.stats.title": "Статистика расширения",
    "extension.stats.downloads": "Скачиваний",
    "extension.stats.blocked_content": "Заблокировано контента",
    "extension.stats.average_rating": "Средний рейтинг",
    "extension.stats.satisfaction": "Довольных пользователей",
    "extension.cta.title": "Готовы к чистому интернету?",
    "extension.cta.description":
      "Присоединяйтесь к тысячам пользователей, которые уже наслаждаются безопасным и чистым интернетом",
    "extension.cta.download_now": "Скачать сейчас",

    "report.title": "Сообщить о сайте",
    "report.subtitle": "Помогите нам сделать интернет безопаснее. Сообщите о подозрительном сайте.",
    "report.form.url": "URL сайта",
    "report.form.category": "Категория жалобы",
    "report.form.category.placeholder": "Выберите категорию",
    "report.form.description": "Описание проблемы",
    "report.form.description.placeholder": "Опишите, что именно вас беспокоит на этом сайте...",
    "report.form.images": "Скриншоты или фотографии",
    "report.form.images.optional": "необязательно",
    "report.form.images.drag_drop": "Перетащите изображения сюда или нажмите для выбора",
    "report.form.images.formats": "PNG, JPG, GIF до 5MB",
    "report.form.images.max_size": "Максимум 3 файла",
    "report.form.images.uploaded": "Загружено",
    "report.form.images.max_reached": "Достигнуто максимальное количество файлов (3)",
    "report.form.submit": "Отправить жалобу",
    "report.success.title": "Жалоба отправлена!",
    "report.success.message": "Спасибо за вашу бдительность. Мы рассмотрим жалобу в течение 24 часов.",
    "report.categories.malware": "Вредоносное ПО",
    "report.categories.phishing": "Фишинг",
    "report.categories.nsfw": "NSFW контент",
    "report.categories.spam": "Спам/Реклама",
    "report.categories.fraud": "Мошенничество",
    "report.categories.other": "Другое",

    "reports.title": "История жалоб",
    "reports.subtitle": "Отслеживайте статус обработки жалоб и заблокированные сайты",
    "reports.table.site": "Сайт",
    "reports.table.category": "Категория",
    "reports.table.date": "Дата",
    "reports.table.status": "Статус",
    "reports.table.actions": "Действия",
    "reports.status.blocked": "Заблокирован",
    "reports.status.reviewing": "На рассмотрении",
    "reports.status.rejected": "Отклонено",
    "reports.stats.blocked": "Заблокировано",
    "reports.stats.reviewing": "На рассмотрении",
    "reports.stats.rejected": "Отклонено",

    "about.title": "О проекте CleanWeb",
    "about.subtitle":
      "Мы создаем безопасное интернет-пространство, защищая пользователей от вредоносных сайтов и онлайн-угроз",
    "about.mission.title": "Наша миссия",
    "about.mission.protection.title": "Защита пользователей",
    "about.mission.protection.desc":
      "Мы работаем 24/7, чтобы выявлять и блокировать вредоносные сайты, фишинговые страницы и другие онлайн-угрозы. Наша цель — создать безопасную среду для всех пользователей интернета, особенно для детей и пожилых людей.",
    "about.mission.community.title": "Сообщество",
    "about.mission.community.desc":
      "CleanWeb — это не просто сервис, это сообщество людей, которые заботятся о безопасности в интернете. Каждый пользователь может внести свой вклад, сообщив о подозрительном сайте или поддержав наш проект.",
    "about.team.title": "Наша команда",
    "about.achievements.title": "Наши достижения",
    "about.achievements.monitoring": "Мониторинг угроз",
    "about.support.title": "Поддержите проект",
    "about.support.desc":
      "CleanWeb — это некоммерческий проект. Ваша поддержка помогает нам развиваться и защищать еще больше пользователей.",
    "about.support.donate": "Поддержать проект",
    "about.contact.title": "Связаться с нами",

    "support.title": "Поддержать проект",
    "support.subtitle":
      "Ваша поддержка помогает нам развивать проект и делать интернет безопаснее для всех пользователей",

    "common.required": "*",
    "common.loading": "Загрузка...",
  },
  en: {
    "nav.home": "Home",
    "nav.report": "Report",
    "nav.history": "History",
    "nav.extension": "Extension",
    "nav.about": "About",

    "home.hero.title": "CleanWeb",
    "home.hero.subtitle": "Protecting the internet from malicious sites and creating a safe space for all users",
    "home.hero.report_button": "Report a Site",
    "home.hero.learn_more": "Learn More",
    "home.mission.title": "Our Mission",
    "home.features.protection.title": "User Protection",
    "home.features.protection.desc":
      "We block access to malicious sites and protect users' personal data from scammers",
    "home.features.moderation.title": "Fast Moderation",
    "home.features.moderation.desc": "We quickly process complaints and take action to block dangerous resources",
    "home.features.community.title": "Community",
    "home.features.community.desc": "Working together with users to create a safe internet space",
    "home.stats.blocked": "Blocked Sites",
    "home.stats.protected": "Protected Users",
    "home.stats.accuracy": "Moderation Accuracy",

    "extension.hero.title": "CleanWeb Extension",
    "extension.hero.description":
      "CleanWEB is a smart filter for your browser that automatically hides unwanted words and images, creating a cleaner and safer online space.",
    "extension.hero.download": "Download Extension",
    "extension.hero.learn_more": "Learn More",
    "extension.features.title": "Extension Features",
    "extension.features.filter.title": "Smart Filtering",
    "extension.features.filter.desc":
      "Automatically hides unwanted content including words, images, and advertisements",
    "extension.features.privacy.title": "Privacy Protection",
    "extension.features.privacy.desc": "Blocks trackers and protects your personal data from collection",
    "extension.features.speed.title": "Fast Performance",
    "extension.features.speed.desc": "Speeds up page loading by blocking unnecessary elements",
    "extension.browsers.title": "Supported Browsers",
    "extension.browsers.users": "Users",
    "extension.browsers.rating": "Rating",
    "extension.browsers.download": "Download for",
    "extension.how_it_works.title": "How It Works",
    "extension.how_it_works.step1.title": "Install Extension",
    "extension.how_it_works.step1.desc": "Download and install CleanWeb from your browser's store",
    "extension.how_it_works.step2.title": "Configure Filters",
    "extension.how_it_works.step2.desc": "Choose content categories you want to hide",
    "extension.how_it_works.step3.title": "Enjoy Clean Internet",
    "extension.how_it_works.step3.desc": "Extension automatically filters content on all websites",
    "extension.stats.title": "Extension Statistics",
    "extension.stats.downloads": "Downloads",
    "extension.stats.blocked_content": "Blocked Content",
    "extension.stats.average_rating": "Average Rating",
    "extension.stats.satisfaction": "User Satisfaction",
    "extension.cta.title": "Ready for a Clean Internet?",
    "extension.cta.description": "Join thousands of users who already enjoy a safe and clean internet experience",
    "extension.cta.download_now": "Download Now",

    "report.title": "Report a Site",
    "report.subtitle": "Help us make the internet safer. Report a suspicious site.",
    "report.form.url": "Site URL",
    "report.form.category": "Report Category",
    "report.form.category.placeholder": "Select category",
    "report.form.description": "Problem Description",
    "report.form.description.placeholder": "Describe what concerns you about this site...",
    "report.form.images": "Screenshots or Photos",
    "report.form.images.optional": "optional",
    "report.form.images.drag_drop": "Drag images here or click to select",
    "report.form.images.formats": "PNG, JPG, GIF up to 5MB",
    "report.form.images.max_size": "Maximum 3 files",
    "report.form.images.uploaded": "Uploaded",
    "report.form.images.max_reached": "Maximum number of files reached (3)",
    "report.form.submit": "Submit Report",
    "report.success.title": "Report Submitted!",
    "report.success.message": "Thank you for your vigilance. We will review the report within 24 hours.",
    "report.categories.malware": "Malware",
    "report.categories.phishing": "Phishing",
    "report.categories.nsfw": "NSFW Content",
    "report.categories.spam": "Spam/Ads",
    "report.categories.fraud": "Fraud",
    "report.categories.other": "Other",

    "reports.title": "Reports History",
    "reports.subtitle": "Track the status of report processing and blocked sites",
    "reports.table.site": "Site",
    "reports.table.category": "Category",
    "reports.table.date": "Date",
    "reports.table.status": "Status",
    "reports.table.actions": "Actions",
    "reports.status.blocked": "Blocked",
    "reports.status.reviewing": "Under Review",
    "reports.status.rejected": "Rejected",
    "reports.stats.blocked": "Blocked",
    "reports.stats.reviewing": "Under Review",
    "reports.stats.rejected": "Rejected",

    "about.title": "About CleanWeb Project",
    "about.subtitle": "We create a safe internet space, protecting users from malicious sites and online threats",
    "about.mission.title": "Our Mission",
    "about.mission.protection.title": "User Protection",
    "about.mission.protection.desc":
      "We work 24/7 to identify and block malicious sites, phishing pages and other online threats. Our goal is to create a safe environment for all internet users, especially children and elderly people.",
    "about.mission.community.title": "Community",
    "about.mission.community.desc":
      "CleanWeb is not just a service, it's a community of people who care about internet safety. Every user can contribute by reporting a suspicious site or supporting our project.",
    "about.team.title": "Our Team",
    "about.achievements.title": "Our Achievements",
    "about.achievements.monitoring": "Threat Monitoring",
    "about.support.title": "Support the Project",
    "about.support.desc": "CleanWeb is a non-profit project. Your support helps us grow and protect even more users.",
    "about.support.donate": "Support Project",
    "about.contact.title": "Contact Us",

    "support.title": "Support the Project",
    "support.subtitle": "Your support helps us develop the project and make the internet safer for all users",

    "common.required": "*",
    "common.loading": "Loading...",
  },
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("cleanweb-language") as Language
    const savedTheme = localStorage.getItem("cleanweb-theme") as Theme

    if (savedLanguage) setLanguage(savedLanguage)
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("cleanweb-language", language)
  }, [language])

  useEffect(() => {
    localStorage.setItem("cleanweb-theme", theme)
    document.documentElement.classList.toggle("light", theme === "light")
  }, [theme])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
