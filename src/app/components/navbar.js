/* eslint-disable react/display-name */
'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Portofolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Buku Penelitian', path: '/buku-penelitian' },
    { name: 'Hubungi Kami', path: '/contact' },
  ];

  const HamburgerIcon = memo(({ isOpen }) => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      )}
    </svg>
  ));

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/MONSISKAMI-removebg-preview.png"
              width={35}
              height={28}
              alt="Monsiskami Logo"
              className="h-auto"
            />
            <h1 className="text-xl font-bold text-[#1a3a52]">Monsiskami</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1a3a52] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <HamburgerIcon isOpen={menuOpen} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          aria-label="Main Navigation"
          className={`absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 top-full lg:flex lg:space-x-8 items-center transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-screen' : 'max-h-0'
          } lg:max-h-none border-t lg:border-t-0 border-gray-200`}
        >
          {navigationLinks.map((link) => (
            <li key={link.name} className="border-b lg:border-none">
              <Link
                href={link.path}
                className="block px-4 py-3 lg:px-0 lg:py-0 hover:text-[#2563eb] text-[#1a3a52] font-medium transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
