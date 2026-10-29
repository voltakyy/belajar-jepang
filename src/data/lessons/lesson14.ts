import { Lesson } from '../../types';

export const lesson14: Lesson = {
  id: 'L14',
  order: 14,
  title: {
    jp: 'ここにゴミを捨ててもいいですか',
    kana: 'ここにごみをすててもいいですか',
    romaji: 'Koko ni gomi o sutete mo ii desu ka',
    id: 'Bolehkah saya membuang sampah di sini?',
    rubySegments: [
      { text: 'ここに' },
      { text: 'ゴミ' },
      { text: 'を' },
      { text: '捨', reading: 'す' },
      { text: 'ててもいいですか' },
    ],
    rubyHtml:
      'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか',
  },
  situationSummary:
    'Anna membereskan asrama setelah pesta. Ia bertanya kepada ibu asrama apakah boleh membuang sampah di tempat itu; kaleng harus dipisahkan karena bahan daur ulang.',
  pdfPage: 19,
  printedPage: 18,
  situationCategories: ['Di asrama', 'Penyelesaian masalah'],
  productArcId: 'arc-3',
  officialUrls: {
    lessonPage:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/14.html',
    audioMp3:
      'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/14-id-le_01.mp3',
  },
  canDo: [
    'Saya bisa meminta izin dengan kata kerja bentuk TE + mo ii desu ka.',
    'Saya bisa menyampaikan alasan dengan kara sebelum permintaan.',
  ],
  grammarPoints: [
    {
      id: 'L14-GP1',
      title: 'BENTUK TE + MO II DESU KA (bolehkah ...?)',
      pattern: '[kata kerja bentuk TE] mo ii desu ka',
      explanationId:
        'Pola ini dipakai untuk meminta izin. 捨てます (membuang) menjadi 捨てて, lalu ditambah もいいですか. Jawaban izin: はい、いいです. Jawaban menolak: いいえ、だめです. Contoh lain: 写真を撮ってもいいですか (bolehkah saya mengambil foto?).',
      contrastNote:
        'Bahasa Indonesia memakai "bolehkah saya ...?" di depan. Bahasa Jepang menaruh permintaan izin di akhir kalimat setelah bentuk TE.',
      examples: [
        {
          jp: 'ここにゴミを捨ててもいいですか。',
          kana: 'ここにごみをすててもいいですか。',
          romaji: 'Koko ni gomi o sutete mo ii desu ka.',
          id: 'Bolehkah saya membuang sampah di sini?',
          rubySegments: [
            { text: 'ここにゴミを' },
            { text: '捨', reading: 'す' },
            { text: 'ててもいいですか。' },
          ],
          rubyHtml:
            'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか。',
        },
        {
          jp: '写真を撮ってもいいですか。',
          kana: 'しゃしんをとってもいいですか。',
          romaji: 'Shashin o totte mo ii desu ka.',
          id: 'Bolehkah saya mengambil foto?',
          rubySegments: [
            { text: '写真', reading: 'しゃしん' },
            { text: 'を' },
            { text: '撮', reading: 'と' },
            { text: 'ってもいいですか。' },
          ],
          rubyHtml:
            '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもいいですか。',
        },
        {
          jp: '入ってもいいですか。',
          kana: 'はいってもいいですか。',
          romaji: 'Haitte mo ii desu ka.',
          id: 'Bolehkah saya masuk?',
          rubySegments: [
            { text: '入', reading: 'はい' },
            { text: 'ってもいいですか。' },
          ],
          rubyHtml:
            '<ruby>入<rt>はい</rt></ruby>ってもいいですか。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L14 Sensei Oshiete p. 18',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-GP2',
      title: 'KARA (karena)',
      pattern: '[alasan] kara',
      explanationId:
        'から menempel pada akhir klausa alasan, lalu diikuti permintaan atau kesimpulan. Dalam dialog: 資源ですから、別の袋に入れてください — karena ini bahan daur ulang, mohon masukkan ke kantong lain. Urutannya alasan dahulu, baru permintaan.',
      contrastNote:
        'Bahasa Indonesia bisa menaruh "karena" di awal atau akhir. Bahasa Jepang menaruh から setelah alasan, dan permintaan menyusul di belakang.',
      examples: [
        {
          jp: '資源ですから、別の袋に入れてください。',
          kana: 'しげんですから、べつのふくろにいれてください。',
          romaji: 'Shigen desu kara, betsu no fukuro ni irete kudasai.',
          id: 'Karena ini bahan daur ulang, mohon masukkan ke kantong lain.',
          rubySegments: [
            { text: '資源', reading: 'しげん' },
            { text: 'ですから、' },
            { text: '別', reading: 'べつ' },
            { text: 'の' },
            { text: '袋', reading: 'ふくろ' },
            { text: 'に' },
            { text: '入', reading: 'い' },
            { text: 'れてください。' },
          ],
          rubyHtml:
            '<ruby>資源<rt>しげん</rt></ruby>ですから、<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
        },
        {
          jp: '明日は試験ですから、今日は勉強します。',
          kana: 'あしたはしけんですから、きょうはべんきょうします。',
          romaji: 'Ashita wa shiken desu kara, kyō wa benkyō shimasu.',
          id: 'Karena besok ujian, hari ini saya belajar.',
          rubySegments: [
            { text: '明日', reading: 'あした' },
            { text: 'は' },
            { text: '試験', reading: 'しけん' },
            { text: 'ですから、' },
            { text: '今日', reading: 'きょう' },
            { text: 'は' },
            { text: '勉強', reading: 'べんきょう' },
            { text: 'します。' },
          ],
          rubyHtml:
            '<ruby>明日<rt>あした</rt></ruby>は<ruby>試験<rt>しけん</rt></ruby>ですから、<ruby>今日<rt>きょう</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>します。',
        },
        {
          jp: '寒いですから、窓を閉めてください。',
          kana: 'さむいですから、まどをしめてください。',
          romaji: 'Samui desu kara, mado o shimete kudasai.',
          id: 'Karena dingin, mohon tutup jendelanya.',
          rubySegments: [
            { text: '寒', reading: 'さむ' },
            { text: 'いですから、' },
            { text: '窓', reading: 'まど' },
            { text: 'を' },
            { text: '閉', reading: 'し' },
            { text: 'めてください。' },
          ],
          rubyHtml:
            '<ruby>寒<rt>さむ</rt></ruby>いですから、<ruby>窓<rt>まど</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めてください。',
        },
      ],
      role: 'active_target',
      sourceRef: 'NHK L14 Tata Bahasa p. 18',
      qaStatus: 'machine_checked',
    },
  ],
  vocabulary: [
    {
      id: 'L14-V1',
      kana: 'ゴミ',
      romaji: 'gomi',
      idMeaning: 'Sampah',
      contextSentence: {
        jp: 'ここにゴミを捨ててもいいですか。',
        kana: 'ここにごみをすててもいいですか。',
        romaji: 'Koko ni gomi o sutete mo ii desu ka.',
        id: 'Bolehkah saya membuang sampah di sini?',
        rubyHtml:
          'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V2',
      kanji: '捨てます',
      kana: 'すてます',
      romaji: 'sutemasu',
      idMeaning: 'Membuang',
      contextSentence: {
        jp: 'ここにゴミを捨ててもいいですか。',
        kana: 'ここにごみをすててもいいですか。',
        romaji: 'Koko ni gomi o sutete mo ii desu ka.',
        id: 'Bolehkah saya membuang sampah di sini?',
        rubyHtml:
          'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V3',
      kanji: '缶',
      kana: 'かん',
      romaji: 'kan',
      idMeaning: 'Kaleng',
      contextSentence: {
        jp: '缶は別の袋に入れてください。',
        kana: 'かんはべつのふくろにいれてください。',
        romaji: 'Kan wa betsu no fukuro ni irete kudasai.',
        id: 'Mohon masukkan kaleng ke kantong yang lain.',
        rubyHtml:
          '<ruby>缶<rt>かん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V4',
      kanji: '別',
      kana: 'べつ',
      romaji: 'betsu',
      idMeaning: 'Lain / terpisah',
      contextSentence: {
        jp: '缶は別の袋に入れてください。',
        kana: 'かんはべつのふくろにいれてください。',
        romaji: 'Kan wa betsu no fukuro ni irete kudasai.',
        id: 'Mohon masukkan kaleng ke kantong yang lain.',
        rubyHtml:
          '<ruby>缶<rt>かん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V5',
      kanji: '袋',
      kana: 'ふくろ',
      romaji: 'fukuro',
      idMeaning: 'Kantong',
      contextSentence: {
        jp: '缶は別の袋に入れてください。',
        kana: 'かんはべつのふくろにいれてください。',
        romaji: 'Kan wa betsu no fukuro ni irete kudasai.',
        id: 'Mohon masukkan kaleng ke kantong yang lain.',
        rubyHtml:
          '<ruby>缶<rt>かん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V6',
      kanji: '入れます',
      kana: 'いれます',
      romaji: 'iremasu',
      idMeaning: 'Memasukkan',
      contextSentence: {
        jp: '缶は別の袋に入れてください。',
        kana: 'かんはべつのふくろにいれてください。',
        romaji: 'Kan wa betsu no fukuro ni irete kudasai.',
        id: 'Mohon masukkan kaleng ke kantong yang lain.',
        rubyHtml:
          '<ruby>缶<rt>かん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V7',
      kanji: '資源',
      kana: 'しげん',
      romaji: 'shigen',
      idMeaning: 'Sumber daya / bahan daur ulang',
      contextSentence: {
        jp: '資源ですから、別の袋に入れてください。',
        kana: 'しげんですから、べつのふくろにいれてください。',
        romaji: 'Shigen desu kara, betsu no fukuro ni irete kudasai.',
        id: 'Karena ini bahan daur ulang, mohon masukkan ke kantong lain.',
        rubyHtml:
          '<ruby>資源<rt>しげん</rt></ruby>ですから、<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-V8',
      kanji: '分かりました',
      kana: 'わかりました',
      romaji: 'wakarimashita',
      idMeaning: 'Saya mengerti',
      contextSentence: {
        jp: 'はい、分かりました。',
        kana: 'はい、わかりました。',
        romaji: 'Hai, wakarimashita.',
        id: 'Ya, saya mengerti.',
        rubyHtml:
          'はい、<ruby>分<rt>わ</rt></ruby>かりました。',
      },
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
  ],
  listening: {
    gistQuestions: [
      {
        id: 'L14-GQ1',
        question: 'Apa yang Anna tanyakan kepada ibu asrama?',
        options: [
          'Apakah boleh membuang sampah di situ',
          'Apakah pesta sudah selesai',
          'Apakah kaleng bisa dijual',
        ],
        correctIndex: 0,
        explanation:
          'Anna bertanya ここにゴミを捨ててもいいですか — bolehkah saya membuang sampah di sini?',
        sourceRef: 'NHK L14 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L14-GQ2',
        question: 'Apa yang harus dilakukan dengan kaleng?',
        options: [
          'Dimasukkan ke kantong terpisah',
          'Dibuang ke tempat sampah biasa',
          'Dikembalikan ke toko',
        ],
        correctIndex: 0,
        explanation:
          'Ibu asrama berkata 缶は別の袋に入れてください — masukkan kaleng ke kantong lain.',
        sourceRef: 'NHK L14 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
    detailQuestions: [
      {
        id: 'L14-DQ1',
        question: 'Mengapa kaleng harus dipisahkan?',
        options: [
          'Karena termasuk bahan daur ulang',
          'Karena kalengnya kotor',
          'Karena kantongnya penuh',
        ],
        correctIndex: 0,
        explanation:
          'Ibu asrama menjelaskan 資源ですから — karena ini bahan daur ulang.',
        sourceRef: 'NHK L14 Dialog',
        qaStatus: 'machine_checked',
      },
      {
        id: 'L14-DQ2',
        question: 'Bagaimana jawaban Anna?',
        options: ['はい、分かりました', 'いいえ、だめです', 'ちょっと待ってください'],
        correctIndex: 0,
        explanation:
          'Anna menjawab はい、分かりました — ya, saya mengerti.',
        sourceRef: 'NHK L14 Dialog',
        qaStatus: 'machine_checked',
      },
    ],
  },
  noticeShortQuotes: [
    {
      targetSentence: {
        jp: 'ここにゴミを捨ててもいいですか。',
        kana: 'ここにごみをすててもいいですか。',
        romaji: 'Koko ni gomi o sutete mo ii desu ka.',
        id: 'Bolehkah saya membuang sampah di sini?',
        rubyHtml:
          'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか。',
      },
      attribution:
        'Kutipan pendek Pelajaran 14 (NHK WORLD Radio Japan © ver. April 2015)',
    },
  ],
  exercises: [
    {
      id: 'L14-EX1',
      type: 'cloze_particle',
      prompt: 'Lengkapi kalimat berikut: ここ [ ... ] ゴミを捨ててもいいですか。',
      options: ['に (ni)', 'を (o)', 'で (de)'],
      correctAnswer: 'に (ni)',
      explanation:
        'Partikel に menandai tempat tujuan tindakan membuang: membuang ke sini.',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-EX2',
      type: 'sentence_order',
      prompt: 'Susun kata-kata berikut menjadi permintaan yang tepat.',
      correctAnswer: [
        'かん は べつ の ふくろ に いれて ください',
        'かんはべつのふくろにいれてください',
      ],
      explanation:
        'Urutannya: 缶は + 別の袋に + 入れて + ください.',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-EX3',
      type: 'audio_meaning',
      prompt: 'Bagaimana meminta izin membuang sampah di tempat itu?',
      options: [
        'ここにゴミを捨ててもいいですか',
        'ここにゴミを捨てました',
        'ここにゴミを捨ててください',
      ],
      correctAnswer: 'ここにゴミを捨ててもいいですか',
      explanation:
        'Bentuk TE + もいいですか dipakai untuk meminta izin. ください adalah permintaan agar orang lain melakukan.',
      sourceRef: 'NHK L14 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-EX4',
      type: 'meaning_to_jp',
      prompt: 'Tuliskan dalam bahasa Jepang: "Karena ini bahan daur ulang, mohon masukkan ke kantong lain."',
      correctAnswer: [
        '資源ですから別の袋に入れてください',
        'しげんですからべつのふくろにいれてください',
      ],
      explanation:
        'Alasan memakai から setelah 資源です, lalu permintaan 入れてください.',
      sourceRef: 'NHK L14 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-EX5',
      type: 'grammar_transform',
      prompt: 'Ubah 捨てます (membuang) menjadi bentuk TE.',
      correctAnswer: ['捨てて', 'すてて'],
      explanation:
        'Bentuk TE dari 捨てます adalah 捨てて. Bentuk ini dipakai sebelum もいいですか.',
      sourceRef: 'NHK L14 grammar point 1',
      qaStatus: 'machine_checked',
    },
  ],
  outputTask: {
    type: 'speaking',
    scenarioPrompt:
      'Kamu membereskan asrama setelah pesta. Tanyakan kepada ibu asrama apakah boleh membuang sampah di situ, lalu tanggapi instruksinya tentang kaleng.',
    instructions: [
      'Tanyakan izin dengan ここにゴミを捨ててもいいですか.',
      'Setelah dijawab, ucapkan はい、分かりました.',
      'Ulangi instruksi dengan 缶は別の袋に入れます.',
      'Konfirmasi alasannya dengan 資源ですからね.',
    ],
    modelAnswer: {
      jp: 'ここにゴミを捨ててもいいですか。はい、分かりました。缶は別の袋に入れます。資源ですからね。',
      kana: 'ここにごみをすててもいいですか。はい、わかりました。かんはべつのふくろにいれます。しげんですからね。',
      romaji:
        'Koko ni gomi o sutete mo ii desu ka. Hai, wakarimashita. Kan wa betsu no fukuro ni iremasu. Shigen desu kara ne.',
      id: 'Bolehkah saya membuang sampah di sini? Ya, saya mengerti. Saya akan memasukkan kaleng ke kantong terpisah. Karena ini bahan daur ulang, ya.',
      rubySegments: [
        { text: 'ここにゴミを' },
        { text: '捨', reading: 'す' },
        { text: 'ててもいいですか。はい、' },
        { text: '分', reading: 'わ' },
        { text: 'かりました。' },
        { text: '缶', reading: 'かん' },
        { text: 'は' },
        { text: '別', reading: 'べつ' },
        { text: 'の' },
        { text: '袋', reading: 'ふくろ' },
        { text: 'に' },
        { text: '入', reading: 'い' },
        { text: 'れます。' },
        { text: '資源', reading: 'しげん' },
        { text: 'ですからね。' },
      ],
      rubyHtml:
        'ここにゴミを<ruby>捨<rt>す</rt></ruby>ててもいいですか。はい、<ruby>分<rt>わ</rt></ruby>かりました。<ruby>缶<rt>かん</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れます。<ruby>資源<rt>しげん</rt></ruby>ですからね。',
    },
    selfCheckList: [
      'Memakai bentuk TE sebelum もいいですか.',
      'Menjawab instruksi dengan 分かりました.',
      'Memakai 別の袋, bukan 別袋.',
      'Mengulang alasan dengan からね untuk mengonfirmasi.',
    ],
    sourceRef: 'NHK L14 dialogue synthesis',
    qaStatus: 'machine_checked',
  },
  reviewCards: [
    {
      id: 'L14-RC1',
      lessonId: 'L14',
      front: 'ゴミ',
      back: 'Sampah',
      type: 'vocab',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC2',
      lessonId: 'L14',
      front: '捨てます (すてます)',
      back: 'Membuang',
      type: 'vocab',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC3',
      lessonId: 'L14',
      front: '缶 (かん)',
      back: 'Kaleng',
      type: 'vocab',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC4',
      lessonId: 'L14',
      front: '袋 (ふくろ)',
      back: 'Kantong',
      type: 'vocab',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC5',
      lessonId: 'L14',
      front: '資源 (しげん)',
      back: 'Sumber daya / bahan daur ulang',
      type: 'vocab',
      sourceRef: 'NHK L14 Dialog',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC6',
      lessonId: 'L14',
      front: 'Pola meminta izin',
      back: '[kata kerja bentuk TE] もいいですか',
      type: 'grammar',
      sourceRef: 'NHK L14 grammar point 1',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC7',
      lessonId: 'L14',
      front: 'Pola menyampaikan alasan',
      back: '[alasan] ですから、[permintaan]',
      type: 'grammar',
      sourceRef: 'NHK L14 grammar point 2',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC8',
      lessonId: 'L14',
      front: 'Dengarkan dialog resmi NHK L14. Ke mana kaleng harus dimasukkan?',
      back: '別の袋 — kantong terpisah, karena 資源 (bahan daur ulang).',
      type: 'listening',
      audioRef:
        'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/14-id-le_01.mp3',
      sourceRef: 'NHK L14 audio',
      qaStatus: 'machine_checked',
    },
    {
      id: 'L14-RC9',
      lessonId: 'L14',
      front: 'Praktikkan meminta izin dan menanggapi instruksi pemilahan sampah.',
      back: 'ここにゴミを捨ててもいいですか。はい、分かりました。缶は別の袋に入れます。',
      type: 'output',
      sourceRef: 'NHK L14 output task',
      qaStatus: 'machine_checked',
    },
  ],
  qa: {
    status: 'machine_checked',
    reviewedBy: 'TBD',
    verifiedDate: '2026-10-29',
  },
};
