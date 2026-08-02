'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function BukuPenelitianPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBooks(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch books', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='pt-20 bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 !text-white'>Buku Penelitian</h1>
          <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
            Koleksi buku, referensi, dan panduan penelitian yang dapat Anda akses secara gratis untuk membantu menyelesaikan karya ilmiah Anda.
          </p>
        </div>
      </section>

      {/* Book Shelf Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Memuat koleksi buku...</p>
            </div>
          ) : books.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-500 text-lg">Belum ada koleksi buku yang ditambahkan.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {books.map((book) => (
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

          {/* Decorative Shelf Base */}
          {!loading && books.length > 0 && (
            <div className="w-full h-4 bg-gray-200 rounded-sm mt-8 shadow-inner border-b-2 border-gray-300"></div>
          )}

        </div>
      </section>
    </div>
  )
}
