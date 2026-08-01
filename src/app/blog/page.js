'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const allArticles = [
  {
    id: 1,
    slug: 'panduan-memilih-metode-penelitian',
    title: 'Panduan Memilih Metode Penelitian yang Tepat',
    category: 'Tips Penelitian',
    excerpt: 'Memilih metode penelitian yang tepat adalah langkah awal penting. Pelajari perbedaan antara kualitatif, kuantitatif, dan mixed methods.',
    readTime: '8 min',
    date: '15 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 2,
    slug: 'validitas-reliabilitas-penelitian',
    title: 'Validitas dan Reliabilitas: Konsep Penting dalam Penelitian',
    category: 'Metodologi',
    excerpt: 'Pahami konsep validitas dan reliabilitas instrumen penelitian, dan bagaimana cara mengukurnya dengan SPSS.',
    readTime: '10 min',
    date: '12 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 3,
    slug: 'cara-membaca-output-spss',
    title: 'Cara Membaca dan Menginterpretasi Output SPSS',
    category: 'Tutorial SPSS',
    excerpt: 'Panduan lengkap untuk membaca output SPSS mulai dari tabel deskriptif hingga uji hipotesis.',
    readTime: '12 min',
    date: '10 Jan 2025',
    author: 'Tim Konsultan'
  },
  {
    id: 4,
    slug: 'kesalahan-analisis-regresi',
    title: 'Mengatasi Kesalahan Umum dalam Analisis Regresi',
    category: 'Data Analytics',
    excerpt: 'Ketahui kesalahan-kesalahan umum yang sering dilakukan dalam analisis regresi dan cara mengatasinya.',
    readTime: '7 min',
    date: '8 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 5,
    slug: 'structural-equation-modeling-sem',
    title: 'Structural Equation Modeling (SEM): Panduan Lengkap',
    category: 'Advanced Statistics',
    excerpt: 'Pelajari cara menggunakan SEM untuk analisis model kompleks dengan variabel laten.',
    readTime: '14 min',
    date: '5 Jan 2025',
    author: 'Tim Statistikan'
  },
  {
    id: 6,
    slug: '10-tips-menulis-proposal',
    title: '10 Tips Menulis Proposal Penelitian yang Kuat',
    category: 'Tips Penelitian',
    excerpt: 'Panduan praktis untuk membuat proposal penelitian yang menarik dan persuasif untuk dosen penguji.',
    readTime: '9 min',
    date: '3 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 7,
    slug: 'partial-least-square-pls',
    title: 'Pemahaman Mendalam tentang Partial Least Square (PLS)',
    category: 'Advanced Statistics',
    excerpt: 'Tutorial lengkap menggunakan SmartPLS untuk analisis PLS-SEM.',
    readTime: '11 min',
    date: '1 Jan 2025',
    author: 'Tim Konsultan'
  },
  {
    id: 8,
    slug: 'teknik-sampling-penelitian',
    title: 'Teknik Sampling dalam Penelitian Kuantitatif',
    category: 'Metodologi',
    excerpt: 'Pelajari berbagai teknik sampling dan cara menghitung ukuran sampel yang tepat.',
    readTime: '8 min',
    date: '28 Dec 2024',
    author: 'Tim Statistikan'
  }
]

const categories = ['Semua', ...new Set(allArticles.map(article => article.category))]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

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
                        <span className='text-xs text-gray-500'>{article.date}</span>
                      </div>
                      <h3 className='text-lg font-bold text-[#1a3a52] mb-3 hover:text-[#2563eb] transition'>{article.title}</h3>
                      <p className='text-sm text-gray-600 mb-4'>{article.excerpt}</p>
                      <div className='pt-4 border-t space-y-2'>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-500'>Oleh {article.author}</span>
                          <span className='text-xs text-gray-500'>{article.readTime}</span>
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
