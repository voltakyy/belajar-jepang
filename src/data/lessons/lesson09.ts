import { Lesson } from '../../types';

export const lesson09: Lesson = {
  id: 'L09',
  order: 9,
  title: {
    jp: '何時からですか',
    kana: 'なんじからですか',
    romaji: 'Nanji kara desu ka',
    id: 'Mulai jam berapa?',
    rubySegments: [
      { text: '何時', reading: 'なんじ' },
      { text: 'からですか' },
    ],
    rubyHtml: '<ruby>何時<rt>なんじ</rt></ruby>からですか',
  },
  situationSummary:
    'Profesor Suzuki mengumumkan pemeriksaan kesehatan untuk besok. Anna menanyakan jam mulainya dan kapan harus berkumpul.',
  pdfPage: 14,
  printedPage: 13,
  situationCategories: ['Di universitas', 'Bepergian & Berjalan-jalan'],
  productArcId: 'arc-2',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/9.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/09-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menanyakan jam mulai dengan pola nanji kara desu ka.',
    'Saya bisa menyebut rentang waktu memakai kara dan made.',
  ],
  grammarPoints: [
    {
      id: 'L09-GP1',
      title: 'A KARA B MADE (dari A sampai B)',
      pattern: '[waktu] kara [waktu] made',
      explanationId:
        'から menandai titik awal, まで menandai titik akhir. Pola ini dipakai untuk waktu dan tempat: ９時から１１時まで (dari jam 9 sampai 11).',
      contrastNote:
        'Bahasa Indonesia memakai "dari ... sampai ..." di depan. Bahasa Jepang menempelkan から dan まで langsung pada kata waktu, lalu menutup dengan です.',
      examples: [
        {
          jp: '午前９時から１１時までです。',
          kana: 'ごぜんくじからじゅういちじまでです。',
          romaji: 'Gozen kuji kara jūichi-ji made desu.',
          id: 'Dari jam 9 sampai jam 11 pagi.',
          rubySegments: [
            { text: '午前', reading: 'ごぜん' },
            { text: '９時', reading: 'くじ' },
            { text: 'から' },
            { text: '１１時', reading: 'じゅういちじ' },
            { text: 'までです。' },
          ],
          rubyHtml:
            '<ruby>午前<rt>ごぜん</rt></ruby><ruby>９時<rt>くじ</rt></ruby>から<ruby>１１時<rt>じゅういちじ</rt></ruby>までです。',
        },
        {
          jp: '月曜日から金曜日まで働きます。',
          kana: 'げつようびからきんようびまではたらきます。',
          romaji: 'Getsuyōbi kara kin\'yōbi made hatarakimasu.',
          id: 'Saya bekerja dari Senin sampai Jumat.',
          rubySegments: [
            { text: '月曜日', reading: 'げつようび' },
            { text: 'から' },
            { text: '金曜日', reading: 'きんようび' },
            { text: 'まで' },
            { text: '働', reading: 'はたら' },
            { text: 'きます。' },
          ],
          rubyHtml:
            '<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。',
        },
        {
          jp: 'ここから駅まで歩きます。',
          kana: 'ここからえきまであるきます。',
          romaji: 'Koko kara eki made arukimasu.',
          id: 'Dari sini sampai stasiun saya berjalan kaki.',
          rubySegments: [
            { text: 'ここから' },
            { text: '駅', reading: 'えき' },
            { text: 'まで' },
            { text: '歩', reading: 'ある' },
            { text: 'きます。' },
          ],
          rubyHtml:
            'ここから<ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>きます。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-GP2',
      title: 'NANJI / ~JI / ~JI HAN',
      pattern: '[angka] ji (han)',
      explanationId:
        'じ adalah pembilang jam. 何時 (なんじ) berarti jam berapa. 半 (はん) berarti setengah, jadi ８時半 = 08.30. Beberapa bacaan tidak beraturan: ４時 = よじ, ７時 = しちじ, ９時 = くじ.',
      contrastNote:
        'Bahasa Indonesia menyebut "jam 9" dengan kata "jam" di depan. Bahasa Jepang menaruh 時 setelah angkanya: ９時.',
      examples: [
        {
          jp: '何時からですか。',
          kana: 'なんじからですか。',
          romaji: 'Nanji kara desu ka.',
          id: 'Mulai jam berapa?',
          rubySegments: [
            { text: '何時', reading: 'なんじ' },
            { text: 'からですか。' },
          ],
          rubyHtml:
            '<ruby>何時<rt>なんじ</rt></ruby>からですか。',
        },
        {
          jp: '午前８時半に集まってください。',
          kana: 'ごぜんはちじはんにあつまってください。',
          romaji: 'Gozen hachiji han ni atsumatte kudasai.',
          id: 'Mohon berkumpul jam 8.30 pagi.',
          rubySegments: [
            { text: '午前', reading: 'ごぜん' },
            { text: '８時半', reading: 'はちじはん' },
            { text: 'に' },
            { text: '集', reading: 'あつ' },
            { text: 'まってください。' },
          ],
          rubyHtml:
            '<ruby>午前<rt>ごぜん</rt></ruby><ruby>８時半<rt>はちじはん</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まってください。',
        },
        {
          jp: '今、何時ですか。',
          kana: 'いま、なんじですか。',
          romaji: 'Ima, nanji desu ka.',
          id: 'Sekarang jam berapa?',
          rubySegments: [
            { text: '今', reading: 'いま' },
            { text: '、' },
            { text: '何時', reading: 'なんじ' },
            { text: 'ですか。' },
          ],
          rubyHtml:
            '<ruby>今<rt>いま</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>ですか。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L09 Tata Bahasa p. 13',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L09-V1',
      kanji: '明日',
      kana: 'あした',
      romaji: 'ashita',
      idMeaning: 'Besok',
      contextSentence: {
        jp: '明日、健康診断があります。',
        kana: 'あした、けんこうしんだんがあります。',
        romaji: 'Ashita, kenkōshindan ga arimasu.',
        id: 'Besok ada pemeriksaan kesehatan.',
        rubyHtml:
          '<ruby>明日<rt>あした</rt></ruby>、<ruby>健康診断<rt>けんこうしんだん</rt></ruby>があります。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V2',
      kanji: '健康診断',
      kana: 'けんこうしんだん',
      romaji: 'kenkōshindan',
      idMeaning: 'Pemeriksaan kesehatan',
      contextSentence: {
        jp: '明日、健康診断があります。',
        kana: 'あした、けんこうしんだんがあります。',
        romaji: 'Ashita, kenkōshindan ga arimasu.',
        id: 'Besok ada pemeriksaan kesehatan.',
        rubyHtml:
          '<ruby>明日<rt>あした</rt></ruby>、<ruby>健康診断<rt>けんこうしんだん</rt></ruby>があります。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V3',
      kanji: '何時',
      kana: 'なんじ',
      romaji: 'nanji',
      idMeaning: 'Jam berapa',
      contextSentence: {
        jp: '何時からですか。',
        kana: 'なんじからですか。',
        romaji: 'Nanji kara desu ka.',
        id: 'Mulai jam berapa?',
        rubyHtml:
          '<ruby>何時<rt>なんじ</rt></ruby>からですか。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V4',
      kana: 'から',
      romaji: 'kara',
      idMeaning: 'Dari (titik awal)',
      contextSentence: {
        jp: '午前９時から１１時までです。',
        kana: 'ごぜんくじからじゅういちじまでです。',
        romaji: 'Gozen kuji kara jūichi-ji made desu.',
        id: 'Dari jam 9 sampai jam 11 pagi.',
        rubyHtml:
          '<ruby>午前<rt>ごぜん</rt></ruby><ruby>９時<rt>くじ</rt></ruby>から<ruby>１１時<rt>じゅういちじ</rt></ruby>までです。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V5',
      kana: 'まで',
      romaji: 'made',
      idMeaning: 'Sampai (titik akhir)',
      contextSentence: {
        jp: '午前９時から１１時までです。',
        kana: 'ごぜんくじからじゅういちじまでです。',
        romaji: 'Gozen kuji kara jūichi-ji made desu.',
        id: 'Dari jam 9 sampai jam 11 pagi.',
        rubyHtml:
          '<ruby>午前<rt>ごぜん</rt></ruby><ruby>９時<rt>くじ</rt></ruby>から<ruby>１１時<rt>じゅういちじ</rt></ruby>までです。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V6',
      kanji: '午前',
      kana: 'ごぜん',
      romaji: 'gozen',
      idMeaning: 'Pagi (sebelum tengah hari)',
      contextSentence: {
        jp: '午前９時から１１時までです。',
        kana: 'ごぜんくじからじゅういちじまでです。',
        romaji: 'Gozen kuji kara jūichi-ji made desu.',
        id: 'Dari jam 9 sampai jam 11 pagi.',
        rubyHtml:
          '<ruby>午前<rt>ごぜん</rt></ruby><ruby>９時<rt>くじ</rt></ruby>から<ruby>１１時<rt>じゅういちじ</rt></ruby>までです。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V7',
      kanji: '半',
      kana: 'はん',
      romaji: 'han',
      idMeaning: 'Setengah (untuk jam)',
      contextSentence: {
        jp: 'ここに８時半に集まってください。',
        kana: 'ここにはちじはんにあつまってください。',
        romaji: 'Koko ni hachiji han ni atsumatte kudasai.',
        id: 'Mohon berkumpul di sini jam 8.30.',
        rubyHtml:
          'ここに<ruby>８時半<rt>はちじはん</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まってください。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-V8',
      kanji: '集まります',
      kana: 'あつまります',
      romaji: 'atsumarimasu',
      idMeaning: 'Berkumpul',
      contextSentence: {
        jp: 'ここに８時半に集まってください。',
        kana: 'ここにはちじはんにあつまってください。',
        romaji: 'Koko ni hachiji han ni atsumatte kudasai.',
        id: 'Mohon berkumpul di sini jam 8.30.',
        rubyHtml:
          'ここに<ruby>８時半<rt>はちじはん</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まってください。',
      },
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L09-GQ1',
        question: 'Acara apa yang akan diadakan besok?',
        options: ['Pemeriksaan kesehatan', 'Ujian bahasa Jepang', 'Perjalanan kampus'],
        correctIndex: 0,
        explanation:
          'Guru mengumumkan 明日、健康診断があります — besok ada pemeriksaan kesehatan.',
        sourceRef: 'NHK L09 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L09-GQ2',
        question: 'Jam berapa pemeriksaan itu berlangsung?',
        options: [
          'Dari jam 9 sampai jam 11 pagi',
          'Dari jam 8 sampai jam 9 pagi',
          'Dari jam 11 sampai jam 1 siang',
        ],
        correctIndex: 0,
        explanation:
          'Guru berkata 午前９時から１１時までです — dari jam 9 sampai 11 pagi.',
        sourceRef: 'NHK L09 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L09-DQ1',
        question: 'Jam berapa mahasiswa harus berkumpul?',
        options: ['Jam 8.30', 'Jam 9.00', 'Jam 11.00'],
        correctIndex: 0,
        explanation:
          'Guru meminta ８時半に集まってください — berkumpul jam 8.30.',
        sourceRef: 'NHK L09 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L09-DQ2',
        question: 'Di mana mahasiswa harus berkumpul?',
        options: ['Di tempat itu (koko)', 'Di perpustakaan', 'Di asrama'],
        correctIndex: 0,
        explanation:
          'Guru menunjuk tempat dengan ここ (di sini) saat meminta mereka berkumpul.',
        sourceRef: 'NHK L09 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '午前９時から１１時までです。',
        kana: 'ごぜんくじからじゅういちじまでです。',
        romaji: 'Gozen kuji kara jūichi-ji made desu.',
        id: 'Dari jam 9 sampai jam 11 pagi.',
        rubyHtml:
          '<ruby>午前<rt>ごぜん</rt></ruby><ruby>９時<rt>くじ</rt></ruby>から<ruby>１１時<rt>じゅういちじ</rt></ruby>までです。',
      },
      attribution:
        'Kutipan pendek Pelajaran 9 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L09-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 午前９時 [ ... ] １１時までです。',
      options: ['から (kara)', 'まで (made)', 'に (ni)'],
      correctAnswer: 'から (kara)',
      explanation:
        'から menandai titik awal rentang waktu, まで menandai titik akhir.',
      sourceRef: 'NHK L09 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi pertanyaan yang tepat.',
      correctAnswer: [
        'なんじ から です か',
        'なんじからですか',
      ],
      explanation:
        'Pola pertanyaannya: 何時 + から + です + か.',
      sourceRef: 'NHK L09 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana mengatakan "Dari jam 9 sampai jam 11"?',
      options: [
        '９時から１１時までです',
        '９時まで１１時からです',
        '９時と１１時です',
      ],
      correctAnswer: '９時から１１時までです',
      explanation:
        'から menempel pada titik awal (９時), まで pada titik akhir (１１時).',
      sourceRef: 'NHK L09 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya berkumpul jam 8.30."',
      correctAnswer: [
        '８時半に集まります',
        'はちじはんにあつまります',
      ],
      explanation:
        'Waktu tertentu ditandai に, lalu kata kerja 集まります.',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-EX5',
      type: 'grammar_transform',
      prompt:
        'Ubah ９時から１１時までです menjadi pertanyaan "Mulai jam berapa?".',
      correctAnswer: ['何時からですか', 'なんじからですか'],
      explanation:
        'Ganti titik awal dengan 何時 dan pertahankan pola からですか.',
      sourceRef: 'NHK L09 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu mendengar pengumuman pemeriksaan kesehatan besok. Tanyakan jam mulainya, lalu konfirmasi jam berkumpul.',
    instructions: [
      'Sebut acaranya dengan 明日、健康診断がありますね.',
      'Tanyakan jam mulai dengan 何時からですか.',
      'Konfirmasi jam berkumpul dengan ８時半ですね.',
      'Tutup dengan ありがとうございます.',
    ],
    modelAnswer: {
      jp: '明日、健康診断がありますね。何時からですか。８時半ですね。ありがとうございます。',
      kana: 'あした、けんこうしんだんがありますね。なんじからですか。はちじはんですね。ありがとうございます。',
      romaji:
        'Ashita, kenkōshindan ga arimasu ne. Nanji kara desu ka. Hachiji han desu ne. Arigatō gozaimasu.',
      id: 'Besok ada pemeriksaan kesehatan ya. Mulai jam berapa? Jam 8.30 ya. Terima kasih.',
      rubySegments: [
        { text: '明日', reading: 'あした' },
        { text: '、' },
        { text: '健康診断', reading: 'けんこうしんだん' },
        { text: 'がありますね。' },
        { text: '何時', reading: 'なんじ' },
        { text: 'からですか。８時半ですね。ありがとうございます。' },
      ],
      rubyHtml:
        '<ruby>明日<rt>あした</rt></ruby>、<ruby>健康診断<rt>けんこうしんだん</rt></ruby>がありますね。<ruby>何時<rt>なんじ</rt></ruby>からですか。<ruby>８時半<rt>はちじはん</rt></ruby>ですね。ありがとうございます。',
    },
    selfCheckList: [
      'Memakai 何時からですか untuk menanyakan jam mulai.',
      'Menyebut rentang waktu dengan urutan から lalu まで.',
      'Memakai に setelah jam tertentu saat menyebut waktu tindakan.',
      'Mengucapkan terima kasih setelah mendapat informasi.',
    ],
    sourceRef: 'NHK L09 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L09-RC1',
      lessonId: 'L09',
      front: '明日 (あした)',
      back: 'Besok',
      type: 'vocab',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC2',
      lessonId: 'L09',
      front: '健康診断 (けんこうしんだん)',
      back: 'Pemeriksaan kesehatan',
      type: 'vocab',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC3',
      lessonId: 'L09',
      front: '何時 (なんじ)',
      back: 'Jam berapa',
      type: 'vocab',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC4',
      lessonId: 'L09',
      front: '午前 (ごぜん)',
      back: 'Pagi (sebelum tengah hari)',
      type: 'vocab',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC5',
      lessonId: 'L09',
      front: '半 (はん)',
      back: 'Setengah (untuk jam)',
      type: 'vocab',
      sourceRef: 'NHK L09 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC6',
      lessonId: 'L09',
      front: 'Pola rentang waktu',
      back: '[waktu] から [waktu] まで',
      type: 'grammar',
      sourceRef: 'NHK L09 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC7',
      lessonId: 'L09',
      front: 'Pola menanyakan jam mulai',
      back: '何時 から ですか',
      type: 'grammar',
      sourceRef: 'NHK L09 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC8',
      lessonId: 'L09',
      front: 'Dengarkan dialog resmi NHK L9. Jam berapa pemeriksaan berlangsung?',
      back: '午前９時から１１時までです — dari jam 9 sampai 11 pagi.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/09-id-le_01.mp3',
      sourceRef: 'NHK L09 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L09-RC9',
      lessonId: 'L09',
      front: 'Praktikkan menanyakan jadwal dan mengonfirmasi jam berkumpul.',
      back: '何時からですか。８時半ですね。',
      type: 'output',
      sourceRef: 'NHK L09 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
