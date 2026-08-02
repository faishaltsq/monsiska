import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Portfolio Monsiskami - Lebih dari 5 Tahun Berpengalaman',
  description: 'Lihat portfolio Monsiskami dalam memberikan jasa konsultasi penelitian, pelatihan akreditasi, dan manajemen mutu. Lebih dari 5 tahun melayani berbagai klien di Indonesia.',
  keywords: 'portfolio monsiskami, pengalaman konsultan, hasil kerja konsultasi, pelatihan akreditasi, manajemen mutu, seminar',
  openGraph: {
    title: 'Portfolio Monsiskami - Lebih dari 5 Tahun Berpengalaman',
    description: 'Lihat portfolio Monsiskami dalam memberikan jasa konsultasi penelitian, pelatihan akreditasi, dan manajemen mutu.',
    url: 'https://monsiskami.com/portfolio',
    siteName: 'Monsiskami',
    images: [
      {
        url: '/images/seminar-rs.png',
        width: 800,
        height: 600,
        alt: 'Portfolio Monsiskami',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// New PortfolioItem component
const PortfolioItem = ({ item }) => (
  <div className='bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100'>
    <div className='relative overflow-hidden h-48 bg-gray-100'>
      <Image
        src={item.image}
        alt={item.title || 'Portfolio Image'}
        fill
        className='w-full h-full object-cover hover:scale-105 transition duration-300'
        loading='lazy'
      />
    </div>
    <div className='p-6'>
      <h3 className='text-lg font-bold text-[#1a3a52] mb-2'>
        {item.title}
      </h3>
      {item.description && <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>}
    </div>
  </div>
)

// Consolidated portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Seminar Akreditasi KAI',
    description:
      'Seminar yang memberikan pemahaman mendalam tentang proses akreditasi KAI untuk meningkatkan mutu layanan.',
    image: '/images/seminar-rs.png',
    height: 300
  },
  {
    id: 2,
    title: 'Workshop Manajemen Mutu',
    description:
      'Pelatihan intensif tentang implementasi ISO 9001: 2015 untuk manajemen mutu yang lebih baik.',
    image: '/images/konsultan.png',
    height: 300
  },
  {
    id: 3,
    image: '/images/IMG-20250716-WA0009.jpg',
    height: 300,
    title: 'Pelatihan Manajemen Fasilitas Puskesmas Tegal',
    description:
      'Pelatihan tentang manajemen fasilitas dan keselamatan kerja untuk meningkatkan efisiensi operasional.',
  },
  {
    id: 4,
    title: 'Pembelajaran Software Statistik',
    description:
      'Kursus penguasaan software statistik seperti SPSS, EVIEWS, dan AMOS untuk analisis data yang efektif.',
    image: '/images/spss-course.jpg',
    height: 300
  },
  
  // Additional portfolio images
  {
    id: 5,
    image: '/images/portfolio1.jpg',
    height: 300,
    title: 'MONSISKAMI'
  },
  {
    id: 6,
    image: '/images/portfolio2.jpg',
    height: 300,
    title: 'MONSISKAMI'
  },
  {
    id: 7,
    image: '/images/portfolio3.jpg',
    height: 300,
    title: 'MONSISKAMI'
  },
  {
    id: 8,
    image: '/images/portfolio4.jpg',
    height: 300,
    title: 'MONSISKAMI'
  },
  {
    id: 9,
    image: '/images/portfolio5.jpg',
    height: 500,
    title: 'MONSISKAMI'
  },
  {
    id: 10,
    image: '/images/portfolio6.jpg',
    height: 500,
    title: 'MONSISKAMI'
  }
]

const Portfolio = () => {
  return (
    <div className='pt-24 pb-16'>
            {/* Hero Section */}
      <section className='relative bg-[#0f283d] text-white py-20 px-4 overflow-hidden border-b-[6px] border-[#2563eb]'>
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='max-w-3xl'>
            <div className='inline-block mb-4 px-3 py-1 bg-[#2563eb]/20 border border-[#2563eb]/30 rounded text-sm font-semibold tracking-wide text-blue-100 uppercase'>
              Kisah Sukses
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 !text-white tracking-tight'>Portofolio Kami</h1>
            <p className='text-lg md:text-xl text-gray-300 font-light leading-relaxed'>Lebih dari 5 tahun membantu klien mencapai kesuksesan penelitian dan manajemen mutu.</p>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-4'>Proyek Unggulan</h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {portfolioItems.slice(0, 4).map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className='py-12 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <div className='bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#2563eb]'>
            <p className='text-lg text-gray-700 text-center leading-relaxed'>
              Selama lebih dari 5 tahun berdiri, Monsiskami telah membantu ratusan klien dalam meningkatkan kualitas layanan dan penelitian mereka. Tim profesional kami berkomitmen untuk memberikan solusi terbaik dengan metodologi yang tepat dan hasil yang terukur.
            </p>
          </div>
        </div>
      </section>

      {/* All Portfolio Items */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <h2 className='text-3xl font-bold text-[#1a3a52] text-center mb-12'>Galeri Lengkap</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {portfolioItems.slice(4).map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl font-bold mb-4 !text-white'>Tertarik Bekerja Sama?</h2>
          <p className='text-gray-200 mb-8 max-w-2xl mx-auto'>
            Hubungi kami hari ini untuk mendiskusikan kebutuhan penelitian dan konsultasi Anda
          </p>
          <a href='https://wa.me/6281329796998' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'>
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

