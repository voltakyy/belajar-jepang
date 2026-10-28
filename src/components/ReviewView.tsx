import React, { useState } from 'react';
import { CheckCircle, ArrowLeft, Volume2, RotateCcw } from 'lucide-react';
import { ReviewCard, ErrorLog } from '../types';
import { answerSrsCard, resolveError } from '../utils/srs';
import { useJapaneseVoice } from '../hooks/useJapaneseVoice';

interface ReviewViewProps {
  dueCards: ReviewCard[];
  allCards: ReviewCard[];
  errors: ErrorLog[];
  onRefreshData: () => void;
  onBack: () => void;
}

const HAS_JAPANESE = /[ぁ-んァ-ヶー一-龠]/;

export const ReviewView: React.FC<ReviewViewProps> = ({
  dueCards,
  errors,
  onRefreshData,
  onBack,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'srs' | 'errors'>('srs');
  const { state: voiceState, speak, speaking } = useJapaneseVoice();

  const currentCard = dueCards[currentIndex];
  const shownText = currentCard
    ? isFlipped
      ? currentCard.back
      : currentCard.front
    : '';
  const speakable = currentCard && HAS_JAPANESE.test(shownText);

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

  const openErrors = errors.filter((e) => !e.resolved);

  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Pengulangan</div>
        <h1>Ulasan</h1>
        <p>
          Kartu yang sudah waktunya diulang, plus catatan latihan yang pernah
          salah. Semua disimpan di peramban ini.
        </p>
      </header>

      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          borderBottom: '1px solid var(--rule-navy)',
          marginBottom: '1.5rem',
        }}
      >
        <button
          className={`rail-step ${activeTab === 'srs' ? 'active' : ''}`}
          onClick={() => setActiveTab('srs')}
          style={{ marginRight: 0 }}
        >
          <span className="num">{dueCards.length}</span> Kartu
        </button>
        <button
          className={`rail-step ${activeTab === 'errors' ? 'active' : ''}`}
          onClick={() => setActiveTab('errors')}
          style={{ marginRight: 0 }}
        >
          <span className="num">{openErrors.length}</span> Kesalahan
        </button>
      </div>

      {activeTab === 'srs' && (
        <>
          {dueCards.length === 0 ? (
            <section className="sheet" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
              <CheckCircle size={36} color="var(--moss)" style={{ margin: '0 auto 0.85rem' }} />
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>
                Tidak ada kartu hari ini
              </h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', maxWidth: '42ch', margin: '0 auto 1.4rem' }}>
                Kartu berikutnya dijadwalkan otomatis. Selesaikan satu
                pelajaran untuk menambah kartu baru.
              </p>
              <button className="btn-primary" onClick={onBack}>
                Kembali ke beranda
              </button>
            </section>
          ) : (
            <>
              <div className="row-between" style={{ marginBottom: '0.6rem' }}>
                <span className="kicker" style={{ color: 'var(--on-navy-faint)' }}>
                  Kartu {currentIndex + 1} / {dueCards.length}
                </span>
                <span className="badge" style={{ borderColor: 'var(--rule-navy)', color: 'var(--on-navy-soft)' }}>
                  {currentCard.type}
                </span>
              </div>

              <div className="flashcard">
                <div className="front-label">
                  {isFlipped ? 'Jawaban' : 'Pertanyaan'}
                </div>
                <div
                  className={`card-text ${HAS_JAPANESE.test(shownText) ? 'jp' : 'is-latin'}`}
                >
                  {shownText}
                </div>

                {speakable && voiceState === 'ready' && (
                  <button
                    className={`speak-btn ${speaking === shownText ? 'is-speaking' : ''}`}
                    onClick={() => speak(shownText)}
                    aria-label="Dengarkan kartu ini"
                  >
                    <Volume2 size={15} />
                  </button>
                )}

                {!isFlipped ? (
                  <button className="btn-primary" onClick={() => setIsFlipped(true)}>
                    Buka jawaban
                  </button>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <button
                      className="btn-secondary"
                      onClick={() => handleRate('again')}
                      style={{ flex: '1 1 120px' }}
                    >
                      <RotateCcw size={14} /> Ulangi
                    </button>
                    <button
                      className="btn-primary"
                      onClick={() => handleRate('good')}
                      style={{ flex: '1 1 120px' }}
                    >
                      Ingat
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => handleRate('easy')}
                      style={{ flex: '1 1 120px', color: 'var(--moss)', borderColor: 'rgba(47,107,79,0.5)' }}
                    >
                      Mudah
                    </button>
                  </div>
                )}
              </div>

              <p style={{ fontSize: '0.7rem', color: 'var(--on-navy-faint)', marginTop: '0.8rem', textAlign: 'center' }}>
                Ulangi = besok &middot; Ingat = 1–3 hari &middot; Mudah = 3–7 hari
              </p>
            </>
          )}
        </>
      )}

      {activeTab === 'errors' && (
        <section className="sheet">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>
            Buku catatan kesalahan
          </h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', marginBottom: '1.25rem' }}>
            Setiap jawaban yang salah tercatat otomatis. Tandai sudah dipahami
            setelah kamu bisa menjelaskan alasannya.
          </p>

          {openErrors.length === 0 ? (
            <div style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--ink-faint)', fontSize: '0.9rem' }}>
              Belum ada catatan. Kerja bagus.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '0.9rem' }}>
              {openErrors.map((err) => (
                <div
                  key={err.id}
                  style={{
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '0.85rem',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.35rem', lineHeight: 1.5 }}>
                    {err.prompt}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--vermilion)', marginBottom: '0.15rem' }}>
                    Jawabanmu: {err.userAnswer} &middot; kunci:{' '}
                    <strong>{err.correctAnswer}</strong>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>
                    {err.explanation}
                  </div>
                  <button
                    onClick={() => handleResolveErr(err.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--moss)',
                      borderBottom: '1px solid rgba(47,107,79,0.4)',
                      paddingBottom: '1px',
                    }}
                  >
                    <CheckCircle size={13} /> Sudah dipahami
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <div style={{ marginTop: '1.75rem' }}>
        <button
          onClick={onBack}
          className="nav-link"
          style={{ padding: 0, color: 'var(--on-navy-soft)', display: 'inline-flex', gap: '0.35rem' }}
        >
          <ArrowLeft size={14} /> Beranda
        </button>
      </div>
    </div>
  );
};
