"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle, Upload, X } from "lucide-react"
import { useApp } from "@/contexts/app-context"
import { AlertTriangle } from "lucide-react"

export default function ReportPage() {
  const { t } = useApp()
  const [formData, setFormData] = useState({
    url: "",
    category: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)

  const categories = [
    { value: "malware", label: t("report.categories.malware") },
    { value: "phishing", label: t("report.categories.phishing") },
    { value: "nsfw", label: t("report.categories.nsfw") },
    { value: "spam", label: t("report.categories.spam") },
    { value: "fraud", label: t("report.categories.fraud") },
    { value: "other", label: t("report.categories.other") },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data = new FormData()
    data.append("url", formData.url)
    data.append("reported_by", "anonymous")
    data.append("category", formData.category)
    data.append("description", formData.description)
    uploadedImages.forEach((file) => data.append("images", file))

    try {
      const response = await fetch("http://localhost:8000/api/reports/", {
        method: "POST",
        body: data,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ url: "", category: "", description: "" })
        setUploadedImages([])
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        alert("Ошибка при отправке жалобы. Проверь подключение к серверу.")
      }
    } catch (error) {
      console.error("Ошибка:", error)
      alert("Сервер не отвечает.")
    }

    setIsLoading(false)
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return
    const validFiles = Array.from(files).filter((file) => {
      const isValidType = file.type.startsWith("image/")
      const isValidSize = file.size <= 5 * 1024 * 1024
      return isValidType && isValidSize
    })
    setUploadedImages((prev) => [...prev, ...validFiles].slice(0, 3))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    else if (e.type === "dragleave") setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const getImagePreview = (file: File) => {
    return URL.createObjectURL(file)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-effect p-8 rounded-2xl text-center max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-2xl font-bold mb-4 text-green-400">{t("report.success.title")}</h2>
          <p className="text-gray-300">{t("report.success.message")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6 drop-shadow-[0_0_14px_rgba(255,0,0,0.8)]" />
          <h1 className="text-4xl font-bold mb-4 neon-text">{t("report.title")}</h1>
          <p className="text-gray-300 text-lg">{t("report.subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium mb-2">
              {t("report.form.url")} {t("common.required")}
            </label>
            <input
              type="url"
              id="url"
              required
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              {t("report.form.category")} {t("common.required")}
            </label>
            <select
              id="category"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">{t("report.form.category.placeholder")}</option>
              {categories.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              {t("report.form.description")}
            </label>
            <textarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder={t("report.form.description.placeholder")}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-2">
              {t("report.form.images")}{" "}
              <span className="text-gray-400 text-xs">({t("report.form.images.optional")})</span>
            </label>

            <div
              className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                dragActive
                  ? "border-blue-400 bg-blue-400/10"
                  : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploadedImages.length >= 3}
              />

              <div className="flex flex-col items-center">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-300 mb-1">
                  {uploadedImages.length >= 3
                    ? t("report.form.images.max_reached")
                    : t("report.form.images.drag_drop")}
                </p>
                <p className="text-gray-500 text-xs">
                  {t("report.form.images.formats")} • {t("report.form.images.max_size")}
                </p>
              </div>
            </div>

            {uploadedImages.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-3">
                  {t("report.form.images.uploaded")}: {uploadedImages.length}/3
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
                        <img
                          src={getImagePreview(file) || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3 text-white" />
                      </button>
                      <div className="absolute bottom-1 left-1 right-1 bg-black/50 rounded px-1 py-0.5">
                        <p className="text-xs text-white truncate">{file.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t("report.form.submit")}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
