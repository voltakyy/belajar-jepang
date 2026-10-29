# Laporan Verifikasi: Pelajaran 16–20

- **Lesson ID:** L16, L17, L18, L19, L20
- **Judul:** Kaidan o agatte, migi ni itte kudasai · Osusume wa nan desu ka · Michi ni mayotte shimaimashita · Yokatta · Nihon no uta o utatta koto ga arimasu ka
- **Arc:** L16–L19 melanjutkan Arc 3 (Perbelanjaan, Arah, dan Insiden Kecil); L20 membuka Arc 4 (Pengalaman & Kebudayaan)
- **Tanggal pemeriksaan:** 2026-10-29
- **Metode:** pembacaan ulang halaman resmi NHK, ekstraksi teks PDF lokal untuk verifikasi halaman, pemeriksaan mesin (type check, test suite, validator konten, build), dan penelusuran alur di peramban pada lebar 390 px
- **Status QA:** `machine_checked`
- **Reviewed by:** `TBD` — belum ada peninjauan oleh penutur asli atau pengajar
- **Yang belum diverifikasi:** pelafalan model, kesesuaian budaya, kualitas audio per segmen, dan aksesibilitas formal

---

## 1. Pemetaan Sumber

| Lesson | Judul sumber | PDF | Cetak | Audio | Halaman pelajaran |
|---|---|---|---|---|---|
| L16 | 階段を上がって、右に行ってください | 21 | 20 | `16-id-le_01.mp3` | `/learn/list/16.html` |
| L17 | おすすめは何ですか | 22 | 21 | `17-id-le_01.mp3` | `/learn/list/17.html` |
| L18 | 道に迷ってしまいました | 23 | 22 | `18-id-le_01.mp3` | `/learn/list/18.html` |
| L19 | よかった | 24 | 23 | `19-id-le_01.mp3` | `/learn/list/19.html` |
| L20 | 日本の歌を歌ったことがありますか | 25 | 24 | `20-id-le_01.mp3` | `/learn/list/20.html` |

Semua URL berada di `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`.
Naskah dan penjelasan tata bahasa dibaca dari halaman pelajaran resmi; nomor
halaman dicocokkan dengan teks PDF setempat (PDF tidak di-commit).

**Timestamp:** L16–L20 tidak memakai `audioTimestamp`. Offset dialog per
pelajaran belum diukur terhadap durasi MP3 penuh, jadi UI tidak menampilkan
menit dan tidak membuat tautan `#t=`. Hanya L01 yang memiliki offset terukur.

---

## 2. Cakupan Isi

| Lesson | Kosakata | Latihan | Kartu ulasan | Target grammar aktif |
|---|---|---|---|---|
| L16 | 8 | 5 | 9 | bentuk TE untuk urutan tindakan · に untuk letak keberadaan |
| L17 | 8 | 5 | 9 | `osusume wa nan desu ka` · `chotto` untuk menolak halus |
| L18 | 8 | 5 | 9 | bentuk TE + `shimaimashita` · posisi `mae`/`ushiro`/`tonari` |
| L19 | 8 | 5 | 9 | bentuk lampau kata sifat · `node` (karena) |
| L20 | 8 | 5 | 9 | bentuk TA + `koto ga arimasu` · `donna` + kata benda, `tokui` |

Setiap pelajaran juga memiliki 2 pertanyaan inti, 2 pertanyaan rinci, satu
tugas produksi lisan dengan 4 butir self-check, dan satu kutipan pendek
teratribusi.

---

## 3. Hasil Pemeriksaan Mesin

Dijalankan 2026-10-29 dari folder proyek:

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Type check | `npm run lint` | lulus, 0 error |
| Unit test | `npm test` | 221/221 lulus (4 berkas) |
| Validator konten | `npm run validate-content` | 245/245 pemeriksaan lulus |
| Build produksi | `npm run build` | lulus (JS 622,47 kB / gzip 143,92 kB; CSS 20,26 kB / gzip 4,83 kB) |

Vite memberi peringatan bahwa bundel JS melewati 500 kB. Build tetap berhasil;
ini catatan optimasi, bukan kegagalan.

Validator memeriksa dua puluh pelajaran yang ditulis:

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

- peta menandai dua puluh pelajaran sebagai tersedia (01–20) dan sisanya
  "Belum tersedia";
- L16–L20: orientasi dan langkah dengar, termasuk tombol "Dengarkan audio"
  dan "Baca naskah di NHK";
- L16: latihan 1 (partikel) dan latihan 2 (susun kata) dijawab benar;
- L16: langkah pakai terbuka.

Hasil: tidak ada error konsol, tidak ada overflow horizontal
(`scrollWidth` 390 = `clientWidth` 390), dan tidak ada tautan waktu palsu.
Teks inti tiap pelajaran muncul di orientasi, dan kartu sumber resmi tampil
di langkah dengar.

---

## 5. Batasan yang Belum Diselesaikan

1. **Belum ada review manusia.** Tidak ada penutur asli atau pengajar yang
   memeriksa furigana, padanan Indonesia, atau kesantunan L16–L20.
2. **Audio belum diverifikasi oleh telinga manusia.** Naskah dicocokkan dengan
   halaman resmi, tetapi isi rekaman dan durasi tiap segmen tidak diuji.
3. **TTS bukan model pelafalan.** Tombol kata memakai voice `ja-JP` perangkat.
   Audio NHK tetap satu-satunya contoh bunyi.
4. **Aksesibilitas belum diuji formal.** Tidak ada axe, Lighthouse, atau uji
   pembaca layar; tidak ada klaim WCAG.
5. **Belum ada uji pengguna.** Alur 15 menit belum dicoba pembelajar sungguhan.
6. **Bundel JS 622 kB.** Peringatan Vite masih muncul; pemecahan bundel belum
   dikerjakan.
7. **Lisensi konten:** kode MIT; konten orisinal CC BY-SA 4.0; materi NHK
   tetap © NHK dan tidak ikut dilisensikan ulang.

---

## 6. Catatan Koreksi

- L16: に untuk keberadaan dibedakan dari で untuk tempat beraktivitas.
- L17: ちょっと… dijelaskan sebagai penolakan halus, bukan kata "sedikit"
  biasa; だめです tidak dipakai dalam contoh sopan.
- L18: てしまいました dibedakan dari bentuk lampau biasa; 目の前 dijelaskan
  sebagai 目 + の + 前, bukan satu kata.
- L19: いい → よかった ditandai sebagai pengecualian; ので dibedakan dari
  から yang lebih langsung.
- L20: bentuk TA + ことがあります dibedakan dari ました biasa; どんな
  dijelaskan selalu diikuti kata benda.
- Pemeriksaan integritas ruby yang baru menemukan dua ketidaksesuaian lama:
  L05 memakai 漫画 di `rubyHtml` tetapi マンガ di `jp`, dan L10 memakai
  測ります di `rubyHtml` tetapi はかります di `jp`. Keduanya diselaraskan
  dengan teks `jp`.
