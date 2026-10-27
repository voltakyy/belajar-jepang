# KEBIJAKAN HAK CIPTA & LISENSI (RIGHTS POLICY)

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
