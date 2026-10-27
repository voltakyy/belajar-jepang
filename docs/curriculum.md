# KURIKULUM & PETA CAPAIAN BELAJAR (CURRICULUM & CAN-DO MAP)

Dokumen ini memetakan rancangan instruksional aplikasi **Nihongo**, jenjang capaian, silabus 48 pelajaran ke dalam 7 *Product Arcs*, 7 Kategori Situasi resmi TOC, serta spesifikasi lengkap untuk **Slice Vertikal Pelajaran 1**.

---

## 1. Jenjang Target & Filosofi Kurikulum
* **Jenjang Sasaran:** **Pemula Dasar (Beginner to Elementary)**.
* **Kepatuhan Pelabelan:** Aplikasi **TIDAK melabeli kursus ini sebagai "Lulus JLPT N3/N4"**. Seluruh capaian dirumuskan menggunakan *Can-Do Statements* fungsional untuk kebutuhan komunikasi praktis di Jepang.
* **Format Penulisan Teks Jepang & Tipografi:**
  * Aksara Kanji dilengkapi Furigana presisi menggunakan elemen standar HTML5:  
    `<ruby>私<rt>わたし</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です` (tanpa tag `<rb>` yang sudah usang).
  * Tampilan Rōmaji disediakan sebagai tombol transisi (*toggle*), bukan tampilan default permanen.
  * Tipografi mengandalkan *system font stack* bebas kuota data seluler:
    `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`.

---

## 2. Struktur Situasi Resmi TOC vs 7 Product Arcs

Materi sumber e-book menyematkan 1–2 ikon situasi resmi pada setiap pelajaran di halaman Indeks (**PDF p. 3–4 / Cetak p. 2–3**):
1. **Di universitas**
2. **Di asrama**
3. **Perbelanjaan & Restoran**
4. **Kebudayaan Jepang**
5. **Bepergian & Berjalan-jalan**
6. **Penyelesaian masalah**
7. **Acara Khusus**

Aplikasi mempertahankan tag situasi resmi ini sebagai metadata multi-label (`situationCategories: string[]`), dan menyusun materi secara pedagogis ke dalam **7 Product Arcs**:

```
[Arc 1: Pelajaran 1–6]   -> Identitas & Fondasi Interaksi Awal
[Arc 2: Pelajaran 7–12]  -> Kehidupan Kampus & Jadwal Kegiatan
[Arc 3: Pelajaran 13–19] -> Pilihan Keseharian, Arah & Insiden Kecil
[Arc 4: Pelajaran 20–27] -> Interaksi Sosial, Pengalaman & Situasi Darurat
[Arc 5: Pelajaran 28–37] -> Perjalanan, Budaya Jamuan & Pilihan Alternatif
[Arc 6: Pelajaran 38–44] -> Komunikasi Staf, Kesehatan, Pertimbangan & Festival
[Arc 7: Pelajaran 45–48] -> Pencapaian Momen, Rencana Masa Depan & Salam Perpisahan
```

---

## 3. Strategi Pelajaran dengan 3 Poin Sumber

Dalam materi sumber NHK, terdapat pelajaran yang memuat 3 poin sekaligus (gabungan tata bahasa dan poin pengajaran seperti kosakata hari/angka). Agar tidak melampaui batas beban kognitif pembelajar, aplikasi menetapkan **maksimal 2 target aktif** per sesi, sementara poin ketiga ditangani secara terencana:

1. **Pelajaran 11 (3 poin sumber):**
   * *Poin Sumber:* (1) Kosakata nama hari-hari dalam sepekan, (2) Verba arah `IKIMASU` & `KIMASU`, (3) Penguat ajakan `ZEHI ~TE KUDASAI`.
   * *Strategi:* 2 target aktif difokuskan pada kosakata hari & verba arah `IKIMASU/KIMASU`. Poin `ZEHI ~TE KUDASAI` diposisikan sebagai review penguat pola `~TE KUDASAI` dari Pelajaran 8.
2. **Pelajaran 22 (3 poin sumber):**
   * *Poin Sumber:* (1) Perubahan kata sifat menjadi keterangan `OSOI -> OSOKU NARIMASHITA`, (2) Pembilang menit `FUN/PUN`, (3) Larangan `Verba-TE + WA IKEMASEN`.
   * *Strategi:* 2 target aktif difokuskan pada `~KU NARIMASHITA` dan larangan `~TE WA IKEMASEN`. Pembilang menit `FUN/PUN` dicakup sebagai kartu referensi/pengenal (*recognition*).
3. **Pelajaran 25 (3 poin sumber):**
   * *Poin Sumber:* (1) Perintah langsung darurat `HAIRE`, (2) Kontras partikel `WA` vs `GA`, (3) Bentuk dugaan kemiripan `YÔ DA / YÔ DESU`.
   * *Strategi:* 2 target aktif difokuskan pada instruksi evakuasi darurat dan analisis kontras `WA` vs `GA`. Bentuk `YÔ DA` dijadikan bahan pemahaman konteks.
4. **Pelajaran 26 (3 poin sumber):**
   * *Poin Sumber:* (1) Partikel konteks/alasan `~N DESU`, (2) Kopula lampau `DESHITA`, (3) Ajakan kasual/volisional `~Ô` (*ganbarô*).
   * *Strategi:* 2 target aktif difokuskan pada `~N DESU` dan bentuk volisional `~Ô`. Bentuk `DESHITA` berfungsi sebagai review penguat bentuk lampau.

---

## 4. Penjabaran 7 Product Arcs

### Arc 1: Identitas & Fondasi Interaksi Awal (Pelajaran 1–6)
* **Konteks:** Anna tiba di Jepang, memperkenalkan diri di kampus, mengenal benda di sekitar, mencari fasilitas toilet, menyapa ibu asrama, dan bertukar nomor telepon.
* **Poin Tata Bahasa & Pengajaran:**
  * L1: `A WA B DESU` (partikel topik *wa* & kopula *desu*). Pengenalan jenis aksara Jepang.
  * L2: Kata tunjuk `KORE` dan `SORE`, partikel tanya `KA`, partikel kepemilikan `NO`. *(Catatan: kata ARE tidak ada di sumber L2)*.
  * L3: Menanyakan letak `... WA DOKO DESU KA` & kata tunjuk lokasi `KOKO, SOKO, ASOKO`.
  * L4: Bentuk negatif sopan `... DEWA ARIMASEN` & etiket salam kepulangan `TADAIMA / OKAERINASAI`.
  * L5: Pola kalimat verba `Subjek WA Objek O Verba-MASU` (pengenalan partikel objek *o* dan verba *~masu*).
  * L6: Angka dasar & nomor kontak, konstruksi kegiatan `... O SHIMASU`.
* **Can-Do Target:** *Saya bisa memperkenalkan nama dan asal saya, menunjuk benda di dekat saya atau lawan bicara, menanyakan lokasi fasilitas toilet, serta menyebutkan nomor kontak.*

### Arc 2: Kehidupan Kampus & Jadwal Kegiatan (Pelajaran 7–12)
* **Konteks:** Anna menanyakan ketersediaan kue sus di toko kue, meminta pengajar mengulang penjelasan, menanyakan jadwal kegiatan, mengecek presensi teman kelas, menerima undangan ke pesta, dan membicarakan masa lalu.
* **Poin Tata Bahasa & Pengajaran:**
  * L7: Keberadaan benda mati `... WA ARIMASU KA` di toko kue & pembilang benda umum `TSU` (*hitotsu, futatsu*).
  * L8: Permintaan tolong sopan `Verba-TE + KUDASAI` (*môichido onegai shimasu*).
  * L9: Jam `NANJI` & partikel rentang waktu `KARA` (dari) serta `MADE` (sampai).
  * L10: Keberadaan makhluk hidup `IMASU` (*zen-in imasu ka*) & bentuk lampau sopan verba `~MASHITA`.
  * L11: Nama hari sepekan & verba pergerakan arah `IKIMASU / KIMASU` (*zehi kite kudasai*).
  * L12: Keterangan waktu `ITSU` (kapan), nama bulan, dan partikel penunjuk waktu spesifik `NI`.
* **Can-Do Target:** *Saya bisa menanyakan ketersediaan barang di toko kue dengan pembilang, meminta seseorang mengulang kalimat dengan sopan, menanyakan jadwal kegiatan, serta mengonfirmasi kehadiran orang.*

### Arc 3: Pilihan Keseharian, Arah & Insiden Kecil (Pelajaran 13–19)
* **Poin Inti:** Kesukaan `~GA SUKI DESU`, ajakan `~MASEN KA`, izin `~TE MO II DESU KA`, verba progresif `~TE IMASU`, konektor langkah verba bentuk `~TE`, rekomendasi menu `OSUSUME`, penolakan sopan `~WA CHOTTO`, insiden tersesat `~TE SHIMAIMASHITA` (L18), dan adjektiva lampau `~KATTA` / `YOKATTA` (L19).
* **Can-Do Target:** *Saya bisa menyatakan minat, meminta izin beraktivitas, menanyakan petunjuk arah jalan belok kanan/kiri di gedung, dan meminta bantuan saat tersesat di jalan.*

### Arc 4: Interaksi Sosial, Pengalaman & Situasi Darurat (Pelajaran 20–27)
* **Poin Inti:** Pengalaman `~TA KOTO GA ARIMASU`, etiket rendah hati `SOREHODODEMO`, perubahan sifat menjadi keterangan `~KU NARIMASHITA` (L22), larangan `~TE WA IKEMASEN`, verba pasif `~RAREMASHITA` (L23), larangan halus `~NAIDE KUDASAI`, perintah evakuasi darurat `HAIRE`, kontras partikel `WA` vs `GA`, penjelasan konteks `~N DESU`, dan ajakan volisional kasual `~Ô` (*ganbarô*).
* **Can-Do Target:** *Saya bisa menceritakan pengalaman yang pernah/belum pernah dialami, menyampaikan alasan keterlambatan secara wajar, memahami instruksi evakuasi saat gempa bumi, dan memberikan semangat kepada rekan.*

### Arc 5: Perjalanan, Budaya Jamuan & Pilihan Alternatif (Pelajaran 28–37)
* **Poin Inti:** Sambutan `~E YÔKOSO`, pengandaian pasti `~TO`, keinginan `~TAI DESU`, usia `~SAI`, perbandingan `DOCHIRA` / `~NO HÔ GA`, arah pemberian `AGEMASU` vs `KUREMASU`, konjungsi adjektiva `~KUTE`, verba potensial `~EMASU` (kartu kredit), kewajiban `~NAKEREBA NARIMASEN`, dan contoh kegiatan tak berurutan `~TARI ~TARI SHIMASHITA`.
* **Can-Do Target:** *Saya bisa mendeskripsikan panorama alam, membandingkan dua opsi preferensi, bertransaksi di kasir dengan kartu kredit, dan menceritakan rincian aktivitas liburan.*

### Arc 6: Komunikasi Staf, Kesehatan, Pertimbangan & Festival (Pelajaran 38–44)
* **Poin Inti:** Kesantunan staf pelayanan `KASHIKOMARIMASHITA`, dugaan opini `~DA TO OMOIMASU`, onomatope rasa sakit fisik `ZUKIZUKI SHIMASU`, kemampuan `~KOTO GA DEKIMASU`, superlatif `ICHIBAN`, dugaan sopan `DÔSHITE DESHÔ KA`, urutan prasyarat `~TE KARA`, dan kemungkinan `~KAMOSHIREMASEN`.
* **Can-Do Target:** *Saya bisa memahami bahasa formal staf resepsionis, mengomunikasikan gejala sakit ke dokter dengan onomatope, membandingkan pilihan makanan bazar terbaik, dan menerapkan etiket tradisi minum teh.*

### Arc 7: Pencapaian Momen, Rencana Masa Depan & Salam Perpisahan (Pelajaran 45–48)
* **Poin Inti:** Selamat ulang tahun `OTANJÔBI OMEDETÔ` & penerimaan `MORAIMASU`, urutan waktu sebelum `~MAE NI`, nominalisasi impian `~NO GA YUME DESU` & `~NI NARIMASU`, serta ungkapan terima kasih perpisahan `IROIRO OSEWA NI NARIMASHITA` & `KIOTSUKETE`.
* **Can-Do Target:** *Saya bisa memberikan ucapan selamat momen pribadi, menyatakan rencana sebelum kembali ke tanah air, mengungkapkan impian masa depan, serta berpamitan secara santun dan berkesan.*

---

## 5. Spesifikasi Lengkap Slice Vertikal Pelajaran 1 (Gate 2 Ready)

### 5.1 Informasi Dasar & Metadata
* **ID:** `L01` | **Nomor Urut:** 1
* **Judul:**
  * JP (Ruby): `<ruby>私<rt>わたし</rt></ruby>はアンナです`
  * Kana: わたしはアンナです
  * Rōmaji: Watashi wa Anna desu
  * Terjemahan Orisinal: *Saya adalah Anna*
* **Halaman Sumber:** PDF p. 6 / Cetak p. 5
* **Situasi Resmi TOC:** `Di universitas`, `Acara Khusus` (Multi-label terverifikasi)
* **Product Arc:** `Arc 1: Identitas & Fondasi Interaksi Awal`
* **Tautan Resmi NHK:**
  * Pelajaran: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/1.html`
  * Audio MP3: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/01-id-le_01.mp3`
  * Timestamp Dialog Inti: **01:22 – 01:34** (buffer perkiraan: **01:20 – 01:35**)
* **Status QA:** `machine_checked` | **Reviewed By:** `TBD`

### 5.2 Capaian Belajar (Can-Do Statements)
1. *Saya bisa memperkenalkan nama diri secara sopan dengan pola `A wa B desu`.*
2. *Saya bisa merespons salam perkenalan pertama kali menggunakan `Hajimemashite` dan `Yoroshiku onegai shimasu`.*

### 5.3 Anggaran Kosakata Aktif (6 Kata)
1. **私 (わたし / watashi)** — *Saya* [Kata Ganti Orang]  
   *sourceRef:* "NHK L01 line 2" | *qaStatus:* "machine_checked"
2. **初めまして (はじめまして / hajimemashite)** — *Senang bertemu dengan Anda (Sapaan awal jumpa)*  
   *sourceRef:* "NHK L01 line 1" | *qaStatus:* "machine_checked"
3. **よろしくお願いします (よろしくおねがいします / yoroshiku onegai shimasu)** — *Mohon bantuannya / Senang berkenalan dengan Anda*  
   *sourceRef:* "NHK L01 line 5" | *qaStatus:* "machine_checked"
4. **こちらこそ (kochirakoso)** — *Saya juga / Sama-sama (Balasan sopan)*  
   *sourceRef:* "NHK L01 Teacher Note / Original" | *qaStatus:* "machine_checked"
5. **アンナ (Anna)** — *Anna (Nama tokoh mahasiswi Thailand)*  
   *sourceRef:* "NHK L01 line 2" | *qaStatus:* "machine_checked"
6. **さくら (Sakura)** — *Sakura (Nama tokoh mahasiswi Jepang)*  
   *sourceRef:* "NHK L01 line 4" | *qaStatus:* "machine_checked"

### 5.4 Pertanyaan Pemahaman Mendengar (Listening Tasks)
#### Gist Questions (Pemahaman Esensi Global):
1. **Gist Q1 (`L01-GQ1`):**  
   *Soal:* Siapakah dua orang yang sedang berbicara dalam dialog audio tersebut?  
   *Opsi:* A. Anna dan Ibu Asrama, B. Anna dan Sakura, C. Sakura dan Profesor Suzuki  
   *Kunci:* Index 1 (Anna dan Sakura)  
   *Umpan Balik:* Anna memperkenalkan dirinya (*Watashi wa Anna desu*) dan Sakura menyambut perkenalannya (*Sakura desu*).  
   *sourceRef:* "NHK L01 audio 01:22-01:34" | *qaStatus:* "machine_checked"
2. **Gist Q2 (`L01-GQ2`):**  
   *Soal:* Apa tujuan utama interaksi antara kedua tokoh dalam percakapan tersebut?  
   *Opsi:* A. Meminta izin membuang sampah, B. Saling berkenalan untuk pertama kalinya, C. Menanyakan jadwal ujian kampus  
   *Kunci:* Index 1 (Saling berkenalan untuk pertama kalinya)  
   *Umpan Balik:* Keduanya saling menyapa dengan ungkapan khas pertemuan pertama: *Hajimemashite*.  
   *sourceRef:* "NHK L01 audio 01:22-01:34" | *qaStatus:* "machine_checked"

#### Detail Questions (Pemahaman Rincian Percakapan):
1. **Detail Q1 (`L01-DQ1`):**  
   *Soal:* Ungkapan apa yang pertama kali diucapkan Anna saat membuka percakapan sebelum menyebutkan namanya?  
   *Opsi:* A. Arigatô gozaimasu, B. Tadaima, C. Hajimemashite  
   *Kunci:* Index 2 (Hajimemashite)  
   *Umpan Balik:* *Hajimemashite* berasal dari kata kerja 'memulai' dan khusus diucapkan di awal perjumpaan pertama.  
   *sourceRef:* "NHK L01 sc01" | *qaStatus:* "machine_checked"
2. **Detail Q2 (`L01-DQ2`):**  
   *Soal:* Frasa apa yang diucapkan Anna di akhir dialog untuk memohon hubungan baik ke depan?  
   *Opsi:* A. Yoroshiku onegai shimasu, B. Sayônara, C. Dôitashimashite  
   *Kunci:* Index 0 (Yoroshiku onegai shimasu)  
   *Umpan Balik:* *Yoroshiku onegai shimasu* diucapkan sebagai penutup perkenalan untuk menyatakan harapan kerja sama yang baik.  
   *sourceRef:* "NHK L01 sc04" | *qaStatus:* "machine_checked"

### 5.5 Rencana Latihan Tertutup (5 Butir Latihan)
1. **Latihan 1 (`L01-EX1`, Cloze Particle):**  
   *Prompt:* Lengkapi kalimat perkenalan diri: `わたし [ ... ] アンナです。`  
   *Opsi:* `は (wa)`, `が (ga)`, `の (no)`  
   *Kunci:* `は (wa)`  
   *Umpan Balik:* Partikel は (ditulis 'ha', dibaca 'wa') menandai 'watashi' sebagai topik pembicaraan.  
   *sourceRef:* "NHK L01 grammar point 1" | *qaStatus:* "machine_checked"
2. **Latihan 2 (`L01-EX2`, Sentence Order):**  
   *Prompt:* Susun kata-kata berikut menjadi kalimat perkenalan yang tepat: `[ アンナ ] [ です ] [ わたし ] [ は ]`  
   *Kunci:* `わたし は アンナ です`  
   *Umpan Balik:* Urutan kalimat bahasa Jepang adalah Topik (watashi wa) + Predikat nama (Anna) + Kopula (desu).  
   *sourceRef:* "NHK L01 grammar point 1" | *qaStatus:* "machine_checked"
3. **Latihan 3 (`L01-EX3`, Audio/Situation Meaning):**  
   *Prompt:* Ketika pertama kali bertatap muka dengan rekan baru di kampus, sapaan apa yang diucapkan di awal?  
   *Opsi:* `はじめまして`, `ただいま`, `さようなら`  
   *Kunci:* `はじめまして`  
   *Umpan Balik:* *Hajimemashite* bermakna 'senang bertemu dengan Anda untuk pertama kalinya'.  
   *sourceRef:* "NHK L01 key phrase" | *qaStatus:* "machine_checked"
4. **Latihan 4 (`L01-EX4`, Meaning -> Japanese Recall):**  
   *Prompt:* Bagaimana membalas sapaan kenal saat seseorang mengatakan `よろしくおねがいします`?  
   *Kunci:* `こちらこそ` (*kochirakoso*)  
   *Umpan Balik:* *Kochirakoso* bermakna 'justru saya yang seharusnya memohon bantuan / saya juga'.  
   *sourceRef:* "NHK L01 culture/teacher note" | *qaStatus:* "machine_checked"
5. **Latihan 5 (`L01-EX5`, Grammar Transform):**  
   *Prompt:* Ubah sebutan nama kasual `さくら` menjadi kalimat pernyataan identitas diri yang sopan!  
   *Kunci:* `さくらです` (atau `わたしはさくらです`)  
   *Umpan Balik:* Menambahkan です (*desu*) di belakang kata benda membentuk kalimat pernyataan sopan.  
   *sourceRef:* "NHK L01 grammar point 1" | *qaStatus:* "machine_checked"

### 5.6 Tugas Produksi Praktik (Output Task)
* **Tipe:** Speaking / Writing
* **Skenario Tugas:** *"Kamu baru tiba di kampus Jepang dan bertemu dengan mahasiswa tutor yang menyambutmu di lobi. Rekam atau tuliskan perkenalan dirimu menggunakan nama aslimu!"*
* **Instruksi:**
  1. Awali dengan salam pertemuan pertama (*Hajimemashite*).
  2. Sebutkan namamu dengan pola sopan *Watashi wa [Nama] desu*.
  3. Tutup dengan permohonan bimbingan/hubungan baik (*Yoroshiku onegai shimasu*).
* **Model Answer:**
  * JP: `<ruby>初<rt>はじ</rt></ruby>めまして。<ruby>私<rt>わたし</rt></ruby>はアンナです。よろしくお願いします。`
  * Kana: はじめまして。わたしはあんなです。よろしくおねがいします。
  * Rōmaji: Hajimemashite. Watashi wa Anna desu. Yoroshiku onegai shimasu.
  * Terjemahan: *Senang bertemu dengan Anda. Saya adalah Anna. Senang berkenalan dengan Anda / Mohon bimbingannya.*
* **Daftar Periksa Mandiri (Self-Check Checklist):**
  - [ ] Mengucapkan sapaan pembuka *Hajimemashite*.
  - [ ] Menyebutkan nama dengan struktur *Watashi wa [Nama] desu*.
  - [ ] Mengucapkan sapaan penutup *Yoroshiku onegai shimasu*.
  - [ ] Melafalkan partikel は secara tepat sebagai *wa* (bukan *ha*).
* *sourceRef:* "NHK L01 dialogue synthesis" | *qaStatus:* "machine_checked"

### 5.7 Rencana Kartu Ulasan SRS (8 Kartu)
Setiap kartu memisahkan data konten statis (`ReviewCard`) dari state peramban pengguna (`SrsState`):
1. **Card-01 (`L01-RC1`, Vocab):**  
   *Front:* わたし  
   *Back:* Saya (Kata ganti orang pertama tunggal)  
   *sourceRef:* "NHK L01 line 2" | *qaStatus:* "machine_checked"
2. **Card-02 (`L01-RC2`, Vocab):**  
   *Front:* はじめまして  
   *Back:* Senang bertemu dengan Anda (Salam pembuka pertemuan pertama)  
   *sourceRef:* "NHK L01 line 1" | *qaStatus:* "machine_checked"
3. **Card-03 (`L01-RC3`, Vocab):**  
   *Front:* よろしくおねがいします  
   *Back:* Senang berkenalan / Mohon bimbingannya (Salam penutup perkenalan)  
   *sourceRef:* "NHK L01 line 5" | *qaStatus:* "machine_checked"
4. **Card-04 (`L01-RC4`, Particle):**  
   *Front:* Partikel penanda topik kalimat dalam bahasa Jepang (dilafalkan 'wa')  
   *Back:* は  
   *sourceRef:* "NHK L01 grammar point 1" | *qaStatus:* "machine_checked"
5. **Card-05 (`L01-RC5`, Grammar):**  
   *Front:* Kopula penutup kalimat sopan setelah kata benda predikat  
   *Back:* です (*desu*)  
   *sourceRef:* "NHK L01 grammar point 1" | *qaStatus:* "machine_checked"
6. **Card-06 (`L01-RC6`, Situational):**  
   *Front:* Balasan sopan saat rekan baru mengatakan 'Yoroshiku onegai shimasu' (*Sama-sama / Saya juga*)  
   *Back:* こちらこそ (*kochirakoso*)  
   *sourceRef:* "NHK L01 teacher note" | *qaStatus:* "machine_checked"
7. **Card-07 (`L01-RC7`, Listening Recall):**  
   *Front:* [Audio L1 menit 01:22] Dengarkan salam pembuka pada dialog resmi NHK L1. Ungkapan apa yang diucapkan Anna tepat sebelum menyebutkan namanya?  
   *Back:* 初めまして (はじめまして / Hajimemashite) — Khusus diucapkan saat pertama kali berjumpa.  
   *audioRef:* "https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/1.html"  
   *sourceRef:* "NHK L01 audio sc01" | *qaStatus:* "machine_checked"
8. **Card-08 (`L01-RC8`, Output Production):**  
   *Front:* Praktikkan perkenalan diri Anda secara lengkap dengan nama Anda sendiri!  
   *Back:* わたしは [Nama] です。よろしくおねがいします。  
   *sourceRef:* "NHK L01 output task" | *qaStatus:* "machine_checked"

### 5.8 Assessment Blueprint
* **Passing Threshold:** Akurasi $\ge 80\%$ (minimal 4 dari 5 butir latihan dijawab benar) pada tahap *Retrieve*, dan mencentang minimal 3 dari 4 butir *Self-Check Checklist* pada tugas *Use*.
* **Remediasi:** Jika pembelajar melakukan 2 kesalahan pada *Retrieve*, sistem secara otomatis mengarahkan pembelajar kembali ke tahap *Notice* untuk meninjau kembali pola kalimat sebelum melanjutkan.
