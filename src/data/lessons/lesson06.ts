import { Lesson } from '../../types';

export const lesson06: Lesson = {
  id: 'L06',
  order: 6,
  title: {
    jp: '電話番号は何番ですか',
    kana: 'でんわばんごうはなんばんですか',
    romaji: 'Denwabangō wa nanban desu ka',
    id: 'Apa nomor teleponnya?',
    rubySegments: [
      { text: '電話番号', reading: 'でんわばんごう' },
      { text: 'は' },
      { text: '何番', reading: 'なんばん' },
      { text: 'ですか' },
    ],
    rubyHtml:
      '<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか',
  },
  situationSummary:
    'Anna dan Sakura masih di kamar Anna. Sakura ingin tahu nomor telepon Anna, dan Anna mencoba mengingat angkanya.',
  pdfPage: 11,
  printedPage: 10,
  situationCategories: ['Di asrama', 'Penyelesaian masalah'],
  productArcId: 'arc-1',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/6.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/06-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan nomor telepon dengan pola [nomor] wa nanban desu ka.',
    'Saya bisa menyebut kegiatan memakai kata benda + o shimasu.',
  ],
  grammarPoints: [
    {
      id: 'L06-GP1',
      title: 'A WA NANBAN DESU KA (Berapa nomor A?)',
      pattern: '[nomor] wa nanban desu ka',
      explanationId:
        'なんばん dipakai untuk menanyakan nomor, termasuk nomor telepon. Sebutkan dulu apa yang ditanyakan, lalu tutup dengan なんばんですか. Dalam percakapan, angka dibaca satu per satu: ０８０ menjadi れい・はち・れい.',
      contrastNote:
        'Bahasa Indonesia bertanya "Nomornya berapa?" tanpa penanda topik. Bahasa Jepang tetap memakai は setelah 電話番号 dan menempatkan なんばん sebelum です.',
      examples: [
        {
          jp: '電話番号は何番ですか。',
          kana: 'でんわばんごうはなんばんですか。',
          romaji: 'Denwabangō wa nanban desu ka.',
          id: 'Apa nomor teleponnya?',
          rubySegments: [
            { text: '電話番号', reading: 'でんわばんごう' },
            { text: 'は' },
            { text: '何番', reading: 'なんばん' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            '<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。',
        },
        {
          jp: '部屋番号は何番ですか。',
          kana: 'へやばんごうはなんばんですか。',
          romaji: 'Heyabangō wa nanban desu ka.',
          id: 'Apa nomor kamarnya?',
          rubySegments: [
            { text: '部屋番号', reading: 'へやばんごう' },
            { text: 'は' },
            { text: '何番', reading: 'なんばん' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            '<ruby>部屋番号<rt>へやばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。',
        },
        {
          jp: '０８０－１２３４－５６７８です。',
          kana: 'れい はち れい － いち に さん よん － ご ろく なな はち です。',
          romaji: 'Rei hachi rei – ichi ni san yon – go roku nana hachi desu.',
          id: 'Nomornya 080-1234-5678.',
          rubySegments: [{ text: '０８０－１２３４－５６７８です。' }],
          rubyHtml: '０８０－１２３４－５６７８です。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L06 Tata Bahasa p. 10',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-GP2',
      title: 'KATA BENDA + O SHIMASU (melakukan A)',
      pattern: '[kata benda] o shimasu',
      explanationId:
        'します berarti "melakukan". Dengan menempelkannya pada kata benda, kamu bisa menyebut banyak kegiatan: 電話をします (menelepon), 勉強をします (belajar), 料理をします (memasak). Partikel を menandai kegiatan yang dilakukan.',
      contrastNote:
        'Bahasa Indonesia punya kata kerja khusus untuk tiap kegiatan ("menelepon", "memasak"). Bahasa Jepang sering membentuknya dari kata benda + します, jadi satu pola bisa dipakai untuk banyak kegiatan.',
      examples: [
        {
          jp: '今度、電話をします。',
          kana: 'こんど、でんわをします。',
          romaji: 'Kondo, denwa o shimasu.',
          id: 'Lain kali saya akan menelepon.',
          rubySegments: [
            { text: '今度', reading: 'こんど' },
            { text: '、' },
            { text: '電話', reading: 'でんわ' },
            { text: 'をします。' },
          ],
          rubyHtml:
            '<ruby>今度<rt>こんど</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>をします。',
        },
        {
          jp: '日本語を勉強します。',
          kana: 'にほんごをべんきょうします。',
          romaji: 'Nihongo o benkyō shimasu.',
          id: 'Saya belajar bahasa Jepang.',
          rubySegments: [
            { text: '日本語', reading: 'にほんご' },
            { text: 'を' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'します。' },
          ],
          rubyHtml:
            '<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。',
        },
        {
          jp: '毎日、料理をします。',
          kana: 'まいにち、りょうりをします。',
          romaji: 'Mainichi, ryōri o shimasu.',
          id: 'Setiap hari saya memasak.',
          rubySegments: [
            { text: '毎日', reading: 'まいにち' },
            { text: '、' },
            { text: '料理', reading: 'りょうり' },
            { text: 'をします。' },
          ],
          rubyHtml:
            '<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>をします。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L06 Pelajaran Tambahan p. 10',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L06-V1',
      kanji: '電話番号',
      kana: 'でんわばんごう',
      romaji: 'denwabangō',
      idMeaning: 'Nomor telepon',
      contextSentence: {
        jp: '電話番号は何番ですか。',
        kana: 'でんわばんごうはなんばんですか。',
        romaji: 'Denwabangō wa nanban desu ka.',
        id: 'Apa nomor teleponnya?',
        rubyHtml:
          '<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V2',
      kanji: '何番',
      kana: 'なんばん',
      romaji: 'nanban',
      idMeaning: 'Nomor berapa',
      contextSentence: {
        jp: '電話番号は何番ですか。',
        kana: 'でんわばんごうはなんばんですか。',
        romaji: 'Denwabangō wa nanban desu ka.',
        id: 'Apa nomor teleponnya?',
        rubyHtml:
          '<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V3',
      kanji: '電話',
      kana: 'でんわ',
      romaji: 'denwa',
      idMeaning: 'Telepon',
      contextSentence: {
        jp: '今度、電話をします。',
        kana: 'こんど、でんわをします。',
        romaji: 'Kondo, denwa o shimasu.',
        id: 'Lain kali saya akan menelepon.',
        rubyHtml:
          '<ruby>今度<rt>こんど</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>をします。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V4',
      kanji: '今度',
      kana: 'こんど',
      romaji: 'kondo',
      idMeaning: 'Lain kali / kali berikutnya',
      contextSentence: {
        jp: 'じゃ、今度、電話をしますね。',
        kana: 'じゃ、こんど、でんわをしますね。',
        romaji: 'Ja, kondo, denwa o shimasu ne.',
        id: 'Kalau begitu, aku akan menelepon lain kali ya.',
        rubyHtml:
          'じゃ、<ruby>今度<rt>こんど</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>をしますね。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V5',
      kana: 'ところで',
      romaji: 'tokorode',
      idMeaning: 'Ngomong-ngomong (mengalihkan topik)',
      contextSentence: {
        jp: 'ところでアンナさん。',
        kana: 'ところでアンナさん。',
        romaji: 'Tokorode Anna-san.',
        id: 'Ngomong-ngomong, Anna.',
        rubyHtml: 'ところでアンナさん。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V6',
      kana: 'ええと',
      romaji: 'ēto',
      idMeaning: 'Hmm... (saat mengingat atau mencari kata)',
      contextSentence: {
        jp: 'ええと。０８０－１２３４－・・・。',
        kana: 'ええと。れい はち れい － いち に さん よん － ・・・。',
        romaji: 'Ēto. Rei hachi rei – ichi ni san yon – ...',
        id: 'Coba saya ingat-ingat dulu. 080–1234–...',
        rubyHtml: 'ええと。０８０－１２３４－・・・。',
      },
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V7',
      kana: 'もしもし',
      romaji: 'moshi moshi',
      idMeaning: 'Halo (dipakai saat menelepon atau menerima telepon)',
      sourceRef: 'NHK L06 Catatan Anna',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-V8',
      kana: 'します',
      romaji: 'shimasu',
      idMeaning: 'Melakukan',
      contextSentence: {
        jp: '今度、電話をします。',
        kana: 'こんど、でんわをします。',
        romaji: 'Kondo, denwa o shimasu.',
        id: 'Lain kali saya akan menelepon.',
        rubyHtml:
          '<ruby>今度<rt>こんど</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>をします。',
      },
      sourceRef: 'NHK L06 Pelajaran Tambahan',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L06-GQ1',
        question: 'Apa yang Sakura tanyakan kepada Anna?',
        options: ['Nomor telepon', 'Alamat asrama', 'Jadwal kuliah'],
        correctIndex: 0,
        explanation:
          'Sakura membuka dengan ところで lalu bertanya 電話番号は何番ですか — apa nomor teleponnya?',
        sourceRef: 'NHK L06 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L06-GQ2',
        question: 'Apa yang akan Sakura lakukan setelah mendapat nomor itu?',
        options: ['Menelepon nanti', 'Mengirim surat', 'Datang ke asrama'],
        correctIndex: 0,
        explanation:
          'Sakura berkata じゃ、今度、電話をしますね — kalau begitu, aku akan menelepon lain kali ya.',
        sourceRef: 'NHK L06 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L06-DQ1',
        question: 'Ungkapan apa yang Anna pakai saat mencoba mengingat nomornya?',
        options: ['ええと', 'もしもし', 'どうぞ'],
        correctIndex: 0,
        explanation:
          'ええと adalah bunyi pengisi yang wajar saat seseorang mengingat-ingat atau mencari kata.',
        sourceRef: 'NHK L06 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L06-DQ2',
        question: 'Bagaimana Sakura menutup percakapan?',
        options: [
          'じゃ、今度、電話をしますね',
          'おやすみなさい',
          'いただきます',
        ],
        correctIndex: 0,
        explanation:
          'Sakura berterima kasih lalu berkata じゃ、今度、電話をしますね.',
        sourceRef: 'NHK L06 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '電話番号は何番ですか。',
        kana: 'でんわばんごうはなんばんですか。',
        romaji: 'Denwabangō wa nanban desu ka.',
        id: 'Apa nomor teleponnya?',
        rubyHtml:
          '<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。',
      },
      attribution:
        'Kutipan pendek Pelajaran 6 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L06-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi pertanyaan berikut: 電話番号 [ ... ] 何番ですか。',
      options: ['は (wa)', 'を (o)', 'に (ni)'],
      correctAnswer: 'は (wa)',
      explanation:
        'Partikel は menandai 電話番号 sebagai topik yang sedang ditanyakan.',
      sourceRef: 'NHK L06 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi pertanyaan yang tepat.',
      correctAnswer: [
        'でんわばんごう は なんばん です か',
        'でんわばんごうはなんばんですか',
      ],
      explanation:
        'Urutannya: topik (電話番号は) + 何番 + です + か.',
      sourceRef: 'NHK L06 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-EX3',
      type: 'audio_meaning',
      prompt:
        'Kamu ingin menanyakan nomor telepon teman barumu. Ungkapan mana yang tepat?',
      options: [
        '電話番号は何番ですか',
        '電話番号はどこですか',
        '電話番号はだれですか',
      ],
      correctAnswer: '電話番号は何番ですか',
      explanation:
        '何番 dipakai untuk nomor. どこ untuk tempat, だれ untuk orang.',
      sourceRef: 'NHK L06 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-EX4',
      type: 'meaning_to_jp',
      prompt:
        'Tuliskan dalam bahasa Jepang: "Ngomong-ngomong, apa nomor teleponnya?"',
      correctAnswer: [
        'ところで、電話番号は何番ですか',
        'ところで電話番号は何番ですか',
        'ところで、でんわばんごうはなんばんですか',
      ],
      explanation:
        'ところで mengalihkan topik, lalu pertanyaan memakai pola 電話番号は何番ですか.',
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 電話をします (saya menelepon) menjadi bentuk negatif sopan.',
      correctAnswer: ['電話をしません', 'でんわをしません'],
      explanation:
        'Bentuk negatif sopan dibentuk dengan mengganti ます menjadi ません: します → しません.',
      sourceRef: 'NHK L06 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu bertukar kontak dengan teman sekelas. Tanyakan nomor teleponnya, lalu janjikan akan menelepon nanti.',
    instructions: [
      'Buka dengan ところで untuk mengalihkan topik.',
      'Tanyakan nomor dengan 電話番号は何番ですか.',
      'Ucapkan ありがとう setelah mendapat jawabannya.',
      'Tutup dengan 今度、電話をしますね.',
    ],
    modelAnswer: {
      jp: 'ところで、電話番号は何番ですか。今度、電話をしますね。',
      kana: 'ところで、でんわばんごうはなんばんですか。こんど、でんわをしますね。',
      romaji:
        'Tokorode, denwabangō wa nanban desu ka. Kondo, denwa o shimasu ne.',
      id: 'Ngomong-ngomong, apa nomor teleponmu? Nanti aku telepon ya.',
      rubySegments: [
        { text: 'ところで、' },
        { text: '電話番号', reading: 'でんわばんごう' },
        { text: 'は' },
        { text: '何番', reading: 'なんばん' },
        { text: 'ですか。' },
        { text: '今度', reading: 'こんど' },
        { text: '、' },
        { text: '電話', reading: 'でんわ' },
        { text: 'をしますね。' },
      ],
      rubyHtml:
        'ところで、<ruby>電話番号<rt>でんわばんごう</rt></ruby>は<ruby>何番<rt>なんばん</rt></ruby>ですか。<ruby>今度<rt>こんど</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>をしますね。',
    },
    selfCheckList: [
      'Memakai ところで untuk mengalihkan topik.',
      'Menanyakan nomor dengan pola 何番ですか.',
      'Menyebut angka satu per satu, bukan sebagai bilangan bulat.',
      'Menutup dengan janji menelepon memakai 電話をします.',
    ],
    sourceRef: 'NHK L06 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L06-RC1',
      lessonId: 'L06',
      front: '電話番号 (でんわばんごう)',
      back: 'Nomor telepon',
      type: 'vocab',
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC2',
      lessonId: 'L06',
      front: '何番 (なんばん)',
      back: 'Nomor berapa',
      type: 'vocab',
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC3',
      lessonId: 'L06',
      front: '今度 (こんど)',
      back: 'Lain kali / kali berikutnya',
      type: 'vocab',
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC4',
      lessonId: 'L06',
      front: 'ところで',
      back: 'Ngomong-ngomong (mengalihkan topik)',
      type: 'vocab',
      sourceRef: 'NHK L06 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC5',
      lessonId: 'L06',
      front: 'もしもし',
      back: 'Halo (di telepon)',
      type: 'vocab',
      sourceRef: 'NHK L06 Catatan Anna',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC6',
      lessonId: 'L06',
      front: 'Pola untuk menanyakan nomor',
      back: '[nomor] は なんばん ですか',
      type: 'grammar',
      sourceRef: 'NHK L06 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC7',
      lessonId: 'L06',
      front: 'Pola untuk menyebut kegiatan dengan kata benda',
      back: '[kegiatan] を します — 電話をします, 勉強をします',
      type: 'grammar',
      sourceRef: 'NHK L06 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC8',
      lessonId: 'L06',
      front: 'Dengarkan dialog resmi NHK L6. Apa yang Sakura minta dari Anna?',
      back: 'Nomor teleponnya: 電話番号は何番ですか。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/06-id-le_01.mp3',
      sourceRef: 'NHK L06 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L06-RC9',
      lessonId: 'L06',
      front: 'Praktikkan menanyakan nomor telepon dan berjanji menelepon.',
      back: 'ところで、電話番号は何番ですか。今度、電話をしますね。',
      type: 'output',
      sourceRef: 'NHK L06 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
