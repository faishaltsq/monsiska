'use client'

import React from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Konsultasi Penelitian',
    description: 'Bimbingan profesional untuk skripsi, tesis, dan disertasi dengan metodologi yang tepat.',
    icon: '📊'
  },
  {
    title: 'Pelatihan SPSS & Statistik',
    description: 'Pembelajaran mendalam tentang analisis data dan software statistik modern.',
    icon: '📈'
  },
  {
    title: 'Manajemen Mutu & ISO',
    description: 'Sertifikasi ISO 9001:2015 dan implementasi sistem manajemen mutu.',
    icon: '⭐'
  },
  {
    title: 'Pelatihan Akreditasi',
    description: 'Program pelatihan untuk mempersiapkan lembaga meraih akreditasi berkualitas.',
    icon: '🎓'
  }
]

const researchConsultations = [
  {
    title: 'Skripsi',
    image: '/images/paper1.png',
    description:
      'Kami membantu mahasiswa dalam penulisan, revisi, dan analisis data untuk skripsi dengan panduan profesional.'
  },
  {
    title: 'Tesis',
    image: '/images/paper2.png',
    description:
      'Layanan konsultasi dan bimbingan untuk penyusunan tesis, dari metodologi hingga analisis lanjutan.'
  },
  {
    title: 'Disertasi',
    image: '/images/paper3.png',
    description:
      'Bantuan menyeluruh untuk penelitian disertasi, termasuk pengolahan data statistik dan kajian teori.'
  }
]

const additionalInfo = [
  {
    title: 'Konsultasi Penelitian',
    content: [
      'Penelitian Kualitatif',
      'Penelitian Kuantitatif',
      'Penelitian Campuran'
    ]
  },
  {
    title: 'Di MONSISKAMI Bisa Konsultasi Apa?',
    content: [
      'Judul Penelitian',
      'Metode Penelitian',
      'Revisi Proposal/Hasil Penelitian',
      'Pembelajaran Software Statistik',
      'Konsultasi Laporan',
      'Simulasi Sidang Proposal/Akhir'
    ]
  },
  {
    title: 'Bidang/Jurusan yang Kami Bantu',
    content: [
      'Manajemen',
      'Farmasi',
      'Medis',
      'Keperawatan',
      'Kesehatan Masyarakat',
      'Ekonomi',
      'Hukum',
      'IT',
      'Dan semua jurusan.'
    ]
  }
]

export default function Home () {
  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-20 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
                Solusi Konsultasi Penelitian dan Statistik Terpercaya
              </h1>
              <p className='text-lg text-gray-200 mb-8'>
                Kami membantu Anda dalam penyelesaian penelitian, analisis statistik, dan sertifikasi manajemen mutu dengan profesionalisme tinggi.
              </p>
              <a
                href='https://wa.me/628117784099'
                className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'
              >
                Konsultasi Gratis
              </a>
            </div>
            <div className='flex justify-center'>
              <Image
                src='/images/IMG-20250716-WA0009.jpg'
                width={400}
                height={400}
                alt='Konsultan Profesional'
                className='rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Tentang Monsiskami
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
          </div>
          <p className='text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto'>
            Monsiskami adalah lembaga konsultasi penelitian terpercaya dengan lebih dari 5 tahun pengalaman dalam memberikan solusi penelitian, pelatihan statistik, dan sertifikasi manajemen mutu untuk institusi pendidikan, perusahaan, dan organisasi di Indonesia.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Layanan Kami
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100'
              >
                <div className='text-4xl mb-4'>{service.icon}</div>
                <h3 className='text-xl font-bold text-[#1a3a52] mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Research Types Section */}
      <section id='research-consultation' className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Jenis Konsultasi Penelitian
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {researchConsultations.map((consultation, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-[#2563eb] transition'
              >
                <div className='mb-4'>
                  <Image
                    src={consultation.image}
                    width={60}
                    height={60}
                    alt={consultation.title}
                    className='w-16 h-16 object-contain'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1a3a52] mb-3'>
                  {consultation.title}
                </h3>
                <p className='text-gray-700'>{consultation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methods Section */}
      <section id='consultation' className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] text-center mb-12'>
            Metode & Analisis Penelitian
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <h3 className='text-2xl font-bold text-[#1a3a52] mb-6'>Teknik Analisis Data</h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Validitas & Reliabilitas Kuesioner</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Analisis Deskriptif & Korelasi</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Analisis Regresi & Path Analysis</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Time Series & ANOVA</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Multivariate & Factor Analysis</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>SEM & Partial Least Square (PLS)</span>
                </li>
              </ul>
            </div>
            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <h3 className='text-2xl font-bold text-[#1a3a52] mb-6'>Tools & Software</h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>SPSS - Statistical Package</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>EVIEWS - Econometric Analysis</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>AMOS - Structural Equation</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>LISREL - Path Analysis</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>SmartPLS - Partial Least Square</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-[#2563eb] font-bold mr-3'>•</span>
                  <span className='text-gray-700'>Training & Konsultasi Komprehensif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-3 gap-8'>
            {additionalInfo.map((info, index) => (
              <div key={index} className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                <h3 className='text-xl font-bold text-[#1a3a52] mb-4'>{info.title}</h3>
                <ul className='space-y-2'>
                  {info.content.map((content, idx) => (
                    <li key={idx} className='flex items-start'>
                      <span className='text-[#2563eb] mr-2'>✓</span>
                      <span className='text-gray-700'>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert & Contact Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl grid md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-8'>Tim Profesional Kami</h2>
            <div className='bg-white rounded-lg p-8 shadow-sm'>
              <Image
                src='/images/dosen.png'
                width={200}
                height={200}
                alt='Dr. Basirun'
                className='rounded-lg w-full h-auto mb-6 object-cover'
              />
              <h3 className='text-2xl font-bold text-[#1a3a52] mb-2'>
                Dr. H. Muhammad Basirun Al Ummah, M.Kes.
              </h3>
              <p className='text-gray-600 mb-4'>
                Dosen Kesehatan dan Manajemen Universitas Muhammadiyah Gombong
              </p>
              <p className='text-gray-700'>
                Memiliki pengalaman lebih dari 15 tahun dalam bidang manajemen, kesehatan, dan penelitian akademik.
              </p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-8'>Lokasi Kantor & Hubungi Kami</h2>
            <div className='space-y-6'>
              <div className='bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#2563eb]'>
                <h3 className='font-bold text-[#1a3a52] mb-2'>Kebumen</h3>
                <p className='text-gray-700'>Jl. Candiwulan Ds Mangli RT 01/ RW 01, Kec. Kuwarasan, Kebumen-Jawa Tengah 54366</p>
              </div>
              <div className='bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#2563eb]'>
                <h3 className='font-bold text-[#1a3a52] mb-2'>Batam</h3>
                <p className='text-gray-700'>Perumahan Bida Asri 3, Blok A2 No 9, Batu Besar, Nongsa, Kota Batam-Kepulauan Riau, 29465</p>
              </div>
              <div className='bg-[#1a3a52] text-white rounded-lg p-6'>
                <p className='text-sm mb-4'>Hubungi kami untuk konsultasi gratis:</p>
                <a href='https://wa.me/628117784099' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-2 px-6 rounded transition'>
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
