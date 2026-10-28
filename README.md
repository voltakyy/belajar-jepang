# Nihongo

Pendamping belajar mandiri untuk kursus **Belajar Bahasa Jepang** NHK WORLD
edisi Anna (2015). Aplikasi web statis, tanpa akun, tanpa server, tanpa
pelacakan. Progres dan kartu ulasan disimpan di peramban.

Aplikasi ini **tidak** menyalin atau menghosting materi NHK. Audio dan naskah
resmi dibuka di situs NHK lewat tautan; yang ada di repositori ini hanya
kerangka belajar, penjelasan berbahasa Indonesia, dan latihan orisinal.

**Coba langsung:** <https://voltakyy.github.io/belajar-jepang/> — dibangun
otomatis oleh GitHub Actions setiap ada push ke `main`.

## Status

Lima pelajaran dari 48 sudah dibangun dan diperiksa mesin (L01–L05). Sisanya
masih berupa peta kurikulum dengan tautan ke sumber resmi.

- L01–L05 lolos type check, 70 unit test, validator konten, dan build
  produksi. Laporan: [`docs/qa-lesson-01.md`](docs/qa-lesson-01.md) dan
  [`docs/qa-lessons-02-05.md`](docs/qa-lessons-02-05.md).
- L02–L05 belum memakai penanda menit audio karena offset dialognya belum
  diukur; UI tidak menampilkan tautan waktu palsu.
- Belum ada peninjauan oleh penutur asli atau pengajar. Status QA masih
  `machine_checked`.
- Belum ada audit aksesibilitas formal (axe/Lighthouse). Repositori ini tidak
  mengklaim WCAG AA.

## Menjalankan

Butuh Node 20 atau lebih baru.

```bash
npm install
npm run dev               # server pengembangan di http://localhost:3000
npm run build             # build produksi ke dist/
npm run preview           # memeriksa hasil build
npm run lint              # tsc --noEmit
npm test                  # vitest
npm run validate-content  # memeriksa silabus dan seluruh pelajaran tertulis
```

## Isi aplikasi

| Bagian | Keterangan |
| --- | --- |
| **Belajar** | Alur enam langkah: orientasi, dengar, sadari pola, latih, pakai, tutup. |
| **Peta** | 48 pelajaran dalam tujuh tahap, dengan tautan audio dan naskah NHK. |
| **Kana** | 46 kana dasar + 25 kana bersuara, hiragana dan katakana, satu tombol per aksara. |
| **Ulasan** | Kartu ulasan berjadwal dan buku catatan kesalahan. |
| **Setelan** | Furigana, rōmaji, ekspor/impor data, status suara perangkat. |

### Suara

Audio dialog **tidak** diputar di dalam aplikasi. Tombol "Dengarkan audio"
membuka berkas MP3 resmi NHK di tab baru, lengkap dengan penanda menit dialog.

Tombol suara pada halaman Kana dan daftar kosakata memakai pembaca suara
bawaan perangkat (`speechSynthesis`). Itu bantuan mengingat bacaan, bukan model
pelafalan, dan otomatis nonaktif bila perangkat belum punya voice `ja-JP`.
Contoh bunyi yang benar tetap audio NHK.

## Struktur

```
src/
  components/       tampilan: beranda, pelajaran, peta, kana, ulasan, setelan
  data/lessons/     isi pelajaran (L01–L05 tertulis, 48 di peta)
  data/kana.ts      tabel hiragana dan katakana
  utils/            SRS, normalisasi jawaban, speech
  tests/            unit test
docs/
  curriculum.md     silabus 48 pelajaran dan pemetaan halaman
  product-plan.md   keputusan produk dan batasan
  source-map.md     verifikasi URL dan halaman sumber
  qa-lesson-01.md   laporan pemeriksaan L01
  qa-lessons-02-05.md laporan pemeriksaan L02–L05
  rights.md         kebijakan hak cipta dan lisensi
scripts/            validator konten dan skrip riset sumber
```

## Prinsip materi

1. **Hanya tautan.** Tidak ada PDF, MP3, ilustrasi, atau transkrip dialog di
   repositori ini. `*.pdf` diabaikan oleh Git.
2. **Kutipan pendek, teratribusi.** Kalimat contoh dari buku dipakai seperlunya
   dengan atribusi. Tidak ada klaim *fair use*; kutipan dihapus bila NHK
   meminta.
3. **Bahasa Indonesia orisinal.** Penjelasan dan latihan ditulis ulang, bukan
   hasil terjemahan mesin.
4. **Jujur soal batas.** Tidak ada klaim JLPT/CEFR, tidak ada klaim kualitas
   yang belum diuji.

## Hak cipta dan lisensi

- **Kode sumber:** MIT — lihat [`LICENSE`](LICENSE).
- **Konten pembelajaran orisinal:** belum ditetapkan. Pemilik proyek masih
  memilih antara CC BY-SA 4.0 dan All Rights Reserved. Sampai keputusan
  diambil, seluruh hak dipertahankan dan tidak ada lisensi yang diberikan.
- **Materi NHK:** e-book, MP3, naskah drama, ilustrasi, dan nama tokoh adalah
  hak cipta NHK WORLD RADIO JAPAN. Tidak ikut dilisensikan ulang.
- Rincian: [`docs/rights.md`](docs/rights.md).

## Penyangkalan

**Penyangkalan Resmi (Disclaimer):**
*Nihongo* adalah aplikasi pendamping belajar independen yang dirancang untuk
membantu pembelajar bahasa Jepang di Indonesia. Aplikasi ini tidak
berafiliasi, disponsori, atau didukung oleh NHK WORLD. Hak cipta materi asli
*Belajar Bahasa Jepang* (berkas PDF e-book, rekaman audio MP3, naskah drama,
dan ilustrasi komik) sepenuhnya dimiliki oleh NHK WORLD RADIO JAPAN.
