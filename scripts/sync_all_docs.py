import os

dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]
for d in dest_dirs:
    os.makedirs(d, exist_ok=True)

# -------------------------------------------------------------
# 1. docs/source-map.md
# -------------------------------------------------------------
source_map = """# SOURCE MAP: NHK Belajar Bahasa Jepang (Edisi 2015)

Dokumen ini memetakan seluruh 48 pelajaran dari materi sumber resmi NHK WORLD Radio Japan edisi **ver. April 2015 (Edisi Anna)**.

---

## 1. Identifikasi Dokumen Sumber
* **Judul Resmi:** Belajar Bahasa Jepang (Easy Japanese / やさしい日本語)
* **Penyusun:** NHK WORLD RADIO JAPAN
* **Edisi:** ver. April 2015 (Cerita Anna dari Thailand)
* **Struktur Halaman:** Tepat **61 halaman PDF**; folio bernomor cetak **1–58**; cover depan, halaman copyright, dan cover belakang tanpa nomor cetak.
* **Aturan Penomoran Halaman:**
  * `Halaman Cetak = Halaman PDF − 1` (berlaku untuk halaman berfolio 1–58)
  * **PDF p. 1:** Cover depan (tanpa nomor cetak)
  * **PDF p. 2 / Cetak p. 1:** Info Belajar Online
  * **PDF p. 3 / Cetak p. 2:** Indeks Pelajaran 1–27 & Ikon Situasi
  * **PDF p. 4 / Cetak p. 3:** Indeks Pelajaran 28–48 & Panduan 7 Ikon Situasi
  * **PDF p. 5 / Cetak p. 4:** Pengenalan Tokoh (Anna, Sakura, Rodrigo, Prof. Suzuki, Ibu Asrama, Kenta)
  * **PDF p. 6–53 / Cetak p. 5–52:** Pelajaran 1 s.d. 48 (masing-masing 1 halaman penuh)
  * **PDF p. 54 / Cetak p. 53:** Lampiran: Kata Sifat + Pembilang
  * **PDF p. 55–56 / Cetak p. 54–55:** Lampiran: Kata Kerja (2 halaman)
  * **PDF p. 57–58 / Cetak p. 56–57:** Lampiran: Tabel Suku Kata Hiragana & Katakana (2 halaman)
  * **PDF p. 59 / Cetak p. 58:** Tim Penyelia & Pembawa Acara
  * **PDF p. 60:** Hak Cipta (*Copyright © NHK WORLD ver. April 2015*, tanpa nomor cetak)
  * **PDF p. 61:** Back Cover (tanpa nomor cetak)

---

## 2. Kebijakan Tautan Audio & Naskah (Mode Link-Only Tab Baru)
* **Basis URL Pelajaran:** `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/{N}.html`
* **Basis URL Audio MP3:** `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/{NN}-id-le_01.mp3`
* **Anomali Terverifikasi:** Pada **Pelajaran 11**, URL audio resmi menggunakan penomoran revisi: `.../mp3/11-id-le_02.mp3` (bukan `_01.mp3`). Seluruh 48 URL diverifikasi dan di-scrape langsung pada 28 Oktober 2026.
* **Mekanisme Putar Audio (Mode A - Link-Only Tab Baru):**
  * Tombol audio membuka URL MP3 resmi atau halaman pelajaran resmi di tab baru peramban. Tidak ada file MP3 atau PDF yang di-host ulang atau di-commit ke repositori.
* **Durasi Audio vs Sesi Belajar (Penyelesaian Gate 2):**
  * Audio siaran berdurasi ~10 menit (600,08 detik).
  * Dialog inti Anna–Sakura berada di rentang **01:22 – 01:34** (sc01: 01:22.3, sc02: 01:26.9, sc03: 01:30.4, sc04: 01:32.9–01:34.0). Dengan buffer perkiraan: **01:20 – 01:35 (perkiraan)**.
  * Aplikasi menampilkan label rentang waktu percakapan ini dan tombol pintas ke pemutar kalimat per kalimat di situs web resmi NHK.

---

## 3. Inventaris Lengkap 48 Pelajaran

| No | Judul (Romaji & Indonesia) | Halaman | Tautan Resmi | Poin Sumber (Grammar & Pengajaran) | Jml | Target Pilihan Aplikasi & Strategi | Situasi Resmi TOC (Multi-label) | Status Verifikasi |
| :-: | :--- | :-: | :--- | :--- | :-: | :--- | :--- | :---: |
| 1 | **WATASHI WA ANNA DESU**<br>*Saya adalah Anna* | PDF p. 6<br>Cetak p. 5 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/1.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/01-id-le_01.mp3) | 1. A WA B DESU (Grammar)<br>2. Karakter bahasa Jepang (Aksara) | 2 | Target aktif: Partikel topik WA & kopula DESU. (Aksara diperkenalkan bertahap) | Di universitas, Acara Khusus | Verified Visual PDF |
| 2 | **KORE WA NAN DESU KA**<br>*Ini apa?* | PDF p. 7<br>Cetak p. 6 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/2.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/02-id-le_01.mp3) | 1. Partikel tanya KA pada KORE WA NAN DESU KA<br>2. Partikel kepemilikan NO pada A NO B | 2 | Target aktif: KORE/SORE + partikel KA & NO. *(Catatan: ARE tidak ada di sumber L2)* | Di universitas, Perbelanjaan & Restoran | Verified Visual PDF |
| 3 | **TOIRE WA DOKO DESU KA**<br>*Toilet di mana?* | PDF p. 8<br>Cetak p. 7 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/3.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/03-id-le_01.mp3) | 1. ... WA DOKO DESU KA<br>2. Kata tunjuk tempat KOKO, SOKO, ASOKO | 2 | Target aktif: Tanya lokasi DOKO & penunjuk KOKO/SOKO/ASOKO | Di universitas, Penyelesaian masalah | Verified Visual PDF |
| 4 | **TADAIMA**<br>*Saya pulang* | PDF p. 9<br>Cetak p. 8 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/4.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/04-id-le_01.mp3) | 1. Negatif sopan ... DEWA ARIMASEN<br>2. Salam TADAIMA & OKAERINASAI | 2 | Target aktif: Negasi DEWA ARIMASEN & etiket salam kepulangan | Di asrama, Kebudayaan Jepang | Verified Visual PDF |
| 5 | **SORE WA WATASHI NO TAKARAMONO DESU**<br>*Itu adalah harta karun saya* | PDF p. 10<br>Cetak p. 9 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/5.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/05-id-le_01.mp3) | 1. Subjek WA Objek O Kata Kerja (Partikel O)<br>2. Verba bentuk MASU | 2 | Target aktif: Objek partikel O & pengenalan verba ~MASU | Di asrama | Verified Visual PDF |
| 6 | **DENWABANGÔ WA NANBAN DESU KA**<br>*Nomor telepon Anda berapa?* | PDF p. 11<br>Cetak p. 10 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/6.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/06-id-le_01.mp3) | 1. Nomor telepon & Angka dasar<br>2. Konstruksi verba ... O SHIMASU | 2 | Target aktif: Angka/nomor kontak & konstruksi ~O SHIMASU | Di asrama, Penyelesaian masalah | Visual PDF checked |
| 7 | **SHÛKURÎMU WA ARIMASU KA**<br>*Apakah ada kue sus?* | PDF p. 12<br>Cetak p. 11 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/7.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/07-id-le_01.mp3) | 1. ... WA ARIMASU KA (Benda mati)<br>2. Pembilang benda TSU (*hitotsu, futatsu*) | 2 | Target aktif: Ketersediaan ~WA ARIMASU KA di toko kue & pembilang TSU | Perbelanjaan & Restoran, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 8 | **MÔICHIDO ONEGAI SHIMASU**<br>*Tolong sekali lagi* | PDF p. 13<br>Cetak p. 12 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/8.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/08-id-le_01.mp3) | 1. Verba bentuk TE: permohonan ~TE KUDASAI<br>2. Ungkapan MÔICHIDO ONEGAI SHIMASU | 2 | Target aktif: Permohonan sopan ~TE KUDASAI & permintaan pengulangan | Di universitas, Penyelesaian masalah | Visual PDF checked |
| 9 | **NANJI KARA DESU KA**<br>*Mulai jam berapa?* | PDF p. 14<br>Cetak p. 13 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/9.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/09-id-le_01.mp3) | 1. Penunjuk jam NANJI<br>2. Partikel batas waktu KARA & MADE | 2 | Target aktif: Menanyakan jam & rentang waktu KARA... MADE | Di universitas, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 10 | **ZEN-IN IMASU KA**<br>*Apakah semuanya hadir?* | PDF p. 15<br>Cetak p. 14 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/10.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/10-id-le_01.mp3) | 1. Verba keberadaan makhluk hidup IMASU<br>2. Bentuk lampau sopan verba ~MASHITA | 2 | Target aktif: Keberadaan orang IMASU & bentuk lampau ~MASHITA | Di universitas, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 11 | **ZEHI KITE KUDASAI**<br>*Harap datang* | PDF p. 16<br>Cetak p. 15 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/11.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/11-id-le_02.mp3) | 1. Nama hari dalam sepekan (Kosakata)<br>2. Verba arah IKIMASU & KIMASU<br>3. Penguat ajakan ZEHI ~TE KUDASAI | 3 | 3 poin sumber. Target aktif: 1. Nama hari, 2. Verba arah IKIMASU/KIMASU. (ZEHI ~TE KUDASAI sebagai review L8) | Di universitas, Acara Khusus | Visual PDF checked |
| 12 | **ITSU NIHON NI KIMASHITA KA**<br>*Kapan Anda datang ke Jepang?* | PDF p. 17<br>Cetak p. 16 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/12.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/12-id-le_01.mp3) | 1. Waktu ITSU & nama bulan<br>2. Partikel penunjuk waktu spesifik NI | 2 | Target aktif: Waktu ITSU, bulan, dan partikel waktu NI | Di asrama, Acara Khusus | Visual PDF checked |
| 13 | **SHÔSETSU GA SUKI DESU**<br>*Saya suka novel* | PDF p. 18<br>Cetak p. 17 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/13.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/13-id-le_01.mp3) | 1. Kesukaan ... WA ... GA SUKI DESU<br>2. Ajakan halus verba ~MASEN KA | 2 | Target aktif: Menyatakan minat ~GA SUKI DESU & ajakan ~MASEN KA | Di asrama, Acara Khusus | Visual PDF checked |
| 14 | **KOKO NI GOMI O SUTETE MO II DESU KA**<br>*Bolehkah membuang sampah di sini?* | PDF p. 19<br>Cetak p. 18 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/14.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/14-id-le_01.mp3) | 1. Meminta izin ... ~TE MO II DESU KA<br>2. Partikel alasan penyebab KARA | 2 | Target aktif: Izin tindakan ~TE MO II DESU KA & alasan KARA | Di asrama, Penyelesaian masalah | Visual PDF checked |
| 15 | **NETE IMASU**<br>*Sedang tidur* | PDF p. 20<br>Cetak p. 19 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/15.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/15-id-le_01.mp3) | 1. Verba progresif Verba-TE + IMASU<br>2. Ajakan melakukan bersama ~MASHÔ | 2 | Target aktif: Bentuk sedang berlangsung ~TE IMASU & ajakan ~MASHÔ | Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 16 | **KAIDAN O AGATTE, MIGI NI ITTE KUDASAI**<br>*Naiki tangga lalu belok kanan* | PDF p. 21<br>Cetak p. 20 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/16.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/16-id-le_01.mp3) | 1. Verba bentuk-TE sebagai penyambung langkah<br>2. Keterangan navigasi arah (MIGI, HIDARI) | 2 | Target aktif: Konektor urutan verba ~TE & petunjuk arah jalan | Perbelanjaan & Restoran, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 17 | **OSUSUME WA NAN DESU KA**<br>*Apa rekomendasi Anda?* | PDF p. 22<br>Cetak p. 21 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/17.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/17-id-le_01.mp3) | 1. Menanyakan rekomendasi OSUSUME WA NAN DESU KA<br>2. Penolakan sopan ... WA CHOTTO | 2 | Target aktif: Rekomendasi menu OSUSUME & penolakan halus CHOTTO | Perbelanjaan & Restoran | Visual PDF checked |
| 18 | **MICHI NI MAYOTTE SHIMAIMASHITA**<br>*Saya tersesat di jalan* | PDF p. 23<br>Cetak p. 22 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/18.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/18-id-le_01.mp3) | 1. Ketidaksengajaan/penyesalan Verba-TE + SHIMAIMASHITA<br>2. Kosakata tersesat MICHI NI MAYOU | 2 | Target aktif: Bentuk kejadian tak diinginkan ~TE SHIMAIMASHITA | Bepergian & Berjalan-jalan, Penyelesaian masalah | Re-verified Visual PDF |
| 19 | **YOKATTA**<br>*Syukurlah* | PDF p. 24<br>Cetak p. 23 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/19.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/19-id-le_01.mp3) | 1. Bentuk lampau kata sifat (~KATTA / DESHITA)<br>2. Ungkapan rasa lega YOKATTA | 2 | Target aktif: Adjektiva lampau (~KATTA) & ekspresi kelegaan | Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 20 | **NIHON NO UTA O UTATTA KOTO GA ARIMASU KA**<br>*Pernahkah Anda menyanyikan lagu Jepang?* | PDF p. 25<br>Cetak p. 24 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/20.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/20-id-le_01.mp3) | 1. Pengalaman lampau Verba-TA + KOTO GA ARIMASU<br>2. Fungsi kepemilikan/pengalaman ARIMASU | 2 | Target aktif: Menyatakan pengalaman pernah ~TA KOTO GA ARIMASU | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 21 | **IIE, SOREHODODEMO**<br>*Tidak juga* | PDF p. 26<br>Cetak p. 25 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/21.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/21-id-le_01.mp3) | 1. Ungkapan kerendahan hati IIE, SOREHODODEMO<br>2. Merespons pujian dalam etiket kesopanan Jepang | 2 | Target aktif: Merespons pujian dengan etiket sopan SOREHODODEMO | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Re-verified Visual PDF |
| 22 | **OSOKU NARIMASHITA**<br>*Saya terlambat* | PDF p. 27<br>Cetak p. 26 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/22.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/22-id-le_01.mp3) | 1. Kata sifat -> keterangan (OSOI -> OSOKU NARIMASHITA)<br>2. Pembilang menit FUN/PUN<br>3. Larangan Verba-TE + WA IKEMASEN | 3 | 3 poin sumber. Target aktif: 1. ~KU NARIMASHITA, 2. Larangan ~TE WA IKEMASEN. (FUN/PUN sebagai referensi) | Di asrama, Penyelesaian masalah | Visual PDF checked |
| 23 | **OKÂSAN NI SHIKARAREMASHITA**<br>*Dimarahi oleh ibu* | PDF p. 28<br>Cetak p. 27 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/23.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/23-id-le_01.mp3) | 1. Bentuk pasif verba ~RAREMASHITA (dimarahi)<br>2. Bentuk lampau negatif verba ~MASEN DESHITA | 2 | Target aktif: Verba pasif penderitaan ~RAREMASHITA & lampau negatif | Di universitas | Visual PDF checked |
| 24 | **TSUKAWANAIDE KUDASAI**<br>*Jangan gunakan* | PDF p. 29<br>Cetak p. 28 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/24.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/24-id-le_01.mp3) | 1. Larangan sopan Verba-NAI + DE KUDASAI<br>2. Kata penunjuk waktu relatif (KINÔ, KYÔ, ASHITA) | 2 | Target aktif: Larangan sopan ~NAIDE KUDASAI & kata waktu | Di universitas, Penyelesaian masalah | Visual PDF checked |
| 25 | **TSUKUE NO SHITA NI HAIRE**<br>*Masuklah ke bawah meja* | PDF p. 30<br>Cetak p. 29 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/25.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/25-id-le_01.mp3) | 1. Bentuk perintah langsung darurat (HAIRE)<br>2. Kontras partikel WA dan GA<br>3. Bentuk dugaan kemiripan YÔ DA / YÔ DESU | 3 | 3 poin sumber. Target aktif: 1. Perintah evakuasi darurat, 2. Kontras WA vs GA. (YÔ DA sebagai referensi) | Di universitas, Penyelesaian masalah | Visual PDF checked |
| 26 | **TSUGI WA GANBARÔ**<br>*Berikutnya mari berjuang* | PDF p. 31<br>Cetak p. 30 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/26.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/26-id-le_01.mp3) | 1. Penjelasan konteks latar belakang ~N DESU<br>2. Kopula lampau DESHITA<br>3. Bentuk ajakan volisional kasual ~Ô (GANBARÔ) | 3 | 3 poin sumber. Target aktif: 1. Partikel konteks ~N DESU, 2. Ajakan volisional ~Ô. (DESHITA sebagai review) | Di universitas | Visual PDF checked |
| 27 | **DARE GA KEKKON SURU N DESU KA**<br>*Siapa yang akan menikah?* | PDF p. 32<br>Cetak p. 31 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/27.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/27-id-le_01.mp3) | 1. Pertanyaan penegasan latar belakang ... N DESU KA<br>2. Verba bentuk kamus + N DESU KA | 2 | Target aktif: Pertanyaan latar belakang ~N DESU KA dengan verba kamus | Acara Khusus | Visual PDF checked |
| 28 | **SHIZUOKA E YÔKOSO**<br>*Selamat datang di Shizuoka* | PDF p. 33<br>Cetak p. 32 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/28.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/28-id-le_01.mp3) | 1. Ungkapan selamat datang ... E YÔKOSO<br>2. Menyatakan keahlian bidang ... NI KUWASHII | 2 | Target aktif: Menyambut kedatangan ~E YÔKOSO & keahlian ~NI KUWASHII | Bepergian & Berjalan-jalan | Visual PDF checked |
| 29 | **CHIKAKU DE MIRU TO, ÔKII DESU NE**<br>*Kalau dilihat dari dekat, besar ya* | PDF p. 34<br>Cetak p. 33 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/29.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/29-id-le_01.mp3) | 1. Pengandaian kondisi alami/pasti Verba kamus + TO<br>2. Partikel penegas kesepahaman NE | 2 | Target aktif: Kondisional kepastian ~TO & partikel NE | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Visual PDF checked |
| 30 | **MÔ SUKOSHI SHASHIN O TORITAI DESU**<br>*Saya ingin mengambil foto sedikit lagi* | PDF p. 35<br>Cetak p. 34 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/30.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/30-id-le_01.mp3) | 1. Keinginan Verba bentuk-MASU -> ~TAI DESU<br>2. Keterangan kuantitas MÔ SUKOSHI | 2 | Target aktif: Menyatakan keinginan pribadi ~TAI DESU | Bepergian & Berjalan-jalan | Visual PDF checked |
| 31 | **MÔ HACHIJÛNI SAI DESU YO**<br>*Sudah berumur 82 tahun lho* | PDF p. 36<br>Cetak p. 35 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/31.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/31-id-le_01.mp3) | 1. Angka puluhan & penanda usia ~SAI<br>2. Partikel pemberi info baru YO | 2 | Target aktif: Menyebutkan umur lanjut & partikel penegas YO | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Visual PDF checked |
| 32 | **FUTON NO HÔ GA SUKI DESU**<br>*Saya lebih suka futon* | PDF p. 37<br>Cetak p. 36 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/32.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/32-id-le_01.mp3) | 1. Perbandingan A TO B TO DOCHIRA GA ... DESU KA<br>2. Pemilihan preferensi ... NO HÔ GA SUKI DESU | 2 | Target aktif: Perbandingan DOCHIRA & preferensi ~NO HÔ GA | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Visual PDF checked |
| 33 | **ANNA-SAN NI AGEMASU**<br>*Saya berikan kepada Anna* | PDF p. 38<br>Cetak p. 37 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/33.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/33-id-le_01.mp3) | 1. Arah memberi AGEMASU vs menerima KUREMASU<br>2. Partikel penerima aksi NI | 2 | Target aktif: Arah pemberian hadiah AGEMASU vs KUREMASU | Bepergian & Berjalan-jalan | Visual PDF checked |
| 34 | **YAWARAKAKUTE OISHII DESU**<br>*Empuk dan lezat* | PDF p. 39<br>Cetak p. 38 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/34.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/34-id-le_01.mp3) | 1. Menggabungkan kata sifat bentuk TE (~KUTE)<br>2. Pertanyaan klarifikasi makna TTE NAN DESU KA | 2 | Target aktif: Konjungsi adjektiva ~KUTE & klarifikasi ~TTE NAN DESU KA | Perbelanjaan & Restoran, Kebudayaan Jepang | Visual PDF checked |
| 35 | **KUREJITTO KÂDO WA TSUKAEMASU KA**<br>*Bisakah menggunakan kartu kredit?* | PDF p. 40<br>Cetak p. 39 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/35.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/35-id-le_01.mp3) | 1. Verba bentuk potensial (bisa/dapat) ~EMASU<br>2. Angka ratusan/ribuan & nominal uang | 2 | Target aktif: Bentuk potensial kemampuan ~EMASU di kasir toko | Perbelanjaan & Restoran | Visual PDF checked |
| 36 | **BENKYÔ SHINAKEREBA NARIMASEN**<br>*Harus belajar* | PDF p. 41<br>Cetak p. 40 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/36.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/36-id-le_01.mp3) | 1. Menyatakan keharusan ~NAKEREBA NARIMASEN<br>2. Kosakata musim dan kalender belajar | 2 | Target aktif: Kewajiban/keharusan tindakan ~NAKEREBA NARIMASEN | Bepergian & Berjalan-jalan | Visual PDF checked |
| 37 | **FUJISAN O MITARI, OSUSHI O TABETARI SHIMASHITA**<br>*Melihat Gunung Fuji dan makan sushi* | PDF p. 42<br>Cetak p. 41 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/37.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/37-id-le_01.mp3) | 1. Contoh kegiatan tak berurutan ~TARI ~TARI SHIMASU<br>2. Bentuk lampau kasual kopula ~DATTA | 2 | Target aktif: Merangkum aneka aktivitas wisata ~TARI ~TARI SHIMASU | Di asrama | Visual PDF checked |
| 38 | **KASHIKOMARIMASHITA**<br>*Baik, saya mengerti* | PDF p. 43<br>Cetak p. 42 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/38.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/38-id-le_01.mp3) | 1. Kesantunan staf pelayanan KASHIKOMARIMASHITA<br>2. Frasa penerimaan pesanan tamu | 2 | Target aktif: Ungkapan kesantunan layanan formal perhotelan/toko | Bepergian & Berjalan-jalan, Penyelesaian masalah | Visual PDF checked |
| 39 | **KAZE DA TO OMOIMASU**<br>*Saya rasa masuk angin* | PDF p. 44<br>Cetak p. 43 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/39.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/39-id-le_01.mp3) | 1. Opini/dugaan pribadi ... DA TO OMOIMASU<br>2. Kosakata gejala sakit (KAZE, NETSU) | 2 | Target aktif: Menyampaikan opini/dugaan ~TO OMOIMASU & keluhan medis | Penyelesaian masalah | Visual PDF checked |
| 40 | **ATAMA GA ZUKIZUKI SHIMASU**<br>*Kepala saya berdenyut-denyut* | PDF p. 45<br>Cetak p. 44 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/40.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/40-id-le_01.mp3) | 1. Onomatope rasa sakit fisik + SHIMASU<br>2. Kosakata bagian tubuh (ATAMA, ONAKA) | 2 | Target aktif: Mendeskripsikan gejala fisik dengan onomatope + SHIMASU | Di asrama, Penyelesaian masalah | Visual PDF checked |
| 41 | **GAKUEN-SAI NI IKU KOTO GA DEKITE, TANOSHIKATTA DESU**<br>*Bisa pergi ke festival kampus dan menyenangkan* | PDF p. 46<br>Cetak p. 45 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/41.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/41-id-le_01.mp3) | 1. Potensi Verba kamus + KOTO GA DEKIMASU<br>2. Bentuk-TE menyatakan sebab kepuasan | 2 | Target aktif: Kemampuan ~KOTO GA DEKIMASU & relasi sebab rasa senang | Di asrama, Kebudayaan Jepang | Visual PDF checked |
| 42 | **DORE GA ICHIBAN OISHII KANA**<br>*Yang mana yang paling enak ya?* | PDF p. 47<br>Cetak p. 46 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/42.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/42-id-le_01.mp3) | 1. Superlatif DORE GA ICHIBAN ... DESU KA<br>2. Partikel monolog keraguan KANA | 2 | Target aktif: Menanyakan pilihan terfavorit ICHIBAN & partikel KANA | Perbelanjaan & Restoran, Bepergian & Berjalan-jalan | Visual PDF checked |
| 43 | **DÔSHITE DESHÔ KA**<br>*Mengapa demikian ya?* | PDF p. 48<br>Cetak p. 47 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/43.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/43-id-le_01.mp3) | 1. Pertanyaan dugaan sopan DÔSHITE DESHÔ KA<br>2. Menyatakan alasan/faktor fenomena | 2 | Target aktif: Dugaan sopan ~DESHÔ KA & menanyakan penyebab DÔSHITE | Kebudayaan Jepang, Bepergian & Berjalan-jalan | Visual PDF checked |
| 44 | **WAGASHI O TABETE KARA, MACCHA O NOMIMASU**<br>*Setelah makan wagashi, baru minum maccha* | PDF p. 49<br>Cetak p. 48 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/44.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/44-id-le_01.mp3) | 1. Urutan kronologis aksi Verba-TE + KARA<br>2. Menyatakan kemungkinan ~KAMOSHIREMASEN | 2 | Target aktif: Urutan prasyarat ~TE KARA & dugaan ~KAMOSHIREMASEN | Perbelanjaan & Restoran, Kebudayaan Jepang | Visual PDF checked |
| 45 | **OTANJÔBI OMEDETÔ**<br>*Selamat ulang tahun* | PDF p. 50<br>Cetak p. 49 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/45.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/45-id-le_01.mp3) | 1. Ucapan selamat OTANJÔBI OMEDETÔ<br>2. Verba penerimaan kado/benda MORAIMASU | 2 | Target aktif: Ucapan selamat perayaan & verba penerimaan MORAIMASU | Perbelanjaan & Restoran, Acara Khusus | Visual PDF checked |
| 46 | **KIKOKU SURU MAE NI, YUKI O MIRU KOTO GA DEKITE SHIAWASE DESU**<br>*Sebelum pulang ke tanah air, bahagia bisa melihat salju* | PDF p. 51<br>Cetak p. 50 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/46.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/46-id-le_01.mp3) | 1. Keterangan waktu sebelum Verba kamus + MAE NI<br>2. Perumpamaan kemiripan ~NO YÔ NI | 2 | Target aktif: Urutan waktu ~MAE NI & perumpamaan ~NO YÔ NI | Bepergian & Berjalan-jalan, Acara Khusus | Visual PDF checked |
| 47 | **NIHONGO-KYÔSHI NI NARU NO GA YUME DESU**<br>*Menjadi pengajar bahasa Jepang adalah impian saya* | PDF p. 52<br>Cetak p. 51 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/47.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/47-id-le_01.mp3) | 1. Nominalisasi anak kalimat verba ~NO GA YUME DESU<br>2. Perubahan status menjadi ... NI NARIMASU | 2 | Target aktif: Nominalisasi ~NO GA YUME DESU & menjadi ~NI NARIMASU | Di universitas | Visual PDF checked |
| 48 | **IROIRO OSEWA NI NARIMASHITA**<br>*Terima kasih atas segala bantuan yang diberikan* | PDF p. 53<br>Cetak p. 52 | [Pelajaran](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/48.html)<br>[Audio MP3](https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/48-id-le_01.mp3) | 1. Ungkapan pamitan terima kasih IROIRO OSEWA NI NARIMASHITA<br>2. Salam kehati-hatian perpisahan KIOTSUKETE | 2 | Target aktif: Ungkapan perpisahan formal berterima kasih & salam keselamatan | Bepergian & Berjalan-jalan, Acara Khusus | Visual PDF checked |
"""

for d in dest_dirs:
    with open(os.path.join(d, 'source-map.md'), 'w', encoding='utf-8') as f:
        f.write(source_map)

# -------------------------------------------------------------
# 2. docs/rights.md
# -------------------------------------------------------------
rights = """# KEBIJAKAN HAK CIPTA & LISENSI (RIGHTS POLICY)

Dokumen ini mendefinisikan batasan hukum, kepemilikan intelektual, dan kepatuhan lisensi untuk aplikasi pendamping **Nihongo**.

---

## 1. Status Hak Cipta Materi Sumber (NHK WORLD)
* Seluruh materi rekaman suara (MP3), buku panduan resmi (PDF), naskah drama percakapan e-book, ilustrasi karakter komik, dan logo kursus *Belajar Bahasa Jepang (ver. April 2015)* adalah hak cipta milik **© NHK (Nippon Hoso Kyokai) / NHK WORLD RADIO JAPAN**.
* Ketentuan resmi NHK menyatakan materi disediakan murni untuk keperluan penggunaan pribadi (*personal use*).
  * **Sumber Ketentuan Unduh:** Portal NHK WORLD Radio Japan (`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/download/`, diakses pada 28 Oktober 2026).
* Aplikasi ini adalah **materi pendamping belajar mandiri (independent companion)** dan **TIDAK memiliki hubungan kemitraan, afiliasi resmi, sponsor, maupun pengesahan dari NHK**.

---

## 2. Kepatuhan Operasional Mode "Link-Only" (Ketentuan Mutlak)

Untuk menjamin ketiadaan pelanggaran hak cipta dalam repositori kode:

### 2.1 Aset Terlarang di Repositori (Zero-Asset Storage)
* **Dilarang Keras di-commit atau di-host di repositori/server:**
  1. Berkas e-book resmi (**PDF**).
  2. Berkas rekaman siaran pelajaran (**MP3**).
  3. Berkas grafis/ilustrasi komik atau karakter e-book asli (**PNG/JPG/SVG**).
  4. Naskah drama dialog percakapan utuh kalimat demi kalimat.
* **Mekanisme Tautan Audio (Mode A - Link-Only Tab Baru):**
  * Tombol audio pada antarmuka murni berfungsi sebagai tautan eksternal yang membuka URL MP3 resmi NHK (`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/...`) atau membuka halaman pelajaran resmi di tab baru peramban.
  * Aplikasi tidak meng-embed (*no iframe embed/no local streaming proxy*) aset audio NHK ke dalam server aplikasi.
* **Penyelesaian Durasi Audio MP3 Siaran (~10 menit):**
  * Rekaman siaran MP3 berdurasi 600,08 detik (~10 menit).
  * Dialog percakapan drama inti Anna & Sakura berada di rentang **01:22 – 01:34** (sc01: 01:22.3, sc02: 01:26.9, sc03: 01:30.4, sc04: 01:32.9–01:34.0). Dengan buffer perkiraan: **01:20 – 01:35 (perkiraan)**.
  * Aplikasi mencantumkan informasi menit dialog ini serta tombol pintas menuju pemutar kalimat per kalimat di situs web resmi NHK.

### 2.2 Batasan Naskah & Pernyataan Kutipan
* Aplikasi **TIDAK menyalin seluruh naskah percakapan** ke dalam antarmuka.
* Pada tahap *Notice*, aplikasi hanya menampilkan maksimal **1–2 kalimat target utama** untuk telaah tata bahasa atau menampilkan contoh kalimat baru buatan sendiri.
* **Klausul Kutipan:** Penggunaan 1–2 kalimat target tersebut adalah **kutipan pendek teratribusi; bukan klaim fair use; dan akan segera dihapus jika pihak NHK meminta.**
* Pembelajar diarahkan membaca dialog percakapan selengkapnya melalui tautan resmi: **"Buka naskah resmi di situs NHK WORLD"**.
* Terjemahan bahasa Indonesia e-book tidak disalin mentah; seluruh contoh kalimat baru dan penjelasan tata bahasa menggunakan redaksi orisinal.

---

## 3. Ketetapan Lisensi Perangkat Lunak & Konten

* **Kode Sumber Perangkat Lunak (Software Source Code):** Dilisensikan di bawah **MIT License**.
* **Konten Pembelajaran Orisinal (Original Content):** Dilisensikan di bawah **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.
* **Klausul Pengecualian Mutlak (Carve-Out Clause):**
  > Seluruh kutipan pendek, nama tokoh (Anna, Sakura, Rodrigo, dll.), dan materi yang bersumber dari kursus *Belajar Bahasa Jepang* NHK WORLD tetap merupakan hak cipta milik **© NHK**. Poin-poin tersebut **TIDAK ikut dilisensikan ulang** di bawah lisensi MIT atau CC BY-SA aplikasi ini.

---

## 4. Teks Penyangkalan Wajib (Disclaimer)

Pernyataan berikut wajib dicantumkan pada bagian footer antarmuka aplikasi web dan file `README.md`:

> **Penyangkalan Resmi (Disclaimer):**  
> *Nihongo* adalah aplikasi pendamping belajar independen yang dirancang untuk membantu pembelajar bahasa Jepang di Indonesia. Aplikasi ini tidak berafiliasi, disponsori, atau didukung oleh NHK WORLD. Hak cipta materi asli *Belajar Bahasa Jepang* (berkas PDF e-book, rekaman audio MP3, naskah drama, dan ilustrasi komik) sepenuhnya dimiliki oleh NHK WORLD RADIO JAPAN.
"""

for d in dest_dirs:
    with open(os.path.join(d, 'rights.md'), 'w', encoding='utf-8') as f:
        f.write(rights)

# -------------------------------------------------------------
# 3. docs/curriculum.md
# -------------------------------------------------------------
curriculum = """# KURIKULUM & PETA CAPAIAN BELAJAR (CURRICULUM & CAN-DO MAP)

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
"""

for d in dest_dirs:
    with open(os.path.join(d, 'curriculum.md'), 'w', encoding='utf-8') as f:
        f.write(curriculum)

# -------------------------------------------------------------
# 4. docs/product-plan.md
# -------------------------------------------------------------
product_plan = """# RENCANA PRODUK & ARSITEKTUR TEKNIS (PRODUCT PLAN & TECH SPEC)

Dokumen ini mendefinisikan arsitektur aplikasi, skema data TypeScript, pemisahan state SRS, antarmuka layar, manajemen risiko, rencana pengujian/CI, serta aturan validasi konten otomatis untuk aplikasi **Nihongo**.

---

## 1. Arsitektur Teknis & Prinsip Rekayasa

### 1.1 Stack Teknologi
* **Arsitektur:** Static Single Page Application (SPA), zero-backend, dapat di-deploy langsung ke GitHub Pages atau static hosting.
* **Framework & Bahasa:** **Vite + React + TypeScript**.
* **Styling:** Vanilla CSS murni dengan variabel warna (*Design Tokens*). Estetika *calm paper-like* kontras tinggi (WCAG AA).
* **Tipografi & Aksara Jepang:**
  * Menghindari unduhan bundel font berat yang menguras kuota mobile data pembelajar.
  * Menggunakan *system font stack*:
    `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`.
  * Format furigana menggunakan standar elemen semantik HTML5 modern:
    `<ruby>日本語<rt>にほんご</rt></ruby>` (tanpa tag `<rb>` yang sudah usang).
* **Penyimpanan State:** `localStorage` lokal pada peramban pembelajar.
  * Menyimpan progres belajar per pelajaran, antrean pengulangan SRS, log kesalahan (*Error Notebook*), dan preferensi.
  * Dilengkapi fungsi **Export & Import JSON** untuk pencadangan mandiri tanpa kewajiban mendaftar akun atau login.

### 1.2 Spaced Repetition System (SRS)
* **Model Jadwal:** Spaced practice dengan jadwal interval tetap yang dapat disesuaikan (*fixed interval, tunable*: interval default hari ke-1, 3, 7, 14, 30).
* **Pemisahan Konten & State:** Konten kartu ulasan statis (`ReviewCard`) dipisahkan secara tegas dari state progres pengguna (`SrsState`).
* **Tipe Kartu:** Mencakup 5 variasi: `"vocab" | "grammar" | "particle" | "listening" | "output"`. Mengutamakan kartu produksi/aktif (recall makna ke Jepang, rumpang partikel, susun kalimat).
* **Batas Antrean:** Jika backlog ulasan menumpuk > 50 kartu, pembelajar diarahkan untuk membersihkan antrean review terlebih dahulu sebelum membuka pelajaran baru.

### 1.3 Mekanisme Audio (Kepatuhan Mode A Link-Only)
* Tombol audio pada antarmuka berfungsi membuka file audio MP3 resmi NHK di tab baru atau menuju pemutar resmi di web NHK. **Tidak meng-embed pemutar audio lokal atau menyimpan file MP3 di server/repo.**
* **Penyelesaian Durasi MP3 Siaran (10 menit vs 3–4 menit sesi):**
  1. Aplikasi menyertakan **Petunjuk Timestamp Percakapan** (pada Pelajaran 1: dialog Anna–Sakura berada di menit **01:22 – 01:34**, buffer perkiraan **01:20 – 01:35**).
  2. Menyediakan tombol pintas langsung menuju **Pemutar Kalimat Resmi NHK** untuk mendengarkan kalimat dialog per kalimat secara terisolasi.

---

## 2. Model Data & Skema TypeScript

```ts
export type RubySegment = {
  text: string;
  reading?: string; // furigana pembacaan kana jika teks berupa kanji
};

export type LanguageString = {
  jp: string;           // Teks kanji/kana asli: e.g. "私はアンナです"
  kana: string;         // Bacaan kana lengkap: e.g. "わたしはアンナです"
  romaji: string;       // Transliterasi Hepburn: e.g. "Watashi wa Anna desu"
  id: string;           // Terjemahan orisinal bahasa Indonesia
  rubySegments?: RubySegment[]; // Segmentasi furigana presisi
  rubyHtml?: string;    // String HTML ruby yang sudah tervalidasi
};

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type VocabItem = {
  id: string;
  kanji?: string;
  kana: string;
  romaji: string;
  idMeaning: string;
  contextSentence?: LanguageString;
  sourceRef: string;    // e.g. "NHK L01 line 2" atau "original"
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type GrammarPoint = {
  id: string;
  title: string;           // e.g. "A wa B desu"
  pattern: string;         // e.g. "[Subjek] wa [Predikat] desu"
  explanationId: string;   // Penjelasan orisinal bahasa Indonesia
  contrastNote: string;    // Catatan kontras pola pikir dengan bahasa Indonesia
  examples: LanguageString[]; // Contoh kalimat orisinal
  role: "active_target" | "recognition_reference";
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type Exercise = {
  id: string;
  type: "cloze_particle" | "sentence_order" | "dictation" | "audio_meaning" | "meaning_to_jp" | "grammar_transform";
  prompt: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;     // Penjelasan aturan jika salah
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type OutputTask = {
  type: "speaking" | "writing";
  scenarioPrompt: string;
  instructions: string[];
  modelAnswer: LanguageString;
  selfCheckList: string[]; // 3-4 kriteria evaluasi mandiri
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

// Konten statis kartu ulasan
export type ReviewCard = {
  id: string;
  lessonId: string;
  front: string;
  back: string;
  type: "vocab" | "grammar" | "particle" | "listening" | "output";
  audioRef?: string;       // Tautan resmi untuk rujukan dengar (Mode A)
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

// State dinamis SRS pengguna (disimpan di localStorage)
export type SrsState = {
  cardId: string;
  intervalDays: number;
  nextReviewDate: string;  // Format ISO Date
  repetitionCount: number;
  easeFactor?: number;
  lastReviewedDate?: string;
  history?: { date: string; rating: "again" | "hard" | "good" | "easy" }[];
};

export type Lesson = {
  id: string;                  // e.g. "L01"
  order: number;               // 1..48
  title: LanguageString;
  pdfPage: number;             // Nomor halaman PDF sumber (PDF p. 6)
  printedPage: number;         // Nomor halaman cetak sumber (Cetak p. 5)
  situationCategories: string[]; // Multi-label dari TOC resmi
  productArcId: string;        // e.g. "arc-1"
  officialUrls: {
    lessonPage: string;        // URL resmi pelajaran NHK
    audioMp3: string;          // URL resmi file MP3 NHK
    audioTimestamp?: { start: string; end: string; label: string }; // e.g. "01:22" - "01:34"
  };
  canDo: string[];             // Pernyataan capaian fungsional
  grammarPoints: GrammarPoint[];
  vocabulary: VocabItem[];     // Batas: 5–8 kosakata aktif
  listening: {
    gistQuestions: Question[];   // Pertanyaan pemahaman esensi global
    detailQuestions: Question[]; // Pertanyaan pemahaman detail percakapan
  };
  noticeShortQuotes: {
    targetSentence: LanguageString;
    attribution: string;
  }[];                         // Maksimal 1–2 kalimat kutipan teratribusi
  exercises: Exercise[];       // Batas: 4–8 butir latihan aktif
  outputTask: OutputTask;
  reviewCards: ReviewCard[];   // Batas: 8–12 kartu ulasan
  qa: {
    status: "draft" | "machine_checked" | "human_reviewed" | "published";
    reviewedBy: string;        // Nama reviewer atau "TBD"
    verifiedDate?: string;
  };
};
```

---

## 3. Tabel Manajemen Risiko & Mitigasi (Risk Table)

| Kategori Risiko | Deskripsi Risiko | Dampak | Strategi Mitigasi Terverifikasi |
| :--- | :--- | :---: | :--- |
| **Hak Cipta (Copyright)** | Gugatan atau keluhan atas redistribusi aset berhak cipta milik NHK. | Tinggi | **Menerapkan Zero-Asset Storage:** Berkas PDF, MP3 siaran, dan gambar komik NHK dilarang di-commit/di-host. Audio diakses via link-only ke tab resmi; kutipan dibatasi 1–2 kalimat teratribusi dengan klausul siap dihapus jika diminta. |
| **Kualitas & Akurasi Teks** | Kesalahan partikel (misal は dilafalkan ha/wa), furigana meleset, atau salah identifikasi kosakata. | Tinggi | Seluruh kalimat bahasa Jepang diperiksa manual terhadap naskah visual PDF asli. Menggunakan segmentasi ruby presisi; status QA transparan (`TBD` jika belum direview penutur mahir). |
| **Halusinasi AI** | Konten etimologi kanji buatan, stroke order keliru, atau intonasi nada fiktif. | Sedang | **Aturan Anti-Slop Mutlak:** Melarang pembuatan diagram stroke order atau pitch-accent otomatis dari AI; hanya menyajikan fakta tata bahasa yang diverifikasi sumber rujukan. |
| **Kelelahan Kognitif Pembelajar** | Pembelajar merasa kewalahan akibat pelajaran yang memuat terlalu banyak poin sekaligus. | Sedang | Membatasi kosakata aktif 5–8 kata, membagi materi 3-poin sumber menjadi 2 target aktif + 1 referensi, serta membatasi progres jika antrean review > 50 kartu. |
| **Performa Akses Seluler** | Halaman lambat dimuat pada jaringan mobile data Indonesia. | Rendah | Menggunakan Vite SPA statis ringan, CSS murni tanpa framework berat, serta *system font stack* bebas unduhan berkas font eksternal berukuran besar. |

---

## 4. Rencana Pengujian & CI (Test & CI Plan)

Setiap perubahan kode dan pembaruan konten pada repositori wajib melewati gerbang integrasi berkelanjutan (*Continuous Integration*):

```mermaid
flowchart LR
    A[Git Commit] --> B[Lint & Typecheck]
    B --> C[Unit Tests]
    C --> D[Content Validation Script]
    D --> E[Vite Production Build]
    E --> F[Deploy to GitHub Pages]
```

### 4.1 Lingkup Pengujian Otomatis
1. **Pemeriksaan Tipe & Linting:** `npm run lint` & `tsc --noEmit` wajib lulus tanpa peringatan atau error tipe.
2. **Unit Testing (Vitest):**
   * Pengujian logika penjadwalan SRS (perhitungan interval hari, pembaruan antrean).
   * Normalisasi jawaban input teks pembelajar (toleransi huruf besar/kecil, spasi ganda, variasi kana/romaji).
   * Pengujian integritas ekspor/impor JSON *round-trip* pada `localStorage`.
3. **Skrip Validasi Konten Otomatis (`scripts/validate-content.ts`):**
   * **Batas Kosakata:** Memastikan setiap pelajaran memiliki minimal 5 dan maksimal 8 kosakata aktif (`5 <= vocab.length <= 8`).
   * **Batas Latihan:** Memastikan setiap pelajaran memiliki 4 s.d. 8 butir latihan aktif (`4 <= exercises.length <= 8`).
   * **Batas Kartu SRS:** Memastikan setiap pelajaran memiliki 8 s.d. 12 kartu ulasan (`8 <= reviewCards.length <= 12`).
   * **Ketersediaan Capaian:** Memastikan setiap pelajaran memiliki minimal satu *Can-Do Statement*.
   * **Kepatuhan Atribusi & QA:** Memastikan setiap kosakata, contoh kalimat, latihan, dan kartu memiliki `sourceRef` dan `qaStatus`.
   * **Validasi Tautan Eksternal:** Menguji kesahihan sintaks dan status URL resmi pelajaran NHK dan URL file MP3.
   * **Pencegahan Klaim Ilegal:** Memastikan tidak ada frasa terlarang seperti "Lulus JLPT N3/N4" atau "Materi Resmi NHK".

---

## 5. Rencana Pelaksanaan MVP 5 Pelajaran (Gate 3)

Setelah Gate 2 (Slice Vertikal Pelajaran 1 secara *end-to-end*) selesai dibangun dan disetujui, tahap Gate 3 akan merealisasikan 5 pelajaran pertama dari **Arc 1**:
1. **Pelajaran 1 (PDF p. 6 / Cetak p. 5):** *WATASHI WA ANNA DESU* (Perkenalan diri & partikel topik WA).
2. **Pelajaran 2 (PDF p. 7 / Cetak p. 6):** *KORE WA NAN DESU KA* (Kata tunjuk KORE/SORE, partikel tanya KA, & partikel kepemilikan NO).
3. **Pelajaran 3 (PDF p. 8 / Cetak p. 7):** *TOIRE WA DOKO DESU KA* (Tanya lokasi fasilitas & penunjuk tempat KOKO/SOKO/ASOKO).
4. **Pelajaran 4 (PDF p. 9 / Cetak p. 8):** *TADAIMA* (Salam kepulangan asrama & negasi sopan DEWA ARIMASEN).
5. **Pelajaran 5 (PDF p. 10 / Cetak p. 9):** *SORE WA WATASHI NO TAKARAMONO DESU* (Objek partikel O & pengenalan verba ~MASU).
"""

for d in dest_dirs:
    with open(os.path.join(d, 'product-plan.md'), 'w', encoding='utf-8') as f:
        f.write(product_plan)

print("All 4 documents successfully updated and synced!")
