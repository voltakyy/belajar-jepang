# Laporan Verifikasi: Pelajaran 21–25

- **Lesson ID:** L21, L22, L23, L24, L25
- **Judul:** Iie, sorehodo demo · Osoku narimashita · Okāsan ni shikararemashita · Tsukawanaide kudasai · Tsukue no shita ni haire
- **Arc:** L21–L25 melanjutkan Arc 4 (Pengalaman & Kebudayaan)
- **Tanggal pemeriksaan:** 2026-10-29
- **Metode:** pembacaan ulang halaman resmi NHK, ekstraksi teks PDF lokal untuk verifikasi halaman, pemeriksaan mesin (type check, test suite, validator konten, build), dan penelusuran alur di peramban pada lebar 390 px
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, kualitas audio per segmen, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Lesson | Judul sumber | PDF | Cetak | Audio | Halaman pelajaran |
|---|---|---|---|---|---|
| L21 | いいえ、それほどでも | 26 | 25 | `21-id-le_01.mp3` | `/learn/list/21.html` |
| L22 | 遅くなりました | 27 | 26 | `22-id-le_01.mp3` | `/learn/list/22.html` |
| L23 | お母さんに叱られました | 28 | 27 | `23-id-le_01.mp3` | `/learn/list/23.html` |
| L24 | 使わないでください | 29 | 28 | `24-id-le_01.mp3` | `/learn/list/24.html` |
| L25 | 机の下に入れ | 30 | 29 | `25-id-le_01.mp3` | `/learn/list/25.html` |

Semua URL berada di `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`.
Naskah dan penjelasan tata bahasa dibaca dari halaman pelajaran resmi; nomor
halaman dicocokkan dengan teks PDF setempat (PDF tidak di-commit). Lima
halaman pelajaran dan lima berkas MP3 dicek pada 2026-10-29 dan mengembalikan
HTTP 200 (`text/html` dan `audio/mpeg`). PDF dua halaman `le21_id_t.pdf`–
`le25_id_t.pdf` juga 200; pemeriksaan yang sama mencakup ke-48 URL PDF.

**Timestamp:** L21–L25 tidak memakai `audioTimestamp`. Offset dialog per
pelajaran belum diukur terhadap durasi MP3 penuh, jadi UI tidak menampilkan
menit dan tidak membuat tautan `#t=`. Hanya L01 yang memiliki offset terukur.

---

## 2. Cakupan Isi

| Lesson | Kosakata | Latihan | Kartu ulasan | Target grammar aktif |
|---|---|---|---|---|
| L21 | 8 | 5 | 9 | いいえ、それほどでも · 上手 dengan partikel が |
| L22 | 8 | 5 | 9 | kata sifat I → ~ku narimashita · ~te wa ikemasen |
| L23 | 8 | 5 | 9 | pasif ~raremashita · lampau negatif ~masen deshita |
| L24 | 8 | 5 | 9 | bentuk NAI · larangan ~naide kudasai |
| L25 | 8 | 5 | 9 | bentuk imperatif · partikel WA dan GA |

Setiap pelajaran juga memiliki 2 pertanyaan inti, 2 pertanyaan rinci, satu
tugas produksi lisan dengan 4–5 butir self-check, dan satu kutipan pendek
teratribusi.

---

## 3. Hasil Pemeriksaan Mesin

Dijalankan 2026-10-29 dari folder proyek:

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 271/271 lulus (4 berkas) |
| Validator konten | `npm run validate-content` | 306/306 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus (JS 698,73 kB / gzip 157,47 kB; CSS 20,26 kB / gzip 4,83 kB) |

Vite memberi peringatan bahwa bundel JS melewati 500 kB. Build tetap berhasil;
ini catatan optimasi, bukan kegagalan.

Validator memeriksa dua puluh lima pelajaran yang ditulis:

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
(order, halaman PDF, URL audio, URL naskah), memeriksa struktur furigana,
dan memastikan `rubyHtml` serta `rubySegments` menghasilkan teks Jepang yang
sama dengan `jp`.

---

## 4. Pemeriksaan Tampilan

Alur berikut dijalankan di Chromium headless pada viewport 390 × 844:

- peta menandai dua puluh lima pelajaran sebagai tersedia (01–25) dan sisanya
  "Belum tersedia";
- L21–L25: judul pelajaran, orientasi, dan langkah dengar, termasuk tombol
  "Dengarkan audio" serta tautan naskah NHK yang benar;
- L21–L25: latihan pertama dijawab benar dan umpan balik "Tepat." muncul;
- tidak ada error konsol dan tidak ada overflow horizontal
  (`scrollWidth` 390 = `clientWidth` 390).

Teks inti tiap pelajaran muncul di orientasi, dan kartu sumber resmi tampil
di langkah dengar. Tautan audio mengarah ke `NN-id-le_01.mp3` yang sesuai,
bukan ke berkas pelajaran lain.

---

## 5. Catatan Sumber dan Keputusan Cakupan

- **L21.** Sumber memiliki dua petunjuk tata bahasa: いいえ、それほどでも dan
  bentuk NAI. Karena batas dua target aktif, pelajaran memilih いいえ、
  それほどでも dan 上手 dari dialog sebagai target. Bentuk NAI tetap muncul
  di dialog (間に合わない) dan dijelaskan kembali di L24 sebagai dasar
  larangan ~naide kudasai. Keputusan ini disengaja, bukan klaim bahwa bentuk
  NAI tidak ada di sumber L21.
- **L22.** Sumber menyebut pembilang menit FUN/PUN sebagai referensi.
  Pelajaran tidak menjadikannya target grammar aktif; １０分 masuk sebagai
  kosakata dengan bacaan じっぷん, sesuai audio dan halaman resmi.
- **L23.** Sumber menyusun MASEN DESHITA lebih dulu, lalu ungkapan pasif.
  Pelajaran membalik urutannya agar pasif menjadi pola utama yang diceritakan
  Anna, lalu menutup dengan lampau negatif. 叱ります diajarkan sebagai bentuk
  kamus “memarahi”; bentuk pasifnya muncul di konteks dan judul.
- **L24.** “Kata yang menunjukkan waktu” dari sumber tidak dijadikan target
  grammar tersendiri; 今日, 来週, dan 月曜日 masuk sebagai kosakata. Fokus
  grammar ada pada pembentukan NAI dan larangan ~naide kudasai.
- **L25.** Sumber memiliki tiga bagian: ~yō da, perbedaan WA/GA, dan bentuk
  imperatif. Dua target aktif adalah imperatif serta WA/GA. ~yō da hanya
  dikenali saat mendengar (dijelaskan di pertanyaan rinci), bukan kartu
  grammar, karena UI belum membedakan label `recognition_reference`.

---

## 6. Catatan Koreksi

- L21 sempat rusak encoding saat penulisan; berkas diperbaiki, lalu seluruh
  teks Jepang dan struktur ruby diperiksa ulang. Test integritas ruby
  menemukan tiga `rubyHtml` yang kehilangan partikel に pada 間に合わない;
  ketiganya diperbaiki.
- L23 V1 sempat memakai kana `まにああった` dan rūmaji `maniattta`; kini
  `まにあった` / `maniatta`, dan ruby この間 / 門限 / 間に合った diselaraskan.
- L23 tugas produksi sempat menyuruh pembelajar mengucapkan それは大変だったね,
  padahal itu tanggapan lawan bicara. Instruksi diganti dengan penutup
  本当に大変でした yang diucapkan Anna, dan model jawabannya diselaraskan.
- L24 pola larangan ditulis ulang menjadi `[bentuk NAI] + でください
  (~naide kudasai)` agar tidak terbaca sebagai “NAI de kudasai” tanpa
  penjelasan.
- L25 contoh ketiga diganti menjadi 私はコーヒーが好きです agar benar-benar
  memperlihatkan は (topik) dan が (fokus predikat), bukan hanya は.
- L22 memakai `１０分` / `１０分も` dengan ruby じっぷん; varian じゅっぷん
  tidak dipakai karena audio dan halaman memilih じっぷん.

---

## 7. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan L21–L25.
2. **Audio belum diverifikasi oleh telinga manusia.** Naskah dicocokkan dengan
   halaman resmi, tetapi isi rekaman dan durasi tiap segmen tidak diuji.
3. **TTS bukan model pelafalan.** Tombol kata memakai voice `ja-JP` perangkat.
   Audio NHK tetap satu-satunya contoh bunyi.
4. **Aksesibilitas belum diuji formal.** Tidak ada axe, Lighthouse, atau uji
   pembaca layar; tidak ada klaim WCAG.
5. **Belum ada uji pengguna.** Alur 15 menit belum dicoba pembelajar sungguhan.
6. **Bundel JS 698 kB.** Peringatan Vite masih muncul; pemecahan bundel belum
   dikerjakan.
7. **Lisensi konten:** kode MIT; konten orisinal CC BY-SA 4.0; materi NHK
   tetap © NHK dan tidak ikut dilisensikan ulang.
