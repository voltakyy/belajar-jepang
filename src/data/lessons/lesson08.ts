import { Lesson } from '../../types';

export const lesson08: Lesson = {
  id: 'L08',
  order: 8,
  title: {
    jp: 'もう一度お願いします',
    kana: 'もういちどおねがいします',
    romaji: 'Mō ichido onegai shimasu',
    id: 'Mohon sekali lagi',
    rubySegments: [
      { text: 'もう' },
      { text: '一度', reading: 'いちど' },
      { text: 'お' },
      { text: '願', reading: 'ねが' },
      { text: 'いします' },
    ],
    rubyHtml:
      'もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします',
  },
  situationSummary:
    'Di kelas bahasa Jepang, Profesor Suzuki meminta mahasiswa menghafal materi yang sering keluar ujian. Anna meminta gurunya mengulang.',
  pdfPage: 13,
  printedPage: 12,
  situationCategories: ['Di universitas', 'Penyelesaian masalah'],
  productArcId: 'arc-2',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/8.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/08-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa meminta seseorang melakukan sesuatu dengan kata kerja bentuk TE + kudasai.',
    'Saya bisa meminta pengulangan dengan sopan memakai mō ichido onegai shimasu.',
  ],
  grammarPoints: [
    {
      id: 'L08-GP1',
      title: 'KATA KERJA BENTUK TE + KUDASAI',
      pattern: '[kata kerja bentuk TE] kudasai',
      explanationId:
        'Untuk meminta seseorang melakukan sesuatu dengan sopan, ubah kata kerja ke bentuk TE lalu tambahkan ください. Contoh: 覚えます (menghafal) menjadi 覚えてください (mohon hafalkan). Bentuk TE tidak dibentuk dengan satu aturan tunggal; kelompok kata kerjanya menentukan perubahan.',
      contrastNote:
        'Bahasa Indonesia memakai "mohon" di awal ("Mohon hafalkan ini"). Bahasa Jepang menaruh permintaan di akhir: kata kerja bentuk TE + ください.',
      examples: [
        {
          jp: 'これを覚えてください。',
          kana: 'これをおぼえてください。',
          romaji: 'Kore o oboete kudasai.',
          id: 'Mohon hafalkan ini.',
          rubySegments: [
            { text: 'これを' },
            { text: '覚', reading: 'おぼ' },
            { text: 'えてください。' },
          ],
          rubyHtml:
            'これを<ruby>覚<rt>おぼ</rt></ruby>えてください。',
        },
        {
          jp: 'ここに名前を書いてください。',
          kana: 'ここになまえをかいてください。',
          romaji: 'Koko ni namae o kaite kudasai.',
          id: 'Mohon tulis nama di sini.',
          rubySegments: [
            { text: 'ここに' },
            { text: '名前', reading: 'なまえ' },
            { text: 'を' },
            { text: '書', reading: 'か' },
            { text: 'いてください。' },
          ],
          rubyHtml:
            'ここに<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。',
        },
        {
          jp: 'もう一度言ってください。',
          kana: 'もういちどいってください。',
          romaji: 'Mō ichido itte kudasai.',
          id: 'Mohon ucapkan sekali lagi.',
          rubySegments: [
            { text: 'もう' },
            { text: '一度', reading: 'いちど' },
            { text: '言', reading: 'い' },
            { text: 'ってください。' },
          ],
          rubyHtml:
            'もう<ruby>一度<rt>いちど</rt></ruby><ruby>言<rt>い</rt></ruby>ってください。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L08 Tata Bahasa p. 12',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-GP2',
      title: 'MŌ ICHIDO ONEGAI SHIMASU',
      pattern: 'mō ichido onegai shimasu',
      explanationId:
        'Ungkapan tetap untuk meminta pengulangan dengan sopan: もう一度 (sekali lagi) + お願いします (mohon). Dipakai saat tidak menangkap ucapan, termasuk di kelas.',
      contrastNote:
        'Bahasa Indonesia bisa berkata "Sekali lagi, ya" dengan nada santai. Dalam kelas atau situasi resmi, bahasa Jepang memakai お願いします agar terdengar sopan.',
      examples: [
        {
          jp: '先生、もう一度お願いします。',
          kana: 'せんせい、もういちどおねがいします。',
          romaji: 'Sensei, mō ichido onegai shimasu.',
          id: 'Pak Guru, mohon sekali lagi.',
          rubySegments: [
            { text: '先生', reading: 'せんせい' },
            { text: '、もう' },
            { text: '一度', reading: 'いちど' },
            { text: 'お' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          rubyHtml:
            '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
        },
        {
          jp: 'すみません、もう一度お願いします。',
          kana: 'すみません、もういちどおねがいします。',
          romaji: 'Sumimasen, mō ichido onegai shimasu.',
          id: 'Permisi, mohon sekali lagi.',
          rubySegments: [
            { text: 'すみません、もう' },
            { text: '一度', reading: 'いちど' },
            { text: 'お' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          rubyHtml:
            'すみません、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
        },
        {
          jp: 'ゆっくりお願いします。',
          kana: 'ゆっくりおねがいします。',
          romaji: 'Yukkuri onegai shimasu.',
          id: 'Mohon pelan-pelan.',
          rubySegments: [
            { text: 'ゆっくりお' },
            { text: '願', reading: 'ねが' },
            { text: 'いします。' },
          ],
          rubyHtml:
            'ゆっくりお<ruby>願<rt>ねが</rt></ruby>いします。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L08-V1',
      kana: 'みなさん',
      romaji: 'minasan',
      idMeaning: 'Semuanya / semua orang',
      contextSentence: {
        jp: 'みなさん、これを覚えてください。',
        kana: 'みなさん、これをおぼえてください。',
        romaji: 'Minasan, kore o oboete kudasai.',
        id: 'Semuanya, mohon hafalkan ini.',
        rubyHtml:
          'みなさん、これを<ruby>覚<rt>おぼ</rt></ruby>えてください。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V2',
      kanji: '覚えます',
      kana: 'おぼえます',
      romaji: 'oboemasu',
      idMeaning: 'Menghafal',
      contextSentence: {
        jp: 'みなさん、これを覚えてください。',
        kana: 'みなさん、これをおぼえてください。',
        romaji: 'Minasan, kore o oboete kudasai.',
        id: 'Semuanya, mohon hafalkan ini.',
        rubyHtml:
          'みなさん、これを<ruby>覚<rt>おぼ</rt></ruby>えてください。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V3',
      kanji: '試験',
      kana: 'しけん',
      romaji: 'shiken',
      idMeaning: 'Ujian',
      contextSentence: {
        jp: '試験によく出ます。',
        kana: 'しけんによくでます。',
        romaji: 'Shiken ni yoku demasu.',
        id: 'Sering keluar dalam ujian.',
        rubyHtml:
          '<ruby>試験<rt>しけん</rt></ruby>によく<ruby>出<rt>で</rt></ruby>ます。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V4',
      kana: 'よく',
      romaji: 'yoku',
      idMeaning: 'Sering (dalam konteks ini)',
      contextSentence: {
        jp: '試験によく出ます。',
        kana: 'しけんによくでます。',
        romaji: 'Shiken ni yoku demasu.',
        id: 'Sering keluar dalam ujian.',
        rubyHtml:
          '<ruby>試験<rt>しけん</rt></ruby>によく<ruby>出<rt>で</rt></ruby>ます。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V5',
      kanji: '出ます',
      kana: 'でます',
      romaji: 'demasu',
      idMeaning: 'Keluar / muncul',
      contextSentence: {
        jp: '試験によく出ます。',
        kana: 'しけんによくでます。',
        romaji: 'Shiken ni yoku demasu.',
        id: 'Sering keluar dalam ujian.',
        rubyHtml:
          '<ruby>試験<rt>しけん</rt></ruby>によく<ruby>出<rt>で</rt></ruby>ます。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V6',
      kanji: 'もう一度',
      kana: 'もういちど',
      romaji: 'mō ichido',
      idMeaning: 'Sekali lagi',
      contextSentence: {
        jp: '先生、もう一度お願いします。',
        kana: 'せんせい、もういちどおねがいします。',
        romaji: 'Sensei, mō ichido onegai shimasu.',
        id: 'Pak Guru, mohon sekali lagi.',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V7',
      kanji: 'お願いします',
      kana: 'おねがいします',
      romaji: 'onegai shimasu',
      idMeaning: 'Mohon (permintaan sopan)',
      contextSentence: {
        jp: '先生、もう一度お願いします。',
        kana: 'せんせい、もういちどおねがいします。',
        romaji: 'Sensei, mō ichido onegai shimasu.',
        id: 'Pak Guru, mohon sekali lagi.',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-V8',
      kanji: '先生',
      kana: 'せんせい',
      romaji: 'sensei',
      idMeaning: 'Guru / dosen',
      contextSentence: {
        jp: '先生、もう一度お願いします。',
        kana: 'せんせい、もういちどおねがいします。',
        romaji: 'Sensei, mō ichido onegai shimasu.',
        id: 'Pak Guru, mohon sekali lagi.',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      },
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L08-GQ1',
        question: 'Apa yang guru minta mahasiswa lakukan?',
        options: ['Menghafal materi', 'Membaca buku', 'Menulis esai'],
        correctIndex: 0,
        explanation:
          'Guru berkata これを覚えてください — mohon hafalkan ini.',
        sourceRef: 'NHK L08 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L08-GQ2',
        question: 'Mengapa materi itu penting?',
        options: [
          'Sering keluar dalam ujian',
          'Akan dipakai saat liburan',
          'Buku teksnya langka',
        ],
        correctIndex: 0,
        explanation:
          'Guru menambahkan 試験によく出ます — sering keluar dalam ujian.',
        sourceRef: 'NHK L08 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L08-DQ1',
        question: 'Apa yang Anna katakan kepada guru?',
        options: [
          '先生、もう一度お願いします',
          '先生、ありがとうございます',
          '先生、いただきます',
        ],
        correctIndex: 0,
        explanation:
          'Anna meminta gurunya mengulang: 先生、もう一度お願いします.',
        sourceRef: 'NHK L08 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L08-DQ2',
        question: 'Apa reaksi mahasiswa mendengar pengumuman guru?',
        options: ['Terkejut (えっ)', 'Tertawa (わはは)', 'Menyetujui (はい)'],
        correctIndex: 0,
        explanation:
          'Mahasiswa berkata えっ — reaksi terkejut, mungkin karena materi ujian.',
        sourceRef: 'NHK L08 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: '先生、もう一度お願いします。',
        kana: 'せんせい、もういちどおねがいします。',
        romaji: 'Sensei, mō ichido onegai shimasu.',
        id: 'Pak Guru, mohon sekali lagi.',
        rubyHtml:
          '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      },
      attribution:
        'Kutipan pendek Pelajaran 8 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L08-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: みなさん、これ [ ... ] 覚えてください。',
      options: ['を (o)', 'が (ga)', 'に (ni)'],
      correctAnswer: 'を (o)',
      explanation:
        'Partikel を menandai これ sebagai objek dari 覚えてください.',
      sourceRef: 'NHK L08 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi permintaan yang sopan.',
      correctAnswer: [
        'せんせい もういちど おねがいします',
        'せんせいもういちどおねがいします',
      ],
      explanation:
        'Panggil lawan bicara (先生), lalu sampaikan もう一度お願いします.',
      sourceRef: 'NHK L08 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-EX3',
      type: 'audio_meaning',
      prompt:
        'Kamu tidak menangkap ucapan guru. Apa yang kamu katakan agar ia mengulang?',
      options: [
        'もう一度お願いします',
        'ありがとうございます',
        'いただきます',
      ],
      correctAnswer: 'もう一度お願いします',
      explanation:
        'もう一度お願いします adalah permintaan sopan untuk mengulang ucapan.',
      sourceRef: 'NHK L08 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Mohon hafalkan ini."',
      correctAnswer: ['これを覚えてください', 'これをおぼえてください'],
      explanation:
        'Objek ditandai を, lalu kata kerja bentuk TE 覚えて diikuti ください.',
      sourceRef: 'NHK L08 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 覚えます (menghafal) menjadi bentuk TE.',
      correctAnswer: ['覚えて', 'おぼえて'],
      explanation:
        'Bentuk TE dari 覚えます adalah 覚えて. Bentuk ini dipakai sebelum ください.',
      sourceRef: 'NHK L08 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu tidak menangkap instruksi guru tentang materi ujian. Minta guru mengulang, lalu nyatakan bahwa kamu akan menghafalnya.',
    instructions: [
      'Panggil guru dengan 先生.',
      'Minta pengulangan dengan もう一度お願いします.',
      'Setelah guru mengulang, ucapkan はい、これを覚えます.',
      'Tutup dengan ありがとうございます.',
    ],
    modelAnswer: {
      jp: '先生、もう一度お願いします。はい、これを覚えます。ありがとうございます。',
      kana: 'せんせい、もういちどおねがいします。はい、これをおぼえます。ありがとうございます。',
      romaji:
        'Sensei, mō ichido onegai shimasu. Hai, kore o oboemasu. Arigatō gozaimasu.',
      id: 'Pak Guru, mohon sekali lagi. Ya, saya akan menghafal ini. Terima kasih.',
      rubySegments: [
        { text: '先生', reading: 'せんせい' },
        { text: '、もう' },
        { text: '一度', reading: 'いちど' },
        { text: 'お' },
        { text: '願', reading: 'ねが' },
        { text: 'いします。はい、これを' },
        { text: '覚', reading: 'おぼ' },
        { text: 'えます。ありがとうございます。' },
      ],
      rubyHtml:
        '<ruby>先生<rt>せんせい</rt></ruby>、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。はい、これを<ruby>覚<rt>おぼ</rt></ruby>えます。ありがとうございます。',
    },
    selfCheckList: [
      'Menyebut 先生 sebelum meminta.',
      'Memakai もう一度お願いします, bukan hanya もう一度.',
      'Menggunakan bentuk TE sebelum ください saat meminta tindakan.',
      'Menutup dengan terima kasih.',
    ],
    sourceRef: 'NHK L08 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L08-RC1',
      lessonId: 'L08',
      front: 'みなさん',
      back: 'Semuanya / semua orang',
      type: 'vocab',
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC2',
      lessonId: 'L08',
      front: '覚えます (おぼえます)',
      back: 'Menghafal',
      type: 'vocab',
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC3',
      lessonId: 'L08',
      front: '試験 (しけん)',
      back: 'Ujian',
      type: 'vocab',
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC4',
      lessonId: 'L08',
      front: '出ます (でます)',
      back: 'Keluar / muncul',
      type: 'vocab',
      sourceRef: 'NHK L08 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC5',
      lessonId: 'L08',
      front: 'もう一度お願いします',
      back: 'Mohon sekali lagi',
      type: 'grammar',
      sourceRef: 'NHK L08 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC6',
      lessonId: 'L08',
      front: 'Pola untuk meminta seseorang melakukan sesuatu',
      back: '[kata kerja bentuk TE] ください',
      type: 'grammar',
      sourceRef: 'NHK L08 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC7',
      lessonId: 'L08',
      front: 'Bentuk TE dari 覚えます',
      back: '覚えて (おぼえて)',
      type: 'grammar',
      sourceRef: 'NHK L08 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC8',
      lessonId: 'L08',
      front: 'Dengarkan dialog resmi NHK L8. Apa yang Anna minta?',
      back: 'Guru mengulang materi: 先生、もう一度お願いします。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/08-id-le_01.mp3',
      sourceRef: 'NHK L08 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L08-RC9',
      lessonId: 'L08',
      front: 'Praktikkan meminta guru mengulang instruksi.',
      back: '先生、もう一度お願いします。はい、これを覚えます。',
      type: 'output',
      sourceRef: 'NHK L08 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-28',
  },
};
