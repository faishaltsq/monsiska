'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BookForm({ initialData = null, isEdit = false }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploadingDoc, setUploadingDoc] = useState(false)
  const [uploadingCover, setUploadingCover] = useState(false)
  const [error, setError] = useState('')
  const [existingFolders, setExistingFolders] = useState([])
  const [isNewFolder, setIsNewFolder] = useState(false)
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    file_url: initialData?.file_url || '',
    file_type: initialData?.file_type || '',
    cover_url: initialData?.cover_url || '',
    folder_name: initialData?.folder_name || ''
  })

  // Fetch existing folders untuk dropdown
  useEffect(() => {
    fetch('/api/books/folders')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setExistingFolders(data)
          // Set default folder if not editing and there are folders
          if (!isEdit && data.length > 0 && !formData.folder_name) {
            setFormData(prev => ({ ...prev, folder_name: data[0].folder_name }))
          } else if (!isEdit && data.length === 0) {
            setIsNewFolder(true)
          }
        }
      })
      .catch(err => console.error(err))
  }, [isEdit])

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
          let ext = 'PDF'
          if (data.name.includes('.doc')) ext = 'WORD'
          if (data.name.includes('.xls')) ext = 'EXCEL'
          
          setFormData(prev => ({ ...prev, file_url: data.url, file_type: ext }))
          // Jika belum ada judul, otomatis pakai nama file
          if (!formData.title) {
            setFormData(prev => ({ ...prev, title: data.name.replace(/\.[^/.]+$/, "") }))
          }
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
    if (!isEdit && !formData.file_url) {
      setError('File utama (PDF/Word) wajib diupload')
      return
    }

    setLoading(true)
    setError('')

    try {
      const url = isEdit ? `/api/admin/books/${initialData.id}` : '/api/admin/books'
      const method = isEdit ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow border border-gray-200">
      {error && <div className="bg-red-50 text-red-500 p-4 rounded-md">{error}</div>}

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul Dokumen</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb]" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Direktori / Folder Penyimpanan</label>
          <div className="flex items-center space-x-4 mb-2">
            <label className="inline-flex items-center">
              <input type="radio" checked={!isNewFolder && existingFolders.length > 0} disabled={existingFolders.length === 0} onChange={() => { setIsNewFolder(false); setFormData({...formData, folder_name: existingFolders[0]?.folder_name || ''}) }} className="text-blue-600 focus:ring-blue-500 h-4 w-4" />
              <span className="ml-2 text-sm text-gray-700">Pilih Folder yang Ada</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" checked={isNewFolder || existingFolders.length === 0} onChange={() => { setIsNewFolder(true); setFormData({...formData, folder_name: ''}) }} className="text-blue-600 focus:ring-blue-500 h-4 w-4" />
              <span className="ml-2 text-sm text-gray-700">+ Bikin Folder Baru</span>
            </label>
          </div>
          
          {!isNewFolder && existingFolders.length > 0 ? (
            <select 
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] bg-white"
              value={formData.folder_name}
              onChange={e => setFormData({...formData, folder_name: e.target.value})}
            >
              {existingFolders.map(f => (
                <option key={f.folder_slug} value={f.folder_name}>{f.folder_name}</option>
              ))}
            </select>
          ) : (
            <input 
              type="text" 
              required 
              placeholder="Ketik nama folder baru..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb]" 
              value={formData.folder_name} 
              onChange={e => setFormData({...formData, folder_name: e.target.value})} 
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat (Opsional)</label>
          <textarea rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
        </div>

        <div className="border-t border-b py-4 my-4 space-y-6 bg-gray-50 -mx-8 px-8">
          <div>
            <label className="block text-sm font-bold text-[#1a3a52] mb-2">1. Upload File Utama (PDF/Word)</label>
            {isEdit && formData.file_url ? (
              <div className="mb-2 p-3 bg-white border border-gray-200 rounded flex items-center justify-between">
                <span className="text-sm text-gray-600 truncate mr-4">File saat ini terhubung.</span>
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded">{formData.file_type}</span>
              </div>
            ) : null}
            {!isEdit && (
              <>
                <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" onChange={e => handleFileUpload(e, 'doc')} disabled={uploadingDoc} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition" />
                {uploadingDoc && <p className="text-sm text-blue-600 mt-2">Mengunggah file ke Vercel Blob...</p>}
                {formData.file_url && <p className="text-sm text-green-600 mt-2">✓ File siap divalidasi sistem.</p>}
              </>
            )}
            {isEdit && <p className="text-xs text-orange-600 mt-2">*(Ganti file PDF belum didukung di mode Edit. Silakan hapus dan upload ulang jika file salah).*</p>}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <label className="block text-sm font-bold text-[#1a3a52] mb-2">2. Upload Gambar Cover (Opsional)</label>
            <input type="file" accept="image/*" onChange={e => handleFileUpload(e, 'cover')} disabled={uploadingCover} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 transition" />
            {uploadingCover && <p className="text-sm text-blue-600 mt-2">Mengunggah cover...</p>}
            {formData.cover_url && (
              <div className="mt-4 flex items-center space-x-4 bg-white p-3 border rounded-md inline-block">
                <img src={formData.cover_url} alt="Cover preview" className="h-24 w-16 object-cover border rounded shadow-sm" />
                <div>
                  <p className="text-sm font-semibold text-green-600">✓ Cover Aktif</p>
                  <button type="button" onClick={() => setFormData({...formData, cover_url: ''})} className="text-xs text-red-500 hover:underline mt-1">Hapus Cover</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Link href="/admin/buku" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">Batal</Link>
        <button type="submit" disabled={loading || (!isEdit && !formData.file_url)} className="px-6 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8] transition disabled:opacity-50">
          {loading ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Upload Buku')}
        </button>
      </div>
    </form>
  )
}
