'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-[#1a3a52]'>Admin Dashboard</h1>
            <p className='text-gray-600 mt-2'>Selamat datang. Silakan pilih menu untuk mengelola konten website.</p>
          </div>
          <button onClick={handleLogout} className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition shadow-sm font-semibold'>
            Logout
          </button>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Card Blog */}
          <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition'>
            <div className='p-8'>
              <div className='w-14 h-14 bg-blue-100 text-[#2563eb] rounded-lg flex items-center justify-center mb-6'>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
              </div>
              <h2 className='text-2xl font-bold text-[#1a3a52] mb-3'>Artikel Blog</h2>
              <p className='text-gray-600 mb-8'>Kelola postingan blog, edukasi, dan tutorial. Tambah, edit, atau hapus artikel dengan rich-text editor.</p>
              
              <div className='flex space-x-4'>
                <Link href='/admin/blog' className='bg-[#2563eb] text-white px-4 py-2 rounded-md hover:bg-[#1d4ed8] transition font-medium w-full text-center'>
                  Kelola Artikel
                </Link>
                <Link href='/admin/blog/new' className='bg-blue-50 text-[#2563eb] px-4 py-2 rounded-md hover:bg-blue-100 transition font-medium text-center border border-blue-200'>
                  + Tulis Baru
                </Link>
              </div>
            </div>
          </div>

          {/* Card Buku/Dokumen */}
          <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition'>
            <div className='p-8'>
              <div className='w-14 h-14 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6'>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
              </div>
              <h2 className='text-2xl font-bold text-[#1a3a52] mb-3'>Perpustakaan Dokumen</h2>
              <p className='text-gray-600 mb-8'>Kelola file PDF/Word ke dalam folder-folder buku penelitian. Mendukung upload banyak file sekaligus.</p>
              
              <div className='flex space-x-4'>
                <Link href='/admin/buku' className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-medium w-full text-center'>
                  Kelola Folder
                </Link>
                <Link href='/admin/buku/bulk' className='bg-green-50 text-green-700 px-4 py-2 rounded-md hover:bg-green-100 transition font-medium text-center border border-green-200'>
                  + Bulk Upload
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
