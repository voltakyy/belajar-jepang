import { Lesson } from '../../types';

export const lesson11: Lesson = {
  id: 'L11',
  order: 11,
  title: {
    jp: 'ぜひ来てください',
    kana: 'ぜひきてください',
    romaji: 'Zehi kite kudasai',
    id: 'Mohon usahakan datang',
    rubySegments: [
      { text: 'ぜひ' },
      { text: '来', reading: 'き' },
      { text: 'てください' },
    ],
    rubyHtml: 'ぜひ<ruby>来<rt>き</rt></ruby>てください',
  },
  situationSummary:
    'Sebuah pesta akan diadakan di asrama tempat Anna tinggal. Anna mengundang Sakura dan berharap Sakura benar-benar datang ke pesta itu.',
  pdfPage: 16,
  printedPage: 15,
  situationCategories: ['Di universitas', 'Acara Khusus'],
  productArcId: 'arc-2',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/11.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/11-id-le_02.mp3',
  },
  canDo: [
    'Saya bisa mengundang seseorang dengan pola zehi + kata kerja bentuk TE + kudasai.',
    'Saya bisa membedakan 行きます (pergi) dan 来ます (datang) dari sudut pandang pembicara.',
  ],
  grammarPoints: [
    {
      id: 'L11-GP1',
      title: 'ZEHI + BENTUK TE + KUDASAI',
      pattern: 'zehi [kata kerja bentuk TE] kudasai',
      explanationId:
        'ぜひ menambahkan harapan kuat: bukan sekadar "silakan", tetapi "tolong usahakan benar-benar datang". Pola permintaannya tetap bentuk TE + ください, seperti yang sudah dipelajari di L08. Contoh: 来ます menjadi 来て, lalu ぜひ来てください.',
      contrastNote:
        'Bahasa Indonesia sering berkata "Jangan lupa datang" atau "Usahakan datang". Bahasa Jepang menaruh ぜひ di depan permintaan dan tetap memakai bentuk TE + ください.',
      examples: [
        {
          jp: 'さくらさん、ぜひ来てください。',
          kana: 'さくらさん、ぜひきてください。',
          romaji: 'Sakura-san, zehi kite kudasai.',
          id: 'Sakura, mohon usahakan datang.',
          rubySegments: [
            { text: 'さくらさん、ぜひ' },
            { text: '来', reading: 'き' },
            { text: 'てください。' },
          ],
          rubyHtml:
            'さくらさん、ぜひ<ruby>来<rt>き</rt></ruby>てください。',
        },
        {
          jp: 'ぜひ遊びに来てください。',
          kana: 'ぜひあそびにきてください。',
          romaji: 'Zehi asobi ni kite kudasai.',
          id: 'Mohon usahakan datang bermain ke rumah.',
          rubySegments: [
            { text: 'ぜひ' },
            { text: '遊', reading: 'あそ' },
            { text: 'びに' },
            { text: '来', reading: 'き' },
            { text: 'てください。' },
          ],
          rubyHtml:
            'ぜひ<ruby>遊<rt>あそ</rt></ruby>びに<ruby>来<rt>き</rt></ruby>てください。',
        },
        {
          jp: 'ぜひ食べてください。',
          kana: 'ぜひたべてください。',
          romaji: 'Zehi tabete kudasai.',
          id: 'Mohon usahakan cicipi.',
          rubySegments: [
            { text: 'ぜひ' },
            { text: '食', reading: 'た' },
            { text: 'べてください。' },
          ],
          rubyHtml:
            'ぜひ<ruby>食<rt>た</rt></ruby>べてください。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-GP2',
      title: 'IKIMASU DAN KIMASU (pergi dan datang)',
      pattern: 'ikimasu (pergi) / kimasu (datang)',
      explanationId:
        'Pilihan kata bergantung pada posisi pembicara. 行きます dipakai saat pembicara pergi menjauh; 来ます dipakai saat seseorang datang ke tempat pembicara. Anna mengundang Sakura ke asramanya, jadi ia berkata 来てください (datang ke sini). Sakura menjawab 行く行く karena ia yang akan pergi ke asrama.',
      contrastNote:
        'Bahasa Indonesia juga membedakan "pergi" dan "datang", tetapi bahasa Jepang memilihnya berdasarkan posisi pembicara saat berbicara, bukan hanya arah gerak.',
      examples: [
        {
          jp: '今週の土曜日に寮でパーティーを開きます。',
          kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
          romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
          id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
          rubySegments: [
            { text: '今週', reading: 'こんしゅう' },
            { text: 'の' },
            { text: '土曜日', reading: 'どようび' },
            { text: 'に' },
            { text: '寮', reading: 'りょう' },
            { text: 'でパーティーを' },
            { text: '開', reading: 'ひら' },
            { text: 'きます。' },
          ],
          rubyHtml:
            '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
        },
        {
          jp: 'さくらさん、ぜひ来てください。',
          kana: 'さくらさん、ぜひきてください。',
          romaji: 'Sakura-san, zehi kite kudasai.',
          id: 'Sakura, mohon usahakan datang.',
          rubySegments: [
            { text: 'さくらさん、ぜひ' },
            { text: '来', reading: 'き' },
            { text: 'てください。' },
          ],
          rubyHtml:
            'さくらさん、ぜひ<ruby>来<rt>き</rt></ruby>てください。',
        },
        {
          jp: 'わたしも行きます。',
          kana: 'わたしもいきます。',
          romaji: 'Watashi mo ikimasu.',
          id: 'Saya juga pergi.',
          rubySegments: [
            { text: 'わたしも' },
            { text: '行', reading: 'い' },
            { text: 'きます。' },
          ],
          rubyHtml:
            'わたしも<ruby>行<rt>い</rt></ruby>きます。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L11 Pelajaran Tambahan',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L11-V1',
      kanji: '今週',
      kana: 'こんしゅう',
      romaji: 'konshū',
      idMeaning: 'Pekan ini',
      contextSentence: {
        jp: '今週の土曜日に寮でパーティーを開きます。',
        kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
        romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
        id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
        rubyHtml:
          '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V2',
      kanji: '土曜日',
      kana: 'どようび',
      romaji: 'doyōbi',
      idMeaning: 'Hari Sabtu',
      contextSentence: {
        jp: '今週の土曜日に寮でパーティーを開きます。',
        kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
        romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
        id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
        rubyHtml:
          '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V3',
      kanji: '寮',
      kana: 'りょう',
      romaji: 'ryō',
      idMeaning: 'Asrama',
      contextSentence: {
        jp: '今週の土曜日に寮でパーティーを開きます。',
        kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
        romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
        id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
        rubyHtml:
          '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V4',
      kana: 'パーティー',
      romaji: 'pātī',
      idMeaning: 'Pesta',
      contextSentence: {
        jp: '今週の土曜日に寮でパーティーを開きます。',
        kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
        romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
        id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
        rubyHtml:
          '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V5',
      kanji: '開きます',
      kana: 'ひらきます',
      romaji: 'hirakimasu',
      idMeaning: 'Mengadakan (acara) / membuka',
      contextSentence: {
        jp: '今週の土曜日に寮でパーティーを開きます。',
        kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。',
        romaji: 'Konshū no doyōbi ni ryō de pātī o hirakimasu.',
        id: 'Pada hari Sabtu pekan ini, kami akan mengadakan pesta di asrama.',
        rubyHtml:
          '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V6',
      kana: 'ぜひ',
      romaji: 'zehi',
      idMeaning: 'Dengan sangat / usahakan benar-benar',
      contextSentence: {
        jp: 'さくらさん、ぜひ来てください。',
        kana: 'さくらさん、ぜひきてください。',
        romaji: 'Sakura-san, zehi kite kudasai.',
        id: 'Sakura, mohon usahakan datang.',
        rubyHtml:
          'さくらさん、ぜひ<ruby>来<rt>き</rt></ruby>てください。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V7',
      kanji: '来ます',
      kana: 'きます',
      romaji: 'kimasu',
      idMeaning: 'Datang',
      contextSentence: {
        jp: 'さくらさん、ぜひ来てください。',
        kana: 'さくらさん、ぜひきてください。',
        romaji: 'Sakura-san, zehi kite kudasai.',
        id: 'Sakura, mohon usahakan datang.',
        rubyHtml:
          'さくらさん、ぜひ<ruby>来<rt>き</rt></ruby>てください。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-V8',
      kanji: '今度',
      kana: 'こんど',
      romaji: 'kondo',
      idMeaning: 'Kali ini / yang akan datang',
      contextSentence: {
        jp: '今度の土曜日ね。',
        kana: 'こんどのどようびね。',
        romaji: 'Kondo no doyōbi ne.',
        id: 'Hari Sabtu yang akan datang ya.',
        rubyHtml:
          '<ruby>今度<rt>こんど</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>ね。',
      },
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L11-GQ1',
        question: 'Apa yang Anna undangkan kepada Sakura?',
        options: ['Pesta di asrama', 'Pemeriksaan kesehatan', 'Kelas tambahan'],
        correctIndex: 0,
        explanation:
          'Anna berkata 寮でパーティーを開きます — kami akan mengadakan pesta di asrama.',
        sourceRef: 'NHK L11 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L11-GQ2',
        question: 'Kapan pesta itu diadakan?',
        options: ['Sabtu pekan ini', 'Minggu depan', 'Jumat malam'],
        correctIndex: 0,
        explanation:
          'Anna menyebut 今週の土曜日に — pada hari Sabtu pekan ini.',
        sourceRef: 'NHK L11 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L11-DQ1',
        question: 'Bagaimana reaksi Sakura setelah diundang?',
        options: ['Ingin pergi (行く行く)', 'Menolak dengan sopan', 'Bertanya alamat asrama'],
        correctIndex: 0,
        explanation:
          'Sakura menjawab わあ、行く行く — wah, saya ingin sekali pergi.',
        sourceRef: 'NHK L11 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L11-DQ2',
        question: 'Ungkapan mana yang menambah harapan kuat agar Sakura datang?',
        options: ['ぜひ', 'ちょっと', 'まだ'],
        correctIndex: 0,
        explanation:
          'ぜひ membuat undangan terdengar lebih kuat: mohon usahakan datang.',
        sourceRef: 'NHK L11 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'さくらさん、ぜひ来てください。',
        kana: 'さくらさん、ぜひきてください。',
        romaji: 'Sakura-san, zehi kite kudasai.',
        id: 'Sakura, mohon usahakan datang.',
        rubyHtml:
          'さくらさん、ぜひ<ruby>来<rt>き</rt></ruby>てください。',
      },
      attribution:
        'Kutipan pendek Pelajaran 11 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L11-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: 今週の土曜日 [ ... ] 寮でパーティーを開きます。',
      options: ['に (ni)', 'で (de)', 'を (o)'],
      correctAnswer: 'に (ni)',
      explanation:
        'Partikel に menandai waktu tertentu, yaitu hari Sabtu pekan ini.',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi undangan yang tepat.',
      correctAnswer: [
        'さくらさん ぜひ きて ください',
        'さくらさんぜひきてください',
      ],
      explanation:
        'Urutannya: sapaan + ぜひ + kata kerja bentuk TE + ください.',
      sourceRef: 'NHK L11 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-EX3',
      type: 'audio_meaning',
      prompt: 'Kamu ingin mengundang teman ke pestamu dengan sungguh-sungguh. Ungkapan mana yang tepat?',
      options: [
        'ぜひパーティーに来てください',
        'パーティーに行きました',
        'パーティーはどこですか',
      ],
      correctAnswer: 'ぜひパーティーに来てください',
      explanation:
        'Pola ぜひ + 来てください dipakai untuk undangan yang kuat. 行きました adalah bentuk lampau, bukan undangan.',
      sourceRef: 'NHK L11 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Saya akan mengadakan pesta di asrama pada hari Sabtu."',
      correctAnswer: [
        '土曜日に寮でパーティーを開きます',
        'どようびにりょうでパーティーをひらきます',
      ],
      explanation:
        'Waktu memakai に, tempat memakai で, lalu パーティーを開きます.',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 来ます (datang) menjadi bentuk TE.',
      correctAnswer: ['来て', 'きて'],
      explanation:
        'Bentuk TE dari 来ます adalah 来て. Bentuk ini dipakai sebelum ください.',
      sourceRef: 'NHK L11 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu mengadakan pesta di asrama pada Sabtu pekan ini. Undang teman sekelasmu dan mintalah ia benar-benar datang.',
    instructions: [
      'Sebutkan waktu dan tempat dengan 今週の土曜日に寮で.',
      'Katakan bahwa kamu mengadakan pesta dengan パーティーを開きます.',
      'Undang temanmu dengan ぜひ来てください.',
      'Tutup dengan menyebut 今度の土曜日ね untuk konfirmasi.',
    ],
    modelAnswer: {
      jp: '今週の土曜日に寮でパーティーを開きます。ぜひ来てください。今度の土曜日ね。',
      kana: 'こんしゅうのどようびにりょうでパーティーをひらきます。ぜひきてください。こんどのどようびね。',
      romaji:
        'Konshū no doyōbi ni ryō de pātī o hirakimasu. Zehi kite kudasai. Kondo no doyōbi ne.',
      id: 'Pada hari Sabtu pekan ini, kami mengadakan pesta di asrama. Mohon usahakan datang. Hari Sabtu yang akan datang ya.',
      rubySegments: [
        { text: '今週', reading: 'こんしゅう' },
        { text: 'の' },
        { text: '土曜日', reading: 'どようび' },
        { text: 'に' },
        { text: '寮', reading: 'りょう' },
        { text: 'でパーティーを' },
        { text: '開', reading: 'ひら' },
        { text: 'きます。ぜひ' },
        { text: '来', reading: 'き' },
        { text: 'てください。' },
        { text: '今度', reading: 'こんど' },
        { text: 'の' },
        { text: '土曜日', reading: 'どようび' },
        { text: 'ね。' },
      ],
      rubyHtml:
        '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>寮<rt>りょう</rt></ruby>でパーティーを<ruby>開<rt>ひら</rt></ruby>きます。ぜひ<ruby>来<rt>き</rt></ruby>てください。<ruby>今度<rt>こんど</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>ね。',
    },
    selfCheckList: [
      'Menyebut waktu dengan partikel に dan tempat dengan で.',
      'Memakai ぜひ sebelum 来てください.',
      'Memilih 来てください karena mengundang orang ke tempat pembicara.',
      'Mengonfirmasi hari dengan 今度の土曜日ね.',
    ],
    sourceRef: 'NHK L11 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L11-RC1',
      lessonId: 'L11',
      front: '今週 (こんしゅう)',
      back: 'Pekan ini',
      type: 'vocab',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC2',
      lessonId: 'L11',
      front: '土曜日 (どようび)',
      back: 'Hari Sabtu',
      type: 'vocab',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC3',
      lessonId: 'L11',
      front: '寮 (りょう)',
      back: 'Asrama',
      type: 'vocab',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC4',
      lessonId: 'L11',
      front: 'ぜひ',
      back: 'Dengan sangat / usahakan benar-benar',
      type: 'vocab',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC5',
      lessonId: 'L11',
      front: '来ます (きます)',
      back: 'Datang',
      type: 'vocab',
      sourceRef: 'NHK L11 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC6',
      lessonId: 'L11',
      front: 'Pola undangan yang kuat',
      back: 'ぜひ + [kata kerja bentuk TE] + ください',
      type: 'grammar',
      sourceRef: 'NHK L11 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC7',
      lessonId: 'L11',
      front: 'Kapan memakai 行きます dan 来ます?',
      back: '行きます = pergi menjauh; 来ます = datang ke tempat pembicara',
      type: 'grammar',
      sourceRef: 'NHK L11 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC8',
      lessonId: 'L11',
      front: 'Dengarkan dialog resmi NHK L11. Apa yang Anna undangkan?',
      back: 'Pesta di asrama pada Sabtu pekan ini: 今週の土曜日に寮でパーティーを開きます。',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/11-id-le_02.mp3',
      sourceRef: 'NHK L11 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L11-RC9',
      lessonId: 'L11',
      front: 'Praktikkan mengundang teman ke pesta asrama.',
      back: '今週の土曜日に寮でパーティーを開きます。ぜひ来てください。',
      type: 'output',
      sourceRef: 'NHK L11 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
