'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

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
          
          // Fetch related articles by category
          const resAll = await fetch('/api/posts')
          if (resAll.ok) {
            const allData = await resAll.json()
            setRelatedArticles(allData.filter(a => a.id !== data.id && a.category === data.category).slice(0, 3))
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

  // Helper untuk render inline markdown (link & image sederhana)
  const renderInlineMarkdown = (text) => {
    if (!text) return null
    // Cek image: ![alt](url)
    const imgRegex = /!\[(.*?)\]\((.*?)\)/g
    // Cek link: [text](url) (setelah image diparse atau abaikan !)
    const linkRegex = /\[(.*?)\]\((.*?)\)/g

    let parts = []
    let lastIndex = 0

    // Kombinasi deteksi image dan link pake single pass regex lebih ribet, kita bikin dua pass atau split aja.
    // Yang paling gampang buat react: nge-split string dengan regex yg capture group.
    
    // Tapi karena react butuh array of elements, bikin custom parser:
    const tokenRegex = /(!?\[.*?\]\(.*?\))/g
    const tokens = text.split(tokenRegex)

    return tokens.map((token, i) => {
      const imgMatch = token.match(/^!\[(.*?)\]\((.*?)\)$/)
      if (imgMatch) {
        return (
          <img 
            key={i} 
            src={imgMatch[2]} 
            alt={imgMatch[1]} 
            className="max-w-full h-auto rounded-lg my-4 shadow-sm"
            loading="lazy"
          />
        )
      }
      
      const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/)
      if (linkMatch) {
        return (
          <a 
            key={i} 
            href={linkMatch[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2563eb] hover:underline break-words"
          >
            {linkMatch[1]}
          </a>
        )
      }

      return <React.Fragment key={i}>{token}</React.Fragment>
    })
  }

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
      <section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-12 px-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='mb-4'>
            <span className='text-xs font-semibold bg-blue-500 bg-opacity-20 text-blue-100 px-3 py-1 rounded-full'>
              {article.category}
            </span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 leading-tight text-white'>{article.title}</h1>
          <div className='flex flex-wrap items-center gap-4 text-gray-200'>
            <span>Oleh {article.author}</span>
            <span>•</span>
            <span>{new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>•</span>
            <span>{article.read_time}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-12 px-4 bg-white'>
        <div className='container mx-auto max-w-4xl'>
          <article className='prose prose-lg max-w-none'>
            <div className='text-gray-700 leading-relaxed space-y-6'>
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className='text-2xl font-bold text-[#1a3a52] mt-8 mb-4'>
                        {renderInlineMarkdown(paragraph.replace(/^##\s*/, ''))}
                      </h2>
                    )
                  } else if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className='text-xl font-bold text-[#2d5a7b] mt-6 mb-3'>
                        {renderInlineMarkdown(paragraph.replace(/^###\s*/, ''))}
                      </h3>
                    )
                  } else if (paragraph.trim() === '') {
                    return null
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={index} className='list-disc pl-6 space-y-2'>
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className='text-gray-700'>
                            {renderInlineMarkdown(item.replace(/^-\s*/, ''))}
                          </li>
                        ))}
                      </ul>
                    )
                  } else if (paragraph.match(/^\d+\./)) {
                    return (
                      <ol key={index} className='list-decimal pl-6 space-y-2'>
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className='text-gray-700'>
                            {renderInlineMarkdown(item.replace(/^\d+\.\s*/, ''))}
                          </li>
                        ))}
                      </ol>
                    )
                  } else {
                    return (
                      <p key={index} className='text-gray-700 leading-relaxed'>
                        {renderInlineMarkdown(paragraph)}
                      </p>
                    )
                  }
                })}
            </div>
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
            <h3 className='text-2xl font-bold mb-3 text-white'>Butuh Konsultasi Lebih Lanjut?</h3>
            <p className='mb-6'>Hubungi tim expert kami untuk mendiskusikan topik ini lebih mendalam</p>
            <a
              href='https://wa.me/628117784099'
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
