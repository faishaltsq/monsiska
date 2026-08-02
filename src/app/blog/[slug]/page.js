'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function ArticleDetail() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch article by slug
        const res = await fetch(`/api/posts?slug=${params.slug}`)
        if (res.ok) {
          const data = await res.json()
          setArticle(data)
          
          // Fetch related articles (prioritaskan kategori sama, sisanya ambil terbaru)
          const resAll = await fetch('/api/posts')
          if (resAll.ok) {
            const allData = await resAll.json()
            const otherArticles = allData.filter(a => a.id !== data.id)
            
            // Cari yang kategorinya sama
            let related = otherArticles.filter(a => a.category === data.category)
            
            // Kalau kurang dari 3, tambahin artikel lain yang kategorinya beda
            if (related.length < 3) {
              const diffCategory = otherArticles.filter(a => a.category !== data.category)
              related = [...related, ...diffCategory].slice(0, 3)
            } else {
              related = related.slice(0, 3)
            }
            
            setRelatedArticles(related)
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [params.slug])

  if (loading) {
    return <div className="min-h-screen pt-24 text-center">Loading...</div>
  }

  if (!article) {
    return (
      <div className='pt-20 min-h-screen bg-white'>
        <div className='container mx-auto max-w-7xl px-4 py-16 text-center'>
          <h1 className='text-3xl font-bold text-[#1a3a52] mb-4'>Artikel Tidak Ditemukan</h1>
          <p className='text-gray-600 mb-8'>Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link href='/blog' className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-2 px-6 rounded-lg transition'>
            Kembali ke Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='pt-20 bg-white'>
              {/* Hero Section */}
        <section className='relative bg-[#0f283d] text-white py-16 px-4 overflow-hidden border-b border-gray-800'>
          <div className='absolute inset-0 opacity-[0.03]' style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
          <div className='container mx-auto max-w-4xl relative z-10'>
            <div className='mb-6'>
              <span className='inline-block text-xs font-bold uppercase tracking-wider bg-[#2563eb]/20 border border-[#2563eb]/30 text-blue-100 px-3 py-1.5 rounded'>
                {article.category}
              </span>
            </div>
            <h1 className='text-3xl md:text-5xl font-extrabold mb-6 leading-tight !text-white tracking-tight'>{article.title}</h1>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-300 text-sm font-medium'>
              <div className='flex items-center'>
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>{article.author}</span>
              </div>
              <div className='flex items-center'>
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className='flex items-center'>
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{article.read_time}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className='py-12 px-4 bg-white'>
          <div className='container mx-auto max-w-4xl'>
            <article className='prose prose-lg prose-blue max-w-none text-gray-700'>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {article.content}
              </ReactMarkdown>
            </article>

            {/* Related Articles Section */}
          <div className='mt-16 pt-8 border-t'>
            <h3 className='text-2xl font-bold text-[#1a3a52] mb-6'>Artikel Terkait Lainnya</h3>
            <div className='grid md:grid-cols-3 gap-6'>
              {relatedArticles.map(relatedArticle => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                  <div className='bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer h-full'>
                    <span className='text-xs font-semibold text-[#2563eb] bg-blue-50 px-2 py-1 rounded'>
                      {relatedArticle.category}
                    </span>
                    <h4 className='text-base font-bold text-[#1a3a52] mt-3 line-clamp-2 hover:text-[#2563eb]'>
                      {relatedArticle.title}
                    </h4>
                    <p className='text-xs text-gray-500 mt-2'>{relatedArticle.read_time}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-16 bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white rounded-lg p-8 text-center'>
            <h3 className='text-2xl font-bold mb-3 !text-white'>Butuh Konsultasi Lebih Lanjut?</h3>
            <p className='mb-6'>Hubungi tim expert kami untuk mendiskusikan topik ini lebih mendalam</p>
            <a
              href='https://wa.me/6281329796998'
              className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg transition'
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Back to Blog Link */}
      <section className='py-8 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-4xl'>
          <Link href='/blog' className='inline-flex items-center text-[#2563eb] font-semibold hover:text-[#1d4ed8] transition'>
            ← Kembali ke Blog
          </Link>
        </div>
      </section>
    </div>
  )
}

