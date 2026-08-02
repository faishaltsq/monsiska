'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const bukuPenelitian = [
  {
    id: 1,
    title: 'Pengembangan Ilmu Pengetahuan',
    chapter: 'BAB I',
    description: 'Konsep dan perkembangan ilmu pengetahuan dalam penelitian',
    category: 'Teori Dasar',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    title: 'Proposal Penelitian',
    chapter: 'BAB II',
    description: 'Panduan lengkap membuat proposal penelitian yang efektif',
    category: 'Persiapan',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    id: 3,
    title: 'Langkah dan Metode Penelitian',
    chapter: 'BAB III',
    description: 'Metodologi dan prosedur penelitian yang sistematis',
    category: 'Metodologi',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 4,
    title: 'Penelitian Deskriptif',
    chapter: 'BAB IV',
    description: 'Teknik penelitian deskriptif dan penerapannya',
    category: 'Jenis Penelitian',
    color: 'from-pink-600 to-pink-800'
  },
  {
    id: 5,
    title: 'Penelitian Studi Kasus',
    chapter: 'BAB V',
    description: 'Metodologi penelitian studi kasus mendalam',
    category: 'Jenis Penelitian',
    color: 'from-rose-600 to-rose-800'
  },
  {
    id: 6,
    title: 'Penelitian Survey',
    chapter: 'BAB VI',
    description: 'Teknik penelitian survey dan pengumpulan data',
    category: 'Jenis Penelitian',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 7,
    title: 'Penelitian Korelasi',
    chapter: 'BAB VII',
    description: 'Analisis hubungan antar variabel dalam penelitian',
    category: 'Analisis Data',
    color: 'from-orange-600 to-orange-800'
  },
  {
    id: 8,
    title: 'Penelitian Komparasi',
    chapter: 'BAB VIII',
    description: 'Metode perbandingan dalam penelitian kuantitatif',
    category: 'Analisis Data',
    color: 'from-amber-600 to-amber-800'
  },
  {
    id: 9,
    title: 'Penelitian Pengaruh',
    chapter: 'BAB IX',
    description: 'Analisis pengaruh variabel independen terhadap dependen',
    category: 'Analisis Data',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    id: 10,
    title: 'Perbedaan Penelitian Kuantitatif',
    chapter: 'BAB X',
    description: 'Karakteristik dan perbedaan jenis penelitian kuantitatif',
    category: 'Teori Dasar',
    color: 'from-lime-600 to-lime-800'
  },
  {
    id: 11,
    title: 'Rancangan Penelitian',
    chapter: 'BAB XI',
    description: 'Perancangan desain penelitian yang komprehensif',
    category: 'Desain Penelitian',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 12,
    title: 'Desain Eksperimen',
    chapter: 'BAB XII',
    description: 'Perancangan dan pelaksanaan eksperimen ilmiah',
    category: 'Desain Penelitian',
    color: 'from-emerald-600 to-emerald-800'
  },
  {
    id: 13,
    title: 'Mengidentifikasi Sumber Penelitian',
    chapter: 'BAB XIII',
    description: 'Teknik identifikasi dan verifikasi sumber data',
    category: 'Data Collection',
    color: 'from-teal-600 to-teal-800'
  },
  {
    id: 14,
    title: 'Area dan Judul Penelitian',
    chapter: 'BAB XIV',
    description: 'Penentuan fokus area dan rumusan judul penelitian',
    category: 'Persiapan',
    color: 'from-cyan-600 to-cyan-800'
  },
  {
    id: 15,
    title: 'Penulisan Naskah Publikasi',
    chapter: 'BAB XV',
    description: 'Panduan penulisan dan publikasi hasil penelitian',
    category: 'Publikasi',
    color: 'from-sky-600 to-sky-800'
  },
  {
    id: 16,
    title: 'Hipotesa Penelitian',
    chapter: 'BAB XVI',
    description: 'Perumusan dan pengujian hipotesis penelitian',
    category: 'Analisis Data',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 17,
    title: 'Populasi dan Sampel',
    chapter: 'BAB XVII',
    description: 'Penentuan populasi dan teknik pengambilan sampel',
    category: 'Metodologi',
    color: 'from-violet-600 to-violet-800'
  },
  {
    id: 18,
    title: 'Variabel dan Definisi Operasional',
    chapter: 'BAB XVIII',
    description: 'Identifikasi variabel dan operasionalisasi konsep',
    category: 'Metodologi',
    color: 'from-fuchsia-600 to-fuchsia-800'
  },
  {
    id: 19,
    title: 'Skala Pengukuran',
    chapter: 'BAB XIX',
    description: 'Jenis-jenis skala pengukuran dan aplikasinya',
    category: 'Instrumen',
    color: 'from-purple-600 to-pink-600'
  }
]

const categories = ['Semua', ...new Set(bukuPenelitian.map(b => b.category))]

export default function BukuPenelitian() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = bukuPenelitian.filter(buku => {
    const matchCategory = selectedCategory === 'Semua' || buku.category === selectedCategory
    const matchSearch = buku.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        buku.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <h1 className='text-5xl font-bold mb-4'>Perpustakaan Penelitian</h1>
          <p className='text-xl text-gray-200'>Koleksi lengkap panduan dan referensi penelitian dari para ahli</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className='py-8 px-4 bg-white border-b'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-4 mb-6'>
            <input
              type='text'
              placeholder='Cari buku penelitian...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]'
            />
          </div>
          
          {/* Category Filter */}
          <div className='flex flex-wrap gap-2'>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#2563eb] text-white'
                    : 'bg-gray-100 text-[#1a3a52] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bookshelf Grid */}
      <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filtered.map((buku) => (
              <div
                key={buku.id}
                className='group h-80 perspective'
              >
                {/* Book Card */}
                <div className='relative w-full h-full transform transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl'>
                  {/* Book Cover */}
                  <div className={`h-full bg-gradient-to-br ${buku.color} rounded-lg shadow-lg overflow-hidden relative`}>
                    {/* Book Spine */}
                    <div className='absolute inset-0 p-6 flex flex-col justify-between text-white'>
                      {/* Top Section */}
                      <div>
                        <div className='text-xs font-bold opacity-75 mb-2 bg-black bg-opacity-20 px-2 py-1 rounded w-fit'>
                          {buku.chapter}
                        </div>
                        <h3 className='text-xl font-bold leading-snug line-clamp-3 mb-2'>
                          {buku.title}
                        </h3>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <p className='text-sm opacity-90 mb-3 line-clamp-2'>
                          {buku.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs font-semibold opacity-75 uppercase tracking-wider'>
                            {buku.category}
                          </span>
                          <svg className='w-5 h-5 opacity-75 group-hover:opacity-100 transition transform group-hover:translate-x-1' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300'></div>
                  </div>

                  {/* Book Shadow/Depth */}
                  <div className='absolute -bottom-1 -right-1 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg -z-10 opacity-30'></div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className='text-center py-16'>
              <p className='text-gray-500 text-xl'>Tidak ada buku yang sesuai dengan pencarian</p>
            </div>
          )}

          {/* Stats */}
          <div className='mt-16 p-8 bg-white rounded-lg border border-gray-200'>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div>
                <div className='text-4xl font-bold text-[#2563eb]'>{bukuPenelitian.length}</div>
                <p className='text-gray-600 mt-2'>Total Buku Penelitian</p>
              </div>
              <div>
                <div className='text-4xl font-bold text-[#2563eb]'>{categories.length - 1}</div>
                <p className='text-gray-600 mt-2'>Kategori Materi</p>
              </div>
              <div>
                <div className='text-4xl font-bold text-[#2563eb]'>100%</div>
                <p className='text-gray-600 mt-2'>Gratis untuk Akses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl font-bold mb-4'>Butuh Bimbingan Lebih Lanjut?</h2>
          <p className='text-gray-200 mb-8 max-w-2xl mx-auto'>
            Tim ahli Monsiskami siap membantu Anda memahami dan menerapkan metodologi penelitian dengan baik
          </p>
          <a
            href='https://wa.me/628117784099'
            className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'
          >
            Hubungi Konsultan
          </a>
        </div>
      </section>
    </div>
  )
}
