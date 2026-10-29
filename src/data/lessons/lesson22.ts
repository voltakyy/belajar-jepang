import { Lesson } from '../../types';

export const lesson22: Lesson = {
  id: 'L22',
  order: 22,
  title: {
    jp: '遅くなりました',
    kana: 'おそくなりました',
    romaji: 'Osoku narimashita',
    id: 'Saya terlambat',
    rubySegments: [
      { text: '遅', reading: 'おそ' },
      { text: 'くなりました' },
    ],
    rubyHtml: '<ruby>遅<rt>おそ</rt></ruby>くなりました',
  },
  situationSummary:
    'Anna pulang ke asrama setelah berkaraoke terlalu lama. Ia meminta maaf kepada ibu asrama karena terlambat sepuluh menit, lalu berjanji akan lebih berhati-hati.',
  pdfPage: 27,
  printedPage: 26,
  situationCategories: ['Di asrama', 'Penyelesaian masalah'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/22.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/22-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa mengubah kata sifat I menjadi keterangan dengan akhiran ~ku.',
    'Saya bisa menyatakan perubahan keadaan dengan ~ku narimashita.',
    'Saya bisa melarang tindakan dengan bentuk TE + wa ikemasen.',
  ],
  grammarPoints: [
    {
      id: 'L22-GP1',
      title: 'KATA SIFAT I → KETERANGAN ~KU; ~KU NARIMASHITA',
      pattern: '[kata sifat I] - i + ku narimashita',
      explanationId:
        'Kata sifat I seperti 遅い (terlambat) berubah menjadi keterangan dengan mengganti い menjadi く: 遅く. Ditambah なりました (menjadi), hasilnya 遅くなりました — "menjadi terlambat". Pola ini menyatakan perubahan keadaan, bukan sekadar sifat. Kata sifat NA memakai に: 静かになりました.',
      contrastNote:
        'Bahasa Indonesia cukup berkata "saya terlambat". Bahasa Jepang sering membingkainya sebagai perubahan keadaan: "saya menjadi terlambat".',
      examples: [
        {
          jp: '遅くなりました。',
          kana: 'おそくなりました。',
          romaji: 'Osoku narimashita.',
          id: 'Saya terlambat.',
          rubySegments: [
            { text: '遅', reading: 'おそ' },
            { text: 'くなりました。' },
          ],
          rubyHtml: '<ruby>遅<rt>おそ</rt></ruby>くなりました。',
        },
        {
          jp: 'だんだん寒くなりました。',
          kana: 'だんだんさむくなりました。',
          romaji: 'Dandan samuku narimashita.',
          id: 'Perlahan-lahan menjadi dingin.',
          rubySegments: [
            { text: 'だんだん' },
            { text: '寒', reading: 'さむ' },
            { text: 'くなりました。' },
          ],
          rubyHtml:
            'だんだん<ruby>寒<rt>さむ</rt></ruby>くなりました。',
        },
        {
          jp: '教室は静かになりました。',
          kana: 'きょうしつはしずかになりました。',
          romaji: 'Kyōshitsu wa shizuka ni narimashita.',
          id: 'Kelas menjadi tenang.',
          rubySegments: [
            { text: '教室', reading: 'きょうしつ' },
            { text: 'は' },
            { text: '静', reading: 'しず' },
            { text: 'かになりました。' },
          ],
          rubyHtml:
            '<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かになりました。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L22 Tata Bahasa p. 26',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-GP2',
      title: 'LARANGAN ~TE WA IKEMASEN',
      pattern: '[kata kerja bentuk TE] + は + いけません',
      explanationId:
        'いけません berarti "tidak baik" atau "tidak boleh". Setelah kata kerja bentuk TE, pola ini menyatakan larangan: 破ってはいけません — jangan melanggar. Bentuk ini tegas tetapi tetap sopan, cocok untuk aturan asrama, sekolah, atau tempat umum.',
      contrastNote:
        'Bahasa Indonesia memakai satu kata "jangan". Bahasa Jepang mengubah kata kerja ke bentuk TE lebih dulu, lalu menambahkan はいけません.',
      examples: [
        {
          jp: '約束を破ってはいけません。',
          kana: 'やくそくをやぶってはいけません。',
          romaji: 'Yakusoku o yabutte wa ikemasen.',
          id: 'Jangan melanggar janji.',
          rubySegments: [
            { text: '約束', reading: 'やくそく' },
            { text: 'を' },
            { text: '破', reading: 'やぶ' },
            { text: 'ってはいけません。' },
          ],
          rubyHtml:
            '<ruby>約束<rt>やくそく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>ってはいけません。',
        },
        {
          jp: 'ここで写真を撮ってはいけません。',
          kana: 'ここでしゃしんをとってはいけません。',
          romaji: 'Koko de shashin o totte wa ikemasen.',
          id: 'Dilarang mengambil foto di sini.',
          rubySegments: [
            { text: 'ここで' },
            { text: '写真', reading: 'しゃしん' },
            { text: 'を' },
            { text: '撮', reading: 'と' },
            { text: 'ってはいけません。' },
          ],
          rubyHtml:
            'ここで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってはいけません。',
        },
        {
          jp: '授業中に話してはいけません。',
          kana: 'じゅぎょうちゅうにはなしてはいけません。',
          romaji: 'Jugyōchū ni hanashite wa ikemasen.',
          id: 'Tidak boleh berbicara saat pelajaran.',
          rubySegments: [
            { text: '授業中', reading: 'じゅぎょうちゅう' },
            { text: 'に' },
            { text: '話', reading: 'はな' },
            { text: 'してはいけません。' },
          ],
          rubyHtml:
            '<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してはいけません。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L22 Pelajaran Tambahan p. 26',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L22-V1',
      kanji: 'お母さん',
      kana: 'おかあさん',
      romaji: 'okāsan',
      idMeaning: 'Ibu',
      contextSentence: {
        jp: 'お母さん、ごめんなさい。',
        kana: 'おかあさん、ごめんなさい。',
        romaji: 'Okāsan, gomennasai.',
        id: 'Ibu, maaf.',
        rubyHtml:
          'お<ruby>母<rt>かあ</rt></ruby>さん、ごめんなさい。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V2',
      kanji: '遅い',
      kana: 'おそい',
      romaji: 'osoi',
      idMeaning: 'Terlambat',
      contextSentence: {
        jp: '遅くなりました。',
        kana: 'おそくなりました。',
        romaji: 'Osoku narimashita.',
        id: 'Saya terlambat.',
        rubyHtml: '<ruby>遅<rt>おそ</rt></ruby>くなりました。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V3',
      kanji: '遅刻',
      kana: 'ちこく',
      romaji: 'chikoku',
      idMeaning: 'Terlambat (datang)',
      contextSentence: {
        jp: '１０分も遅刻です。',
        kana: 'じっぷんもちこくです。',
        romaji: 'Jippun mo chikoku desu.',
        id: 'Terlambat sepuluh menit.',
        rubyHtml:
          '<ruby>１０分<rt>じっぷん</rt></ruby>も<ruby>遅刻<rt>ちこく</rt></ruby>です。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V4',
      kanji: '約束',
      kana: 'やくそく',
      romaji: 'yakusoku',
      idMeaning: 'Janji',
      contextSentence: {
        jp: '約束を破ってはいけません。',
        kana: 'やくそくをやぶってはいけません。',
        romaji: 'Yakusoku o yabutte wa ikemasen.',
        id: 'Jangan melanggar janji.',
        rubyHtml:
          '<ruby>約束<rt>やくそく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>ってはいけません。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V5',
      kanji: '破ります',
      kana: 'やぶります',
      romaji: 'yaburimasu',
      idMeaning: 'Melanggar / merobek',
      contextSentence: {
        jp: '約束を破ってはいけません。',
        kana: 'やくそくをやぶってはいけません。',
        romaji: 'Yakusoku o yabutte wa ikemasen.',
        id: 'Jangan melanggar janji.',
        rubyHtml:
          '<ruby>約束<rt>やくそく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>ってはいけません。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V6',
      kanji: '気をつけます',
      kana: 'きをつけます',
      romaji: 'ki o tsukemasu',
      idMeaning: 'Berhati-hati',
      contextSentence: {
        jp: 'すみません。気をつけます。',
        kana: 'すみません。きをつけます。',
        romaji: 'Sumimasen. Ki o tsukemasu.',
        id: 'Maaf. Saya akan berhati-hati.',
        rubyHtml:
          'すみません。<ruby>気<rt>き</rt></ruby>をつけます。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V7',
      kana: 'すみません',
      romaji: 'sumimasen',
      idMeaning: 'Maaf',
      contextSentence: {
        jp: 'すみません。気をつけます。',
        kana: 'すみません。きをつけます。',
        romaji: 'Sumimasen. Ki o tsukemasu.',
        id: 'Maaf. Saya akan berhati-hati.',
        rubyHtml:
          'すみません。<ruby>気<rt>き</rt></ruby>をつけます。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-V8',
      kanji: '１０分',
      kana: 'じっぷん',
      romaji: 'jippun',
      idMeaning: 'Sepuluh menit',
      contextSentence: {
        jp: '１０分も遅刻です。',
        kana: 'じっぷんもちこくです。',
        romaji: 'Jippun mo chikoku desu.',
        id: 'Terlambat sepuluh menit.',
        rubyHtml:
          '<ruby>１０分<rt>じっぷん</rt></ruby>も<ruby>遅刻<rt>ちこく</rt></ruby>です。',
      },
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L22-GQ1',
        question: 'Mengapa Anna meminta maaf kepada ibu asrama?',
        options: [
          'Karena pulang terlambat',
          'Karena tidak makan malam',
          'Karena lupa mengerjakan tugas',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata 遅くなりました — saya terlambat.',
        sourceRef: 'NHK L22 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L22-GQ2',
        question: 'Berapa menit Anna terlambat?',
        options: ['Sepuluh menit', 'Dua menit', 'Tiga puluh menit'],
        correctIndex: 0,
        explanation:
          'Ibu asrama berkata １０分も遅刻です — terlambat sepuluh menit.',
        sourceRef: 'NHK L22 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L22-DQ1',
        question: 'Aturan apa yang dilanggar Anna?',
        options: ['Melanggar janji', 'Tidak membersihkan kamar', 'Tidak mengikuti kelas'],
        correctIndex: 0,
        explanation:
          'Ibu asrama berkata 約束を破ってはいけません — jangan melanggar janji.',
        sourceRef: 'NHK L22 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L22-DQ2',
        question: 'Apa yang Anna janjikan setelah meminta maaf?',
        options: [
          'Akan berhati-hati',
          'Akan membayar denda',
          'Akan pindah asrama',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata 気をつけます — saya akan berhati-hati.',
        sourceRef: 'NHK L22 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '遅くなりました。',
        kana: 'おそくなりました。',
        romaji: 'Osoku narimashita.',
        id: 'Saya terlambat.',
        rubyHtml: '<ruby>遅<rt>おそ</rt></ruby>くなりました。',
      },
      attribution:
        'Kutipan pendek Pelajaran 22 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L22-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi larangan berikut: 約束を破って [ ... ] いけません。',
      options: ['は (wa)', 'が (ga)', 'を (o)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Pola larangan memakai bentuk TE + は + いけません. Partikel は menandai tindakan yang dilarang.',
      sourceRef: 'NHK L22 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-EX2',
      type: 'sentence_order',
      prompt: 'Susun permintaan maaf Anna kepada ibu asrama.',
      correctAnswer: [
        'おかあさん ごめんなさい おそく なりました',
        'おかあさんごめんなさいおそくなりました',
      ],
      explanation:
        'Urutannya: お母さん + ごめんなさい + 遅く + なりました. 遅く adalah bentuk keterangan dari 遅い.',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengatakan "Jangan melanggar janji." Mana yang tepat?',
      options: [
        '約束を破ってはいけません',
        '約束を破りました',
        '約束を破ってもいいです',
      ],
      correctAnswer: '約束を破ってはいけません',
      explanation:
        'Bentuk TE + はいけません menyatakan larangan. 破りました hanya lampau, dan 破ってもいいです memberi izin.',
      sourceRef: 'NHK L22 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya terlambat."',
      correctAnswer: ['遅くなりました', 'おそくなりました'],
      explanation:
        'Gunakan 遅く (bentuk keterangan) + なりました untuk menyatakan perubahan keadaan.',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah kata sifat 遅い (terlambat) menjadi bentuk keterangan.',
      correctAnswer: ['遅く', 'おそく'],
      explanation:
        'Kata sifat I dibentuk dengan mengganti い menjadi く: 遅い → 遅く.',
      sourceRef: 'NHK L22 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu pulang ke asrama melewati jam malam. Ibu asrama menunggumu di depan pintu. Minta maaf, jelaskan bahwa kamu terlambat, dan berjanji akan berhati-hati.',
    instructions: [
      'Sapa dan minta maaf dengan お母さん、ごめんなさい。',
      'Sebutkan keterlambatan dengan 遅くなりました。',
      'Akui aturannya dengan 約束を破ってはいけません。',
      'Tutup dengan これから気をつけます。',
    ],
    modelAnswer: {
      jp: 'お母さん、ごめんなさい。遅くなりました。これから気をつけます。',
      kana: 'おかあさん、ごめんなさい。おそくなりました。これからきをつけます。',
      romaji:
        'Okāsan, gomennasai. Osoku narimashita. Kore kara ki o tsukemasu.',
      id: 'Ibu, maaf. Saya terlambat. Mulai sekarang saya akan berhati-hati.',
      rubySegments: [
        { text: 'お' },
        { text: '母', reading: 'かあ' },
        { text: 'さん、ごめんなさい。' },
        { text: '遅', reading: 'おそ' },
        { text: 'くなりました。これから' },
        { text: '気', reading: 'き' },
        { text: 'をつけます。' },
      ],
      rubyHtml:
        'お<ruby>母<rt>かあ</rt></ruby>さん、ごめんなさい。<ruby>遅<rt>おそ</rt></ruby>くなりました。これから<ruby>気<rt>き</rt></ruby>をつけます。',
    },
    selfCheckList: [
      'Meminta maaf dengan ごめんなさい.',
      'Memakai 遅くなりました, bukan 遅いです.',
      'Mengakui aturan dengan 約束を破ってはいけません.',
      'Berjanji dengan 気をつけます.',
    ],
    sourceRef: 'NHK L22 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L22-RC1',
      lessonId: 'L22',
      front: 'お母さん (おかあさん)',
      back: 'Ibu',
      type: 'vocab',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC2',
      lessonId: 'L22',
      front: '遅い (おそい)',
      back: 'Terlambat',
      type: 'vocab',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC3',
      lessonId: 'L22',
      front: '遅刻 (ちこく)',
      back: 'Terlambat (datang)',
      type: 'vocab',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC4',
      lessonId: 'L22',
      front: '約束 (やくそく)',
      back: 'Janji',
      type: 'vocab',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC5',
      lessonId: 'L22',
      front: '気をつけます (きをつけます)',
      back: 'Berhati-hati',
      type: 'vocab',
      sourceRef: 'NHK L22 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC6',
      lessonId: 'L22',
      front: 'Mengubah kata sifat I menjadi keterangan',
      back: 'buang い + く — 遅い → 遅く',
      type: 'grammar',
      sourceRef: 'NHK L22 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC7',
      lessonId: 'L22',
      front: 'Pola larangan',
      back: '[kata kerja bentuk TE] は いけません',
      type: 'grammar',
      sourceRef: 'NHK L22 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC8',
      lessonId: 'L22',
      front: 'Dengarkan dialog resmi NHK L22. Berapa menit Anna terlambat?',
      back: '１０分 — sepuluh menit.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/22-id-le_01.mp3',
      sourceRef: 'NHK L22 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L22-RC9',
      lessonId: 'L22',
      front: 'Praktikkan meminta maaf karena terlambat.',
      back: 'ごめんなさい。遅くなりました。気をつけます。',
      type: 'output',
      sourceRef: 'NHK L22 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
