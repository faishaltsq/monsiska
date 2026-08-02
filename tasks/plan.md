# Implementation Plan: Admin-Only Blog Management

Spec: `docs/spec-admin-blog.md`

## Overview
Migrate hardcode blog data ke Vercel Postgres, tambah auth (single admin, JWT cookie), tambah `/admin/*` routes buat CRUD post, protect via middleware. Public `/blog` dan `/blog/[slug]` diubah jadi fetch dari DB.

## Architecture Decisions
- `@vercel/postgres` raw SQL, no ORM — 1 tabel doang, ORM overkill
- `jose` bukan `jsonwebtoken` — edge-compatible, dipake di `middleware.js` (Next.js middleware jalan di Edge runtime)
- `bcryptjs` bukan `bcrypt` — pure JS, no native binding, aman di edge/serverless
- Session cookie httpOnly, bukan localStorage — cegah XSS steal token
- Migration script dijalanin manual (`node scripts/migrate.js`), bukan auto-run — hindari race condition di serverless cold start

## Task List

### Phase 1: Foundation (DB + Auth lib)
- [ ] Task 1: Install deps + DB connection helper
- [ ] Task 2: Migration script (create table + seed 8 artikel existing)
- [ ] Task 3: Auth helper (hash compare, JWT sign/verify, cookie helper)

### Checkpoint: Foundation
- [ ] `npm run build` pass
- [ ] Migration script jalan tanpa error (perlu DB connection string user)

### Phase 2: Auth Flow
- [ ] Task 4: API `/api/admin/login` + `/api/admin/logout`
- [ ] Task 5: `middleware.js` protect `/admin/*`
- [ ] Task 6: Page `/admin/login` (form UI)

### Checkpoint: Auth Flow
- [ ] Login salah password → error
- [ ] Login benar → cookie keset, redirect
- [ ] Akses `/admin/blog` tanpa cookie → redirect ke login

### Phase 3: Admin CRUD
- [ ] Task 7: API `/api/admin/posts` (GET list, POST create) + `/api/admin/posts/[id]` (PUT, DELETE)
- [ ] Task 8: Page `/admin/blog` (list + delete button + link ke create/edit)
- [ ] Task 9: Page `/admin/blog/new` + `/admin/blog/[id]/edit` (form create/edit)

### Checkpoint: Admin CRUD
- [ ] Create post baru via UI berhasil
- [ ] Edit post existing berhasil
- [ ] Delete post berhasil

### Phase 4: Public Blog Migration
- [ ] Task 10: API public `/api/posts` (GET published only)
- [ ] Task 11: Ubah `src/app/blog/page.js` fetch dari API/DB, hapus hardcode array
- [ ] Task 12: Ubah `src/app/blog/[slug]/page.js` fetch dari API/DB, hapus hardcode array

### Checkpoint: Public Blog Migration
- [ ] `/blog` nampilin 8 artikel dari DB (bukan hardcode)
- [ ] `/blog/[slug]` semua 8 slug lama masih jalan
- [ ] `npm run build` pass

### Phase 5: SEO + Polish
- [ ] Task 13: Update `robots.js` + `next-sitemap.config.js` exclude `/admin/*`
- [ ] Task 14: `.env.example` + dokumentasi setup (generate password hash, provision DB)

### Checkpoint: Complete
- [ ] Semua success criteria di spec terpenuhi
- [ ] `npm run build` + `npm run lint` clean
- [ ] Ready for human review

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| User belum provision Vercel Postgres | High — gak bisa test migration/CRUD end-to-end | Kasih instruksi manual jelas, code tetep lengkap, testable begitu DB connect |
| Slug lama gak persist pas migrasi | Med — broken link SEO | Seed script pakai slug exact sama kayak hardcode existing |
| Edge runtime middleware gak support Node API tertentu | Med | Pakai `jose` (edge-safe), hindari `bcryptjs` di middleware — verify JWT doang, compare password cuma di API route (Node runtime) |

## Open Questions
- Belum ada — spec udah cover semua keputusan utama.
