import { Lesson } from '../../types';

export const lesson25: Lesson = {
  id: 'L25',
  order: 25,
  title: {
    jp: '机の下に入れ',
    kana: 'つくえのしたにいれ',
    romaji: 'Tsukue no shita ni haire',
    id: 'Masuklah ke bawah meja',
    rubySegments: [
      { text: '机', reading: 'つくえ' },
      { text: 'の' },
      { text: '下', reading: 'した' },
      { text: 'に' },
      { text: '入', reading: 'はい' },
      { text: 'れ' },
    ],
    rubyHtml:
      '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ',
  },
  situationSummary:
    'Saat Anna mengikuti kelas bahasa Jepang, bangunan mulai bergetar. Profesor Suzuki menyuruh semua orang tenang dan masuk ke bawah meja. Setelah guncangan mereda, Anna mengungkapkan betapa seringnya gempa terjadi di Jepang.',
  pdfPage: 30,
  printedPage: 29,
  situationCategories: ['Di universitas', 'Penyelesaian masalah'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/25.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/25-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa memberi perintah darurat dengan kata kerja bentuk imperatif.',
    'Saya bisa membedakan partikel wa (topik) dan ga (subjek) dalam kalimat sederhana.',
    'Saya bisa memahami ungkapan ~yō da sebagai "tampaknya" saat mendengar dialog.',
  ],
  grammarPoints: [
    {
      id: 'L25-GP1',
      title: 'BENTUK PERINTAH (IMPERATIF)',
      pattern: '[kata kerja bentuk MASU] → [bentuk perintah]',
      explanationId:
        'Bentuk perintah dipakai untuk memerintah secara langsung. Kata kerja golongan I: bunyi i sebelum ます berubah menjadi e — 入ります → 入れ, 行きます → 行け. Golongan II: buang ます lalu tambah ろ — 食べます → 食べろ. Pengecualian: します → しろ, 来ます → 来い. Bentuk ini kasar dan langsung, jadi wajar dipakai saat darurat, oleh guru, atau kepada teman dekat.',
      contrastNote:
        'Bahasa Indonesia memakai "masuk!" tanpa nuansa kasar. Bahasa Jepang bentuk imperatif terdengar memerintah; dalam situasi biasa, pilih 入ってください yang lebih sopan.',
      examples: [
        {
          jp: '机の下に入れ。',
          kana: 'つくえのしたにいれ。',
          romaji: 'Tsukue no shita ni haire.',
          id: 'Masuklah ke bawah meja.',
          rubySegments: [
            { text: '机', reading: 'つくえ' },
            { text: 'の' },
            { text: '下', reading: 'した' },
            { text: 'に' },
            { text: '入', reading: 'はい' },
            { text: 'れ。' },
          ],
          rubyHtml:
            '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。',
        },
        {
          jp: '早く来い。',
          kana: 'はやくこい。',
          romaji: 'Hayaku koi.',
          id: 'Cepat datang!',
          rubySegments: [
            { text: '早', reading: 'はや' },
            { text: 'く' },
            { text: '来', reading: 'こ' },
            { text: 'い。' },
          ],
          rubyHtml:
            '<ruby>早<rt>はや</rt></ruby>く<ruby>来<rt>こ</rt></ruby>い。',
        },
        {
          jp: '静かにしろ。',
          kana: 'しずかにしろ。',
          romaji: 'Shizuka ni shiro.',
          id: 'Diam!',
          rubySegments: [
            { text: '静', reading: 'しず' },
            { text: 'かにしろ。' },
          ],
          rubyHtml:
            '<ruby>静<rt>しず</rt></ruby>かにしろ。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L25 Sensei Oshiete p. 29',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-GP2',
      title: 'PARTIKEL WA (TOPIK) DAN GA (SUBJEK)',
      pattern: '[topik] wa [subjek] ga [predikat]',
      explanationId:
        'Partikel は menandai topik, yaitu hal yang sedang dibicarakan. Partikel が menandai unsur yang menjadi fokus predikat, misalnya sifat (長い, 多い) atau kesukaan (好き). Pada 象は鼻が長い, topiknya gajah, sedangkan subjek dari 長い adalah 鼻. Pada 日本は地震が多い, topiknya Jepang, dan subjek dari 多い adalah 地震.',
      contrastNote:
        'Bahasa Indonesia juga bisa menyusun "gajah, hidungnya panjang". Bahasa Jepang menandai topik dengan は dan subjek dengan が secara eksplisit, sehingga perannya lebih mudah dikenali.',
      examples: [
        {
          jp: '象は鼻が長い。',
          kana: 'ぞうははながながい。',
          romaji: 'Zō wa hana ga nagai.',
          id: 'Gajah hidungnya panjang.',
          rubySegments: [
            { text: '象', reading: 'ぞう' },
            { text: 'は' },
            { text: '鼻', reading: 'はな' },
            { text: 'が' },
            { text: '長', reading: 'なが' },
            { text: 'い。' },
          ],
          rubyHtml:
            '<ruby>象<rt>ぞう</rt></ruby>は<ruby>鼻<rt>はな</rt></ruby>が<ruby>長<rt>なが</rt></ruby>い。',
        },
        {
          jp: '日本は地震が多いです。',
          kana: 'にほんはじしんがおおいです。',
          romaji: 'Nihon wa jishin ga ōi desu.',
          id: 'Jepang banyak gempa.',
          rubySegments: [
            { text: '日本', reading: 'にほん' },
            { text: 'は' },
            { text: '地震', reading: 'じしん' },
            { text: 'が' },
            { text: '多', reading: 'おお' },
            { text: 'いです。' },
          ],
          rubyHtml:
            '<ruby>日本<rt>にほん</rt></ruby>は<ruby>地震<rt>じしん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです。',
        },
        {
          jp: '私はコーヒーが好きです。',
          kana: 'わたしはコーヒーがすきです。',
          romaji: 'Watashi wa kōhī ga suki desu.',
          id: 'Saya suka kopi.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'はコーヒーが' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>はコーヒーが<ruby>好<rt>す</rt></ruby>きです。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L25 Tata Bahasa p. 29',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L25-V1',
      kanji: '地震',
      kana: 'じしん',
      romaji: 'jishin',
      idMeaning: 'Gempa bumi',
      contextSentence: {
        jp: '地震だ。みんな、落ち着いて。',
        kana: 'じしんだ。みんな、おちついて。',
        romaji: 'Jishin da. Minna, ochitsuite.',
        id: 'Gempa. Semuanya, tetap tenang.',
        rubyHtml:
          '<ruby>地震<rt>じしん</rt></ruby>だ。みんな、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V2',
      kanji: '落ち着きます',
      kana: 'おちつきます',
      romaji: 'ochitsukimasu',
      idMeaning: 'Tenang',
      contextSentence: {
        jp: '地震だ。みんな、落ち着いて。',
        kana: 'じしんだ。みんな、おちついて。',
        romaji: 'Jishin da. Minna, ochitsuite.',
        id: 'Gempa. Semuanya, tetap tenang.',
        rubyHtml:
          '<ruby>地震<rt>じしん</rt></ruby>だ。みんな、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V3',
      kanji: '机',
      kana: 'つくえ',
      romaji: 'tsukue',
      idMeaning: 'Meja',
      contextSentence: {
        jp: '机の下に入れ。',
        kana: 'つくえのしたにいれ。',
        romaji: 'Tsukue no shita ni haire.',
        id: 'Masuklah ke bawah meja.',
        rubyHtml:
          '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V4',
      kanji: '下',
      kana: 'した',
      romaji: 'shita',
      idMeaning: 'Bawah',
      contextSentence: {
        jp: '机の下に入れ。',
        kana: 'つくえのしたにいれ。',
        romaji: 'Tsukue no shita ni haire.',
        id: 'Masuklah ke bawah meja.',
        rubyHtml:
          '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V5',
      kanji: '入ります',
      kana: 'はいります',
      romaji: 'hairimasu',
      idMeaning: 'Masuk',
      contextSentence: {
        jp: '机の下に入れ。',
        kana: 'つくえのしたにいれ。',
        romaji: 'Tsukue no shita ni haire.',
        id: 'Masuklah ke bawah meja.',
        rubyHtml:
          '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V6',
      kanji: '揺れ',
      kana: 'ゆれ',
      romaji: 'yure',
      idMeaning: 'Guncangan',
      contextSentence: {
        jp: '揺れは収まったようだ。',
        kana: 'ゆれはおさまったようだ。',
        romaji: 'Yure wa osamatta yō da.',
        id: 'Guncangannya tampak sudah mereda.',
        rubyHtml:
          '<ruby>揺<rt>ゆ</rt></ruby>れは<ruby>収<rt>おさ</rt></ruby>まったようだ。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V7',
      kanji: '収まります',
      kana: 'おさまります',
      romaji: 'osamarimasu',
      idMeaning: 'Mereda',
      contextSentence: {
        jp: '揺れは収まったようだ。',
        kana: 'ゆれはおさまったようだ。',
        romaji: 'Yure wa osamatta yō da.',
        id: 'Guncangannya tampak sudah mereda.',
        rubyHtml:
          '<ruby>揺<rt>ゆ</rt></ruby>れは<ruby>収<rt>おさ</rt></ruby>まったようだ。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-V8',
      kana: 'びっくりします',
      romaji: 'bikkuri shimasu',
      idMeaning: 'Terkejut',
      contextSentence: {
        jp: 'びっくりした。',
        kana: 'びっくりした。',
        romaji: 'Bikkuri shita.',
        id: 'Saya terkejut.',
        rubyHtml: 'びっくりした。',
      },
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L25-GQ1',
        question: 'Apa yang terjadi saat kelas berlangsung?',
        options: ['Gempa bumi', 'Kebakaran', 'Hujan deras'],
        correctIndex: 0,
        explanation:
          'Profesor berkata 地震だ — gempa!',
        sourceRef: 'NHK L25 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L25-GQ2',
        question: 'Apa instruksi pertama profesor?',
        options: [
          'Tenang dan masuk ke bawah meja',
          'Keluar dari gedung segera',
          'Membuka semua jendela',
        ],
        correctIndex: 0,
        explanation:
          'Profesor berkata みんな、落ち着いて。机の下に入れ — semuanya tenang, masuk ke bawah meja.',
        sourceRef: 'NHK L25 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L25-DQ1',
        question: 'Apa yang profesor katakan setelah guncangan mereda?',
        options: [
          'Guncangannya tampak sudah mereda',
          'Gempa akan datang lagi',
          'Kelas dilanjutkan di luar',
        ],
        correctIndex: 0,
        explanation:
          'Profesor berkata 揺れは収まったようだ — guncangannya tampak sudah mereda. ようだ di sini berarti "tampaknya"; pola ini hanya perlu dikenali saat mendengar.',
        sourceRef: 'NHK L25 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L25-DQ2',
        question: 'Bagaimana reaksi Anna?',
        options: ['Terkejut', 'Marah', 'Tertawa'],
        correctIndex: 0,
        explanation:
          'Anna berkata びっくりした — saya terkejut.',
        sourceRef: 'NHK L25 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '机の下に入れ。',
        kana: 'つくえのしたにいれ。',
        romaji: 'Tsukue no shita ni haire.',
        id: 'Masuklah ke bawah meja.',
        rubyHtml:
          '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。',
      },
      attribution:
        'Kutipan pendek Pelajaran 25 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L25-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi perintah darurat berikut: 机の下 [ ... ] 入れ。',
      options: ['に (ni)', 'を (o)', 'で (de)'],
      correctAnswer: 'に (ni)',
      explanation:
        'Partikel に menandai tujuan atau tempat masuk: 机の下に入れ — masuk ke bawah meja.',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-EX2',
      type: 'sentence_order',
      prompt: 'Susun perintah profesor saat gempa.',
      correctAnswer: ['机 の 下 に 入れ', '机の下に入れ'],
      explanation:
        'Urutannya: 机 + の + 下 + に + 入れ. 入れ adalah bentuk perintah dari 入ります.',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengatakan "Masuklah ke bawah meja!" Mana yang tepat?',
      options: [
        '机の下に入れ',
        '机の下に入ってください',
        '机の下に入ります',
      ],
      correctAnswer: '机の下に入れ',
      explanation:
        'Bentuk perintah darurat adalah 入れ. 入ってください lebih sopan dan tidak darurat; 入ります hanya pernyataan biasa.',
      sourceRef: 'NHK L25 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Gajah hidungnya panjang."',
      correctAnswer: ['象は鼻が長いです', 'ぞうははながながいです'],
      explanation:
        'Topik 象 ditandai は, subjek 鼻 ditandai が: 象は鼻が長いです.',
      sourceRef: 'NHK L25 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 入ります (masuk) menjadi bentuk perintah.',
      correctAnswer: ['入れ', 'はいれ'],
      explanation:
        'Kata kerja golongan I: bunyi i sebelum ます berubah menjadi e. 入ります → 入れ.',
      sourceRef: 'NHK L25 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu berada di kelas saat gempa. Beri instruksi darurat kepada teman-teman, lalu tenangkan mereka dengan kalimat tentang seringnya gempa di Jepang.',
    instructions: [
      'Mulai dengan 地震だ。',
      'Minta semua tenang dengan みんな、落ち着いて。',
      'Beri perintah dengan 机の下に入れ。',
      'Tambahkan 日本は地震が多いですね。',
    ],
    modelAnswer: {
      jp: '地震だ。みんな、落ち着いて。机の下に入れ。日本は地震が多いですね。',
      kana: 'じしんだ。みんな、おちついて。つくえのしたにいれ。にほんはじしんがおおいですね。',
      romaji:
        'Jishin da. Minna, ochitsuite. Tsukue no shita ni haire. Nihon wa jishin ga ōi desu ne.',
      id: 'Gempa. Semuanya, tetap tenang. Masuklah ke bawah meja. Jepang memang sering gempa, ya.',
      rubySegments: [
        { text: '地震', reading: 'じしん' },
        { text: 'だ。みんな、' },
        { text: '落', reading: 'お' },
        { text: 'ち' },
        { text: '着', reading: 'つ' },
        { text: 'いて。' },
        { text: '机', reading: 'つくえ' },
        { text: 'の' },
        { text: '下', reading: 'した' },
        { text: 'に' },
        { text: '入', reading: 'はい' },
        { text: 'れ。' },
        { text: '日本', reading: 'にほん' },
        { text: 'は' },
        { text: '地震', reading: 'じしん' },
        { text: 'が' },
        { text: '多', reading: 'おお' },
        { text: 'いですね。' },
      ],
      rubyHtml:
        '<ruby>地震<rt>じしん</rt></ruby>だ。みんな、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて。<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れ。<ruby>日本<rt>にほん</rt></ruby>は<ruby>地震<rt>じしん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いですね。',
    },
    selfCheckList: [
      'Memakai bentuk perintah 入れ hanya untuk situasi darurat.',
      'Menandai topik Jepang dengan は dan subjek 地震 dengan が.',
      'Mengucapkan 落ち着いて dengan nada menenangkan.',
      'Tidak menambahkan ください pada bentuk perintah darurat.',
    ],
    sourceRef: 'NHK L25 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L25-RC1',
      lessonId: 'L25',
      front: '地震 (じしん)',
      back: 'Gempa bumi',
      type: 'vocab',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC2',
      lessonId: 'L25',
      front: '落ち着きます (おちつきます)',
      back: 'Tenang',
      type: 'vocab',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC3',
      lessonId: 'L25',
      front: '机 (つくえ)',
      back: 'Meja',
      type: 'vocab',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC4',
      lessonId: 'L25',
      front: '下 (した)',
      back: 'Bawah',
      type: 'vocab',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC5',
      lessonId: 'L25',
      front: '揺れ (ゆれ)',
      back: 'Guncangan',
      type: 'vocab',
      sourceRef: 'NHK L25 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC6',
      lessonId: 'L25',
      front: 'Bentuk perintah kata kerja',
      back: 'golongan I: i → e (入れ) · golongan II: buang ます + ろ',
      type: 'grammar',
      sourceRef: 'NHK L25 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC7',
      lessonId: 'L25',
      front: 'Perbedaan WA dan GA',
      back: 'は = topik · が = subjek — 象は鼻が長い',
      type: 'particle',
      sourceRef: 'NHK L25 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC8',
      lessonId: 'L25',
      front: 'Dengarkan dialog resmi NHK L25. Apa instruksi profesor?',
      back: '机の下に入れ — masuklah ke bawah meja.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/25-id-le_01.mp3',
      sourceRef: 'NHK L25 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L25-RC9',
      lessonId: 'L25',
      front: 'Praktikkan memberi instruksi saat gempa.',
      back: '地震だ。みんな、落ち着いて。机の下に入れ。',
      type: 'output',
      sourceRef: 'NHK L25 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
