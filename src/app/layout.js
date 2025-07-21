import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jasa Konsultasi dan Workshop Penelitian SPSS | Monsiskami",
  description: "Monsiskami menyediakan jasa konsultasi dan workshop profesional untuk penelitian skripsi, tesis, disertasi, pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015 terpercaya.",
  keywords: "monsiskami, konsultasi penelitian, workshop SPSS, jasa skripsi, bimbingan tesis, konsultasi disertasi, pelatihan SPSS, konsultasi statistik, ISO 9001, akreditasi, manajemen mutu, workshop penelitian",
  authors: [{ name: "Monsiskami" }],
  creator: "Monsiskami",
  publisher: "Monsiskami",
  metadataBase: new URL('https://monsiskami.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jasa Konsultasi dan Workshop Penelitian SPSS | Monsiskami",
    description: "Monsiskami menyediakan jasa konsultasi dan workshop profesional untuk penelitian skripsi, tesis, disertasi, pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015 terpercaya.",
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
    title: "Jasa Konsultasi dan Workshop Penelitian SPSS | Monsiskami",
    description: "Monsiskami menyediakan jasa konsultasi dan workshop profesional untuk penelitian skripsi, tesis, disertasi, pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015 terpercaya.",
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
  // Updated metadata for improved SEO - January 2025
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
        <meta name="last-modified" content={new Date().toISOString()} />
        <meta name="article:modified_time" content={new Date().toISOString()} />
        <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta name="pragma" content="no-cache" />
        <meta name="expires" content="0" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="canonical" href="https://monsiskami.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Monsiskami",
              "alternateName": "Jasa Konsultasi dan Workshop Monsiskami",
              "description": "Monsiskami menyediakan jasa konsultasi dan workshop profesional untuk penelitian, skripsi, tesis, disertasi, pelatihan SPSS, konsultasi statistik, dan sertifikasi ISO 9001:2015",
              "url": "https://monsiskami.com",
              "logo": "https://monsiskami.com/images/MONSISKAMI-removebg-preview.png",
              "slogan": "Jasa Konsultasi dan Workshop Profesional",
              "foundingDate": "2018",
              "dateModified": new Date().toISOString(),
              "lastReviewed": new Date().toISOString(),
              "keywords": "konsultasi, workshop, penelitian, skripsi, tesis, SPSS, statistik, ISO 9001",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-811-7784-099",
                "contactType": "customer service",
                "email": "monsiskami@gmail.com",
                "availableLanguage": "Indonesian"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Indonesia"
              },
              "sameAs": [
                "https://wa.me/628117784099"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Jasa Konsultasi dan Workshop",
                "description": "Layanan konsultasi penelitian dan workshop SPSS",
                "validFrom": new Date().toISOString()
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://monsiskami.com/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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
