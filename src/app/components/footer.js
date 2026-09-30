import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
  </svg>
);

export default function Footer() {
  return (
    <footer className='bg-[#0f283d] text-white border-t border-gray-800'>
      <div className='container mx-auto max-w-7xl px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
          {/* Brand */}
          <div className='md:col-span-1'>
            <h3 className='font-bold text-xl mb-4 text-white'>Monsiskami</h3>
            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
              Lembaga konsultan penelitian, analisis statistik, dan pengembangan sistem informasi kesehatan terpercaya di Indonesia.
            </p>
            <div className='flex gap-3'>
              <a
                href='https://wa.me/6281329796998'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563eb] flex items-center justify-center transition-colors'
                aria-label='WhatsApp'
              >
                <Phone className='w-4 h-4' />
              </a>
              <a
                href='mailto:monsiskami@gmail.com'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563eb] flex items-center justify-center transition-colors'
                aria-label='Email'
              >
                <Mail className='w-4 h-4' />
              </a>
              <a
                href='https://www.instagram.com/monsiskami'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 rounded-full bg-white/10 hover:bg-[#2563eb] flex items-center justify-center transition-colors'
                aria-label='Instagram'
              >
              <InstagramIcon className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className='font-semibold mb-4 text-white text-base'>Layanan</h4>
            <ul className='text-gray-400 text-sm space-y-2.5'>
              <li><Link href='/#services' className='hover:text-white transition'>Konsultasi Penelitian</Link></li>
              <li><Link href='/#services' className='hover:text-white transition'>Pelatihan SPSS & Software</Link></li>
              <li><Link href='/#services' className='hover:text-white transition'>Sertifikasi ISO 9001:2015</Link></li>
              <li><Link href='/#services' className='hover:text-white transition'>Pelatihan Akreditasi</Link></li>
              <li><Link href='/harga' className='hover:text-white transition'>Daftar Paket Harga</Link></li>
            </ul>
          </div>

          {/* Portofolio & Produk */}
          <div>
            <h4 className='font-semibold mb-4 text-white text-base'>Produk & Portofolio</h4>
            <ul className='text-gray-400 text-sm space-y-2.5'>
              <li>
                <a
                  href='https://sim-akreditasi-web-production.up.railway.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition flex items-center gap-1.5'
                >
                  SIM Akreditasi RS
                  <span className='text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded'>Live</span>
                </a>
              </li>
              <li>
                <a
                  href='https://sim-ktkl-production.up.railway.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition flex items-center gap-1.5'
                >
                  SIM-KTKL
                  <span className='text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded'>Live</span>
                </a>
              </li>
              <li><Link href='/portfolio' className='hover:text-white transition'>Kisah Sukses & Pelatihan</Link></li>
              <li><Link href='/buku' className='hover:text-white transition'>Buku & Materi Referensi</Link></li>
              <li><Link href='/blog' className='hover:text-white transition'>Blog & Edukasi</Link></li>
            </ul>
          </div>

          {/* Lokasi Kantor */}
          <div>
            <h4 className='font-semibold mb-4 text-white text-base'>Lokasi Kantor</h4>
            <div className='space-y-4 text-sm text-gray-400'>
              <div className='flex items-start gap-2.5'>
                <MapPin className='w-4 h-4 text-[#2563eb] mt-1 shrink-0' />
                <div>
                  <strong className='text-gray-200 block'>Kebumen</strong>
                  <span>Jl. Candiwulan Ds Mangli RT 01/RW 01, Kuwarasan, Kebumen, Jawa Tengah 54366</span>
                </div>
              </div>
              <div className='flex items-start gap-2.5'>
                <MapPin className='w-4 h-4 text-[#2563eb] mt-1 shrink-0' />
                <div>
                  <strong className='text-gray-200 block'>Batam</strong>
                  <span>Perumahan Bida Asri 3 Blok A2 No 9, Batu Besar, Nongsa, Batam 29465</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400'>
          <p>© {new Date().getFullYear()} Monsiskami. Seluruh hak cipta dilindungi.</p>
          <div className='flex gap-6'>
            <Link href='/contact' className='hover:text-white transition'>Hubungi Kami</Link>
            <a href='https://wa.me/6281329796998' className='hover:text-white transition'>WhatsApp Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
