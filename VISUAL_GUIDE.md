# Visual Guide - Perpustakaan Penelitian UI

## Page Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                          NAVBAR                                 │
│  [Logo] Monsiskami | Beranda | Portfolio | Blog | Buku          │
│                                       Penelitian | Hubungi Kami  │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                       HERO SECTION                              │
│                                                                 │
│    Perpustakaan Penelitian                                      │
│    Koleksi lengkap panduan dan referensi penelitian dari       │
│    para ahli                                                    │
│                                                                 │
│    [Dark gradient background: #1a3a52 → #2d5a7b]              │
│    [White text, centered, professional]                        │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SEARCH & FILTER SECTION                      │
│                                                                 │
│  ┌─────────────────────────────────────────────────┐            │
│  │ 🔍 Cari buku penelitian...                      │            │
│  └─────────────────────────────────────────────────┘            │
│                                                                 │
│  [Semua] [Teori Dasar] [Persiapan] [Metodologi] [Jenis]      │
│  [Analisis] [Desain] [Data Collection] [Publikasi]            │
│  [Instrumen]                                                    │
│                                                                 │
│  [White background, light border]                             │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                   BOOKSHELF GRID SECTION                        │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐ │
│  │ BAB I      │  │ BAB II     │  │ BAB III    │  │ BAB IV   │ │
│  │ Pengembang │  │ Proposal   │  │ Langkah    │  │ Penelitian│
│  │ an...      │  │ Penelitian │  │ dan Metode │  │ Deskriptif│
│  │ Teori Dasar│  │ Persiapan  │  │ Metodologi │  │ Jenis... │
│  └────────────┘  └────────────┘  └────────────┘  └──────────┘
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐ │
│  │ BAB V      │  │ BAB VI     │  │ BAB VII    │  │ BAB VIII │ │
│  │ Penelitian │  │ Penelitian │  │ Penelitian │  │ Penelitian│
│  │ Studi Kasus│  │ Survey     │  │ Korelasi   │  │ Komparasi │
│  │ Jenis...  │  │ Jenis...   │  │ Analisis...│  │ Analisis..│
│  └────────────┘  └────────────┘  └────────────┘  └──────────┘
│                                                                 │
│  [Grid: 4 columns desktop, 3 tablet, 2 mobile]                 │
│  [Each card has unique gradient color & hover effect]          │
│  [Smooth elevate animation on hover]                           │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STATISTICS SECTION                           │
│                                                                 │
│            19                    9                   100%       │
│    Total Buku Penelitian  Kategori Materi  Gratis untuk Akses  │
│                                                                 │
│  [White card with light border, centered text]                 │
│  [Large numbers in blue color]                                 │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                      CTA SECTION                                │
│                                                                 │
│         Butuh Bimbingan Lebih Lanjut?                          │
│                                                                 │
│  Tim ahli Monsiskami siap membantu Anda memahami dan           │
│  menerapkan metodologi penelitian dengan baik                   │
│                                                                 │
│         [HUBUNGI KONSULTAN] → WhatsApp link                    │
│                                                                 │
│  [Dark gradient background, white text]                        │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│                          FOOTER                                 │
│                                                                 │
│  © 2025 Monsiskami | Kontak | Layanan | Lokasi                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Individual Book Card Design

```
┌──────────────────────────────────────┐
│                                      │
│  Gradient Background                 │
│  (Unique color per book)             │
│                                      │
│  ┌────────────────────────────────┐  │
│  │ BAB XI  [BADGE]                │  │
│  │                                │  │
│  │ Rancangan Penelitian           │  │
│  │ (Large, Bold White Text)       │  │
│  │                                │  │
│  │ Perancangan desain penelitian  │  │
│  │ yang komprehensif              │  │
│  │ (Small, Semi-transparent)      │  │
│  │                                │  │
│  │ Desain Penelitian  →           │  │
│  │ (Bottom: category + icon)      │  │
│  └────────────────────────────────┘  │
│                                      │
│  [Shadow border for 3D effect]       │
│                                      │
└──────────────────────────────────────┘

Hover State:
- Elevates 2px (translate-y: -8px)
- Shadow increases dramatically
- Icon arrow shows more prominently
- Smooth transition (300ms)
```

---

## Color Scheme - 19 Unique Gradients

```
Row 1:
[Blue 600→800]  [Indigo 600→800]  [Purple 600→800]  [Pink 600→800]

Row 2:
[Rose 600→800]  [Red 600→800]  [Orange 600→800]  [Amber 600→800]

Row 3:
[Yellow 600→800]  [Lime 600→800]  [Green 600→800]  [Emerald 600→800]

Row 4:
[Teal 600→800]  [Cyan 600→800]  [Sky 600→800]  [Blue 500→700]

Row 5:
[Violet 600→800]  [Fuchsia 600→800]  [Purple 600→Pink 600]
```

---

## Responsive Breakpoints

```
Mobile (< 768px):
┌─────┐
│ 2x2 │  Books per row
│ 2x2 │
│ ... │
└─────┘

Tablet (768px - 1024px):
┌─────────────┐
│ 3x3 3x3 ... │  Books per row
│ 3x3 3x3 ... │
└─────────────┘

Desktop (> 1024px):
┌──────────────────────────┐
│ 4x4 4x4 4x4 4x4 4x4 ... │  Books per row
│ 4x4 4x4 4x4 4x4 4x4 ... │
└──────────────────────────┘
```

---

## Search & Filter Interaction

```
Default State:
┌─────────────────────────────────────────┐
│ 🔍 Cari buku penelitian...              │
└─────────────────────────────────────────┘

After user types "Metodologi":
┌─────────────────────────────────────────┐
│ 🔍 metodologi                           │
└─────────────────────────────────────────┘

Filter buttons show 2 active results for "Metodologi" category

Results displayed: Books III, XVII, XVIII
```

---

## Empty State

```
When no results found:

┌────────────────────────────┐
│                            │
│   Tidak ada buku yang      │
│   sesuai dengan pencarian  │
│                            │
│  (Gray text, centered)     │
│  (16pt size)               │
│                            │
└────────────────────────────┘

Appears when:
- Search returns no matches
- Filter has no books in category
- Both search + filter combined
```

---

## Typography Hierarchy

```
Hero Title:
48px | Bold | Primary Dark (#1a3a52)
"Perpustakaan Penelitian"

Hero Subtitle:
20px | Regular | Gray-200
"Koleksi lengkap panduan..."

Book Card Title (BAB):
12px | Bold | White | Uppercase

Book Card Main Title:
20px | Bold | White
"Rancangan Penelitian"

Book Card Description:
14px | Regular | White | 90% opacity

Statistics Number:
48px | Bold | Blue (#2563eb)
"19"

Statistics Label:
16px | Regular | Gray-600
"Total Buku Penelitian"
```

---

## Interaction States

### Button States (Category Filter)

**Inactive**:
- Background: Light gray (#f3f4f6)
- Text: Primary Dark (#1a3a52)
- Cursor: pointer

**Active**:
- Background: Blue (#2563eb)
- Text: White
- Cursor: pointer

**Hover**:
- Background: Darker shade
- Opacity: 0.9
- Transition: 150ms

### Input Field (Search)

**Normal**:
- Border: #d1d5db
- Background: White
- Text: #1a1a1a

**Focus**:
- Border: #2563eb
- Ring: 2px ring in blue
- Shadow: Light shadow

**Typing**:
- Real-time filtering
- Results update instantly

---

## Spacing & Layout Rules

```
Container Width:
- Max: 80rem (1280px - 7xl)
- Padding: 1rem mobile, 1rem desktop

Section Padding:
- Vertical: 4rem (64px)
- Horizontal: 1rem (16px)

Grid Gap:
- Columns: 1.5rem (24px)
- Rows: 1.5rem (24px)

Card Dimensions:
- Height: 20rem (320px) - consistent
- Width: Responsive to grid
- Aspect Ratio: 1:1.25 approximately
```

---

## Animation & Transitions

```
Book Card Hover:
- Duration: 300ms
- Easing: ease-in-out
- Properties:
  • Y-axis elevation: -8px
  • Shadow expansion: 6 → 20px blur
  • Icon opacity: 0.75 → 1

Filter Button Hover:
- Duration: 150ms
- Background change
- Slight darken effect

Search Input Focus:
- Duration: 200ms
- Ring expansion
- Color change to blue
```

---

## Accessibility Features

```
✓ Semantic HTML
  - <section>, <div>, <button>
  - Proper heading hierarchy

✓ Color Contrast
  - All text meets WCAG AA standard
  - White on colored background: ≥ 4.5:1

✓ Keyboard Navigation
  - Tab through buttons
  - Enter to filter
  - ESC to clear (optional)

✓ Screen Reader
  - ARIA labels on buttons
  - Form labels present
  - Alternative text for icons

✓ Focus Management
  - Visible focus indicators
  - Proper tab order
```

---

**Design System Version**: 1.0
**Last Updated**: August 2, 2025
**Status**: Production Ready
