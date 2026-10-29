import { Lesson } from '../../types';

export const lesson05: Lesson = {
  id: 'L05',
  order: 5,
  title: {
    jp: 'それは私の宝物です',
    kana: 'それはわたしのたからものです',
    romaji: 'Sore wa watashi no takaramono desu',
    id: 'Itu adalah harta karun saya',
    rubySegments: [
      { text: 'それは' },
      { text: '私', reading: 'わたし' },
      { text: 'の' },
      { text: '宝物', reading: 'たからもの' },
      { text: 'です' },
    ],
    rubyHtml:
      'それは<ruby>私<rt>わたし</rt></ruby>の<ruby>宝物<rt>たからもの</rt></ruby>です',
  },
  situationSummary:
    'Anna mengundang Sakura masuk ke kamarnya di asrama. Sakura menemukan tumpukan manga dan bertanya tentang kebiasaan Anna.',
  pdfPage: 10,
  printedPage: 9,
  situationCategories: ['Di asrama'],
  productArcId: 'arc-1',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/5.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/05-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menyebutkan benda milik saya dengan pola A no B.',
    'Saya bisa menceritakan kegiatan harian memakai kata kerja bentuk masu dan partikel o.',
  ],
  grammarPoints: [
    {
      id: 'L05-GP1',
      title: 'Kata Kerja Bentuk MASU',
      pattern: '[kata kerja] ~masu',
      explanationId:
        'Kata kerja yang berakhiran ます dipakai dalam percakapan sopan. 読みます (membaca), 食べます (makan), dan 行きます (pergi) adalah contohnya. Untuk bentuk negatif, ganti ます menjadi ません: 読みません (tidak membaca).',
      contrastNote:
        'Kata kerja bahasa Indonesia tidak berubah bentuk untuk kesopanan. Bahasa Jepang memilih bentuk ます ketika berbicara dengan orang yang belum akrab, dan bentuk ini juga menempatkan kata kerja di akhir kalimat.',
      examples: [
        {
          jp: '私は毎日マンガを読みます。',
          kana: 'わたしはまいにちマンガをよみます。',
          romaji: 'Watashi wa mainichi manga o yomimasu.',
          id: 'Saya membaca manga setiap hari.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '毎日', reading: 'まいにち' },
            { text: 'マンガを' },
            { text: '読', reading: 'よ' },
            { text: 'みます。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>マンガを<ruby>読<rt>よ</rt></ruby>みます。',
        },
        {
          jp: '私は毎朝パンを食べます。',
          kana: 'わたしはまいあさパンをたべます。',
          romaji: 'Watashi wa maiasa pan o tabemasu.',
          id: 'Saya makan roti setiap pagi.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '毎朝', reading: 'まいあさ' },
            { text: 'パンを' },
            { text: '食', reading: 'た' },
            { text: 'べます。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎朝<rt>まいあさ</rt></ruby>パンを<ruby>食<rt>た</rt></ruby>べます。',
        },
        {
          jp: '私は日本語を勉強します。',
          kana: 'わたしはにほんごをべんきょうします。',
          romaji: 'Watashi wa nihongo o benkyō shimasu.',
          id: 'Saya belajar bahasa Jepang.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '日本語', reading: 'にほんご' },
            { text: 'を' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'します。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L05 Sensei, Oshiete p. 9',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-GP2',
      title: 'Partikel O (Objek)',
      pattern: '[objek] o [kata kerja]',
      explanationId:
        'Partikel を (dibaca "o") menandai benda yang menjadi sasaran tindakan. Letaknya setelah objek dan sebelum kata kerja. Susunan umum kalimat Jepang adalah subjek + objek + kata kerja.',
      contrastNote:
        'Bahasa Indonesia memakai urutan subjek + kata kerja + objek ("Saya membaca manga"). Bahasa Jepang menempatkan kata kerja di akhir, sehingga objek mendahului kata kerja.',
      examples: [
        {
          jp: '私はマンガを読みます。',
          kana: 'わたしはマンガをよみます。',
          romaji: 'Watashi wa manga o yomimasu.',
          id: 'Saya membaca manga.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'はマンガを' },
            { text: '読', reading: 'よ' },
            { text: 'みます。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>はマンガを<ruby>読<rt>よ</rt></ruby>みます。',
        },
        {
          jp: '私はコーヒーを飲みます。',
          kana: 'わたしはコーヒーをのみます。',
          romaji: 'Watashi wa kōhī o nomimasu.',
          id: 'Saya minum kopi.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'はコーヒーを' },
            { text: '飲', reading: 'の' },
            { text: 'みます。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>はコーヒーを<ruby>飲<rt>の</rt></ruby>みます。',
        },
        {
          jp: 'さくらさんは本を読みます。',
          kana: 'さくらさんはほんをよみます。',
          romaji: 'Sakura-san wa hon o yomimasu.',
          id: 'Sakura membaca buku.',
          rubySegments: [
            { text: 'さくらさんは' },
            { text: '本', reading: 'ほん' },
            { text: 'を' },
            { text: '読', reading: 'よ' },
            { text: 'みます。' },
          ],
          rubyHtml:
            'さくらさんは<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L05 Tata Bahasa p. 9',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L05-V1',
      kanji: '宝物',
      kana: 'たからもの',
      romaji: 'takaramono',
      idMeaning: 'Harta karun / barang berharga',
      contextSentence: {
        jp: 'それは私の宝物です。',
        kana: 'それはわたしのたからものです。',
        romaji: 'Sore wa watashi no takaramono desu.',
        id: 'Itu adalah harta karun saya.',
        rubyHtml:
          'それは<ruby>私<rt>わたし</rt></ruby>の<ruby>宝物<rt>たからもの</rt></ruby>です。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V2',
      kanji: '漫画',
      kana: 'まんが',
      romaji: 'manga',
      idMeaning: 'Manga / komik Jepang',
      contextSentence: {
        jp: 'これは全部マンガですか。',
        kana: 'これはぜんぶまんがですか。',
        romaji: 'Kore wa zenbu manga desu ka.',
        id: 'Apakah ini semua manga?',
        rubyHtml:
          'これは<ruby>全部<rt>ぜんぶ</rt></ruby>マンガですか。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V3',
      kanji: '毎日',
      kana: 'まいにち',
      romaji: 'mainichi',
      idMeaning: 'Setiap hari',
      contextSentence: {
        jp: '私は毎日マンガを読みます。',
        kana: 'わたしはまいにちマンガをよみます。',
        romaji: 'Watashi wa mainichi manga o yomimasu.',
        id: 'Saya membaca manga setiap hari.',
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>マンガを<ruby>読<rt>よ</rt></ruby>みます。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V4',
      kanji: '読みます',
      kana: 'よみます',
      romaji: 'yomimasu',
      idMeaning: 'Membaca (bentuk sopan)',
      contextSentence: {
        jp: '私は毎日マンガを読みます。',
        kana: 'わたしはまいにちマンガをよみます。',
        romaji: 'Watashi wa mainichi manga o yomimasu.',
        id: 'Saya membaca manga setiap hari.',
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>マンガを<ruby>読<rt>よ</rt></ruby>みます。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V5',
      kanji: '部屋',
      kana: 'へや',
      romaji: 'heya',
      idMeaning: 'Kamar',
      contextSentence: {
        jp: '私の部屋はこちらです。',
        kana: 'わたしのへやはこちらです。',
        romaji: 'Watashi no heya wa kochira desu.',
        id: 'Kamar saya di sebelah sini.',
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>はこちらです。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V6',
      kanji: '全部',
      kana: 'ぜんぶ',
      romaji: 'zenbu',
      idMeaning: 'Semua',
      contextSentence: {
        jp: 'これは全部マンガですか。',
        kana: 'これはぜんぶまんがですか。',
        romaji: 'Kore wa zenbu manga desu ka.',
        id: 'Apakah ini semua manga?',
        rubyHtml:
          'これは<ruby>全部<rt>ぜんぶ</rt></ruby>マンガですか。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V7',
      kana: 'すごい',
      romaji: 'sugoi',
      idMeaning: 'Luar biasa / hebat',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-V8',
      kana: 'こちら',
      romaji: 'kochira',
      idMeaning: 'Sebelah sini / arah ini (sopan)',
      contextSentence: {
        jp: '私の部屋はこちらです。',
        kana: 'わたしのへやはこちらです。',
        romaji: 'Watashi no heya wa kochira desu.',
        id: 'Kamar saya di sebelah sini.',
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>はこちらです。',
      },
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L05-GQ1',
        question: 'Apa yang membuat Sakura kagum di kamar Anna?',
        options: ['Koleksi manga', 'Pemandangan dari jendela', 'Kue buatan Anna'],
        correctIndex: 0,
        explanation:
          'Sakura berkata すごい！これは全部マンガ？ — luar biasa, semua ini manga?',
        sourceRef: 'NHK L05 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L05-GQ2',
        question: 'Kegiatan apa yang Anna lakukan setiap hari?',
        options: ['Membaca manga', 'Menonton televisi', 'Belajar memasak'],
        correctIndex: 0,
        explanation:
          'Anna berkata 私は毎日マンガを読みます — saya membaca manga setiap hari.',
        sourceRef: 'NHK L05 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L05-DQ1',
        question: 'Apa yang Anna katakan tentang barang-barangnya?',
        options: [
          'それは私の宝物です',
          'それは友達のです',
          'それはいりません',
        ],
        correctIndex: 0,
        explanation:
          'Anna menyebut koleksinya 私の宝物 (harta karun saya).',
        sourceRef: 'NHK L05 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L05-DQ2',
        question: 'Seberapa sering Anna membaca manga?',
        options: ['Setiap hari', 'Seminggu sekali', 'Tidak pernah'],
        correctIndex: 0,
        explanation:
          '毎日 (mainichi) berarti setiap hari, dan diikuti 読みます (membaca).',
        sourceRef: 'NHK L05 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'それは私の宝物です。',
        kana: 'それはわたしのたからものです。',
        romaji: 'Sore wa watashi no takaramono desu.',
        id: 'Itu adalah harta karun saya.',
        rubyHtml:
          'それは<ruby>私<rt>わたし</rt></ruby>の<ruby>宝物<rt>たからもの</rt></ruby>です。',
      },
      attribution:
        'Kutipan pendek Pelajaran 5 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L05-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 私は毎日マンガ [ ... ] 読みます。',
      options: ['を (o)', 'は (wa)', 'の (no)'],
      correctAnswer: 'を (o)',
      explanation:
        'Partikel を menandai マンガ sebagai objek dari kata kerja 読みます.',
      sourceRef: 'NHK L05 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi kalimat yang tepat.',
      correctAnswer: [
        'わたし は まいにち まんが を よみます',
        'わたしはまいにちまんがをよみます',
      ],
      explanation:
        'Urutan Jepang: topik (わたしは) + waktu (まいにち) + objek (まんがを) + kata kerja (よみます).',
      sourceRef: 'NHK L05 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-EX3',
      type: 'audio_meaning',
      prompt:
        'Anna membuka pintu kamarnya dan mempersilakan Sakura masuk. Ungkapan mana yang ia pakai?',
      options: ['どうぞ', 'すごい', 'こちらこそ'],
      correctAnswer: 'どうぞ',
      explanation:
        'どうぞ berarti "silakan", dipakai saat mempersilakan tamu masuk.',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya membaca manga setiap hari."',
      correctAnswer: [
        '私は毎日マンガを読みます',
        'わたしはまいにちまんがをよみます',
      ],
      explanation:
        '毎日 (setiap hari) diletakkan sebelum objek, dan kata kerja 読みます di akhir.',
      sourceRef: 'NHK L05 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 読みます (membaca) menjadi bentuk negatif sopan.',
      correctAnswer: ['読みません', 'よみません'],
      explanation:
        'Bentuk negatif kata kerja ます dibentuk dengan mengganti ます menjadi ません.',
      sourceRef: 'NHK L05 Sensei, Oshiete',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu mengajak teman ke kamarmu. Tunjukkan satu barang berharga di meja, sebutkan benda itu, lalu ceritakan satu kegiatan yang kamu lakukan setiap hari.',
    instructions: [
      'Persilakan teman masuk dengan どうぞ.',
      'Sebutkan benda dengan pola これは私の [benda] です.',
      'Ceritakan kegiatan harian dengan pola 私は毎日 [objek] を [kata kerja] ます.',
    ],
    modelAnswer: {
      jp: '私の部屋はこちらです。どうぞ。これは私の宝物です。私は毎日本を読みます。',
      kana: 'わたしのへやはこちらです。どうぞ。これはわたしのたからものです。わたしはまいにちほんをよみます。',
      romaji:
        'Watashi no heya wa kochira desu. Dōzo. Kore wa watashi no takaramono desu. Watashi wa mainichi hon o yomimasu.',
      id: 'Kamar saya di sebelah sini. Silakan. Ini harta karun saya. Saya membaca buku setiap hari.',
      rubySegments: [
        { text: '私', reading: 'わたし' },
        { text: 'の' },
        { text: '部屋', reading: 'へや' },
        { text: 'はこちらです。どうぞ。これは' },
        { text: '私', reading: 'わたし' },
        { text: 'の' },
        { text: '宝物', reading: 'たからもの' },
        { text: 'です。' },
        { text: '私', reading: 'わたし' },
        { text: 'は' },
        { text: '毎日', reading: 'まいにち' },
        { text: '本', reading: 'ほん' },
        { text: 'を' },
        { text: '読', reading: 'よ' },
        { text: 'みます。' },
      ],
      rubyHtml:
        '<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>はこちらです。どうぞ。これは<ruby>私<rt>わたし</rt></ruby>の<ruby>宝物<rt>たからもの</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
    },
    selfCheckList: [
      'Memakai こちらです untuk menunjukkan arah dengan sopan.',
      'Menyebut benda dengan これは私の [benda] です.',
      'Meletakkan partikel を setelah objek.',
      'Menutup kalimat dengan kata kerja bentuk ます.',
    ],
    sourceRef: 'NHK L05 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L05-RC1',
      lessonId: 'L05',
      front: '宝物 (たからもの)',
      back: 'Harta karun / barang berharga',
      type: 'vocab',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC2',
      lessonId: 'L05',
      front: '漫画 (まんが)',
      back: 'Manga / komik Jepang',
      type: 'vocab',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC3',
      lessonId: 'L05',
      front: '毎日 (まいにち)',
      back: 'Setiap hari',
      type: 'vocab',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC4',
      lessonId: 'L05',
      front: '読みます (よみます)',
      back: 'Membaca (bentuk sopan)',
      type: 'vocab',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC5',
      lessonId: 'L05',
      front: '部屋 (へや)',
      back: 'Kamar',
      type: 'vocab',
      sourceRef: 'NHK L05 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC6',
      lessonId: 'L05',
      front: 'Partikel penanda objek tindakan (dibaca "o")',
      back: 'を',
      type: 'particle',
      sourceRef: 'NHK L05 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC7',
      lessonId: 'L05',
      front: 'Bentuk negatif dari kata kerja ます',
      back: 'ます → ません (contoh: 読みます → 読みません)',
      type: 'grammar',
      sourceRef: 'NHK L05 Sensei, Oshiete',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC8',
      lessonId: 'L05',
      front:
        'Dengarkan dialog resmi NHK L5. Apa yang Anna sebut sebagai hartanya?',
      back: 'マンガ (manga). それは私の宝物です。私は毎日マンガを読みます。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/05-id-le_01.mp3',
      sourceRef: 'NHK L05 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L05-RC9',
      lessonId: 'L05',
      front:
        'Praktikkan menyebut barang berharga dan kegiatan harianmu.',
      back: 'これは私の [benda] です。私は毎日 [objek] を [kata kerja] ます。',
      type: 'output',
      sourceRef: 'NHK L05 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
