import { Lesson } from '../../types';

export const lesson23: Lesson = {
  id: 'L23',
  order: 23,
  title: {
    jp: 'お母さんに叱られました',
    kana: 'おかあさんにしかられました',
    romaji: 'Okāsan ni shikararemashita',
    id: 'Saya dimarahi ibu',
    rubySegments: [
      { text: 'お' },
      { text: '母', reading: 'かあ' },
      { text: 'さんに' },
      { text: '叱', reading: 'しか' },
      { text: 'られました' },
    ],
    rubyHtml:
      'お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました',
  },
  situationSummary:
    'Di kampus, Sakura menanyakan apakah Anna berhasil pulang sebelum jam malam. Anna mengaku tidak, lalu menceritakan bahwa ia dimarahi ibu asrama dan tugas bersihnya bertambah tiga kali.',
  pdfPage: 28,
  printedPage: 27,
  situationCategories: ['Di universitas'],
  productArcId: 'arc-4',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/23.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/23-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menyatakan tindakan pasif dengan kata kerja bentuk ~raremashita.',
    'Saya bisa menyebut pelaku tindakan pasif dengan partikel ni.',
    'Saya bisa memakai bentuk lampau negatif sopan ~masen deshita.',
  ],
  grammarPoints: [
    {
      id: 'L23-GP1',
      title: 'PASIF ~RAREMASHITA',
      pattern: '[orang] wa [pelaku] ni [kata kerja pasif]',
      explanationId:
        'Bentuk pasif menempatkan penerima tindakan sebagai topik. 叱ります (memarahi) menjadi 叱られます (dimarahi), lalu 叱られました (dimarahi). Pelaku ditandai partikel に. Pola ini sering muncul pada kejadian yang dialami pembicara, baik tidak menyenangkan seperti dimarahi atau ditertawakan, maupun menyenangkan seperti dipuji.',
      contrastNote:
        'Bahasa Indonesia juga memakai "dimarahi", tetapi bahasa Jepang mengubah bentuk kata kerjanya dan menandai pelaku dengan に, bukan kata "oleh".',
      examples: [
        {
          jp: 'お母さんに叱られました。',
          kana: 'おかあさんにしかられました。',
          romaji: 'Okāsan ni shikararemashita.',
          id: 'Saya dimarahi ibu.',
          rubySegments: [
            { text: 'お' },
            { text: '母', reading: 'かあ' },
            { text: 'さんに' },
            { text: '叱', reading: 'しか' },
            { text: 'られました。' },
          ],
          rubyHtml:
            'お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました。',
        },
        {
          jp: '先生に褒められました。',
          kana: 'せんせいにほめられました。',
          romaji: 'Sensei ni homeraremashita.',
          id: 'Saya dipuji guru.',
          rubySegments: [
            { text: '先生', reading: 'せんせい' },
            { text: 'に' },
            { text: '褒', reading: 'ほ' },
            { text: 'められました。' },
          ],
          rubyHtml:
            '<ruby>先生<rt>せんせい</rt></ruby>に<ruby>褒<rt>ほ</rt></ruby>められました。',
        },
        {
          jp: '友達に笑われました。',
          kana: 'ともだちにわらわれました。',
          romaji: 'Tomodachi ni warawaremashita.',
          id: 'Saya ditertawakan teman.',
          rubySegments: [
            { text: '友達', reading: 'ともだち' },
            { text: 'に' },
            { text: '笑', reading: 'わら' },
            { text: 'われました。' },
          ],
          rubyHtml:
            '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>笑<rt>わら</rt></ruby>われました。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L23 Sensei Oshiete p. 27',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-GP2',
      title: 'LAMPAU NEGATIF ~MASEN DESHITA',
      pattern: '[kata kerja bentuk MASU] → masen deshita',
      explanationId:
        'Bentuk sopan lampau negatif dibuat dengan mengganti ます menjadi ませんでした. 間に合います (tiba tepat waktu) → 間に合いません (tidak tiba) → 間に合いませんでした (tidak tiba, lampau). Pola ini dipakai untuk menyatakan bahwa sesuatu tidak terjadi di masa lalu.',
      contrastNote:
        'Bahasa Indonesia memakai "tidak" dan keterangan waktu. Bahasa Jepang menandai lampau dan negatif sekaligus pada kata kerjanya.',
      examples: [
        {
          jp: 'いいえ。間に合いませんでした。',
          kana: 'いいえ。まにあいませんでした。',
          romaji: 'Iie. Maniaimasen deshita.',
          id: 'Tidak. Saya tidak tiba tepat waktu.',
          rubySegments: [
            { text: 'いいえ。' },
            { text: '間', reading: 'ま' },
            { text: 'に' },
            { text: '合', reading: 'あ' },
            { text: 'いませんでした。' },
          ],
          rubyHtml:
            'いいえ。<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いませんでした。',
        },
        {
          jp: '昨日は勉強しませんでした。',
          kana: 'きのうはべんきょうしませんでした。',
          romaji: 'Kinō wa benkyō shimasen deshita.',
          id: 'Kemarin saya tidak belajar.',
          rubySegments: [
            { text: '昨日', reading: 'きのう' },
            { text: 'は' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'しませんでした。' },
          ],
          rubyHtml:
            '<ruby>昨日<rt>きのう</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>しませんでした。',
        },
        {
          jp: '朝ご飯を食べませんでした。',
          kana: 'あさごはんをたべませんでした。',
          romaji: 'Asagohan o tabemasen deshita.',
          id: 'Saya tidak sarapan.',
          rubySegments: [
            { text: '朝ご飯', reading: 'あさごはん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べませんでした。' },
          ],
          rubyHtml:
            '<ruby>朝ご飯<rt>あさごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べませんでした。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L23 Tata Bahasa p. 27',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L23-V1',
      kanji: 'この間',
      kana: 'このあいだ',
      romaji: 'kono aida',
      idMeaning: 'Waktu itu / baru-baru ini',
      contextSentence: {
        jp: 'この間は門限に間に合った？',
        kana: 'このあいだはもんげんにまにあった？',
        romaji: 'Kono aida wa mongen ni maniatta?',
        id: 'Waktu itu apakah kamu tiba sebelum jam malam?',
        rubyHtml:
          'この<ruby>間<rt>あいだ</rt></ruby>は<ruby>門限<rt>もんげん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った？',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V2',
      kanji: '叱ります',
      kana: 'しかります',
      romaji: 'shikarimasu',
      idMeaning: 'Memarahi',
      contextSentence: {
        jp: 'お母さんに叱られました。',
        kana: 'おかあさんにしかられました。',
        romaji: 'Okāsan ni shikararemashita.',
        id: 'Saya dimarahi ibu.',
        rubyHtml:
          'お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V3',
      kanji: '掃除',
      kana: 'そうじ',
      romaji: 'sōji',
      idMeaning: 'Pembersihan',
      contextSentence: {
        jp: '掃除当番が３回増えました。',
        kana: 'そうじとうばんがさんかいふえました。',
        romaji: 'Sōji tōban ga sankai fuemashita.',
        id: 'Tugas pembersihan saya bertambah tiga kali.',
        rubyHtml:
          '<ruby>掃除<rt>そうじ</rt></ruby><ruby>当番<rt>とうばん</rt></ruby>が<ruby>３回<rt>さんかい</rt></ruby><ruby>増<rt>ふ</rt></ruby>えました。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V4',
      kanji: '当番',
      kana: 'とうばん',
      romaji: 'tōban',
      idMeaning: 'Tugas giliran',
      contextSentence: {
        jp: '掃除当番が３回増えました。',
        kana: 'そうじとうばんがさんかいふえました。',
        romaji: 'Sōji tōban ga sankai fuemashita.',
        id: 'Tugas pembersihan saya bertambah tiga kali.',
        rubyHtml:
          '<ruby>掃除<rt>そうじ</rt></ruby><ruby>当番<rt>とうばん</rt></ruby>が<ruby>３回<rt>さんかい</rt></ruby><ruby>増<rt>ふ</rt></ruby>えました。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V5',
      kanji: '増えます',
      kana: 'ふえます',
      romaji: 'fuemasu',
      idMeaning: 'Bertambah',
      contextSentence: {
        jp: '掃除当番が３回増えました。',
        kana: 'そうじとうばんがさんかいふえました。',
        romaji: 'Sōji tōban ga sankai fuemashita.',
        id: 'Tugas pembersihan saya bertambah tiga kali.',
        rubyHtml:
          '<ruby>掃除<rt>そうじ</rt></ruby><ruby>当番<rt>とうばん</rt></ruby>が<ruby>３回<rt>さんかい</rt></ruby><ruby>増<rt>ふ</rt></ruby>えました。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V6',
      kana: 'それで',
      romaji: 'sore de',
      idMeaning: 'Karena itu / jadi',
      contextSentence: {
        jp: 'それで、お母さんに叱られました。',
        kana: 'それで、おかあさんにしかられました。',
        romaji: 'Sore de, okāsan ni shikararemashita.',
        id: 'Karena itu, saya dimarahi ibu.',
        rubyHtml:
          'それで、お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V7',
      kanji: '大変',
      kana: 'たいへん',
      romaji: 'taihen',
      idMeaning: 'Berat / susah',
      contextSentence: {
        jp: 'それは大変だったね。',
        kana: 'それはたいへんだったね。',
        romaji: 'Sore wa taihen datta ne.',
        id: 'Itu berat ya.',
        rubyHtml:
          'それは<ruby>大変<rt>たいへん</rt></ruby>だったね。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-V8',
      kanji: '間に合います',
      kana: 'まにあいます',
      romaji: 'maniaimasu',
      idMeaning: 'Tiba tepat waktu',
      contextSentence: {
        jp: 'いいえ。間に合いませんでした。',
        kana: 'いいえ。まにあいませんでした。',
        romaji: 'Iie. Maniaimasen deshita.',
        id: 'Tidak. Saya tidak tiba tepat waktu.',
        rubyHtml:
          'いいえ。<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いませんでした。',
      },
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L23-GQ1',
        question: 'Apa yang Sakura tanyakan kepada Anna?',
        options: [
          'Apakah Anna tiba sebelum jam malam',
          'Apakah Anna suka lagu Jepang',
          'Apakah Anna sudah makan',
        ],
        correctIndex: 0,
        explanation:
          'Sakura bertanya この間は門限に間に合った？ — waktu itu apakah kamu tiba sebelum jam malam?',
        sourceRef: 'NHK L23 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L23-GQ2',
        question: 'Apa akibat yang Anna terima?',
        options: [
          'Tugas bersihnya bertambah tiga kali',
          'Ia harus pindah kamar',
          'Ia dilarang berkaraoke',
        ],
        correctIndex: 0,
        explanation:
          'Anna berkata 掃除当番が３回増えました — tugas pembersihannya bertambah tiga kali.',
        sourceRef: 'NHK L23 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L23-DQ1',
        question: 'Apakah Anna tiba tepat waktu?',
        options: ['Tidak', 'Ya', 'Ia tidak ingat'],
        correctIndex: 0,
        explanation:
          'Anna menjawab いいえ。間に合いませんでした — tidak, saya tidak tiba tepat waktu.',
        sourceRef: 'NHK L23 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L23-DQ2',
        question: 'Siapa yang memarahi Anna?',
        options: ['Ibu asrama', 'Sakura', 'Profesor Suzuki'],
        correctIndex: 0,
        explanation:
          'Anna berkata お母さんに叱られました — saya dimarahi ibu (ibu asrama).',
        sourceRef: 'NHK L23 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'お母さんに叱られました。',
        kana: 'おかあさんにしかられました。',
        romaji: 'Okāsan ni shikararemashita.',
        id: 'Saya dimarahi ibu.',
        rubyHtml:
          'お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました。',
      },
      attribution:
        'Kutipan pendek Pelajaran 23 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L23-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat pasif berikut: お母さん [ ... ] 叱られました。',
      options: ['に (ni)', 'を (o)', 'で (de)'],
      correctAnswer: 'に (ni)',
      explanation:
        'Pada kalimat pasif, pelaku tindakan ditandai partikel に: お母さんに叱られました — dimarahi oleh ibu.',
      sourceRef: 'NHK L23 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-EX2',
      type: 'sentence_order',
      prompt: 'Susun kalimat tentang tugas bersih Anna.',
      correctAnswer: [
        '掃除当番 が ３回 増えました',
        '掃除当番が３回増えました',
      ],
      explanation:
        'Urutannya: 掃除当番 + が + ３回 + 増えました. が menandai apa yang bertambah.',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengatakan "Saya tidak tiba tepat waktu." Mana yang tepat?',
      options: [
        '間に合いませんでした',
        '間に合いました',
        '間に合いません',
      ],
      correctAnswer: '間に合いませんでした',
      explanation:
        'Bentuk lampau negatif sopan adalah ませんでした. 間に合いません hanya negatif sekarang.',
      sourceRef: 'NHK L23 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya dimarahi ibu."',
      correctAnswer: ['お母さんに叱られました', 'おかあさんにしかられました'],
      explanation:
        'Gunakan bentuk pasif 叱られました dan tandai pelaku dengan に.',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 叱ります (memarahi) menjadi bentuk pasif sopan.',
      correctAnswer: ['叱られます', 'しかられます'],
      explanation:
        'Bentuk pasif dari 叱ります adalah 叱られます. Tambahkan ました untuk lampau: 叱られました.',
      sourceRef: 'NHK L23 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Sakura bertanya tentang malam ketika kamu pulang terlambat. Ceritakan bahwa kamu tidak tiba tepat waktu, bahwa kamu dimarahi, dan apa akibatnya.',
    instructions: [
      'Jawab pertanyaan dengan いいえ、間に合いませんでした。',
      'Sebutkan pelaku dengan お母さんに叱られました。',
      'Tambahkan akibatnya: 掃除当番が３回増えました。',
      'Tutup dengan 本当に大変でした。 untuk menegaskan beratnya kejadian.',
    ],
    modelAnswer: {
      jp: 'いいえ、間に合いませんでした。それで、お母さんに叱られました。掃除当番が３回増えました。本当に大変でした。',
      kana: 'いいえ、まにあいませんでした。それで、おかあさんにしかられました。そうじとうばんがさんかいふえました。ほんとうにたいへんでした。',
      romaji:
        'Iie, maniaimasen deshita. Sore de, okāsan ni shikararemashita. Sōji tōban ga sankai fuemashita. Hontō ni taihen deshita.',
      id: 'Tidak, saya tidak tiba tepat waktu. Karena itu, saya dimarahi ibu. Tugas bersih saya bertambah tiga kali. Benar-benar berat.',
      rubySegments: [
        { text: 'いいえ、' },
        { text: '間', reading: 'ま' },
        { text: 'に' },
        { text: '合', reading: 'あ' },
        { text: 'いませんでした。それで、お' },
        { text: '母', reading: 'かあ' },
        { text: 'さんに' },
        { text: '叱', reading: 'しか' },
        { text: 'られました。' },
        { text: '掃除', reading: 'そうじ' },
        { text: '当番', reading: 'とうばん' },
        { text: 'が' },
        { text: '３回', reading: 'さんかい' },
        { text: '増', reading: 'ふ' },
        { text: 'えました。' },
        { text: '本当', reading: 'ほんとう' },
        { text: 'に' },
        { text: '大変', reading: 'たいへん' },
        { text: 'でした。' },
      ],
      rubyHtml:
        'いいえ、<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いませんでした。それで、お<ruby>母<rt>かあ</rt></ruby>さんに<ruby>叱<rt>しか</rt></ruby>られました。<ruby>掃除<rt>そうじ</rt></ruby><ruby>当番<rt>とうばん</rt></ruby>が<ruby>３回<rt>さんかい</rt></ruby><ruby>増<rt>ふ</rt></ruby>えました。<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>大変<rt>たいへん</rt></ruby>でした。',
    },
    selfCheckList: [
      'Menjawab dengan lampau negatif 間に合いませんでした.',
      'Memakai bentuk pasif 叱られました.',
      'Menandai pelaku dengan に.',
      'Menyebut akibat dengan 掃除当番が３回増えました.',
      'Menutup dengan 本当に大変でした。',
    ],
    sourceRef: 'NHK L23 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L23-RC1',
      lessonId: 'L23',
      front: 'この間 (このあいだ)',
      back: 'Waktu itu / baru-baru ini',
      type: 'vocab',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC2',
      lessonId: 'L23',
      front: '叱ります (しかります)',
      back: 'Memarahi',
      type: 'vocab',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC3',
      lessonId: 'L23',
      front: '掃除 (そうじ)',
      back: 'Pembersihan',
      type: 'vocab',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC4',
      lessonId: 'L23',
      front: '当番 (とうばん)',
      back: 'Tugas giliran',
      type: 'vocab',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC5',
      lessonId: 'L23',
      front: '増えます (ふえます)',
      back: 'Bertambah',
      type: 'vocab',
      sourceRef: 'NHK L23 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC6',
      lessonId: 'L23',
      front: 'Pola pasif',
      back: '[orang] は [pelaku] に [kata kerja pasif]',
      type: 'grammar',
      sourceRef: 'NHK L23 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC7',
      lessonId: 'L23',
      front: 'Bentuk lampau negatif sopan',
      back: 'masu → masen deshita — 間に合いませんでした',
      type: 'grammar',
      sourceRef: 'NHK L23 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC8',
      lessonId: 'L23',
      front: 'Dengarkan dialog resmi NHK L23. Apa akibat bagi Anna?',
      back: '掃除当番が３回増えました — tugas bersih bertambah tiga kali.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/23-id-le_01.mp3',
      sourceRef: 'NHK L23 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L23-RC9',
      lessonId: 'L23',
      front: 'Praktikkan menceritakan pengalaman dimarahi.',
      back: '間に合いませんでした。お母さんに叱られました。',
      type: 'output',
      sourceRef: 'NHK L23 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
