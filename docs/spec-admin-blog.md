# Spec: Admin-Only Blog Management

## Objective
Blog post (`src/app/blog/page.js`, `src/app/blog/[slug]/page.js`) sekarang hardcode di array JS, duplicate di 2 file. Tambah halaman admin khusus (route terpisah, gak muncul di navbar publik) buat create/edit/delete blog post, dilindungi login. Public blog page tetap baca dari sumber data yang sama, tapi sekarang dari DB bukan hardcode.

Success = admin bisa login di `/admin/login`, tambah/edit/hapus post di `/admin/blog`, dan post baru langsung muncul di `/blog` publik tanpa deploy ulang.

## Assumptions
1. Hosting: Vercel (serverless, no persistent filesystem write)
2. Auth: single admin, credential di env var, session via httpOnly cookie (bukan NextAuth — overkill utk 1 admin)
3. DB: Vercel Postgres
4. Existing 8 hardcode article dimigrasi jadi seed data
5. Konten pakai format markdown-lite yang sudah ada (`##`, `###`, `- `, `1.`) — gak ganti ke rich text editor WYSIWYG
6. Gak ada image upload di v1 — pakai text field URL gambar (optional)

## Tech Stack
- Next.js 15.5.9 App Router (existing)
- `@neondatabase/serverless` (baru — `@vercel/postgres` sudah deprecated, Vercel Postgres native integration sekarang pakai Neon; driver ini yang direkomendasikan resmi)
- `bcryptjs` (baru — hash password admin, walau cuma 1 akun, jangan simpan plaintext)
- `jose` (baru — sign/verify JWT session cookie, edge-compatible utk middleware)
- No ORM tambahan — raw SQL tagged-template via `@neondatabase/serverless` (auto-parameterized, aman dari SQL injection) cukup utk 1 tabel

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- DB migration: script custom `npm run db:migrate` (baru, jalanin SQL sekali)
- Lint: `npm run lint`

## Project Structure
```
src/app/
  admin/
    login/page.js          → form login admin
    blog/page.js            → list + create/edit/delete UI (protected)
    blog/[id]/edit/page.js  → edit form (protected)
  api/
    admin/
      login/route.js        → POST verify credential, set cookie
      logout/route.js       → POST clear cookie
      posts/route.js        → GET (list), POST (create) - protected
      posts/[id]/route.js   → PUT (update), DELETE - protected
    posts/route.js          → GET public published posts (dipake blog/page.js)
  blog/
    page.js                 → diubah: fetch dari DB, bukan hardcode array
    [slug]/page.js          → diubah: fetch dari DB
src/lib/
  db.js                     → koneksi @vercel/postgres + query helper
  auth.js                   → sign/verify JWT, cookie helper
middleware.js               → intercept /admin/*, redirect ke /admin/login kalau no valid session
scripts/
  migrate.js                → create table posts, seed 8 artikel existing
```

## Code Style
Ikuti konvensi existing: `'use client'` di top file yang pakai hook, single quote, no semicolon inconsistency (ikutin file yg diedit), Tailwind utility class langsung di JSX, warna brand `#1a3a52` / `#2563eb`.

API route pattern ikutin `send-email/route.js` yang sudah ada: try/catch, `Response` native (bukan `NextResponse`) kecuali butuh cookie set di middleware.

## Data Model
```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  category VARCHAR(100) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  read_time VARCHAR(20),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Auth Flow
1. `.env`: `DATABASE_URL` (Neon connection string dari Vercel dashboard), `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH` (bcrypt hash, generate manual sekali), `JWT_SECRET`
2. Login POST `/api/admin/login` → cocokin username + bcrypt compare → sign JWT (`jose`), set httpOnly+secure+sameSite cookie, expiry 7 hari
3. `middleware.js` matcher `/admin/:path*` kecuali `/admin/login` → verify JWT dari cookie → redirect `/admin/login` kalau invalid/absent
4. API routes `/api/admin/*` juga verify JWT server-side (defense in depth, jangan cuma andelin middleware)
5. Logout hapus cookie

## Testing Strategy
Project ini belum ada test runner sama sekali. Untuk scope ini: manual verification checklist (lihat Success Criteria) + `npm run build` harus pass. Gak nambah test framework baru kecuali diminta eksplisit — di luar scope minimal.

## Boundaries
- **Always:** validate input server-side (title/content required, slug unique), escape/sanitize content sebelum render (masih pakai parser manual yang sudah ada, bukan `dangerouslySetInnerHTML` mentah), `npm run build` pass sebelum selesai
- **Ask first:** ganti provider auth ke NextAuth/Clerk, nambah rich text editor library, ganti struktur URL blog yang udah live (SEO impact)
- **Never:** commit `.env` / credential asli, expose `ADMIN_PASSWORD_HASH` atau `JWT_SECRET` ke client, hilangkan validasi auth di API route walau middleware udah cover

## Success Criteria
- [ ] `/admin/login` tampil form, salah password → error message, benar → redirect `/admin/blog`
- [ ] Akses `/admin/blog` tanpa login → redirect ke `/admin/login`
- [ ] Admin bisa create post baru → langsung muncul di `/blog` publik
- [ ] Admin bisa edit post → perubahan reflect di `/blog/[slug]`
- [ ] Admin bisa delete post → hilang dari listing
- [ ] 8 artikel existing termigrasi, URL slug lama tetap jalan (no broken link/SEO loss)
- [ ] `/admin/*` tidak ada di sitemap.xml dan di-disallow di robots.txt
- [ ] `npm run build` sukses, no lint error baru

## Open Questions
1. Vercel Postgres perlu di-provision via Vercel dashboard (project harus sudah connect ke Vercel account) — user perlu setup ini sendiri, gue kasih instruksinya, gak bisa auto-provision dari sini.
2. Generate `ADMIN_PASSWORD_HASH` butuh password asli dari user — gue kasih script buat generate hash-nya, user isi sendiri di `.env.local` / Vercel env settings (jangan share plaintext password ke gue).
