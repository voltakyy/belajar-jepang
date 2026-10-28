import { useEffect, useState, useCallback } from 'react';
import {
  isSpeechSupported,
  loadVoices,
  pickJapaneseVoice,
  speakJapanese,
  stopSpeaking,
  type VoiceState,
} from '../utils/speech';

/**
 * Status voice Jepang + fungsi ucap. Dipakai untuk kana dan kosakata saja.
 */
export function useJapaneseVoice() {
  const [state, setState] = useState<VoiceState>('unsupported');
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speaking, setSpeaking] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    if (!isSpeechSupported()) {
      setState('unsupported');
      return;
    }

    loadVoices().then((voices) => {
      if (!alive) return;
      const ja = pickJapaneseVoice(voices);
      setVoice(ja);
      setState(ja ? 'ready' : 'no-japanese');
    });

    return () => {
      alive = false;
      stopSpeaking();
    };
  }, []);

  const speak = useCallback(
    async (text: string) => {
      if (!voice) return;
      setSpeaking(text);
      await speakJapanese(text, voice, 0.85);
      setSpeaking((current) => (current === text ? null : current));
    },
    [voice]
  );

  return { state, voice, speak, speaking };
}

export type { VoiceState };
