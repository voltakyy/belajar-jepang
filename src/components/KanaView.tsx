import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import {
  GOJUON,
  DAKUTEN,
  GOJUON_KATAKANA,
  DAKUTEN_KATAKANA,
} from '../data/kana';
import { useJapaneseVoice } from '../hooks/useJapaneseVoice';

type Script = 'hiragana' | 'katakana';

const KanaGrid: React.FC<{
  items: { kana: string; romaji: string }[];
  speaking: string | null;
  onSpeak: (text: string) => void;
  unavailable: boolean;
}> = ({ items, speaking, onSpeak, unavailable }) => (
  <div className="kana-grid">
    {items.map((item) => (
      <button
        key={item.kana}
        className="kana-cell"
        onClick={() => onSpeak(item.kana)}
        aria-disabled={unavailable}
        aria-label={`Dengarkan kana ${item.romaji}`}
      >
        <span className="k" aria-hidden="true">
          {item.kana}
        </span>
        <span className="r" aria-hidden="true">
          {item.romaji}
        </span>
        {speaking === item.kana && <Volume2 size={11} aria-hidden="true" />}
      </button>
    ))}
  </div>
);

export const KanaView: React.FC = () => {
  const { state, speak, speaking } = useJapaneseVoice();
  const [script, setScript] = useState<Script>('hiragana');
  const [nudge, setNudge] = useState(false);
  const noteRef = useRef<HTMLDivElement | null>(null);

  const isHiragana = script === 'hiragana';
  const basic = (isHiragana ? GOJUON : GOJUON_KATAKANA).flatMap(
    (row) => row.items
  );
  const voiced = (isHiragana ? DAKUTEN : DAKUTEN_KATAKANA).flatMap(
    (row) => row.items
  );
  const unavailable = state !== 'ready';

  const handleSpeak = (kana: string) => {
    if (unavailable) {
      setNudge(true);
      noteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    speak(kana);
  };

  const nhkHref = isHiragana
    ? 'https://www3.nhk.or.jp/nhkworld/lesson/id/letters/hiragana.html'
    : 'https://www3.nhk.or.jp/nhkworld/lesson/id/letters/katakana.html';
  const nhkOtherHref = isHiragana
    ? 'https://www3.nhk.or.jp/nhkworld/lesson/id/letters/katakana.html'
    : 'https://www3.nhk.or.jp/nhkworld/lesson/id/letters/hiragana.html';

  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Aksara</div>
        <h1>Kana</h1>
        <p>
          Empat puluh enam kana dasar dan dua puluh lima kana bersuara, dalam
          hiragana maupun katakana. Ketuk satu kana untuk mendengarnya. Satu
          kana selalu satu mora, jadi di sini bunyi per aksara masuk akal.
        </p>
      </header>

      <div className="seg" role="tablist" aria-label="Jenis aksara">
        <button
          role="tab"
          aria-selected={isHiragana}
          className={`seg-btn ${isHiragana ? 'active' : ''}`}
          onClick={() => setScript('hiragana')}
        >
          Hiragana <span className="seg-jp jp">ひらがな</span>
        </button>
        <button
          role="tab"
          aria-selected={!isHiragana}
          className={`seg-btn ${!isHiragana ? 'active' : ''}`}
          onClick={() => setScript('katakana')}
        >
          Katakana <span className="seg-jp jp">カタカナ</span>
        </button>
      </div>

      {state === 'no-japanese' && (
        <div
          className={`note ${nudge ? 'is-alert' : ''}`}
          ref={noteRef}
          role={nudge ? 'status' : undefined}
          style={{ marginBottom: '1.5rem' }}
        >
          <VolumeX size={15} style={{ verticalAlign: '-2px' }} /> Belum ada
          suara Jepang di perangkat ini, jadi ketukan belum berbunyi. Tambahkan
          paket suara Jepang di setelan sistem (Windows: Setelan &rarr; Waktu
          &amp; Bahasa &rarr; Ucapan). Audio NHK tetap bisa dipakai.
        </div>
      )}

      {state === 'unsupported' && (
        <div
          className={`note ${nudge ? 'is-alert' : ''}`}
          ref={noteRef}
          role={nudge ? 'status' : undefined}
          style={{ marginBottom: '1.5rem' }}
        >
          Peramban ini tidak mendukung pembacaan suara, jadi ketukan belum
          berbunyi. Audio resmi NHK tetap tersedia di setiap pelajaran.
        </div>
      )}

      {state === 'ready' && (
        <div className="note" style={{ marginBottom: '1.5rem' }}>
          Suara dibacakan oleh mesin perangkat, bukan penutur asli. Anggap
          sebagai bantuan mengingat bentuk dan bacaan dasar, bukan contoh
          pelafalan. Untuk contoh bunyi yang benar, dengarkan audio NHK.
        </div>
      )}

      <section className="kana-section">
        <h2>Gojūon</h2>
        <p>
          46 kana dasar &mdash;{' '}
          {isHiragana
            ? 'dipakai untuk kata asli Jepang dan partikel.'
            : 'dipakai untuk kata serapan, nama asing, dan penekanan.'}
        </p>
        <KanaGrid
          items={basic}
          speaking={speaking}
          onSpeak={handleSpeak}
          unavailable={unavailable}
        />
      </section>

      <section className="kana-section">
        <h2>Dakuten &amp; Handakuten</h2>
        <p>
          25 kana bersuara. Dua garis kecil di kanan atas mengubah bunyi, dan
          lingkaran kecil mengubah h menjadi p.
        </p>
        <KanaGrid
          items={voiced}
          speaking={speaking}
          onSpeak={handleSpeak}
          unavailable={unavailable}
        />
      </section>

      {isHiragana && (
        <div className="note" style={{ marginBottom: '1.75rem' }}>
          Tiga kana berubah bunyi saat menjadi partikel: <strong>は</strong>{' '}
          dibaca <em>wa</em>, <strong>へ</strong> dibaca <em>e</em>, dan{' '}
          <strong>を</strong> dibaca <em>o</em>. Di tabel di atas, ketiganya
          masih dibaca sesuai bunyi aslinya.
        </div>
      )}

      <section className="sheet" aria-labelledby="nhk-letters">
        <div className="source-head">
          <span className="source-tag">Sumber resmi</span>
          <span className="source-brand" id="nhk-letters">
            NHK WORLD &middot; Aksara Jepang
          </span>
        </div>
        <p className="source-desc">
          NHK menyediakan daftar lengkap aksara dan animasi urutan goresan
          untuk setiap kana. Buka di tab baru; tidak perlu akun. Gunakan
          halaman itu untuk belajar menulis, dan tabel di atas untuk melatih
          ingatan serta bunyi.
        </p>
        <div className="source-actions">
          <a
            className="source-btn source-btn-primary"
            href={nhkHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isHiragana ? 'Hiragana' : 'Katakana'} &middot; daftar &amp; cara
            menulis
            <ExternalLink size={13} className="source-ext" />
          </a>
          <a
            className="source-btn"
            href={nhkOtherHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isHiragana ? 'Katakana' : 'Hiragana'} &middot; daftar &amp; cara
            menulis
            <ExternalLink size={13} className="source-ext" />
          </a>
        </div>
        <div className="source-foot">
          Animasi goresan tidak disalin ke aplikasi ini. Semua materi aksara
          tetap berada di situs NHK.
        </div>
      </section>
    </div>
  );
};
