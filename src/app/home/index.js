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
    title: 'Di Monsiska MI Bisa Konsultasi Apa?',
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
    <div className='pt-28 p-10 flex flex-col lg:flex-row'>
      <div className='lg:w-3/4 pr-5'>
        <div className='flex items-center justify-center'>
          <Image
            src='/images/MONSISKAMI-removebg-preview.png'
            width={30}
            height={20}
            alt='Monsiska MI Logo'
            priority
          />
          <h1 className='text-2xl font-bold text-teal-900 '>onsiska MI</h1>
        </div>
        <h2 className='text-justify text-lg text-teal-900 mt-5 mb-4'>
          Jasa Konsultan Manajemen Mutu untuk Rumah Sakit, Puskesmas, Klinik,
          dan Lembaga Pendidikan. Melayani dengan Profesional dan Performa yang
          maksimal untuk kebutuhan yang lebih efisien.
        </h2>
        <div className='flex justify-center'>
          <Image
            src='/images/konsultan.png'
            width={750}
            height={750}
            alt='Consultant Image'
            className='rounded-lg p-3 w-full h-auto object-contain'
            priority
          />
        </div>
        <div className='p-5'>
          <p className='text-justify text-teal-800'>
            Dunia standar dan regulasi, akreditasi, tes, dan sertifikasi tidak
            sesederhana itu. Tapi mereka membuat hidup dan bisnis jauh lebih
            efisien dan aman. Bagaimana Monsiska MI menguji? Apa yang diperiksa
            oleh Monsiska MI? Anda akan menemukan jawaban di sini.
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
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'
                >
                  <h3 className='text-lg font-bold text-teal-900 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-teal-800'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='research-consultation'>
          <div className='container mx-auto'>
            <h3 className='text-3xl font-bold text-center mb-8'>
              Jenis Konsultasi Penelitian
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {researchConsultations.map((consultation, index) => (
                <div
                  key={index}
                  className='bg-white shadow-md rounded-lg p-6 overflow-hidden hover:scale-105 transition duration-300'
                >
                  <div className='flex items-center justify-center'>
                    <Image
                      src={consultation.image}
                      width={30}
                      height={30}
                      alt={consultation.title}
                    />
                    <h3 className='text-lg ml-2 font-bold text-teal-900 mb-2'>
                      {consultation.title}
                    </h3>
                  </div>
                  <p className='text-teal-900'>{consultation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='consultation' className='py-10 bg-white'>
          <div className='container mx-auto'>
            <div className='flex items-center justify-center mb-6'>
              <Image
                src='/images/research.png'
                width={40}
                height={30}
                alt='Research Image'
                className='mr-3'
              />
              <h1 className='text-3xl font-bold text-teal-900'>
                Konsultasi Penelitian Dengan Jenis Metodenya
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 bg-slate-100 rounded-2xl p-5'>
              <ul className='list-disc pl-5 space-y-1 justify-center'>
                <li>Validitas & Reliabilitas Kuesioner</li>
                <li>Analisis Deskriptif</li>
                <li>Analisis Korelasi</li>
                <li>Olah Data / Analisis Regresi</li>
                <li>Path Analysis</li>
                <li>Analisis Data Time Series</li>
                <li>Statistik Parametrik & Non-parametrik</li>
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
                className='mr-3'
              />
              <h1 className='text-3xl font-bold text-teal-900'>
                Statistik & Analisis Data
              </h1>
            </div>
            <div className=' justify-center gap-8 bg-slate-100 rounded-2xl p-5'>
              <ul className='list-disc pl-5 space-y-1 justify-center'>
                <li>Konsultasi dukungan SPSS</li>
                <li>Konsultasi dukungan EVIEWS</li>
                <li>Konsultasi dukungan AMOS</li>
                <li>Konsultasi dukungan LISREL</li>
                <li>Konsultasi SMART PLS</li>
                <li>Konsultasi dan Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/4 pl-5 mt-10 lg:mt-0'>
        <div className='grid grid-cols-1 gap-4'>
          <div className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300'>
            <h2 className='font-semibold text-xl text-teal-900'>
              Ingin Bertanya?
            </h2>
            <Image
              src='/images/question.jpg'
              width={300}
              height={200}
              alt='Question Image'
              className='rounded-full p-3 hover:scale-105 transition-transform'
            />
            <p className='text-justify text-teal-800'>
              Ayo Konsultasikan Penelitianmu dengan kami!
            </p>
            <a
              href='https://wa.me/6281329796998'
              className='bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-2xl mt-4 block text-center'
            >
              Konsultasi Gratis!
            </a>
          </div>
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300'
            >
              <h2 className='font-semibold text-xl text-teal-900'>
                {info.title}
              </h2>
              <ul className='list-disc pl-5 space-y-1 mt-2 text-teal-800'>
                {info.content.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300'>
            <h2 className='font-semibold text-xl text-teal-900'>
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
                <h3 className='text-lg font-semibold text-teal-900'>
                Dr. H. Muhammad Basirun Al Ummah, M.Kes.
                </h3>
                <p className='text-teal-800'>
                  Dosen Kesehatan dan manajemen Universitas Muhammadiyah Gombong
                </p>
              </div>
            </div>
            <div className='bg-white p-5 rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300 mt-4'>
              <h2 className='font-semibold text-xl text-teal-900'>
                Office Address
              </h2>
              <ul className='list-disc pl-5 space-y-1 mt-2 text-teal-900'>
                <li>
                  <strong>Kebumen:</strong> Jl. Candiwulan Ds Mangli RT 01/ RW
                  01, Kec. Kuwarasan, Kebumen-Jawa Tengah 54366
                </li>
                <li>
                  <strong>Batam:</strong> Perumahan Bida Asri 3, Blok A2 No 9,
                  Batu besar, Nongsa, Kota Batam-Kepulauan Riau, 29465
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
