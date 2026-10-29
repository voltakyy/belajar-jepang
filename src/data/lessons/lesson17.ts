import { Lesson } from '../../types';

export const lesson17: Lesson = {
  id: 'L17',
  order: 17,
  title: {
    jp: 'おすすめは何ですか',
    kana: 'おすすめはなんですか',
    romaji: 'Osusume wa nan desu ka',
    id: 'Apa rekomendasimu?',
    rubySegments: [
      { text: 'おすすめは' },
      { text: '何', reading: 'なん' },
      { text: 'ですか' },
    ],
    rubyHtml: 'おすすめは<ruby>何<rt>なん</rt></ruby>ですか',
  },
  situationSummary:
    'Di toko buku, Anna menemukan banyak manga yang menarik dan belum bisa memutuskan apa yang akan dibeli. Ia meminta rekomendasi Sakura, lalu menolak satu usulan dengan halus.',
  pdfPage: 22,
  printedPage: 21,
  situationCategories: ['Perbelanjaan & Restoran'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/17.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/17-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa meminta rekomendasi dengan [orang] no osusume wa nan desu ka.',
    'Saya bisa menolak usulan dengan halus memakai chotto.',
  ],
  grammarPoints: [
    {
      id: 'L17-GP1',
      title: 'OSUSUME WA NAN DESU KA',
      pattern: '[orang] no osusume wa nan desu ka',
      explanationId:
        'おすすめ adalah kata benda yang berarti "rekomendasi" atau "saran". Untuk menanyakan pilihan seseorang, gunakan [orang] の おすすめ は 何 ですか. Untuk menawarkan pilihan, これはどう？ berarti "bagaimana kalau ini?".',
      contrastNote:
        'Bahasa Indonesia bisa bertanya "menurutmu yang mana?" atau "apa rekomendasimu?". Bahasa Jepang memakai kata benda おすすめ, bukan kata kerja "merekomendasikan".',
      examples: [
        {
          jp: 'さくらさんのおすすめは何ですか。',
          kana: 'さくらさんのおすすめはなんですか。',
          romaji: 'Sakura-san no osusume wa nan desu ka.',
          id: 'Apa rekomendasimu, Sakura?',
          rubySegments: [
            { text: 'さくらさんの' },
            { text: 'おすすめは' },
            { text: '何', reading: 'なん' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            'さくらさんのおすすめは<ruby>何<rt>なん</rt></ruby>ですか。',
        },
        {
          jp: 'これはどうですか。',
          kana: 'これはどうですか。',
          romaji: 'Kore wa dō desu ka.',
          id: 'Bagaimana kalau ini?',
          rubySegments: [
            { text: 'これはどうですか。' },
          ],
          rubyHtml: 'これはどうですか。',
        },
        {
          jp: 'おすすめはこの本です。',
          kana: 'おすすめはこのほんです。',
          romaji: 'Osusume wa kono hon desu.',
          id: 'Rekomendasi saya buku ini.',
          rubySegments: [
            { text: 'おすすめはこの' },
            { text: '本', reading: 'ほん' },
            { text: 'です。' },
          ],
          rubyHtml:
            'おすすめはこの<ruby>本<rt>ほん</rt></ruby>です。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-GP2',
      title: 'CHOTTO UNTUK MENOLAK DENGAN HALUS',
      pattern: '[hal] wa chotto…',
      explanationId:
        'ちょっと secara harfiah berarti "sedikit" atau "agak". Kalau diucapkan lalu menggantung dengan nada menurun (ちょっと…), maknanya menjadi penolakan halus: "agak sulit bagi saya". Jangan lanjutkan dengan だめです dalam percakapan sopan; biarkan lawan bicara menangkap maksudnya.',
      contrastNote:
        'Bahasa Indonesia sering berkata "maaf, saya kurang suka" atau "agak repot". Bahasa Jepang cukup ちょっと… dengan intonasi yang tepat.',
      examples: [
        {
          jp: 'ホラーはちょっと…。',
          kana: 'ホラーはちょっと…。',
          romaji: 'Horā wa chotto…',
          id: 'Horor agak… (tidak begitu saya sukai).',
          rubySegments: [{ text: 'ホラーはちょっと…。' }],
          rubyHtml: 'ホラーはちょっと…。',
        },
        {
          jp: '辛い物はちょっと…。',
          kana: 'からいものはちょっと…。',
          romaji: 'Karai mono wa chotto…',
          id: 'Masakan pedas agak… (saya kurang cocok).',
          rubySegments: [
            { text: '辛', reading: 'から' },
            { text: 'い' },
            { text: '物', reading: 'もの' },
            { text: 'はちょっと…。' },
          ],
          rubyHtml:
            '<ruby>辛<rt>から</rt></ruby>い<ruby>物<rt>もの</rt></ruby>はちょっと…。',
        },
        {
          jp: '明日はちょっと…。',
          kana: 'あしたはちょっと…。',
          romaji: 'Ashita wa chotto…',
          id: 'Besok agak… (saya tidak bisa).',
          rubySegments: [
            { text: '明日', reading: 'あした' },
            { text: 'はちょっと…。' },
          ],
          rubyHtml:
            '<ruby>明日<rt>あした</rt></ruby>はちょっと…。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L17 Tata Bahasa p. 21',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L17-V1',
      kana: 'おすすめ',
      romaji: 'osusume',
      idMeaning: 'Rekomendasi / saran',
      contextSentence: {
        jp: 'さくらさんのおすすめは何ですか。',
        kana: 'さくらさんのおすすめはなんですか。',
        romaji: 'Sakura-san no osusume wa nan desu ka.',
        id: 'Apa rekomendasimu, Sakura?',
        rubyHtml:
          'さくらさんのおすすめは<ruby>何<rt>なん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V2',
      kanji: '本',
      kana: 'ほん',
      romaji: 'hon',
      idMeaning: 'Buku',
      contextSentence: {
        jp: 'あ、この本いいなあ。',
        kana: 'あ、このほんいいなあ。',
        romaji: 'A, kono hon ii nā.',
        id: 'Ah, buku ini bagus ya.',
        rubyHtml:
          'あ、この<ruby>本<rt>ほん</rt></ruby>いいなあ。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V3',
      kanji: '面白い',
      kana: 'おもしろい',
      romaji: 'omoshiroi',
      idMeaning: 'Menarik',
      contextSentence: {
        jp: 'あれも面白そう。',
        kana: 'あれもおもしろそう。',
        romaji: 'Are mo omoshirosō.',
        id: 'Itu juga tampak menarik.',
        rubyHtml:
          'あれも<ruby>面白<rt>おもしろ</rt></ruby>そう。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V4',
      kana: 'ホラー',
      romaji: 'horā',
      idMeaning: 'Horor',
      contextSentence: {
        jp: 'ホラーはちょっと…。',
        kana: 'ホラーはちょっと…。',
        romaji: 'Horā wa chotto…',
        id: 'Horor agak… (tidak begitu saya sukai).',
        rubyHtml: 'ホラーはちょっと…。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V5',
      kana: 'ちょっと',
      romaji: 'chotto',
      idMeaning: 'Agak / sedikit; dipakai untuk menolak halus',
      contextSentence: {
        jp: 'ホラーはちょっと…。',
        kana: 'ホラーはちょっと…。',
        romaji: 'Horā wa chotto…',
        id: 'Horor agak… (tidak begitu saya sukai).',
        rubyHtml: 'ホラーはちょっと…。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V6',
      kana: 'どう',
      romaji: 'dō',
      idMeaning: 'Bagaimana',
      contextSentence: {
        jp: 'これはどう？',
        kana: 'これはどう？',
        romaji: 'Kore wa dō?',
        id: 'Bagaimana kalau ini?',
        rubyHtml: 'これはどう？',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V7',
      kana: 'いい',
      romaji: 'ii',
      idMeaning: 'Bagus / baik',
      contextSentence: {
        jp: 'あ、この本いいなあ。',
        kana: 'あ、このほんいいなあ。',
        romaji: 'A, kono hon ii nā.',
        id: 'Ah, buku ini bagus ya.',
        rubyHtml:
          'あ、この<ruby>本<rt>ほん</rt></ruby>いいなあ。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-V8',
      kana: 'あれ',
      romaji: 'are',
      idMeaning: 'Itu (jauh dari pembicara dan lawan bicara)',
      contextSentence: {
        jp: 'あれも面白そう。',
        kana: 'あれもおもしろそう。',
        romaji: 'Are mo omoshirosō.',
        id: 'Itu juga tampak menarik.',
        rubyHtml:
          'あれも<ruby>面白<rt>おもしろ</rt></ruby>そう。',
      },
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L17-GQ1',
        question: 'Di mana Anna sedang berada?',
        options: ['Toko buku', 'Stasiun', 'Tempat karaoke'],
        correctIndex: 0,
        explanation:
          'Situasi Pelajaran 17 berlangsung di toko buku, tempat Anna melihat banyak manga.',
        sourceRef: 'NHK L17 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L17-GQ2',
        question: 'Apa yang Anna minta kepada Sakura?',
        options: [
          'Rekomendasi buku',
          'Uang untuk membeli buku',
          'Bantuan mencari jalan',
        ],
        correctIndex: 0,
        explanation:
          'Anna bertanya さくらさんのおすすめは何ですか — apa rekomendasimu, Sakura?',
        sourceRef: 'NHK L17 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L17-DQ1',
        question: 'Bagaimana reaksi Anna terhadap usulan buku horor?',
        options: [
          'Menolaknya dengan halus',
          'Langsung membelinya',
          'Bertanya harganya',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata ホラーはちょっと… — horor agak… Itu penolakan halus, bukan penolakan langsung.',
        sourceRef: 'NHK L17 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L17-DQ2',
        question: 'Ungkapan apa yang dipakai Anna untuk menolak?',
        options: ['ちょっと…', 'ぜひ', 'ましょう'],
        correctIndex: 0,
        explanation:
          'ちょっと yang digantung dengan nada menurun dipakai untuk menolak tanpa terdengar kasar.',
        sourceRef: 'NHK L17 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'ホラーはちょっと…。',
        kana: 'ホラーはちょっと…。',
        romaji: 'Horā wa chotto…',
        id: 'Horor agak… (tidak begitu saya sukai).',
        rubyHtml: 'ホラーはちょっと…。',
      },
      attribution:
        'Kutipan pendek Pelajaran 17 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L17-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: さくらさん [ ... ] おすすめは何ですか。',
      options: ['の (no)', 'は (wa)', 'が (ga)'],
      correctAnswer: 'の (no)',
      explanation:
        'Partikel の menghubungkan Sakura dengan rekomendasi miliknya: さくらさんの おすすめ.',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-EX2',
      type: 'sentence_order',
      prompt: 'Susun cara menawarkan pilihan dengan sopan.',
      correctAnswer: [
        'これ は どう です か',
        'これはどうですか',
      ],
      explanation:
        'Urutannya: これ + は + どう + です + か. Tanpa です, kalimatnya menjadi lebih santai.',
      sourceRef: 'NHK L17 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-EX3',
      type: 'audio_meaning',
      prompt:
        'Kamu tidak suka film horor dan ingin menolak usulan teman dengan halus. Apa yang kamu katakan?',
      options: [
        'ホラーはちょっと…',
        'ホラーが大好きです',
        'ホラーをください',
      ],
      correctAnswer: 'ホラーはちょっと…',
      explanation:
        'ちょっと… dengan nada menurun adalah cara halus untuk mengatakan bahwa sesuatu kurang cocok.',
      sourceRef: 'NHK L17 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Apa rekomendasimu?"',
      correctAnswer: ['おすすめは何ですか', 'おすすめはなんですか'],
      explanation:
        'Gunakan おすすめ sebagai kata benda, lalu は 何 ですか untuk menanyakan pilihan.',
      sourceRef: 'NHK L17 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-EX5',
      type: 'cloze_particle',
      prompt: 'Lengkapi penolakan halus berikut: ホラー [ ... ] ちょっと…。',
      options: ['は (wa)', 'が (ga)', 'を (o)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Partikel は menandai topik yang sedang dibicarakan, yaitu film horor.',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu sedang mencari buku di toko. Tanyakan rekomendasi kepada temanmu, tanggapi usulannya, lalu pilih satu buku dengan sopan.',
    instructions: [
      'Tanyakan rekomendasi dengan おすすめは何ですか.',
      'Kalau usulannya kurang cocok, tolak dengan ホラーはちょっと…。',
      'Pilih buku lain dengan じゃあ、これをください.',
      'Tutup dengan ありがとうございます.',
    ],
    modelAnswer: {
      jp: 'おすすめは何ですか。ホラーはちょっと…。じゃあ、これをください。ありがとうございます。',
      kana: 'おすすめはなんですか。ホラーはちょっと…。じゃあ、これをください。ありがとうございます。',
      romaji:
        'Osusume wa nan desu ka. Horā wa chotto… Ja, kore o kudasai. Arigatō gozaimasu.',
      id: 'Apa rekomendasimu? Horor agak… Kalau begitu, saya ambil yang ini. Terima kasih.',
      rubySegments: [
        { text: 'おすすめは' },
        { text: '何', reading: 'なん' },
        { text: 'ですか。ホラーはちょっと…。じゃあ、これをください。ありがとうございます。' },
      ],
      rubyHtml:
        'おすすめは<ruby>何<rt>なん</rt></ruby>ですか。ホラーはちょっと…。じゃあ、これをください。ありがとうございます。',
    },
    selfCheckList: [
      'Memakai おすすめ sebagai kata benda, bukan kata kerja.',
      'Menolak dengan ちょっと… dan nada yang tidak tegas.',
      'Memilih barang dengan これをください.',
      'Menutup percakapan dengan ありがとうございます.',
    ],
    sourceRef: 'NHK L17 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L17-RC1',
      lessonId: 'L17',
      front: 'おすすめ',
      back: 'Rekomendasi / saran',
      type: 'vocab',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC2',
      lessonId: 'L17',
      front: '本 (ほん)',
      back: 'Buku',
      type: 'vocab',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC3',
      lessonId: 'L17',
      front: '面白い (おもしろい)',
      back: 'Menarik',
      type: 'vocab',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC4',
      lessonId: 'L17',
      front: 'ホラー',
      back: 'Horor',
      type: 'vocab',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC5',
      lessonId: 'L17',
      front: 'ちょっと…',
      back: 'Agak… — dipakai untuk menolak dengan halus',
      type: 'vocab',
      sourceRef: 'NHK L17 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC6',
      lessonId: 'L17',
      front: 'Pola meminta rekomendasi',
      back: '[orang] の おすすめ は 何 ですか',
      type: 'grammar',
      sourceRef: 'NHK L17 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC7',
      lessonId: 'L17',
      front: 'Pola menolak halus',
      back: '[hal] は ちょっと…。',
      type: 'grammar',
      sourceRef: 'NHK L17 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC8',
      lessonId: 'L17',
      front: 'Dengarkan dialog resmi NHK L17. Apa reaksi Anna pada buku horor?',
      back: 'ホラーはちょっと… — menolaknya dengan halus.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/17-id-le_01.mp3',
      sourceRef: 'NHK L17 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L17-RC9',
      lessonId: 'L17',
      front: 'Praktikkan meminta rekomendasi dan menolak dengan halus.',
      back: 'おすすめは何ですか。ホラーはちょっと…。',
      type: 'output',
      sourceRef: 'NHK L17 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
