import React, { useState } from 'react';
import { CheckCircle, Eye, ArrowLeft } from 'lucide-react';
import { ReviewCard, ErrorLog } from '../types';
import { answerSrsCard, resolveError } from '../utils/srs';

interface ReviewViewProps {
  dueCards: ReviewCard[];
  allCards: ReviewCard[];
  errors: ErrorLog[];
  onRefreshData: () => void;
  onBack: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  dueCards,
  errors,
  onRefreshData,
  onBack,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'srs' | 'errors'>('srs');

  const currentCard = dueCards[currentIndex];

  const handleRate = (rating: 'again' | 'good' | 'easy') => {
    if (!currentCard) return;
    answerSrsCard(currentCard.id, rating);
    setIsFlipped(false);
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex((p) => p + 1);
    } else {
      onRefreshData();
    }
  };

  const handleResolveErr = (id: string) => {
    resolveError(id);
    onRefreshData();
  };

  return (
    <div className="container">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} /> Beranda
        </button>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            className={`btn-secondary ${activeTab === 'srs' ? 'badge-vermilion' : ''}`}
            onClick={() => setActiveTab('srs')}
            style={{ padding: '0.35rem 0.75rem', minHeight: '34px', fontSize: '0.85rem' }}
          >
            SRS ({dueCards.length})
          </button>
          <button
            className={`btn-secondary ${activeTab === 'errors' ? 'badge-vermilion' : ''}`}
            onClick={() => setActiveTab('errors')}
            style={{ padding: '0.35rem 0.75rem', minHeight: '34px', fontSize: '0.85rem' }}
          >
            Buku Kesalahan ({errors.filter((e) => !e.resolved).length})
          </button>
        </div>
      </div>

      {/* TAB 1: SRS Flashcards */}
      {activeTab === 'srs' && (
        <div>
          {dueCards.length === 0 ? (
            <div className="paper-card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <CheckCircle size={48} color="var(--accent-green)" style={{ margin: '0 auto 1rem auto' }} />
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.4rem' }}>Semua Ulasan Tuntas!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Tidak ada kartu SRS yang jatuh tempo hari ini. Kartu berikutnya akan terjadwal otomatis besok.
              </p>
              <button className="btn-primary" onClick={onBack}>
                Kembali ke Beranda
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="badge">Kartu {currentIndex + 1} dari {dueCards.length}</span>
                <span className="badge">{currentCard.type.toUpperCase()}</span>
              </div>

              {/* Flashcard Box */}
              <div
                className="paper-card"
                style={{
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  border: '2px solid var(--border-strong)',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {isFlipped ? 'Jawaban & Penjelasan' : 'Pertanyaan / Frasa Target'}
                </div>

                <div style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--accent-ink)' }}>
                  {isFlipped ? currentCard.back : currentCard.front}
                </div>

                {!isFlipped ? (
                  <button className="btn-primary" onClick={() => setIsFlipped(true)}>
                    <Eye size={18} /> Buka Jawaban
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button
                      className="btn-secondary"
                      onClick={() => handleRate('again')}
                      style={{ borderColor: 'var(--accent-vermilion)', color: 'var(--accent-vermilion)' }}
                    >
                      Ulangi (1 hari)
                    </button>
                    <button
                      className="btn-primary"
                      onClick={() => handleRate('good')}
                    >
                      Bagus (3 hari)
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => handleRate('easy')}
                      style={{ borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}
                    >
                      Mudah (7 hari)
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Error Notebook */}
      {activeTab === 'errors' && (
        <div>
          <div className="paper-card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Buku Catatan Kesalahan</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              Mencatat otomatis setiap butir latihan yang salah dikerjakan agar dapat ditelaah kembali.
            </p>

            {errors.filter((e) => !e.resolved).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Buku catatan kesalahan kosong. Kerja bagus!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {errors.filter((e) => !e.resolved).map((err) => (
                  <div
                    key={err.id}
                    style={{
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem',
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                      {err.prompt}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--accent-vermilion)', marginBottom: '0.2rem' }}>
                      Jawabanmu: "{err.userAnswer}" &bull; Kunci: <strong>{err.correctAnswer}</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      {err.explanation}
                    </div>
                    <button
                      onClick={() => handleResolveErr(err.id)}
                      style={{ fontSize: '0.78rem', color: 'var(--accent-green)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      <CheckCircle size={14} /> Tandai Sudah Dipahami
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
