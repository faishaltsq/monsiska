'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BulkUploadPage() {
  const router = useRouter()
  const fileInputRef = useRef(null)
  const [existingFolders, setExistingFolders] = useState([])
  const [targetFolder, setTargetFolder] = useState('')
  const [isNewFolder, setIsNewFolder] = useState(false)
  
  const [files, setFiles] = useState([]) // { file, status: 'pending'|'uploading'|'success'|'error', progress: 0 }
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    fetch('/api/books/folders')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setExistingFolders(data)
          if (data.length > 0) setTargetFolder(data[0].folder_name)
          else setIsNewFolder(true)
        }
      })
      .catch(err => console.error(err))
  }, [])

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files)
    const validFiles = selectedFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      status: 'pending',
      errorMsg: ''
    }))
    setFiles(prev => [...prev, ...validFiles])
  }

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id))
  }

  const startBulkUpload = async () => {
    if (!targetFolder) return alert('Nama folder tujuan belum diisi')
    if (files.filter(f => f.status === 'pending').length === 0) return

    setIsUploading(true)

    const pendingFiles = files.filter(f => f.status === 'pending')
    
    // Upload sequentially to avoid overwhelming the server/Vercel Blob limits
    for (const item of pendingFiles) {
      // Update UI to uploading
      setFiles(prev => prev.map(f => f.id === item.id ? { ...f, status: 'uploading' } : f))
      
      try {
        const uploadData = new FormData()
        uploadData.append('file', item.file)

        // 1. Upload ke Vercel Blob
        const resBlob = await fetch('/api/admin/upload', {
          method: 'POST',
          body: uploadData
        })

        if (!resBlob.ok) throw new Error('Gagal upload blob')
        const dataBlob = await resBlob.json()

        // 2. Simpan ke Database
        let ext = 'PDF'
        if (dataBlob.name.includes('.doc')) ext = 'WORD'
        if (dataBlob.name.includes('.xls')) ext = 'EXCEL'
        
        const title = dataBlob.name.replace(/\.[^/.]+$/, "") // hapus ekstensi
        
        const resDb = await fetch('/api/admin/books', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            description: '',
            file_url: dataBlob.url,
            file_type: ext,
            cover_url: '',
            folder_name: targetFolder
          })
        })

        if (!resDb.ok) throw new Error('Gagal simpan database')

        // Sukses
        setFiles(prev => prev.map(f => f.id === item.id ? { ...f, status: 'success' } : f))

      } catch (err) {
        setFiles(prev => prev.map(f => f.id === item.id ? { ...f, status: 'error', errorMsg: err.message } : f))
      }
    }

    setIsUploading(false)
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-[#1a3a52]'>Upload Dokumen Massal (Bulk)</h1>
          <Link href='/admin/buku' className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition'>
            ← Kembali ke Direktori
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          
          {/* Target Folder Setup */}
          <div className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
            <h2 className="text-lg font-bold text-[#1a3a52] mb-4">1. Pilih Folder Tujuan</h2>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <label className="inline-flex items-center">
                <input type="radio" checked={!isNewFolder && existingFolders.length > 0} disabled={existingFolders.length === 0} onChange={() => { setIsNewFolder(false); setTargetFolder(existingFolders[0]?.folder_name || '') }} className="text-blue-600 focus:ring-blue-500 h-4 w-4" />
                <span className="ml-2 text-sm text-gray-700 font-semibold">Folder yang Ada:</span>
              </label>
              
              {!isNewFolder && existingFolders.length > 0 && (
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] bg-white flex-1"
                  value={targetFolder}
                  onChange={e => setTargetFolder(e.target.value)}
                >
                  {existingFolders.map(f => (
                    <option key={f.folder_slug} value={f.folder_name}>{f.folder_name}</option>
                  ))}
                </select>
              )}

              <label className="inline-flex items-center">
                <input type="radio" checked={isNewFolder || existingFolders.length === 0} onChange={() => { setIsNewFolder(true); setTargetFolder('') }} className="text-blue-600 focus:ring-blue-500 h-4 w-4" />
                <span className="ml-2 text-sm text-gray-700 font-semibold">Folder Baru:</span>
              </label>

              {isNewFolder && (
                <input 
                  type="text" 
                  placeholder="Ketik nama folder baru..."
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb] flex-1" 
                  value={targetFolder} 
                  onChange={e => setTargetFolder(e.target.value)} 
                />
              )}
            </div>
          </div>

          {/* File Selector */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1a3a52] mb-4">2. Pilih File</h2>
            <div 
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${isUploading ? 'border-gray-300 bg-gray-50' : 'border-blue-300 bg-white hover:bg-blue-50'}`}
              onClick={() => !isUploading && fileInputRef.current?.click()}
            >
              <input 
                type="file" 
                multiple 
                accept=".pdf,.doc,.docx,.xls,.xlsx" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleFileSelect}
                disabled={isUploading}
              />
              <svg className="mx-auto h-12 w-12 text-blue-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-gray-600 font-semibold">Klik di sini untuk memilih banyak file PDF/Word sekaligus.</p>
              <p className="text-xs text-gray-500 mt-2">Judul buku akan otomatis diisi berdasarkan nama file yang dipilih.</p>
            </div>
          </div>

          {/* File Queue */}
          {files.length > 0 && (
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-bold text-[#1a3a52]">3. Antrean Upload ({files.length} file)</h2>
                <button 
                  onClick={() => setFiles([])} 
                  disabled={isUploading}
                  className="text-sm text-red-500 hover:text-red-700 disabled:opacity-50"
                >
                  Bersihkan Semua
                </button>
              </div>
              <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {files.map((f, i) => (
                  <li key={f.id} className="p-4 flex items-center justify-between bg-white hover:bg-gray-50">
                    <div className="flex items-center space-x-3 truncate">
                      <span className="text-gray-400 font-mono text-sm w-6">{i + 1}.</span>
                      <span className="text-sm font-medium text-gray-800 truncate">{f.file.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {f.status === 'pending' && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Menunggu</span>}
                      {f.status === 'uploading' && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-bold animate-pulse">Mengunggah...</span>}
                      {f.status === 'success' && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">✓ Sukses</span>}
                      {f.status === 'error' && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold" title={f.errorMsg}>X Gagal</span>}
                      
                      {f.status === 'pending' && (
                        <button onClick={() => removeFile(f.id)} disabled={isUploading} className="text-gray-400 hover:text-red-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t pt-6 text-center">
            <button 
              onClick={startBulkUpload} 
              disabled={isUploading || files.filter(f => f.status === 'pending').length === 0} 
              className="w-full md:w-auto px-12 py-3 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Sedang Memproses Upload...' : `Mulai Upload ${files.filter(f => f.status === 'pending').length} File`}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
