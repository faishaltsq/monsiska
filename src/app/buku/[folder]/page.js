'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function FolderBukuPage() {
  const params = useParams()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  
  // Format folder slug ke nama yang lebih bagus untuk display sementara
  const folderDisplayName = params.folder.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  useEffect(() => {
    fetch(`/api/books?folder=${params.folder}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBooks(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch books', err)
        setLoading(false)
      })
  }, [params.folder])

  const filteredAndSortedBooks = books
    .filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.created_at) - new Date(a.created_at)
      if (sortBy === 'oldest') return new Date(a.created_at) - new Date(b.created_at)
      if (sortBy === 'a-z') return a.title.localeCompare(b.title)
      if (sortBy === 'z-a') return b.title.localeCompare(a.title)
      return 0
    })

  return (
    <div className='pt-20 bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl text-center'>
          <div className="mb-4">
            <Link href="/buku" className="inline-block text-blue-200 hover:text-white transition text-sm font-semibold">
              ← Kembali ke Direktori
            </Link>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 !text-white'>{folderDisplayName}</h1>
          <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
            Koleksi file yang ada di dalam folder ini.
          </p>
        </div>
      </section>

      {/* Book Shelf Section */}
      <section className='py-12 px-4'>
        <div className='container mx-auto max-w-7xl'>
          
          {/* Header Folder & Controls */}
          <div className="bg-white rounded-t-xl border border-gray-200 border-b-0 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
              <h2 className="text-2xl font-bold text-[#1a3a52]">Folder: {folderDisplayName}</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto gap-4">
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Cari judul file..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white text-gray-700"
              >
                <option value="newest">Terbaru (Default)</option>
                <option value="oldest">Terlama</option>
                <option value="a-z">Abjad (A - Z)</option>
                <option value="z-a">Abjad (Z - A)</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-100 p-6 md:p-8 rounded-b-xl border border-gray-200 shadow-inner min-h-[400px]">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Memuat isi folder...</p>
            </div>
          ) : books.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-lg">Folder ini kosong.</p>
            </div>
          ) : filteredAndSortedBooks.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-lg">Tidak menemukan file yang sesuai dengan pencarian Anda.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {filteredAndSortedBooks.map((book) => (
                <div key={book.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col'>
                  
                  {/* Book Cover Area */}
                  <div className='bg-gray-100 h-64 relative flex items-center justify-center p-4 overflow-hidden group'>
                    <div className="absolute inset-0 bg-[#1a3a52] opacity-5"></div>
                    
                    {book.cover_url ? (
                      <img 
                        src={book.cover_url} 
                        alt={`Cover ${book.title}`} 
                        className='h-full w-auto object-contain shadow-md transition-transform duration-300 group-hover:scale-105'
                      />
                    ) : (
                      // Default Cover
                      <div className="w-3/4 h-5/6 bg-gradient-to-br from-[#2d5a7b] to-[#1a3a52] rounded-r-md rounded-l-sm shadow-lg flex items-center justify-center p-4 relative">
                        {/* Book Spine Detail */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black opacity-20 rounded-l-sm"></div>
                        <div className="text-center">
                          <span className="text-white/50 text-xs uppercase tracking-widest block mb-2">{book.file_type}</span>
                          <h3 className="text-white font-serif font-bold text-sm leading-snug line-clamp-4">{book.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Book Info */}
                  <div className='p-6 flex-1 flex flex-col'>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider
                        ${book.file_type === 'PDF' ? 'bg-red-100 text-red-700' : 
                          book.file_type === 'WORD' ? 'bg-blue-100 text-blue-700' : 
                          'bg-green-100 text-green-700'}`}>
                        {book.file_type}
                      </span>
                    </div>
                    
                    <h3 className='text-lg font-bold text-[#1a3a52] mb-2 line-clamp-2' title={book.title}>
                      {book.title}
                    </h3>
                    
                    <p className='text-sm text-gray-600 mb-6 line-clamp-3 flex-1'>
                      {book.description || 'Tidak ada deskripsi.'}
                    </p>
                    
                    {/* Action Button */}
                    <a 
                      href={book.file_url} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='block w-full text-center bg-[#f8f9fa] hover:bg-[#2563eb] text-[#1a3a52] hover:text-white border border-gray-200 hover:border-[#2563eb] font-semibold py-2.5 rounded-lg transition-colors duration-200'
                    >
                      Buka / Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      </section>
    </div>
  )
}
