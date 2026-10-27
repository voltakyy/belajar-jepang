import os

rights_content = """# KEBIJAKAN HAK CIPTA & LISENSI (RIGHTS POLICY)

Dokumen ini mendefinisikan batasan hukum, kepemilikan intelektual, dan kepatuhan lisensi untuk aplikasi pendamping **Nihongo**.

---

## 1. Status Hak Cipta Materi Sumber (NHK WORLD)
* Seluruh materi suara (MP3), buku panduan (PDF), naskah percakapan e-book, ilustrasi karakter komik, dan logo kursus *Belajar Bahasa Jepang (ver. April 2015)* adalah hak cipta milik **© NHK (Nippon Hoso Kyokai) / NHK WORLD RADIO JAPAN**.
* Ketentuan resmi NHK menyatakan materi disediakan untuk keperluan penggunaan pribadi (*personal use*).
  * **Sumber:** Portal Unduh NHK WORLD Radio Japan (`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/download/`, diakses 28 Oktober 2026).
* Aplikasi ini adalah **materi pendamping belajar mandiri (independent companion)** dan **TIDAK memiliki hubungan kemitraan, afiliasi resmi, sponsor, maupun pengesahan dari NHK**.

---

## 2. Kepatuhan Operasional Mode "Link-Only" (Ketentuan Mutlak)

Untuk menjamin ketiadaan pelanggaran hak cipta dalam repositori kode:

### 2.1 Aset Terlarang di Repositori (Zero-Asset Storage)
* **Dilarang Keras di-commit / di-host:**
  1. File dokumen e-book resmi (**PDF**).
  2. File rekaman suara siaran pelajaran (**MP3**).
  3. File gambar ilustrasi karakter, komik, atau grafis e-book asli (**PNG/JPG/SVG**).
  4. Naskah drama dialog utuh kalimat demi kalimat.
* **Mekanisme Tautan Audio (Link-Only Bar):**
  * Tombol audio pada aplikasi murni berfungsi sebagai tautan eksternal yang membuka URL MP3 resmi NHK (`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/...`) atau membuka halaman pelajaran resmi di tab baru peramban.
  * Aplikasi tidak meng-embed (*no iframe embed/no local streaming proxy*) aset audio NHK ke dalam server pribadi.
* **Penyelesaian Gap Durasi Audio (10 Menit vs 3–4 Menit Sesi):**
  * File MP3 siaran berdurasi ~10 menit mencakup dialog drama, ulasan presenter, dan musik.
  * Untuk efisiensi sesi belajar pembelajar (3–4 menit pada tahap *Listen*), aplikasi menyediakan:
    1. **Petunjuk Timestamp Dialog:** Informasi menit segmen percakapan drama inti (contoh pada Pelajaran 1: dialog Anna & Sakura berada di menit **01:10 – 01:45**).
    2. **Tautan Pemutar Kalimat:** Tombol langsung menuju pemutar dialog per kalimat interaktif resmi di situs web NHK.

### 2.2 Batasan Naskah & Pernyataan Kutipan
* Aplikasi **TIDAK menyalin seluruh naskah drama** ke dalam antarmuka.
* Pada tahap *Notice*, aplikasi hanya menampilkan maksimal **1–2 kalimat target utama** untuk keperluan telaah tata bahasa atau menampilkan contoh kalimat orisinal baru buatan sendiri.
* **Klausul Kutipan:** Penggunaan 1–2 kalimat target tersebut adalah **kutipan pendek teratribusi; bukan klaim fair use; dan akan segera dihapus jika pihak NHK meminta.**
* Pembelajar diarahkan membaca dialog percakapan selengkapnya melalui tautan: **"Buka naskah resmi di situs NHK WORLD"**.
* Terjemahan bahasa Indonesia milik e-book tidak disalin mentah; seluruh contoh kalimat baru dan penjelasan tata bahasa menggunakan redaksi orisinal.

---

## 3. Usulan Lisensi Kode & Konten Orisinal

* **Kode Sumber Perangkat Lunak:** Diusulkan menggunakan **MIT License**.
* **Konten Pembelajaran Orisinal:** Diusulkan menggunakan **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)** atau opsi alternatif **All Rights Reserved** (menunggu keputusan dan persetujuan tertulis dari pengguna).
* **Klausul Pengecualian Wajib (Carve-Out):**
  > Seluruh kutipan pendek, nama karakter (Anna, Sakura, dll.), dan materi terkait NHK WORLD tetap merupakan hak cipta milik **© NHK**. Poin-poin tersebut **TIDAK ikut dilisensikan ulang** di bawah lisensi MIT atau CC BY-SA aplikasi ini.

---

## 4. Teks Penyangkalan Wajib (Disclaimer)

Pernyataan berikut wajib dicantumkan pada bagian footer antarmuka aplikasi web dan file `README.md`:

> **Penyangkalan Resmi (Disclaimer):**  
> *Nihongo* adalah aplikasi pendamping belajar independen yang dirancang untuk membantu pembelajar bahasa Jepang di Indonesia. Aplikasi ini tidak berafiliasi, disponsori, atau didukung oleh NHK WORLD. Hak cipta materi asli *Belajar Bahasa Jepang* (file PDF e-book, rekaman audio MP3, naskah drama, dan ilustrasi komik) sepenuhnya dimiliki oleh NHK WORLD RADIO JAPAN.
"""

dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]

for d in dest_dirs:
    with open(os.path.join(d, 'rights.md'), 'w', encoding='utf-8') as f:
        f.write(rights_content)

print("Updated rights.md successfully")
