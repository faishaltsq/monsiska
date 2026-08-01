'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  const [allArticles, setAllArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setAllArticles(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch posts', err)
        setLoading(false)
      })
  }, [])

  const categories = ['Semua', ...new Set(allArticles.map(article => article.category))]

  const filteredArticles = allArticles.filter(article => {
    const categoryMatch = selectedCategory === 'Semua' || article.category === selectedCategory
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Resources & Edukasi</h1>
          <p className='text-lg text-gray-200'>Tips, tutorial, dan panduan lengkap untuk meningkatkan kualitas penelitian Anda</p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          {/* Search & Filter */}
          <div className='mb-12'>
            <div className='mb-6'>
              <input
                type='text'
                placeholder='Cari artikel...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]'
              />
            </div>
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedCategory === category
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className='bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer h-full'>
                    <div className='p-6'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-xs font-semibold text-[#2563eb] bg-blue-50 px-2 py-1 rounded'>
                          {article.category}
                        </span>
                        <span className='text-xs text-gray-500'>
                          {new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className='text-lg font-bold text-[#1a3a52] mb-3 hover:text-[#2563eb] transition'>{article.title}</h3>
                      <p className='text-sm text-gray-600 mb-4'>{article.excerpt}</p>
                      <div className='pt-4 border-t space-y-2'>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-500'>Oleh {article.author}</span>
                           <span className='text-xs text-gray-500'>{article.read_time}</span>
                        </div>
                        <div className='inline-block text-[#2563eb] font-semibold text-sm hover:text-[#1d4ed8] transition'>
                          Baca Selengkapnya →
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <p className='text-gray-600 text-lg'>Tidak ada artikel yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl font-bold text-[#1a3a52] mb-4'>Butuh Konsultasi Lebih Lanjut?</h2>
          <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
            Hubungi tim expert kami untuk mendiskusikan kebutuhan penelitian Anda
          </p>
          <a href='https://wa.me/628117784099' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
