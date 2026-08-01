'use client'

import PostForm from '../../components/PostForm'

export default function NewPostPage() {
  return (
    <div className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8 pb-12'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-[#1a3a52] mb-8'>Tulis Artikel Baru</h1>
        <PostForm isEdit={false} />
      </div>
    </div>
  )
}
