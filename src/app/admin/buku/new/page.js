'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewBookPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploadingDoc, setUploadingDoc] = useState(false)
  const [uploadingCover, setUploadingCover] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file_url: '',
    file_type: '',
    cover_url: ''
  })

  const handleFileUpload = async (e, type) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (type === 'doc') setUploadingDoc(true)
    else setUploadingCover(true)

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
        if (type === 'doc') {
          // Deteksi tipe PDF/DOC
          let ext = 'PDF'
          if (data.name.includes('.doc')) ext = 'WORD'
          if (data.name.includes('.xls')) ext = 'EXCEL'
          
          setFormData(prev => ({ ...prev, file_url: data.url, file_type: ext }))
        } else {
          setFormData(prev => ({ ...prev, cover_url: data.url }))
        }
      } else {
        setError('Gagal upload file')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat upload')
    } finally {
      if (type === 'doc') setUploadingDoc(false)
      else setUploadingCover(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/buku')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Gagal menyimpan buku')
      }
    } catch (err) {
      setError('Terjadi kesalahan jaringan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-[#1a3a52] mb-8'>Upload Buku / Dokumen Baru</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow border border-gray-200">
          {error && <div className="bg-red-50 text-red-500 p-4 rounded-md">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Buku / Dokumen</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb]" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat (Opsional)</label>
            <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          </div>

          <div className="border-t border-b py-4 my-4 space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">1. Upload File Utama (PDF/Word) *Wajib</label>
              <input type="file" required={!formData.file_url} accept=".pdf,.doc,.docx" onChange={e => handleFileUpload(e, 'doc')} disabled={uploadingDoc} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              {uploadingDoc && <p className="text-sm text-blue-600 mt-2">Mengunggah file...</p>}
              {formData.file_url && <p className="text-sm text-green-600 mt-2">✓ File siap: {formData.file_url.split('/').pop()}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">2. Upload Gambar Cover (Opsional)</label>
              <input type="file" accept="image/*" onChange={e => handleFileUpload(e, 'cover')} disabled={uploadingCover} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" />
              {uploadingCover && <p className="text-sm text-blue-600 mt-2">Mengunggah cover...</p>}
              {formData.cover_url && (
                <div className="mt-2 flex items-center space-x-4">
                  <img src={formData.cover_url} alt="Cover preview" className="h-20 object-contain border rounded" />
                  <p className="text-sm text-green-600">✓ Cover siap</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link href="/admin/buku" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">Batal</Link>
            <button type="submit" disabled={loading || !formData.file_url} className="px-6 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8] transition disabled:opacity-50">
              {loading ? 'Menyimpan...' : 'Simpan Buku'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
