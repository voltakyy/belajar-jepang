import { Lesson } from '../../types';

export const lesson15: Lesson = {
  id: 'L15',
  order: 15,
  title: {
    jp: '寝ています',
    kana: 'ねています',
    romaji: 'Nete imasu',
    id: 'Sedang tidur',
    rubySegments: [
      { text: '寝', reading: 'ね' },
      { text: 'ています' },
    ],
    rubyHtml: '<ruby>寝<rt>ね</rt></ruby>ています',
  },
  situationSummary:
    'Anna, Sakura, dan Rodrigo pergi ke toko buku di Shinjuku. Kereta yang mereka tumpangi hampir tiba, dan Rodrigo melihat beberapa penumpang tertidur.',
  pdfPage: 20,
  printedPage: 19,
  situationCategories: ['Bepergian & Berjalan-jalan'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/15.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/15-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa mengajak dengan kata kerja bentuk ましょう.',
    'Saya bisa menyatakan tindakan yang sedang berlangsung dengan bentuk TE + imasu.',
  ],
  grammarPoints: [
    {
      id: 'L15-GP1',
      title: 'MASHOU (mari ...)',
      pattern: '[kata kerja] mashou',
      explanationId:
        'ましょう menyatakan usulan yang tegas: mari melakukan sesuatu. 降ります (turun) menjadi 降りましょう. Pola ini dipakai saat pembicara yakin lawan bicara tidak akan menolak. Untuk ajakan yang lebih terbuka, pakai ませんか seperti di L13.',
      contrastNote:
        'Bahasa Indonesia memakai "mari" atau "ayo" di depan. Bahasa Jepang mengubah akhiran kata kerja dari ます menjadi ましょう.',
      examples: [
        {
          jp: 'さあ、降りましょう。',
          kana: 'さあ、おりましょう。',
          romaji: 'Sā, orimashō.',
          id: 'Ayo, mari kita turun.',
          rubySegments: [
            { text: 'さあ、' },
            { text: '降', reading: 'お' },
            { text: 'りましょう。' },
          ],
          rubyHtml:
            'さあ、<ruby>降<rt>お</rt></ruby>りましょう。',
        },
        {
          jp: '一緒に行きましょう。',
          kana: 'いっしょにいきましょう。',
          romaji: 'Issho ni ikimashō.',
          id: 'Mari kita pergi bersama.',
          rubySegments: [
            { text: '一緒', reading: 'いっしょ' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'きましょう。' },
          ],
          rubyHtml:
            '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましょう。',
        },
        {
          jp: '昼ご飯を食べましょう。',
          kana: 'ひるごはんをたべましょう。',
          romaji: 'Hirugohan o tabemashō.',
          id: 'Mari kita makan siang.',
          rubySegments: [
            { text: '昼', reading: 'ひる' },
            { text: 'ご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べましょう。' },
          ],
          rubyHtml:
            '<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べましょう。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L15 Tata Bahasa p. 19',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-GP2',
      title: 'BENTUK TE + IMASU (sedang ...)',
      pattern: '[kata kerja bentuk TE] imasu',
      explanationId:
        'Bentuk TE + います menyatakan tindakan yang sedang berlangsung saat ini. 寝ます (tidur) menjadi 寝ています (sedang tidur). Bandingkan dengan 寝ます yang bisa berarti kebiasaan atau akan tidur. Bentuk lampau 起きました berarti "sudah bangun".',
      contrastNote:
        'Bahasa Indonesia memakai kata "sedang" sebelum kata kerja. Bahasa Jepang menambahkan います setelah bentuk TE.',
      examples: [
        {
          jp: 'あの人たち、寝ています。',
          kana: 'あのひとたち、ねています。',
          romaji: 'Ano hitotachi, nete imasu.',
          id: 'Orang-orang itu sedang tidur.',
          rubySegments: [
            { text: 'あの' },
            { text: '人', reading: 'ひと' },
            { text: 'たち、' },
            { text: '寝', reading: 'ね' },
            { text: 'ています。' },
          ],
          rubyHtml:
            'あの<ruby>人<rt>ひと</rt></ruby>たち、<ruby>寝<rt>ね</rt></ruby>ています。',
        },
        {
          jp: '私はご飯を食べています。',
          kana: 'わたしはごはんをたべています。',
          romaji: 'Watashi wa gohan o tabete imasu.',
          id: 'Saya sedang makan.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'はご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べています。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>はご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べています。',
        },
        {
          jp: '雨が降っています。',
          kana: 'あめがふっています。',
          romaji: 'Ame ga futte imasu.',
          id: 'Hujan sedang turun.',
          rubySegments: [
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'っています。' },
          ],
          rubyHtml:
            '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L15 Tata Bahasa p. 19',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L15-V1',
      kanji: '次',
      kana: 'つぎ',
      romaji: 'tsugi',
      idMeaning: 'Berikutnya',
      contextSentence: {
        jp: '次は新宿駅です。',
        kana: 'つぎはしんじゅくえきです。',
        romaji: 'Tsugi wa Shinjuku eki desu.',
        id: 'Berikutnya adalah Stasiun Shinjuku.',
        rubyHtml:
          '<ruby>次<rt>つぎ</rt></ruby>は<ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>です。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V2',
      kanji: '駅',
      kana: 'えき',
      romaji: 'eki',
      idMeaning: 'Stasiun',
      contextSentence: {
        jp: '次は新宿駅です。',
        kana: 'つぎはしんじゅくえきです。',
        romaji: 'Tsugi wa Shinjuku eki desu.',
        id: 'Berikutnya adalah Stasiun Shinjuku.',
        rubyHtml:
          '<ruby>次<rt>つぎ</rt></ruby>は<ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>です。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V3',
      kanji: '降ります',
      kana: 'おります',
      romaji: 'orimasu',
      idMeaning: 'Turun (dari kendaraan)',
      contextSentence: {
        jp: 'さあ、降りましょう。',
        kana: 'さあ、おりましょう。',
        romaji: 'Sā, orimashō.',
        id: 'Ayo, mari kita turun.',
        rubyHtml:
          'さあ、<ruby>降<rt>お</rt></ruby>りましょう。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V4',
      kanji: '人たち',
      kana: 'ひとたち',
      romaji: 'hitotachi',
      idMeaning: 'Orang-orang',
      contextSentence: {
        jp: 'あの人たち、寝ています。',
        kana: 'あのひとたち、ねています。',
        romaji: 'Ano hitotachi, nete imasu.',
        id: 'Orang-orang itu sedang tidur.',
        rubyHtml:
          'あの<ruby>人<rt>ひと</rt></ruby>たち、<ruby>寝<rt>ね</rt></ruby>ています。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V5',
      kanji: '寝ます',
      kana: 'ねます',
      romaji: 'nemasu',
      idMeaning: 'Tidur',
      contextSentence: {
        jp: 'あの人たち、寝ています。',
        kana: 'あのひとたち、ねています。',
        romaji: 'Ano hitotachi, nete imasu.',
        id: 'Orang-orang itu sedang tidur.',
        rubyHtml:
          'あの<ruby>人<rt>ひと</rt></ruby>たち、<ruby>寝<rt>ね</rt></ruby>ています。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V6',
      kanji: '起きます',
      kana: 'おきます',
      romaji: 'okimasu',
      idMeaning: 'Bangun',
      contextSentence: {
        jp: 'ほら、起きた。',
        kana: 'ほら、おきた。',
        romaji: 'Hora, okita.',
        id: 'Nah, lihat, mereka sudah bangun.',
        rubyHtml:
          'ほら、<ruby>起<rt>お</rt></ruby>きた。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V7',
      kana: '大丈夫',
      romaji: 'daijōbu',
      idMeaning: 'Baik-baik saja / tidak apa-apa',
      contextSentence: {
        jp: '大丈夫、大丈夫。',
        kana: 'だいじょうぶ、だいじょうぶ。',
        romaji: 'Daijōbu, daijōbu.',
        id: 'Baik-baik saja, tidak apa-apa.',
        rubyHtml: '大丈夫、大丈夫。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-V8',
      kana: 'ほら',
      romaji: 'hora',
      idMeaning: 'Nah / lihat (menarik perhatian)',
      contextSentence: {
        jp: 'ほら、起きた。',
        kana: 'ほら、おきた。',
        romaji: 'Hora, okita.',
        id: 'Nah, lihat, mereka sudah bangun.',
        rubyHtml:
          'ほら、<ruby>起<rt>お</rt></ruby>きた。',
      },
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L15-GQ1',
        question: 'Di mana percakapan ini berlangsung?',
        options: ['Di dalam kereta', 'Di toko buku', 'Di asrama'],
        correctIndex: 0,
        explanation:
          'Sakura berkata 次は新宿駅です — stasiun berikutnya adalah Shinjuku, jadi mereka sedang di kereta.',
        sourceRef: 'NHK L15 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L15-GQ2',
        question: 'Apa yang dilihat Rodrigo?',
        options: [
          'Orang-orang sedang tidur',
          'Toko buku baru',
          'Guru di peron',
        ],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata あの人たち、寝ています — orang-orang itu sedang tidur.',
        sourceRef: 'NHK L15 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L15-DQ1',
        question: 'Apa yang Sakura usulkan saat kereta tiba?',
        options: ['Turun di stasiun', 'Tetap duduk', 'Pindah kereta'],
        correctIndex: 0,
        explanation:
          'Sakura berkata さあ、降りましょう — ayo, mari kita turun.',
        sourceRef: 'NHK L15 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L15-DQ2',
        question: 'Apa yang terjadi pada orang-orang itu?',
        options: ['Mereka bangun', 'Mereka turun', 'Mereka memanggil Sakura'],
        correctIndex: 0,
        explanation:
          'Sakura berkata ほら、起きた — lihat, mereka sudah bangun.',
        sourceRef: 'NHK L15 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'あの人たち、寝ています。',
        kana: 'あのひとたち、ねています。',
        romaji: 'Ano hitotachi, nete imasu.',
        id: 'Orang-orang itu sedang tidur.',
        rubyHtml:
          'あの<ruby>人<rt>ひと</rt></ruby>たち、<ruby>寝<rt>ね</rt></ruby>ています。',
      },
      attribution:
        'Kutipan pendek Pelajaran 15 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L15-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 次 [ ... ] 新宿駅です。',
      options: ['は (wa)', 'が (ga)', 'を (o)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Partikel は menandai 次 sebagai topik: "berikutnya adalah Stasiun Shinjuku".',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi kalimat yang tepat.',
      correctAnswer: [
        'あの ひとたち ねて います',
        'あのひとたちねています',
      ],
      explanation:
        'Urutannya: あの人たち + 寝て + います.',
      sourceRef: 'NHK L15 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana mengajak teman turun dari kereta?',
      options: ['降りましょう', '降りました', '降りません'],
      correctAnswer: '降りましょう',
      explanation:
        'ましょう dipakai untuk mengusulkan tindakan bersama: mari turun.',
      sourceRef: 'NHK L15 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Orang-orang itu sedang tidur."',
      correctAnswer: ['あの人たちは寝ています', 'あのひとたちはねています'],
      explanation:
        'Bentuk TE 寝て + います menyatakan tindakan yang sedang berlangsung.',
      sourceRef: 'NHK L15 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 寝ます (tidur) menjadi bentuk "sedang tidur".',
      correctAnswer: ['寝ています', 'ねています'],
      explanation:
        'Bentuk TE dari 寝ます adalah 寝て, lalu ditambah います.',
      sourceRef: 'NHK L15 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu berada di kereta menuju Shinjuku bersama teman. Beri tahu stasiun berikutnya, ajak turun, lalu komentari penumpang yang tertidur.',
    instructions: [
      'Sebutkan 次は新宿駅です.',
      'Ajak turun dengan さあ、降りましょう.',
      'Komentari penumpang dengan あの人たち、寝ています.',
      'Tutup dengan 大丈夫、大丈夫。',
    ],
    modelAnswer: {
      jp: '次は新宿駅です。さあ、降りましょう。あの人たち、寝ています。大丈夫、大丈夫。',
      kana: 'つぎはしんじゅくえきです。さあ、おりましょう。あのひとたち、ねています。だいじょうぶ、だいじょうぶ。',
      romaji:
        'Tsugi wa Shinjuku eki desu. Sā, orimashō. Ano hitotachi, nete imasu. Daijōbu, daijōbu.',
      id: 'Berikutnya Stasiun Shinjuku. Ayo, mari kita turun. Orang-orang itu sedang tidur. Baik-baik saja, tidak apa-apa.',
      rubySegments: [
        { text: '次', reading: 'つぎ' },
        { text: 'は' },
        { text: '新宿', reading: 'しんじゅく' },
        { text: '駅', reading: 'えき' },
        { text: 'です。さあ、' },
        { text: '降', reading: 'お' },
        { text: 'りましょう。あの' },
        { text: '人', reading: 'ひと' },
        { text: 'たち、' },
        { text: '寝', reading: 'ね' },
        { text: 'ています。大丈夫、大丈夫。' },
      ],
      rubyHtml:
        '<ruby>次<rt>つぎ</rt></ruby>は<ruby>新宿<rt>しんじゅく</rt></ruby><ruby>駅<rt>えき</rt></ruby>です。さあ、<ruby>降<rt>お</rt></ruby>りましょう。あの<ruby>人<rt>ひと</rt></ruby>たち、<ruby>寝<rt>ね</rt></ruby>ています。大丈夫、大丈夫。',
    },
    selfCheckList: [
      'Memakai 次は...です untuk menyebut stasiun berikutnya.',
      'Memakai ましょう untuk mengajak turun.',
      'Memakai bentuk TE + います untuk tindakan yang sedang berlangsung.',
      'Membedakan 起きました (sudah bangun) dari 起きます (bangun).',
    ],
    sourceRef: 'NHK L15 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L15-RC1',
      lessonId: 'L15',
      front: '次 (つぎ)',
      back: 'Berikutnya',
      type: 'vocab',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC2',
      lessonId: 'L15',
      front: '駅 (えき)',
      back: 'Stasiun',
      type: 'vocab',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC3',
      lessonId: 'L15',
      front: '降ります (おります)',
      back: 'Turun (dari kendaraan)',
      type: 'vocab',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC4',
      lessonId: 'L15',
      front: '寝ます (ねます)',
      back: 'Tidur',
      type: 'vocab',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC5',
      lessonId: 'L15',
      front: '起きます (おきます)',
      back: 'Bangun',
      type: 'vocab',
      sourceRef: 'NHK L15 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC6',
      lessonId: 'L15',
      front: 'Pola mengajak',
      back: '[kata kerja] ましょう — 降りましょう',
      type: 'grammar',
      sourceRef: 'NHK L15 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC7',
      lessonId: 'L15',
      front: 'Pola tindakan sedang berlangsung',
      back: '[kata kerja bentuk TE] います — 寝ています',
      type: 'grammar',
      sourceRef: 'NHK L15 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC8',
      lessonId: 'L15',
      front: 'Dengarkan dialog resmi NHK L15. Apa yang dilakukan orang-orang itu?',
      back: '寝ています — mereka sedang tidur.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/15-id-le_01.mp3',
      sourceRef: 'NHK L15 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L15-RC9',
      lessonId: 'L15',
      front: 'Praktikkan memberi tahu stasiun dan mengajak turun.',
      back: '次は新宿駅です。さあ、降りましょう。',
      type: 'output',
      sourceRef: 'NHK L15 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
