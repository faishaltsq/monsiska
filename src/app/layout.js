import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jasa Konsultan Penelitian & Skripsi Terpercaya | Monsiskami",
  description: "Monsiskami adalah penyedia jasa konsultan penelitian, skripsi, tesis, dan disertasi terpercaya di Indonesia. Kami juga menyediakan pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015.",
  keywords: "monsiskami, konsultan penelitian, jasa skripsi, bimbingan tesis, konsultasi disertasi, pelatihan SPSS, konsultasi statistik, ISO 9001, akreditasi, manajemen mutu",
  authors: [{ name: "Monsiskami" }],
  creator: "Monsiskami",
  publisher: "Monsiskami",
  metadataBase: new URL('https://monsiskami.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Konsultan Penelitian & Skripsi Terpercaya | Monsiskami",
    description: "Monsiskami adalah penyedia jasa konsultan penelitian, skripsi, tesis, dan disertasi terpercaya di Indonesia. Kami juga menyediakan pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015.",
    url: "https://monsiskami.com",
    siteName: "Monsiskami",
    images: [
      {
        url: "/images/MONSISKAMI-removebg-preview.png",
        width: 800,
        height: 600,
        alt: "Monsiskami Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Konsultan Penelitian & Skripsi Terpercaya | Monsiskami",
    description: "Monsiskami adalah penyedia jasa konsultan penelitian, skripsi, tesis, dan disertasi terpercaya di Indonesia. Kami juga menyediakan pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015.",
    images: ["/images/MONSISKAMI-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Ganti dengan kode verifikasi Google Search Console
  },
  icons: "/images/MONSISKAMI-removebg-preview.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="language" content="Indonesian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://monsiskami.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Monsiskami",
              "description": "Konsultan penelitian, skripsi, tesis, disertasi, dan manajemen mutu terpercaya",
              "url": "https://monsiskami.com",
              "logo": "https://monsiskami.com/images/MONSISKAMI-removebg-preview.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-811-7784-099",
                "contactType": "customer service",
                "email": "monsiskami@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Indonesia"
              },
              "sameAs": [
                "https://wa.me/628117784099"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${robotoSlab.variable} antialiased bg-white text-black font-sans`}
      >
        <Navbar />
        {children} {/* Ensure all child pages are rendered here */}
        <Footer />
      </body>
    </html>
  );
}
