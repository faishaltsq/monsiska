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
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 !text-white'>Perpustakaan Dokumen</h1>
          <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
            Akses berbagai koleksi buku, jurnal, dan referensi penelitian yang disusun rapi dalam direktori.
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
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Memuat direktori...</p>
              </div>
            ) : folders.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-lg">Belum ada folder yang ditambahkan.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {folders.map((folder) => (
                  <Link key={folder.folder_slug} href={`/buku/${folder.folder_slug}`}>
                    <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-[#2563eb] hover:shadow-md transition-all duration-200 group cursor-pointer h-full flex flex-col justify-center items-center text-center'>
                      <svg className="w-20 h-20 text-[#1a3a52] group-hover:text-[#2563eb] mb-4 transition-colors" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                      </svg>
                      <h3 className='text-lg font-bold text-gray-800 group-hover:text-[#2563eb]'>{folder.folder_name}</h3>
                      <p className='text-sm text-gray-500 mt-2'>{folder.item_count} File</p>
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
