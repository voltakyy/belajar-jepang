import os

product_plan_content = """# RENCANA PRODUK & ARSITEKTUR TEKNIS (PRODUCT PLAN & TECH SPEC)

Dokumen ini mendefinisikan arsitektur aplikasi, model data TypeScript, antarmuka layar, alur belajar 15 menit, rencana QA konten, serta ruang lingkup MVP untuk aplikasi **Nihongo**.

---

## 1. Arsitektur Teknis & Prinsip Rekayasa

### 1.1 Stack Teknologi
* **Arsitektur:** Static Single Page Application (SPA), zero-backend, deployable ke GitHub Pages / static CDN.
* **Framework & Bahasa:** **Vite + React + TypeScript**.
* **Styling & CSS:** Modern Vanilla CSS dengan variabel warna terpusat (*Design Tokens*). Tidak menggunakan Tailwind secara ad-hoc; estetika bernuansa *calm paper-like* dengan kontras tinggi (WCAG AA).
* **Tipografi & Aksara Jepang:**
  * Tidak memaksakan unduhan file font Noto Sans JP penuh (yang berukuran beberapa megabyte) untuk menghemat kuota mobile data.
  * Menggunakan *system font stack* yang bersih:
    `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`.
  * Penulisan furigana menggunakan standar HTML5 modern yang valid:
    `<ruby>日本語<rt>にほんご</rt></ruby>` (menghindari penggunaan tag `<rb>` yang sudah deprecated).
* **Penyimpanan State:** `localStorage` murni pada peramban pembelajar.
  * Menyimpan progres per pelajaran, antrean SRS, log *Error Notebook*, dan preferensi tampilan.
  * Fitur **Export & Import Data (JSON)** untuk cadangan (*backup*) data mandiri tanpa memerlukan akun atau email.

### 1.2 Spaced Repetition System (SRS)
* **Model Jadwal:** Spaced practice dengan jadwal interval tetap yang dapat disesuaikan (*fixed interval, tunable*: interval default hari ke-1, 3, 7, 14, 30).
* **Tipe Kartu:** Mengutamakan kartu produksi/aktif (menulis partikel rumpang, menyusun urutan kalimat, recall arti ke Jepang) daripada sekadar kartu pilihan ganda pasif.
* **Pengaman Beban Kognitif:** Jika antrean review menumpuk > 50 kartu, pembelajar diarahkan untuk membersihkan antrean ulasan terlebih dahulu sebelum membuka pelajaran baru (*pause new lessons*).

---

## 2. Model Data & Skema TypeScript

```ts
export type LanguageString = {
  jp: string;       // Teks kanji/kana asli: e.g. "私はアンナです"
  kana: string;     // Pembacaan kana lengkap: e.g. "わたしはアンナです"
  romaji: string;   // Transliterasi Hepburn: e.g. "Watashi wa Anna desu"
  id: string;       // Terjemahan Indonesia orisinal: e.g. "Saya adalah Anna"
};

export type GrammarPoint = {
  id: string;
  title: string;           // e.g. "A wa B desu"
  pattern: string;         // e.g. "[Kata Benda A] wa [Kata Benda B] desu"
  explanationId: string;   // Penjelasan orisinal dalam bahasa Indonesia
  contrastNote: string;    // Kontras pola pikir dengan bahasa Indonesia
  examples: LanguageString[]; // 2-3 contoh kalimat orisinal
  role: "active_target" | "recognition_reference";
};

export type VocabItem = {
  id: string;
  kanji?: string;
  kana: string;
  romaji: string;
  idMeaning: string;
  contextSentence?: LanguageString;
};

export type Exercise = {
  id: string;
  type: "cloze_particle" | "sentence_order" | "dictation" | "audio_meaning" | "grammar_transform";
  prompt: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string; // Penjelasan aturan jika salah (bukan sekadar kata 'Salah')
};

export type OutputTask = {
  type: "speaking" | "writing";
  scenarioPrompt: string;
  modelAnswer: LanguageString;
  selfCheckList: string[]; // 3-4 kriteria evaluasi mandiri
};

export type ReviewCard = {
  id: string;
  lessonId: string;
  front: string;
  back: string;
  type: "vocab" | "grammar" | "particle";
  intervalDays: number;
  nextReviewDate: string; // ISO Date string
  repetitionCount: number;
};

export type Lesson = {
  id: string;                // e.g. "L01"
  order: number;             // 1..48
  title: LanguageString;
  pdfPage: number;           // Nomor halaman PDF e-book
  printedPage: number;       // Nomor halaman cetak e-book
  situationCategory: string; // e.g. "Saat-saat khusus", "Penyelesaian masalah"
  productArcId: string;      // e.g. "arc-1"
  officialUrls: {
    lessonPage: string;      // Link naskah resmi NHK
    audioMp3: string;        // Link audio MP3 resmi NHK (audio-only)
  };
  canDo: string[];           // Pernyataan capaian dalam bahasa Indonesia
  grammarPoints: GrammarPoint[];
  vocabulary: VocabItem[];   // 5–8 kosakata aktif
  listening: {
    gistQuestions: { question: string; options: string[]; answerIndex: number }[];
  };
  noticeShortQuote: {
    targetSentence: LanguageString;
    attribution: string;
  };
  exercises: Exercise[];     // 4–6 latihan aktif
  outputTask: OutputTask;
  reviewCards: ReviewCard[]; // 8–12 kartu ulasan
  qa: {
    status: "draft" | "machine_checked" | "human_reviewed" | "published";
    reviewedBy: string;      // Nama reviewer atau "TBD" (tidak boleh klaim palsu)
    verifiedDate?: string;
  };
};
```

---

## 3. Desain Layar & Panduan UX

### 3.1 Layar Utama (Home Screen)
* **Tata Letak Bersih (Calm Paper Look):**
  1. **Kartu Aksi Utama Tunggal:** "Lanjutkan Pelajaran X" lengkap dengan perkiraan durasi (15 menit).
  2. **Kartu Status Ulasan (SRS Card):** Menampilkan jumlah kartu jatuh tempo hari ini (misal: "12 kartu ulasan hari ini").
  3. **Kartu Capaian Terakhir (Can-Do Badge):** Pernyataan konkret yang berhasil dikuasai ("Saya bisa memperkenalkan diri dan menanyakan nama").
  4. **Kartu Catatan Kelemahan (Weak-Spot Reminder):** Menampilkan pola yang sering keliru di latihan (misal: "Partikel は vs が").
* Tanpa dashboard bising berlebihan; fokus pada satu langkah belajar berikutnya.

### 3.2 Alur Pelajaran (The 15-Minute Lesson Flow)
Antarmuka terdiri dari bilah tahapan (Stepper) 6 langkah:
1. **Orient:** Ringkasan konteks percakapan di Indonesia, 2 pertanyaan esensi (*gist*), dan daftar 5–8 kosakata kunci sebelum mendengarkan.
2. **Listen:** Tautan audio-only yang membuka file MP3 resmi NHK di tab baru atau pemutar audio terkontrol. Pembelajar menjawab 2 pertanyaan *gist*. Transkrip naskah dikunci dan belum ditampilkan.
   * *Solusi Durasi Audio di Gate 2:* Karena MP3 siaran radio berdurasi ~10 menit, aplikasi menyertakan panduan menit percakapan (atau pemutar kalimat dialog resmi NHK) agar pembelajar langsung fokus ke segmen dialog 1 menit tanpa mendengarkan seluruh program siaran.
3. **Notice:** Menampilkan 1–2 kalimat target utama sebagai kutipan telaah dengan atribusi resmi, dilengkapi toggle Furigana dan Rōmaji. Tautan tombol "Buka Naskah Lengkap Resmi NHK" tersedia untuk pembacaan dialog utuh.
4. **Retrieve:** Latihan tertutup 4–6 butir (cloze partikel, susun kalimat kata per kata, ubah bentuk verba). Umpan balik langsung menjelaskan aturan gramatikal secara edukatif.
5. **Use:** Latihan produksi mandiri (berbicara/menulis). Pembelajar membandingkan rekamannya dengan *model answer* menggunakan daftar periksa mandiri tanpa penilaian AI otomatis palsu.
6. **Review:** Penyimpanan 8–12 kartu baru ke dalam antrean SRS lokal dan pencatatan riwayat kesalahan.

### 3.3 Layar Course Map
* Menampilkan visual 48 pelajaran dalam 7 Arc.
* Menampilkan status jelas pada tiap pelajaran: *Belum Dimulai*, *Sedang Berjalan*, *Dalam Pengulangan*, atau *Tuntas*.
* Pembelajar dewasa memiliki kebebasan membuka pelajaran apa pun (*non-strict locking*).

### 3.4 Layar Library, Review, & Settings
* **Review & Error Notebook:** Melakukan drill kartu yang jatuh tempo dan melihat ringkasan kekeliruan yang sering terjadi.
* **Kana & Grammar Index:** Kamus tata bahasa terindeks dan bagan hiragana/katakana sebagai rujukan cepat.
* **Settings:** Toggle Furigana default, toggle Rōmaji, ekspor/impor data progres JSON, dan reset data lokal.

---

## 4. Content QA Plan & Skrip Validasi Otomatis

### 4.1 Standar QA Konten
* **Tidak Ada Halusinasi AI:** Tidak menyajikan data etimologi kanji, stroke order buatan, atau aksen nada (*pitch accent*) buatan AI.
* **Penyelarasan Furigana:** Setiap aksara kanji dalam materi dipadankan dengan furigana resmi yang diverifikasi manual.
* **Status Reviewer:** Ditulis secara jujur. Jika belum diperiksa penutur mahir manusia, status diberi tanda `machine_checked` dan reviewer ditulis `TBD`. Tidak membuat profil *native speaker* fiktif.
* **Pengujian Pengguna Riil:** Pengujian kegunaan (*usability test*) wajib dilakukan dengan pembelajar riil dan dicatat apa adanya tanpa manipulasi hasil metrik.

### 4.2 Skrip Validasi Otomatis (`scripts/validate-content.ts`)
Skrip validasi wajib dijalankan dalam CI dan sebelum deploy untuk memastikan:
1. Validitas skema JSON seluruh pelajaran.
2. Keunikan seluruh ID pelajaran, latihan, dan kartu SRS.
3. Jumlah kosakata aktif per pelajaran tidak melebihi batas (maksimal 8 kata).
4. Penanganan pelajaran dengan >2 poin tata bahasa sumber telah membagi prioritas target aktif vs referensi pengenal.
5. Kesahihan tautan resmi NHK (URL pelajaran dan URL file MP3).
6. Tidak adanya klaim dilarang ("Lulus JLPT N3", "Materi Resmi NHK").

---

## 5. Rencana MVP 5 Pelajaran (Gate 3)

Setelah Gate 2 (Pelajaran 1 secara end-to-end) diverifikasi dan disetujui, tahap Gate 3 akan mengimplementasikan 5 pelajaran pertama dari **Arc 1: Identitas & Fondasi Interaksi Awal**:
* **Pelajaran 1 (PDF 6 / Cetak 5):** *WATASHI WA ANNA DESU* (Perkenalan diri & partikel topik *wa*).
* **Pelajaran 2 (PDF 7 / Cetak 6):** *KORE WA NAN DESU KA* (Identifikasi benda & partikel kepemilikan *no*).
* **Pelajaran 3 (PDF 8 / Cetak 7):** *TOIRE WA DOKO DESU KA* (Menanyakan fasilitas toilet & kata tunjuk lokasi).
* **Pelajaran 4 (PDF 9 / Cetak 8):** *TADAIMA* (Salam asrama & bentuk negatif sopan *dewa arimasen*).
* **Pelajaran 5 (PDF 10 / Cetak 9):** *SORE WA WATASHI NO TAKARAMONO DESU* (Objek kepemilikan, partikel *o*, dan pengenalan bentuk kerja *~masu*).
"""

dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]

for d in dest_dirs:
    with open(os.path.join(d, 'product-plan.md'), 'w', encoding='utf-8') as f:
        f.write(product_plan_content)

print("Generated product-plan.md successfully")
