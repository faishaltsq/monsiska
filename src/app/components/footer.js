export default function Footer() {
  return (
    <footer className="bg-[#1a3a52] text-white mt-16 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Monsiskami</h3>
            <p className="text-gray-300 text-sm">
              Penyedia jasa konsultasi penelitian dan manajemen statistik profesional di Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Konsultasi Penelitian</a></li>
              <li><a href="#" className="hover:text-white transition">Pelatihan SPSS</a></li>
              <li><a href="#" className="hover:text-white transition">Sertifikasi ISO</a></li>
              <li><a href="#" className="hover:text-white transition">Manajemen Mutu</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="https://wa.me/628117784099" className="hover:text-white transition">WhatsApp</a></li>
              <li><a href="mailto:monsiskami@gmail.com" className="hover:text-white transition">Email</a></li>
              <li><a href="https://www.instagram.com/monsiskami" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Lokasi Kantor</h4>
            <p className="text-gray-300 text-sm">
              <strong>Kebumen:</strong> Jl. Candiwulan, Kuwarasan
            </p>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Batam:</strong> Perumahan Bida Asri 3
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Monsiskami. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
