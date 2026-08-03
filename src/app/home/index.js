'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

const testimonials = [
  {
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa S2 Manajemen',
    university: 'Universitas Muhammadiyah',
    content: 'Berkat bimbingan dari Monsiskami, saya berhasil menyelesaikan tesis dengan analisis data yang tepat. Tim mereka sangat profesional dan responsif terhadap setiap pertanyaan saya.',
    rating: 5
  },
  {
    name: 'Dr. Bambang Sutrisno',
    role: 'Ketua Program Studi',
    university: 'Akademi Kesehatan',
    content: 'Monsiskami membantu lembaga kami mencapai akreditasi dengan solusi manajemen mutu yang komprehensif. Layanan mereka sangat terstruktur dan profesional.',
    rating: 5
  },
  {
    name: 'Muhammad Rifqi',
    role: 'Mahasiswa S1 Ekonomi',
    university: 'Universitas Negeri',
    content: 'Pelatihan SPSS dari Monsiskami sangat membantu. Instrukturnya sabar dan mudah dipahami, membuat saya lebih percaya diri dalam mengolah data.',
    rating: 5
  },
  {
    name: 'Yuni Wahyuningsih',
    role: 'Mahasiswa S3 Pendidikan',
    university: 'Universitas Pendidikan Indonesia',
    content: 'Konsultasi metodologi penelitian di Monsiskami sangat komprehensif. Dari pemilihan metode hingga analisis data, semuanya ditangani dengan profesional.',
    rating: 5
  }
]

const caseStudies = [
  {
    title: 'Peningkatan Akreditasi Rumah Sakit',
    category: 'Manajemen Mutu',
    description: 'Membantu RSU mencapai akreditasi penuh melalui implementasi sistem manajemen mutu ISO 9001:2015',
    results: ['Akreditasi meningkat dari C menjadi B', 'Tingkat kepuasan pasien +45%', 'Efisiensi operasional +30%']
  },
  {
    title: 'Optimalisasi Penelitian Multi-Center',
    category: 'Penelitian Klinis',
    description: 'Konsultasi metodologi dan analisis data untuk penelitian kolaboratif 5 institusi kesehatan',
    results: ['Publikasi internasional terbit', 'Tingkat completion rate 100%', 'Data quality score 98%']
  },
  {
    title: 'Training SPSS untuk Staf Akademik',
    category: 'Pelatihan Statistik',
    description: 'Program pelatihan 12 minggu untuk 50+ dosen dan peneliti di universitas swasta',
    results: ['95% peserta lulus sertifikasi', 'Publikasi penelitian +200%', 'Kepuasan peserta 4.8/5']
  }
]

export default function Home () {
  const [randomPosts, setRandomPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Shuffle array untuk nampilin random
          const shuffled = data.sort(() => 0.5 - Math.random())
          // Ambil cuma 4
          setRandomPosts(shuffled.slice(0, 4))
        }
      })
      .catch(err => console.error('Failed to fetch posts', err))
  }, [])

  return (
    <div className='pt-20'>
            {/* Hero Section */}
      <section className='relative bg-[#0f283d] text-white py-24 px-4 overflow-hidden border-b-[6px] border-[#2563eb]'>
        {/* Subtle dot pattern background */}
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
        
        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='max-w-2xl'>
                <div className='inline-block mb-6 px-3 py-1 bg-[#2563eb]/20 border border-[#2563eb]/30 rounded text-sm font-semibold tracking-wide text-blue-100 uppercase'>
                  Lembaga Konsultan & Workshop
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.15] text-white tracking-tight'>
                  Solusi Konsultasi Penelitian dan Statistik Terpercaya
                </h1>
                <p className='text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light'>
                  Kami membantu Anda dalam penyelesaian penelitian, analisis statistik, dan sertifikasi manajemen mutu dengan standar akademis dan profesionalisme tinggi.
                </p>
                <div className='flex flex-wrap items-center gap-4'>
                  <a
                    href='https://wa.me/6281329796998'
                    className='inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3.5 px-8 rounded shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5'
                  >
                    Konsultasi Gratis
                  </a>
                  <a
                    href='#services'
                    className='inline-flex items-center justify-center bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded transition-all duration-200'
                  >
                    Lihat Layanan
                  </a>
                </div>
              </div>
              <div className='flex justify-center lg:justify-end relative mt-8 lg:mt-0'>
                {/* Decorative element behind image */}
                <div className='absolute -inset-4 bg-gradient-to-tr from-[#2563eb]/20 to-transparent rounded-2xl -z-10 blur-2xl'></div>
                <Image
                  src='/images/IMG-20250716-WA0009.jpg'
                  width={550}
                  height={550}
                  alt='Konsultan Profesional Monsiskami'
                  className='rounded shadow-2xl w-full max-w-lg h-auto object-cover border-4 border-white/5'
                  priority
                />
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 px-4 bg-white border-b border-gray-100'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-extrabold text-[#2563eb] mb-2'>500+</div>
              <p className='text-[#1a3a52] font-semibold'>Klien Terbantu</p>
            </div>
            <div>
              <div className='text-4xl font-extrabold text-[#2563eb] mb-2'>5+</div>
              <p className='text-[#1a3a52] font-semibold'>Tahun Pengalaman</p>
            </div>
            <div>
              <div className='text-4xl font-extrabold text-[#2563eb] mb-2'>1000+</div>
              <p className='text-[#1a3a52] font-semibold'>Penelitian Selesai</p>
            </div>
            <div>
              <div className='text-4xl font-extrabold text-[#2563eb] mb-2'>98%</div>
              <p className='text-[#1a3a52] font-semibold'>Tingkat Kepuasan</p>
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

      {/* Testimonials Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Kepercayaan dari Ribuan Klien
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto mb-4'></div>
            <p className='text-gray-600 text-lg'>Testimoni nyata dari klien yang telah merasakan manfaat layanan kami</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition'>
                <div className='flex mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className='text-yellow-400 text-lg'>★</span>
                  ))}
                </div>
                <p className='text-gray-700 mb-4 text-sm italic'>&quot;{testimonial.content}&quot;</p>
                <div className='border-t pt-4'>
                  <p className='font-bold text-[#1a3a52]'>{testimonial.name}</p>
                  <p className='text-sm text-gray-600'>{testimonial.role}</p>
                  <p className='text-xs text-gray-500'>{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Studi Kasus Sukses
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto mb-4'></div>
            <p className='text-gray-600 text-lg'>Hasil nyata yang kami capai bersama klien</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className='bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-lg transition'>
                <div className='inline-block bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded-full mb-4'>
                  {caseStudy.category}
                </div>
                <h3 className='text-xl font-bold text-[#1a3a52] mb-3'>{caseStudy.title}</h3>
                <p className='text-gray-600 mb-6'>{caseStudy.description}</p>
                <div className='border-t pt-6'>
                  <p className='text-sm font-semibold text-[#1a3a52] mb-3'>Hasil yang Dicapai:</p>
                  <ul className='space-y-2'>
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className='flex items-start text-sm text-gray-700'>
                        <span className='text-[#2563eb] font-bold mr-2'>✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>
              Resource & Edukasi
            </h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto mb-4'></div>
            <p className='text-gray-600 text-lg'>Tips, tutorial, dan panduan lengkap untuk penelitian Anda</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {randomPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className='bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer h-full'>
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-xs font-semibold text-[#2563eb] bg-blue-50 px-2 py-1 rounded line-clamp-1'>
                        {post.category}
                      </span>
                      <span className='text-xs text-gray-500'>
                        {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className='text-lg font-bold text-[#1a3a52] mb-3 line-clamp-2'>{post.title}</h3>
                    <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{post.excerpt}</p>
                    <div className='flex items-center justify-between pt-4 border-t'>
                      <span className='text-xs text-gray-500'>{post.read_time}</span>
                      <span className='text-[#2563eb] font-semibold text-sm'>Baca →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link href='/blog' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'>
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-4 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white hidden'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold mb-2'>500+</div>
              <p className='text-gray-200'>Klien Terpuaskan</p>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>5+</div>
              <p className='text-gray-200'>Tahun Pengalaman</p>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>1000+</div>
              <p className='text-gray-200'>Penelitian Selesai</p>
            </div>
            <div>
              <div className='text-4xl font-bold mb-2'>98%</div>
              <p className='text-gray-200'>Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert & Contact Section */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl grid md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-8'>Tim Profesional Kami</h2>
            <div className='bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200'>
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
              <p className='text-gray-600 mb-4 font-semibold'>
                Pendiri & Direktur Konsultan
              </p>
              <p className='text-gray-600 mb-4'>
                Dosen Kesehatan dan Manajemen Universitas Muhammadiyah Gombong
              </p>
              <p className='text-gray-700'>
                Memiliki pengalaman lebih dari 15 tahun dalam bidang manajemen, kesehatan, dan penelitian akademik. Telah membantu ratusan mahasiswa dan institusi mencapai kesuksesan.
              </p>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-8'>Lokasi Kantor & Hubungi Kami</h2>
            <div className='space-y-6'>
              <div className='bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#2563eb]'>
                <h3 className='font-bold text-[#1a3a52] mb-2'>Kantor Kebumen</h3>
                <p className='text-gray-700'>Jl. Candiwulan Ds Mangli RT 01/ RW 01, Kec. Kuwarasan, Kebumen-Jawa Tengah 54366</p>
              </div>
              <div className='bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#2563eb]'>
                <h3 className='font-bold text-[#1a3a52] mb-2'>Kantor Batam</h3>
                <p className='text-gray-700'>Perumahan Bida Asri 3, Blok A2 No 9, Batu Besar, Nongsa, Kota Batam-Kepulauan Riau, 29465</p>
              </div>
              <div className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white rounded-lg p-6'>
                <p className='text-sm mb-4 font-semibold'>Hubungi kami untuk konsultasi gratis:</p>
                <a href='https://wa.me/6281329796998' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-2 px-6 rounded transition'>
                  Chat WhatsApp
                </a>
                <p className='text-xs text-gray-300 mt-3'>Kami siap membantu Anda 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

