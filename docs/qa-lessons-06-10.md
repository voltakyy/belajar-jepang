# Laporan Verifikasi: Pelajaran 06–10

- **Lesson ID:** L06, L07, L08, L09, L10
- **Judul:** Denwabangō wa nanban desu ka · Shūkurīmu wa arimasu ka · Mō ichido onegai shimasu · Nanji kara desu ka · Zen-in imasu ka
- **Arc:** L06 menutup Arc 1; L07–L10 membuka Arc 2: Kehidupan Kampus & Jadwal Kegiatan
- **Tanggal pemeriksaan:** 2026-10-29
- **Metode:** pembacaan ulang halaman resmi NHK, ekstraksi teks PDF lokal untuk verifikasi halaman, pemeriksaan mesin (test suite, validator konten, build), dan penelusuran alur di peramban pada lebar 390 px
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, kualitas audio per segmen, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Lesson | Judul sumber | PDF | Cetak | Audio | Halaman pelajaran |
|---|---|---|---|---|---|
| L06 | 電話番号は何番ですか | 11 | 10 | `06-id-le_01.mp3` | `/learn/list/6.html` |
| L07 | シュークリームはありますか | 12 | 11 | `07-id-le_01.mp3` | `/learn/list/7.html` |
| L08 | もう一度お願いします | 13 | 12 | `08-id-le_01.mp3` | `/learn/list/8.html` |
| L09 | 何時からですか | 14 | 13 | `09-id-le_01.mp3` | `/learn/list/9.html` |
| L10 | 全員いますか | 15 | 14 | `10-id-le_01.mp3` | `/learn/list/10.html` |

Semua URL berada di `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`.
Naskah dan penjelasan tata bahasa dibaca dari halaman pelajaran resmi; nomor
halaman dicocokkan dengan teks PDF setempat (PDF tidak di-commit).

**Timestamp:** L06–L10 sengaja tidak memakai `audioTimestamp`. Offset dialog
per pelajaran belum diukur terhadap durasi MP3 penuh, jadi UI tidak menampilkan
menit dan tidak membuat tautan `#t=`. Hanya L01 yang memiliki offset terukur.

---

## 2. Cakupan Isi

| Lesson | Kosakata | Latihan | Kartu ulasan | Target grammar aktif |
|---|---|---|---|---|
| L06 | 8 | 5 | 9 | `A wa nanban desu ka` · kata benda + `o shimasu` |
| L07 | 8 | 5 | 9 | `A wa arimasu ka` · `A o [jumlah] kudasai` |
| L08 | 8 | 5 | 9 | kata kerja bentuk TE + `kudasai` · `mō ichido onegai shimasu` |
| L09 | 8 | 5 | 9 | `A kara B made` · `nanji` / `~ji` / `~ji han` |
| L10 | 8 | 5 | 9 | bentuk `mashita` · `imasu` / `arimasu` |

Setiap pelajaran juga memiliki 2 pertanyaan inti, 2 pertanyaan rinci, satu
tugas produksi lisan dengan 4 butir self-check, dan satu kutipan pendek
teratribusi.

---

## 3. Hasil Pemeriksaan Mesin

Dijalankan 2026-10-29 dari folder proyek:

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 120/120 lulus (3 berkas) |
| Validator konten | `npm run validate-content` | 125/125 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus (JS 465,26 kB / gzip 118,78 kB; CSS 20,26 kB / gzip 4,83 kB) |

Validator memeriksa sepuluh pelajaran yang ditulis:

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
(order, halaman PDF, URL audio, URL naskah) serta memeriksa struktur furigana.

---

## 4. Pemeriksaan Tampilan

Alur berikut dijalankan di Chromium headless pada viewport 390 × 844:

- peta menandai sepuluh pelajaran sebagai tersedia (01–10) dan sisanya
  "Belum tersedia";
- L06–L10: orientasi dan langkah dengar;
- L10: dengar → sadari → latih (jawaban benar) → pakai.

Hasil: tidak ada error konsol, tidak ada overflow horizontal
(`scrollWidth` 390 = `clientWidth` 390), dan tidak ada tautan waktu palsu.
Langkah dengar L06–L10 menampilkan kartu "Sumber resmi" dengan tombol audio
dan naskah yang mengarah ke NHK.

---

## 5. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan L06–L10.
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

- L06: kunci jawaban latihan susun kata sempat memuat spasi salah
  (`なんばんです か`); diperbaiki menjadi `なんばんですか`.
- L07: padanan Indonesia memakai "kue sus", istilah yang lazim di Indonesia.
  Halaman NHK memakai "kue krim"; keduanya diterima, tetapi UI memilih satu
  istilah agar konsisten.
- L10: kosakata `遅れます` ditampilkan dalam bentuk kamus, sedangkan kalimat
  konteks memakai bentuk lampau `遅れました`; perbedaan ini dijelaskan di
  poin tata bahasa `mashita`.
- `kanji` yang isinya sama dengan `kana` tidak diulang agar furigana tidak
  tampil ganda.
