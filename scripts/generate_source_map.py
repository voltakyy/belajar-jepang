import json
import os

with open('all_lessons_nhk.json', 'r', encoding='utf-8') as f:
    nhk_data = json.load(f)

from compile_metadata import titles
from parse_themes import theme_map

# Ensure directories exist
dest_dirs = [
    r'c:\Users\Asus\web-belajar-iot-volta\web-belajar-iot-volta\docs',
    r'C:\Users\Asus\belajar-jepang\docs'
]
for d in dest_dirs:
    os.makedirs(d, exist_ok=True)

# 1. GENERATE docs/source-map.md
source_map_lines = [
    "# SOURCE MAP: NHK Belajar Bahasa Jepang (Edisi 2015)\n",
    "Dokumen ini memetakan seluruh 48 pelajaran dari materi sumber resmi NHK WORLD Radio Japan edisi **ver. April 2015 (Edisi Anna)**.\n",
    "## 1. Identifikasi Dokumen Sumber\n",
    "- **Judul Resmi:** Belajar Bahasa Jepang (Easy Japanese / やさしい日本語)",
    "- **Penyusun:** NHK WORLD RADIO JAPAN",
    "- **Edisi:** ver. April 2015 (Cerita Anna dari Thailand)",
    "- **Jumlah Halaman:** 61 Halaman PDF / 60 Halaman Tercetak",
    "- **Format Fisik & Aturan Halaman:**",
    "  - `Halaman Cetak = Halaman PDF - 1`",
    "  - PDF p. 1 = Cetak p. 1 (Sampul)",
    "  - PDF p. 2 = Cetak p. 2 (Info Belajar Online)",
    "  - PDF p. 3 = Cetak p. 2 (Indeks Pelajaran 1–27)",
    "  - PDF p. 4 = Cetak p. 3 (Indeks Pelajaran 28–48 & Panduan Situasi)",
    "  - PDF p. 5 = Cetak p. 4 (Pengenalan Tokoh: Anna, Sakura, Rodrigo, Prof. Suzuki, Ibu Asrama, Kenta)",
    "  - PDF p. 6 s.d. 53 = Cetak p. 5 s.d. 52 (Pelajaran 1 s.d. 48, masing-masing 1 halaman)",
    "  - PDF p. 54 = Cetak p. 53 (Lampiran: Kata Sifat + Pembilang)",
    "  - PDF p. 55–56 = Cetak p. 54–55 (Lampiran: Kata Kerja, 2 halaman)",
    "  - PDF p. 57–58 = Cetak p. 56–57 (Lampiran: Tabel Suku Kata Hiragana & Katakana)",
    "  - PDF p. 59 = Cetak p. 58 (Penyelia Editorial & Pembawa Acara)",
    "  - PDF p. 60 = Cetak p. 59 (Hak Cipta / Copyright © NHK WORLD ver. April 2015)",
    "  - PDF p. 61 = Back Cover / Sampul Belakang\n",
    "## 2. Kebijakan URL & Audio\n",
    "- **Basis URL Pelajaran:** `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/{N}.html`",
    "- **Basis URL Audio MP3:** `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/{NN}-id-le_01.mp3`",
    "- **Anomali Terverifikasi:** Pada **Pelajaran 11**, URL audio resmi menggunakan penomoran revisi: `.../mp3/11-id-le_02.mp3` (bukan `_01.mp3`). Seluruh 48 URL diverifikasi dan di-scrape langsung pada 28 Oktober 2026.\n",
    "## 3. Inventaris Lengkap 48 Pelajaran (Tabel Sumber)\n",
    "| No | Judul (Romaji & Indonesia) | PDF Page | Printed Page | Official Lesson URL | Official Audio MP3 URL | Poin Tata Bahasa Sumber (NHK) | Jml | Target Pilihan Aplikasi & Strategi | Situasi Resmi (TOC Metadata) |",
    "| :---: | :--- | :---: | :---: | :--- | :--- | :--- | :---: | :--- | :--- |"
]

# Detailed grammar analysis per lesson from PDF and scraped data
grammar_detail = {
    1: (["A WA B DESU (Partikel wa & kopula desu)", "Karakter bahasa Jepang (Hiragana, Katakana, Kanji)"], "A WA B DESU (Partikel wa & desu)", "Saat-saat khusus"),
    2: (["A NO B (Partikel kepemilikan no)", "Kata tunjuk KORE, SORE, ARE"], "KORE/SORE/ARE & Partikel NO", "Pertokoan dan restoran"),
    3: (["... WA DOKO DESU KA", "Kata tunjuk tempat KOKO, SOKO, ASOKO, DOKO"], "DOKO & KOKO/SOKO/ASOKO", "Penyelesaian masalah"),
    4: (["... DEWA ARIMASEN (Bentuk negatif sopan)", "Salam kepulangan TADAIMA & OKAERINASAI"], "Bentuk negatif DEWA ARIMASEN", "Budaya Jepang"),
    5: (["Subjek WA Objek O Kata Kerja (Partikel O)", "Kata kerja bentuk MASU"], "Partikel O & Verba ~MASU", "Di asrama"),
    6: (["Nomor telepon & Angka (1)", "... O SHIMASU (Melakukan kegiatan)"], "Angka/Nomor & ~O SHIMASU", "Penyelesaian masalah"),
    7: (["... WA ARIMASU KA (Ketersediaan benda mati)", "TSU: pembilang untuk benda-benda"], "~WA ARIMASU KA & Pembilang TSU", "Bepergian dan bertamasya"),
    8: (["Kata kerja bentuk TE (Permintaan sopan ~TE KUDASAI)", "MÔICHIDO ONEGAI SHIMASU"], "Verba Bentuk ~TE KUDASAI", "Penyelesaian masalah"),
    9: (["NANJI KARA DESU KA (Penunjuk jam)", "Partikel KARA (dari) & MADE (sampai)"], "Jam (NANJI) & KARA/MADE", "Bepergian dan bertamasya"),
    10: (["IMASU (Keberadaan makhluk hidup)", "MASHITA (Bentuk lampau dari MASU)"], "Verba IMASU & Bentuk Lampau ~MASHITA", "Bepergian dan bertamasya"),
    11: (["Hari-hari dalam sepekan", "Verba arah: IKIMASU dan KIMASU", "ZEHI ~TE KUDASAI"], "Hari sepekan & IKIMASU/KIMASU (ZEHI sebagai penguat)", "Saat-saat khusus"),
    12: (["Bulan (ITSU / NAN-GATSU)", "Partikel penunjuk waktu NI"], "Keterangan waktu ITSU & Partikel NI", "Saat-saat khusus"),
    13: (["A WA B GA SUKI DESU (Menyatakan kesukaan)", "~MASEN KA (Mengajak lawan bicara)"], "~GA SUKI DESU & Ajakan ~MASEN KA", "Saat-saat khusus"),
    14: (["KOKO NI ... O SUTETE MO II DESU KA (Izin ~TE MO II)", "Partikel alasan KARA"], "Izin ~TE MO II DESU KA & Alasan KARA", "Penyelesaian masalah"),
    15: (["Verba bentuk TE + IMASU (Sedang berlangsung)", "~MASHÔ (Ajakan mari)"], "Bentuk progresif ~TE IMASU & ~MASHÔ", "Bepergian dan bertamasya"),
    16: (["Kata kerja bentuk TE menghubungkan kalimat (urutan langkah)", "Arah MIGI/HIDARI"], "Konektor verba ~TE & Keterangan arah", "Bepergian dan bertamasya"),
    17: (["OSUSUME WA NAN DESU KA", "... WA CHOTTO (Penolakan halus)"], "Rekomendasi OSUSUME & Penolakan halus CHOTTO", "Pertokoan dan restoran"),
    18: (["Verba bentuk TE + SHIMAIMASHITA (Ketidaksengajaan/penyesalan)", "MICHI NI MAYOU"], "~TE SHIMAIMASHITA (Mishap/penyesalan)", "Penyelesaian masalah"),
    19: (["Bentuk lampau dari kata sifat (KATTA / DESHITA)", "Ungkapan rasa lega YOKATTA"], "Adjektiva Lampau (~KATTA)", "Bepergian dan bertamasya"),
    20: (["... TA KOTO GA ARIMASU (Pengalaman masa lalu)", "ARIMASU untuk kepemilikan/pengalaman"], "Bentuk Pengalaman ~TA KOTO GA ARIMASU", "Bepergian dan bertamasya"),
    21: (["IIE, SOREHODODEMO (Kerendahan hati)", "Pujian & Respons kesopanan"], "Kerendahan hati SOREHODODEMO", "Bepergian dan bertamasya"),
    22: (["Kata sifat -> keterangan (OSOI -> OSOKU NARIMASHITA)", "Pembilang menit FUN/PUN", "Larangan ~TE WA IKEMASEN"], "Fokus aktif: 1. ~KU NARIMASHITA, 2. Larangan ~TE WA IKEMASEN. (Pembilang menit FUN/PUN dijadikan recognition/referensi)", "Penyelesaian masalah"),
    23: (["Bentuk Pasif ~RAREMASHITA (Dimarahi)", "Bentuk lampau negatif ~MASEN DESHITA"], "Verba Pasif ~RAREMASHITA & ~MASEN DESHITA", "Di universitas"),
    24: (["Bentuk larangan halus ~NAIDE KUDASAI", "Kata penunjuk waktu (KINÔ, KYÔ, ASHITA)"], "~NAIDE KUDASAI & Kata Waktu", "Penyelesaian masalah"),
    25: (["Bentuk perintah langsung (HAIRE / Tsukue no shita ni haire)", "Perbedaan partikel WA dan GA", "Bentuk dugaan YÔ DA / YÔ DESU"], "Fokus aktif: 1. Perintah darurat (HAIRE), 2. Kontras partikel WA vs GA. (YÔ DA untuk recognition)", "Penyelesaian masalah"),
    26: (["Penjelasan konteks/alasan ~N DESU", "Bentuk lampau kopula DESHITA", "Bentuk ajakan kasual / volisional GANBARÔ (~Ô)"], "Fokus aktif: 1. Penjelasan ~N DESU, 2. Ajakan volisional ~Ô (GANBARÔ). (DESHITA sebagai review)", "Di universitas"),
    27: (["Pertanyaan penegasan ~N DESU KA", "Kata kerja bentuk kamus + N DESU KA"], "Bentuk Tanya Konteks ~N DESU KA", "Saat-saat khusus"),
    28: (["Ungkapan penyambutan ... E YÔKOSO", "Keahlian ... NI KUWASHII"], "~E YÔKOSO & ~NI KUWASHII", "Bepergian dan bertamasya"),
    29: (["Pengandaian kondisi pasti ~TO (MIRU TO, ...)", "Partikel penegas NE"], "Kondisional faktual ~TO", "Bepergian dan bertamasya"),
    30: (["Keinginan ~TAI DESU (SHASHIN O TORITAI)", "Keterangan MÔ SUKOSHI"], "Bentuk keinginan ~TAI DESU", "Bepergian dan bertamasya"),
    31: (["Angka besar & Usia (HACHIJÛNI SAI)", "Partikel pemberi informasi YO"], "Usia/Angka & Partikel YO", "Bepergian dan bertamasya"),
    32: (["Perbandingan A TO B TO DOCHIRA GA ... DESU KA", "Pilihan ... NO HÔ GA SUKI DESU"], "Perbandingan DOCHIRA & ~NO HÔ GA", "Bepergian dan bertamasya"),
    33: (["Memberi dan menerima: AGEMASU dan KUREMASU", "Partikel penerima NI"], "Arah Pemberian AGEMASU vs KUREMASU", "Bepergian dan bertamasya"),
    34: (["Menyambung kata sifat: Bentuk TE (YAWARAKAKUTE OISHII)", "Pertanyaan klarifikasi TTE NAN DESU KA"], "Konjungsi adjektiva ~KUTE & ~TTE NAN DESU KA", "Budaya Jepang"),
    35: (["Bentuk Potensial (TSUKAEMASU KA)", "Angka (3) & Uang"], "Bentuk Potensial (Bisa / Dapat)", "Pertokoan dan restoran"),
    36: (["Keharusan / Kewajiban ~NAKEREBA NARIMASEN", "Musim dan kegiatan"], "Kewajiban ~NAKEREBA NARIMASEN", "Bepergian dan bertamasya"),
    37: (["Penyebutan contoh kegiatan: ~TARI ~TARI SHIMASU", "Bentuk lampau kasual ~DATTA"], "Daftar aktivitas ~TARI ~TARI SHIMASU", "Di asrama"),
    38: (["Ungkapan kehormatan bisnis: KASHIKOMARIMASHITA", "Penerimaan pesanan"], "Kehormatan staf KASHIKOMARIMASHITA", "Penyelesaian masalah"),
    39: (["Penyampaian opini / dugaan: ~DA TO OMOIMASU", "Gejala penyakit (KAZE, NETSU)"], "Opini/dugaan ~TO OMOIMASU & Gejala sakit", "Penyelesaian masalah"),
    40: (["Kata tiruan bunyi keadaan tubuh: Onomatope + SHIMASU (ZUKIZUKI SHIMASU)", "Bagian tubuh (ATAMA, ONAKA)"], "Onomatope Gejala Tubuh + SHIMASU", "Penyelesaian masalah"),
    41: (["Kemampuan: Verba bentuk kamus + KOTO GA DEKIMASU", "Bentuk TE sebab-akibat (DEKITE, TANOSHIKATTA)"], "Potensi ~KOTO GA DEKIRU & Sebab-akibat ~TE", "Budaya Jepang"),
    42: (["Superlatif: DORE GA ICHIBAN ... DESU KA", "Partikel monolog / keraguan KANA"], "Superlatif ICHIBAN & Partikel KANA", "Bepergian dan bertamasya"),
    43: (["Pertanyaan dugaan sopan: DÔSHITE DESHÔ KA", "Alasan / sebab"], "Dugaan sopan ~DESHÔ KA & Alasan DÔSHITE", "Bepergian dan bertamasya"),
    44: (["Urutan tindakan: Verba bentuk TE + KARA (setelah...)", "Kemungkinan ~KAMOSHIREMASEN"], "Urutan ~TE KARA & Kemungkinan ~KAMOSHIREMASEN", "Budaya Jepang"),
    45: (["Ucapan selamat OTANJÔBI OMEDETÔ", "Menerima barang: MORAIMASU"], "Ucapan selamat & Verba MORAIMASU", "Saat-saat khusus"),
    46: (["Keterangan waktu sebelum: Verba kamus + MAE NI", "Perumpamaan: ~NO YÔ NI"], "Urutan waktu ~MAE NI & Perumpamaan ~NO YÔ NI", "Saat-saat khusus"),
    47: (["Menyatakan impian: ~NO GA YUME DESU (Nominalisasi ~NO)", "Perubahan keadaan ~NI NARIMASU"], "Nominalisasi ~NO & Menjadi ~NI NARIMASU", "Di universitas"),
    48: (["Ungkapan terima kasih perpisahan: IROIRO OSEWA NI NARIMASHITA", "Pemberian salam hati-hati KIOTSUKETE"], "Ungkapan perpisahan OSEWA NI NARIMASHITA & Salam KIOTSUKETE", "Saat-saat khusus")
}

for i in range(1, 49):
    item = nhk_data[i-1]
    title_romaji, title_id = titles[i]
    pdf_p = i + 5
    print_p = i + 4
    lesson_url = item['lesson_url']
    audio_url = item['audio_url']
    
    g_source_list, g_target, g_sit = grammar_detail[i]
    g_source_str = "<br>".join([f"{idx+1}. {g}" for idx, g in enumerate(g_source_list)])
    g_count = len(g_source_list)
    
    row = f"| {i} | **{title_romaji}**<br>*{title_id}* | PDF p. {pdf_p} | Cetak p. {print_p} | [NHK L{i}]({lesson_url}) | [Audio MP3]({audio_url}) | {g_source_str} | {g_count} | {g_target} | {g_sit} |"
    source_map_lines.append(row)

for d in dest_dirs:
    with open(os.path.join(d, 'source-map.md'), 'w', encoding='utf-8') as f:
        f.write("\n".join(source_map_lines) + "\n")

print("Generated source-map.md in both directories")
