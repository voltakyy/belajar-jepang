import React from 'react';
import { ArrowRight, Play, Check, AlertTriangle } from 'lucide-react';
import { UserProgress, ReviewCard, ErrorLog } from '../types';
import { lesson01 } from '../data/lessons/lesson01';

interface HomeViewProps {
  progress: UserProgress;
  dueCards: ReviewCard[];
  errors: ErrorLog[];
  onStartLesson: (lessonId: string) => void;
  onStartReview: () => void;
  onOpenMap: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  progress,
  dueCards,
  errors,
  onStartLesson,
  onStartReview,
  onOpenMap,
}) => {
  const isL1Done = progress.completedLessons.includes('L01');
  const unresolvedErrors = errors.filter((e) => !e.resolved);
  const completed = progress.completedLessons.length;

  return (
    <div className="container">
      <header className="masthead">
        <div className="kicker">Pendamping mandiri &middot; NHK 2015</div>
        <h1>
          Nihongo<span className="jp">日本語</span>
        </h1>
        <p>
          Empat puluh delapan pelajaran dari siaran NHK WORLD edisi Anna.
          Satu sesi lima belas menit: dengarkan dialog aslinya, sadari satu
          pola, lalu pakai sendiri.
        </p>

        <div className="stat-row">
          <div className="stat">
            <span className="stat-num">
              {completed}
              <span style={{ color: 'var(--on-navy-faint)', fontSize: '0.6em' }}>
                {' '}
                / 48
              </span>
            </span>
            <span className="stat-label">Pelajaran tuntas</span>
          </div>
          <div className="stat">
            <span className="stat-num">{progress.streakDays}</span>
            <span className="stat-label">Hari beruntun</span>
          </div>
          <div className="stat">
            <span className="stat-num">{dueCards.length}</span>
            <span className="stat-label">Kartu jatuh tempo</span>
          </div>
        </div>
      </header>

      <div className="feature">
        {/* Pelajaran berikutnya */}
        <section className="sheet lesson-sheet" aria-labelledby="next-lesson">
          <span className="lesson-no">
            {isL1Done ? 'Ulangi pelajaran' : 'Pelajaran berikutnya'} &middot; 01
          </span>

          <h2 className="lesson-title-jp jp" id="next-lesson">
            <ruby>
              私<rt>わたし</rt>
            </ruby>
            はアンナです
          </h2>
          <div className="lesson-title-romaji">Watashi wa Anna desu</div>
          <div
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              margin: '0.35rem 0 0.9rem',
            }}
          >
            15 menit &middot; 6 kata &middot; 5 latihan
          </div>

          <p className="lesson-desc">
            Anna baru tiba di Jepang dan berkenalan dengan Sakura di lobi
            kampus. Pola hari ini: <strong>A wa B desu</strong> &mdash; penanda
            topik は dan kopula sopan です.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn-primary"
              onClick={() => onStartLesson('L01')}
            >
              <Play size={16} fill="currentColor" />
              {isL1Done ? 'Ulangi sesi' : 'Mulai sesi'}
            </button>
            <button className="btn-secondary" onClick={onOpenMap}>
              Lihat 48 pelajaran
            </button>
            {isL1Done && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.75rem',
                  color: 'var(--moss)',
                  fontWeight: 600,
                }}
              >
                <Check size={14} /> Sudah tuntas
              </span>
            )}
          </div>
        </section>

        {/* Panel samping */}
        <aside className="side-stack">
          <div className="mini-sheet">
            <h3>Ulasan hari ini</h3>
            <div className="stat-num">{dueCards.length}</div>
            <p style={{ marginBottom: '0.85rem' }}>
              {dueCards.length > 0
                ? 'Kartu yang sudah waktunya diulang.'
                : 'Belum ada kartu jatuh tempo. Selesaikan Pelajaran 1 untuk memulai.'}
            </p>
            <button
              className="btn-secondary"
              onClick={onStartReview}
              disabled={dueCards.length === 0}
              style={{
                width: '100%',
                minHeight: '40px',
                padding: '0.45rem 0.8rem',
                fontSize: '0.8rem',
                opacity: dueCards.length === 0 ? 0.45 : 1,
              }}
            >
              Buka ulasan
            </button>
          </div>

          {unresolvedErrors.length > 0 && (
            <div className="mini-sheet">
              <h3 style={{ color: '#e79b86' }}>
                <AlertTriangle
                  size={12}
                  style={{ verticalAlign: '-1px', marginRight: '0.3rem' }}
                />
                Perlu diulang
              </h3>
              <p style={{ marginBottom: '0.5rem' }}>
                {unresolvedErrors.length} latihan pernah salah. Lihat lagi
                polanya sebelum lanjut.
              </p>
              <button
                className="text-link"
                onClick={onStartReview}
                style={{ background: 'none', padding: 0 }}
              >
                Buka buku catatan <ArrowRight size={12} />
              </button>
            </div>
          )}

          <div className="mini-sheet">
            <h3>Sumber materi</h3>
            <p style={{ marginBottom: '0.6rem' }}>
              Audio dan naskah asli ada di NHK WORLD, gratis dan tanpa akun.
              Aplikasi ini hanya menautkan, tidak menyalin.
            </p>
            <a
              className="text-link"
              href="https://www3.nhk.or.jp/nhkworld/lesson/indonesian/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kunjungi NHK <ArrowRight size={12} />
            </a>
          </div>
        </aside>
      </div>

      {/* Capaian */}
      <section
        className="sheet"
        style={{ marginTop: '1.1rem' }}
        aria-labelledby="cando-heading"
      >
        <div className="row-between" style={{ marginBottom: '0.9rem' }}>
          <h2
            id="cando-heading"
            style={{ fontSize: '1.2rem', color: 'var(--ink)' }}
          >
            Setelah sesi ini
          </h2>
          <span className="badge">Can-do</span>
        </div>

        {progress.masteredCanDos.length > 0 ? (
          <ul className="can-do-list">
            {progress.masteredCanDos.map((cd, idx) => (
              <li key={idx}>
                <Check
                  size={15}
                  style={{ flexShrink: 0, marginTop: '3px', color: 'var(--moss)' }}
                />
                <span>{cd}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="can-do-list">
            {lesson01.canDo.map((cd, i) => (
              <li key={i}>
                <span
                  aria-hidden="true"
                  style={{
                    color: 'var(--amber-deep)',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1.4,
                  }}
                >
                  {i + 1}.
                </span>
                <span>{cd}</span>
              </li>
            ))}
          </ul>
        )}

        <div
          style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-light)',
            fontSize: '0.78rem',
            color: 'var(--ink-faint)',
          }}
        >
          Delapan kartu ulasan otomatis masuk ke antrean setelah sesi selesai.
        </div>
      </section>
    </div>
  );
};
