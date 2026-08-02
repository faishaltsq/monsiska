# Spec: Admin Central Dashboard

## Objective
Bikin satu halaman pusat `/admin/dashboard` yang jadi landing page pertama setelah login. Halaman ini bakal nampilin card/menu untuk navigasi ke berbagai fitur admin (Kelola Artikel Blog, Kelola Buku/Dokumen, dll) biar rapi dan profesional. Route setelah login diubah dari `/admin/blog` jadi `/admin/dashboard`.

## Tasks
1. Buat halaman `src/app/admin/dashboard/page.js` dengan UI dashboard berisi card menu.
2. Update redirect di `src/app/admin/login/page.js` dari `/admin/blog` ke `/admin/dashboard`.
3. Update tombol "Kembali" / navigasi di halaman `/admin/blog/page.js` dan `/admin/buku/page.js` biar bisa balik ke `/admin/dashboard` dengan mudah, bukan cuma lompat antar satu sama lain.
