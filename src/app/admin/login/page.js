'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Gagal login')
      }
    } catch (err) {
      setError('Terjadi kesalahan jaringan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24'>
      <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md border border-gray-200'>
        <div>
          <h2 className='text-center text-3xl font-bold text-[#1a3a52]'>Admin Login</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>Masuk untuk kelola konten blog</p>
        </div>
        
        <form className='mt-8 space-y-6' onSubmit={handleLogin}>
          {error && (
            <div className='bg-red-50 text-red-500 p-3 rounded-md text-sm text-center'>
              {error}
            </div>
          )}
          
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Username</label>
              <input
                type='text'
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
              <input
                type='password'
                required
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={loading}
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb] disabled:opacity-50'
            >
              {loading ? 'Memproses...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
