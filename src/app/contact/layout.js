export const metadata = {
  title: 'Hubungi Kami - Konsultasi Gratis | Monsiskami',
  description: 'Hubungi Monsiskami untuk konsultasi gratis tentang penelitian, skripsi, tesis, atau pelatihan SPSS. Dapatkan bantuan profesional dari tim berpengalaman kami.',
  keywords: 'kontak monsiskami, konsultasi gratis, hubungi konsultan penelitian, bantuan skripsi, konsultasi statistik',
  openGraph: {
    title: 'Hubungi Kami - Konsultasi Gratis | Monsiskami',
    description: 'Hubungi Monsiskami untuk konsultasi gratis tentang penelitian, skripsi, tesis, atau pelatihan SPSS.',
    url: 'https://monsiskami.com/contact',
    siteName: 'Monsiskami',
    images: [
      {
        url: '/images/contact-email.png',
        width: 800,
        height: 600,
        alt: 'Kontak Monsiskami',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function ContactLayout({ children }) {
  return children;
}
