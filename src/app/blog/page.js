'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const allArticles = [
  {
    id: 1,
    title: 'Panduan Memilih Metode Penelitian yang Tepat',
    category: 'Tips Penelitian',
    excerpt: 'Memilih metode penelitian yang tepat adalah langkah awal penting. Pelajari perbedaan antara kualitatif, kuantitatif, dan mixed methods.',
    content: 'Metode penelitian yang tepat akan menentukan kualitas dan kredibilitas hasil penelitian Anda. Ada tiga jenis metode utama yang perlu Anda pahami: penelitian kualitatif, kuantitatif, dan mixed methods. Penelitian kualitatif cocok untuk mengeksplorasi fenomena yang kompleks dan memahami perspektif partisipan. Kuantitatif lebih fokus pada angka dan statistik untuk menguji hipotesis. Sementara mixed methods menggabungkan keduanya untuk hasil yang lebih komprehensif.',
    readTime: '8 min',
    date: '15 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 2,
    title: 'Validitas dan Reliabilitas: Konsep Penting dalam Penelitian',
    category: 'Metodologi',
    excerpt: 'Pahami konsep validitas dan reliabilitas instrumen penelitian, dan bagaimana cara mengukurnya dengan SPSS.',
    content: 'Validitas dan reliabilitas adalah dua konsep krusial dalam penelitian. Validitas mengukur apakah instrumen benar-benar mengukur apa yang ingin diukur, sementara reliabilitas mengukur konsistensi instrumen. Untuk menguji validitas, Anda dapat menggunakan validitas konstruk, konten, dan kriteria. Reliabilitas dapat diukur menggunakan Cronbach\'s Alpha, test-retest, dan split-half method. Dengan SPSS, Anda dapat menghitung kedua metrik ini dengan mudah.',
    readTime: '10 min',
    date: '12 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 3,
    title: 'Cara Membaca dan Menginterpretasi Output SPSS',
    category: 'Tutorial SPSS',
    excerpt: 'Panduan lengkap untuk membaca output SPSS mulai dari tabel deskriptif hingga uji hipotesis.',
    content: 'Output SPSS mungkin terlihat rumit pada awalnya, namun dengan pemahaman yang tepat, Anda dapat menginterpretasinya dengan mudah. Dimulai dari tabel deskriptif yang menunjukkan mean, standar deviasi, dan frekuensi. Kemudian uji normalitas menggunakan Shapiro-Wilk atau Kolmogorov-Smirnov. Untuk uji hipotesis, perhatikan p-value dan bandingkan dengan alpha (0.05). Jika p-value < alpha, hipotesis nol ditolak.',
    readTime: '12 min',
    date: '10 Jan 2025',
    author: 'Tim Konsultan'
  },
  {
    id: 4,
    title: 'Mengatasi Kesalahan Umum dalam Analisis Regresi',
    category: 'Data Analytics',
    excerpt: 'Ketahui kesalahan-kesalahan umum yang sering dilakukan dalam analisis regresi dan cara mengatasinya.',
    content: 'Analisis regresi adalah teknik statistik yang powerful namun sering disalahgunakan. Kesalahan umum pertama adalah multikolinearitas, di mana variabel independen memiliki korelasi tinggi. Gunakan VIF (Variance Inflation Factor) untuk mendeteksinya. Kedua, heteroskedastisitas yang terjadi ketika variance error tidak konstan. Lakukan uji Breusch-Pagan atau Glejser. Ketiga, autokorelasi di mana error serial berkorelasi, gunakan Durbin-Watson test.',
    readTime: '7 min',
    date: '8 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 5,
    title: 'Structural Equation Modeling (SEM): Panduan Lengkap',
    category: 'Advanced Statistics',
    excerpt: 'Pelajari cara menggunakan SEM untuk analisis model kompleks dengan variabel laten.',
    content: 'SEM adalah teknik analisis multivariat yang mengkombinasikan confirmatory factor analysis dan path analysis. Digunakan untuk menguji model kompleks dengan variabel laten. Langkah pertama adalah membuat model specification berdasarkan teori. Kedua, melakukan identifikasi model untuk memastikan model dapat diestimasi. Ketiga, estimasi parameter menggunakan Maximum Likelihood. Terakhir, evaluasi model fit menggunakan chi-square, GFI, AGFI, CFI, dan RMSEA.',
    readTime: '14 min',
    date: '5 Jan 2025',
    author: 'Tim Statistikan'
  },
  {
    id: 6,
    title: '10 Tips Menulis Proposal Penelitian yang Kuat',
    category: 'Tips Penelitian',
    excerpt: 'Panduan praktis untuk membuat proposal penelitian yang menarik dan persuasif untuk dosen penguji.',
    content: 'Proposal penelitian yang kuat adalah fondasi penelitian yang sukses. Pertama, mulai dengan judul yang spesifik dan jelas. Kedua, latar belakang harus menunjukkan gap penelitian yang jelas. Ketiga, rumusan masalah harus operasional dan terukur. Keempat, tujuan penelitian harus alignment dengan masalah. Kelima, tinjauan pustaka harus comprehensive dan up-to-date. Keenam, metodologi harus detail dan feasible. Ketujuh, timeline harus realistis. Kedelapan, referensi minimal 30-40 sumber. Kesembilan, format sesuai pedoman institusi. Kesepuluh, lakukan proofreading berulang kali.',
    readTime: '9 min',
    date: '3 Jan 2025',
    author: 'Dr. Muhammad Basirun'
  },
  {
    id: 7,
    title: 'Pemahaman Mendalam tentang Partial Least Square (PLS)',
    category: 'Advanced Statistics',
    excerpt: 'Tutorial lengkap menggunakan SmartPLS untuk analisis PLS-SEM.',
    content: 'PLS-SEM adalah alternatif CB-SEM yang lebih fleksibel dan robust terhadap asumsi normalitas. Cocok untuk sampel kecil (minimal 30 observasi). Tahap pertama adalah outer model atau measurement model, di mana kita mengevaluasi validitas dan reliabilitas instrumen. Gunakan loading factor, AVE, dan Cronbach\'s Alpha. Tahap kedua adalah inner model atau structural model untuk mengevaluasi hubungan antar variabel. Gunakan path coefficient dan R-square. Signifikansi diuji dengan bootstrapping procedure.',
    readTime: '11 min',
    date: '1 Jan 2025',
    author: 'Tim Konsultan'
  },
  {
    id: 8,
    title: 'Teknik Sampling dalam Penelitian Kuantitatif',
    category: 'Metodologi',
    excerpt: 'Pelajari berbagai teknik sampling dan cara menghitung ukuran sampel yang tepat.',
    content: 'Sampling adalah proses memilih sebagian populasi yang mewakili seluruh populasi. Ada dua kategori utama: probability sampling dan non-probability sampling. Probability sampling meliputi simple random, stratified, systematic, dan cluster sampling. Non-probability sampling meliputi convenience, purposive, quota, dan snowball sampling. Ukuran sampel dapat dihitung menggunakan rumus Slovin, Cochran, atau power analysis. Penting untuk memilih teknik yang sesuai dengan penelitian Anda agar hasil dapat digeneralisasi.',
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
                <article key={article.id} className='bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer'>
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-xs font-semibold text-[#2563eb] bg-blue-50 px-2 py-1 rounded'>
                        {article.category}
                      </span>
                      <span className='text-xs text-gray-500'>{article.date}</span>
                    </div>
                    <h3 className='text-lg font-bold text-[#1a3a52] mb-3'>{article.title}</h3>
                    <p className='text-sm text-gray-600 mb-4'>{article.excerpt}</p>
                    <div className='pt-4 border-t space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='text-xs text-gray-500'>Oleh {article.author}</span>
                        <span className='text-xs text-gray-500'>{article.readTime} read</span>
                      </div>
                      <a href={`#`} className='inline-block text-[#2563eb] font-semibold text-sm hover:text-[#1d4ed8] transition'>
                        Baca Selengkapnya →
                      </a>
                    </div>
                  </div>
                </article>
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
