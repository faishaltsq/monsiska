# Todo: Admin-Only Blog Management

Plan: `tasks/plan.md` | Spec: `docs/spec-admin-blog.md`

## Phase 1: Foundation
- [x] 1. Install `@neondatabase/serverless`, `bcryptjs`, `jose` + `src/lib/db.js`
- [x] 2. `scripts/migrate.mjs` — create table + seed 8 artikel
- [x] 3. `src/lib/auth.js` — hash compare, JWT sign/verify, cookie helper

## Phase 2: Auth Flow
- [x] 4. `src/app/api/admin/login/route.js` + `logout/route.js`
- [x] 5. `middleware.js` — protect `/admin/*`
- [x] 6. `src/app/admin/login/page.js`

## Phase 3: Admin CRUD
- [x] 7. `src/app/api/admin/posts/route.js` + `[id]/route.js`
- [x] 8. `src/app/admin/blog/page.js` — list + delete
- [x] 9. `src/app/admin/blog/new/page.js` + `[id]/edit/page.js`

## Phase 4: Public Migration
- [x] 10. `src/app/api/posts/route.js` — public GET
- [x] 11. Ubah `src/app/blog/page.js` fetch DB
- [x] 12. Ubah `src/app/blog/[slug]/page.js` fetch DB

## Phase 5: Polish
- [x] 13. Update `robots.js` + `next-sitemap.config.js`
- [x] 14. `.env.example` + setup docs
