import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Monitor, Award, BookOpen } from 'lucide-react'

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
  </svg>
);

export const metadata = {
  title: 'Portfolio Monsiskami - Lebih dari 5 Tahun Berpengalaman',
  description: 'Lihat portfolio Monsiskami dalam memberikan jasa konsultasi penelitian, pelatihan akreditasi, dan manajemen mutu. Lebih dari 5 tahun melayani berbagai klien di Indonesia.',
  keywords: 'portfolio monsiskami, pengalaman konsultan, hasil kerja konsultasi, pelatihan akreditasi, manajemen mutu, seminar',
  openGraph: {
    title: 'Portfolio Monsiskami - Lebih dari 5 Tahun Berpengalaman',
    description: 'Lihat portfolio Monsiskami dalam memberikan jasa konsultasi penelitian, pelatihan akreditasi, dan manajemen mutu.',
    url: 'https://monsiskami.com/portfolio',
    siteName: 'Monsiskami',
    images: [{ url: '/images/seminar-rs.png', width: 800, height: 600, alt: 'Portfolio Monsiskami' }],
    locale: 'id_ID',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const liveApps = [
  {
    id: 'sim-akreditasi',
    title: 'SIM Akreditasi RS Monsiskami',
    subtitle: 'Sistem Informasi Manajemen Akreditasi Rumah Sakit',
    description:
      'Aplikasi manajemen akreditasi rumah sakit berbasis KARS dengan fitur matriks PDCA 7-kolom, manajemen dokumen RDWOS, auto-scoring, manajemen risiko, 13 role pengguna, dan portal tenaga kesehatan.',
    tech: ['Django', 'PostgreSQL', 'Supabase', 'Railway', 'Bootstrap 5'],
    url: 'https://sim-akreditasi-web-production.up.railway.app',
    github: 'https://github.com/faishaltsq/sim-akreditasi-django',
    screenshot: '/images/sim-akreditasi-screenshot.png',
    badge: 'Sistem Akreditasi',
    color: 'from-blue-600 to-blue-800',
    icon: Award,
  },
  {
    id: 'sim-ktkl',
    title: 'SIM-KTKL',
    subtitle: 'Sistem Informasi Manajemen Komite Tenaga Kesehatan Lainnya',
    description:
      'Aplikasi web untuk mengelola data Kredensial, Evaluasi OPPE, Mutu Layanan Klinis, Etik & Disiplin, serta Sekretariat Komite Tenaga Kesehatan Lainnya di rumah sakit.',
    tech: ['Django', 'PostgreSQL', 'Bootstrap 5', 'Railway', 'WhiteNoise'],
    url: 'https://sim-ktkl-production.up.railway.app',
    github: 'https://github.com/faishaltsq/sim-ktkl',
    screenshot: '/images/sim-ktkl-screenshot.png',
    badge: 'Manajemen KTKL',
    color: 'from-teal-600 to-teal-800',
    icon: BookOpen,
  },
]

const portfolioItems = [
  {
    id: 1,
    title: 'Seminar Akreditasi KAI',
    description: 'Seminar yang memberikan pemahaman mendalam tentang proses akreditasi KAI untuk meningkatkan mutu layanan.',
    image: '/images/seminar-rs.png',
  },
  {
    id: 2,
    title: 'Workshop Manajemen Mutu',
    description: 'Pelatihan intensif tentang implementasi ISO 9001:2015 untuk manajemen mutu yang lebih baik.',
    image: '/images/konsultan.png',
  },
  {
    id: 3,
    title: 'Pelatihan Manajemen Fasilitas Puskesmas Tegal',
    description: 'Pelatihan tentang manajemen fasilitas dan keselamatan kerja untuk meningkatkan efisiensi operasional.',
    image: '/images/IMG-20250716-WA0009.jpg',
  },
  {
    id: 4,
    title: 'Pembelajaran Software Statistik',
    description: 'Kursus penguasaan software statistik seperti SPSS, EVIEWS, dan AMOS untuk analisis data yang efektif.',
    image: '/images/spss-course.jpg',
  },
  { id: 5, image: '/images/portfolio1.jpg', title: 'MONSISKAMI' },
  { id: 6, image: '/images/portfolio2.jpg', title: 'MONSISKAMI' },
  { id: 7, image: '/images/portfolio3.jpg', title: 'MONSISKAMI' },
  { id: 8, image: '/images/portfolio4.jpg', title: 'MONSISKAMI' },
  { id: 9, image: '/images/portfolio5.jpg', title: 'MONSISKAMI' },
  { id: 10, image: '/images/portfolio6.jpg', title: 'MONSISKAMI' },
]

const PortfolioItem = ({ item }) => (
  <div className='group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>
    <div className='relative overflow-hidden h-52 bg-gray-100'>
      <Image
        src={item.image}
        alt={item.title || 'Portfolio Image'}
        fill
        className='object-cover group-hover:scale-105 transition-transform duration-500'
        loading='lazy'
      />
    </div>
    <div className='p-5'>
      <h3 className='text-base font-bold text-[#1a3a52] mb-1'>{item.title}</h3>
      {item.description && <p className='text-gray-500 text-sm leading-relaxed'>{item.description}</p>}
    </div>
  </div>
)

export default function Portfolio() {
  return (
    <div className='pt-24 pb-16'>
      {/* Hero */}
      <section className='relative bg-[#0f283d] text-white py-20 px-4 overflow-hidden border-b-[6px] border-[#2563eb]'>
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='max-w-3xl'>
            <div className='inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#2563eb]/20 border border-[#2563eb]/30 rounded text-sm font-semibold tracking-wide text-blue-100 uppercase'>
              <Monitor className='w-4 h-4' />
              Kisah Sukses
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight'>Portofolio Kami</h1>
            <p className='text-lg md:text-xl text-gray-300 font-light leading-relaxed'>
              Lebih dari 5 tahun membantu klien mencapai kesuksesan penelitian, manajemen mutu, dan pengembangan sistem informasi kesehatan.
            </p>
          </div>
        </div>
      </section>

      {/* Live Apps Section */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-14'>
            <div className='inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100'>
              <Monitor className='w-4 h-4' />
              Aplikasi Live
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>Produk Digital yang Kami Bangun</h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto mb-4' />
            <p className='text-gray-500 max-w-2xl mx-auto'>Sistem informasi berbasis web yang dikembangkan untuk mendukung operasional rumah sakit dan institusi kesehatan</p>
          </div>

          <div className='space-y-16'>
            {liveApps.map((app, idx) => (
              <div
                key={app.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Screenshot */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group'>
                    {/* Browser bar */}
                    <div className='bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2'>
                      <div className='flex gap-1.5'>
                        <div className='w-3 h-3 rounded-full bg-red-400' />
                        <div className='w-3 h-3 rounded-full bg-yellow-400' />
                        <div className='w-3 h-3 rounded-full bg-green-400' />
                      </div>
                      <div className='flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2 truncate font-mono'>
                        {app.url}
                      </div>
                    </div>
                    <div className='relative h-72 bg-gray-50'>
                      <Image
                        src={app.screenshot}
                        alt={app.title}
                        fill
                        className='object-cover object-top group-hover:scale-105 transition-transform duration-700'
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 bg-gradient-to-r ${app.color}`}>
                    <app.icon className='w-3.5 h-3.5' />
                    {app.badge}
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#1a3a52] mb-2'>{app.title}</h3>
                  <p className='text-[#2563eb] font-medium mb-4 text-sm'>{app.subtitle}</p>
                  <p className='text-gray-600 leading-relaxed mb-6'>{app.description}</p>

                  {/* Tech stack */}
                  <div className='flex flex-wrap gap-2 mb-8'>
                    {app.tech.map(t => (
                      <span key={t} className='text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium border border-gray-200'>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className='flex flex-wrap gap-3'>
                    <Link
                      href={app.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md shadow-blue-200 hover:-translate-y-0.5'
                    >
                      <ExternalLink className='w-4 h-4' />
                      Lihat Aplikasi
                    </Link>
                    <Link
                      href={app.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1a3a52] font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:-translate-y-0.5'
                    >
                      <GithubIcon className='w-4 h-4' />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio — Kegiatan */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4'>Kegiatan & Pelatihan</h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto mb-4' />
            <p className='text-gray-500 max-w-xl mx-auto'>Dokumentasi kegiatan workshop, seminar, dan pelatihan yang telah kami selenggarakan</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {portfolioItems.slice(0, 4).map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl'>
          <h2 className='text-3xl font-bold text-[#1a3a52] text-center mb-14'>Galeri Lengkap</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {portfolioItems.slice(4).map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 px-4 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white'>
        <div className='container mx-auto max-w-7xl text-center'>
          <h2 className='text-3xl font-bold mb-4 text-white'>Tertarik Bekerja Sama?</h2>
          <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
            Hubungi kami hari ini untuk mendiskusikan kebutuhan penelitian, konsultasi, atau pengembangan sistem informasi Anda
          </p>
          <a
            href='https://wa.me/6281329796998'
            className='inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition shadow-lg shadow-blue-900/30 hover:-translate-y-0.5'
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  )
}
