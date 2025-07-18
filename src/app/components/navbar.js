/* eslint-disable react/display-name */
'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
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
    <div className="bg-sky-200 font-bold p-2 sm:p-3 shadow-lg fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 cursor-pointer px-2 py-1 rounded hover:bg-sky-200 transition duration-300"
        >
          <div className="flex items-center overflow-hidden hover:scale-105 transition duration-300">
            <Image
              src="/images/MONSISKAMI-removebg-preview.png"
              width={30}
              height={20}
              alt="Monsiskami Logo"
            />
            <h1 className="text-2xl font-bold text-sky-900 ">onsiska MI</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <HamburgerIcon isOpen={menuOpen} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          aria-label="Main Navigation"
          className={`absolute lg:static bg-sky-200 lg:bg-transparent w-full lg:w-auto left-0 top-full lg:flex lg:space-x-6 items-center transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'max-h-screen' : 'max-h-0'
          } lg:max-h-none`}
        >
          {navigationLinks.map((link) => (
            <li key={link.name} className="border-b lg:border-none">
              <Link
                href={link.path}
                className="block px-4 py-3 lg:px-1 lg:py-4 hover:bg-sky-300 rounded transition duration-300 text-sky-900 font-bold"
                onClick={() => setMenuOpen(false)} // Close menu on navigation
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
