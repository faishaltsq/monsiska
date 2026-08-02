'use client'

import BookForm from '../../components/BookForm'

export default function NewBookPage() {
  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-[#1a3a52] mb-8'>Upload Buku / Dokumen Baru</h1>
        <BookForm isEdit={false} />
      </div>
    </div>
  )
}
