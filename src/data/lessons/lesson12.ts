import { Lesson } from '../../types';

export const lesson12: Lesson = {
  id: 'L12',
  order: 12,
  title: {
    jp: 'いつ日本に来ましたか',
    kana: 'いつにほんにきましたか',
    romaji: 'Itsu Nihon ni kimashita ka',
    id: 'Kapan Anda datang ke Jepang?',
    rubySegments: [
      { text: 'いつ' },
      { text: '日本', reading: 'にほん' },
      { text: 'に' },
      { text: '来', reading: 'き' },
      { text: 'ましたか' },
    ],
    rubyHtml:
      'いつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか',
  },
  situationSummary:
    'Di pesta asrama, Anna memperkenalkan Rodrigo dari Meksiko kepada Sakura. Sakura bertanya kapan Rodrigo datang ke Jepang dan apakah ia sudah terbiasa hidup di sana.',
  pdfPage: 17,
  printedPage: 16,
  situationCategories: ['Di asrama', 'Acara Khusus'],
  productArcId: 'arc-2',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/12.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/12-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan waktu lampau dengan pola itsu + kata kerja bentuk ました + ka.',
    'Saya bisa menyebut bulan memakai angka + 月 dan membaca bentuk tidak beraturannya.',
  ],
  grammarPoints: [
    {
      id: 'L12-GP1',
      title: 'ITSU + MASHITA KA (kapan ...?)',
      pattern: 'itsu [kejadian] mashita ka',
      explanationId:
        'いつ berarti "kapan". Karena menanyakan kejadian yang sudah terjadi, kata kerjanya memakai bentuk lampau sopan ました, lalu ditutup か. Jawabannya menyebut waktu + に: ３月に来ました (datang pada bulan Maret).',
      contrastNote:
        'Bahasa Indonesia memakai "kapan" di awal kalimat dan tidak mengubah bentuk kata kerja. Bahasa Jepang tetap menaruh いつ di awal, tetapi kata kerjanya wajib berubah ke ました.',
      examples: [
        {
          jp: 'ロドリゴさんはいつ日本に来ましたか。',
          kana: 'ロドリゴさんはいつにほんにきましたか。',
          romaji: 'Rodrigo-san wa itsu Nihon ni kimashita ka.',
          id: 'Kapan Rodrigo datang ke Jepang?',
          rubySegments: [
            { text: 'ロドリゴさんはいつ' },
            { text: '日本', reading: 'にほん' },
            { text: 'に' },
            { text: '来', reading: 'き' },
            { text: 'ましたか。' },
          ],
          rubyHtml:
            'ロドリゴさんはいつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか。',
        },
        {
          jp: '３月に来ました。',
          kana: 'さんがつにきました。',
          romaji: 'Sangatsu ni kimashita.',
          id: 'Datang pada bulan Maret.',
          rubySegments: [
            { text: '３月', reading: 'さんがつ' },
            { text: 'に' },
            { text: '来', reading: 'き' },
            { text: 'ました。' },
          ],
          rubyHtml:
            '<ruby>３月<rt>さんがつ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。',
        },
        {
          jp: 'きのう、友だちがうちに来ました。',
          kana: 'きのう、ともだちがうちにきました。',
          romaji: 'Kinō, tomodachi ga uchi ni kimashita.',
          id: 'Kemarin seorang teman datang ke rumah saya.',
          rubySegments: [
            { text: 'きのう、' },
            { text: '友', reading: 'とも' },
            { text: 'だちがうちに' },
            { text: '来', reading: 'き' },
            { text: 'ました。' },
          ],
          rubyHtml:
            'きのう、<ruby>友<rt>とも</rt></ruby>だちがうちに<ruby>来<rt>き</rt></ruby>ました。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-GP2',
      title: 'BULAN: ANGKA + 月',
      pattern: '[angka] gatsu',
      explanationId:
        'Nama bulan dibentuk dari angka + 月 (がつ): １月 いちがつ, ２月 にがつ, ３月 さんがつ. Ada tiga bacaan tidak beraturan yang perlu dihafal: ４月 しがつ, ７月 しちがつ, ９月 くがつ. Untuk bertanya "bulan apa" dipakai 何月 なんがつ.',
      contrastNote:
        'Bahasa Indonesia memakai nama bulan serapan (Januari, Februari), sedangkan bahasa Jepang memakai nomor urut. Karena itu ３月 secara harfiah berarti "bulan ketiga".',
      examples: [
        {
          jp: '３月に来ました。',
          kana: 'さんがつにきました。',
          romaji: 'Sangatsu ni kimashita.',
          id: 'Datang pada bulan Maret.',
          rubySegments: [
            { text: '３月', reading: 'さんがつ' },
            { text: 'に' },
            { text: '来', reading: 'き' },
            { text: 'ました。' },
          ],
          rubyHtml:
            '<ruby>３月<rt>さんがつ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。',
        },
        {
          jp: '４月に日本へ行きます。',
          kana: 'しがつににほんへいきます。',
          romaji: 'Shigatsu ni Nihon e ikimasu.',
          id: 'Saya akan pergi ke Jepang pada bulan April.',
          rubySegments: [
            { text: '４月', reading: 'しがつ' },
            { text: 'に' },
            { text: '日本', reading: 'にほん' },
            { text: 'へ' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          rubyHtml:
            '<ruby>４月<rt>しがつ</rt></ruby>に<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
        },
        {
          jp: '何月が好きですか。',
          kana: 'なんがつがすきですか。',
          romaji: 'Nangatsu ga suki desu ka.',
          id: 'Bulan apa yang kamu suka?',
          rubySegments: [
            { text: '何月', reading: 'なんがつ' },
            { text: 'が' },
            { text: '好', reading: 'す' },
            { text: 'きですか。' },
          ],
          rubyHtml:
            '<ruby>何月<rt>なんがつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L12 Petunjuk Tata Bahasa p. 16',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L12-V1',
      kana: 'いつ',
      romaji: 'itsu',
      idMeaning: 'Kapan',
      contextSentence: {
        jp: 'ロドリゴさんはいつ日本に来ましたか。',
        kana: 'ロドリゴさんはいつにほんにきましたか。',
        romaji: 'Rodrigo-san wa itsu Nihon ni kimashita ka.',
        id: 'Kapan Rodrigo datang ke Jepang?',
        rubyHtml:
          'ロドリゴさんはいつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか。',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V2',
      kanji: '日本',
      kana: 'にほん',
      romaji: 'Nihon',
      idMeaning: 'Jepang',
      contextSentence: {
        jp: 'ロドリゴさんはいつ日本に来ましたか。',
        kana: 'ロドリゴさんはいつにほんにきましたか。',
        romaji: 'Rodrigo-san wa itsu Nihon ni kimashita ka.',
        id: 'Kapan Rodrigo datang ke Jepang?',
        rubyHtml:
          'ロドリゴさんはいつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか。',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V3',
      kanji: '来ました',
      kana: 'きました',
      romaji: 'kimashita',
      idMeaning: 'Datang (bentuk lampau)',
      contextSentence: {
        jp: '３月に来ました。',
        kana: 'さんがつにきました。',
        romaji: 'Sangatsu ni kimashita.',
        id: 'Datang pada bulan Maret.',
        rubyHtml:
          '<ruby>３月<rt>さんがつ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V4',
      kanji: '３月',
      kana: 'さんがつ',
      romaji: 'sangatsu',
      idMeaning: 'Bulan Maret',
      contextSentence: {
        jp: '３月に来ました。',
        kana: 'さんがつにきました。',
        romaji: 'Sangatsu ni kimashita.',
        id: 'Datang pada bulan Maret.',
        rubyHtml:
          '<ruby>３月<rt>さんがつ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V5',
      kanji: '生活',
      kana: 'せいかつ',
      romaji: 'seikatsu',
      idMeaning: 'Kehidupan sehari-hari',
      contextSentence: {
        jp: 'もう日本の生活に慣れた？',
        kana: 'もうにほんのせいかつになれた？',
        romaji: 'Mō Nihon no seikatsu ni nareta?',
        id: 'Apakah sudah terbiasa dengan kehidupan di Jepang?',
        rubyHtml:
          'もう<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れた？',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V6',
      kanji: '慣れます',
      kana: 'なれます',
      romaji: 'naremasu',
      idMeaning: 'Terbiasa',
      contextSentence: {
        jp: 'もう日本の生活に慣れた？',
        kana: 'もうにほんのせいかつになれた？',
        romaji: 'Mō Nihon no seikatsu ni nareta?',
        id: 'Apakah sudah terbiasa dengan kehidupan di Jepang?',
        rubyHtml:
          'もう<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れた？',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V7',
      kana: 'もう',
      romaji: 'mō',
      idMeaning: 'Sudah',
      contextSentence: {
        jp: 'もう日本の生活に慣れた？',
        kana: 'もうにほんのせいかつになれた？',
        romaji: 'Mō Nihon no seikatsu ni nareta?',
        id: 'Apakah sudah terbiasa dengan kehidupan di Jepang?',
        rubyHtml:
          'もう<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れた？',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-V8',
      kana: 'ええ、まあ',
      romaji: 'ē, mā',
      idMeaning: 'Ya, begitulah (jawaban ragu-ragu sopan)',
      contextSentence: {
        jp: 'ええ、まあ。',
        kana: 'ええ、まあ。',
        romaji: 'Ē, mā.',
        id: 'Ya, begitulah.',
        rubyHtml: 'ええ、まあ。',
      },
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L12-GQ1',
        question: 'Apa yang Sakura tanyakan kepada Rodrigo?',
        options: [
          'Kapan ia datang ke Jepang',
          'Di mana ia tinggal',
          'Apa hobinya',
        ],
        correctIndex: 0,
        explanation:
          'Sakura bertanya いつ日本に来ましたか — kapan kamu datang ke Jepang?',
        sourceRef: 'NHK L12 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L12-GQ2',
        question: 'Kapan Rodrigo datang ke Jepang?',
        options: ['Bulan Maret', 'Bulan April', 'Bulan September'],
        correctIndex: 0,
        explanation:
          'Rodrigo menjawab ３月に来ました — datang pada bulan Maret.',
        sourceRef: 'NHK L12 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L12-DQ1',
        question: 'Apa pertanyaan lanjutan Sakura?',
        options: [
          'Apakah sudah terbiasa hidup di Jepang',
          'Apakah sudah makan kari',
          'Apakah sudah punya teman',
        ],
        correctIndex: 0,
        explanation:
          'Sakura bertanya もう日本の生活に慣れた？ — apakah sudah terbiasa dengan kehidupan di Jepang?',
        sourceRef: 'NHK L12 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L12-DQ2',
        question: 'Bagaimana Rodrigo menjawab pertanyaan itu?',
        options: ['ええ、まあ', 'いいえ、ぜんぜん', 'はい、とても'],
        correctIndex: 0,
        explanation:
          'Rodrigo menjawab ええ、まあ — ya, begitulah. Jawaban sopan yang tidak terlalu tegas.',
        sourceRef: 'NHK L12 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'ロドリゴさんはいつ日本に来ましたか。',
        kana: 'ロドリゴさんはいつにほんにきましたか。',
        romaji: 'Rodrigo-san wa itsu Nihon ni kimashita ka.',
        id: 'Kapan Rodrigo datang ke Jepang?',
        rubyHtml:
          'ロドリゴさんはいつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか。',
      },
      attribution:
        'Kutipan pendek Pelajaran 12 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L12-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: ロドリゴさん [ ... ] いつ日本に来ましたか。',
      options: ['は (wa)', 'が (ga)', 'を (o)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Partikel は menandai Rodrigo sebagai topik pertanyaan.',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi pertanyaan yang tepat.',
      correctAnswer: [
        'いつ にほん に きました か',
        'いつにほんにきましたか',
      ],
      explanation:
        'Urutannya: いつ + 日本に + 来ました + か.',
      sourceRef: 'NHK L12 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana menanyakan "Kapan kamu datang ke Jepang?"',
      options: [
        'いつ日本に来ましたか',
        'いつ日本に行きますか',
        '日本はどこですか',
      ],
      correctAnswer: 'いつ日本に来ましたか',
      explanation:
        'Kejadian yang sudah terjadi memakai 来ました, bukan 行きます.',
      sourceRef: 'NHK L12 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya datang pada bulan Maret."',
      correctAnswer: ['３月に来ました', 'さんがつにきました'],
      explanation:
        'Bulan ditandai に, lalu kata kerja lampau 来ました.',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 来ます (datang) menjadi bentuk lampau sopan.',
      correctAnswer: ['来ました', 'きました'],
      explanation:
        'Bentuk lampau sopan dibentuk dengan mengganti ます menjadi ました.',
      sourceRef: 'NHK L12 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Di pesta asrama, kamu berkenalan dengan mahasiswa asing. Tanyakan kapan ia datang ke Jepang, lalu tanyakan apakah ia sudah terbiasa hidup di sana.',
    instructions: [
      'Sapa dan sebut namanya, lalu tanyakan いつ日本に来ましたか.',
      'Tanggapi jawabannya dengan そうですか.',
      'Tanyakan もう日本の生活に慣れましたか.',
      'Tutup dengan ありがとうございます.',
    ],
    modelAnswer: {
      jp: 'ロドリゴさんはいつ日本に来ましたか。そうですか。もう日本の生活に慣れましたか。ありがとうございます。',
      kana: 'ロドリゴさんはいつにほんにきましたか。そうですか。もうにほんのせいかつになれましたか。ありがとうございます。',
      romaji:
        'Rodrigo-san wa itsu Nihon ni kimashita ka. Sō desu ka. Mō Nihon no seikatsu ni naremashita ka. Arigatō gozaimasu.',
      id: 'Kapan Rodrigo datang ke Jepang? Begitu ya. Apakah sudah terbiasa dengan kehidupan di Jepang? Terima kasih.',
      rubySegments: [
        { text: 'ロドリゴさんはいつ' },
        { text: '日本', reading: 'にほん' },
        { text: 'に' },
        { text: '来', reading: 'き' },
        { text: 'ましたか。そうですか。もう' },
        { text: '日本', reading: 'にほん' },
        { text: 'の' },
        { text: '生活', reading: 'せいかつ' },
        { text: 'に' },
        { text: '慣', reading: 'な' },
        { text: 'れましたか。ありがとうございます。' },
      ],
      rubyHtml:
        'ロドリゴさんはいつ<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>ましたか。そうですか。もう<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れましたか。ありがとうございます。',
    },
    selfCheckList: [
      'Memakai いつ di awal pertanyaan.',
      'Mengubah kata kerja ke ました karena menanyakan masa lampau.',
      'Menyebut bulan dengan pola angka + 月.',
      'Memakai もう untuk bertanya apakah sesuatu sudah terjadi.',
    ],
    sourceRef: 'NHK L12 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L12-RC1',
      lessonId: 'L12',
      front: 'いつ',
      back: 'Kapan',
      type: 'vocab',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC2',
      lessonId: 'L12',
      front: '日本 (にほん)',
      back: 'Jepang',
      type: 'vocab',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC3',
      lessonId: 'L12',
      front: '３月 (さんがつ)',
      back: 'Bulan Maret',
      type: 'vocab',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC4',
      lessonId: 'L12',
      front: '生活 (せいかつ)',
      back: 'Kehidupan sehari-hari',
      type: 'vocab',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC5',
      lessonId: 'L12',
      front: '慣れます (なれます)',
      back: 'Terbiasa',
      type: 'vocab',
      sourceRef: 'NHK L12 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC6',
      lessonId: 'L12',
      front: 'Pola menanyakan waktu lampau',
      back: 'いつ + [kata kerja bentuk ました] + か',
      type: 'grammar',
      sourceRef: 'NHK L12 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC7',
      lessonId: 'L12',
      front: 'Bulan-bulan tidak beraturan',
      back: '４月 しがつ · ７月 しちがつ · ９月 くがつ',
      type: 'grammar',
      sourceRef: 'NHK L12 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC8',
      lessonId: 'L12',
      front: 'Dengarkan dialog resmi NHK L12. Kapan Rodrigo datang?',
      back: '３月に来ました — datang pada bulan Maret.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/12-id-le_01.mp3',
      sourceRef: 'NHK L12 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L12-RC9',
      lessonId: 'L12',
      front: 'Praktikkan menanyakan asal waktu dan menanggapi jawabannya.',
      back: 'いつ日本に来ましたか。３月に来ました。',
      type: 'output',
      sourceRef: 'NHK L12 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
