import { Lesson } from '../../types';

export const lesson19: Lesson = {
  id: 'L19',
  order: 19,
  title: {
    jp: 'よかった',
    kana: 'よかった',
    romaji: 'Yokatta',
    id: 'Syukurlah',
    rubySegments: [{ text: 'よかった' }],
    rubyHtml: 'よかった',
  },
  situationSummary:
    'Anna akhirnya bertemu lagi dengan Sakura dan Rodrigo. Ia meminta maaf karena sempat menghilang, lalu menceritakan bahwa kamera yang murah membuatnya lupa waktu.',
  pdfPage: 24,
  printedPage: 23,
  situationCategories: ['Bepergian & Berjalan-jalan'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/19.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/19-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa mengubah kata sifat ke bentuk lampau: 安い menjadi 安かった.',
    'Saya bisa menyampaikan alasan dengan ので dan membedakannya dari から.',
  ],
  grammarPoints: [
    {
      id: 'L19-GP1',
      title: 'BENTUK LAMPAU KATA SIFAT',
      pattern: 'kata sifat I: -i → -katta · kata sifat NA: + datta',
      explanationId:
        'Kata sifat juga berubah bentuk untuk masa lampau. Kata sifat I: buang い lalu tambah かった (安い → 安かった). Kata sifat NA: tambah だった (好き → 好きだった). いい tidak mengikuti pola biasa; bentuk lampaunya よかった.',
      contrastNote:
        'Bahasa Indonesia tidak mengubah kata sifat; "murah" tetap "murah". Bahasa Jepang menandai masa lampau pada kata sifatnya sendiri.',
      examples: [
        {
          jp: 'カメラが安かったので、つい見てしまいました。',
          kana: 'カメラがやすかったので、ついみてしまいました。',
          romaji:
            'Kamera ga yasukatta node, tsui mite shimaimashita.',
          id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
          rubySegments: [
            { text: 'カメラが' },
            { text: '安', reading: 'やす' },
            { text: 'かったので、つい' },
            { text: '見', reading: 'み' },
            { text: 'てしまいました。' },
          ],
          rubyHtml:
            'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
        },
        {
          jp: 'よかった。心配したよ。',
          kana: 'よかった。しんぱいしたよ。',
          romaji: 'Yokatta. Shinpai shita yo.',
          id: 'Syukurlah. Saya sampai khawatir, lho.',
          rubySegments: [
            { text: 'よかった。' },
            { text: '心配', reading: 'しんぱい' },
            { text: 'したよ。' },
          ],
          rubyHtml:
            'よかった。<ruby>心配<rt>しんぱい</rt></ruby>したよ。',
        },
        {
          jp: '昨日は寒かったです。',
          kana: 'きのうはさむかったです。',
          romaji: 'Kinō wa samukatta desu.',
          id: 'Kemarin dingin.',
          rubySegments: [
            { text: '昨日', reading: 'きのう' },
            { text: 'は' },
            { text: '寒', reading: 'さむ' },
            { text: 'かったです。' },
          ],
          rubyHtml:
            '<ruby>昨日<rt>きのう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>かったです。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L19 Tata Bahasa p. 23',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-GP2',
      title: 'NODE (karena)',
      pattern: '[alasan] node, [akibat]',
      explanationId:
        'ので menyatakan alasan dan terasa lebih lembut daripada から. Kata sifat I memakai bentuk biasa sebelum ので (安かったので). Kata benda dan kata sifat NA memakai なので (静かなので).',
      contrastNote:
        'から pada L14 terdengar lebih langsung dan subjektif. ので lebih halus dan sering dipakai saat meminta maaf atau menjelaskan keadaan.',
      examples: [
        {
          jp: 'カメラが安かったので、つい見てしまいました。',
          kana: 'カメラがやすかったので、ついみてしまいました。',
          romaji:
            'Kamera ga yasukatta node, tsui mite shimaimashita.',
          id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
          rubySegments: [
            { text: 'カメラが' },
            { text: '安', reading: 'やす' },
            { text: 'かったので、つい' },
            { text: '見', reading: 'み' },
            { text: 'てしまいました。' },
          ],
          rubyHtml:
            'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
        },
        {
          jp: '雨が降っているので、出かけません。',
          kana: 'あめがふっているので、でかけません。',
          romaji: 'Ame ga futte iru node, dekakemasen.',
          id: 'Karena sedang hujan, saya tidak keluar.',
          rubySegments: [
            { text: '雨', reading: 'あめ' },
            { text: 'が' },
            { text: '降', reading: 'ふ' },
            { text: 'っているので、' },
            { text: '出', reading: 'で' },
            { text: 'かけません。' },
          ],
          rubyHtml:
            '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っているので、<ruby>出<rt>で</rt></ruby>かけません。',
        },
        {
          jp: '明日は試験なので、今日は勉強します。',
          kana: 'あしたはしけんなので、きょうはべんきょうします。',
          romaji:
            'Ashita wa shiken na node, kyō wa benkyō shimasu.',
          id: 'Karena besok ujian, hari ini saya belajar.',
          rubySegments: [
            { text: '明日', reading: 'あした' },
            { text: 'は' },
            { text: '試験', reading: 'しけん' },
            { text: 'なので、' },
            { text: '今日', reading: 'きょう' },
            { text: 'は' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'します。' },
          ],
          rubyHtml:
            '<ruby>明日<rt>あした</rt></ruby>は<ruby>試験<rt>しけん</rt></ruby>なので、<ruby>今日<rt>きょう</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>します。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L19-V1',
      kana: 'よかった',
      romaji: 'yokatta',
      idMeaning: 'Syukurlah / baguslah',
      contextSentence: {
        jp: 'よかった。心配したよ。',
        kana: 'よかった。しんぱいしたよ。',
        romaji: 'Yokatta. Shinpai shita yo.',
        id: 'Syukurlah. Saya sampai khawatir, lho.',
        rubyHtml:
          'よかった。<ruby>心配<rt>しんぱい</rt></ruby>したよ。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V2',
      kanji: '心配',
      kana: 'しんぱい',
      romaji: 'shinpai',
      idMeaning: 'Khawatir',
      contextSentence: {
        jp: 'よかった。心配したよ。',
        kana: 'よかった。しんぱいしたよ。',
        romaji: 'Yokatta. Shinpai shita yo.',
        id: 'Syukurlah. Saya sampai khawatir, lho.',
        rubyHtml:
          'よかった。<ruby>心配<rt>しんぱい</rt></ruby>したよ。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V3',
      kana: 'ごめんなさい',
      romaji: 'gomennasai',
      idMeaning: 'Maaf',
      contextSentence: {
        jp: 'ごめんなさい。',
        kana: 'ごめんなさい。',
        romaji: 'Gomennasai.',
        id: 'Maaf.',
        rubyHtml: 'ごめんなさい。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V4',
      kana: 'カメラ',
      romaji: 'kamera',
      idMeaning: 'Kamera',
      contextSentence: {
        jp: 'カメラが安かったので、つい見てしまいました。',
        kana: 'カメラがやすかったので、ついみてしまいました。',
        romaji:
          'Kamera ga yasukatta node, tsui mite shimaimashita.',
        id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
        rubyHtml:
          'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V5',
      kanji: '安い',
      kana: 'やすい',
      romaji: 'yasui',
      idMeaning: 'Murah',
      contextSentence: {
        jp: 'カメラが安かったので、つい見てしまいました。',
        kana: 'カメラがやすかったので、ついみてしまいました。',
        romaji:
          'Kamera ga yasukatta node, tsui mite shimaimashita.',
        id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
        rubyHtml:
          'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V6',
      kana: 'ので',
      romaji: 'node',
      idMeaning: 'Karena (alasan yang halus)',
      contextSentence: {
        jp: 'カメラが安かったので、つい見てしまいました。',
        kana: 'カメラがやすかったので、ついみてしまいました。',
        romaji:
          'Kamera ga yasukatta node, tsui mite shimaimashita.',
        id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
        rubyHtml:
          'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V7',
      kana: 'つい',
      romaji: 'tsui',
      idMeaning: 'Tanpa sadar / tidak sengaja',
      contextSentence: {
        jp: 'カメラが安かったので、つい見てしまいました。',
        kana: 'カメラがやすかったので、ついみてしまいました。',
        romaji:
          'Kamera ga yasukatta node, tsui mite shimaimashita.',
        id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
        rubyHtml:
          'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-V8',
      kanji: '見ます',
      kana: 'みます',
      romaji: 'mimasu',
      idMeaning: 'Melihat',
      contextSentence: {
        jp: 'カメラが安かったので、つい見てしまいました。',
        kana: 'カメラがやすかったので、ついみてしまいました。',
        romaji:
          'Kamera ga yasukatta node, tsui mite shimaimashita.',
        id: 'Karena kameranya murah, saya tanpa sadar melihat-lihat.',
        rubyHtml:
          'カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
      },
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L19-GQ1',
        question: 'Siapa yang memanggil Anna?',
        options: ['Rodrigo', 'Sakura', 'Ibu asrama'],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata おーい、アンナさん — hei, Anna.',
        sourceRef: 'NHK L19 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L19-GQ2',
        question: 'Mengapa Anna tertinggal?',
        options: [
          'Karena melihat-lihat kamera murah',
          'Karena menunggu kereta',
          'Karena mencari buku',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata カメラが安かったので、つい見てしまいました — karena kameranya murah, ia tanpa sadar melihat-lihat.',
        sourceRef: 'NHK L19 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L19-DQ1',
        question: 'Apa yang Rodrigo rasakan?',
        options: ['Khawatir', 'Marah', 'Bingung'],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata 心配したよ — saya sampai khawatir.',
        sourceRef: 'NHK L19 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L19-DQ2',
        question: 'Apa yang Anna ucapkan untuk meminta maaf?',
        options: ['ごめんなさい', 'いらっしゃいませ', 'おやすみなさい'],
        correctIndex: 0,
        explanation:
          'Anna membuka penjelasannya dengan ごめんなさい — maaf.',
        sourceRef: 'NHK L19 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'よかった。心配したよ。',
        kana: 'よかった。しんぱいしたよ。',
        romaji: 'Yokatta. Shinpai shita yo.',
        id: 'Syukurlah. Saya sampai khawatir, lho.',
        rubyHtml:
          'よかった。<ruby>心配<rt>しんぱい</rt></ruby>したよ。',
      },
      attribution:
        'Kutipan pendek Pelajaran 19 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L19-EX1',
      type: 'cloze_particle',
      prompt:
        'Lengkapi kalimat berikut: カメラ [ ... ] 安かったので、つい見てしまいました。',
      options: ['が (ga)', 'を (o)', 'に (ni)'],
      correctAnswer: 'が (ga)',
      explanation:
        'Partikel が menandai subjek pada klausa kata sifat: kameranya yang murah.',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-EX2',
      type: 'sentence_order',
      prompt: 'Susun kalimat Rodrigo saat melihat Anna kembali.',
      correctAnswer: [
        'よかった しんぱい した よ',
        'よかったしんぱいしたよ',
      ],
      explanation:
        'Urutannya: よかった + 心配 + した + よ. よかった di sini berarti "syukurlah".',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengatakan "Kemarin dingin." Mana yang tepat?',
      options: [
        '昨日は寒かったです',
        '昨日は寒いでした',
        '昨日は寒いかったです',
      ],
      correctAnswer: '昨日は寒かったです',
      explanation:
        'Kata sifat I 寒い berubah menjadi 寒かった. 寒いでした dan 寒いかった adalah bentuk yang salah.',
      sourceRef: 'NHK L19 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-EX4',
      type: 'meaning_to_jp',
      prompt:
        'Tuliskan dalam bahasa Jepang: "Karena kameranya murah, saya tanpa sadar melihat-lihat."',
      correctAnswer: [
        'カメラが安かったので、つい見てしまいました',
        'かめらがやすかったので、ついみてしまいました',
      ],
      explanation:
        'Kata sifat lampau 安かった diikuti ので, lalu つい + bentuk TE + しまいました.',
      sourceRef: 'NHK L19 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 安い (murah) menjadi bentuk lampau.',
      correctAnswer: ['安かった', 'やすかった'],
      explanation:
        'Kata sifat I dibentuk dengan membuang い lalu menambah かった: 安い → 安かった.',
      sourceRef: 'NHK L19 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu bertemu lagi dengan temanmu setelah sempat terpisah. Ungkapkan rasa syukur, minta maaf, dan jelaskan alasanmu dengan tenang.',
    instructions: [
      'Ucapkan よかった。untuk rasa lega.',
      'Minta maaf dengan ごめんなさい。',
      'Jelaskan dengan カメラが安かったので…',
      'Tutup dengan つい見てしまいました。',
    ],
    modelAnswer: {
      jp: 'よかった。ごめんなさい。カメラが安かったので、つい見てしまいました。',
      kana: 'よかった。ごめんなさい。カメラがやすかったので、ついみてしまいました。',
      romaji:
        'Yokatta. Gomennasai. Kamera ga yasukatta node, tsui mite shimaimashita.',
      id: 'Syukurlah. Maaf. Karena kameranya murah, saya tanpa sadar melihat-lihat.',
      rubySegments: [
        { text: 'よかった。ごめんなさい。カメラが' },
        { text: '安', reading: 'やす' },
        { text: 'かったので、つい' },
        { text: '見', reading: 'み' },
        { text: 'てしまいました。' },
      ],
      rubyHtml:
        'よかった。ごめんなさい。カメラが<ruby>安<rt>やす</rt></ruby>かったので、つい<ruby>見<rt>み</rt></ruby>てしまいました。',
    },
    selfCheckList: [
      'Mengucapkan よかった untuk rasa lega.',
      'Memakai bentuk lampau 安かった, bukan 安い.',
      'Menyampaikan alasan dengan ので.',
      'Menambahkan てしまいました untuk tindakan yang disesali.',
    ],
    sourceRef: 'NHK L19 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L19-RC1',
      lessonId: 'L19',
      front: 'よかった',
      back: 'Syukurlah / baguslah',
      type: 'vocab',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC2',
      lessonId: 'L19',
      front: '心配 (しんぱい)',
      back: 'Khawatir',
      type: 'vocab',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC3',
      lessonId: 'L19',
      front: 'ごめんなさい',
      back: 'Maaf',
      type: 'vocab',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC4',
      lessonId: 'L19',
      front: '安い (やすい)',
      back: 'Murah',
      type: 'vocab',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC5',
      lessonId: 'L19',
      front: 'つい',
      back: 'Tanpa sadar / tidak sengaja',
      type: 'vocab',
      sourceRef: 'NHK L19 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC6',
      lessonId: 'L19',
      front: 'Bentuk lampau kata sifat I',
      back: 'buang い + かった — 安い → 安かった',
      type: 'grammar',
      sourceRef: 'NHK L19 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC7',
      lessonId: 'L19',
      front: 'Pola menyampaikan alasan dengan ので',
      back: '[alasan] ので、[akibat] — 安かったので',
      type: 'grammar',
      sourceRef: 'NHK L19 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC8',
      lessonId: 'L19',
      front: 'Dengarkan dialog resmi NHK L19. Mengapa Anna tertinggal?',
      back: 'カメラが安かったので、つい見てしまいました。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/19-id-le_01.mp3',
      sourceRef: 'NHK L19 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L19-RC9',
      lessonId: 'L19',
      front: 'Praktikkan meminta maaf dan menjelaskan alasan.',
      back: 'ごめんなさい。カメラが安かったので、つい見てしまいました。',
      type: 'output',
      sourceRef: 'NHK L19 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
