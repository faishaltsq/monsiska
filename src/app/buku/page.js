'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BukuPenelitianPage() {
  const [folders, setFolders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/books/folders')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setFolders(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch folders', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='pt-20 bg-gray-50 min-h-screen'>
            {/* Hero Section */}
      <section className='relative bg-[#0f283d] text-white py-20 px-4 overflow-hidden border-b-[6px] border-[#2563eb]'>
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className='container mx-auto max-w-7xl text-center relative z-10'>
          <div className='inline-block mb-4 px-3 py-1 bg-[#2563eb]/20 border border-[#2563eb]/30 rounded text-sm font-semibold tracking-wide text-blue-100 uppercase'>
            Akses Publik
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 !text-white tracking-tight'>Perpustakaan Dokumen</h1>
          <p className='text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto'>
            Akses berbagai koleksi buku, jurnal, dan referensi penelitian yang disusun rapi dalam direktori untuk mendukung karya ilmiah Anda.
          </p>
        </div>
      </section>

      {/* Folders Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          
          <div className="bg-white rounded-t-xl border border-gray-200 border-b-0 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <h2 className="text-2xl font-bold text-[#1a3a52]">Direktori File</h2>
            </div>
          </div>

          <div className="bg-gray-100 p-6 md:p-8 rounded-b-xl border border-gray-200 shadow-inner min-h-[400px]">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                ))}
              </div>
            ) : folders.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-lg">Belum ada folder yang ditambahkan.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {folders.map((folder) => (
                  <Link key={folder.folder_slug} href={`/buku/${folder.folder_slug}`}>
                    <div className='bg-white rounded-xl shadow-sm border border-gray-200 hover:border-[#2563eb] hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col overflow-hidden relative'>
                      
                      {/* Folder Cover Background */}
                      <div className="h-48 w-full bg-gray-100 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/80 to-transparent z-10 transition-opacity group-hover:opacity-75"></div>
                        
                        {folder.folder_cover && folder.folder_cover.length > 5 ? (
                          <img 
                            src={folder.folder_cover} 
                            alt={`Cover ${folder.folder_name}`} 
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          // Fallback Gradient Pattern
                          <div className="w-full h-full bg-gradient-to-br from-[#1a3a52] to-[#2563eb] opacity-90 flex items-center justify-center">
                            <svg className="w-24 h-24 text-white/20 transform transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                          </div>
                        )}
                        
                        {/* File Count Badge */}
                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                          <span className="text-xs font-bold text-[#1a3a52]">{folder.item_count} File</span>
                        </div>
                      </div>

                      {/* Folder Info */}
                      <div className="p-5 bg-white relative z-20 flex-1 flex flex-col justify-between">
                        <h3 className='text-xl font-bold text-gray-800 group-hover:text-[#2563eb] transition-colors mb-2'>{folder.folder_name}</h3>
                        <div className="flex items-center text-[#2563eb] text-sm font-semibold mt-auto group-hover:translate-x-1 transition-transform">
                          Lihat Isi Folder <span className="ml-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}


