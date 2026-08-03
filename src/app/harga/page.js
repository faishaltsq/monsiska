import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Harga Jasa Konsultan & Olah Data | Monsiskami',
  description: 'Daftar harga layanan konsultasi penelitian, bimbingan Skripsi/Tesis/Disertasi, dan olah data statistik di Monsiskami.',
};

export default function HargaPage() {
  const whatsappNumber = '6281329796998';

  const bimbinganPackages = [
    {
      title: 'Bimbingan Skripsi (S1)',
      price: 'Rp 3.000.000',
      description: 'Pendampingan komprehensif dari pencarian judul hingga lulus sidang untuk sarjana.',
      features: [
        'Konsultasi Judul & Proposal',
        'Bimbingan Penyusunan Bab 1-3',
        'Olah Data & Pembahasan Bab 4-5',
        'Review Bebas Plagiasi',
        'Simulasi & Persiapan Sidang'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Bimbingan Full Skripsi (S1).'
    },
    {
      title: 'Bimbingan Tesis (S2)',
      price: 'Rp 5.000.000',
      description: 'Konsultasi penelitian tingkat magister dengan analisis dan metodologi mendalam.',
      features: [
        'Konsultasi Matriks & Proposal Tesis',
        'Bimbingan Bab 1-3 Komprehensif',
        'Olah Data Lanjut (SPSS/SEM/PLS)',
        'Bimbingan Pembahasan & Publikasi',
        'Simulasi & Persiapan Sidang Tesis'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Bimbingan Full Tesis (S2).',
      isPopular: true
    },
    {
      title: 'Bimbingan Disertasi (S3)',
      price: 'Rp 9.000.000',
      description: 'Pendampingan tingkat doktoral untuk pencarian novelty dan publikasi internasional.',
      features: [
        'Eksplorasi Novelty Penelitian',
        'Konsultasi Proposal Disertasi',
        'Analisis Data Kompleks',
        'Pendampingan Publikasi Scopus',
        'Persiapan Ujian Tertutup/Terbuka'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Bimbingan Full Disertasi (S3).'
    }
  ];

  const packages = [
    {
      title: 'Olah Data SPSS',
      price: 'Rp 1.500.000',
      description: 'Analisis statistik parametrik/non-parametrik dan regresi menggunakan SPSS.',
      features: [
        'Input & Cleaning Data',
        'Uji Validitas & Reliabilitas',
        'Uji Asumsi Klasik/Prasyarat',
        'Output SPSS & Interpretasi Lengkap',
        'Free Konsultasi & Revisi'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Jasa Olah Data SPSS.'
    },
    {
      title: 'Olah Data SEM (AMOS/PLS)',
      price: 'Rp 3.000.000',
      description: 'Analisis jalur (Path Analysis) dan pemodelan struktural tingkat lanjut.',
      features: [
        'Outer Model & Inner Model',
        'Validitas Konvergen & Diskriminan',
        'Uji Hipotesis Jalur & Bootstrapping',
        'Output AMOS/PLS & Interpretasi',
        'Free Konsultasi & Revisi'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Jasa Olah Data SEM (AMOS/PLS).'
    },
    {
      title: 'Proposal & Bab 4-5 Tesis (S2)',
      price: 'Mulai Rp 2.000.000',
      description: 'Bantuan parsial penulisan proposal atau pembahasan hasil penelitian tingkat magister.',
      features: [
        'Penulisan Proposal: Rp 3.000.000',
        'Penulisan Bab 4 & 5: Rp 2.000.000',
        '30+ Jurnal Reputasi Terpilih',
        'Manajemen Referensi Mendeley',
        'Sesuai Panduan Kampus'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Jasa Pembuatan Proposal / Bab 4-5 Tesis.'
    },
    {
      title: 'Proposal & Bab 4-5 Disertasi (S3)',
      price: 'Rp 4.000.000',
      description: 'Bantuan parsial penulisan proposal atau pembahasan hasil penelitian tingkat doktoral.',
      features: [
        'Penulisan Proposal: Rp 4.000.000',
        'Penulisan Bab 4 & 5: Rp 4.000.000',
        '30+ Jurnal Reputasi Terpilih',
        'Manajemen Referensi Mendeley',
        'Sesuai Panduan Kampus'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Jasa Pembuatan Proposal / Bab 4-5 Disertasi.'
    }
  ];

  return (
    <div className='pt-24 pb-16 bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <section className='text-center px-4 mb-16'>
        <div className='container mx-auto max-w-4xl'>
          <h1 className='text-3xl md:text-5xl font-extrabold text-[#1a3a52] mb-4 md:mb-6'>
            Pilihan Paket Layanan
          </h1>
          <p className='text-base md:text-lg text-gray-600 leading-relaxed px-2'>
            Investasi terbaik untuk kelancaran penelitian Anda. Pilih paket bimbingan full atau jasa olah data sesuai kebutuhan.
          </p>
        </div>
      </section>

      {/* Bimbingan Skripsi, Tesis, Disertasi Cards */}
      <section className='px-4 mb-20'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-4'>Paket Bimbingan Full</h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
            <p className='text-gray-600 mt-4'>Pendampingan dari awal pembuatan proposal hingga lulus sidang.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {bimbinganPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 relative flex flex-col h-full border ${pkg.isPopular ? 'border-[#2563eb] shadow-xl transform md:-translate-y-2' : 'border-gray-200 shadow-sm hover:shadow-lg hover:border-[#2563eb]/50'} transition-all duration-300`}
              >
                {pkg.isPopular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2563eb] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider py-1 px-3 md:px-4 rounded-full shadow-md whitespace-nowrap'>
                    Paling Banyak Diambil
                  </div>
                )}
                
                <h3 className='text-xl font-bold text-[#1a3a52] mb-2'>{pkg.title}</h3>
                <p className='text-gray-500 text-sm mb-6 min-h-[40px]'>{pkg.description}</p>
                
                <div className='mb-6 pb-6 border-b border-gray-100'>
                  <span className='text-2xl lg:text-3xl font-extrabold text-[#1a3a52]'>{pkg.price}</span>
                </div>

                <ul className='space-y-4 mb-8 flex-grow'>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <svg className='w-5 h-5 text-[#2563eb] mr-3 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                      </svg>
                      <span className='text-gray-700 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors duration-200 ${pkg.isPopular ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]' : 'bg-blue-50 text-[#2563eb] hover:bg-blue-100'}`}
                >
                  Konsultasi Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olah Data Cards */}
      <section className='px-4'>
        <div className='container mx-auto max-w-7xl'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-[#1a3a52] mb-4'>Jasa Olah Data & Layanan Parsial</h2>
            <div className='w-16 h-1 bg-[#2563eb] mx-auto'></div>
            <p className='text-gray-600 mt-4'>Bantuan spesifik untuk olah data atau penulisan bab tertentu (Proposal / Bab 4-5).</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className='bg-white rounded-2xl p-8 relative flex flex-col h-full border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#2563eb]/50 transition-all duration-300'
              >
                <h3 className='text-xl font-bold text-[#1a3a52] mb-2'>{pkg.title}</h3>
                <p className='text-gray-500 text-sm mb-6 min-h-[40px]'>{pkg.description}</p>
                
                <div className='mb-6 pb-6 border-b border-gray-100'>
                  <span className='text-2xl lg:text-3xl font-extrabold text-[#1a3a52]'>{pkg.price}</span>
                </div>

                <ul className='space-y-4 mb-8 flex-grow'>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start'>
                      <svg className='w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                      </svg>
                      <span className='text-gray-700 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full py-3 px-4 rounded-lg font-bold text-center transition-colors duration-200 bg-blue-50 text-[#2563eb] hover:bg-blue-100'
                >
                  Pesan Paket Ini
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
