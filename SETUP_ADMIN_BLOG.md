# Panduan Setup Admin Blog

Fitur blog sekarang sudah menggunakan database **Vercel Postgres (Neon)** dan memiliki dashboard admin khusus. Ikuti langkah ini untuk setup pertama kali.

## 1. Setup Database di Vercel

1. Buka dashboard project lo di [Vercel](https://vercel.com)
2. Masuk ke tab **Storage**
3. Klik **Create Database** -> pilih **Postgres** (akan otomatis menggunakan Neon di backend)
4. Ikuti wizard sampai selesai.
5. Setelah database terbuat, masuk ke tab **.env.local** di halaman database tersebut.
6. Copy nilai `DATABASE_URL` (formatnya: `postgres://...`).

## 2. Setup Environment Variables

Bikin file `.env.local` di komputer lo (dan tambahkan juga ke Environment Variables di dashboard Vercel -> Settings -> Environment Variables).

Butuh 4 variabel:

```env
DATABASE_URL="postgres://..." # Dari langkah 1
ADMIN_USERNAME="admin" # Terserah lo
ADMIN_PASSWORD_HASH="" # Lihat langkah 3
JWT_SECRET="isi_dengan_random_string_yang_panjang" # Buat session cookie
```

## 3. Generate Password Hash

Karena alasan keamanan, password tidak disimpan dalam bentuk teks biasa. Lo harus generate "hash" dari password lo:

Jalankan perintah ini di terminal:
```bash
node scripts/generate-hash.mjs "PasswordRahasiaGue123!"
```

Script akan mengeluarkan output seperti ini:
```
Password: PasswordRahasiaGue123!
Hash    : $2a$10$w... (string panjang)
```

Copy string Hash tersebut dan masukkan ke `ADMIN_PASSWORD_HASH` di `.env.local` dan Vercel.

## 4. Jalankan Migrasi (Pertama Kali Saja)

Setelah `.env.local` siap (termasuk `DATABASE_URL`), jalankan perintah ini untuk membuat tabel dan memasukkan 8 artikel lama ke database:

```bash
node scripts/migrate.mjs
```

Jika berhasil, akan muncul tulisan `Migration complete.`

## 5. Menggunakan Admin Dashboard

Sekarang lo bisa akses:
**`http://localhost:3000/admin/login`** (atau domain asli jika sudah deploy)

1. Login pakai `ADMIN_USERNAME` dan password asli (bukan hash).
2. Lo akan diarahkan ke `/admin/blog`.
3. Di sini lo bisa Create, Edit, dan Delete artikel.
4. Artikel dengan status "Published" (dicentang) akan otomatis muncul di halaman `/blog` publik.

## Catatan Penting
- Jangan pernah commit file `.env` atau `.env.local` ke GitHub.
- Jika deploy ke Vercel, pastikan semua variabel di atas sudah diisi di tab Settings -> Environment Variables sebelum melakukan build/deploy.
