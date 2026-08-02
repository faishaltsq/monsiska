'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import BookForm from '../../../components/BookForm'

export default function EditBookPage() {
  const params = useParams()
  const router = useRouter()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`/api/admin/books/${params.id}`)
        if (res.ok) {
          const data = await res.json()
          setBook(data)
        } else {
          router.push('/admin/buku')
        }
      } catch (err) {
        console.error(err)
        router.push('/admin/buku')
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [params.id, router])

  if (loading) return <div className="min-h-screen pt-24 text-center">Loading...</div>
  if (!book) return null

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-[#1a3a52] mb-8'>Edit Data Buku</h1>
        <BookForm initialData={book} isEdit={true} />
      </div>
    </div>
  )
}
