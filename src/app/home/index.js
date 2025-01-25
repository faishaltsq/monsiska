'use client'

import React from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Konsultan Manajemen Mutu',
    description: 'Sertifikasi ISO 9001: 2015 untuk manajemen mutu optimal.'
  },
  {
    title: 'Pelatihan Akreditasi',
    description:
      'Pelatihan implementasi dokumen sistem manajemen mutu berbasis akreditasi.'
  },
  {
    title: 'Bimbingan Penelitian',
    description:
      'Menyediakan konsultasi, bimbingan, dan bantuan dalam pengerjaan penelitian Skripsi, Tesis, Disertasi.'
  },
  {
    title: 'Konsultasi Statistik',
    description:
      'Bimbingan dan pembelajaran kursus SPSS Statistik hingga materi.'
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
    title: 'Di Monsiskami Bisa Konsultasi Apa?',
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

const ServiceCard = ({ title, description }) => (
  <div className='bg-white shadow-lg rounded-lg p-6'>
    <h4 className='text-xl font-bold mb-2'>{title}</h4>
    <p>{description}</p>
  </div>
)

const ResearchConsultationCard = ({ title, image, description }) => (
  <div className='bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-300'>
    <div className='flex items-center mb-4 overflow-hidden hover:scale-105 transition duration-300'>
      <Image src={image} width={30} height={30} alt={`${title} Icon`} />
      <h4 className='text-xl font-bold ml-3'>{title}</h4>
    </div>
    <p>{description}</p>
  </div>
)

const InfoCard = ({ title, content }) => (
  <div className='bg-gray-100 p-5 rounded-lg shadow-md'>
    <h2 className='font-semibold text-xl text-gray-800'>{title}</h2>
    <ul className='space-y-1 mt-2 text-gray-600'>
      {content.map((item, idx) => (
        <li key={idx}>→ {item}</li>
      ))}
    </ul>
  </div>
)

export default function Home () {
  return (
    <div className='pt-28 p-10 flex flex-col lg:flex-row'>
      <div className='lg:w-3/4 pr-5'>
        <div className='flex items-center '>
          <Image
            src='/images/MONSISKAMI-removebg-preview.png'
            width={30}
            height={20}
            alt='Monsiskami Logo'
            priority
          />
          <h1 className='text-2xl font-bold text-teal-900'>onsiskami</h1>
        </div>
        <h2 className='text-justify text-lg text-gray-700 mt-5 mb-4'>
          Jasa Konsultan Manajemen Mutu untuk Rumah Sakit, Puskesmas, Klinik,
          dan Lembaga Pendidikan. Melayani dengan Profesional dan Performa yang
          maksimal untuk kebutuhan yang lebih efisien.
        </h2>
        <Image
          src='/images/konsultan.png'
          width={750}
          height={750}
          alt='Consultant Image'
          className='rounded-lg p-3 w-full h-auto object-contain'
          priority
        />
        <div className='p-5'>
          <p className='text-justify text-gray-600'>
            Dunia standar dan regulasi, akreditasi, tes, dan sertifikasi tidak
            sesederhana itu. Tapi mereka membuat hidup dan bisnis jauh lebih
            efisien dan aman. Bagaimana Monsiska MI menguji? Apa yang diperiksa
            oleh Monsiska MI? Anda akan menemukan banyak jawaban di sini.
          </p>
        </div>
        <section
          id='services'
          className='py-16 container mx-auto max-w-screen-lg'
        >
          <div className='container mx-auto'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Layanan Kami
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden hover:scale-105 transition duration-300'>
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
        <section id='research-consultation' className='py-16 bg-gray-50'>
          <div className='container mx-auto'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Jasa Konsultasi Penelitian
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {researchConsultations.map((consultation, index) => (
                <ResearchConsultationCard key={index} {...consultation} />
              ))}
            </div>
          </div>
        </section>
        <section id='consultation' className='py-10 bg-white'>
          <div className='container mx-auto'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Jasa Konsultasi Penelitian Dengan Jenis Metodenya
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 bg-slate-100 rounded-2xl p-5'>
              <ul className='list-disc pl-5 space-y-1 justify-center'>
                <li>Validitas & Reliabilitas Kuesioner</li>
                <li>Analisis Deskriptif</li>
                <li>Analisis Korelasi</li>
                <li>Olah Data / Analisis Regresi</li>
                <li>Path Analysis</li>
                <li>Analisis Data Time Series</li>
                <li>Statistik Parametrik & Non-parametrik</li>
              </ul>
              <ul className='list-disc pl-5 space-y-1 justify-center'>
                <li>Successive Interval Method</li>
                <li>Metode ANOVA</li>
                <li>Analisis Multivariate</li>
                <li>Structural Equation Modeling (SEM)</li>
                <li>Partial Least Square (PLS)</li>
                <li>Important Performance Analysis</li>
                <li>Factor Analysis</li>
              </ul>
            </div>
          </div>
        </section>
        <div className='bg-white y-12 mt-2'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center mb-6'>
              <Image
                src='/images/spss.png'
                width={40}
                height={30}
                alt='spss statistik'
              />
              <h1 className='text-3xl font-bold text-gray-900 ml-3'>
                Statistik & Analisis Data
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* SPSS Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-code'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi dukungan SPSS
                </h3>
                <p className='text-gray-600'>
                  Layanan konsultasi pengolahan data SPSS: Manfaatkan analisis
                  statistik canggih dari perangkat lunak SPSS IBM untuk menggali
                  peluang, meningkatkan efisiensi, dan mengurangi risiko. Cocok
                  untuk kebutuhan analisis kolaboratif, ilmu data perusahaan,
                  pembelajaran, analisis prediktif, atau pemodelan prediktif.
                </p>
              </div>
              {/* EViews Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-chart-bar'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi dukungan EVIEWS
                </h3>
                <p className='text-gray-600'>
                  EVIEWS menyediakan alat statistik, prediksi, dan pemodelan
                  yang canggih melalui antarmuka berbasis objek yang inovatif
                  dan mudah digunakan. Solusi ini dirancang untuk memenuhi
                  kebutuhan peneliti akademis, perusahaan, lembaga pemerintah,
                  dan pelajar.
                </p>
              </div>
              {/* AMOS Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-cubes'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi dukungan AMOS
                </h3>
                <p className='text-gray-600'>
                  AMOS adalah perangkat lunak statistik yang merupakan singkatan
                  dari "Analysis of Moment Structures" atau analisis struktur
                  momen. Perangkat ini dirancang untuk digunakan dalam Pemodelan
                  Persamaan Struktural, analisis jalur, dan analisis faktor
                  konfirmatori.
                </p>
              </div>
              {/* LISREL Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-cogs'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi dukungan LISREL
                </h3>
                <p className='text-gray-600'>
                  LISREL merupakan perangkat lunak yang digunakan untuk
                  pemodelan persamaan struktural, manipulasi data dan analisis
                  statistik dasar, pemodelan hierarkis dan non-linier, pemodelan
                  linier umum, dan pemodelan linier umum untuk data bertingkat.
                </p>
              </div>
              {/* SMART PLS Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-code'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi SMART PLS
                </h3>
                <p className='text-gray-600'>
                  SMART PLS adalah perangkat lunak Partial Least Squares (PLS)
                  yang memfasilitasi analisis jalur dan pemodelan persamaan
                  struktural secara efisien. Cocok bagi penelitian akademis,
                  korporat, dan individu untuk mengoptimalkan pendekatan
                  analisis data.
                </p>
              </div>
              {/* Training Section */}
              <div className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'>
                <div className='text-red-500 text-4xl mb-4'>
                  <i className='fas fa-users'></i>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Konsultasi dan Training
                </h3>
                <p className='text-gray-600'>
                  Hubungi kami untuk layanan konsultasi statistik profesional
                  menggunakan SPSS, EVIEWS, AMOS, atau Smart PLS. Kami siap
                  membantu sesuai kebutuhan Anda, baik untuk riset perkantoran,
                  penelitian organisasi, pelatihan, maupun jasa analisis data
                  penelitian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/4 pl-5 mt-10 lg:mt-0'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300'>
            <h2 className='font-semibold text-xl text-gray-800'>
              Ingin Bertanya?
            </h2>
            <Image
              src='/images/question.jpg'
              width={300}
              height={200}
              alt='Question Image'
              className='rounded-full p-3'
            />
            <p className='text-justify text-gray-600'>
              Ayo Konsultasikan Penelitianmu dengan kami!
            </p>
            <a
              href='https://wa.me/6281215416402'
              className='bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-2xl mt-4 block text-center'
            >
              Konsultasi Gratis!
            </a>
          </div>
          {additionalInfo.map((info, index) => (
            <InfoCard key={index} {...info} />
          ))}
          <div>
            <h2 className='font-semibold text-xl text-gray-800'>
              Dosen Yang akan membantu anda
            </h2>
            <div className='grid grid-cols-1 gap-4'>
              <div className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300'>
                <Image
                  src='/images/dosen.png'
                  width={300}
                  height={200}
                  alt='Basirun'
                  className='rounded-full p-3'
                />
                <h3 className='text-lg font-semibold text-gray-800'>
                  H. Basirun, M.Kes, 
                </h3>
                <p className='text-gray-600'>
                  Dosen Kesehatan dan manajemen Universitas Muhammadiyah Gombong
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
