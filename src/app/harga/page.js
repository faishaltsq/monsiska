import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Harga Jasa Konsultan & Olah Data | Monsiskami',
  description: 'Daftar harga layanan konsultasi penelitian, bimbingan, dan olah data statistik (SPSS, AMOS, PLS, Regresi) di Monsiskami.',
};

export default function HargaPage() {
  const whatsappNumber = '6281329796998';

  const packages = [
    {
      title: 'Penelitian Deskriptif Komparatif',
      price: 'Mulai Rp 750.000',
      description: 'Analisis uji beda (T-test, ANOVA) untuk membandingkan variabel antar kelompok.',
      features: [
        'Uji Validitas & Reliabilitas',
        'Uji Prasyarat (Normalitas, Homogenitas)',
        'Uji Beda (T-test / ANOVA)',
        'Output Interpretasi Lengkap',
        'Free Konsultasi & Revisi 2x'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Penelitian Deskriptif Komparatif.'
    },
    {
      title: 'Penelitian Deskriptif Korelasional',
      price: 'Mulai Rp 850.000',
      description: 'Analisis hubungan antar variabel menggunakan metode korelasi Pearson/Spearman.',
      features: [
        'Uji Validitas & Reliabilitas',
        'Uji Prasyarat (Normalitas, Linieritas)',
        'Uji Korelasi Bivariat',
        'Output Interpretasi Lengkap',
        'Free Konsultasi & Revisi 2x'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Penelitian Deskriptif Korelasional.'
    },
    {
      title: 'Analisis Regresi Linier (Berganda)',
      price: 'Mulai Rp 1.000.000',
      description: 'Uji pengaruh variabel independen terhadap dependen menggunakan regresi.',
      features: [
        'Uji Validitas & Reliabilitas',
        'Uji Asumsi Klasik Lengkap',
        'Uji Regresi Linier Berganda',
        'Uji Hipotesis (T, F, R-Square)',
        'Free Konsultasi & Revisi 2x'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Analisis Regresi Linier Berganda.',
      isPopular: true
    },
    {
      title: 'Analisis SEM (AMOS / PLS)',
      price: 'Mulai Rp 1.500.000',
      description: 'Analisis jalur (Path Analysis) dan pemodelan struktural kompleks.',
      features: [
        'Outer Model (Validitas Konvergen/Diskriminan)',
        'Inner Model (R-Square, Q-Square)',
        'Uji Hipotesis Jalur (Bootstrapping)',
        'Uji Efek Mediasi/Moderasi',
        'Free Konsultasi & Revisi 2x'
      ],
      whatsappText: 'Halo, saya ingin bertanya tentang Paket Analisis SEM (AMOS/PLS).'
    }
  ];

  return (
    <div className='pt-24 pb-16 bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <section className='text-center px-4 mb-16'>
        <div className='container mx-auto max-w-4xl'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#1a3a52] mb-6'>
            Pilihan Paket Layanan
          </h1>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Investasi terbaik untuk kelancaran penelitian Anda. Pilih paket sesuai dengan metode analisis yang Anda butuhkan. Kami siap membantu hingga tuntas.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='px-4'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 relative flex flex-col h-full border ${pkg.isPopular ? 'border-[#2563eb] shadow-xl transform md:-translate-y-2' : 'border-gray-200 shadow-sm hover:shadow-lg hover:border-[#2563eb]/50'} transition-all duration-300`}
              >
                {pkg.isPopular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md'>
                    Paling Diminati
                  </div>
                )}
                
                <h3 className='text-xl font-bold text-[#1a3a52] mb-2'>{pkg.title}</h3>
                <p className='text-gray-500 text-sm mb-6 min-h-[40px]'>{pkg.description}</p>
                
                <div className='mb-6 pb-6 border-b border-gray-100'>
                  <span className='text-3xl font-extrabold text-[#1a3a52]'>{pkg.price}</span>
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
                  className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors duration-200 ${pkg.isPopular ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]' : 'bg-blue-50 text-[#2563eb] hover:bg-blue-100'}`}
                >
                  Konsultasi Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className='px-4 mt-16'>
        <div className='container mx-auto max-w-4xl'>
          <div className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 !text-white'>Butuh Bimbingan Full dari Awal?</h2>
            <p className='text-gray-200 mb-8 max-w-2xl mx-auto'>
              Selain jasa olah data, kami juga melayani konsultasi penyusunan proposal, skripsi, tesis, dan disertasi dari awal hingga simulasi sidang. Harga menyesuaikan dengan tingkat kesulitan dan jenjang pendidikan.
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin konsultasi mengenai bimbingan full penelitian saya.')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white text-[#1a3a52] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-200'
            >
              Hubungi Admin via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
