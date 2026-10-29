import { Lesson } from '../../types';

export const lesson24: Lesson = {
  id: 'L24',
  order: 24,
  title: {
    jp: '使わないでください',
    kana: 'つかわないでください',
    romaji: 'Tsukawanaide kudasai',
    id: 'Mohon jangan menggunakan',
    rubySegments: [
      { text: '使', reading: 'つか' },
      { text: 'わないでください' },
    ],
    rubyHtml:
      '<ruby>使<rt>つか</rt></ruby>わないでください',
  },
  situationSummary:
    'Di kelas bahasa Jepang, Profesor Suzuki mengumumkan ujian pada Senin pekan depan. Anna bertanya apakah boleh memakai kamus, dan profesor menjawab tidak boleh sambil meminta mereka tidak menggunakannya.',
  pdfPage: 29,
  printedPage: 28,
  situationCategories: ['Di universitas', 'Penyelesaian masalah'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/24.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/24-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa membentuk kata kerja negatif santai (bentuk NAI) dari bentuk MASU.',
    'Saya bisa melarang dengan sopan memakai ~naide kudasai.',
    'Saya bisa menyebut waktu ujian dengan kata seperti kyō, raishū, dan getsuyōbi.',
  ],
  grammarPoints: [
    {
      id: 'L24-GP1',
      title: 'BENTUK NAI (NEGATIF SANTAI)',
      pattern: '[kata kerja bentuk MASU] → [bentuk NAI]',
      explanationId:
        'Bentuk NAI adalah negatif santai. Untuk kata kerja golongan I, suku kata terakhir sebelum ます berubah dari baris i ke baris a, lalu ditambah ない: 使います → 使わない, 行きます → 行かない. Kata kerja golongan II cukup membuang ます lalu menambah ない: 食べます → 食べない. Pengecualian: します → しない, 来ます → 来ない.',
      contrastNote:
        'Bahasa Indonesia menambahkan "tidak" tanpa mengubah kata kerja. Bahasa Jepang mengubah bunyi akhir kata kerja, sehingga bentuk NAI harus dihafal sebagai bagian dari kata.',
      examples: [
        {
          jp: '辞書を使わない。',
          kana: 'じしょをつかわない。',
          romaji: 'Jisho o tsukawanai.',
          id: 'Tidak memakai kamus.',
          rubySegments: [
            { text: '辞書', reading: 'じしょ' },
            { text: 'を' },
            { text: '使', reading: 'つか' },
            { text: 'わない。' },
          ],
          rubyHtml:
            '<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わない。',
        },
        {
          jp: '今日は行かない。',
          kana: 'きょうはいかない。',
          romaji: 'Kyō wa ikanai.',
          id: 'Hari ini tidak pergi.',
          rubySegments: [
            { text: '今日', reading: 'きょう' },
            { text: 'は' },
            { text: '行', reading: 'い' },
            { text: 'かない。' },
          ],
          rubyHtml:
            '<ruby>今日<rt>きょう</rt></ruby>は<ruby>行<rt>い</rt></ruby>かない。',
        },
        {
          jp: '肉を食べない。',
          kana: 'にくをたべない。',
          romaji: 'Niku o tabenai.',
          id: 'Tidak makan daging.',
          rubySegments: [
            { text: '肉', reading: 'にく' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べない。' },
          ],
          rubyHtml:
            '<ruby>肉<rt>にく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べない。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L24 Sensei Oshiete p. 28',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-GP2',
      title: 'LARANGAN SOPAN ~NAIDE KUDASAI',
      pattern: '[kata kerja bentuk NAI] + でください (~naide kudasai)',
      explanationId:
        'Bentuk NAI ditambah でください menjadi larangan yang sopan: 使わないでください — mohon jangan menggunakan. Pola ini dipakai untuk aturan, instruksi, atau permintaan yang jelas. Tidak perlu menambahkan ません; bentuk NAI sudah cukup.',
      contrastNote:
        'Bahasa Indonesia bisa berkata "jangan dipakai" atau "mohon jangan menggunakan". Bahasa Jepang memakai でください untuk melembutkan larangan, sehingga terdengar seperti instruksi, bukan bentakan.',
      examples: [
        {
          jp: '辞書を使わないでください。',
          kana: 'じしょをつかわないでください。',
          romaji: 'Jisho o tsukawanaide kudasai.',
          id: 'Mohon jangan menggunakan kamus.',
          rubySegments: [
            { text: '辞書', reading: 'じしょ' },
            { text: 'を' },
            { text: '使', reading: 'つか' },
            { text: 'わないでください。' },
          ],
          rubyHtml:
            '<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わないでください。',
        },
        {
          jp: 'ここに入らないでください。',
          kana: 'ここにはいらないでください。',
          romaji: 'Koko ni hairanaide kudasai.',
          id: 'Mohon jangan masuk di sini.',
          rubySegments: [
            { text: 'ここに' },
            { text: '入', reading: 'はい' },
            { text: 'らないでください。' },
          ],
          rubyHtml:
            'ここに<ruby>入<rt>はい</rt></ruby>らないでください。',
        },
        {
          jp: '写真を撮らないでください。',
          kana: 'しゃしんをとらないでください。',
          romaji: 'Shashin o toranaide kudasai.',
          id: 'Mohon jangan mengambil foto.',
          rubySegments: [
            { text: '写真', reading: 'しゃしん' },
            { text: 'を' },
            { text: '撮', reading: 'と' },
            { text: 'らないでください。' },
          ],
          rubyHtml:
            '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>らないでください。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L24 Pelajaran Tambahan p. 28',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L24-V1',
      kanji: '今日',
      kana: 'きょう',
      romaji: 'kyō',
      idMeaning: 'Hari ini',
      contextSentence: {
        jp: 'はい、今日はここまでです。',
        kana: 'はい、きょうはここまでです。',
        romaji: 'Hai, kyō wa koko made desu.',
        id: 'Baiklah, hari ini sampai di sini.',
        rubyHtml:
          'はい、<ruby>今日<rt>きょう</rt></ruby>はここまでです。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V2',
      kanji: '来週',
      kana: 'らいしゅう',
      romaji: 'raishū',
      idMeaning: 'Pekan depan',
      contextSentence: {
        jp: '来週の月曜日に試験をします。',
        kana: 'らいしゅうのげつようびにしけんをします。',
        romaji: 'Raishū no getsuyōbi ni shiken o shimasu.',
        id: 'Senin pekan depan akan diadakan ujian.',
        rubyHtml:
          '<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>試験<rt>しけん</rt></ruby>をします。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V3',
      kanji: '月曜日',
      kana: 'げつようび',
      romaji: 'getsuyōbi',
      idMeaning: 'Hari Senin',
      contextSentence: {
        jp: '来週の月曜日に試験をします。',
        kana: 'らいしゅうのげつようびにしけんをします。',
        romaji: 'Raishū no getsuyōbi ni shiken o shimasu.',
        id: 'Senin pekan depan akan diadakan ujian.',
        rubyHtml:
          '<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>試験<rt>しけん</rt></ruby>をします。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V4',
      kanji: '試験',
      kana: 'しけん',
      romaji: 'shiken',
      idMeaning: 'Ujian',
      contextSentence: {
        jp: '来週の月曜日に試験をします。',
        kana: 'らいしゅうのげつようびにしけんをします。',
        romaji: 'Raishū no getsuyōbi ni shiken o shimasu.',
        id: 'Senin pekan depan akan diadakan ujian.',
        rubyHtml:
          '<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>試験<rt>しけん</rt></ruby>をします。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V5',
      kanji: '辞書',
      kana: 'じしょ',
      romaji: 'jisho',
      idMeaning: 'Kamus',
      contextSentence: {
        jp: '先生、辞書を使ってもいいですか。',
        kana: 'せんせい、じしょをつかってもいいですか。',
        romaji: 'Sensei, jisho o tsukatte mo ii desu ka.',
        id: 'Guru, bolehkah menggunakan kamus?',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ってもいいですか。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V6',
      kanji: '使います',
      kana: 'つかいます',
      romaji: 'tsukaimasu',
      idMeaning: 'Menggunakan',
      contextSentence: {
        jp: '先生、辞書を使ってもいいですか。',
        kana: 'せんせい、じしょをつかってもいいですか。',
        romaji: 'Sensei, jisho o tsukatte mo ii desu ka.',
        id: 'Guru, bolehkah menggunakan kamus?',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ってもいいですか。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V7',
      kana: 'だめ',
      romaji: 'dame',
      idMeaning: 'Tidak boleh',
      contextSentence: {
        jp: 'いいえ、だめです。',
        kana: 'いいえ、だめです。',
        romaji: 'Iie, dame desu.',
        id: 'Tidak, tidak boleh.',
        rubyHtml: 'いいえ、だめです。',
      },
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-V8',
      kanji: '準備',
      kana: 'じゅんび',
      romaji: 'junbi',
      idMeaning: 'Persiapan',
      contextSentence: {
        jp: '試験の準備をします。',
        kana: 'しけんのじゅんびをします。',
        romaji: 'Shiken no junbi o shimasu.',
        id: 'Saya menyiapkan diri untuk ujian.',
        rubyHtml:
          '<ruby>試験<rt>しけん</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>をします。',
      },
      sourceRef: 'NHK L24 Catatan Anna',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L24-GQ1',
        question: 'Kapan ujian akan diadakan?',
        options: ['Senin pekan depan', 'Jumat pekan ini', 'Senin pekan ini'],
        correctIndex: 0,
        explanation:
          'Profesor berkata 来週の月曜日に試験をします — ujian pada Senin pekan depan.',
        sourceRef: 'NHK L24 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L24-GQ2',
        question: 'Apa yang Anna tanyakan kepada profesor?',
        options: [
          'Apakah boleh memakai kamus',
          'Apakah ujiannya sulit',
          'Apakah boleh pulang lebih awal',
        ],
        correctIndex: 0,
        explanation:
          'Anna bertanya 辞書を使ってもいいですか — bolehkah menggunakan kamus?',
        sourceRef: 'NHK L24 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L24-DQ1',
        question: 'Apa jawaban profesor?',
        options: ['Tidak boleh', 'Boleh', 'Hanya boleh saat ujian'],
        correctIndex: 0,
        explanation:
          'Profesor berkata いいえ、だめです — tidak, tidak boleh.',
        sourceRef: 'NHK L24 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L24-DQ2',
        question: 'Apa yang tidak boleh digunakan saat ujian?',
        options: ['Kamus', 'Pensil', 'Penghapus'],
        correctIndex: 0,
        explanation:
          'Profesor berkata 辞書を使わないでください — mohon jangan menggunakan kamus.',
        sourceRef: 'NHK L24 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '使わないでください。',
        kana: 'つかわないでください。',
        romaji: 'Tsukawanaide kudasai.',
        id: 'Mohon jangan menggunakannya.',
        rubyHtml:
          '<ruby>使<rt>つか</rt></ruby>わないでください。',
      },
      attribution:
        'Kutipan pendek Pelajaran 24 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L24-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi larangan berikut: 辞書を [ ... ] でください。',
      options: ['使わない', '使います', '使って'],
      correctAnswer: '使わない',
      explanation:
        'Larangan sopan memakai bentuk NAI + でください: 使わないでください.',
      sourceRef: 'NHK L24 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-EX2',
      type: 'sentence_order',
      prompt: 'Susun pengumuman ujian dari profesor.',
      correctAnswer: [
        '来週 の 月曜日 に 試験 を します',
        '来週の月曜日に試験をします',
      ],
      explanation:
        'Urutannya: 来週 + の + 月曜日 + に + 試験 + を + します. Partikel に menandai waktu.',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengatakan "Mohon jangan memotret di sini." Mana yang tepat?',
      options: [
        'ここで写真を撮らないでください',
        'ここで写真を撮ってください',
        'ここで写真を撮ってもいいですか',
      ],
      correctAnswer: 'ここで写真を撮らないでください',
      explanation:
        'Bentuk NAI 撮らない + でください menyatakan larangan. 撮ってください justru meminta orang memotret.',
      sourceRef: 'NHK L24 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Mohon jangan menggunakan kamus."',
      correctAnswer: ['辞書を使わないでください', 'じしょをつかわないでください'],
      explanation:
        'Gunakan 辞書 + を + 使わない + でください.',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 使います (menggunakan) menjadi bentuk NAI.',
      correctAnswer: ['使わない', 'つかわない'],
      explanation:
        'Kata kerja golongan I: 使い (i) berubah menjadi 使わ (a), lalu ditambah ない.',
      sourceRef: 'NHK L24 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu menjadi ketua kelas. Sampaikan aturan ujian kepada teman-teman: kapan ujiannya dan apa yang tidak boleh digunakan.',
    instructions: [
      'Sebut waktu ujian dengan 来週の月曜日に試験をします。',
      'Larang penggunaan kamus dengan 辞書を使わないでください。',
      'Tambahkan alasan singkat dengan 試験ですから。',
      'Tutup dengan がんばりましょう。',
    ],
    modelAnswer: {
      jp: '来週の月曜日に試験をします。辞書を使わないでください。試験ですから、がんばりましょう。',
      kana: 'らいしゅうのげつようびにしけんをします。じしょをつかわないでください。しけんですから、がんばりましょう。',
      romaji:
        'Raishū no getsuyōbi ni shiken o shimasu. Jisho o tsukawanaide kudasai. Shiken desu kara, ganbarimashō.',
      id: 'Senin pekan depan akan diadakan ujian. Mohon jangan menggunakan kamus. Karena ini ujian, ayo kita berusaha.',
      rubySegments: [
        { text: '来週', reading: 'らいしゅう' },
        { text: 'の' },
        { text: '月曜日', reading: 'げつようび' },
        { text: 'に' },
        { text: '試験', reading: 'しけん' },
        { text: 'をします。' },
        { text: '辞書', reading: 'じしょ' },
        { text: 'を' },
        { text: '使', reading: 'つか' },
        { text: 'わないでください。' },
        { text: '試験', reading: 'しけん' },
        { text: 'ですから、がんばりましょう。' },
      ],
      rubyHtml:
        '<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>試験<rt>しけん</rt></ruby>をします。<ruby>辞書<rt>じしょ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わないでください。<ruby>試験<rt>しけん</rt></ruby>ですから、がんばりましょう。',
    },
    selfCheckList: [
      'Menyebut waktu dengan 来週の月曜日に.',
      'Memakai bentuk NAI 使わない, bukan 使います.',
      'Menutup larangan dengan でください.',
      'Mengucapkan がんばりましょう dengan nada mengajak.',
    ],
    sourceRef: 'NHK L24 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L24-RC1',
      lessonId: 'L24',
      front: '今日 (きょう)',
      back: 'Hari ini',
      type: 'vocab',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC2',
      lessonId: 'L24',
      front: '来週 (らいしゅう)',
      back: 'Pekan depan',
      type: 'vocab',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC3',
      lessonId: 'L24',
      front: '月曜日 (げつようび)',
      back: 'Hari Senin',
      type: 'vocab',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC4',
      lessonId: 'L24',
      front: '試験 (しけん)',
      back: 'Ujian',
      type: 'vocab',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC5',
      lessonId: 'L24',
      front: '辞書 (じしょ)',
      back: 'Kamus',
      type: 'vocab',
      sourceRef: 'NHK L24 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC6',
      lessonId: 'L24',
      front: 'Cara membentuk NAI dari MASU',
      back: 'golongan I: i → a + ない · golongan II: buang ます + ない',
      type: 'grammar',
      sourceRef: 'NHK L24 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC7',
      lessonId: 'L24',
      front: 'Pola larangan sopan',
      back: '[bentuk NAI] でください — 使わないでください',
      type: 'grammar',
      sourceRef: 'NHK L24 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC8',
      lessonId: 'L24',
      front: 'Dengarkan dialog resmi NHK L24. Apa yang tidak boleh dipakai?',
      back: '辞書 — kamus.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/24-id-le_01.mp3',
      sourceRef: 'NHK L24 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L24-RC9',
      lessonId: 'L24',
      front: 'Praktikkan menyampaikan aturan ujian.',
      back: '来週の月曜日に試験をします。辞書を使わないでください。',
      type: 'output',
      sourceRef: 'NHK L24 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
