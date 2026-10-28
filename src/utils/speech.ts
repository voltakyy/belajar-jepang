/**
 * Bantuan baca memakai mesin suara bawaan perangkat.
 *
 * Ini BUKAN model pelafalan dan BUKAN pengganti audio NHK. Kualitas suara
 * bergantung pada voice `ja-JP` yang terpasang di perangkat pengguna.
 * Karena itu fitur ini hanya dipakai untuk kana tunggal dan kata tunggal,
 * tidak pernah untuk dialog atau kalimat panjang.
 */

export type VoiceState = 'unsupported' | 'no-japanese' | 'ready';

let voiceCache: SpeechSynthesisVoice[] = [];
let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!isSpeechSupported()) return Promise.resolve([]);
  if (voicesPromise) return voicesPromise;

  voicesPromise = new Promise((resolve) => {
    const synth = window.speechSynthesis;
    const existing = synth.getVoices();
    if (existing.length > 0) {
      voiceCache = existing;
      resolve(existing);
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      voiceCache = synth.getVoices();
      resolve(voiceCache);
    };

    synth.addEventListener('voiceschanged', finish, { once: true });
    // Voice bisa tidak pernah terisi (mis. kebijakan peramban).
    window.setTimeout(finish, 1200);
  });

  return voicesPromise;
}

export function pickJapaneseVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  return (
    voices.find((v) => /^ja[-_]JP$/i.test(v.lang)) ||
    voices.find((v) => /^ja\b/i.test(v.lang)) ||
    null
  );
}

export function getVoiceState(
  voices: SpeechSynthesisVoice[]
): VoiceState {
  if (!isSpeechSupported()) return 'unsupported';
  return pickJapaneseVoice(voices) ? 'ready' : 'no-japanese';
}

export function speakJapanese(
  text: string,
  voice: SpeechSynthesisVoice | null,
  rate = 0.85
): Promise<void> {
  if (!isSpeechSupported() || !voice) return Promise.resolve();

  return new Promise((resolve) => {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.voice = voice;
      utterance.rate = rate;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    } catch {
      resolve();
    }
  });
}

export function stopSpeaking(): void {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
