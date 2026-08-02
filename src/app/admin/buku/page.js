'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminBukuList() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const res = await fetch('/api/admin/books')
      if (res.ok) {
        const data = await res.json()
        setBooks(data)
      }
    } catch (error) {
      console.error('Failed to fetch books', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Yakin ingin menghapus dokumen ini?')) return
    
    try {
      const res = await fetch(`/api/admin/books/${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        setBooks(books.filter(b => b.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete book', error)
    }
  }

  if (loading) return <div className="min-h-screen pt-24 px-4 text-center">Loading...</div>

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-[#1a3a52]'>Kelola Buku / Dokumen</h1>
          <div className='space-x-4'>
            <Link href='/admin/blog' className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition'>
              ← Kembali ke Artikel
            </Link>
            <Link href='/admin/buku/new' className='bg-[#2563eb] text-white px-4 py-2 rounded-md hover:bg-[#1d4ed8] transition'>
              + Upload File Baru
            </Link>
          </div>
        </div>

        <div className='bg-white shadow overflow-hidden sm:rounded-md border border-gray-200'>
          <ul className='divide-y divide-gray-200'>
            {books.length === 0 ? (
              <li className='px-6 py-12 text-center text-gray-500'>
                Belum ada file. Silakan upload buku/dokumen baru.
              </li>
            ) : (
              books.map((book) => (
                <li key={book.id} className='px-6 py-4 flex items-center justify-between hover:bg-gray-50'>
                  <div className='flex-1 pr-4 flex items-center space-x-4'>
                    <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-500 overflow-hidden">
                      {book.cover_url ? <img src={book.cover_url} className="w-full h-full object-cover" /> : 'No Cover'}
                    </div>
                    <div>
                      <h3 className='text-lg font-medium text-[#1a3a52]'>{book.title}</h3>
                      <div className='mt-1 flex items-center text-sm text-gray-500 space-x-4'>
                        <span className="font-semibold text-blue-600 uppercase">{book.file_type}</span>
                        <span>•</span>
                        <span>{new Date(book.created_at).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <a href={book.file_type === 'PDF' ? book.file_url : `https://docs.google.com/gview?url=${encodeURIComponent(book.file_url)}&embedded=true`} target='_blank' rel='noreferrer' className='text-gray-600 hover:text-gray-900'>
                      Lihat File
                    </a>
                    <button onClick={() => handleDelete(book.id)} className='text-red-600 hover:text-red-900'>
                      Hapus
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
