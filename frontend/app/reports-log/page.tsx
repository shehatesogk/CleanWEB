"use client"

import { useEffect, useState } from "react"
import { useApp } from "@/contexts/app-context"
import { Clock, ExternalLink, AlertTriangle, XCircle, Shield } from "lucide-react"

type Report = {
  id: number
  url: string
  category: string
  description: string
  reported_by: string
  created_at: string
  is_resolved: boolean
  image: string | null
}

export default function ReportsLogPage() {
  const { t } = useApp()
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/api/reports/")
      .then((res) => res.json())
      .then((data) => {
        setReports(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Ошибка загрузки репортов:", error)
        setLoading(false)
      })
  }, [])

  const getStatus = (is_resolved: boolean) => (is_resolved ? "blocked" : "reviewing")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "blocked":
        return <Shield className="w-5 h-5 text-red-400" />
      case "reviewing":
        return <Clock className="w-5 h-5 text-yellow-400" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-gray-400" />
      default:
        return <AlertTriangle className="w-5 h-5 text-blue-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "blocked":
        return t("reports.status.blocked")
      case "reviewing":
        return t("reports.status.reviewing")
      case "rejected":
        return t("reports.status.rejected")
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "blocked":
        return "text-red-400 bg-red-400/10"
      case "reviewing":
        return "text-yellow-400 bg-yellow-400/10"
      case "rejected":
        return "text-gray-400 bg-gray-400/10"
      default:
        return "text-blue-400 bg-blue-400/10"
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6 drop-shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
          <h1 className="text-4xl font-bold mb-4 neon-text">{t("reports.title")}</h1>
          <p className="text-gray-300 text-lg">{t("reports.subtitle")}</p>
        </div>

        {loading ? (
          <p className="text-center text-white">Загрузка...</p>
        ) : (
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {t("reports.table.site")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {t("reports.table.category")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {t("reports.table.date")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {t("reports.table.status")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      {t("reports.table.actions")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {reports.map((report) => {
                    const status = getStatus(report.is_resolved)
                    return (
                      <tr key={report.id} className="hover:bg-gray-800/30 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-white truncate max-w-xs">{report.url}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-400/10 text-blue-400">
                            {report.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          {new Date(report.created_at).toLocaleDateString("ru-RU")}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              status
                            )}`}
                          >
                            {getStatusIcon(status)}
                            <span className="ml-2">{getStatusText(status)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
