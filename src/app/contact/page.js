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
    <div className='pt-28 p-10 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-center mb-8 text-sky-500'>Hubungi Kami</h1>
      <div className='container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-gray-600 mb-8'>
          Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui
          informasi di bawah ini atau kirimkan pesan langsung melalui form
          kontak.
        </p>
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/contact-phone.png'
              alt='Phone'
              width={100}
              height={100}
              className='mb-4'
            />
            <h2 className='text-xl font-semibold text-sky-500 mb-2'>WhatsApp</h2>
            <a
              href='https://wa.me/628117784099'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sky-900 hover:underline underline'
            >
              +62 811-7784-099 (Halo MONSISKAMI)
            </a>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/contact-email.png'
              alt='Email'
              width={100}
              height={100}
              className='mb-4'
            />
            <h2 className='text-xl font-semibold text-sky-500 mb-2'>Email</h2>
            <a
              href='mailto:monsiskami@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sky-900 hover:underline underline'
            >
              monsiskami@gmail.com
            </a>
          </div>
        </div>

        <form className='bg-white shadow-lg rounded-lg p-8' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
              Nama Anda
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
              Email Anda
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='yourname@example.com'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='block text-gray-700 font-semibold mb-2'>
              Pesan
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Type your message here'
              rows='5'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400'
              aria-label='Pesan Anda'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg w-full'
            disabled={isLoading}
          >
            {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
          {status && (
            <p className={`mt-4 text-center ${status.includes('berhasil') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
