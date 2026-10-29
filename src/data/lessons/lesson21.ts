import { Lesson } from '../../types';

export const lesson21: Lesson = {
  id: 'L21',
  order: 21,
  title: {
    jp: 'いいえ、それほどでも',
    kana: 'いいえ、それほどでも',
    romaji: 'Iie, sorehodo demo',
    id: 'Tidak, tidak juga',
    rubySegments: [{ text: 'いいえ、それほどでも' }],
    rubyHtml: 'いいえ、それほどでも',
  },
  situationSummary:
    'Di tempat karaoke, Anna menyanyikan lagu Jepang dan Sakura memujinya. Anna menanggapi pujian itu dengan rendah hati, lalu Rodrigo menyadari waktu sudah larut dan Anna panik karena jam malam asrama.',
  pdfPage: 26,
  printedPage: 25,
  situationCategories: ['Kebudayaan Jepang', 'Bepergian & Berjalan-jalan'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/21.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/21-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanggapi pujian dengan rendah hati memakai いいえ、それほどでも。',
    'Saya bisa mengenali pujian 上手ですね dan membedakannya dari penilaian diri.',
  ],
  grammarPoints: [
    {
      id: 'L21-GP1',
      title: 'MENANGGAPI PUJIAN DENGAN RENDAH HATI',
      pattern: '[pujian] → いいえ、それほどでも。',
      explanationId:
        'それほどでも secara harfiah berarti "tidak sejauh itu". Digabung dengan いいえ, ungkapan ini menjadi cara sopan untuk menolak pujian tanpa terdengar sombong. Ucapkan dengan nada lembut dan menurun, lalu berhenti; tidak perlu menjelaskan panjang lebar.',
      contrastNote:
        'Orang Indonesia sering berkata "Ah, tidak, biasa saja". Bahasa Jepang memakai frasa tetap いいえ、それほどでも, bukan terjemahan kata per kata dari "biasa saja".',
      examples: [
        {
          jp: 'いいえ、それほどでも。',
          kana: 'いいえ、それほどでも。',
          romaji: 'Iie, sorehodo demo.',
          id: 'Tidak, tidak juga.',
          rubySegments: [{ text: 'いいえ、それほどでも。' }],
          rubyHtml: 'いいえ、それほどでも。',
        },
        {
          jp: 'いえ、そんなことないです。',
          kana: 'いえ、そんなことないです。',
          romaji: 'Ie, sonna koto nai desu.',
          id: 'Tidak, bukan begitu.',
          rubySegments: [{ text: 'いえ、そんなことないです。' }],
          rubyHtml: 'いえ、そんなことないです。',
        },
        {
          jp: 'まだまだです。',
          kana: 'まだまだです。',
          romaji: 'Mada mada desu.',
          id: 'Masih jauh (dari bagus).',
          rubySegments: [{ text: 'まだまだです。' }],
          rubyHtml: 'まだまだです。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L21 Tata Bahasa p. 25',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-GP2',
      title: 'PUJIAN DENGAN JÔZU DESU NE',
      pattern: '[orang] wa [bidang] ga jôzu desu ne',
      explanationId:
        '上手 (じょうず) adalah kata sifat NA yang berarti "pandai". Bidang yang dikuasai ditandai partikel が: 歌が上手ですね berarti "pandai bernyanyi, ya". Partikel ね di akhir mengajak lawan bicara menyetujui pujian itu. Dalam percakapan santai, です bisa menjadi だ, seperti 上手だね.',
      contrastNote:
        'Bahasa Indonesia memakai kata kerja "pandai bernyanyi". Bahasa Jepang memakai kata sifat 上手 dengan partikel が untuk bidangnya.',
      examples: [
        {
          jp: 'アンナさんは歌が上手ですね。',
          kana: 'アンナさんはうたがじょうずですね。',
          romaji: 'Anna-san wa uta ga jōzu desu ne.',
          id: 'Anna pandai bernyanyi, ya.',
          rubySegments: [
            { text: 'アンナさんは' },
            { text: '歌', reading: 'うた' },
            { text: 'が' },
            { text: '上手', reading: 'じょうず' },
            { text: 'ですね。' },
          ],
          rubyHtml:
            'アンナさんは<ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですね。',
        },
        {
          jp: 'さくらさんは料理が上手です。',
          kana: 'さくらさんはりょうりがじょうずです。',
          romaji: 'Sakura-san wa ryōri ga jōzu desu.',
          id: 'Sakura pandai memasak.',
          rubySegments: [
            { text: 'さくらさんは' },
            { text: '料理', reading: 'りょうり' },
            { text: 'が' },
            { text: '上手', reading: 'じょうず' },
            { text: 'です。' },
          ],
          rubyHtml:
            'さくらさんは<ruby>料理<rt>りょうり</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です。',
        },
        {
          jp: 'ダニエルさんは日本語が上手です。',
          kana: 'ダニエルさんはにほんごがじょうずです。',
          romaji: 'Danieru-san wa nihongo ga jōzu desu.',
          id: 'Daniel pandai berbahasa Jepang.',
          rubySegments: [
            { text: 'ダニエルさんは' },
            { text: '日本語', reading: 'にほんご' },
            { text: 'が' },
            { text: '上手', reading: 'じょうず' },
            { text: 'です。' },
          ],
          rubyHtml:
            'ダニエルさんは<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L21-V1',
      kanji: '上手',
      kana: 'じょうず',
      romaji: 'jōzu',
      idMeaning: 'Pandai',
      contextSentence: {
        jp: 'アンナ、上手だね。',
        kana: 'アンナ、じょうずだね。',
        romaji: 'Anna, jōzu da ne.',
        id: 'Anna, pandai ya.',
        rubyHtml:
          'アンナ、<ruby>上手<rt>じょうず</rt></ruby>だね。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V2',
      kana: 'それほど',
      romaji: 'sorehodo',
      idMeaning: 'Sejauh itu',
      contextSentence: {
        jp: 'いいえ、それほどでも。',
        kana: 'いいえ、それほどでも。',
        romaji: 'Iie, sorehodo demo.',
        id: 'Tidak, tidak juga.',
        rubyHtml: 'いいえ、それほどでも。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V3',
      kana: 'いいえ',
      romaji: 'iie',
      idMeaning: 'Tidak',
      contextSentence: {
        jp: 'いいえ、それほどでも。',
        kana: 'いいえ、それほどでも。',
        romaji: 'Iie, sorehodo demo.',
        id: 'Tidak, tidak juga.',
        rubyHtml: 'いいえ、それほどでも。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V4',
      kanji: '時間',
      kana: 'じかん',
      romaji: 'jikan',
      idMeaning: 'Waktu / jam',
      contextSentence: {
        jp: 'あっ、もうこんな時間です。',
        kana: 'あっ、もうこんなじかんです。',
        romaji: "A', mō konna jikan desu.",
        id: 'Ah, sudah jam segini.',
        rubyHtml:
          'あっ、もうこんな<ruby>時間<rt>じかん</rt></ruby>です。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V5',
      kanji: '門限',
      kana: 'もんげん',
      romaji: 'mongen',
      idMeaning: 'Jam malam (batas pulang)',
      contextSentence: {
        jp: '門限に間に合わない。',
        kana: 'もんげんにまにあわない。',
        romaji: 'Mongen ni maniawanai.',
        id: 'Tidak akan tiba sebelum jam malam.',
        rubyHtml:
          '<ruby>門限<rt>もんげん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V6',
      kanji: '間に合います',
      kana: 'まにあいます',
      romaji: 'maniaimasu',
      idMeaning: 'Tiba tepat waktu',
      contextSentence: {
        jp: '門限に間に合わない。',
        kana: 'もんげんにまにあわない。',
        romaji: 'Mongen ni maniawanai.',
        id: 'Tidak akan tiba sebelum jam malam.',
        rubyHtml:
          '<ruby>門限<rt>もんげん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V7',
      kanji: '大変',
      kana: 'たいへん',
      romaji: 'taihen',
      idMeaning: 'Ya ampun / berat',
      contextSentence: {
        jp: '大変。門限に間に合わない。',
        kana: 'たいへん。もんげんにまにあわない。',
        romaji: 'Taihen. Mongen ni maniawanai.',
        id: 'Ya ampun. Tidak akan tiba sebelum jam malam.',
        rubyHtml:
          '<ruby>大変<rt>たいへん</rt></ruby>。<ruby>門限<rt>もんげん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わない。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-V8',
      kana: 'もう',
      romaji: 'mō',
      idMeaning: 'Sudah',
      contextSentence: {
        jp: 'あっ、もうこんな時間です。',
        kana: 'あっ、もうこんなじかんです。',
        romaji: "A', mō konna jikan desu.",
        id: 'Ah, sudah jam segini.',
        rubyHtml:
          'あっ、もうこんな<ruby>時間<rt>じかん</rt></ruby>です。',
      },
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L21-GQ1',
        question: 'Apa pujian Sakura kepada Anna?',
        options: [
          'Anna pandai bernyanyi',
          'Anna datang terlambat',
          'Anna membawa kamera',
        ],
        correctIndex: 0,
        explanation:
          'Sakura berkata アンナ、上手だね — Anna pandai, ya.',
        sourceRef: 'NHK L21 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L21-GQ2',
        question: 'Mengapa Anna panik setelah Rodrigo melihat jam?',
        options: [
          'Karena hampir melewati jam malam',
          'Karena lupa membawa dompet',
          'Karena harus bernyanyi lagi',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata 門限に間に合わない — ia tidak akan tiba sebelum jam malam.',
        sourceRef: 'NHK L21 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L21-DQ1',
        question: 'Bagaimana Anna menjawab pujian Sakura?',
        options: [
          'Merendah dengan いいえ、それほどでも',
          'Menyetujui dengan はい、そうです',
          'Mengalihkan topik ke cuaca',
        ],
        correctIndex: 0,
        explanation:
          'Anna menjawab いいえ、それほどでも — tidak, tidak juga. Itu penolakan pujian yang sopan.',
        sourceRef: 'NHK L21 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L21-DQ2',
        question: 'Siapa yang menyadari waktu sudah larut?',
        options: ['Rodrigo', 'Sakura', 'Anna'],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata あっ、もうこんな時間です — ah, sudah jam segini.',
        sourceRef: 'NHK L21 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'いいえ、それほどでも。',
        kana: 'いいえ、それほどでも。',
        romaji: 'Iie, sorehodo demo.',
        id: 'Tidak, tidak juga.',
        rubyHtml: 'いいえ、それほどでも。',
      },
      attribution:
        'Kutipan pendek Pelajaran 21 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L21-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi pujian santai berikut: アンナ、上手 [ ... ] ね。',
      options: ['だ (da)', 'を (o)', 'に (ni)'],
      correctAnswer: 'だ (da)',
      explanation:
        '上手 adalah kata sifat NA. Dalam bentuk santai sebelum ね, dipakai だ: 上手だね. Bentuk sopannya 上手ですね.',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-EX2',
      type: 'sentence_order',
      prompt: 'Susun pujian sopan untuk Anna.',
      correctAnswer: [
        'アンナさん は 歌 が 上手 です ね',
        'アンナさんは歌が上手ですね',
      ],
      explanation:
        'Urutannya: アンナさん + は + 歌 + が + 上手 + です + ね. Bidang yang dikuasai memakai が.',
      sourceRef: 'NHK L21 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-EX3',
      type: 'audio_meaning',
      prompt:
        'Gurumu memujimu. Jawaban mana yang paling santun dan rendah hati?',
      options: [
        'いいえ、それほどでも。',
        'はい、そうです。',
        '上手ですね。',
      ],
      correctAnswer: 'いいえ、それほどでも。',
      explanation:
        'いいえ、それほどでも adalah frasa tetap untuk menolak pujian dengan halus. Menyetujui pujian sendiri terdengar sombong.',
      sourceRef: 'NHK L21 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Tidak, tidak juga."',
      correctAnswer: ['いいえ、それほどでも', 'いいえ、それほどでも。'],
      explanation:
        'Gunakan いいえ diikuti それほどでも. Frasa ini dipakai saat menanggapi pujian.',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah pujian santai 上手だね menjadi bentuk sopan.',
      correctAnswer: ['上手ですね'],
      explanation:
        'Ganti だ dengan です: 上手だね → 上手ですね. Partikel ね tetap dipertahankan.',
      sourceRef: 'NHK L21 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu baru selesai bernyanyi di tempat karaoke. Temanmu memujimu. Tanggapi pujian itu dengan rendah hati, lalu ingatkan bahwa waktu sudah larut.',
    instructions: [
      'Dengarkan pujian dengan selesai, jangan memotong.',
      'Jawab dengan いいえ、それほどでも。',
      'Tambahkan ありがとうございます sebagai penutup sopan.',
      'Alihkan perhatian ke waktu dengan もうこんな時間ですね。',
    ],
    modelAnswer: {
      jp: 'いいえ、それほどでも。ありがとうございます。あっ、もうこんな時間ですね。',
      kana: 'いいえ、それほどでも。ありがとうございます。あっ、もうこんなじかんですね。',
      romaji:
        "Iie, sorehodo demo. Arigatō gozaimasu. A', mō konna jikan desu ne.",
      id: 'Tidak, tidak juga. Terima kasih. Ah, sudah jam segini ya.',
      rubySegments: [
        { text: 'いいえ、それほどでも。ありがとうございます。あっ、もうこんな' },
        { text: '時間', reading: 'じかん' },
        { text: 'ですね。' },
      ],
      rubyHtml:
        'いいえ、それほどでも。ありがとうございます。あっ、もうこんな<ruby>時間<rt>じかん</rt></ruby>ですね。',
    },
    selfCheckList: [
      'Menanggapi pujian dengan いいえ、それほどでも.',
      'Tidak menambahkan pujian untuk diri sendiri.',
      'Mengucapkan ありがとうございます dengan nada tulus.',
      'Mengingatkan waktu dengan もうこんな時間ですね.',
    ],
    sourceRef: 'NHK L21 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L21-RC1',
      lessonId: 'L21',
      front: '上手 (じょうず)',
      back: 'Pandai',
      type: 'vocab',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC2',
      lessonId: 'L21',
      front: 'それほど',
      back: 'Sejauh itu',
      type: 'vocab',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC3',
      lessonId: 'L21',
      front: '門限 (もんげん)',
      back: 'Jam malam (batas pulang)',
      type: 'vocab',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC4',
      lessonId: 'L21',
      front: '間に合います (まにあいます)',
      back: 'Tiba tepat waktu',
      type: 'vocab',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC5',
      lessonId: 'L21',
      front: '大変 (たいへん)',
      back: 'Ya ampun / berat',
      type: 'vocab',
      sourceRef: 'NHK L21 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC6',
      lessonId: 'L21',
      front: 'Cara menolak pujian dengan halus',
      back: 'いいえ、それほどでも。',
      type: 'grammar',
      sourceRef: 'NHK L21 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC7',
      lessonId: 'L21',
      front: 'Pola memuji keahlian',
      back: '[orang] は [bidang] が 上手 です ね',
      type: 'grammar',
      sourceRef: 'NHK L21 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC8',
      lessonId: 'L21',
      front: 'Dengarkan dialog resmi NHK L21. Bagaimana Anna menanggapi pujian?',
      back: 'いいえ、それほどでも — menolak pujian dengan rendah hati.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/21-id-le_01.mp3',
      sourceRef: 'NHK L21 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L21-RC9',
      lessonId: 'L21',
      front: 'Praktikkan menanggapi pujian dan mengingatkan waktu.',
      back: 'いいえ、それほどでも。もうこんな時間ですね。',
      type: 'output',
      sourceRef: 'NHK L21 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
