# 💌 Digital Love Letter

Sebuah surat cinta digital yang interaktif dan romantis, dibangun dengan React, Framer Motion, dan Tailwind CSS. Dirancang untuk menyampaikan perasaan dengan cara yang indah dan berkesan.

---

## ✨ Fitur

- **Amplop Interaktif** — Animasi amplop 3D yang terbuka saat diklik, lengkap dengan efek percikan bintang
- **Surat Cinta Typewriter** — Teks surat muncul perlahan seperti sedang diketik secara langsung
- **Galeri Kenangan** — Tampilan polaroid dengan efek hover yang elegan
- **Timeline Cinta** — Perjalanan cerita cinta dalam format timeline animasi
- **Musik Romantis** — Pemutar musik ambient dengan kontrol mute/unmute
- **Floating Hearts** — Hati melayang muncul setiap kali layar diklik
- **Rose Petals** — Kelopak mawar berjatuhan setelah surat dibuka
- **Particles Background** — Partikel lembut bergerak di latar belakang
- **Dark / Light Mode** — Toggle mode gelap romantis dan mode terang

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5.6 | Type safety |
| [Vite](https://vitejs.dev) | 5 | Build tool & dev server |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animasi |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Styling |
| [React Icons](https://react-icons.github.io/react-icons) | 5 | Icon set |

---

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js >= 18
- npm atau package manager lainnya

### Instalasi

```bash
# Clone repository
git clone <repo-url>
cd digital-love-letter

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173`.

### Build untuk Produksi

```bash
npm run build
npm run preview
```

---

## 🎵 Mengganti Musik

Secara default, musik diambil dari URL eksternal. Untuk menggunakan file musik sendiri:

1. Letakkan file audio di `public/music/romantic.mp3`
2. Buat file `.env` di root project:

```env
VITE_MUSIC_URL=/music/romantic.mp3
```

Atau langsung edit `src/utils/constants.ts`:

```ts
export const MUSIC_URL = "/music/romantic.mp3";
```

---

## ✏️ Kustomisasi Konten

Semua konten teks dan data dapat diubah di `src/utils/constants.ts`:

### Isi Surat (`LETTER_PARAGRAPHS`)
```ts
export const LETTER_PARAGRAPHS: string[] = [
  "Paragraf pertama surat...",
  "Paragraf kedua...",
  // tambahkan sesuai kebutuhan
];
```

### Galeri Kenangan (`MEMORIES`)
```ts
export const MEMORIES = [
  {
    id: "1",
    caption: "Judul foto",
    src: "URL atau path gambar",
    date: "Keterangan tanggal",
  },
  // ...
];
```

### Timeline (`TIMELINE`)
```ts
export const TIMELINE = [
  {
    title: "Nama momen",
    description: "Deskripsi singkat momen tersebut.",
    date: "Tanggal atau keterangan",
  },
  // ...
];
```

---

## 📁 Struktur Project

```
src/
├── animations/
│   └── variants.ts          # Framer Motion animation variants
├── components/
│   ├── Envelope.tsx          # Animasi amplop 3D
│   ├── FloatingHearts.tsx    # Hati melayang saat klik
│   ├── IntroSection.tsx      # Halaman pembuka
│   ├── LoveLetter.tsx        # Surat dengan efek typewriter
│   ├── LoveTimeline.tsx      # Timeline perjalanan cinta
│   ├── MemoryGallery.tsx     # Galeri foto polaroid
│   ├── MusicPlayer.tsx       # Pemutar musik ambient
│   ├── ParticlesBackground.tsx # Partikel latar belakang
│   └── RosePetals.tsx        # Animasi kelopak mawar
├── pages/
│   └── LoveLetterPage.tsx    # Halaman utama
├── styles/
│   └── index.css             # Global styles & custom fonts
└── utils/
    └── constants.ts          # Konten & konfigurasi
```

---

## 🎨 Tema Warna

Palet warna kustom yang digunakan (dapat diubah di `tailwind.config.js`):

| Nama | Hex | Deskripsi |
|---|---|---|
| `cream` | `#faf6f0` | Latar belakang utama |
| `soft-pink` | `#f4d4d4` | Aksen pink lembut |
| `rose-gold` | `#c9a87c` | Warna utama rose gold |
| `paper` | `#f5ebe0` | Warna kertas surat |
| `ink` | `#4a3728` | Warna teks utama |

---

## 📝 Lisensi

Dibuat dengan ❤️ — bebas digunakan dan dimodifikasi untuk keperluan pribadi.
