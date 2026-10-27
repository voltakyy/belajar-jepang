/**
 * Normalisasi string jawaban pengguna untuk perbandingan yang adil:
 * - Menghilangkan spasi berlebih
 * - Menghilangkan tanda baca umum (titik, koma, tanda tanya)
 * - Huruf kecil jika romaji
 */
export function normalizeAnswer(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .toLowerCase()
    .replace(/[\s　]+/g, ' ') // normalize whitespace (halfwidth & fullwidth)
    .replace(/[.。?!？！,、〜~]/g, '') // strip common punctuation
    .trim();
}

export function checkAnswer(userInput: string, target: string | string[]): boolean {
  const normUser = normalizeAnswer(userInput);
  if (Array.isArray(target)) {
    return target.some((t) => normalizeAnswer(t) === normUser);
  }
  return normalizeAnswer(target) === normUser;
}
