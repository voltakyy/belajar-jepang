import json
import re

with open('all_lessons_nhk.json', 'r', encoding='utf-8') as f:
    nhk_data = json.load(f)

# Load theme mapping
from parse_themes import theme_map

titles = {
    1: ("WATASHI WA ANNA DESU", "Saya adalah Anna"),
    2: ("KORE WA NAN DESU KA", "Ini apa?"),
    3: ("TOIRE WA DOKO DESU KA", "Toilet di mana?"),
    4: ("TADAIMA", "Saya pulang"),
    5: ("SORE WA WATASHI NO TAKARAMONO DESU", "Itu adalah harta karun saya"),
    6: ("DENWABANGÔ WA NANBAN DESU KA", "Nomor telepon Anda berapa?"),
    7: ("SHÛKURÎMU WA ARIMASU KA", "Apakah ada kue sus?"),
    8: ("MÔICHIDO ONEGAI SHIMASU", "Tolong sekali lagi"),
    9: ("NANJI KARA DESU KA", "Mulai jam berapa?"),
    10: ("ZEN-IN IMASU KA", "Apakah semuanya hadir?"),
    11: ("ZEHI KITE KUDASAI", "Harap datang"),
    12: ("ITSU NIHON NI KIMASHITA KA", "Kapan Anda datang ke Jepang?"),
    13: ("SHÔSETSU GA SUKI DESU", "Saya suka novel"),
    14: ("KOKO NI GOMI O SUTETE MO II DESU KA", "Bolehkah membuang sampah di sini?"),
    15: ("NETE IMASU", "Sedang tidur"),
    16: ("KAIDAN O AGATTE, MIGI NI ITTE KUDASAI", "Naiki tangga lalu belok kanan"),
    17: ("OSUSUME WA NAN DESU KA", "Apa rekomendasi Anda?"),
    18: ("MICHI NI MAYOTTE SHIMAIMASHITA", "Saya tersesat di jalan"),
    19: ("YOKATTA", "Syukurlah"),
    20: ("NIHON NO UTA O UTATTA KOTO GA ARIMASU KA", "Pernahkah Anda menyanyikan lagu Jepang?"),
    21: ("IIE, SOREHODODEMO", "Tidak juga"),
    22: ("OSOKU NARIMASHITA", "Saya terlambat"),
    23: ("OKÂSAN NI SHIKARAREMASHITA", "Dimarahi oleh ibu"),
    24: ("TSUKAWANAIDE KUDASAI", "Jangan gunakan"),
    25: ("TSUKUE NO SHITA NI HAIRE", "Masuklah ke bawah meja"),
    26: ("TSUGI WA GANBARÔ", "Berikutnya mari berjuang"),
    27: ("DARE GA KEKKON SURU N DESU KA", "Siapa yang akan menikah?"),
    28: ("SHIZUOKA E YÔKOSO", "Selamat datang di Shizuoka"),
    29: ("CHIKAKU DE MIRU TO, ÔKII DESU NE", "Kalau dilihat dari dekat, besar ya"),
    30: ("MÔ SUKOSHI SHASHIN O TORITAI DESU", "Saya ingin mengambil foto sedikit lagi"),
    31: ("MÔ HACHIJÛNI SAI DESU YO", "Sudah berumur 82 tahun lho"),
    32: ("FUTON NO HÔ GA SUKI DESU", "Saya lebih suka futon"),
    33: ("ANNA-SAN NI AGEMASU", "Saya berikan kepada Anna"),
    34: ("YAWARAKAKUTE OISHII DESU", "Empuk dan lezat"),
    35: ("KUREJITTO KÂDO WA TSUKAEMASU KA", "Bisakah menggunakan kartu kredit?"),
    36: ("BENKYÔ SHINAKEREBA NARIMASEN", "Harus belajar"),
    37: ("FUJISAN O MITARI, OSUSHI O TABETARI SHIMASHITA", "Melihat Gunung Fuji dan makan sushi"),
    38: ("KASHIKOMARIMASHITA", "Baik, saya mengerti"),
    39: ("KAZE DA TO OMOIMASU", "Saya rasa masuk angin"),
    40: ("ATAMA GA ZUKIZUKI SHIMASU", "Kepala saya berdenyut-denyut"),
    41: ("GAKUEN-SAI NI IKU KOTO GA DEKITE, TANOSHIKATTA DESU", "Bisa pergi ke festival kampus dan menyenangkan"),
    42: ("DORE GA ICHIBAN OISHII KANA", "Yang mana yang paling enak ya?"),
    43: ("DÔSHITE DESHÔ KA", "Mengapa demikian ya?"),
    44: ("WAGASHI O TABETE KARA, MACCHA O NOMIMASU", "Setelah makan wagashi, baru minum maccha"),
    45: ("OTANJÔBI OMEDETÔ", "Selamat ulang tahun"),
    46: ("KIKOKU SURU MAE NI, YUKI O MIRU KOTO GA DEKITE SHIAWASE DESU", "Sebelum pulang ke tanah air, bahagia bisa melihat salju"),
    47: ("NIHONGO-KYÔSHI NI NARU NO GA YUME DESU", "Menjadi pengajar bahasa Jepang adalah impian saya"),
    48: ("IROIRO OSEWA NI NARIMASHITA", "Terima kasih atas segala bantuan yang diberikan")
}

# Specific grammar analysis for lessons with >2 points or nuances
# In L22:
# 1. osoi -> osoku narimashita (adjektiva ke adverbia)
# 2. pembilang menit fun/pun
# 3. ~te wa ikemasen (larangan)
# Target pilihan aplikasi: Fokus aktif ke: 1. Perubahan sifat ke keterangan (osoku narimashita) & 2. Larangan ~te wa ikemasen. Pembilang fun/pun dijadikan reference/recognition card.

# In L26:
# 1. ~n desu (penjelasan alasan/konteks)
# 2. ~deshita (bentuk lampau sopan)
# 3. ~ganbarô (bentuk ajakan kasual / volisional)
# Target pilihan aplikasi: Fokus aktif ke: 1. ~n desu & 2. bentuk ajakan volisional ~ô (~ganbarô). Bentuk ~deshita ditandai sebagai review penguat lampau.

print("Metadata compilation ready.")
