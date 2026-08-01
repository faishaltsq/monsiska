# Quick Reference Guide - Website Monsiskami

## 🚀 Quick Start

**Server Command**: `npm run dev`
**URL**: http://localhost:3000
**Build Command**: `npm run build`

---

## 📄 File Penting

| File | Lokasi | Fungsi |
|------|--------|--------|
| Home Page | `/src/app/home/index.js` | Halaman utama dengan semua sections |
| Navbar | `/src/app/components/navbar.js` | Navigation bar |
| Footer | `/src/app/components/footer.js` | Footer sections |
| Globals CSS | `/src/app/globals.css` | Theme & color variables |
| Blog Page | `/src/app/blog/page.js` | Blog landing page (NEW) |
| Layout | `/src/app/layout.js` | Root layout dengan meta tags |

---

## 🎨 Color Reference

```css
/* Primary Colors */
--primary-dark: #1a3a52      /* Navbar, headers, backgrounds */
--primary-medium: #2d5a7b    /* Gradient colors */
--accent-blue: #2563eb       /* CTA buttons, hover states */

/* Neutrals */
--background: #f8f9fa        /* Page background */
--surface: #ffffff           /* Card backgrounds */
--foreground: #1a1a1a        /* Text primary */
--foreground-muted: #4b5563  /* Text secondary */
--border: #e0e0e0            /* Borders */
```

---

## 📍 Navigation Structure

```
Beranda (/)
├── Hero Section
├── About Section
├── Services (4 cards)
├── Research Types (3 cards)
├── Research Methods (2 column)
├── Info Cards (3 cards)
├── Testimonials (4 cards) [NEW]
├── Case Studies (3 cards) [NEW]
├── Blog Preview (4 articles) [NEW]
├── Statistics (4 metrics) [NEW]
└── Expert & Contact

Portofolio (/portfolio)
├── Hero
├── Featured (4 cards)
├── Description
├── Gallery (3+ cards)
└── CTA

Blog (/blog) [NEW]
├── Hero
├── Search & Filter
└── Articles (8+ cards)

Hubungi Kami (/contact)
├── Hero
├── Contact Methods (3 cards)
├── Form
└── Office Locations
```

---

## 🔧 Common Customizations

### Change Colors
**File**: `/src/app/globals.css`
```css
:root {
  --primary-dark: #your-color;
  --accent-blue: #your-color;
}
```

### Add Testimonial
**File**: `/src/app/home/index.js`
```javascript
const testimonials = [
  // ... existing
  {
    name: 'New Client',
    role: 'Student',
    university: 'University',
    content: 'Great service!',
    rating: 5
  }
]
```

### Add Blog Article
**File**: `/src/app/blog/page.js`
```javascript
const allArticles = [
  // ... existing
  {
    id: 9,
    title: 'New Article Title',
    category: 'Category',
    excerpt: 'Short excerpt',
    content: 'Full content...',
    readTime: '10 min',
    date: '1 Feb 2025',
    author: 'Author Name'
  }
]
```

### Update Links
- **WhatsApp**: `https://wa.me/628117784099` (ganti nomor di semua file)
- **Email**: `monsiskami@gmail.com`
- **Instagram**: `https://www.instagram.com/monsiskami`

---

## 📊 Section Components

### Card Component (Reusable)
Semua cards menggunakan pattern yang sama:
```jsx
<div className='bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition'>
  <h3 className='text-lg font-bold text-[#1a3a52] mb-3'>Title</h3>
  <p className='text-gray-600'>Content</p>
</div>
```

### Grid Layouts
```jsx
/* Services - 4 column */
<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>

/* Case Studies - 3 column */
<div className='grid md:grid-cols-3 gap-8'>

/* Testimonials - 4 column */
<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>

/* Blog - 4 column responsive */
<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
```

---

## 🎯 Hero Section Template

Semua pages menggunakan hero yang konsisten:
```jsx
<section className='bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b] text-white py-16 px-4'>
  <div className='container mx-auto max-w-7xl'>
    <h1 className='text-4xl md:text-5xl font-bold mb-4'>Title</h1>
    <p className='text-lg text-gray-200'>Subtitle</p>
  </div>
</section>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
.grid { grid-template-columns: 1fr; }

/* Tablet (md) */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (lg) */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

Tailwind shortcuts:
- `md:grid-cols-2` = 2 columns on tablet
- `lg:grid-cols-4` = 4 columns on desktop
- `md:px-4` = padding mobile/tablet
- `hidden lg:block` = hide on mobile/tablet

---

## 🔗 CTA Buttons

**Primary CTA (Konsultasi Gratis)**
```jsx
<a href='https://wa.me/628117784099' 
   className='inline-block bg-[#2563eb] hover:bg-[#1d4ed8] 
              text-white font-bold py-3 px-8 rounded-lg transition'>
  Konsultasi Gratis
</a>
```

**Secondary CTA**
```jsx
<a href='/blog' className='inline-block text-[#2563eb] font-semibold text-sm 
                            hover:text-[#1d4ed8] transition'>
  Baca Selengkapnya →
</a>
```

---

## 🖼️ Image Management

**Lokasi**: `/public/images/`
**Format**: PNG, JPG
**Optimization**: Next.js Image component dengan:
- `width` & `height` props
- `priority` untuk above-fold
- `loading='lazy'` untuk below-fold
- `object-cover` atau `object-contain`

---

## ✅ SEO & Meta Tags

**File**: `/src/app/layout.js`
```javascript
export const metadata = {
  title: 'Jasa Konsultan Dan Workshop | Monsiskami',
  description: 'Monsiskami menyediakan jasa konsultasi...',
  keywords: 'konsultasi, penelitian, SPSS...'
}
```

---

## 🚨 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Navbar tetap open di mobile | Click link menutup menu otomatis ✅ |
| Image tidak tampil | Pastikan file ada di `/public/images/` |
| Color tidak berubah | Update di `globals.css` :root |
| Mobile tidak responsive | Check grid classes (md:, lg:) |
| Link WhatsApp error | Verify nomor format: +62811... |

---

## 📈 Analytics Setup (Recommended)

Add ke layout.js:
```javascript
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>

// Hotjar
<script>
  window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
  // ... hotjar code
</script>
```

---

## 💾 File Structure Best Practices

```
src/app/
├── components/          /* Reusable components */
│   ├── navbar.js
│   ├── footer.js
│   └── other-components.js
├── (pages)/
│   ├── home/index.js   /* Diakses dari / */
│   ├── portfolio/      /* /portfolio */
│   ├── blog/           /* /blog */
│   └── contact/        /* /contact */
├── layout.js           /* Root layout */
├── globals.css         /* Global styles & theme */
└── page.js             /* Home page handler */
```

---

## 🎬 Deployment Checklist

- [ ] Update semua links (WhatsApp, Email, Instagram)
- [ ] Test di berbagai browser
- [ ] Test responsive di mobile
- [ ] Optimize images
- [ ] Check lighthouse score
- [ ] Update meta tags
- [ ] Setup Google Analytics
- [ ] Setup form email notifications
- [ ] Check 404 page
- [ ] Verify production build: `npm run build`

---

## 📞 External Links

**WhatsApp**: https://wa.me/628117784099
**Email**: monsiskami@gmail.com
**Instagram**: https://www.instagram.com/monsiskami

---

## 🔐 Environment Variables (If Needed)

Create `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+628117784099
NEXT_PUBLIC_EMAIL=monsiskami@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/monsiskami
```

---

## 📚 Documentation Files

- `IMPLEMENTASI_RINGKASAN.md` - Detailed implementation summary
- `REKOMENDASI_KONTEN.md` - Content strategy & recommendations
- `QUICK_REFERENCE.md` - This file

---

## 🎓 Learning Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **shadcn/ui**: https://ui.shadcn.com

---

**Last Updated**: 1 February 2025
**Version**: 2.0
**Status**: ✅ Production Ready
