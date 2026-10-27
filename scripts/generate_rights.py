import os

rights_content = """# KEBIJAKAN HAK CIPTA & LISENSI (RIGHTS POLICY)

Dokumen ini mendefinisikan batasan hukum, hak cipta, dan kepatuhan lisensi untuk aplikasi pendamping **Nihongo**.

---

## 1. Status Hak Cipta Materi Sumber (NHK WORLD)
* Seluruh materi suara (MP3), naskah percakapan e-book, ilustrasi karakter, dan logo kursus *Belajar Bahasa Jepang (ver. April 2015)* adalah hak cipta milik **© NHK (Nippon Hoso Kyokai) / NHK WORLD RADIO JAPAN**.
* Ketentuan unduh resmi NHK menyatakan materi disediakan untuk keperluan penggunaan pribadi (*personal use*).
* Aplikasi ini adalah **materi pendamping belajar mandiri (independent companion)** dan **TIDAK memiliki afiliasi resmi, sponsor, maupun pengesahan dari NHK**.

---

## 2. Kepatuhan Operasional Mode "Link-Only" (Non-Negotiable)

Untuk menjamin tidak adanya pelanggaran hak cipta dalam repositori publik:

### 2.1 Aset Media (Audio & Ilustrasi)
* **Dilarang Keras:** Mengunduh, menyimpan, mengunggah (*commit*), atau meng-host file MP3 resmi NHK maupun gambar komik/ilustrasi e-book ke dalam repositori Git atau server aplikasi.
* **Mekanisme yang Diterapkan:**
  * Tahap *Listen* menyediakan tombol/tautan langsung yang membuka URL MP3 resmi NHK di tab baru (`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/...`).
  * Tidak menggunakan suara tiruan AI (*AI voice cloning*) yang dipalsukan seolah-olah penutur asli.

### 2.2 Naskah Percakapan (Transcripts)
* **Dilarang Keras:** Menyalin seluruh dialog percakapan e-book ke dalam aplikasi (tidak ada fitur "buka naskah lengkap kalimat demi kalimat").
* **Mekanisme yang Diterapkan:**
  * Pada tahap *Notice*, aplikasi hanya menampilkan maksimal **1–2 baris kalimat target** sebagai kutipan pendek untuk keperluan telaah tata bahasa dengan atribusi yang jelas (*fair-use teaching quote*), atau menampilkan contoh kalimat orisinal baru.
  * Pembelajar diarahkan membaca naskah percakapan selengkapnya melalui tautan resmi: **"Buka naskah resmi di NHK WORLD"**.
  * Tidak menyalin teks terjemahan bahasa Indonesia milik e-book secara mentah; seluruh kalimat contoh baru dan penjelasan dibuat orisinal.

---

## 3. Lisensi Kode & Konten Orisinal Aplikasi

* **Kode Sumber (Source Code):** Dilisensikan di bawah lisensi terbuka **MIT License**.
* **Konten Orisinal (Original Content):** Seluruh penjelasan tata bahasa komparatif (kontras Jepang-Indonesia), bank latihan drill orisinal, kartu ulasan SRS orisinal, dan rubrik tugas *Use* dilisensikan di bawah **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.
* **Font & Tipografi:** Menggunakan *system font stack* yang efisien untuk koneksi data seluler (misal: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Meiryo", sans-serif`) atau subset webfont berlisensi SIL Open Font License (OFL) tanpa membebani kuota data pembelajar.

---

## 4. Format Pernyataan Penyangkalan (Disclaimer Wajib)

Pernyataan berikut wajib dicantumkan pada bagian footer aplikasi web dan file `README.md`:

> **Penyangkalan Resmi (Disclaimer):**  
> *Nihongo* adalah aplikasi pendamping belajar independen yang dirancang untuk membantu pembelajar bahasa Jepang di Indonesia. Aplikasi ini tidak berafiliasi, disponsori, atau didukung oleh NHK WORLD. Hak cipta materi asli *Belajar Bahasa Jepang* (audio, naskah drama, dan ilustrasi) sepenuhnya dimiliki oleh NHK WORLD RADIO JAPAN.
"""

dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]

for d in dest_dirs:
    with open(os.path.join(d, 'rights.md'), 'w', encoding='utf-8') as f:
        f.write(rights_content)

print("Generated rights.md successfully")
