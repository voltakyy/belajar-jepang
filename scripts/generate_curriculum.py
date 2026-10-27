import os

curriculum_content = """# KURIKULUM & PETA CAPAIAN BELAJAR (CURRICULUM & CAN-DO MAP)

Dokumen ini memetakan rancangan instruksional aplikasi **Nihongo**, jenjang capaian, serta penjabaran silabus 48 pelajaran ke dalam 7 *Product Arcs* dan kaitannya dengan 7 Kategori Situasi resmi materi sumber.

---

## 1. Jenjang Target & Filosofi Kurikulum
* **Jenjang Sasaran:** **Pemula Dasar (Beginner to Elementary)**.
* **Kepatuhan Pelabelan:** Aplikasi **TIDAK melabeli kursus ini sebagai "Lulus JLPT N3/N4"**. Seluruh capaian dirumuskan menggunakan *Can-Do Statements* berbasis performa komunikatif nyata dalam kehidupan sehari-hari, studi, atau perjalanan di Jepang.
* **Format Penulisan Teks Jepang:**
  * Mengutamakan teks asli (Kanji + Furigana) menggunakan tag HTML modern: `<ruby>日本語<rt>にほんご</rt></ruby>`.
  * Rōmaji tersedia sebagai alat bantu transisi (*toggle*), bukan tampilan default utama, guna mendorong pengenalan aksara Hiragana dan Katakana secara bertahap.
  * Tipografi ramah perangkat seluler (*system fonts*) tanpa memaksakan unduhan bundel font berat yang menghabiskan kuota data seluler pembelajar.

---

## 2. Struktur Situasi Resmi vs 7 Product Arcs

Materi sumber NHK mengelompokkan 48 pelajaran ke dalam 7 Kategori Situasi (tercatat di PDF p. 4 / Cetak p. 3):
1. **Di universitas** (Pelajaran 23, 26, 47)
2. **Di asrama** (Pelajaran 5, 37)
3. **Pertokoan dan restoran** (Pelajaran 2, 17, 35)
4. **Budaya Jepang** (Pelajaran 4, 34, 41, 44)
5. **Bepergian dan bertamasya** (Pelajaran 7, 9, 10, 15, 16, 19, 20, 21, 28, 29, 30, 31, 32, 33, 36, 42, 43)
6. **Penyelesaian masalah** (Pelajaran 3, 6, 8, 14, 18, 22, 24, 25, 38, 39, 40)
7. **Saat-saat khusus** (Pelajaran 1, 11, 12, 13, 27, 45, 46, 48)

Aplikasi menyusunnya menjadi **7 Product Arcs** yang memandu progres bertahap pembelajar dari nol hingga menyelesaikan seluruh alur cerita:

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

## 3. Rincian 7 Product Arcs & Can-Do Statements

### Arc 1: Identitas & Fondasi Interaksi Awal (Pelajaran 1–6)
* **Konteks:** Anna baru tiba di Jepang, memperkenalkan diri di kampus, mengenal barang di kamar, mencari fasilitas toilet, menyapa ibu asrama, dan menukar nomor telepon.
* **Poin Tata Bahasa Sumber:**
  * L1: `A WA B DESU` (Partikel topik *wa* & kopula *desu*). Pengenalan aksara Jepang.
  * L2: Kata tunjuk `KORE, SORE, ARE` & partikel kepemilikan `NO`.
  * L3: Kata tanya lokasi `... WA DOKO DESU KA` & kata tunjuk lokasi `KOKO, SOKO, ASOKO`. *(Catatan: arimasu/imasu belum ada di sini)*.
  * L4: Bentuk negatif sopan `... DEWA ARIMASEN` & salam kepulangan `TADAIMA / OKAERINASAI`.
  * L5: Pola kalimat verba `Subjek WA Objek O Verba-MASU` (pengenalan partikel *o* dan bentuk *~masu*).
  * L6: Angka dasar & nomor telepon, konstruksi kegiatan `... O SHIMASU`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa memperkenalkan nama dan asal saya dengan sopan kepada lawan bicara.*
  * *Saya bisa menunjuk benda di dekat saya atau lawan bicara dan menanyakan kepemilikannya.*
  * *Saya bisa menanyakan letak fasilitas dasar (misalnya toilet atau lift).*
  * *Saya bisa menyebutkan dan mencatat nomor telepon dalam bahasa Jepang.*

---

### Arc 2: Kehidupan Kampus & Jadwal Kegiatan (Pelajaran 7–12)
* **Konteks:** Anna memesan makanan di kafetaria, meminta pengajar mengulang penjelasan, menanyakan jadwal kuliah, mengecek presensi teman kelas, menerima undangan, dan membicarakan masa lalu.
* **Poin Tata Bahasa Sumber:**
  * L7: Keberadaan benda mati `... WA ARIMASU KA` & kata pembilang benda `TSU` (*hitotsu, futatsu*).
  * L8: Permintaan tolong sopan menggunakan verba bentuk-TE: `~TE KUDASAI` (*môichido onegai shimasu*).
  * L9: Keterangan waktu `NANJI` (jam berapa) & partikel batas waktu `KARA` (dari) serta `MADE` (sampai).
  * L10: Keberadaan makhluk hidup `IMASU` (*zen-in imasu ka*) & bentuk lampau sopan verba `~MASHITA`.
  * L11: Nama hari dalam sepekan & verba pergerakan arah `IKIMASU / KIMASU` (*zehi kite kudasai*).
  * L12: Keterangan waktu `ITSU` (kapan), nama bulan (`nan-gatsu`), dan partikel penunjuk waktu `NI`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa memesan makanan di kasir kantin dan menyebutkan jumlah porsi benda umum.*
  * *Saya bisa meminta seseorang mengulangi kalimat dengan lebih lambat saat belum paham.*
  * *Saya bisa menanyakan dan memahami jadwal buka/mulai suatu acara atau kelas.*
  * *Saya bisa menanyakan kapan seseorang tiba di suatu tempat dengan bentuk lampau.*

---

### Arc 3: Pilihan Keseharian, Arah & Insiden Kecil (Pelajaran 13–19)
* **Konteks:** Berbagi hobi baca novel, aturan membuang sampah di asrama, melihat teman istirahat, mencari jalan di lorong gedung, memesan makanan rekomendasi, tersesat di jalan, dan merasa lega saat menemukan teman.
* **Poin Tata Bahasa Sumber:**
  * L13: Menyatakan kesukaan `... WA ... GA SUKI DESU` & ajakan halus `~MASEN KA`.
  * L14: Meminta izin tindakan `... O ~TE MO II DESU KA` & partikel alasan `KARA`.
  * L15: Aktivitas sedang berlangsung `Verba-TE + IMASU` & ajakan bersama `~MASHÔ`.
  * L16: Menggabungkan urutan aksi menggunakan verba bentuk-TE (`Kaidan o agatte, migi ni itte kudasai`) & kata arah.
  * L17: Menanyakan rekomendasi menu `OSUSUME WA NAN DESU KA` & penolakan halus `... WA CHOTTO`.
  * L18: Penyesalan atas ketidaksengajaan `Verba-TE + SHIMAIMASHITA` (*michi ni mayotte shimaimashita*).
  * L19: Bentuk lampau kata sifat (*oishikatta, shizuka deshita*) & ungkapan rasa lega `YOKATTA`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa mengungkapkan hobi/hal yang saya sukai dan mengajak teman melakukan kegiatan.*
  * *Saya bisa meminta izin melakukan sesuatu secara sopan di ruang publik atau asrama.*
  * *Saya bisa menanyakan petunjuk arah belok dan memahami urutan instruksi navigasi sederhana.*
  * *Saya bisa mengabarkan situasi tersesat dan meminta bantuan di jalan.*

---

### Arc 4: Interaksi Sosial, Pengalaman & Situasi Darurat (Pelajaran 20–27)
* **Konteks:** Menyanyikan lagu Jepang saat karaoke, menerima pujian, terlambat masuk kelas, ditegur ibu asrama, memahami larangan di perpustakaan, menghadapi gempa bumi di kampus, bangkit dari kegagalan ujian, dan rencana pernikahan kerabat.
* **Poin Tata Bahasa Sumber & Strategi Pelajaran Gemuk:**
  * L20: Menyatakan pengalaman lampau `Verba bentuk-TA + KOTO GA ARIMASU`.
  * L21: Ungkapan kerendahan hati saat dipuji `IIE, SOREHODODEMO`.
  * L22 (3 poin sumber): Perubahan kata sifat menjadi adverbia `~KU NARIMASHITA` (*osoku narimashita*), pembilang menit `FUN/PUN`, larangan `~TE WA IKEMASEN`.  
    *-> Strategi:* Fokus aktif drill pada `~KU NARIMASHITA` & `~TE WA IKEMASEN`. Pembilang menit `FUN/PUN` dicakup sebagai kartu referensi/pengenal (*recognition*).
  * L23: Bentuk pasif verba `~RAREMASHITA` (*shikararemashita*) & bentuk lampau negatif `~MASEN DESHITA`.
  * L24: Larangan halus `Verba bentuk-NAI + DE KUDASAI` & kata penunjuk waktu relatif.
  * L25 (3 poin sumber): Bentuk perintah darurat langsung `HAIRE` (*tsukue no shita ni haire*), kontras fungsi partikel `WA` vs `GA`, bentuk kemiripan `YÔ DA / YÔ DESU`.  
    *-> Strategi:* Fokus aktif pada instruksi perintah darurat dan telaah kontras `WA` vs `GA`. Bentuk `YÔ DA` dimasukkan sebagai pemahaman konteks.
  * L26 (3 poin sumber): Partikel penjelasan latar belakang `~N DESU`, kopula lampau `DESHITA`, bentuk ajakan kasual / volisional `~Ô` (*ganbarô*).  
    *-> Strategi:* Fokus aktif pada `~N DESU` dan bentuk volisional `~Ô`. Bentuk `DESHITA` berfungsi sebagai penguat review.
  * L27: Pertanyaan penegasan latar belakang `... N DESU KA`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa menceritakan hal yang pernah atau belum pernah saya alami.*
  * *Saya bisa menyampaikan alasan keterlambatan secara wajar.*
  * *Saya bisa memahami instruksi evakuasi darurat pada saat terjadi gempa bumi.*
  * *Saya bisa memberikan dorongan semangat kepada rekan dengan bentuk ajakan kasual.*

---

### Arc 5: Perjalanan, Budaya Jamuan & Pilihan Alternatif (Pelajaran 28–37)
* **Konteks:** Anna dan Sakura berwisata ke Shizuoka, menikmati panorama Gunung Fuji, berfoto, berbincang dengan warga setempat, mencoba tidur beralaskan futon, memberi oleh-oleh, mencicipi kuliner, membayar dengan kartu, belajar aturan ujian, dan mengingat kembali liburan.
* **Poin Tata Bahasa Sumber:**
  * L28: Ungkapan selamat datang `... E YÔKOSO` & keahlian bidang `... NI KUWASHII`.
  * L29: Pengandaian kondisi alami/pasti `Verba kamus + TO` (*Chikaku de miru to, ôkii desu ne*).
  * L30: Menyatakan keinginan pribadi `Verba bentuk-MASU -> ~TAI DESU` & keterangan `MÔ SUKOSHI`.
  * L31: Menyebutkan umur lanjut `~SAI` & partikel pemberi informasi `YO`.
  * L32: Kalimat perbandingan pilihan `A TO B TO DOCHIRA GA ... DESU KA` & jawaban `... NO HÔ GA SUKI DESU`.
  * L33: Arah tindakan memberi dan menerima `AGEMASU` (memberi ke orang lain) vs `KUREMASU` (orang lain memberi ke saya).
  * L34: Menggabungkan dua kata sifat dengan bentuk-TE (`yawarakakute oishii desu`) & pertanyaan konfirmasi `TTE NAN DESU KA`.
  * L35: Verba bentuk potensial / kemampuan `TSUKAEMASU KA` (bisa menggunakan kartu kredit?) & penyebutan nominal mata uang.
  * L36: Menyatakan keharusan / kewajiban tindakan `Verba bentuk-NAI -> ~NAKEREBA NARIMASEN`.
  * L37: Menyebutkan daftar beberapa kegiatan contoh tanpa urutan kaku: `~TARI ~TARI SHIMASHITA`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa mendeskripsikan kondisi visual pemandangan alam saat berwisata.*
  * *Saya bisa menyatakan pilihan preferensi saat membandingkan dua opsi.*
  * *Saya bisa menanyakan opsi metode pembayaran saat berbelanja.*
  * *Saya bisa menyampaikan hal yang wajib dikerjakan dan menceritakan rincian aktivitas liburan.*

---

### Arc 6: Komunikasi Staf, Kesehatan, Pertimbangan & Festival (Pelajaran 38–44)
* **Konteks:** Pelayanan staf toko yang sangat sopan, memeriksakan diri saat badan tidak enak, mendeskripsikan sakit kepala berdenyut ke dokter, menceritakan serunya festival kampus, memilih makanan terbaik di stan bazar, mencari tahu penyebab kebiasaan makan, dan etiket upacara minum teh.
* **Poin Tata Bahasa Sumber:**
  * L38: Ungkapan kehormatan pelayanan kerja `KASHIKOMARIMASHITA`.
  * L39: Menyampaikan dugaan atau perkiraan pribadi `... DA TO OMOIMASU` & kosakata keluhan sakit (*kaze, netsu*).
  * L40: Menggunakan kata tiruan kondisi fisik (*onomatope*) bersama verba `SHIMASU` (*Atama ga zukizuki shimasu*).
  * L41: Menyatakan kemampuan `Verba kamus + KOTO GA DEKIMASU` & bentuk-TE menyatakan sebab kepuasan (*Gakuen-sai ni iku koto ga dekite, tanoshikatta desu*).
  * L42: Menyatakan tingkat paling / superlatif `DORE GA ICHIBAN ... DESU KA` & partikel monolog `KANA`.
  * L43: Pertanyaan dugaan sopan `DÔSHITE DESHÔ KA` (mengapa demikian ya?).
  * L44: Urutan kronologis tindakan `Verba bentuk-TE + KARA` (*setelah makan wagashi, baru minum teh*) & dugaan kemungkinan `~KAMOSHIREMASEN`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa memahami respons kesantunan staf pelayanan di pertokoan.*
  * *Saya bisa mengeluhkan gejala rasa sakit fisik kepada dokter dengan kosakata onomatope yang tepat.*
  * *Saya bisa mengomunikasikan rasa senang atas keberhasilan mengikuti suatu acara.*
  * *Saya bisa menanyakan dan menerapkan etiket tradisi yang memiliki urutan tata cara tertentu.*

---

### Arc 7: Pencapaian Momen, Rencana Masa Depan & Salam Perpisahan (Pelajaran 45–48)
* **Konteks:** Merayakan pesta ulang tahun teman, mengagumi pemandangan salju musim dingin pertama menjelang kepulangan, menceritakan impian masa depan menjadi guru bahasa Jepang, dan menyampaikan rasa terima kasih perpisahan kepada seluruh rekan dan ibu asrama.
* **Poin Tata Bahasa Sumber:**
  * L45: Ucapan selamat ulang tahun `OTANJÔBI OMEDETÔ` & verba penerimaan barang `MORAIMASU`.
  * L46: Keterangan waktu sebelum melakukan sesuatu `Verba kamus + MAE NI` (*kikoku suru mae ni*) & perumpamaan `~NO YÔ NI`.
  * L47: Nominalisasi anak kalimat `Verba kamus + NO GA YUME DESU` & proses perubahan `~NI NARIMASU`.
  * L48: Ungkapan pamitan terima kasih atas segala kebaikan dan bimbingan `IROIRO OSEWA NI NARIMASHITA` & salam keselamatan `KIOTSUKETE`.
* **Capaian Pembelajaran (Can-Do):**
  * *Saya bisa memberikan ucapan selamat pada momen perayaan pribadi seseorang.*
  * *Saya bisa menyampaikan target aktivitas yang ingin dilakukan sebelum suatu peristiwa terjadi.*
  * *Saya bisa menceritakan cita-cita atau impian masa depan saya dengan terstruktur.*
  * *Saya bisa berpamitan dan mengucapkan rasa terima kasih yang mendalam secara santun dalam budaya Jepang.*

---

## 4. Struktur Sesi Pembelajaran: "The 15-Minute Loop"

Setiap pelajaran dirancang untuk diselesaikan dalam durasi efektif 15 menit dengan proporsi minimal 60% waktu dihabiskan untuk latihan aktif (*retrieval & production*):

| Tahap | Alokasi Waktu | Aktivitas Pembelajar | Peran Sistem & Antarmuka |
| :--- | :---: | :--- | :--- |
| **1. Orient** | 1–2 menit | Membaca konteks situasi nyata (siapa berbicara dengan siapa), 2 pertanyaan esensi (*gist*), dan 5–8 kosakata kunci. | Menyiapkan latar belakang tanpa menampilkan dialog. Naskah percakapan masih dikunci. |
| **2. Listen** | 3–4 menit | Membuka tautan audio resmi NHK di tab baru, mendengarkan percakapan, dan menjawab 2 pertanyaan *gist*. | Kontrol audio-only link. Naskah tidak dibuka sebelum pembelajar mencoba menjawab pertanyaan *gist*. |
| **3. Notice** | 3–4 menit | Menelaah 1–2 kalimat target utama (kutipan pendek teratribusi) atau contoh kalimat orisinal. Mempelajari kontras tata bahasa terhadap bahasa Indonesia. | Menyediakan toggle Furigana/Rōmaji dan tombol tautan "Buka naskah resmi lengkap di situs NHK". |
| **4. Retrieve** | 3–4 menit | Mengerjakan 4–6 latihan tertutup (isi rumpang partikel, susun kata, dengar-makna, konjugasi verba). | Memberikan umpan balik instan yang menjelaskan alasan aturan gramatikal, bukan sekadar benar/salah. |
| **5. Use** | 2–3 menit | Praktik berbicara/menulis mandiri berdasarkan *prompt* situasi nyata. | Menyediakan contoh respon acuan (*model answer*) dan daftar periksa mandiri (*self-check checklist*). Tanpa penilaian suara otomatis palsu. |
| **6. Review** | 1–2 menit | Menyimpan 8–12 kartu latihan ke dalam antrean SRS lokal dan mencatat kekeliruan ke *Error Notebook*. | Menjadwalkan pengulangan berkala secara terukur. |
"""

dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]

for d in dest_dirs:
    with open(os.path.join(d, 'curriculum.md'), 'w', encoding='utf-8') as f:
        f.write(curriculum_content)

print("Generated curriculum.md successfully")
