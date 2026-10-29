import { Lesson } from '../../types';

export const lesson18: Lesson = {
  id: 'L18',
  order: 18,
  title: {
    jp: '道に迷ってしまいました',
    kana: 'みちにまよってしまいました',
    romaji: 'Michi ni mayotte shimaimashita',
    id: 'Saya tersesat di jalan',
    rubySegments: [
      { text: '道', reading: 'みち' },
      { text: 'に' },
      { text: '迷', reading: 'まよ' },
      { text: 'ってしまいました' },
    ],
    rubyHtml:
      '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました',
  },
  situationSummary:
    'Setelah keluar dari toko buku, Anna terpisah dari Sakura dan Rodrigo. Ia menelepon Sakura, mengabarkan bahwa ia tersesat, lalu menyebutkan kantor pos yang ada tepat di depannya.',
  pdfPage: 23,
  printedPage: 22,
  situationCategories: ['Bepergian & Berjalan-jalan', 'Penyelesaian masalah'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/18.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/18-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menyatakan tindakan yang tidak disengaja atau disesali dengan bentuk TE + shimaimashita.',
    'Saya bisa menyebutkan letak suatu tempat dengan kata posisi seperti mae, ushiro, dan tonari.',
  ],
  grammarPoints: [
    {
      id: 'L18-GP1',
      title: 'BENTUK TE + SHIMAIMASHITA',
      pattern: '[kata kerja bentuk TE] shimaimashita',
      explanationId:
        'Pola ini menyatakan tindakan yang sudah selesai, sering kali karena tidak sengaja atau disesali. 迷います (tersesat) berubah menjadi 迷って, lalu ditambah しまいました. Nuansanya seperti "terlanjur" atau "akhirnya jadi".',
      contrastNote:
        'Bahasa Indonesia memakai "terlanjur", "tanpa sengaja", atau "akhirnya". Bahasa Jepang menambahkan しまいました setelah bentuk TE.',
      examples: [
        {
          jp: '道に迷ってしまいました。',
          kana: 'みちにまよってしまいました。',
          romaji: 'Michi ni mayotte shimaimashita.',
          id: 'Saya tersesat di jalan.',
          rubySegments: [
            { text: '道', reading: 'みち' },
            { text: 'に' },
            { text: '迷', reading: 'まよ' },
            { text: 'ってしまいました。' },
          ],
          rubyHtml:
            '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。',
        },
        {
          jp: '財布を忘れてしまいました。',
          kana: 'さいふをわすれてしまいました。',
          romaji: 'Saifu o wasurete shimaimashita.',
          id: 'Saya lupa membawa dompet.',
          rubySegments: [
            { text: '財布', reading: 'さいふ' },
            { text: 'を' },
            { text: '忘', reading: 'わす' },
            { text: 'れてしまいました。' },
          ],
          rubyHtml:
            '<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れてしまいました。',
        },
        {
          jp: 'ケーキを全部食べてしまいました。',
          kana: 'ケーキをぜんぶたべてしまいました。',
          romaji: 'Kēki o zenbu tabete shimaimashita.',
          id: 'Saya terlanjur menghabiskan seluruh kue.',
          rubySegments: [
            { text: 'ケーキを' },
            { text: '全部', reading: 'ぜんぶ' },
            { text: '食', reading: 'た' },
            { text: 'べてしまいました。' },
          ],
          rubyHtml:
            'ケーキを<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>食<rt>た</rt></ruby>べてしまいました。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L18 Tata Bahasa p. 22',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-GP2',
      title: 'POSISI: MAE, USHIRO, TONARI',
      pattern: '[benda] no [posisi] ni [benda] ga arimasu',
      explanationId:
        'Kata posisi seperti 前 (depan), 後ろ (belakang), 隣 (sebelah), dan 近く (dekat) adalah kata benda. Karena itu, untuk menyatakan "di depan X" dipakai X の 前. 目の前 berarti "tepat di depan mata saya".',
      contrastNote:
        'Bahasa Indonesia cukup berkata "di depan kantor pos". Bahasa Jepang menyusunnya sebagai "kantor pos の depan に".',
      examples: [
        {
          jp: '目の前に郵便局があります。',
          kana: 'めのまえにゆうびんきょくがあります。',
          romaji: 'Me no mae ni yūbinkyoku ga arimasu.',
          id: 'Tepat di depan saya ada kantor pos.',
          rubySegments: [
            { text: '目', reading: 'め' },
            { text: 'の' },
            { text: '前', reading: 'まえ' },
            { text: 'に' },
            { text: '郵便局', reading: 'ゆうびんきょく' },
            { text: 'が' },
            { text: 'あります。' },
          ],
          rubyHtml:
            '<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>があります。',
        },
        {
          jp: '銀行は郵便局の隣にあります。',
          kana: 'ぎんこうはゆうびんきょくのとなりにあります。',
          romaji: 'Ginkō wa yūbinkyoku no tonari ni arimasu.',
          id: 'Bank ada di sebelah kantor pos.',
          rubySegments: [
            { text: '銀行', reading: 'ぎんこう' },
            { text: 'は' },
            { text: '郵便局', reading: 'ゆうびんきょく' },
            { text: 'の' },
            { text: '隣', reading: 'となり' },
            { text: 'に' },
            { text: 'あります。' },
          ],
          rubyHtml:
            '<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>にあります。',
        },
        {
          jp: '駅の後ろに公園があります。',
          kana: 'えきのうしろにこうえんがあります。',
          romaji: 'Eki no ushiro ni kōen ga arimasu.',
          id: 'Di belakang stasiun ada taman.',
          rubySegments: [
            { text: '駅', reading: 'えき' },
            { text: 'の' },
            { text: '後ろ', reading: 'うしろ' },
            { text: 'に' },
            { text: '公園', reading: 'こうえん' },
            { text: 'が' },
            { text: 'あります。' },
          ],
          rubyHtml:
            '<ruby>駅<rt>えき</rt></ruby>の<ruby>後ろ<rt>うしろ</rt></ruby>に<ruby>公園<rt>こうえん</rt></ruby>があります。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L18-V1',
      kana: 'もしもし',
      romaji: 'moshimoshi',
      idMeaning: 'Halo (dipakai di telepon)',
      contextSentence: {
        jp: 'もしもし、さくらさん。',
        kana: 'もしもし、さくらさん。',
        romaji: 'Moshimoshi, Sakura-san.',
        id: 'Halo, Sakura.',
        rubyHtml: 'もしもし、さくらさん。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V2',
      kanji: '助けます',
      kana: 'たすけます',
      romaji: 'tasukemasu',
      idMeaning: 'Menolong',
      contextSentence: {
        jp: '助けてください。',
        kana: 'たすけてください。',
        romaji: 'Tasukete kudasai.',
        id: 'Tolong bantu saya.',
        rubyHtml:
          '<ruby>助<rt>たす</rt></ruby>けてください。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V3',
      kanji: '道',
      kana: 'みち',
      romaji: 'michi',
      idMeaning: 'Jalan',
      contextSentence: {
        jp: '道に迷ってしまいました。',
        kana: 'みちにまよってしまいました。',
        romaji: 'Michi ni mayotte shimaimashita.',
        id: 'Saya tersesat di jalan.',
        rubyHtml:
          '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V4',
      kanji: '迷います',
      kana: 'まよいます',
      romaji: 'mayoimasu',
      idMeaning: 'Tersesat',
      contextSentence: {
        jp: '道に迷ってしまいました。',
        kana: 'みちにまよってしまいました。',
        romaji: 'Michi ni mayotte shimaimashita.',
        id: 'Saya tersesat di jalan.',
        rubyHtml:
          '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V5',
      kanji: '目',
      kana: 'め',
      romaji: 'me',
      idMeaning: 'Mata',
      contextSentence: {
        jp: '目の前に郵便局があります。',
        kana: 'めのまえにゆうびんきょくがあります。',
        romaji: 'Me no mae ni yūbinkyoku ga arimasu.',
        id: 'Tepat di depan saya ada kantor pos.',
        rubyHtml:
          '<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>があります。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V6',
      kanji: '前',
      kana: 'まえ',
      romaji: 'mae',
      idMeaning: 'Depan',
      contextSentence: {
        jp: '目の前に郵便局があります。',
        kana: 'めのまえにゆうびんきょくがあります。',
        romaji: 'Me no mae ni yūbinkyoku ga arimasu.',
        id: 'Tepat di depan saya ada kantor pos.',
        rubyHtml:
          '<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>があります。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V7',
      kanji: '郵便局',
      kana: 'ゆうびんきょく',
      romaji: 'yūbinkyoku',
      idMeaning: 'Kantor pos',
      contextSentence: {
        jp: '目の前に郵便局があります。',
        kana: 'めのまえにゆうびんきょくがあります。',
        romaji: 'Me no mae ni yūbinkyoku ga arimasu.',
        id: 'Tepat di depan saya ada kantor pos.',
        rubyHtml:
          '<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>があります。',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-V8',
      kanji: '今',
      kana: 'いま',
      romaji: 'ima',
      idMeaning: 'Sekarang',
      contextSentence: {
        jp: '今、どこ？',
        kana: 'いま、どこ？',
        romaji: 'Ima, doko?',
        id: 'Sekarang di mana?',
        rubyHtml:
          '<ruby>今<rt>いま</rt></ruby>、どこ？',
      },
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L18-GQ1',
        question: 'Mengapa Anna menelepon Sakura?',
        options: [
          'Karena tersesat',
          'Karena ingin membeli buku',
          'Karena lupa membawa dompet',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata 道に迷ってしまいました — saya tersesat di jalan.',
        sourceRef: 'NHK L18 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L18-GQ2',
        question: 'Di mana Anna menunggu?',
        options: [
          'Di depan kantor pos',
          'Di dalam toko buku',
          'Di stasiun',
        ],
        correctIndex: 0,
        explanation:
          'Anna menyebut 目の前に郵便局があります — tepat di depannya ada kantor pos.',
        sourceRef: 'NHK L18 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L18-DQ1',
        question: 'Apa yang Sakura tanyakan pertama?',
        options: ['Sekarang di mana', 'Sedang apa', 'Mau ke mana'],
        correctIndex: 0,
        explanation:
          'Sakura bertanya 今、どこ？ — sekarang di mana?',
        sourceRef: 'NHK L18 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L18-DQ2',
        question: 'Apa yang Sakura minta Anna lakukan?',
        options: [
          'Tetap berada di tempat itu',
          'Kembali ke toko buku',
          'Naik taksi',
        ],
        correctIndex: 0,
        explanation:
          'Sakura berkata そこにいて — tetaplah berada di sana.',
        sourceRef: 'NHK L18 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '道に迷ってしまいました。',
        kana: 'みちにまよってしまいました。',
        romaji: 'Michi ni mayotte shimaimashita.',
        id: 'Saya tersesat di jalan.',
        rubyHtml:
          '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。',
      },
      attribution:
        'Kutipan pendek Pelajaran 18 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L18-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 道 [ ... ] 迷ってしまいました。',
      options: ['に (ni)', 'を (o)', 'で (de)'],
      correctAnswer: 'に (ni)',
      explanation:
        '迷う memakai に untuk keadaan yang dialami: 道に迷う berarti tersesat di jalan.',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-EX2',
      type: 'sentence_order',
      prompt: 'Susun kalimat yang Anna ucapkan tentang lokasi kantor pos.',
      correctAnswer: [
        'め の まえ に ゆうびんきょく が あります',
        'めのまえにゆうびんきょくがあります',
      ],
      explanation:
        'Urutannya: 目の前 + に + 郵便局 + が + あります.',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-EX3',
      type: 'audio_meaning',
      prompt:
        'Kamu tidak sengaja ketinggalan dompet. Kalimat mana yang menyatakan penyesalan itu?',
      options: [
        '財布を忘れてしまいました',
        '財布を忘れましたか',
        '財布を忘れてください',
      ],
      correctAnswer: '財布を忘れてしまいました',
      explanation:
        'Bentuk TE + しまいました menambahkan nuansa "terlanjur" atau menyesal. 忘れましたか hanya pertanyaan biasa.',
      sourceRef: 'NHK L18 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya tersesat di jalan."',
      correctAnswer: ['道に迷ってしまいました', 'みちにまよってしまいました'],
      explanation:
        'Gunakan 道に迷って, lalu tutup dengan しまいました untuk nuansa tidak sengaja.',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 迷います (tersesat) menjadi bentuk TE + しまいました.',
      correctAnswer: ['迷ってしまいました', 'まよってしまいました'],
      explanation:
        'Bentuk TE dari 迷います adalah 迷って, lalu ditambah しまいました.',
      sourceRef: 'NHK L18 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu terpisah dari teman di kota yang belum kamu kenal. Telepon temanmu, bilang kamu tersesat, sebutkan patokan di sekitarmu, lalu ikuti instruksinya.',
    instructions: [
      'Buka telepon dengan もしもし.',
      'Minta bantuan dengan 助けてください.',
      'Katakan tersesat dengan 道に迷ってしまいました.',
      'Sebutkan patokan dengan 目の前に...があります.',
    ],
    modelAnswer: {
      jp: 'もしもし、さくらさん。助けてください。道に迷ってしまいました。目の前に郵便局があります。',
      kana: 'もしもし、さくらさん。たすけてください。みちにまよってしまいました。めのまえにゆうびんきょくがあります。',
      romaji:
        'Moshimoshi, Sakura-san. Tasukete kudasai. Michi ni mayotte shimaimashita. Me no mae ni yūbinkyoku ga arimasu.',
      id: 'Halo, Sakura. Tolong bantu saya. Saya tersesat di jalan. Tepat di depan saya ada kantor pos.',
      rubySegments: [
        { text: 'もしもし、さくらさん。' },
        { text: '助', reading: 'たす' },
        { text: 'けてください。' },
        { text: '道', reading: 'みち' },
        { text: 'に' },
        { text: '迷', reading: 'まよ' },
        { text: 'ってしまいました。' },
        { text: '目', reading: 'め' },
        { text: 'の' },
        { text: '前', reading: 'まえ' },
        { text: 'に' },
        { text: '郵便局', reading: 'ゆうびんきょく' },
        { text: 'があります。' },
      ],
      rubyHtml:
        'もしもし、さくらさん。<ruby>助<rt>たす</rt></ruby>けてください。<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>があります。',
    },
    selfCheckList: [
      'Membuka telepon dengan もしもし.',
      'Memakai 助けてください untuk meminta bantuan.',
      'Menyatakan penyesalan dengan てしまいました.',
      'Menyebut posisi dengan 目の前に...があります.',
    ],
    sourceRef: 'NHK L18 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L18-RC1',
      lessonId: 'L18',
      front: 'もしもし',
      back: 'Halo (di telepon)',
      type: 'vocab',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC2',
      lessonId: 'L18',
      front: '助けます (たすけます)',
      back: 'Menolong',
      type: 'vocab',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC3',
      lessonId: 'L18',
      front: '道 (みち)',
      back: 'Jalan',
      type: 'vocab',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC4',
      lessonId: 'L18',
      front: '迷います (まよいます)',
      back: 'Tersesat',
      type: 'vocab',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC5',
      lessonId: 'L18',
      front: '郵便局 (ゆうびんきょく)',
      back: 'Kantor pos',
      type: 'vocab',
      sourceRef: 'NHK L18 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC6',
      lessonId: 'L18',
      front: 'Pola tindakan tidak disengaja',
      back: '[kata kerja bentuk TE] しまいました — 迷ってしまいました',
      type: 'grammar',
      sourceRef: 'NHK L18 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC7',
      lessonId: 'L18',
      front: 'Pola menyebut posisi',
      back: '[benda] の 前 / 後ろ / 隣 に あります',
      type: 'grammar',
      sourceRef: 'NHK L18 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC8',
      lessonId: 'L18',
      front: 'Dengarkan dialog resmi NHK L18. Di mana Anna?',
      back: '目の前に郵便局があります — tepat di depan kantor pos.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/18-id-le_01.mp3',
      sourceRef: 'NHK L18 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L18-RC9',
      lessonId: 'L18',
      front: 'Praktikkan menelepon teman saat tersesat.',
      back: 'もしもし、助けてください。道に迷ってしまいました。',
      type: 'output',
      sourceRef: 'NHK L18 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
