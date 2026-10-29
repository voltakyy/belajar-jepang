# Laporan Verifikasi: Pelajaran 11–15

- **Lesson ID:** L11, L12, L13, L14, L15
- **Judul:** Zehi kite kudasai · Itsu Nihon ni kimashita ka · Shōsetsu ga suki desu · Koko ni gomi o sutete mo ii desu ka · Nete imasu
- **Arc:** L11–L12 menutup Arc 2; L13–L15 membuka Arc 3: Pilihan Keseharian, Arah & Insiden Kecil
- **Tanggal pemeriksaan:** 2026-10-29
- **Metode:** pembacaan ulang halaman resmi NHK, ekstraksi teks PDF lokal untuk verifikasi halaman, pemeriksaan mesin (test suite, validator konten, build), dan penelusuran alur di peramban pada lebar 390 px
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, kualitas audio per segmen, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Lesson | Judul sumber | PDF | Cetak | Audio | Halaman pelajaran |
|---|---|---|---|---|---|
| L11 | ぜひ来てください | 16 | 15 | `11-id-le_02.mp3` | `/learn/list/11.html` |
| L12 | いつ日本に来ましたか | 17 | 16 | `12-id-le_01.mp3` | `/learn/list/12.html` |
| L13 | 小説が好きです | 18 | 17 | `13-id-le_01.mp3` | `/learn/list/13.html` |
| L14 | ここにゴミを捨ててもいいですか | 19 | 18 | `14-id-le_01.mp3` | `/learn/list/14.html` |
| L15 | 寝ています | 20 | 19 | `15-id-le_01.mp3` | `/learn/list/15.html` |

Semua URL berada di `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`.
Naskah dan penjelasan tata bahasa dibaca dari halaman pelajaran resmi; nomor
halaman dicocokkan dengan teks PDF setempat (PDF tidak di-commit).

**Anomali audio L11:** berkas resmi Pelajaran 11 memakai `11-id-le_02.mp3`,
bukan `_01.mp3`. URL ini sudah diverifikasi dan sengaja dipakai; validator
kini menerima pola `_02` khusus untuk L11.

**Timestamp:** L11–L15 sengaja tidak memakai `audioTimestamp`. Offset dialog
per pelajaran belum diukur terhadap durasi MP3 penuh, jadi UI tidak menampilkan
menit dan tidak membuat tautan `#t=`. Hanya L01 yang memiliki offset terukur.

---

## 2. Cakupan Isi

| Lesson | Kosakata | Latihan | Kartu ulasan | Target grammar aktif |
|---|---|---|---|---|
| L11 | 8 | 5 | 9 | `zehi` + bentuk TE + `kudasai` · `ikimasu` / `kimasu` |
| L12 | 8 | 5 | 9 | `itsu` + `mashita ka` · angka + `gatsu` |
| L13 | 8 | 5 | 9 | `A wa B ga suki desu` · `masen ka` |
| L14 | 8 | 5 | 9 | bentuk TE + `mo ii desu ka` · `kara` (alasan) |
| L15 | 8 | 5 | 9 | `mashou` · bentuk TE + `imasu` |

Setiap pelajaran juga memiliki 2 pertanyaan inti, 2 pertanyaan rinci, satu
tugas produksi lisan dengan 4 butir self-check, dan satu kutipan pendek
teratribusi.

---

## 3. Hasil Pemeriksaan Mesin

Dijalankan 2026-10-29 dari folder proyek:

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 170/170 lulus (3 berkas) |
| Validator konten | `npm run validate-content` | 185/185 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus (JS 544,89 kB / gzip 131,48 kB; CSS 20,26 kB / gzip 4,83 kB) |

Vite memberi peringatan bahwa bundel JS melewati 500 kB. Build tetap berhasil;
ini catatan optimasi, bukan kegagalan.

Validator memeriksa lima belas pelajaran yang ditulis:

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

- peta menandai lima belas pelajaran sebagai tersedia (01–15) dan sisanya
  "Belum tersedia";
- L11–L15: orientasi dan langkah dengar, termasuk tombol "Dengarkan audio"
  dan "Baca naskah di NHK";
- L15: dengar → sadari → latih (jawaban benar) → pakai.

Hasil: tidak ada error konsol, tidak ada overflow horizontal
(`scrollWidth` 390 = `clientWidth` 390), dan tidak ada tautan waktu palsu.
Teks inti tiap pelajaran muncul di orientasi, dan kartu sumber resmi tampil
di langkah dengar.

---

## 5. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan L11–L15.
2. **Audio belum diverifikasi oleh telinga manusia.** Naskah dicocokkan dengan
   halaman resmi, tetapi isi rekaman dan durasi tiap segmen tidak diuji.
3. **TTS bukan model pelafalan.** Tombol kata memakai voice `ja-JP` perangkat.
   Audio NHK tetap satu-satunya contoh bunyi.
4. **Aksesibilitas belum diuji formal.** Tidak ada axe, Lighthouse, atau uji
   pembaca layar; tidak ada klaim WCAG.
5. **Belum ada uji pengguna.** Alur 15 menit belum dicoba pembelajar sungguhan.
6. **Lisensi konten:** kode MIT; konten orisinal CC BY-SA 4.0; materi NHK
   tetap © NHK dan tidak ikut dilisensikan ulang.

---

## 6. Catatan Koreksi

- L11: audio resmi memakai `_02`, bukan `_01`; validator disesuaikan agar
  tidak memberi alarm palsu.
- L12: bacaan bulan tidak beraturan (４月 しがつ, ７月 しちがつ, ９月 くがつ)
  ditulis eksplisit agar tidak dibaca dengan pola angka biasa.
- L13: partikel が pada 好き dijelaskan sebagai ciri kata sifat, bukan objek
  kata kerja; ini sering keliru ditulis dengan を.
- L14: から dijelaskan sebagai penanda alasan yang menempel pada klausa,
  berbeda dari から penanda titik awal waktu di L09.
- L15: ましょう dibedakan dari ませんか (L13); ましょう lebih tegas, sedangkan
  ませんか memberi ruang menolak.
- `kanji` yang isinya sama dengan `kana` tidak diulang agar furigana tidak
  tampil ganda.
