export type KanaItem = {
  kana: string;
  romaji: string;
};

export type KanaRow = {
  name: string;
  items: KanaItem[];
};

/** 46 kana dasar, disusun per baris gojūon. */
export const GOJUON: KanaRow[] = [
  {
    name: 'Vokal',
    items: [
      { kana: 'あ', romaji: 'a' },
      { kana: 'い', romaji: 'i' },
      { kana: 'う', romaji: 'u' },
      { kana: 'え', romaji: 'e' },
      { kana: 'お', romaji: 'o' },
    ],
  },
  {
    name: 'K',
    items: [
      { kana: 'か', romaji: 'ka' },
      { kana: 'き', romaji: 'ki' },
      { kana: 'く', romaji: 'ku' },
      { kana: 'け', romaji: 'ke' },
      { kana: 'こ', romaji: 'ko' },
    ],
  },
  {
    name: 'S',
    items: [
      { kana: 'さ', romaji: 'sa' },
      { kana: 'し', romaji: 'shi' },
      { kana: 'す', romaji: 'su' },
      { kana: 'せ', romaji: 'se' },
      { kana: 'そ', romaji: 'so' },
    ],
  },
  {
    name: 'T',
    items: [
      { kana: 'た', romaji: 'ta' },
      { kana: 'ち', romaji: 'chi' },
      { kana: 'つ', romaji: 'tsu' },
      { kana: 'て', romaji: 'te' },
      { kana: 'と', romaji: 'to' },
    ],
  },
  {
    name: 'N',
    items: [
      { kana: 'な', romaji: 'na' },
      { kana: 'に', romaji: 'ni' },
      { kana: 'ぬ', romaji: 'nu' },
      { kana: 'ね', romaji: 'ne' },
      { kana: 'の', romaji: 'no' },
    ],
  },
  {
    name: 'H',
    items: [
      { kana: 'は', romaji: 'ha' },
      { kana: 'ひ', romaji: 'hi' },
      { kana: 'ふ', romaji: 'fu' },
      { kana: 'へ', romaji: 'he' },
      { kana: 'ほ', romaji: 'ho' },
    ],
  },
  {
    name: 'M',
    items: [
      { kana: 'ま', romaji: 'ma' },
      { kana: 'み', romaji: 'mi' },
      { kana: 'む', romaji: 'mu' },
      { kana: 'め', romaji: 'me' },
      { kana: 'も', romaji: 'mo' },
    ],
  },
  {
    name: 'Y',
    items: [
      { kana: 'や', romaji: 'ya' },
      { kana: 'ゆ', romaji: 'yu' },
      { kana: 'よ', romaji: 'yo' },
    ],
  },
  {
    name: 'R',
    items: [
      { kana: 'ら', romaji: 'ra' },
      { kana: 'り', romaji: 'ri' },
      { kana: 'る', romaji: 'ru' },
      { kana: 'れ', romaji: 're' },
      { kana: 'ろ', romaji: 'ro' },
    ],
  },
  {
    name: 'W',
    items: [
      { kana: 'わ', romaji: 'wa' },
      { kana: 'を', romaji: 'wo' },
      { kana: 'ん', romaji: 'n' },
    ],
  },
];

/** Kana bersuara (dakuten) dan semi-bersuara (handakuten). */
export const DAKUTEN: KanaRow[] = [
  {
    name: 'G',
    items: [
      { kana: 'が', romaji: 'ga' },
      { kana: 'ぎ', romaji: 'gi' },
      { kana: 'ぐ', romaji: 'gu' },
      { kana: 'げ', romaji: 'ge' },
      { kana: 'ご', romaji: 'go' },
    ],
  },
  {
    name: 'Z',
    items: [
      { kana: 'ざ', romaji: 'za' },
      { kana: 'じ', romaji: 'ji' },
      { kana: 'ず', romaji: 'zu' },
      { kana: 'ぜ', romaji: 'ze' },
      { kana: 'ぞ', romaji: 'zo' },
    ],
  },
  {
    name: 'D',
    items: [
      { kana: 'だ', romaji: 'da' },
      { kana: 'ぢ', romaji: 'ji' },
      { kana: 'づ', romaji: 'zu' },
      { kana: 'で', romaji: 'de' },
      { kana: 'ど', romaji: 'do' },
    ],
  },
  {
    name: 'B',
    items: [
      { kana: 'ば', romaji: 'ba' },
      { kana: 'び', romaji: 'bi' },
      { kana: 'ぶ', romaji: 'bu' },
      { kana: 'べ', romaji: 'be' },
      { kana: 'ぼ', romaji: 'bo' },
    ],
  },
  {
    name: 'P',
    items: [
      { kana: 'ぱ', romaji: 'pa' },
      { kana: 'ぴ', romaji: 'pi' },
      { kana: 'ぷ', romaji: 'pu' },
      { kana: 'ぺ', romaji: 'pe' },
      { kana: 'ぽ', romaji: 'po' },
    ],
  },
];

/** 46 kana dasar katakana, urutan sama dengan gojūon hiragana. */
export const GOJUON_KATAKANA: KanaRow[] = [
  {
    name: 'Vokal',
    items: [
      { kana: 'ア', romaji: 'a' },
      { kana: 'イ', romaji: 'i' },
      { kana: 'ウ', romaji: 'u' },
      { kana: 'エ', romaji: 'e' },
      { kana: 'オ', romaji: 'o' },
    ],
  },
  {
    name: 'K',
    items: [
      { kana: 'カ', romaji: 'ka' },
      { kana: 'キ', romaji: 'ki' },
      { kana: 'ク', romaji: 'ku' },
      { kana: 'ケ', romaji: 'ke' },
      { kana: 'コ', romaji: 'ko' },
    ],
  },
  {
    name: 'S',
    items: [
      { kana: 'サ', romaji: 'sa' },
      { kana: 'シ', romaji: 'shi' },
      { kana: 'ス', romaji: 'su' },
      { kana: 'セ', romaji: 'se' },
      { kana: 'ソ', romaji: 'so' },
    ],
  },
  {
    name: 'T',
    items: [
      { kana: 'タ', romaji: 'ta' },
      { kana: 'チ', romaji: 'chi' },
      { kana: 'ツ', romaji: 'tsu' },
      { kana: 'テ', romaji: 'te' },
      { kana: 'ト', romaji: 'to' },
    ],
  },
  {
    name: 'N',
    items: [
      { kana: 'ナ', romaji: 'na' },
      { kana: 'ニ', romaji: 'ni' },
      { kana: 'ヌ', romaji: 'nu' },
      { kana: 'ネ', romaji: 'ne' },
      { kana: 'ノ', romaji: 'no' },
    ],
  },
  {
    name: 'H',
    items: [
      { kana: 'ハ', romaji: 'ha' },
      { kana: 'ヒ', romaji: 'hi' },
      { kana: 'フ', romaji: 'fu' },
      { kana: 'ヘ', romaji: 'he' },
      { kana: 'ホ', romaji: 'ho' },
    ],
  },
  {
    name: 'M',
    items: [
      { kana: 'マ', romaji: 'ma' },
      { kana: 'ミ', romaji: 'mi' },
      { kana: 'ム', romaji: 'mu' },
      { kana: 'メ', romaji: 'me' },
      { kana: 'モ', romaji: 'mo' },
    ],
  },
  {
    name: 'Y',
    items: [
      { kana: 'ヤ', romaji: 'ya' },
      { kana: 'ユ', romaji: 'yu' },
      { kana: 'ヨ', romaji: 'yo' },
    ],
  },
  {
    name: 'R',
    items: [
      { kana: 'ラ', romaji: 'ra' },
      { kana: 'リ', romaji: 'ri' },
      { kana: 'ル', romaji: 'ru' },
      { kana: 'レ', romaji: 're' },
      { kana: 'ロ', romaji: 'ro' },
    ],
  },
  {
    name: 'W',
    items: [
      { kana: 'ワ', romaji: 'wa' },
      { kana: 'ヲ', romaji: 'wo' },
      { kana: 'ン', romaji: 'n' },
    ],
  },
];

/** Kana katakana bersuara (dakuten) dan semi-bersuara (handakuten). */
export const DAKUTEN_KATAKANA: KanaRow[] = [
  {
    name: 'G',
    items: [
      { kana: 'ガ', romaji: 'ga' },
      { kana: 'ギ', romaji: 'gi' },
      { kana: 'グ', romaji: 'gu' },
      { kana: 'ゲ', romaji: 'ge' },
      { kana: 'ゴ', romaji: 'go' },
    ],
  },
  {
    name: 'Z',
    items: [
      { kana: 'ザ', romaji: 'za' },
      { kana: 'ジ', romaji: 'ji' },
      { kana: 'ズ', romaji: 'zu' },
      { kana: 'ゼ', romaji: 'ze' },
      { kana: 'ゾ', romaji: 'zo' },
    ],
  },
  {
    name: 'D',
    items: [
      { kana: 'ダ', romaji: 'da' },
      { kana: 'ヂ', romaji: 'ji' },
      { kana: 'ヅ', romaji: 'zu' },
      { kana: 'デ', romaji: 'de' },
      { kana: 'ド', romaji: 'do' },
    ],
  },
  {
    name: 'B',
    items: [
      { kana: 'バ', romaji: 'ba' },
      { kana: 'ビ', romaji: 'bi' },
      { kana: 'ブ', romaji: 'bu' },
      { kana: 'ベ', romaji: 'be' },
      { kana: 'ボ', romaji: 'bo' },
    ],
  },
  {
    name: 'P',
    items: [
      { kana: 'パ', romaji: 'pa' },
      { kana: 'ピ', romaji: 'pi' },
      { kana: 'プ', romaji: 'pu' },
      { kana: 'ペ', romaji: 'pe' },
      { kana: 'ポ', romaji: 'po' },
    ],
  },
];

export const TOTAL_KANA =
  GOJUON.reduce((n, row) => n + row.items.length, 0) +
  DAKUTEN.reduce((n, row) => n + row.items.length, 0);

export const TOTAL_KATAKANA =
  GOJUON_KATAKANA.reduce((n, row) => n + row.items.length, 0) +
  DAKUTEN_KATAKANA.reduce((n, row) => n + row.items.length, 0);
