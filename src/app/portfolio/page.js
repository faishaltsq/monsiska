import React from 'react'
import Image from 'next/image'

// New PortfolioItem component
const PortfolioItem = ({ item }) => (
  <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300'>
    <Image
      src={item.image}
      alt={item.title || 'Portfolio Image'}
      layout='responsive'
      width={500}
      height={item.height || 300}
      className='w-full object-cover'
      loading='lazy'
    />
    <div className='p-5'>
      <h3 className='text-xl font-semibold text-teal-900 mb-2'>
        {item.title}
      </h3>
      {item.description && <p className='text-gray-600 mb-4'>{item.description}</p>}
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
      'Pelatihan intensif tentang implementasi ISO 9001:2015 untuk manajemen mutu yang lebih baik.',
    image: '/images/konsultan.png',
    height: 300
  },
  {
    id: 3,
    title: 'Pembelajaran Software Statistik',
    description:
      'Kursus penguasaan software statistik seperti SPSS, EVIEWS, dan AMOS untuk analisis data yang efektif.',
    image: '/images/spss-course.jpg',
    height: 300
  },
  // Additional portfolio images
  {
    id: 4,
    image: '/images/portfolio1.jpg',
    height: 300,
    title: 'Monsiska MI'
  },
  {
    id: 5,
    image: '/images/portfolio2.jpg',
    height: 300,
    title: 'Monsiska MI'
  },
  {
    id: 6,
    image: '/images/portfolio3.jpg',
    height: 300,
    title: 'Monsiska MI'
  },
  {
    id: 7,
    image: '/images/portfolio4.jpg',
    height: 300,
    title: 'Monsiska MI'
  },
  {
    id: 8,
    image: '/images/portfolio5.jpg',
    height: 500,
    title: 'Monsiska MI'
  },
  {
    id: 9,
    image: '/images/portfolio6.jpg',
    height: 500,
    title: 'Monsiska MI'
  }
]

const Portfolio = () => {
  return (
    <div className='pt-28 p-10 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-8 text-teal-500'>Portofolio Kami</h1>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 container mx-auto'>
        {portfolioItems.slice(0, 3).map(item => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h1 className='text-2xl font-bold text-center mb-8 mt-8 text-teal-500'>
          Portfolio Kami selama lebih dari 5 tahun berdiri telah membantu banyak
          klien dalam meningkatkan kualitas layanan dan produk mereka. Berikut
          adalah beberapa portofolio kami yang telah berhasil kami kerjakan.
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 container mx-auto'>
          {portfolioItems.slice(3).map(item => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
