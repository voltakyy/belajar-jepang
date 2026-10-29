import { Lesson } from '../../types';

export const lesson13: Lesson = {
  id: 'L13',
  order: 13,
  title: {
    jp: '小説が好きです',
    kana: 'しょうせつがすきです',
    romaji: 'Shōsetsu ga suki desu',
    id: 'Saya suka novel',
    rubySegments: [
      { text: '小説', reading: 'しょうせつ' },
      { text: 'が' },
      { text: '好', reading: 'す' },
      { text: 'きです' },
    ],
    rubyHtml: '<ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです',
  },
  situationSummary:
    'Di pesta asrama, Sakura bertanya apa hobi Rodrigo. Rodrigo suka novel sejarah, lalu Sakura mengusulkan pergi ke toko buku baru di Shinjuku bersama-sama.',
  pdfPage: 18,
  printedPage: 17,
  situationCategories: ['Di asrama', 'Acara Khusus'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/13.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/13-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa menyatakan kesukaan dengan pola [orang] wa [benda] ga suki desu.',
    'Saya bisa mengajak seseorang dengan kata kerja bentuk ませんか.',
  ],
  grammarPoints: [
    {
      id: 'L13-GP1',
      title: 'A WA B GA SUKI DESU (A suka B)',
      pattern: '[orang] wa [benda] ga suki desu',
      explanationId:
        '好き adalah kata sifat, bukan kata kerja. Benda yang disukai ditandai partikel が, bukan を. Contoh: 歴史小説が好きです (saya suka novel sejarah). Untuk bertanya, pakai 何が好きですか.',
      contrastNote:
        'Bahasa Indonesia memakai kata kerja "suka" dengan objek langsung. Bahasa Jepang menyusunnya sebagai sifat: "bagi saya, novel itu menyenangkan", sehingga partikelnya が.',
      examples: [
        {
          jp: '特に歴史小説が好きです。',
          kana: 'とくにれきししょうせつがすきです。',
          romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
          id: 'Terutama saya suka novel sejarah.',
          rubySegments: [
            { text: '特', reading: 'とく' },
            { text: 'に' },
            { text: '歴史', reading: 'れきし' },
            { text: '小説', reading: 'しょうせつ' },
            { text: 'が' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          rubyHtml:
            '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
        },
        {
          jp: 'アンナさんはマンガが好きです。',
          kana: 'アンナさんはマンガがすきです。',
          romaji: 'Anna-san wa manga ga suki desu.',
          id: 'Anna suka manga.',
          rubySegments: [
            { text: 'アンナさんはマンガが' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          rubyHtml:
            'アンナさんはマンガが<ruby>好<rt>す</rt></ruby>きです。',
        },
        {
          jp: '私は日本の料理が好きです。',
          kana: 'わたしはにほんのりょうりがすきです。',
          romaji: 'Watashi wa Nihon no ryōri ga suki desu.',
          id: 'Saya suka masakan Jepang.',
          rubySegments: [
            { text: '私', reading: 'わたし' },
            { text: 'は' },
            { text: '日本', reading: 'にほん' },
            { text: 'の' },
            { text: '料理', reading: 'りょうり' },
            { text: 'が' },
            { text: '好', reading: 'す' },
            { text: 'きです。' },
          ],
          rubyHtml:
            '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L13 Tata Bahasa p. 17',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-GP2',
      title: 'MASEN KA (bagaimana kalau ...?)',
      pattern: '[kata kerja] masen ka',
      explanationId:
        'Bentuk negatif ません ditambah か dipakai untuk mengajak dengan sopan. 行きませんか berarti "bagaimana kalau pergi?" — ajakan yang memberi kebebasan pada lawan bicara untuk menolak. Bandingkan dengan 行きましょう yang lebih tegas.',
      contrastNote:
        'Bahasa Indonesia bisa berkata "Ayo pergi" atau "Mau pergi?". Bahasa Jepang memakai ませんか, yang secara bentuk negatif tetapi fungsinya mengajak.',
      examples: [
        {
          jp: 'みんなで行きませんか。',
          kana: 'みんなでいきませんか。',
          romaji: 'Minna de ikimasen ka.',
          id: 'Bagaimana kalau kita pergi bersama-sama?',
          rubySegments: [
            { text: 'みんなで' },
            { text: '行', reading: 'い' },
            { text: 'きませんか。' },
          ],
          rubyHtml:
            'みんなで<ruby>行<rt>い</rt></ruby>きませんか。',
        },
        {
          jp: '一緒に昼ご飯を食べませんか。',
          kana: 'いっしょにひるごはんをたべませんか。',
          romaji: 'Issho ni hirugohan o tabemasen ka.',
          id: 'Bagaimana kalau kita makan siang bersama?',
          rubySegments: [
            { text: '一緒', reading: 'いっしょ' },
            { text: 'に' },
            { text: '昼', reading: 'ひる' },
            { text: 'ご' },
            { text: '飯', reading: 'はん' },
            { text: 'を' },
            { text: '食', reading: 'た' },
            { text: 'べませんか。' },
          ],
          rubyHtml:
            '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べませんか。',
        },
        {
          jp: '新宿に行きませんか。',
          kana: 'しんじゅくにいきませんか。',
          romaji: 'Shinjuku ni ikimasen ka.',
          id: 'Bagaimana kalau pergi ke Shinjuku?',
          rubySegments: [
            { text: '新宿', reading: 'しんじゅく' },
            { text: 'に' },
            { text: '行', reading: 'い' },
            { text: 'きませんか。' },
          ],
          rubyHtml:
            '<ruby>新宿<rt>しんじゅく</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L13 Tata Bahasa p. 17',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L13-V1',
      kanji: '趣味',
      kana: 'しゅみ',
      romaji: 'shumi',
      idMeaning: 'Hobi',
      contextSentence: {
        jp: 'ロドリゴさんの趣味は何ですか。',
        kana: 'ロドリゴさんのしゅみはなんですか。',
        romaji: 'Rodrigo-san no shumi wa nan desu ka.',
        id: 'Apa hobi Rodrigo?',
        rubyHtml:
          'ロドリゴさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V2',
      kanji: '読書',
      kana: 'どくしょ',
      romaji: 'dokusho',
      idMeaning: 'Membaca buku',
      contextSentence: {
        jp: '読書です。特に歴史小説が好きです。',
        kana: 'どくしょです。とくにれきししょうせつがすきです。',
        romaji: 'Dokusho desu. Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Membaca buku. Terutama suka novel sejarah.',
        rubyHtml:
          '<ruby>読書<rt>どくしょ</rt></ruby>です。<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V3',
      kanji: '特に',
      kana: 'とくに',
      romaji: 'tokuni',
      idMeaning: 'Terutama',
      contextSentence: {
        jp: '特に歴史小説が好きです。',
        kana: 'とくにれきししょうせつがすきです。',
        romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Terutama saya suka novel sejarah.',
        rubyHtml:
          '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V4',
      kanji: '歴史',
      kana: 'れきし',
      romaji: 'rekishi',
      idMeaning: 'Sejarah',
      contextSentence: {
        jp: '特に歴史小説が好きです。',
        kana: 'とくにれきししょうせつがすきです。',
        romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Terutama saya suka novel sejarah.',
        rubyHtml:
          '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V5',
      kanji: '小説',
      kana: 'しょうせつ',
      romaji: 'shōsetsu',
      idMeaning: 'Novel',
      contextSentence: {
        jp: '特に歴史小説が好きです。',
        kana: 'とくにれきししょうせつがすきです。',
        romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Terutama saya suka novel sejarah.',
        rubyHtml:
          '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V6',
      kanji: '好き',
      kana: 'すき',
      romaji: 'suki',
      idMeaning: 'Suka',
      contextSentence: {
        jp: '特に歴史小説が好きです。',
        kana: 'とくにれきししょうせつがすきです。',
        romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Terutama saya suka novel sejarah.',
        rubyHtml:
          '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V7',
      kanji: '本屋',
      kana: 'ほんや',
      romaji: 'hon-ya',
      idMeaning: 'Toko buku',
      contextSentence: {
        jp: '新宿に新しい本屋が出来ましたよ。',
        kana: 'しんじゅくにあたらしいほんやができましたよ。',
        romaji: 'Shinjuku ni atarashii hon-ya ga dekimashita yo.',
        id: 'Toko buku baru sudah dibuka di Shinjuku, lho.',
        rubyHtml:
          '<ruby>新宿<rt>しんじゅく</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>本屋<rt>ほんや</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>ましたよ。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-V8',
      kanji: '新宿',
      kana: 'しんじゅく',
      romaji: 'Shinjuku',
      idMeaning: 'Shinjuku (nama tempat di Tokyo)',
      contextSentence: {
        jp: '新宿に新しい本屋が出来ましたよ。',
        kana: 'しんじゅくにあたらしいほんやができましたよ。',
        romaji: 'Shinjuku ni atarashii hon-ya ga dekimashita yo.',
        id: 'Toko buku baru sudah dibuka di Shinjuku, lho.',
        rubyHtml:
          '<ruby>新宿<rt>しんじゅく</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>本屋<rt>ほんや</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>ましたよ。',
      },
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L13-GQ1',
        question: 'Apa hobi Rodrigo?',
        options: ['Membaca buku', 'Memasak', 'Fotografi'],
        correctIndex: 0,
        explanation:
          'Rodrigo menjawab 読書です — membaca buku.',
        sourceRef: 'NHK L13 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L13-GQ2',
        question: 'Buku seperti apa yang paling ia sukai?',
        options: ['Novel sejarah', 'Komik', 'Buku masakan'],
        correctIndex: 0,
        explanation:
          'Rodrigo berkata 特に歴史小説が好きです — terutama novel sejarah.',
        sourceRef: 'NHK L13 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L13-DQ1',
        question: 'Apa yang Sakura usulkan?',
        options: [
          'Pergi ke toko buku baru bersama-sama',
          'Memasak kari bersama',
          'Kembali ke asrama',
        ],
        correctIndex: 0,
        explanation:
          'Sakura berkata みんなで行きませんか — bagaimana kalau kita pergi bersama?',
        sourceRef: 'NHK L13 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L13-DQ2',
        question: 'Di mana toko buku baru itu?',
        options: ['Shinjuku', 'Shibuya', 'Asrama'],
        correctIndex: 0,
        explanation:
          'Sakura menyebut 新宿に新しい本屋が出来ました — toko buku baru dibuka di Shinjuku.',
        sourceRef: 'NHK L13 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '特に歴史小説が好きです。',
        kana: 'とくにれきししょうせつがすきです。',
        romaji: 'Tokuni rekishi shōsetsu ga suki desu.',
        id: 'Terutama saya suka novel sejarah.',
        rubyHtml:
          '<ruby>特<rt>とく</rt></ruby>に<ruby>歴史<rt>れきし</rt></ruby><ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
      },
      attribution:
        'Kutipan pendek Pelajaran 13 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L13-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 歴史小説 [ ... ] 好きです。',
      options: ['が (ga)', 'を (o)', 'に (ni)'],
      correctAnswer: 'が (ga)',
      explanation:
        'Kata sifat 好き memakai partikel が untuk menandai benda yang disukai.',
      sourceRef: 'NHK L13 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi pertanyaan yang tepat.',
      correctAnswer: [
        'ろどりごさん の しゅみ は なん です か',
        'ろどりごさんのしゅみはなんですか',
      ],
      explanation:
        'Urutannya: pemilik + の + 趣味 + は + 何 + です + か.',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana mengajak teman pergi bersama dengan sopan?',
      options: [
        'みんなで行きませんか',
        'みんなで行きました',
        'みんなで行きます',
      ],
      correctAnswer: 'みんなで行きませんか',
      explanation:
        'ませんか dipakai untuk mengajak; 行きました hanya menyatakan lampau.',
      sourceRef: 'NHK L13 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya suka novel."',
      correctAnswer: ['小説が好きです', 'しょうせつがすきです'],
      explanation:
        'Benda yang disukai ditandai が, lalu 好きです.',
      sourceRef: 'NHK L13 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 行きます (pergi) menjadi bentuk ajakan ませんか.',
      correctAnswer: ['行きませんか', 'いきませんか'],
      explanation:
        'Ganti ます dengan ませんか untuk mengajak: 行きませんか — bagaimana kalau pergi?',
      sourceRef: 'NHK L13 grammar point 2',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Di pesta asrama, kamu baru berkenalan dengan seorang mahasiswa. Ceritakan hobimu, sebutkan apa yang kamu suka, lalu ajak ia ke toko buku bersama.',
    instructions: [
      'Sebutkan hobimu dengan 趣味は読書です.',
      'Sebutkan kesukaanmu dengan 小説が好きです.',
      'Ajak ia dengan みんなで本屋に行きませんか.',
      'Tutup dengan ぜひ一緒に行きましょう.',
    ],
    modelAnswer: {
      jp: '私の趣味は読書です。小説が好きです。みんなで本屋に行きませんか。ぜひ一緒に行きましょう。',
      kana: 'わたしのしゅみはどくしょです。しょうせつがすきです。みんなでほんやにいきませんか。ぜひいっしょにいきましょう。',
      romaji:
        'Watashi no shumi wa dokusho desu. Shōsetsu ga suki desu. Minna de hon-ya ni ikimasen ka. Zehi issho ni ikimashō.',
      id: 'Hobi saya membaca buku. Saya suka novel. Bagaimana kalau kita pergi ke toko buku bersama? Ayo kita pergi bersama.',
      rubySegments: [
        { text: '私', reading: 'わたし' },
        { text: 'の' },
        { text: '趣味', reading: 'しゅみ' },
        { text: 'は' },
        { text: '読書', reading: 'どくしょ' },
        { text: 'です。' },
        { text: '小説', reading: 'しょうせつ' },
        { text: 'が' },
        { text: '好', reading: 'す' },
        { text: 'きです。みんなで' },
        { text: '本屋', reading: 'ほんや' },
        { text: 'に' },
        { text: '行', reading: 'い' },
        { text: 'きませんか。ぜひ' },
        { text: '一緒', reading: 'いっしょ' },
        { text: 'に' },
        { text: '行', reading: 'い' },
        { text: 'きましょう。' },
      ],
      rubyHtml:
        '<ruby>私<rt>わたし</rt></ruby>の<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>読書<rt>どくしょ</rt></ruby>です。<ruby>小説<rt>しょうせつ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。みんなで<ruby>本屋<rt>ほんや</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか。ぜひ<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましょう。',
    },
    selfCheckList: [
      'Memakai が, bukan を, setelah 好き.',
      'Menyebut hobi dengan pola 趣味は...です.',
      'Mengajak dengan 行きませんか, bukan 行きます.',
      'Menutup dengan ajakan 行きましょう.',
    ],
    sourceRef: 'NHK L13 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L13-RC1',
      lessonId: 'L13',
      front: '趣味 (しゅみ)',
      back: 'Hobi',
      type: 'vocab',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC2',
      lessonId: 'L13',
      front: '読書 (どくしょ)',
      back: 'Membaca buku',
      type: 'vocab',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC3',
      lessonId: 'L13',
      front: '歴史 (れきし)',
      back: 'Sejarah',
      type: 'vocab',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC4',
      lessonId: 'L13',
      front: '小説 (しょうせつ)',
      back: 'Novel',
      type: 'vocab',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC5',
      lessonId: 'L13',
      front: '本屋 (ほんや)',
      back: 'Toko buku',
      type: 'vocab',
      sourceRef: 'NHK L13 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC6',
      lessonId: 'L13',
      front: 'Pola menyatakan kesukaan',
      back: '[orang] は [benda] が 好きです',
      type: 'grammar',
      sourceRef: 'NHK L13 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC7',
      lessonId: 'L13',
      front: 'Pola mengajak dengan sopan',
      back: '[kata kerja] ませんか — 行きませんか',
      type: 'grammar',
      sourceRef: 'NHK L13 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC8',
      lessonId: 'L13',
      front: 'Dengarkan dialog resmi NHK L13. Apa hobi Rodrigo?',
      back: '読書です。特に歴史小説が好きです — membaca, terutama novel sejarah.',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/13-id-le_01.mp3',
      sourceRef: 'NHK L13 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L13-RC9',
      lessonId: 'L13',
      front: 'Praktikkan menceritakan hobi dan mengajak teman.',
      back: '趣味は読書です。みんなで本屋に行きませんか。',
      type: 'output',
      sourceRef: 'NHK L13 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
