import React from 'react';
import { Play, RotateCcw, Award, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
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

  return (
    <div className="container">
      {/* Welcome Banner */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.65rem', marginBottom: '0.35rem' }}>
          Selamat Datang di Nihongo
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Satu sesi 15 menit per hari. Fokus pada performa komunikatif nyata, bukan sekadar menghafal kartu.
        </p>
      </div>

      {/* 1. Primary Action Card */}
      <div className="paper-card" style={{ borderLeft: '4px solid var(--accent-ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span className="badge badge-vermilion">Rekomendasi Hari Ini</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estimasi: 15 menit</span>
        </div>

        <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
          Pelajaran 1: 私はアンナです
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Memperkenalkan nama diri, partikel topik は (wa), kopula です (desu), dan salam perjumpaan pertama kali.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            className="btn-primary"
            onClick={() => onStartLesson('L01')}
            style={{ width: '100%', maxWidth: '280px' }}
          >
            <Play size={18} fill="#ffffff" />
            {isL1Done ? 'Ulangi Pelajaran 1' : 'Mulai Pelajaran 1 (15m)'}
          </button>
          {isL1Done && (
            <span style={{ color: 'var(--accent-green)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
              <CheckCircle2 size={18} /> Selesai
            </span>
          )}
        </div>
      </div>

      {/* 2. SRS Review Card */}
      <div className="paper-card" style={{ borderLeft: '4px solid #3b82f6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
              <RotateCcw size={16} color="#3b82f6" />
              <h3 style={{ fontSize: '1.05rem' }}>Antrean Ulasan SRS</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {dueCards.length > 0
                ? `${dueCards.length} kartu pengulangan jatuh tempo hari ini.`
                : 'Belum ada kartu jatuh tempo. Selesaikan Pelajaran 1 untuk mengaktifkan kartu baru.'}
            </p>
          </div>

          <button
            className="btn-secondary"
            onClick={onStartReview}
            disabled={dueCards.length === 0}
            style={{ opacity: dueCards.length === 0 ? 0.6 : 1 }}
          >
            Mulai Ulasan
          </button>
        </div>
      </div>

      {/* 3. Can-Do Progress Card */}
      <div className="paper-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
          <Award size={18} color="var(--accent-amber)" />
          <h3 style={{ fontSize: '1.05rem' }}>Capaian Komunikatif (Can-Do)</h3>
        </div>

        {progress.masteredCanDos.length > 0 ? (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {progress.masteredCanDos.map((cd, idx) => (
              <li key={idx} style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{cd}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Target Pelajaran 1:
            <ul style={{ marginTop: '0.4rem', paddingLeft: '1.25rem' }}>
              {lesson01.canDo.map((cd, i) => (
                <li key={i} style={{ marginBottom: '0.2rem' }}>{cd}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 4. Weak-Spot / Error Reminder Card */}
      {unresolvedErrors.length > 0 && (
        <div className="paper-card" style={{ borderLeft: '4px solid var(--accent-vermilion)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <AlertTriangle size={18} color="var(--accent-vermilion)" />
            <h3 style={{ fontSize: '1rem', color: 'var(--accent-vermilion)' }}>
              Catatan Kelemahan ({unresolvedErrors.length} pola)
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            {unresolvedErrors[0].prompt}
          </p>
          <div style={{ fontSize: '0.8rem', background: 'var(--bg-subtle)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
            <strong>Kunci:</strong> {unresolvedErrors[0].correctAnswer} &bull; {unresolvedErrors[0].explanation}
          </div>
        </div>
      )}

      {/* Quick link to Course Map */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          onClick={onOpenMap}
          style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
        >
          Lihat Peta Lengkap 48 Pelajaran <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
