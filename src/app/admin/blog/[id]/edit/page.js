'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PostForm from '../../../components/PostForm'

export default function EditPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/admin/posts/${params.id}`)
        if (res.ok) {
          const data = await res.json()
          setPost(data)
        } else {
          router.push('/admin/blog')
        }
      } catch (err) {
        console.error(err)
        router.push('/admin/blog')
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [params.id, router])

  if (loading) return <div className="min-h-screen pt-24 text-center">Loading...</div>
  if (!post) return null

  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-[#1a3a52] mb-8'>Edit Artikel</h1>
        <PostForm initialData={post} isEdit={true} />
      </div>
    </div>
  )
}
