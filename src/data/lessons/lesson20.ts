import { Lesson } from '../../types';

export const lesson20: Lesson = {
  id: 'L20',
  order: 20,
  title: {
    jp: '日本の歌を歌ったことがありますか',
    kana: 'にほんのうたをうたったことがありますか',
    romaji: 'Nihon no uta o utatta koto ga arimasu ka',
    id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
    rubySegments: [
      { text: '日本', reading: 'にほん' },
      { text: 'の' },
      { text: '歌', reading: 'うた' },
      { text: 'を' },
      { text: '歌', reading: 'うた' },
      { text: 'ったことがありますか' },
    ],
    rubyHtml:
      '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか',
  },
  situationSummary:
    'Anna dan teman-temannya pergi ke tempat karaoke. Rodrigo bertanya apakah Anna pernah menyanyikan lagu Jepang, dan Anna menjawab bahwa ia pernah.',
  pdfPage: 25,
  printedPage: 24,
  situationCategories: ['Kebudayaan Jepang', 'Bepergian & Berjalan-jalan'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/20.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/20-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan dan menyatakan pengalaman dengan kata kerja bentuk TA + koto ga arimasu.',
    'Saya bisa bertanya "macam apa" dengan donna + kata benda dan menyebut keahlian dengan tokui.',
  ],
  grammarPoints: [
    {
      id: 'L20-GP1',
      title: 'TA + KOTO GA ARIMASU (pengalaman)',
      pattern: '[kata kerja bentuk TA] koto ga arimasu',
      explanationId:
        'Pola ini dipakai untuk menanyakan atau menyatakan pengalaman yang pernah dialami. 歌います berubah menjadi 歌った, lalu ditambah ことがあります. Jawaban singkatnya はい、あります atau いいえ、ありません. Bedakan dari 昨日歌いました, yang hanya berarti "kemarin saya bernyanyi".',
      contrastNote:
        'Bahasa Indonesia memakai kata "pernah". Bahasa Jepang memakai ことがあります setelah kata kerja bentuk TA; "pernah" tidak diterjemahkan kata per kata.',
      examples: [
        {
          jp: '日本の歌を歌ったことがありますか。',
          kana: 'にほんのうたをうたったことがありますか。',
          romaji: 'Nihon no uta o utatta koto ga arimasu ka.',
          id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
          rubySegments: [
            { text: '日本', reading: 'にほん' },
            { text: 'の' },
            { text: '歌', reading: 'うた' },
            { text: 'を' },
            { text: '歌', reading: 'うた' },
            { text: 'ったことがありますか。' },
          ],
          rubyHtml:
            '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか。',
        },
        {
          jp: 'はい、あります。',
          kana: 'はい、あります。',
          romaji: 'Hai, arimasu.',
          id: 'Ya, pernah.',
          rubySegments: [{ text: 'はい、あります。' }],
          rubyHtml: 'はい、あります。',
        },
        {
          jp: '富士山に登ったことがあります。',
          kana: 'ふじさんにのぼったことがあります。',
          romaji: 'Fujisan ni nobotta koto ga arimasu.',
          id: 'Saya pernah mendaki Gunung Fuji.',
          rubySegments: [
            { text: '富士山', reading: 'ふじさん' },
            { text: 'に' },
            { text: '登', reading: 'のぼ' },
            { text: 'ったことがあります。' },
          ],
          rubyHtml:
            '<ruby>富士山<rt>ふじさん</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>ったことがあります。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L20 Tata Bahasa p. 24',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-GP2',
      title: 'DONNA + KATA BENDA; TOKUI',
      pattern: 'donna [kata benda] ga tokui desu ka',
      explanationId:
        'どんな berarti "macam apa" dan selalu diikuti kata benda: どんな曲 (lagu macam apa), どんな料理 (masakan macam apa). 得意 (とくい) berarti "pandai" atau "gemar" melakukan sesuatu. Lawannya 苦手 (にがて).',
      contrastNote:
        'Bahasa Indonesia bisa bertanya "kamu pandai lagu apa?". Bahasa Jepang memakai どんな + kata benda, lalu が得意ですか.',
      examples: [
        {
          jp: 'どんな曲が得意ですか。',
          kana: 'どんなきょくがとくいですか。',
          romaji: 'Donna kyoku ga tokui desu ka.',
          id: 'Lagu macam apa yang kamu kuasai?',
          rubySegments: [
            { text: 'どんな' },
            { text: '曲', reading: 'きょく' },
            { text: 'が' },
            { text: '得意', reading: 'とくい' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            'どんな<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>ですか。',
        },
        {
          jp: 'アニメの曲が得意です。',
          kana: 'アニメのきょくがとくいです。',
          romaji: 'Anime no kyoku ga tokui desu.',
          id: 'Saya pandai lagu anime.',
          rubySegments: [
            { text: 'アニメの' },
            { text: '曲', reading: 'きょく' },
            { text: 'が' },
            { text: '得意', reading: 'とくい' },
            { text: 'です。' },
          ],
          rubyHtml:
            'アニメの<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>です。',
        },
        {
          jp: 'どんな料理が好きですか。',
          kana: 'どんなりょうりがすきですか。',
          romaji: 'Donna ryōri ga suki desu ka.',
          id: 'Masakan macam apa yang kamu suka?',
          rubySegments: [
            { text: 'どんな' },
            { text: '料理', reading: 'りょうり' },
            { text: 'が' },
            { text: '好', reading: 'す' },
            { text: 'きですか。' },
          ],
          rubyHtml:
            'どんな<ruby>料理<rt>りょうり</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L20-V1',
      kanji: '歌',
      kana: 'うた',
      romaji: 'uta',
      idMeaning: 'Lagu',
      contextSentence: {
        jp: '日本の歌を歌ったことがありますか。',
        kana: 'にほんのうたをうたったことがありますか。',
        romaji: 'Nihon no uta o utatta koto ga arimasu ka.',
        id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
        rubyHtml:
          '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか。',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V2',
      kanji: '歌います',
      kana: 'うたいます',
      romaji: 'utaimasu',
      idMeaning: 'Menyanyi',
      contextSentence: {
        jp: '日本の歌を歌ったことがありますか。',
        kana: 'にほんのうたをうたったことがありますか。',
        romaji: 'Nihon no uta o utatta koto ga arimasu ka.',
        id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
        rubyHtml:
          '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか。',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V3',
      kanji: '曲',
      kana: 'きょく',
      romaji: 'kyoku',
      idMeaning: 'Lagu / musik',
      contextSentence: {
        jp: 'どんな曲が得意？',
        kana: 'どんなきょくがとくい？',
        romaji: 'Donna kyoku ga tokui?',
        id: 'Lagu macam apa yang kamu kuasai?',
        rubyHtml:
          'どんな<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>？',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V4',
      kanji: '得意',
      kana: 'とくい',
      romaji: 'tokui',
      idMeaning: 'Pandai / gemar',
      contextSentence: {
        jp: 'どんな曲が得意？',
        kana: 'どんなきょくがとくい？',
        romaji: 'Donna kyoku ga tokui?',
        id: 'Lagu macam apa yang kamu kuasai?',
        rubyHtml:
          'どんな<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>？',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V5',
      kana: 'アニメ',
      romaji: 'anime',
      idMeaning: 'Anime',
      contextSentence: {
        jp: 'アニメの曲です。',
        kana: 'アニメのきょくです。',
        romaji: 'Anime no kyoku desu.',
        id: 'Lagu anime.',
        rubyHtml:
          'アニメの<ruby>曲<rt>きょく</rt></ruby>です。',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V6',
      kanji: 'どんな',
      kana: 'どんな',
      romaji: 'donna',
      idMeaning: 'Macam apa',
      contextSentence: {
        jp: 'どんな曲が得意？',
        kana: 'どんなきょくがとくい？',
        romaji: 'Donna kyoku ga tokui?',
        id: 'Lagu macam apa yang kamu kuasai?',
        rubyHtml:
          'どんな<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>？',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V7',
      kanji: '日本',
      kana: 'にほん',
      romaji: 'Nihon',
      idMeaning: 'Jepang',
      contextSentence: {
        jp: '日本の歌を歌ったことがありますか。',
        kana: 'にほんのうたをうたったことがありますか。',
        romaji: 'Nihon no uta o utatta koto ga arimasu ka.',
        id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
        rubyHtml:
          '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか。',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-V8',
      kanji: 'あります',
      kana: 'あります',
      romaji: 'arimasu',
      idMeaning: 'Ada; punya (pengalaman)',
      contextSentence: {
        jp: 'はい、あります。',
        kana: 'はい、あります。',
        romaji: 'Hai, arimasu.',
        id: 'Ya, pernah.',
        rubyHtml: 'はい、あります。',
      },
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L20-GQ1',
        question: 'Ke mana Anna dan teman-temannya pergi?',
        options: ['Tempat karaoke', 'Toko buku', 'Stasiun'],
        correctIndex: 0,
        explanation:
          'Situasi Pelajaran 20 berlangsung di tempat karaoke.',
        sourceRef: 'NHK L20 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L20-GQ2',
        question: 'Apa yang Rodrigo tanyakan kepada Anna?',
        options: [
          'Apakah Anna pernah menyanyikan lagu Jepang',
          'Apakah Anna suka anime',
          'Apakah Anna bisa bermain piano',
        ],
        correctIndex: 0,
        explanation:
          'Rodrigo bertanya 日本の歌を歌ったことがありますか — apakah kamu pernah menyanyikan lagu Jepang?',
        sourceRef: 'NHK L20 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L20-DQ1',
        question: 'Bagaimana jawaban Anna?',
        options: ['Pernah', 'Tidak pernah', 'Tidak tahu'],
        correctIndex: 0,
        explanation:
          'Anna menjawab はい、あります — ya, pernah.',
        sourceRef: 'NHK L20 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L20-DQ2',
        question: 'Lagu seperti apa yang Anna kuasai?',
        options: ['Lagu anime', 'Lagu klasik', 'Lagu enka'],
        correctIndex: 0,
        explanation:
          'Anna berkata アニメの曲です — lagu anime.',
        sourceRef: 'NHK L20 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '日本の歌を歌ったことがありますか。',
        kana: 'にほんのうたをうたったことがありますか。',
        romaji: 'Nihon no uta o utatta koto ga arimasu ka.',
        id: 'Apakah kamu pernah menyanyikan lagu Jepang?',
        rubyHtml:
          '<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがありますか。',
      },
      attribution:
        'Kutipan pendek Pelajaran 20 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L20-EX1',
      type: 'cloze_particle',
      prompt:
        'Lengkapi kalimat berikut: 日本の歌 [ ... ] 歌ったことがありますか。',
      options: ['を (o)', 'が (ga)', 'に (ni)'],
      correctAnswer: 'を (o)',
      explanation:
        'Partikel を menandai objek yang dinyanyikan, yaitu lagu Jepang.',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-EX2',
      type: 'sentence_order',
      prompt: 'Susun pertanyaan Sakura tentang lagu yang dikuasai Anna.',
      correctAnswer: [
        'どんな きょく が とくい です か',
        'どんなきょくがとくいですか',
      ],
      explanation:
        'Urutannya: どんな + 曲 + が + 得意 + です + か.',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-EX3',
      type: 'audio_meaning',
      prompt:
        'Kamu ingin menanyakan apakah temanmu pernah mendaki Gunung Fuji. Mana yang tepat?',
      options: [
        '富士山に登ったことがありますか',
        '富士山に登ることがありますか',
        '富士山に登りましたことがありますか',
      ],
      correctAnswer: '富士山に登ったことがありますか',
      explanation:
        'Pengalaman memakai kata kerja bentuk TA 登った + ことがあります. 登ることがあります bukan bentuk pengalaman.',
      sourceRef: 'NHK L20 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-EX4',
      type: 'meaning_to_jp',
      prompt:
        'Tuliskan dalam bahasa Jepang: "Saya pernah menyanyikan lagu Jepang."',
      correctAnswer: [
        '日本の歌を歌ったことがあります',
        'にほんのうたをうたったことがあります',
      ],
      explanation:
        'Gunakan 歌った (bentuk TA) + ことがあります untuk pengalaman.',
      sourceRef: 'NHK L20 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 歌います (menyanyi) menjadi bentuk TA (lampau biasa).',
      correctAnswer: ['歌った', 'うたった'],
      explanation:
        'Bentuk TA dari 歌います adalah 歌った. Bentuk ini dipakai sebelum ことがあります.',
      sourceRef: 'NHK L20 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Di ruang karaoke, temanmu bertanya tentang pengalamanmu. Ceritakan satu pengalaman menyanyi atau melakukan hal khas Jepang, lalu tanyakan pengalaman temanmu.',
    instructions: [
      'Jawab dengan はい、あります atau いいえ、ありません.',
      'Sebut pengalaman dengan kata kerja bentuk TA + ことがあります.',
      'Tanyakan balik dengan どんな曲が得意ですか.',
      'Tutup dengan 一緒に歌いましょう.',
    ],
    modelAnswer: {
      jp: 'はい、あります。日本の歌を歌ったことがあります。どんな曲が得意ですか。一緒に歌いましょう。',
      kana: 'はい、あります。にほんのうたをうたったことがあります。どんなきょくがとくいですか。いっしょにうたいましょう。',
      romaji:
        'Hai, arimasu. Nihon no uta o utatta koto ga arimasu. Donna kyoku ga tokui desu ka. Issho ni utaimashō.',
      id: 'Ya, pernah. Saya pernah menyanyikan lagu Jepang. Lagu macam apa yang kamu kuasai? Ayo kita bernyanyi bersama.',
      rubySegments: [
        { text: 'はい、あります。' },
        { text: '日本', reading: 'にほん' },
        { text: 'の' },
        { text: '歌', reading: 'うた' },
        { text: 'を' },
        { text: '歌', reading: 'うた' },
        { text: 'ったことがあります。どんな' },
        { text: '曲', reading: 'きょく' },
        { text: 'が' },
        { text: '得意', reading: 'とくい' },
        { text: 'ですか。' },
        { text: '一緒', reading: 'いっしょ' },
        { text: 'に' },
        { text: '歌', reading: 'うた' },
        { text: 'いましょう。' },
      ],
      rubyHtml:
        'はい、あります。<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったことがあります。どんな<ruby>曲<rt>きょく</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>ですか。<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>歌<rt>うた</rt></ruby>いましょう。',
    },
    selfCheckList: [
      'Menjawab dengan はい、あります atau いいえ、ありません.',
      'Memakai bentuk TA sebelum ことがあります.',
      'Memakai どんな + kata benda saat bertanya balik.',
      'Mengajak bernyanyi dengan 一緒に歌いましょう.',
    ],
    sourceRef: 'NHK L20 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L20-RC1',
      lessonId: 'L20',
      front: '歌 (うた)',
      back: 'Lagu',
      type: 'vocab',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC2',
      lessonId: 'L20',
      front: '歌います (うたいます)',
      back: 'Menyanyi',
      type: 'vocab',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC3',
      lessonId: 'L20',
      front: '曲 (きょく)',
      back: 'Lagu / musik',
      type: 'vocab',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC4',
      lessonId: 'L20',
      front: '得意 (とくい)',
      back: 'Pandai / gemar',
      type: 'vocab',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC5',
      lessonId: 'L20',
      front: 'どんな',
      back: 'Macam apa',
      type: 'vocab',
      sourceRef: 'NHK L20 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC6',
      lessonId: 'L20',
      front: 'Pola menyatakan pengalaman',
      back: '[kata kerja bentuk TA] ことがあります',
      type: 'grammar',
      sourceRef: 'NHK L20 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC7',
      lessonId: 'L20',
      front: 'Pola bertanya "macam apa"',
      back: 'どんな + kata benda + が 得意ですか',
      type: 'grammar',
      sourceRef: 'NHK L20 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC8',
      lessonId: 'L20',
      front: 'Dengarkan dialog resmi NHK L20. Lagu apa yang dikuasai Anna?',
      back: 'アニメの曲です — lagu anime.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/20-id-le_01.mp3',
      sourceRef: 'NHK L20 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L20-RC9',
      lessonId: 'L20',
      front: 'Praktikkan menceritakan pengalaman dan bertanya balik.',
      back: '日本の歌を歌ったことがあります。どんな曲が得意ですか。',
      type: 'output',
      sourceRef: 'NHK L20 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
