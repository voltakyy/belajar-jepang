# Laporan Verifikasi: Pelajaran 01 (Gate 2)

- **Lesson ID:** L01
- **Judul:** Watashi wa Anna desu (Saya Anna)
- **Situasi TOC:** Di universitas, Acara Khusus
- **Arc:** Arc 1: Identitas & Fondasi Interaksi Awal (L01–L06)
- **Tanggal pemeriksaan:** 2026-10-28
- **Metode:** pemeriksaan mesin (test suite, validator konten, build) + pemeriksaan manual halaman sumber
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Parameter | Nilai | Bukti |
|---|---|---|
| Halaman PDF | 6 | `pdfPage: 6` |
| Halaman cetak | 5 | `printedPage: 5` (aturan cetak = PDF − 1) |
| Judul sumber | 私はアンナです | h2 Pelajaran 1, halaman cetak 5 |
| Audio | `.../learn/mp3/01-id-le_01.mp3` | URL terverifikasi; segmen dialog 01:22–01:34 |
| Ikon situasi | Di universitas, Acara Khusus | Indeks TOC, PDF p. 3–4 |
| Titik grammar | `A wa B desu`, pengenalan aksara | Halaman pelajaran, kolom tata bahasa |

Catatan: `audioTimestamp` disimpan sebagai `01:22`–`01:34` dengan buffer
`01:20`–`01:35`. Angka ini berasal dari penyelarasan klip `sc01`–`sc04` dengan
MP3 penuh (600,08 detik), bukan perkiraan kasar.

---

## 2. Kepatuhan Hak Cipta

- **Tidak ada PDF/MP3 yang di-commit.** Berkas
  `ebook_bahasa_jepang_nhk.pdf` memang ada di folder kerja lokal, tetapi
  masuk `.gitignore` dan tidak boleh di-commit. Repositori hanya berisi kode,
  dokumen, dan metadata.
- **Metadata, bukan naskah.** `all_lessons_nhk.json` dan
  `scraped_lessons.json` menyimpan nomor pelajaran, halaman, judul, dan URL.
  Keduanya tidak memuat transkrip dialog.
- **Audio keluar dari aplikasi.** Tidak ada pemutar tersemat dan tidak ada
  hotlink media. Tombol audio membuka berkas resmi NHK di tab baru.
- **Kutipan.** Hanya satu kalimat pendek dengan atribusi. Dokumen ini tidak
  mengklaim *fair use*; mengacu pada `docs/rights.md`, kutipan akan dihapus
  bila NHK meminta.
- **Ilustrasi.** Tidak ada gambar karakter atau komik NHK yang dipakai.
  Karakter hanya disebut sebagai teks.
- **Batas yang jujur.** Yurisdiksi hak cipta berbeda-beda. Dokumen ini
  mencatat praktik yang dipakai, bukan jaminan hukum.

---

## 3. Isi Pelajaran (sesuai implementasi)

### Langkah 1 — Orientasi
- 6 kosakata: 私, 初めまして, よろしくお願いします, こちらこそ, アンナ, さくら.
- Furigana memakai `<ruby>/<rt>`; rōmaji adalah toggle, bukan tampilan default.
- Tombol suara per kata memakai TTS perangkat (lihat §5).

### Langkah 2 — Dengar
- Tautan audio dan naskah resmi ditampilkan sebagai blok "Sumber resmi"
  dengan penjelasan dan dua tombol, bukan tautan abu-abu kecil.
- 2 pertanyaan inti (gist): pelaku dialog dan tujuan interaksi.
- 2 pertanyaan rinci (detail): salam pembuka dan salam penutup.

### Langkah 3 — Sadari
- 2 titik grammar aktif: `A wa B desu` dan salam perkenalan.
- Catatan kontras: は ditulis "ha" tetapi dibaca "wa"; `anata` dihindari.
- 1 kutipan pendek teratribusi + tautan naskah resmi.

### Langkah 4 — Latih
- 5 butir: cloze partikel, susun kalimat, pilihan makna, recall ke Jepang,
  transformasi grammar.
- Kesalahan otomatis masuk buku catatan.
- Susun kalimat baru diperiksa setelah semua token terpasang.

### Langkah 5 — Pakai
- Tugas produksi dengan nama sendiri + 4 butir self-check.
- Contoh jawaban memakai nama Anna dari dialog, dengan catatan agar
  pembelajar menggantinya.

### Langkah 6 — Tutup
- 8 kartu masuk antrean SRS: わたし, はじめまして,
  よろしくおねがいします, は, です, こちらこそ, kartu listening, kartu output.
- Ambang: minimal 3 dari 4 self-check sebelum sesi ditutup.

---

## 4. Hasil Uji (dijalankan 2026-10-28)

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 70/70 lulus (3 berkas, mencakup L01–L05) |
| Validator konten | `npm run validate-content` | 65/65 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus, JS 391,16 kB (gzip 106,85 kB), CSS 20,26 kB (gzip 4,83 kB) |

Yang diperiksa validator: 48/48 pelajaran di `COURSE_MAP`, audio L11 memakai
`11-id-le_02.mp3`, status QA semua pelajaran tertulis, jumlah kosakata/latihan/
kartu, target grammar, tautan audio ke server NHK, dan tidak adanya pemutar
audio tersemat. Rincian L02–L05 ada di
[`qa-lessons-02-05.md`](qa-lessons-02-05.md).

---

## 5. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan.
2. **TTS bukan model pelafalan.** Tombol suara memakai voice `ja-JP` bawaan
   perangkat. Kualitas dan ketersediaannya berbeda antar perangkat; aplikasi
   menonaktifkan tombol bila voice tidak ada. Audio NHK tetap satu-satunya
   contoh bunyi.
3. **Aksesibilitas belum diuji formal.** Belum ada axe, Lighthouse, atau uji
   pembaca layar. Klaim "WCAG AA" karena itu tidak dipakai. Kontras token
   sudah dinaikkan, tetapi belum diukur dengan alat.
4. **Belum ada uji pengguna.** Alur 15 menit belum dicoba oleh pembelajar
   sungguhan.
5. **Lisensi konten belum dipilih.** Opsi A (CC BY-SA 4.0) atau B
   (All Rights Reserved) masih menunggu keputusan pemilik proyek. Kode
   berlisensi MIT.

---

## 6. Riwayat Koreksi

Kesalahan pada versi laporan sebelumnya yang sudah dibetulkan:

- URL MP3 sempat ditulis dengan path `/learn/list/` — seharusnya `/learn/mp3/`.
- Arc 1 sempat ditulis L01–L08 — seharusnya L01–L06.
- Klaim "Zero Asset Storage" terlalu absolut — PDF ada di folder lokal
  (gitignored), jadi pernyataan dipertajam.
- Klaim "fair use" bertentangan dengan `rights.md` — dihapus.
- Daftar kartu SRS sempat menyebut `watashi, anata, hai, iie` — bukan isi
  kartu yang sebenarnya.
- Klaim "WCAG AA" tanpa pengujian — dihapus dan diganti batasan di §5.
