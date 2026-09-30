'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Portofolio', path: '/portfolio' },
  { name: 'Harga', path: '/harga' },
  { name: 'Blog', path: '/blog' },
  { name: 'Buku', path: '/buku' },
  { name: 'Hubungi Kami', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/80'>
      <nav className='container mx-auto px-4 py-3.5 flex justify-between items-center max-w-7xl'>
        <Link href='/' className='flex items-center gap-2.5 hover:opacity-80 transition' onClick={() => setMenuOpen(false)}>
          <Image
            src='/images/MONSISKAMI-removebg-preview.png'
            width={32}
            height={32}
            alt='Monsiskami Logo'
            className='h-auto'
          />
          <span className='text-xl font-bold text-[#1a3a52]'>Monsiskami</span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden lg:flex items-center gap-1'>
          {navigationLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.path}
                className='block px-4 py-2 rounded-lg text-[#1a3a52] font-medium hover:text-[#2563eb] hover:bg-blue-50 transition-all duration-200 text-sm'
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className='ml-2'>
            <a
              href='https://wa.me/6281329796998'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm py-2 px-5 rounded-lg transition-all duration-200'
            >
              Konsultasi Gratis
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden text-[#1a3a52] p-1 rounded-lg hover:bg-gray-100 transition'
          aria-label='Toggle Menu'
        >
          {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen border-t border-gray-200' : 'max-h-0'}`}
      >
        <ul className='bg-white px-4 py-2 space-y-1'>
          {navigationLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.path}
                className='block px-3 py-2.5 rounded-lg text-[#1a3a52] font-medium hover:text-[#2563eb] hover:bg-blue-50 transition-all duration-200'
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className='pt-2 pb-3'>
            <a
              href='https://wa.me/6281329796998'
              target='_blank'
              rel='noopener noreferrer'
              className='block text-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-2.5 px-5 rounded-lg transition'
              onClick={() => setMenuOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
