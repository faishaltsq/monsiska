'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminBlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/admin/posts')
        if (res.ok) {
          const data = await res.json()
          setPosts(data)
        } else if (res.status === 401) {
          router.push('/admin/login')
        }
      } catch (error) {
        console.error('Failed to fetch posts', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [router])

  const handleDelete = async (id) => {
    if (!confirm('Yakin ingin menghapus artikel ini?')) return
    
    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete post', error)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  if (loading) {
    return <div className="min-h-screen pt-24 px-4 text-center">Loading...</div>
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-[#1a3a52]'>Kelola Blog</h1>
          <div className='space-x-4'>
            <Link href='/admin/blog/new' className='bg-[#2563eb] text-white px-4 py-2 rounded-md hover:bg-[#1d4ed8] transition'>
              + Tulis Artikel Baru
            </Link>
            <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'>
              Logout
            </button>
          </div>
        </div>

        <div className='bg-white shadow overflow-hidden sm:rounded-md border border-gray-200'>
          <ul className='divide-y divide-gray-200'>
            {posts.length === 0 ? (
              <li className='px-6 py-12 text-center text-gray-500'>
                Belum ada artikel. Silakan buat artikel baru.
              </li>
            ) : (
              posts.map((post) => (
                <li key={post.id} className='px-6 py-4 flex items-center justify-between hover:bg-gray-50'>
                  <div className='flex-1 pr-4'>
                    <h3 className='text-lg font-medium text-[#1a3a52] truncate'>{post.title}</h3>
                    <div className='mt-1 flex items-center text-sm text-gray-500 space-x-4'>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{new Date(post.created_at).toLocaleDateString('id-ID')}</span>
                      <span>•</span>
                      <span className={post.published ? 'text-green-600' : 'text-gray-400'}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Link href={`/blog/${post.slug}`} target='_blank' className='text-gray-600 hover:text-gray-900'>
                      Lihat
                    </Link>
                    <Link href={`/admin/blog/${post.id}/edit`} className='text-blue-600 hover:text-blue-900'>
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(post.id)} className='text-red-600 hover:text-red-900'>
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
