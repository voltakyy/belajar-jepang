# Laporan Verifikasi: Pelajaran 02–05

- **Lesson ID:** L02, L03, L04, L05
- **Judul:** Kore wa nan desu ka · Toire wa doko desu ka · Tadaima · Sore wa watashi no takaramono desu
- **Arc:** Arc 1: Identitas & Fondasi Interaksi Awal (L01–L06)
- **Tanggal pemeriksaan:** 2026-10-28
- **Metode:** pembacaan ulang halaman resmi NHK, ekstraksi teks PDF lokal untuk verifikasi halaman, pemeriksaan mesin (test suite, validator konten, build), dan penelusuran alur di peramban pada lebar 390 px
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, kualitas audio per segmen, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Lesson | Judul sumber | PDF | Cetak | Audio | Halaman pelajaran |
|---|---|---|---|---|---|
| L02 | これは何ですか | 7 | 6 | `02-id-le_01.mp3` | `/learn/list/2.html` |
| L03 | トイレはどこですか | 8 | 7 | `03-id-le_01.mp3` | `/learn/list/3.html` |
| L04 | ただいま | 9 | 8 | `04-id-le_01.mp3` | `/learn/list/4.html` |
| L05 | それは私の宝物です | 10 | 9 | `05-id-le_01.mp3` | `/learn/list/5.html` |

Semua URL berada di `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`.
Naskah dan penjelasan tata bahasa dibaca dari halaman pelajaran resmi; nomor
halaman dicocokkan dengan teks PDF setempat (PDF tidak di-commit).

**Timestamp:** L02–L05 sengaja tidak memakai `audioTimestamp`. Offset dialog
per pelajaran belum diukur terhadap durasi MP3 penuh, jadi UI tidak menampilkan
menit dan tidak membuat tautan `#t=`. Untuk L01 offset `01:22–01:34` sudah
diukur dan tetap dipakai.

---

## 2. Cakupan Isi

| Lesson | Kosakata | Latihan | Kartu ulasan | Target grammar aktif |
|---|---|---|---|---|
| L02 | 8 | 5 | 8 | `A wa nan desu ka` · partikel `no` |
| L03 | 8 | 5 | 9 | `A wa doko desu ka` · `koko/soko/asoko` |
| L04 | 8 | 5 | 8 | jawaban `hai/iie` · `dewa arimasen` |
| L05 | 8 | 5 | 9 | kata kerja bentuk `masu` · partikel `o` |

Setiap pelajaran juga memiliki 2 pertanyaan inti, 2 pertanyaan rinci, satu
tugas produksi lisan dengan 4 butir self-check, dan satu kutipan pendek
teratribusi.

---

## 3. Hasil Pemeriksaan Mesin

Dijalankan 2026-10-28 dari folder proyek:

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 70/70 lulus (3 berkas) |
| Validator konten | `npm run validate-content` | 65/65 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus |

Validator sekarang memeriksa setiap pelajaran yang ditulis, bukan hanya L01:

- id pelajaran ada dan diimpor di `ALL_LESSONS`;
- jumlah kosakata 5–8, latihan 4–8, kartu ulasan 8–12;
- maksimal 2 target grammar aktif;
- status `machine_checked` dan `reviewedBy: 'TBD'` pada metadata pelajaran;
- setiap kosakata, latihan, dan kartu membawa `qaStatus: 'machine_checked'`;
- URL audio dan halaman pelajaran menunjuk server resmi NHK;
- kutipan pendek memiliki atribusi NHK;
- tugas produksi tersedia;
- tidak ada elemen `<audio>` atau pemutar tersemat di aplikasi.

Unit test juga mencocokkan setiap pelajaran dengan entri `COURSE_MAP`
(order, halaman PDF, URL audio, URL naskah).

---

## 4. Pemeriksaan Tampilan

Alur berikut dijalankan di Chromium headless pada viewport 390 × 844:

- beranda menampilkan pelajaran berikutnya dari progres, bukan L01 yang
  di-hardcode;
- peta menandai lima pelajaran sebagai tersedia (01–05) dan sisanya
  "Belum tersedia";
- L02: orientasi → dengar → sadari → latih (jawaban benar) → pakai;
- L03, L04, L05: orientasi dan langkah dengar.

Hasil: tidak ada error konsol, tidak ada teks "menit yang tertera" pada
pelajaran tanpa timestamp, dan tidak ada tautan waktu palsu.

---

## 5. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan L02–L05.
2. **Audio belum diverifikasi oleh telinga manusia.** Naskah dicocokkan dengan
   halaman resmi, tetapi isi rekaman dan durasi tiap segmen tidak diuji.
3. **TTS bukan model pelafalan.** Tombol kata memakai voice `ja-JP` perangkat.
   Audio NHK tetap satu-satunya contoh bunyi.
4. **Aksesibilitas belum diuji formal.** Tidak ada axe, Lighthouse, atau uji
   pembaca layar; tidak ada klaim WCAG.
5. **Belum ada uji pengguna.** Alur 15 menit belum dicoba pembelajar sungguhan.
6. **Lisensi konten belum dipilih.** Kode MIT; konten orisinal masih
   all rights reserved sampai pemilik proyek memutuskan.

---

## 6. Catatan Koreksi

- `kanji` yang isinya sama dengan `kana` (これ, それ, どこ, すぐ, こんにちは,
  ありがとうございます, すごい) dihapus agar furigana tidak tampil ganda.
- Rujukan sumber L02 butir pertanyaan dipindahkan ke kolom yang benar:
  penjelasan partikel `ka` ada di "Sensei, Oshiete", bukan kotak tata bahasa.
- Rujukan L04 butir `hai/iie` diarahkan ke dialog, karena kotak tata bahasa L04
  hanya membahas `dewa arimasen`.
- Rujukan L05 bentuk `masu` diarahkan ke "Sensei, Oshiete".
