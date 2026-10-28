import React, { useState } from 'react';
import { ExternalLink, Headphones, BookOpen, Copy, Check } from 'lucide-react';

interface SourceLinksProps {
  lessonPage: string;
  audioMp3: string;
  /** Contoh: "01:22". Dipakai untuk tautan lompat ke menit audio. */
  startAt?: string;
  /** Tampilkan panduan 3 langkah (dipakai di langkah Listen). */
  withSteps?: boolean;
  compact?: boolean;
}

function toSeconds(timestamp?: string): number | null {
  if (!timestamp) return null;
  const parts = timestamp.split(':').map((n) => Number.parseInt(n, 10));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

/**
 * Blok "Sumber resmi NHK".
 *
 * Tujuannya: pembelajar Indonesia umumnya tidak tahu NHK WORLD itu apa, dan
 * tautan kecil abu-abu tidak pernah diklik. Karena itu sumber resmi diberi
 * nama, penjelasan satu baris, dan tombol seukuran aksi utama.
 */
export const SourceLinks: React.FC<SourceLinksProps> = ({
  lessonPage,
  audioMp3,
  startAt,
  withSteps = false,
  compact = false,
}) => {
  const [copied, setCopied] = useState(false);
  const seconds = toSeconds(startAt);
  const audioHref = seconds !== null ? `${audioMp3}#t=${seconds}` : audioMp3;

  const copyTimestamp = async () => {
    if (!startAt) return;
    try {
      await navigator.clipboard.writeText(startAt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="source-block"
      style={compact ? { padding: '0.85rem 0.9rem' } : undefined}
    >
      <div className="source-head">
        <span className="source-tag">Sumber resmi</span>
        <span className="source-brand">NHK WORLD &middot; Belajar Bahasa Jepang</span>
      </div>

      {!compact && (
        <p className="source-desc">
          NHK WORLD adalah layanan siaran publik Jepang. Audio dan naskah
          pelajaran ini gratis di situs mereka, tanpa akun. Aplikasi ini tidak
          menyimpan atau memutar ulang berkasnya &mdash; suara selalu berasal
          dari situs NHK.
        </p>
      )}

      <div className="source-actions">
        <a
          className="source-btn source-btn-primary"
          href={audioHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Headphones size={16} />
          <span>
            Dengarkan audio
            {startAt ? ` (mulai ${startAt})` : ''}
          </span>
          <ExternalLink size={13} className="source-ext" />
        </a>
        <a
          className="source-btn"
          href={lessonPage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen size={16} />
          <span>Baca naskah di NHK</span>
          <ExternalLink size={13} className="source-ext" />
        </a>
      </div>

      {startAt && (
        <div className="source-meta">
          <span>
            Dialog ada di menit <strong>{startAt}</strong>. Kalau tab baru
            terbuka di awal, geser pemutar ke menit itu.
          </span>
          <button className="copy-btn" onClick={copyTimestamp} type="button">
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'Tersalin' : 'Salin menit'}
          </button>
        </div>
      )}

      {withSteps && (
        <ol className="source-steps">
          <li>
            Tekan <strong>Dengarkan audio</strong>. Tab baru terbuka di situs
            NHK.
          </li>
          <li>
            Tekan tombol <strong>play</strong> di pemutar peramban, lalu geser
            ke menit yang tertera.
          </li>
          <li>
            Kembali ke tab ini dan jawab pertanyaan mendengarkan. Tidak perlu
            memasang aplikasi apa pun.
          </li>
        </ol>
      )}

      <div className="source-foot">
        Tautan keluar ke situs resmi. Hak cipta materi sepenuhnya milik NHK.
      </div>
    </div>
  );
};
