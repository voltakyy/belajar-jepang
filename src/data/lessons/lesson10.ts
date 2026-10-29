import { Lesson } from '../../types';

export const lesson10: Lesson = {
  id: 'L10',
  order: 10,
  title: {
    jp: '全員いますか',
    kana: 'ぜんいんいますか',
    romaji: 'Zen-in imasu ka',
    id: 'Apakah semua orang ada?',
    rubySegments: [
      { text: '全員', reading: 'ぜんいん' },
      { text: 'いますか' },
    ],
    rubyHtml: '<ruby>全員<rt>ぜんいん</rt></ruby>いますか',
  },
  situationSummary:
    'Anna menjalani pemeriksaan kesehatan di kampusnya. Para mahasiswa berkumpul di tempat pemeriksaan, lalu guru memanggil nama semua yang hadir.',
  pdfPage: 15,
  printedPage: 14,
  situationCategories: ['Di universitas', 'Bepergian & Berjalan-jalan'],
  productArcId: 'arc-2',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/10.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/10-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menyebut kejadian lampau dengan bentuk sopan ました.',
    'Saya bisa membedakan います untuk orang dan あります untuk benda.',
  ],
  grammarPoints: [
    {
      id: 'L10-GP1',
      title: 'BENTUK MASHITA (lampau sopan)',
      pattern: '[kata kerja] mashita',
      explanationId:
        'Bentuk ます menyatakan kebiasaan atau waktu sekarang, sedangkan ました menyatakan kejadian yang sudah selesai. Polanya sederhana: はかります menjadi はかりました, 遅れます menjadi 遅れました. Bentuk negatif lampaunya ませんでした.',
      contrastNote:
        'Bahasa Indonesia memakai kata keterangan waktu (\"tadi\", \"sudah\") untuk menandai lampau. Bahasa Jepang mengubah bentuk kata kerjanya, jadi ました sudah cukup tanpa tambahan kata waktu.',
      examples: [
        {
          jp: 'すみません。遅れました。',
          kana: 'すみません。おくれました。',
          romaji: 'Sumimasen. Okuremashita.',
          id: 'Mohon maaf. Saya terlambat.',
          rubySegments: [
            { text: 'すみません。' },
            { text: '遅', reading: 'おく' },
            { text: 'れました。' },
          ],
          rubyHtml:
            'すみません。<ruby>遅<rt>おく</rt></ruby>れました。',
        },
        {
          jp: 'けさ、７時に起きました。',
          kana: 'けさ、しちじにおきました。',
          romaji: 'Kesa, shichiji ni okimashita.',
          id: 'Tadi pagi saya bangun jam 7.',
          rubySegments: [
            { text: 'けさ、' },
            { text: '７時', reading: 'しちじ' },
            { text: 'に' },
            { text: '起', reading: 'お' },
            { text: 'きました。' },
          ],
          rubyHtml:
            'けさ、<ruby>７時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きました。',
        },
        {
          jp: 'きのう、テストがありました。',
          kana: 'きのう、テストがありました。',
          romaji: 'Kinō, tesuto ga arimashita.',
          id: 'Kemarin ada ulangan.',
          rubySegments: [{ text: 'きのう、テストがありました。' }],
          rubyHtml: 'きのう、テストがありました。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L10 Tata Bahasa p. 14',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-GP2',
      title: 'IMASU / ARIMASU (ada)',
      pattern: '[orang] ga imasu / [benda] ga arimasu',
      explanationId:
        'います dipakai untuk makhluk hidup yang bergerak sendiri, terutama orang dan hewan. あります dipakai untuk benda, tanaman, dan hal yang tidak bergerak. Bentuk negatifnya いません dan ありません. Dalam dialog: 全員いますか (apakah semua orang ada?), lalu アンナさんがいません (Anna tidak ada).',
      contrastNote:
        'Bahasa Indonesia memakai satu kata \"ada\" untuk semua. Bahasa Jepang memilih kata berdasarkan apakah yang dimaksud bisa bergerak sendiri atau tidak.',
      examples: [
        {
          jp: '全員いますか。',
          kana: 'ぜんいんいますか。',
          romaji: 'Zen-in imasu ka.',
          id: 'Apakah semua orang ada?',
          rubySegments: [
            { text: '全員', reading: 'ぜんいん' },
            { text: 'いますか。' },
          ],
          rubyHtml:
            '<ruby>全員<rt>ぜんいん</rt></ruby>いますか。',
        },
        {
          jp: 'アンナさんがいません。',
          kana: 'アンナさんがいません。',
          romaji: 'Anna-san ga imasen.',
          id: 'Anna tidak ada.',
          rubySegments: [{ text: 'アンナさんがいません。' }],
          rubyHtml: 'アンナさんがいません。',
        },
        {
          jp: '机の上に本があります。',
          kana: 'つくえのうえにほんがあります。',
          romaji: 'Tsukue no ue ni hon ga arimasu.',
          id: 'Di atas meja ada buku.',
          rubySegments: [
            { text: '机', reading: 'つくえ' },
            { text: 'の' },
            { text: '上', reading: 'うえ' },
            { text: 'に' },
            { text: '本', reading: 'ほん' },
            { text: 'があります。' },
          ],
          rubyHtml:
            '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L10 Tata Bahasa p. 14',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L10-V1',
      kanji: '全員',
      kana: 'ぜんいん',
      romaji: 'zen-in',
      idMeaning: 'Semua orang / seluruh anggota',
      contextSentence: {
        jp: '全員いますか。',
        kana: 'ぜんいんいますか。',
        romaji: 'Zen-in imasu ka.',
        id: 'Apakah semua orang ada?',
        rubyHtml: '<ruby>全員<rt>ぜんいん</rt></ruby>いますか。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V2',
      kana: 'います',
      romaji: 'imasu',
      idMeaning: 'Ada (untuk orang atau hewan)',
      contextSentence: {
        jp: '全員いますか。',
        kana: 'ぜんいんいますか。',
        romaji: 'Zen-in imasu ka.',
        id: 'Apakah semua orang ada?',
        rubyHtml: '<ruby>全員<rt>ぜんいん</rt></ruby>いますか。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V3',
      kana: 'あります',
      romaji: 'arimasu',
      idMeaning: 'Ada (untuk benda)',
      contextSentence: {
        jp: '時間があります。',
        kana: 'じかんがあります。',
        romaji: 'Jikan ga arimasu.',
        id: 'Ada waktu.',
        rubyHtml:
          '<ruby>時間<rt>じかん</rt></ruby>があります。',
      },
      sourceRef: 'NHK L10 Tata Bahasa',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V4',
      kanji: '身長',
      kana: 'しんちょう',
      romaji: 'shinchō',
      idMeaning: 'Tinggi badan',
      contextSentence: {
        jp: 'はじめに身長と体重をはかります。',
        kana: 'はじめにしんちょうとたいじゅうをはかります。',
        romaji: 'Hajimeni shinchō to taijū o hakarimasu.',
        id: 'Pertama-tama, kami akan mengukur tinggi dan berat badan.',
        rubyHtml:
          'はじめに<ruby>身長<rt>しんちょう</rt></ruby>と<ruby>体重<rt>たいじゅう</rt></ruby>をはかります。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V5',
      kanji: '体重',
      kana: 'たいじゅう',
      romaji: 'taijū',
      idMeaning: 'Berat badan',
      contextSentence: {
        jp: 'はじめに身長と体重をはかります。',
        kana: 'はじめにしんちょうとたいじゅうをはかります。',
        romaji: 'Hajimeni shinchō to taijū o hakarimasu.',
        id: 'Pertama-tama, kami akan mengukur tinggi dan berat badan.',
        rubyHtml:
          'はじめに<ruby>身長<rt>しんちょう</rt></ruby>と<ruby>体重<rt>たいじゅう</rt></ruby>をはかります。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V6',
      kanji: '測ります',
      kana: 'はかります',
      romaji: 'hakarimasu',
      idMeaning: 'Mengukur',
      contextSentence: {
        jp: 'はじめに身長と体重をはかります。',
        kana: 'はじめにしんちょうとたいじゅうをはかります。',
        romaji: 'Hajimeni shinchō to taijū o hakarimasu.',
        id: 'Pertama-tama, kami akan mengukur tinggi dan berat badan.',
        rubyHtml:
          'はじめに<ruby>身長<rt>しんちょう</rt></ruby>と<ruby>体重<rt>たいじゅう</rt></ruby>をはかります。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V7',
      kana: 'はじめに',
      romaji: 'hajimeni',
      idMeaning: 'Pertama-tama',
      contextSentence: {
        jp: 'はじめに身長と体重をはかります。',
        kana: 'はじめにしんちょうとたいじゅうをはかります。',
        romaji: 'Hajimeni shinchō to taijū o hakarimasu.',
        id: 'Pertama-tama, kami akan mengukur tinggi dan berat badan.',
        rubyHtml:
          'はじめに<ruby>身長<rt>しんちょう</rt></ruby>と<ruby>体重<rt>たいじゅう</rt></ruby>をはかります。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-V8',
      kanji: '遅れます',
      kana: 'おくれます',
      romaji: 'okuremasu',
      idMeaning: 'Terlambat',
      contextSentence: {
        jp: 'すみません。遅れました。',
        kana: 'すみません。おくれました。',
        romaji: 'Sumimasen. Okuremashita.',
        id: 'Mohon maaf. Saya terlambat.',
        rubySegments: [
          { text: 'すみません。' },
          { text: '遅', reading: 'おく' },
          { text: 'れました。' },
        ],
        rubyHtml:
          'すみません。<ruby>遅<rt>おく</rt></ruby>れました。',
      },
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L10-GQ1',
        question: 'Apa yang sedang berlangsung di kampus Anna?',
        options: [
          'Pemeriksaan kesehatan',
          'Ujian bahasa Jepang',
          'Festival kampus',
        ],
        correctIndex: 0,
        explanation:
          'Guru berkata 身長と体重をはかります — tinggi dan berat badan akan diukur, bagian dari pemeriksaan kesehatan.',
        sourceRef: 'NHK L10 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L10-GQ2',
        question: 'Apa yang guru tanyakan setelah memberi instruksi?',
        options: [
          'Apakah semua orang hadir',
          'Siapa yang sakit',
          'Jam berapa pemeriksaan dimulai',
        ],
        correctIndex: 0,
        explanation:
          'Guru bertanya 全員いますか — apakah semua orang ada?',
        sourceRef: 'NHK L10 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L10-DQ1',
        question: 'Siapa yang belum hadir menurut Rodrigo?',
        options: ['Anna', 'Sakura', 'Guru'],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata アンナさんがいません — Anna tidak ada.',
        sourceRef: 'NHK L10 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L10-DQ2',
        question: 'Apa yang Anna katakan saat datang?',
        options: [
          'すみません。遅れました',
          'おはようございます。元気です',
          'はじめに身長をはかります',
        ],
        correctIndex: 0,
        explanation:
          'Anna meminta maaf dan menyatakan dirinya terlambat: すみません。遅れました。',
        sourceRef: 'NHK L10 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'すみません。遅れました。',
        kana: 'すみません。おくれました。',
        romaji: 'Sumimasen. Okuremashita.',
        id: 'Mohon maaf. Saya terlambat.',
        rubyHtml:
          'すみません。<ruby>遅<rt>おく</rt></ruby>れました。',
      },
      attribution:
        'Kutipan pendek Pelajaran 10 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L10-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: アンナさん [ ... ] いません。',
      options: ['が (ga)', 'を (o)', 'に (ni)'],
      correctAnswer: 'が (ga)',
      explanation:
        'Partikel が menandai orang yang keberadaannya dibicarakan bersama います/いません.',
      sourceRef: 'NHK L10 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi kalimat yang tepat.',
      correctAnswer: [
        'しんちょう と たいじゅう を はかります',
        'しんちょうとたいじゅうをはかります',
      ],
      explanation:
        'Urutannya: 身長 + と + 体重 + を + はかります. Partikel と menghubungkan dua benda.',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana mengatakan "Saya terlambat" dengan sopan?',
      options: ['遅れました', '遅れません', '遅れます'],
      correctAnswer: '遅れました',
      explanation:
        '遅れました adalah bentuk lampau sopan dari 遅れます, dipakai saat menyatakan sudah terlambat.',
      sourceRef: 'NHK L10 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Apakah semua orang ada?"',
      correctAnswer: ['全員いますか', 'ぜんいんいますか'],
      explanation:
        '全員 (semua orang) + います (ada, untuk orang) + か (penanda tanya).',
      sourceRef: 'NHK L10 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah はかります (mengukur) menjadi bentuk lampau sopan.',
      correctAnswer: ['はかりました', '測りました'],
      explanation:
        'Bentuk lampau sopan dibentuk dengan mengganti ます menjadi ました: はかります → はかりました.',
      sourceRef: 'NHK L10 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu datang terlambat ke pemeriksaan kesehatan di kampus. Minta maaf kepada petugas, lalu sampaikan bahwa kamu siap diukur tinggi dan berat badannya.',
    instructions: [
      'Buka dengan すみません untuk meminta maaf.',
      'Sampaikan keterlambatan dengan 遅れました.',
      'Sebutkan 身長と体重をはかります.',
      'Tutup dengan お願いします.',
    ],
    modelAnswer: {
      jp: 'すみません。遅れました。身長と体重をはかります。お願いします。',
      kana: 'すみません。おくれました。しんちょうとたいじゅうをはかります。おねがいします。',
      romaji:
        'Sumimasen. Okuremashita. Shinchō to taijū o hakarimasu. Onegai shimasu.',
      id: 'Mohon maaf. Saya terlambat. Saya akan diukur tinggi dan berat badan. Mohon bantuannya.',
      rubySegments: [
        { text: 'すみません。' },
        { text: '遅', reading: 'おく' },
        { text: 'れました。' },
        { text: '身長', reading: 'しんちょう' },
        { text: 'と' },
        { text: '体重', reading: 'たいじゅう' },
        { text: 'をはかります。お' },
        { text: '願', reading: 'ねが' },
        { text: 'いします。' },
      ],
      rubyHtml:
        'すみません。<ruby>遅<rt>おく</rt></ruby>れました。<ruby>身長<rt>しんちょう</rt></ruby>と<ruby>体重<rt>たいじゅう</rt></ruby>をはかります。お<ruby>願<rt>ねが</rt></ruby>いします。',
    },
    selfCheckList: [
      'Meminta maaf dengan すみません sebelum menjelaskan.',
      'Memakai 遅れました, bukan 遅れます, untuk keterlambatan yang sudah terjadi.',
      'Menyebut 身長 dan 体重 dengan partikel と.',
      'Menutup dengan お願いします agar terdengar sopan.',
    ],
    sourceRef: 'NHK L10 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L10-RC1',
      lessonId: 'L10',
      front: '全員 (ぜんいん)',
      back: 'Semua orang / seluruh anggota',
      type: 'vocab',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC2',
      lessonId: 'L10',
      front: '身長 (しんちょう)',
      back: 'Tinggi badan',
      type: 'vocab',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC3',
      lessonId: 'L10',
      front: '体重 (たいじゅう)',
      back: 'Berat badan',
      type: 'vocab',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC4',
      lessonId: 'L10',
      front: '測ります (はかります)',
      back: 'Mengukur',
      type: 'vocab',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC5',
      lessonId: 'L10',
      front: '遅れました (おくれました)',
      back: 'Terlambat (bentuk lampau sopan)',
      type: 'vocab',
      sourceRef: 'NHK L10 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC6',
      lessonId: 'L10',
      front: 'Bentuk lampau sopan',
      back: 'ます → ました (はかります → はかりました)',
      type: 'grammar',
      sourceRef: 'NHK L10 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC7',
      lessonId: 'L10',
      front: 'Kapan memakai います dan あります?',
      back: 'います untuk orang/hewan; あります untuk benda',
      type: 'grammar',
      sourceRef: 'NHK L10 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC8',
      lessonId: 'L10',
      front: 'Dengarkan dialog resmi NHK L10. Siapa yang belum hadir?',
      back: 'Anna: アンナさんがいません。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/10-id-le_01.mp3',
      sourceRef: 'NHK L10 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L10-RC9',
      lessonId: 'L10',
      front: 'Praktikkan meminta maaf karena terlambat di pemeriksaan kesehatan.',
      back: 'すみません。遅れました。身長と体重をはかります。お願いします。',
      type: 'output',
      sourceRef: 'NHK L10 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
