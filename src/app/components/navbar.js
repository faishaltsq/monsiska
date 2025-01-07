'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
  const [penelitianOpen, setPenelitianOpen] = useState(false)
  const [statistikOpen, setStatistikOpen] = useState(false)
 
  return (
    <div className='bg-gray-900 text-white p-5 shadow-lg'>
      <nav className='container mx-auto flex justify-between items-center'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src='/images/graduation.png' width={50} height={50} alt='Logo' />
        <h1 className='text-2xl font-bold'>Monsiska.id</h1>
      </Link>
        <ul className='flex space-x-6 items-center'>
          <li>
            <Link href='/' className='px-3 py-2 hover:bg-gray-700 rounded'>
              Home
            </Link>
          </li>
          <li className='relative'>
            <button
              className='px-3 py-2 hover:bg-gray-700 rounded'
              onClick={() => setPenelitianOpen(!penelitianOpen)}
            >
              Penelitian
              <span className='ml-1'>▼</span>
            </button>
            {penelitianOpen && (
              <ul className='absolute bg-gray-800 mt-2 py-2 w-40 right-0 z-10 rounded shadow-lg'>
                <li>
                  <Link
                    href='/skripsi'
                    className='block px-4 py-2 hover:bg-gray-700'
                  >
                    Skripsi
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tesis'
                    className='block px-4 py-2 hover:bg-gray-700'
                  >
                    Tesis
                  </Link>
                </li>
                <li>
                  <Link
                    href='/disertasi'
                    className='block px-4 py-2 hover:bg-gray-700'
                  >
                    Disertasi
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className='relative'>
            <button
              className='px-3 py-2 hover:bg-gray-700 rounded'
              onClick={() => setStatistikOpen(!statistikOpen)}
            >
              Statistik
              <span className='ml-1'>▼</span>
            </button>
            {statistikOpen && (
              <ul className='absolute bg-gray-800 mt-2 py-2 w-40 right-0 z-10 rounded shadow-lg'>
                <li>
                  <Link
                    href='/spss'
                    className='block px-4 py-2 hover:bg-gray-700'
                  >
                    SPSS
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sem'
                    className='block px-4 py-2 hover:bg-gray-700'
                  >
                    SEM
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}
