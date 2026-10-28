import { Lesson } from '../../types';

export const lesson04: Lesson = {
  id: 'L04',
  order: 4,
  title: {
    jp: 'ただいま',
    kana: 'ただいま',
    romaji: 'Tadaima',
    id: 'Saya pulang',
    rubySegments: [{ text: 'ただいま' }],
    rubyHtml: 'ただいま',
  },
  situationSummary:
    'Anna pulang ke asrama bersama Sakura. Ibu asrama menyambut mereka dan bertanya apakah Sakura juga mahasiswa asing.',
  pdfPage: 9,
  printedPage: 8,
  situationCategories: ['Di asrama', 'Kebudayaan Jepang'],
  productArcId: 'arc-1',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/4.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/04-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menjawab pertanyaan ya/tidak dengan はい atau いいえ.',
    'Saya bisa menyangkal suatu pernyataan memakai ではありません.',
  ],
  grammarPoints: [
    {
      id: 'L04-GP1',
      title: 'Pertanyaan YA/TIDAK: HAI & IIE',
      pattern: '[Pernyataan] + ka → はい、そうです / いいえ、ちがいます',
      explanationId:
        'Pertanyaan yang jawabannya ya atau tidak dibentuk dengan menambahkan か di akhir pernyataan. Untuk menjawab, cukup はい (ya) atau いいえ (tidak), lalu pertegas dengan そうです (betul) atau ちがいます (bukan).',
      contrastNote:
        'Orang Indonesia biasanya mengulang inti pertanyaan ("Ya, saya mahasiswa asing"). Dalam bahasa Jepang, jawaban singkat はい、そうです sudah terdengar lengkap dan sopan.',
      examples: [
        {
          jp: 'さくらさんは留学生ですか。',
          kana: 'さくらさんはりゅうがくせいですか。',
          romaji: 'Sakura-san wa ryūgakusei desu ka.',
          id: 'Apakah Sakura mahasiswa asing?',
          rubySegments: [
            { text: 'さくらさんは' },
            { text: '留学生', reading: 'りゅうがくせい' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            'さくらさんは<ruby>留学生<rt>りゅうがくせい</rt></ruby>ですか。',
        },
        {
          jp: 'はい、そうです。',
          kana: 'はい、そうです。',
          romaji: 'Hai, sō desu.',
          id: 'Ya, betul.',
          rubySegments: [{ text: 'はい、そうです。' }],
          rubyHtml: 'はい、そうです。',
        },
        {
          jp: 'いいえ、ちがいます。',
          kana: 'いいえ、ちがいます。',
          romaji: 'Iie, chigaimasu.',
          id: 'Tidak, bukan.',
          rubySegments: [{ text: 'いいえ、ちがいます。' }],
          rubyHtml: 'いいえ、ちがいます。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-GP2',
      title: 'DEWA ARIMASEN (bukan)',
      pattern: '[Topik] wa [kata benda] dewa arimasen',
      explanationId:
        'ではありません adalah bentuk negatif dari です. Letakkan di belakang kata benda untuk menyatakan "bukan ...". Dalam percakapan santai bentuk ini sering disingkat menjadi じゃありません.',
      contrastNote:
        'Bahasa Indonesia meletakkan "bukan" sebelum kata yang disangkal ("Saya bukan mahasiswa"). Bahasa Jepang meletakkan penyangkalan di akhir kalimat, setelah kata bendanya.',
      examples: [
        {
          jp: '私は留学生ではありません。',
          kana: 'わたしはりゅうがくせいではありません。',
          romaji: 'Watashi wa ryūgakusei dewa arimasen.',
          id: 'Saya bukan mahasiswa asing.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '留学生', reading: 'りゅうがくせい' },
            { text: 'ではありません。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>ではありません。',
        },
        {
          jp: 'これは私の本ではありません。',
          kana: 'これはわたしのほんではありません。',
          romaji: 'Kore wa watashi no hon dewa arimasen.',
          id: 'Ini bukan buku saya.',
          rubySegments: [
            { text: 'これは' },
            { text: '私', reading: 'わたし' },
            { text: 'の' },
            { text: '本', reading: 'ほん' },
            { text: 'ではありません。' },
          ],
          rubyHtml:
            'これは<ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ではありません。',
        },
        {
          jp: '私は日本人ではありません。',
          kana: 'わたしはにほんじんではありません。',
          romaji: 'Watashi wa nihonjin dewa arimasen.',
          id: 'Saya bukan orang Jepang.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '日本人', reading: 'にほんじん' },
            { text: 'ではありません。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>ではありません。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L04 Tata Bahasa p. 8',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L04-V1',
      kana: 'ただいま',
      romaji: 'tadaima',
      idMeaning: 'Saya pulang (ucapan saat tiba di rumah atau asrama)',
      contextSentence: {
        jp: 'ただいま。',
        kana: 'ただいま。',
        romaji: 'Tadaima.',
        id: 'Saya pulang.',
        rubyHtml: 'ただいま。',
      },
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V2',
      kanji: 'お帰りなさい',
      kana: 'おかえりなさい',
      romaji: 'okaerinasai',
      idMeaning: 'Selamat datang kembali (balasan untuk tadaima)',
      contextSentence: {
        jp: 'お帰りなさい。',
        kana: 'おかえりなさい。',
        romaji: 'Okaerinasai.',
        id: 'Selamat datang kembali.',
        rubySegments: [
          { text: 'お' },
          { text: '帰', reading: 'かえ' },
          { text: 'りなさい。' },
        ],
        rubyHtml: 'お<ruby>帰<rt>かえ</rt></ruby>りなさい。',
      },
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V3',
      kana: 'こんにちは',
      romaji: 'konnichiwa',
      idMeaning: 'Selamat siang',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V4',
      kanji: '留学生',
      kana: 'りゅうがくせい',
      romaji: 'ryūgakusei',
      idMeaning: 'Mahasiswa asing',
      contextSentence: {
        jp: '私は留学生です。',
        kana: 'わたしはりゅうがくせいです。',
        romaji: 'Watashi wa ryūgakusei desu.',
        id: 'Saya mahasiswa asing.',
        rubySegments: [
          { text: '私', reading: 'わたし' },
          { text: 'は' },
          { text: '留学生', reading: 'りゅうがくせい' },
          { text: 'です。' },
        ],
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>です。',
      },
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V5',
      kanji: '日本人',
      kana: 'にほんじん',
      romaji: 'nihonjin',
      idMeaning: 'Orang Jepang',
      contextSentence: {
        jp: '私は日本人ではありません。',
        kana: 'わたしはにほんじんではありません。',
        romaji: 'Watashi wa nihonjin dewa arimasen.',
        id: 'Saya bukan orang Jepang.',
        rubySegments: [
          { text: '私', reading: 'わたし' },
          { text: 'は' },
          { text: '日本人', reading: 'にほんじん' },
          { text: 'ではありません。' },
        ],
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>ではありません。',
      },
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V6',
      kanji: '学生',
      kana: 'がくせい',
      romaji: 'gakusei',
      idMeaning: 'Mahasiswa / pelajar',
      contextSentence: {
        jp: '私は学生です。',
        kana: 'わたしはがくせいです。',
        romaji: 'Watashi wa gakusei desu.',
        id: 'Saya mahasiswa.',
        rubySegments: [
          { text: '私', reading: 'わたし' },
          { text: 'は' },
          { text: '学生', reading: 'がくせい' },
          { text: 'です。' },
        ],
        rubyHtml:
          '<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。',
      },
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V7',
      kana: 'はい',
      romaji: 'hai',
      idMeaning: 'Ya',
      sourceRef: 'NHK L04 Tata Bahasa',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-V8',
      kana: 'いいえ',
      romaji: 'iie',
      idMeaning: 'Tidak / bukan',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L04-GQ1',
        question: 'Di mana percakapan ini berlangsung?',
        options: ['Di asrama', 'Di ruang kelas', 'Di toko'],
        correctIndex: 0,
        explanation:
          'Anna mengucapkan ただいま saat tiba di asrama, lalu Ibu Asrama menyambutnya.',
        sourceRef: 'NHK L04 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L04-GQ2',
        question: 'Siapa yang menyambut Anna di pintu?',
        options: ['Sakura', 'Ibu Asrama', 'Rodrigo'],
        correctIndex: 1,
        explanation:
          'Ibu Asrama menjawab お帰りなさい (selamat datang kembali) begitu Anna masuk.',
        sourceRef: 'NHK L04 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L04-DQ1',
        question: 'Apa yang diucapkan Anna saat masuk ke asrama?',
        options: ['ただいま', 'こんにちは', 'お帰りなさい'],
        correctIndex: 0,
        explanation:
          'ただいま diucapkan oleh orang yang baru tiba di rumah atau asrama.',
        sourceRef: 'NHK L04 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L04-DQ2',
        question: 'Apakah Sakura mahasiswa asing?',
        options: [
          'Ya, ia mahasiswa asing',
          'Tidak, ia mahasiswa Jepang',
          'Tidak, ia dosen',
        ],
        correctIndex: 1,
        explanation:
          'Sakura menjawab いいえ、私は留学生ではありません。日本人の学生です。',
        sourceRef: 'NHK L04 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'いいえ、私は留学生ではありません。',
        kana: 'いいえ、わたしはりゅうがくせいではありません。',
        romaji: 'Iie, watashi wa ryūgakusei dewa arimasen.',
        id: 'Bukan, saya bukan mahasiswa asing.',
        rubyHtml:
          'いいえ、<ruby>私<rt>わたし</rt></ruby>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>ではありません。',
      },
      attribution:
        'Kutipan pendek Pelajaran 4 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L04-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 私は留学生 [ ... ] ありません。',
      options: ['では (dewa)', 'は (wa)', 'の (no)'],
      correctAnswer: 'では (dewa)',
      explanation:
        'Bentuk negatif sopan dari です adalah ではありません. では menempel pada kata benda sebelum ありません.',
      sourceRef: 'NHK L04 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi kalimat penyangkalan yang sopan.',
      correctAnswer: [
        'わたし は りゅうがくせい では ありません',
        'わたしはりゅうがくせいではありません',
      ],
      explanation:
        'Urutannya: topik (わたしは) + kata benda (りゅうがくせい) + ではありません.',
      sourceRef: 'NHK L04 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-EX3',
      type: 'audio_meaning',
      prompt:
        'Ibu Asrama bertanya apakah Sakura juga mahasiswa asing. Bagaimana Sakura menolak dengan sopan?',
      options: [
        'いいえ、留学生ではありません',
        'はい、留学生です',
        'いいえ、わかりません',
      ],
      correctAnswer: 'いいえ、留学生ではありません',
      explanation:
        'いいえ diikuti 留学生ではありません menyangkal bahwa ia mahasiswa asing.',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya bukan orang Jepang."',
      correctAnswer: [
        '私は日本人ではありません',
        'わたしはにほんじんではありません',
      ],
      explanation:
        'Penyangkalan diletakkan di akhir: 日本人 + ではありません.',
      sourceRef: 'NHK L04 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 私は学生です (saya mahasiswa) menjadi bentuk negatif.',
      correctAnswer: [
        '私は学生ではありません',
        'わたしはがくせいではありません',
      ],
      explanation:
        'Ganti です dengan ではありません. Kata bendanya tidak berubah.',
      sourceRef: 'NHK L04 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu baru masuk asrama dan bertemu Ibu Asrama. Ia menyapamu dan bertanya apakah kamu mahasiswa asing. Jawab dengan sopan, lalu sebutkan kewarganegaraanmu.',
    instructions: [
      'Ucapkan ただいま saat masuk.',
      'Jawab pertanyaannya dengan はい、そうです.',
      'Sebutkan kewarganegaraanmu dengan pola 私は [negara] 人です.',
      'Tutup dengan よろしくお願いします bila perlu.',
    ],
    modelAnswer: {
      jp: 'ただいま。はい、留学生です。私はインドネシア人です。',
      kana: 'ただいま。はい、りゅうがくせいです。わたしはインドネシアじんです。',
      romaji:
        'Tadaima. Hai, ryūgakusei desu. Watashi wa Indonesia-jin desu.',
      id: 'Saya pulang. Ya, saya mahasiswa asing. Saya orang Indonesia.',
      rubySegments: [
        { text: 'ただいま。はい、' },
        { text: '留学生', reading: 'りゅうがくせい' },
        { text: 'です。' },
        { text: '私', reading: 'わたし' },
        { text: 'はインドネシア' },
        { text: '人', reading: 'じん' },
        { text: 'です。' },
      ],
      rubyHtml:
        'ただいま。はい、<ruby>留学生<rt>りゅうがくせい</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>はインドネシア<ruby>人<rt>じん</rt></ruby>です。',
    },
    selfCheckList: [
      'Mengucapkan ただいま saat masuk.',
      'Menjawab pertanyaan dengan はい、そうです atau はい、〜です.',
      'Menyebut kewarganegaraan dengan pola [negara] 人 desu.',
      'Tidak memakai あなた; menyebut nama atau peran lawan bicara.',
    ],
    sourceRef: 'NHK L04 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L04-RC1',
      lessonId: 'L04',
      front: 'ただいま',
      back: 'Saya pulang (diucapkan saat tiba di rumah)',
      type: 'vocab',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC2',
      lessonId: 'L04',
      front: 'お帰りなさい (おかえりなさい)',
      back: 'Selamat datang kembali',
      type: 'vocab',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC3',
      lessonId: 'L04',
      front: '留学生 (りゅうがくせい)',
      back: 'Mahasiswa asing',
      type: 'vocab',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC4',
      lessonId: 'L04',
      front: '日本人 (にほんじん)',
      back: 'Orang Jepang',
      type: 'vocab',
      sourceRef: 'NHK L04 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC5',
      lessonId: 'L04',
      front: 'Bentuk negatif sopan dari です',
      back: 'ではありません (dewa arimasen)',
      type: 'grammar',
      sourceRef: 'NHK L04 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC6',
      lessonId: 'L04',
      front: 'Jawaban untuk pertanyaan ya/tidak yang benar',
      back: 'はい、そうです (ya, betul) / いいえ、ちがいます (tidak, bukan)',
      type: 'grammar',
      sourceRef: 'NHK L04 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC7',
      lessonId: 'L04',
      front:
        'Dengarkan dialog resmi NHK L4. Apakah Sakura mahasiswa asing?',
      back: 'Tidak. いいえ、私は留学生ではありません。日本人の学生です。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/04-id-le_01.mp3',
      sourceRef: 'NHK L04 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L04-RC8',
      lessonId: 'L04',
      front:
        'Praktikkan menyapa saat pulang dan menjawab pertanyaan tentang statusmu.',
      back: 'ただいま。はい、留学生です。私はインドネシア人です。',
      type: 'output',
      sourceRef: 'NHK L04 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
