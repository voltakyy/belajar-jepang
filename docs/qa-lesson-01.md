# QA Verification Report: Lesson 01 (Gate 2)

- **Lesson ID:** L01
- **Judul Pelajaran:** Watashi wa Anna desu (Saya Anna)
- **Topik / Situasi:** Perkenalan & Menyapa
- **Arc Kurikulum:** Arc 1: Bertemu & Berkenalan (L01–L08)
- **Tanggal Audit:** 2026-10-28
- **Auditor:** Automated Test Suite + Pair Programming Assistant
- **QA Status:** `machine_checked`
- **Reviewed By:** `TBD` (menunggu validasi penutur asli / pengajar)

---

## 1. Verifikasi Pemetaan Sumber (Source Map)

| Parameter | Ekspektasi | Hasil Verifikasi | Status |
|---|---|---|---|
| Halaman PDF | PDF p. 6 | `pdfPage: 6` | PASS |
| Halaman Cetak | Cetak p. 5 | `printedPage: 5` (Rumus: PDF - 1) | PASS |
| Audio URL | `01-id-le_01.mp3` | `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/01-id-le_01.mp3` | PASS |
| Audio Timestamp | Dialog Anna–Sakura | Buffer: `01:20–01:35 (perkiraan)` / Dialog: `01:22–01:34` | PASS |
| Ikon Situasi TOC | Perkenalan & Menyapa | Sesuai Indeks PDF p. 3 | PASS |

---

## 2. Kepatuhan Hak Cipta & Link-Only (Gate 1 & Gate 2)

- [x] **Zero Asset Storage:** Tidak ada file MP3 atau PDF yang disimpan di server / repositori lokal.
- [x] **Link-Out Audio:** Audio dibuka melalui tab baru ke URL resmi NHK WORLD dengan tombol khusus bertanda `(Buka di tab baru)`.
- [x] **Kutipan Sahabat Belajar (Fair Use):** Hanya 1 kutipan dialog pendek berlisensi fair use dengan atribusi lengkap ke *NHK WORLD Radio Japan - Belajar Bahasa Jepang 2015*. Tidak ada transkrip utuh dialog yang disalin.
- [x] **Bebas Komik/Ilustrasi:** Karakter digambarkan secara tipografis tanpa menggunakan ilustrasi karakter resmi NHK.

---

## 3. Rubrik Pedagogis 15-Menit (6 Langkah)

1. **Langkah 1: Orient (1–2 Menit)**
   - Can-do statement: *"Memperkenalkan diri sendiri dengan sopan kepada orang lain."*
   - Situasi dan target grammar dijelaskan ringkas.
   - 6 kosakata kunci disajikan dengan furigana (`<ruby>`), romaji, dan arti Indonesia.

2. **Langkah 2: Listen (3–4 Menit)**
   - Panduan audio timestamp: `01:22–01:34`.
   - 2 Pertanyaan Inti (Gist): Menangkap nama karakter dan lokasi dialog.
   - 2 Pertanyaan Rinci (Detail): Menangkap kata sapaan pembuka dan partikel topik.

3. **Langkah 3: Notice (3–4 Menit)**
   - 3 catatan tata bahasa: Partikel `wa` (topik), `desu` (kopula sopan), `ka` (tanya).
   - Penjelasan fokus budaya: Menghindari kata "anata" untuk menyebut nama orang lain.
   - 1 kutipan dialog singkat untuk studi penekanan intonasi.

4. **Langkah 4: Retrieve (3–4 Menit)**
   - 5 latihan interaktif dengan umpan balik instan:
     - 2 Multiple Choice
     - 1 Fill in the Blank
     - 1 Sentence Reordering
     - 1 Meaning Matching
   - Tombol "Tanya Kenapa Salah?" mencatat kesalahan ke Buku Catatan Khusus.

5. **Langkah 5: Use (2–3 Menit)**
   - Tugas produksi nyata: Masukkan nama sendiri ke dalam struktur kalimat *"Watashi wa [Nama] desu"*.
   - Simulasi balasan dari Sakura-san secara dinamis.

6. **Langkah 6: Review (1–2 Menit)**
   - 8 kartu SRS (Spaced Repetition System) otomatis diinjeksikan ke dek belajar pengguna:
     - 4 kartu kosakata (`watashi`, `anata`, `hai`, `iie`)
     - 2 kartu partikel/tata bahasa (`wa`, `desu`)
     - 2 kartu kalimat lengkap
   - Refleksi Can-do diri sendiri sebelum menyelesaikan pelajaran.

---

## 4. Hasil Uji Otomasi (Vitest)

- `src/tests/normalize.test.ts`: PASS (Pembersihan tanda baca, spasi, pencocokan romaji/kana)
- `src/tests/srs.test.ts`: PASS (Algoritma interval bertingkat 1 -> 3 -> 7 -> 14 -> 30 hari, penanganan kesalahan, ekspor/impor)
- `src/tests/content.test.ts`: PASS (48 pelajaran, pemetaan halaman, URL Lesson 11, kuota 5-8 vocab & 8-12 kartu)
- `npm run lint`: PASS (0 error TypeScript)
- `npm run build`: PASS (Bundle production siap deploy)
