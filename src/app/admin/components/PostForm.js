'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TipTapLink from '@tiptap/extension-link'

// Custom Toolbar TipTap
const MenuBar = ({ editor, setUploading }) => {
  if (!editor) return null

  const addImage = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0]
      if (!file) return

      setUploading(true)
      const uploadData = new FormData()
      uploadData.append('file', file)

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: uploadData
        })
        if (res.ok) {
          const data = await res.json()
          editor.chain().focus().setImage({ src: data.url, alt: data.name }).run()
        } else {
          alert('Gagal mengunggah gambar')
        }
      } catch (err) {
        alert('Terjadi kesalahan jaringan')
      } finally {
        setUploading(false)
      }
    }
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL Link', previousUrl)

    if (url === null) return // dibatalkan
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-2 p-2 border border-gray-300 rounded-md bg-gray-50">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded text-sm font-bold ${editor.isActive('bold') ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded text-sm italic ${editor.isActive('italic') ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-2 py-1 rounded text-sm font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-2 py-1 rounded text-sm font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 rounded text-sm ${editor.isActive('bulletList') ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-2 py-1 rounded text-sm ${editor.isActive('orderedList') ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        1. List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-2 py-1 rounded text-sm ${editor.isActive('blockquote') ? 'bg-blue-200 text-blue-800' : 'bg-white hover:bg-gray-200 border'}`}
      >
        " Quote
      </button>
      <button type="button" onClick={setLink} className="px-2 py-1 rounded text-sm bg-white hover:bg-gray-200 border">
        Link
      </button>
      <button type="button" onClick={addImage} className="px-2 py-1 rounded text-sm bg-blue-100 hover:bg-blue-200 border border-blue-300 text-blue-800 ml-auto">
        + Sisipkan Gambar
      </button>
    </div>
  )
}

export default function PostForm({ initialData = null, isEdit = false }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    category: initialData?.category || '',
    author: initialData?.author || 'Admin',
    read_time: initialData?.read_time || '5 min',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    published: initialData?.published ?? true
  })

  // TipTap hook
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: true }),
      TipTapLink.configure({ openOnClick: false })
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      setFormData(prev => ({ ...prev, content: editor.getHTML() }))
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] border border-gray-300 rounded-md p-4 bg-white',
      },
    },
  })

  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData(prev => {
      const newData = { ...prev, title }
      if (!isEdit && !prev.slug_manually_edited) {
        newData.slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      }
      return newData
    })
  }

  const handleSlugChange = (e) => {
    setFormData(prev => ({
      ...prev,
      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, ''),
      slug_manually_edited: true
    }))
  }

  const handleFileDocUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')
    const uploadData = new FormData()
    uploadData.append('file', file)

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadData
      })

      if (res.ok) {
        const data = await res.json()
        const htmlTag = `<p><br><a href="${data.url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">[Download File: ${data.name}]</a><br></p>`
        
        if (editor) {
          editor.commands.insertContent(htmlTag)
        }
        e.target.value = ''
      } else {
        setError('Gagal upload file')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat upload dokumen')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const url = isEdit ? `/api/admin/posts/${initialData.id}` : '/api/admin/posts'
      const method = isEdit ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/blog')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Gagal menyimpan artikel')
      }
    } catch (err) {
      setError('Terjadi kesalahan jaringan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow border border-gray-200">
      {error && <div className="bg-red-50 text-red-500 p-4 rounded-md">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2563eb]" value={formData.title} onChange={handleTitleChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50" value={formData.slug} onChange={handleSlugChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
          <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Waktu Baca</label>
          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.read_time} onChange={e => setFormData({...formData, read_time: e.target.value})} />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ringkasan (Excerpt)</label>
          <textarea required rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-md" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})}></textarea>
        </div>

        <div className="md:col-span-2">
          <div className="flex justify-between items-end mb-2">
            <label className="block text-sm font-medium text-gray-700">Konten Artikel (Editor)</label>
            <div className="relative">
              <input type="file" id="file-upload" className="hidden" onChange={handleFileDocUpload} disabled={uploading} accept=".pdf,.doc,.docx" />
              <label htmlFor="file-upload" className={`cursor-pointer inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                {uploading ? 'Mengunggah...' : '+ Lampirkan File PDF/Doc'}
              </label>
            </div>
          </div>
          
          {/* TipTap Editor */}
          <div className="mb-12">
            <MenuBar editor={editor} setUploading={setUploading} />
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="md:col-span-2 flex items-center">
          <input type="checkbox" id="published" className="h-4 w-4 text-[#2563eb] rounded border-gray-300" checked={formData.published} onChange={e => setFormData({...formData, published: e.target.checked})} />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">Terbitkan langsung (Published)</label>
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <Link href="/admin/blog" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">Batal</Link>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8] transition disabled:opacity-50">
          {loading ? 'Menyimpan...' : 'Simpan Artikel'}
        </button>
      </div>
    </form>
  )
}
