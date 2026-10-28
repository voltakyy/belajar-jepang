import { Lesson } from '../../types';

export const lesson02: Lesson = {
  id: 'L02',
  order: 2,
  title: {
    jp: 'これは何ですか',
    kana: 'これはなんですか',
    romaji: 'Kore wa nan desu ka',
    id: 'Ini apa?',
    rubySegments: [
      { text: 'これは' },
      { text: '何', reading: 'なん' },
      { text: 'ですか' },
    ],
    rubyHtml: 'これは<ruby>何<rt>なん</rt></ruby>ですか',
  },
  situationSummary:
    'Anna dan Sakura masih di kampus. Anna menyerahkan sesuatu kepada Sakura, dan Sakura ingin tahu benda apa itu.',
  pdfPage: 7,
  printedPage: 6,
  situationCategories: ['Di universitas', 'Perbelanjaan & Restoran'],
  productArcId: 'arc-1',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/2.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/02-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan nama benda di sekitar dengan pola Kore wa nan desu ka.',
    'Saya bisa menjelaskan asal atau pemilik suatu benda memakai partikel no.',
  ],
  grammarPoints: [
    {
      id: 'L02-GP1',
      title: 'A WA NAN DESU KA (A itu apa?)',
      pattern: '[Benda] wa nan desu ka',
      explanationId:
        'Untuk menanyakan nama benda, sebutkan bendanya lalu tutup dengan なんですか. Partikel か di akhir kalimat mengubah pernyataan menjadi pertanyaan tanpa mengubah urutan kata. なん adalah bentuk なに (apa) yang dipakai tepat sebelum です.',
      contrastNote:
        'Bahasa Indonesia bisa bertanya hanya dengan menaikkan intonasi ("Ini apa?"). Bahasa Jepang menandai pertanyaan secara eksplisit lewat partikel か, sehingga urutan kata tetap sama persis dengan kalimat pernyataan.',
      examples: [
        {
          jp: 'これは何ですか。',
          kana: 'これはなんですか。',
          romaji: 'Kore wa nan desu ka.',
          id: 'Ini apa?',
          rubySegments: [
            { text: 'これは' },
            { text: '何', reading: 'なん' },
            { text: 'ですか。' },
          ],
          rubyHtml: 'これは<ruby>何<rt>なん</rt></ruby>ですか。',
        },
        {
          jp: 'それはお土産ですか。',
          kana: 'それはおみやげですか。',
          romaji: 'Sore wa omiyage desu ka.',
          id: 'Apakah itu oleh-oleh?',
          rubySegments: [
            { text: 'それはお' },
            { text: '土産', reading: 'みやげ' },
            { text: 'ですか。' },
          ],
          rubyHtml: 'それはお<ruby>土産<rt>みやげ</rt></ruby>ですか。',
        },
        {
          jp: 'はい、そうです。',
          kana: 'はい、そうです。',
          romaji: 'Hai, sō desu.',
          id: 'Ya, betul.',
          rubySegments: [{ text: 'はい、そうです。' }],
          rubyHtml: 'はい、そうです。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L02 Sensei, Oshiete p. 6',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-GP2',
      title: 'A NO B (B milik atau berasal dari A)',
      pattern: '[Penerang] no [Benda]',
      explanationId:
        'Partikel の menghubungkan dua kata benda. Kata di depan の menerangkan kata di belakangnya. Hubungannya bisa berarti pemilik (わたしのほん = buku saya) atau asal (タイのおみやげ = oleh-oleh dari Thailand).',
      contrastNote:
        'Dalam bahasa Indonesia penerang mengikuti benda yang diterangkan ("oleh-oleh dari Thailand"). Dalam bahasa Jepang urutannya terbalik: penerang selalu mendahului benda (タイのおみやげ).',
      examples: [
        {
          jp: 'それはタイのお土産です。',
          kana: 'それはタイのおみやげです。',
          romaji: 'Sore wa Tai no omiyage desu.',
          id: 'Itu oleh-oleh dari Thailand.',
          rubySegments: [
            { text: 'それはタイのお' },
            { text: '土産', reading: 'みやげ' },
            { text: 'です。' },
          ],
          rubyHtml:
            'それはタイのお<ruby>土産<rt>みやげ</rt></ruby>です。',
        },
        {
          jp: 'これは私の本です。',
          kana: 'これはわたしのほんです。',
          romaji: 'Kore wa watashi no hon desu.',
          id: 'Ini buku saya.',
          rubySegments: [
            { text: 'これは' },
            { text: '私', reading: 'わたし' },
            { text: 'の' },
            { text: '本', reading: 'ほん' },
            { text: 'です。' },
          ],
          rubyHtml:
            'これは<ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。',
        },
        {
          jp: 'さくらさんの傘です。',
          kana: 'さくらさんのかさです。',
          romaji: 'Sakura-san no kasa desu.',
          id: 'Payung Sakura.',
          rubySegments: [
            { text: 'さくらさんの' },
            { text: '傘', reading: 'かさ' },
            { text: 'です。' },
          ],
          rubyHtml: 'さくらさんの<ruby>傘<rt>かさ</rt></ruby>です。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L02 Tata Bahasa p. 6',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L02-V1',
      kana: 'これ',
      romaji: 'kore',
      idMeaning: 'Ini (benda yang dekat dengan pembicara)',
      contextSentence: {
        jp: 'これは何ですか。',
        kana: 'これはなんですか。',
        romaji: 'Kore wa nan desu ka.',
        id: 'Ini apa?',
        rubyHtml: 'これは<ruby>何<rt>なん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V2',
      kana: 'それ',
      romaji: 'sore',
      idMeaning: 'Itu (benda yang dekat dengan lawan bicara)',
      contextSentence: {
        jp: 'それはタイのお土産です。',
        kana: 'それはタイのおみやげです。',
        romaji: 'Sore wa Tai no omiyage desu.',
        id: 'Itu oleh-oleh dari Thailand.',
        rubyHtml: 'それはタイのお<ruby>土産<rt>みやげ</rt></ruby>です。',
      },
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V3',
      kanji: '何',
      kana: 'なん',
      romaji: 'nan',
      idMeaning: 'Apa',
      contextSentence: {
        jp: 'これは何ですか。',
        kana: 'これはなんですか。',
        romaji: 'Kore wa nan desu ka.',
        id: 'Ini apa?',
        rubyHtml: 'これは<ruby>何<rt>なん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L02 Tata Bahasa',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V4',
      kanji: 'お土産',
      kana: 'おみやげ',
      romaji: 'omiyage',
      idMeaning: 'Oleh-oleh (hadiah khas dari suatu daerah)',
      contextSentence: {
        jp: 'それはタイのお土産です。',
        kana: 'それはタイのおみやげです。',
        romaji: 'Sore wa Tai no omiyage desu.',
        id: 'Itu oleh-oleh dari Thailand.',
        rubyHtml: 'それはタイのお<ruby>土産<rt>みやげ</rt></ruby>です。',
      },
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V5',
      kana: 'タイ',
      romaji: 'Tai',
      idMeaning: 'Thailand',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V6',
      kana: 'どうぞ',
      romaji: 'dōzo',
      idMeaning: 'Silakan (saat menyerahkan sesuatu atau mempersilakan)',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V7',
      kana: 'ありがとうございます',
      romaji: 'arigatō gozaimasu',
      idMeaning: 'Terima kasih (sopan)',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-V8',
      kana: 'どういたしまして',
      romaji: 'dō itashimashite',
      idMeaning: 'Terima kasih kembali / Tidak perlu sungkan',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L02-GQ1',
        question: 'Apa yang Anna berikan kepada Sakura?',
        options: [
          'Oleh-oleh dari Thailand',
          'Buku catatan kuliah',
          'Kunci kamar asrama',
        ],
        correctIndex: 0,
        explanation:
          'Anna menjelaskan bahwa benda itu adalah oleh-oleh dari Thailand (タイのお土産).',
        sourceRef: 'NHK L02 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L02-GQ2',
        question: 'Siapa yang bertanya tentang benda yang baru diterimanya?',
        options: ['Anna', 'Sakura', 'Ibu asrama'],
        correctIndex: 1,
        explanation:
          'Sakura bertanya これは何ですか (ini apa?) setelah menerima benda dari Anna.',
        sourceRef: 'NHK L02 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L02-DQ1',
        question:
          'Ungkapan apa yang dipakai Sakura untuk berterima kasih secara sopan?',
        options: ['どうぞ', 'ありがとうございます', 'どういたしまして'],
        correctIndex: 1,
        explanation:
          'ありがとうございます adalah ucapan terima kasih bentuk sopan, cocok untuk orang yang baru dikenal.',
        sourceRef: 'NHK L02 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L02-DQ2',
        question: 'Bagaimana Anna membalas ucapan terima kasih Sakura?',
        options: [
          'どういたしまして',
          'おやすみなさい',
          'いただきます',
        ],
        correctIndex: 0,
        explanation:
          'どういたしまして berarti "tidak perlu sungkan" dan dipakai untuk membalas terima kasih.',
        sourceRef: 'NHK L02 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'それはタイのお土産です。',
        kana: 'それはタイのおみやげです。',
        romaji: 'Sore wa Tai no omiyage desu.',
        id: 'Itu oleh-oleh dari Thailand.',
        rubyHtml: 'それはタイのお<ruby>土産<rt>みやげ</rt></ruby>です。',
      },
      attribution:
        'Kutipan pendek Pelajaran 2 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L02-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi pertanyaan berikut: これ [ ... ] 何ですか。',
      options: ['は (wa)', 'の (no)', 'を (o)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Partikel は menandai これ sebagai topik yang sedang ditanyakan.',
      sourceRef: 'NHK L02 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi pertanyaan yang tepat.',
      correctAnswer: ['これ は 何 です か', 'これは何ですか'],
      explanation:
        'Pertanyaan dibentuk dengan menambahkan か di akhir. Urutan katanya tidak berubah.',
      sourceRef: 'NHK L02 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-EX3',
      type: 'audio_meaning',
      prompt:
        'Sakura memegang benda yang ada di dekatnya sendiri. Ia ingin bertanya "Ini apa?" Ungkapan mana yang tepat?',
      options: ['それは何ですか', 'これは何ですか', 'あれは何ですか'],
      correctAnswer: 'これは何ですか',
      explanation:
        'これは dipakai untuk benda yang dekat dengan pembicara. それ untuk benda dekat lawan bicara, あれ untuk benda yang jauh dari keduanya.',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Ini adalah oleh-oleh dari Thailand."',
      correctAnswer: ['これはタイのお土産です', 'これはタイのおみやげです'],
      explanation:
        'Pola A no B menempatkan asal benda (タイ) sebelum benda (お土産).',
      sourceRef: 'NHK L02 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-EX5',
      type: 'grammar_transform',
      prompt:
        'Ubah pernyataan それはお土産です (itu oleh-oleh) menjadi pertanyaan.',
      correctAnswer: ['それはお土産ですか', 'それはおみやげですか'],
      explanation:
        'Tambahkan か di akhir kalimat. Tidak ada perubahan urutan kata.',
      sourceRef: 'NHK L02 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu baru pulang dari Indonesia dan membawa oleh-oleh. Tunjukkan satu benda kepada teman Jepangmu, jelaskan asalnya, lalu jawab pertanyaannya.',
    instructions: [
      'Serahkan benda itu dengan mengatakan どうぞ.',
      'Sebutkan benda dan asalnya memakai pola [benda] wa [asal] no omiyage desu.',
      'Jawab pertanyaan temanmu dengan はい、そうです atau いいえ、ちがいます.',
    ],
    modelAnswer: {
      jp: 'これはインドネシアのお土産です。どうぞ。',
      kana: 'これはインドネシアのおみやげです。どうぞ。',
      romaji: 'Kore wa Indonesia no omiyage desu. Dōzo.',
      id: 'Ini oleh-oleh dari Indonesia. Silakan.',
      rubySegments: [
        { text: 'これはインドネシアのお' },
        { text: '土産', reading: 'みやげ' },
        { text: 'です。どうぞ。' },
      ],
      rubyHtml:
        'これはインドネシアのお<ruby>土産<rt>みやげ</rt></ruby>です。どうぞ。',
    },
    selfCheckList: [
      'Memakai これ untuk benda yang ada di tangan sendiri.',
      'Menyebut asal benda sebelum kata お土産.',
      'Mengucapkan どうぞ saat menyerahkan benda.',
      'Menjawab pertanyaan dengan はい、そうです atau いいえ、ちがいます.',
    ],
    sourceRef: 'NHK L02 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L02-RC1',
      lessonId: 'L02',
      front: 'これ',
      back: 'Ini (benda dekat pembicara)',
      type: 'vocab',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC2',
      lessonId: 'L02',
      front: 'それ',
      back: 'Itu (benda dekat lawan bicara)',
      type: 'vocab',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC3',
      lessonId: 'L02',
      front: '何 (なん)',
      back: 'Apa',
      type: 'vocab',
      sourceRef: 'NHK L02 Tata Bahasa',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC4',
      lessonId: 'L02',
      front: 'お土産 (おみやげ)',
      back: 'Oleh-oleh',
      type: 'vocab',
      sourceRef: 'NHK L02 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC5',
      lessonId: 'L02',
      front: 'Partikel yang mengubah pernyataan menjadi pertanyaan',
      back: 'か (ka) — diletakkan di akhir kalimat',
      type: 'particle',
      sourceRef: 'NHK L02 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC6',
      lessonId: 'L02',
      front: 'Partikel penghubung dua kata benda (pemilik atau asal)',
      back: 'の (no) — タイの おみやげ = oleh-oleh dari Thailand',
      type: 'particle',
      sourceRef: 'NHK L02 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC7',
      lessonId: 'L02',
      front:
        'Dengarkan dialog resmi NHK L2. Benda apa yang Anna berikan kepada Sakura?',
      back: 'お土産 (おみやげ / omiyage) dari Thailand.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/02-id-le_01.mp3',
      sourceRef: 'NHK L02 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L02-RC8',
      lessonId: 'L02',
      front:
        'Praktikkan menyerahkan oleh-oleh dan menjelaskan asalnya dengan benda di sekitarmu.',
      back: 'これは [asal] のお土産です。どうぞ。',
      type: 'output',
      sourceRef: 'NHK L02 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
