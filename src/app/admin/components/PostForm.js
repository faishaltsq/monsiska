'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PostForm({ initialData = null, isEdit = false }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    category: initialData?.category || '',
    author: initialData?.author || 'Admin',
    read_time: initialData?.read_time || '5 min',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    published: initialData?.published ?? true
  })

  // Auto-generate slug dari title kalau baru ngetik (hanya untuk create)
  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData(prev => {
      const newData = { ...prev, title }
      if (!isEdit && !prev.slug_manually_edited) {
        newData.slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      }
      return newData
    })
  }

  const handleSlugChange = (e) => {
    setFormData(prev => ({
      ...prev,
      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, ''),
      slug_manually_edited: true
    }))
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    const uploadData = new FormData()
    uploadData.append('file', file)

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadData
      })

      if (res.ok) {
        const data = await res.json()
        const isImage = data.type.startsWith('image/')
        // Format markdown: image pake ![], file PDF/dokumen pake []
        const markdownTag = isImage 
          ? `\n\n![${data.name}](${data.url})\n\n`
          : `\n\n[Download File: ${data.name}](${data.url})\n\n`
        
        setFormData(prev => ({
          ...prev,
          content: prev.content + markdownTag
        }))
        
        // Reset input file
        e.target.value = ''
      } else {
        const data = await res.json()
        setError(data.error || 'Gagal upload file')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat upload')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const url = isEdit ? `/api/admin/posts/${initialData.id}` : '/api/admin/posts'
      const method = isEdit ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/blog')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Gagal menyimpan artikel')
      }
    } catch (err) {
      setError('Terjadi kesalahan jaringan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow border border-gray-200">
      {error && <div className="bg-red-50 text-red-500 p-4 rounded-md">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={formData.title}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb] bg-gray-50"
            value={formData.slug}
            onChange={handleSlugChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value})}
            placeholder="Misal: Metodologi"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={formData.author}
            onChange={e => setFormData({...formData, author: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Waktu Baca</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={formData.read_time}
            onChange={e => setFormData({...formData, read_time: e.target.value})}
            placeholder="Misal: 5 min"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ringkasan (Excerpt)</label>
          <textarea
            required
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb]"
            value={formData.excerpt}
            onChange={e => setFormData({...formData, excerpt: e.target.value})}
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <div className="flex justify-between items-end mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Konten (Markdown Support: ## Judul, - List, Tabel dll) 
              <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" className="text-blue-500 ml-2 hover:underline text-xs">(Panduan Markdown)</a>
            </label>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                disabled={uploading}
                accept="image/*,.pdf,.doc,.docx"
              />
              <label
                htmlFor="file-upload"
                className={`cursor-pointer inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {uploading ? 'Mengunggah...' : '+ Sisipkan Gambar/PDF'}
              </label>
            </div>
          </div>
          <textarea
            required
            rows="15"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] focus:border-[#2563eb] font-mono text-sm"
            value={formData.content}
            onChange={e => setFormData({...formData, content: e.target.value})}
          ></textarea>
        </div>

        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            id="published"
            className="h-4 w-4 text-[#2563eb] focus:ring-[#2563eb] border-gray-300 rounded"
            checked={formData.published}
            onChange={e => setFormData({...formData, published: e.target.checked})}
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
            Terbitkan langsung (Published)
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <Link href="/admin/blog" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
          Batal
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8] transition disabled:opacity-50"
        >
          {loading ? 'Menyimpan...' : 'Simpan Artikel'}
        </button>
      </div>
    </form>
  )
}
