import { Lesson } from '../../types';

export const lesson16: Lesson = {
  id: 'L16',
  order: 16,
  title: {
    jp: '階段を上がって、右に行ってください',
    kana: 'かいだんをあがって、みぎにいってください',
    romaji: 'Kaidan o agatte, migi ni itte kudasai',
    id: 'Naik tangga, lalu belok kanan',
    rubySegments: [
      { text: '階段', reading: 'かいだん' },
      { text: 'を' },
      { text: '上が', reading: 'あが' },
      { text: 'って、' },
      { text: '右', reading: 'みぎ' },
      { text: 'に' },
      { text: '行', reading: 'い' },
      { text: 'ってください' },
    ],
    rubyHtml:
      '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください',
  },
  situationSummary:
    'Anna datang ke toko buku di Shinjuku bersama teman-temannya. Ia bertanya kepada pegawai toko di mana bagian penjualan manga, lalu pegawai itu menyebut lantainya dan memberi dua langkah arah.',
  pdfPage: 21,
  printedPage: 20,
  situationCategories: ['Perbelanjaan & Restoran', 'Bepergian & Berjalan-jalan'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/16.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/16-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan letak suatu bagian di toko dengan [tempat] wa doko desu ka.',
    'Saya bisa memberi petunjuk dua langkah dengan menyambung kata kerja bentuk TE.',
  ],
  grammarPoints: [
    {
      id: 'L16-GP1',
      title: 'BENTUK TE UNTUK URUTAN TINDAKAN',
      pattern: '[kata kerja bentuk TE]、[kata kerja]',
      explanationId:
        'Bentuk TE bisa menyambung dua tindakan yang terjadi berurutan. Kata kerja terakhir menentukan bentuk keseluruhan kalimat; di sini 行ってください membuat seluruh kalimat menjadi permintaan. 上がります berubah menjadi 上がって, dan 行きます menjadi 行って.',
      contrastNote:
        'Bahasa Indonesia memakai kata "lalu" atau "kemudian". Bahasa Jepang cukup menyambung kedua kata kerja dengan bentuk TE, tanpa kata penghubung tambahan.',
      examples: [
        {
          jp: '階段を上がって、右に行ってください。',
          kana: 'かいだんをあがって、みぎにいってください。',
          romaji: 'Kaidan o agatte, migi ni itte kudasai.',
          id: 'Naik tangga, lalu belok kanan.',
          rubySegments: [
            { text: '階段', reading: 'かいだん' },
            { text: 'を' },
            { text: '上が', reading: 'あが' },
            { text: 'って、' },
            { text: '右', reading: 'みぎ' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'ってください。' },
          ],
          rubyHtml:
            '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
        },
        {
          jp: '朝ご飯を食べて、学校へ行きます。',
          kana: 'あさごはんをたべて、がっこうへいきます。',
          romaji: 'Asagohan o tabete, gakkō e ikimasu.',
          id: 'Saya sarapan, lalu pergi ke sekolah.',
          rubySegments: [
            { text: '朝ご飯', reading: 'あさごはん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べて、' },
            { text: '学校', reading: 'がっこう' },
            { text: 'へ' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          rubyHtml:
            '<ruby>朝ご飯<rt>あさごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べて、<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
        },
        {
          jp: '窓を開けて、掃除をします。',
          kana: 'まどをあけて、そうじをします。',
          romaji: 'Mado o akete, sōji o shimasu.',
          id: 'Saya membuka jendela, lalu membersihkan ruangan.',
          rubySegments: [
            { text: '窓', reading: 'まど' },
            { text: 'を' },
            { text: '開', reading: 'あ' },
            { text: 'けて、' },
            { text: '掃除', reading: 'そうじ' },
            { text: 'を' },
            { text: 'します。' },
          ],
          rubyHtml:
            '<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けて、<ruby>掃除<rt>そうじ</rt></ruby>をします。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L16 Tata Bahasa p. 20',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-GP2',
      title: 'NI UNTUK LETAK KEBERADAAN',
      pattern: '[tempat] ni [benda] ga arimasu / [orang] ga imasu',
      explanationId:
        'Kalau kata kerjanya あります (ada, untuk benda) atau います (ada, untuk orang dan hewan), partikel に menandai tempat benda itu berada. マンガ売り場は２階にあります berarti bagian manga ada di lantai dua. Jangan tertukar dengan で, yang menandai tempat berlangsungnya tindakan.',
      contrastNote:
        'Bahasa Indonesia memakai "di" untuk tempat berada maupun tempat beraktivitas. Bahasa Jepang membedakannya: に untuk keberadaan, で untuk tindakan.',
      examples: [
        {
          jp: 'マンガ売り場は２階にあります。',
          kana: 'まんがうりばはにかいにあります。',
          romaji: 'Manga uriba wa nikai ni arimasu.',
          id: 'Bagian manga ada di lantai dua.',
          rubySegments: [
            { text: 'マンガ' },
            { text: '売り場', reading: 'うりば' },
            { text: 'は' },
            { text: '２階', reading: 'にかい' },
            { text: 'に' },
            { text: 'あります。' },
          ],
          rubyHtml:
            'マンガ<ruby>売り場<rt>うりば</rt></ruby>は<ruby>２階<rt>にかい</rt></ruby>にあります。',
        },
        {
          jp: 'アンナさんは今、駅にいます。',
          kana: 'アンナさんはいま、えきにいます。',
          romaji: 'Anna-san wa ima, eki ni imasu.',
          id: 'Anna sekarang ada di stasiun.',
          rubySegments: [
            { text: 'アンナさんは' },
            { text: '今', reading: 'いま' },
            { text: '、' },
            { text: '駅', reading: 'えき' },
            { text: 'に' },
            { text: 'います。' },
          ],
          rubyHtml:
            'アンナさんは<ruby>今<rt>いま</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>にいます。',
        },
        {
          jp: '郵便局は駅の前にあります。',
          kana: 'ゆうびんきょくはえきのまえにあります。',
          romaji: 'Yūbinkyoku wa eki no mae ni arimasu.',
          id: 'Kantor pos ada di depan stasiun.',
          rubySegments: [
            { text: '郵便局', reading: 'ゆうびんきょく' },
            { text: 'は' },
            { text: '駅', reading: 'えき' },
            { text: 'の' },
            { text: '前', reading: 'まえ' },
            { text: 'に' },
            { text: 'あります。' },
          ],
          rubyHtml:
            '<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>にあります。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L16 Sensei Oshiete p. 20',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L16-V1',
      kana: 'いらっしゃいませ',
      romaji: 'irasshaimase',
      idMeaning: 'Selamat datang (sapaan pegawai toko)',
      contextSentence: {
        jp: 'いらっしゃいませ。',
        kana: 'いらっしゃいませ。',
        romaji: 'Irasshaimase.',
        id: 'Selamat datang.',
        rubyHtml: 'いらっしゃいませ。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V2',
      kanji: '売り場',
      kana: 'うりば',
      romaji: 'uriba',
      idMeaning: 'Bagian penjualan / area jual',
      contextSentence: {
        jp: 'あのう、マンガ売り場はどこですか。',
        kana: 'あのう、まんがうりばはどこですか。',
        romaji: 'Anō, manga uriba wa doko desu ka.',
        id: 'Permisi, di manakah bagian penjualan manga?',
        rubyHtml:
          'あのう、マンガ<ruby>売り場<rt>うりば</rt></ruby>はどこですか。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V3',
      kanji: '２階',
      kana: 'にかい',
      romaji: 'nikai',
      idMeaning: 'Lantai dua',
      contextSentence: {
        jp: '２階です。',
        kana: 'にかいです。',
        romaji: 'Nikai desu.',
        id: 'Di lantai dua.',
        rubyHtml: '<ruby>２階<rt>にかい</rt></ruby>です。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V4',
      kanji: '階段',
      kana: 'かいだん',
      romaji: 'kaidan',
      idMeaning: 'Tangga',
      contextSentence: {
        jp: '階段を上がって、右に行ってください。',
        kana: 'かいだんをあがって、みぎにいってください。',
        romaji: 'Kaidan o agatte, migi ni itte kudasai.',
        id: 'Naik tangga, lalu belok kanan.',
        rubyHtml:
          '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V5',
      kanji: '上がります',
      kana: 'あがります',
      romaji: 'agarimasu',
      idMeaning: 'Naik',
      contextSentence: {
        jp: '階段を上がって、右に行ってください。',
        kana: 'かいだんをあがって、みぎにいってください。',
        romaji: 'Kaidan o agatte, migi ni itte kudasai.',
        id: 'Naik tangga, lalu belok kanan.',
        rubyHtml:
          '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V6',
      kanji: '右',
      kana: 'みぎ',
      romaji: 'migi',
      idMeaning: 'Kanan',
      contextSentence: {
        jp: '階段を上がって、右に行ってください。',
        kana: 'かいだんをあがって、みぎにいってください。',
        romaji: 'Kaidan o agatte, migi ni itte kudasai.',
        id: 'Naik tangga, lalu belok kanan.',
        rubyHtml:
          '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V7',
      kanji: '行きます',
      kana: 'いきます',
      romaji: 'ikimasu',
      idMeaning: 'Pergi',
      contextSentence: {
        jp: '階段を上がって、右に行ってください。',
        kana: 'かいだんをあがって、みぎにいってください。',
        romaji: 'Kaidan o agatte, migi ni itte kudasai.',
        id: 'Naik tangga, lalu belok kanan.',
        rubyHtml:
          '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-V8',
      kana: 'あのう',
      romaji: 'anō',
      idMeaning: 'Permisi (pembuka saat menyapa)',
      contextSentence: {
        jp: 'あのう、マンガ売り場はどこですか。',
        kana: 'あのう、まんがうりばはどこですか。',
        romaji: 'Anō, manga uriba wa doko desu ka.',
        id: 'Permisi, di manakah bagian penjualan manga?',
        rubyHtml:
          'あのう、マンガ<ruby>売り場<rt>うりば</rt></ruby>はどこですか。',
      },
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L16-GQ1',
        question: 'Apa yang Anna cari di toko buku?',
        options: [
          'Bagian penjualan manga',
          'Kafe di lantai dua',
          'Tangga darurat',
        ],
        correctIndex: 0,
        explanation:
          'Anna bertanya マンガ売り場はどこですか — di manakah bagian penjualan manga?',
        sourceRef: 'NHK L16 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L16-GQ2',
        question: 'Di lantai berapa bagian manga berada?',
        options: ['Lantai dua', 'Lantai satu', 'Lantai tiga'],
        correctIndex: 0,
        explanation:
          'Pegawai menjawab ２階です — di lantai dua.',
        sourceRef: 'NHK L16 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L16-DQ1',
        question: 'Apa langkah pertama yang diminta pegawai?',
        options: ['Naik tangga', 'Belok kiri', 'Keluar dari toko'],
        correctIndex: 0,
        explanation:
          'Pegawai berkata 階段を上がって — naik tangga lebih dulu.',
        sourceRef: 'NHK L16 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L16-DQ2',
        question: 'Ke arah mana Anna harus berjalan setelah naik tangga?',
        options: ['Kanan', 'Kiri', 'Lurus terus'],
        correctIndex: 0,
        explanation:
          'Pegawai berkata 右に行ってください — silakan pergi ke kanan.',
        sourceRef: 'NHK L16 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '階段を上がって、右に行ってください。',
        kana: 'かいだんをあがって、みぎにいってください。',
        romaji: 'Kaidan o agatte, migi ni itte kudasai.',
        id: 'Naik tangga, lalu belok kanan.',
        rubyHtml:
          '<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
      },
      attribution:
        'Kutipan pendek Pelajaran 16 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L16-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 階段 [ ... ] 上がって、右に行ってください。',
      options: ['を (o)', 'に (ni)', 'で (de)'],
      correctAnswer: 'を (o)',
      explanation:
        'Partikel を menandai jalur atau objek yang dilalui saat bergerak: 階段を上がる berarti naik tangga.',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-EX2',
      type: 'sentence_order',
      prompt: 'Susun pertanyaan yang Anna ucapkan kepada pegawai toko.',
      correctAnswer: [
        'まんが うりば は どこ です か',
        'まんがうりばはどこですか',
      ],
      explanation:
        'Urutannya: マンガ売り場 + は + どこ + です + か.',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-EX3',
      type: 'audio_meaning',
      prompt:
        'Pegawai ingin menyuruh Anna naik tangga lalu belok kanan. Kalimat mana yang tepat?',
      options: [
        '階段を上がって、右に行ってください',
        '階段を上がって、右に来てください',
        '階段で上がって、右を行ってください',
      ],
      correctAnswer: '階段を上がって、右に行ってください',
      explanation:
        'Bentuk TE menyambung dua tindakan. に menandai arah, dan ください menutup permintaan.',
      sourceRef: 'NHK L16 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Bagian manga ada di lantai dua."',
      correctAnswer: [
        'マンガ売り場は２階にあります',
        'まんがうりばはにかいにあります',
      ],
      explanation:
        'Tempat keberadaan memakai に, dan benda memakai があります.',
      sourceRef: 'NHK L16 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 上がります (naik) menjadi bentuk TE.',
      correctAnswer: ['上がって', 'あがって'],
      explanation:
        'Bentuk TE dari 上がります adalah 上がって. Bentuk ini dipakai untuk menyambung tindakan berikutnya.',
      sourceRef: 'NHK L16 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu bekerja di toko buku. Seorang pelanggan bertanya di mana bagian manga. Jelaskan lantainya, lalu beri dua langkah arah yang jelas.',
    instructions: [
      'Sapa pelanggan dengan いらっしゃいませ.',
      'Sebut lantainya dengan ２階です.',
      'Beri arah dengan 階段を上がって、右に行ってください.',
      'Pastikan dua tindakan disambung dengan bentuk TE.',
    ],
    modelAnswer: {
      jp: 'いらっしゃいませ。マンガ売り場は２階にあります。階段を上がって、右に行ってください。',
      kana: 'いらっしゃいませ。まんがうりばはにかいにあります。かいだんをあがって、みぎにいってください。',
      romaji:
        'Irasshaimase. Manga uriba wa nikai ni arimasu. Kaidan o agatte, migi ni itte kudasai.',
      id: 'Selamat datang. Bagian manga ada di lantai dua. Naik tangga, lalu belok kanan.',
      rubySegments: [
        { text: 'いらっしゃいませ。マンガ' },
        { text: '売り場', reading: 'うりば' },
        { text: 'は' },
        { text: '２階', reading: 'にかい' },
        { text: 'にあります。' },
        { text: '階段', reading: 'かいだん' },
        { text: 'を' },
        { text: '上が', reading: 'あが' },
        { text: 'って、' },
        { text: '右', reading: 'みぎ' },
        { text: 'に' },
        { text: '行', reading: 'い' },
        { text: 'ってください。' },
      ],
      rubyHtml:
        'いらっしゃいませ。マンガ<ruby>売り場<rt>うりば</rt></ruby>は<ruby>２階<rt>にかい</rt></ruby>にあります。<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上が<rt>あが</rt></ruby>って、<ruby>右<rt>みぎ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってください。',
    },
    selfCheckList: [
      'Membuka percakapan dengan いらっしゃいませ.',
      'Menyebut letak dengan pola [tempat] に あります.',
      'Menyambung 上がって dan 行って dengan benar.',
      'Menutup permintaan dengan ください.',
    ],
    sourceRef: 'NHK L16 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L16-RC1',
      lessonId: 'L16',
      front: 'いらっしゃいませ',
      back: 'Selamat datang (sapaan pegawai toko)',
      type: 'vocab',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC2',
      lessonId: 'L16',
      front: '売り場 (うりば)',
      back: 'Bagian penjualan / area jual',
      type: 'vocab',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC3',
      lessonId: 'L16',
      front: '階段 (かいだん)',
      back: 'Tangga',
      type: 'vocab',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC4',
      lessonId: 'L16',
      front: '上がります (あがります)',
      back: 'Naik',
      type: 'vocab',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC5',
      lessonId: 'L16',
      front: '右 (みぎ)',
      back: 'Kanan',
      type: 'vocab',
      sourceRef: 'NHK L16 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC6',
      lessonId: 'L16',
      front: 'Pola menyambung dua tindakan',
      back: '[kata kerja bentuk TE]、[kata kerja] — 上がって、行ってください',
      type: 'grammar',
      sourceRef: 'NHK L16 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC7',
      lessonId: 'L16',
      front: 'Partikel untuk letak keberadaan',
      back: '[tempat] に あります / います — ２階にあります',
      type: 'grammar',
      sourceRef: 'NHK L16 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC8',
      lessonId: 'L16',
      front: 'Dengarkan dialog resmi NHK L16. Di mana bagian manga?',
      back: '２階です。階段を上がって、右に行ってください。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/16-id-le_01.mp3',
      sourceRef: 'NHK L16 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L16-RC9',
      lessonId: 'L16',
      front: 'Praktikkan memberi arah dua langkah di toko.',
      back: 'マンガ売り場は２階にあります。階段を上がって、右に行ってください。',
      type: 'output',
      sourceRef: 'NHK L16 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
