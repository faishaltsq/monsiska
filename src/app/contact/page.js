'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Pesan berhasil dikirim!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || 'Gagal mengirim pesan.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Hubungi Kami</h1>
          <p className='text-lg text-gray-200'>Kami siap membantu Anda mencapai kesuksesan penelitian</p>
        </div>
      </section>

      <div className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          {/* Contact Methods */}
          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-gray-50 rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>📱</div>
              <h2 className='text-xl font-bold text-[#1a3a52] mb-3'>WhatsApp</h2>
              <p className='text-gray-600 mb-4'>Hubungi kami melalui WhatsApp untuk konsultasi cepat</p>
              <a
                href='https://wa.me/628117784099'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-[#2563eb] font-bold hover:text-[#1d4ed8] transition'
              >
                +62 811-7784-099 →
              </a>
            </div>

            <div className='bg-gray-50 rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>📧</div>
              <h2 className='text-xl font-bold text-[#1a3a52] mb-3'>Email</h2>
              <p className='text-gray-600 mb-4'>Kirim pesan detail melalui email kami</p>
              <a
                href='mailto:monsiskami@gmail.com'
                className='inline-block text-[#2563eb] font-bold hover:text-[#1d4ed8] transition'
              >
                monsiskami@gmail.com →
              </a>
            </div>

            <div className='bg-gray-50 rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition'>
              <div className='text-5xl mb-4'>📷</div>
              <h2 className='text-xl font-bold text-[#1a3a52] mb-3'>Instagram</h2>
              <p className='text-gray-600 mb-4'>Ikuti kami untuk update terbaru dan portofolio</p>
              <a
                href='https://www.instagram.com/monsiskami'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-[#2563eb] font-bold hover:text-[#1d4ed8] transition'
              >
                @monsiskami →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className='max-w-2xl mx-auto'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-[#1a3a52] mb-2'>Kirim Pesan Kepada Kami</h2>
              <p className='text-gray-600'>Isi form di bawah untuk konsultasi gratis</p>
            </div>

            <form className='bg-gray-50 rounded-lg p-8 border border-gray-200' onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label htmlFor='name' className='block text-[#1a3a52] font-semibold mb-2'>
                  Nama Anda
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Masukkan nama lengkap'
                  className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='email' className='block text-[#1a3a52] font-semibold mb-2'>
                  Email Anda
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='nama@example.com'
                  className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='message' className='block text-[#1a3a52] font-semibold mb-2'>
                  Pesan
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Jelaskan kebutuhan Anda...'
                  rows='6'
                  className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563eb] bg-white'
                  aria-label='Pesan Anda'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-6 rounded-lg transition duration-300'
                disabled={isLoading}
              >
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>

              {status && (
                <p className={`mt-4 text-center font-semibold ${status.includes('berhasil') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-7xl grid md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg p-8 shadow-sm border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#1a3a52] mb-4'>Kantor Kebumen</h3>
            <p className='text-gray-700 mb-2'>Jl. Candiwulan Ds Mangli RT 01/ RW 01</p>
            <p className='text-gray-700'>Kec. Kuwarasan, Kebumen-Jawa Tengah 54366</p>
          </div>
          <div className='bg-white rounded-lg p-8 shadow-sm border border-gray-200'>
            <h3 className='text-2xl font-bold text-[#1a3a52] mb-4'>Kantor Batam</h3>
            <p className='text-gray-700 mb-2'>Perumahan Bida Asri 3, Blok A2 No 9</p>
            <p className='text-gray-700'>Batu Besar, Nongsa, Kota Batam-Kepulauan Riau, 29465</p>
          </div>
        </div>
      </section>
    </div>
  );
}
