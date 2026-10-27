import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Volume2,
  CheckCircle,
  XCircle,
  Award,
  RotateCcw,
} from 'lucide-react';
import { Lesson, ReviewCard } from '../types';
import { checkAnswer } from '../utils/normalize';
import { recordError } from '../utils/srs';

interface LessonViewProps {
  lesson: Lesson;
  showFurigana: boolean;
  showRomaji: boolean;
  onComplete: (canDos: string[], newCards: ReviewCard[]) => void;
  onBack: () => void;
  onGoToReview: () => void;
}

type Step = 'orient' | 'listen' | 'notice' | 'retrieve' | 'use' | 'review';

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  showFurigana,
  showRomaji,
  onComplete,
  onBack,
  onGoToReview,
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('orient');

  // Gist state
  const [gistAnswers, setGistAnswers] = useState<Record<string, number>>({});

  // Detail state
  const [detailAnswers, setDetailAnswers] = useState<Record<string, number>>({});

  // Retrieve state
  const [currentExIdx, setCurrentExIdx] = useState(0);
  const [exUserInputs, setExUserInputs] = useState<Record<string, string>>({});
  const [exResults, setExResults] = useState<Record<string, boolean>>({});
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);

  // Use state
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  // Review step state

  // Helper for rendering text with furigana/romaji toggle
  const renderJapanese = (jp: string, _kana: string, romaji: string, rubyHtml?: string) => {
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {showFurigana && rubyHtml ? (
          <span dangerouslySetInnerHTML={{ __html: rubyHtml }} />
        ) : (
          <span>{jp}</span>
        )}
        {showRomaji && (
          <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
            {romaji}
          </span>
        )}
      </span>
    );
  };

  // --- Step 4 Retrieve Handlers ---
  const currentExercise = lesson.exercises[currentExIdx];

  const handleAnswerExercise = (answer: string) => {
    const isCorrect = checkAnswer(answer, currentExercise.correctAnswer);
    setExUserInputs({ ...exUserInputs, [currentExercise.id]: answer });
    setExResults({ ...exResults, [currentExercise.id]: isCorrect });

    if (!isCorrect) {
      recordError({
        lessonId: lesson.id,
        exerciseId: currentExercise.id,
        prompt: currentExercise.prompt,
        userAnswer: answer,
        correctAnswer: Array.isArray(currentExercise.correctAnswer)
          ? currentExercise.correctAnswer[0]
          : currentExercise.correctAnswer,
        explanation: currentExercise.explanation,
      });
    }
  };

  const handleSentenceTokenClick = (token: string) => {
    const next = [...sentenceTokens, token];
    setSentenceTokens(next);
    handleAnswerExercise(next.join(' '));
  };

  const handleResetTokens = () => {
    setSentenceTokens([]);
    const updated = { ...exUserInputs };
    delete updated[currentExercise.id];
    setExUserInputs(updated);
    const resUpdated = { ...exResults };
    delete resUpdated[currentExercise.id];
    setExResults(resUpdated);
  };

  // --- Finalize Lesson ---
  const handleCompleteLesson = () => {
    onComplete(lesson.canDo, lesson.reviewCards);
    setCurrentStep('review');
  };

  return (
    <div className="container">
      {/* Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} /> Beranda
        </button>

        <div style={{ textAlign: 'right' }}>
          <span className="badge badge-vermilion">Pelajaran {lesson.order}</span>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            PDF p. {lesson.pdfPage} / Cetak p. {lesson.printedPage}
          </div>
        </div>
      </div>

      {/* Stepper Bar */}
      <div className="stepper">
        {(['orient', 'listen', 'notice', 'retrieve', 'use', 'review'] as Step[]).map((step) => {
          const labels: Record<Step, string> = {
            orient: '1. Orient',
            listen: '2. Listen',
            notice: '3. Notice',
            retrieve: '4. Retrieve',
            use: '5. Use',
            review: '6. Review',
          };
          const isActive = currentStep === step;
          return (
            <button
              key={step}
              className={`stepper-btn ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              {labels[step]}
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* STEP 1: ORIENT (1-2 Min) */}
      {/* ======================================================== */}
      {currentStep === 'orient' && (
        <div>
          <div className="paper-card">
            <span className="badge">Langkah 1 &bull; 1–2 Menit</span>
            <h2 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Orientasi & Konteks Situasi</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Anna, seorang mahasiswi pertukaran pelajar asal Thailand berusia 20 tahun, baru saja tiba di Jepang. Di lobi kampus, ia bertatap muka pertama kali dengan Sakura, mahasiswi Jepang yang akan menjadi tutor pembimbingnya.
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Fokus Sasaran (Can-Do)
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                {lesson.canDo.map((cd, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>{cd}</li>
                ))}
              </ul>
            </div>

            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>6 Kosakata Kunci Pelajaran 1:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {lesson.vocabulary.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-light)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    {v.kanji ? (
                      <ruby>
                        {v.kanji}
                        <rt>{v.kana}</rt>
                      </ruby>
                    ) : (
                      v.kana
                    )}
                  </div>
                  {showRomaji && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
                      {v.romaji}
                    </div>
                  )}
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {v.idMeaning}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'right' }}>
              <button className="btn-primary" onClick={() => setCurrentStep('listen')}>
                Lanjut ke Listen <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 2: LISTEN (3-4 Min) */}
      {/* ======================================================== */}
      {currentStep === 'listen' && (
        <div>
          {/* Audio Link Banner */}
          <div className="audio-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
              <Volume2 size={18} color="var(--accent-vermilion)" />
              <span>Audio Siaran Resmi NHK (Mode A: Link-Only)</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Untuk mematuhi hak cipta resmi NHK WORLD, berkas audio tidak di-host di aplikasi ini. Silakan buka audio resmi di tab baru, lalu dengarkan segmen percakapan dialog Anna–Sakura:
            </p>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-strong)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--accent-ink)' }}>
                📍 Petunjuk Menit Dialog: 01:22 – 01:34 (Buffer perkiraan 01:20 – 01:35)
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                Total durasi rekaman siaran: 10 menit (600 detik). Fokuskan pendengaran pada menit tersebut.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={lesson.officialUrls.audioMp3}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ flex: 1, minWidth: '220px', textDecoration: 'none' }}
              >
                <ExternalLink size={16} /> Buka File MP3 Resmi (Tab Baru)
              </a>
              <a
                href={lesson.officialUrls.lessonPage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, minWidth: '220px', textDecoration: 'none' }}
              >
                <ExternalLink size={16} /> Pemutar Kalimat Resmi NHK
              </a>
            </div>
          </div>

          {/* Gist Task (Closed Transcript) */}
          <div className="paper-card">
            <span className="badge">Tugas Pemahaman Inti (Gist Task)</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0 1rem 0' }}>
              Jawab pertanyaan berikut setelah mendengarkan audio:
            </h3>

            {lesson.listening.gistQuestions.map((q, qIdx) => {
              const selected = gistAnswers[q.id];
              const isAnswered = selected !== undefined;
              return (
                <div key={q.id} style={{ marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.6rem' }}>
                    {qIdx + 1}. {q.question}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {q.options.map((opt, oIdx) => {
                      const isSelected = selected === oIdx;
                      const isCorrect = oIdx === q.correctIndex;
                      let bg = 'var(--bg-card)';
                      let border = 'var(--border-light)';

                      if (isAnswered) {
                        if (isSelected) {
                          bg = isCorrect ? 'var(--accent-green-soft)' : 'var(--accent-vermilion-soft)';
                          border = isCorrect ? 'var(--accent-green)' : 'var(--accent-vermilion)';
                        } else if (isCorrect) {
                          border = 'var(--accent-green)';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isAnswered}
                          onClick={() => setGistAnswers({ ...gistAnswers, [q.id]: oIdx })}
                          style={{
                            textAlign: 'left',
                            padding: '0.65rem 0.9rem',
                            borderRadius: 'var(--radius-sm)',
                            border: `1px solid ${border}`,
                            backgroundColor: bg,
                            fontSize: '0.88rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>{opt}</span>
                          {isAnswered && isSelected && (
                            isCorrect ? <CheckCircle size={16} color="var(--accent-green)" /> : <XCircle size={16} color="var(--accent-vermilion)" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Penjelasan:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep('orient')}>
                <ArrowLeft size={16} /> Orient
              </button>
              <button
                className="btn-primary"
                onClick={() => setCurrentStep('notice')}
                disabled={Object.keys(gistAnswers).length < lesson.listening.gistQuestions.length}
                style={{ opacity: Object.keys(gistAnswers).length < lesson.listening.gistQuestions.length ? 0.5 : 1 }}
              >
                Lanjut ke Notice <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 3: NOTICE (3-4 Min) */}
      {/* ======================================================== */}
      {currentStep === 'notice' && (
        <div>
          {/* Target Quotation Box */}
          <div className="paper-card" style={{ borderLeft: '4px solid var(--accent-vermilion)' }}>
            <span className="badge">Kalimat Target Pelajaran 1</span>
            <div style={{ margin: '0.85rem 0', fontSize: '1.4rem', fontWeight: 700 }}>
              {renderJapanese(
                lesson.noticeShortQuotes[0].targetSentence.jp,
                lesson.noticeShortQuotes[0].targetSentence.kana,
                lesson.noticeShortQuotes[0].targetSentence.romaji,
                lesson.noticeShortQuotes[0].targetSentence.rubyHtml
              )}
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              "{lesson.noticeShortQuotes[0].targetSentence.id}"
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
              {lesson.noticeShortQuotes[0].attribution} &bull; Kutipan pendek teratribusi; bukan klaim fair use; akan dihapus jika NHK meminta.
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a
                href={lesson.officialUrls.lessonPage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem', textDecoration: 'none' }}
              >
                <ExternalLink size={14} /> Buka Naskah Lengkap di Situs Resmi NHK
              </a>
            </div>
          </div>

          {/* Grammar Points Explanation */}
          <div className="paper-card">
            <span className="badge">Telaah Tata Bahasa (Bunpō)</span>
            {lesson.grammarPoints.map((gp) => (
              <div key={gp.id} style={{ marginTop: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-ink)', marginBottom: '0.35rem' }}>
                  {gp.title}
                </h3>
                <div style={{ display: 'inline-block', background: 'var(--bg-subtle)', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Pola: {gp.pattern}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {gp.explanationId}
                </p>
                <div style={{ background: 'var(--accent-amber-soft)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--accent-amber)', marginBottom: '0.75rem' }}>
                  <strong>Perhatian:</strong> {gp.contrastNote}
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Contoh Kalimat:
                  </div>
                  {gp.examples.map((ex, exI) => (
                    <div key={exI} style={{ background: 'var(--bg-main)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      <div>{renderJapanese(ex.jp, ex.kana, ex.romaji, ex.rubyHtml)}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ex.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Detail Questions */}
          <div className="paper-card">
            <span className="badge">Pemahaman Detail Dialog</span>
            <h3 style={{ fontSize: '1.05rem', margin: '0.5rem 0 1rem 0' }}>
              Pastikan rincian percakapan dipahami:
            </h3>

            {lesson.listening.detailQuestions.map((dq, dIdx) => {
              const selected = detailAnswers[dq.id];
              const isAnswered = selected !== undefined;
              return (
                <div key={dq.id} style={{ marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {dIdx + 1}. {dq.question}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {dq.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        disabled={isAnswered}
                        onClick={() => setDetailAnswers({ ...detailAnswers, [dq.id]: oIdx })}
                        style={{
                          textAlign: 'left',
                          padding: '0.55rem 0.85rem',
                          borderRadius: 'var(--radius-sm)',
                          border: isAnswered && selected === oIdx
                            ? oIdx === dq.correctIndex
                              ? '1px solid var(--accent-green)'
                              : '1px solid var(--accent-vermilion)'
                            : '1px solid var(--border-light)',
                          backgroundColor: isAnswered && selected === oIdx
                            ? oIdx === dq.correctIndex ? 'var(--accent-green-soft)' : 'var(--accent-vermilion-soft)'
                            : 'var(--bg-card)',
                          fontSize: '0.85rem',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {isAnswered && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '0.4rem', borderRadius: 'var(--radius-sm)' }}>
                      <strong>Penjelasan:</strong> {dq.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep('listen')}>
                <ArrowLeft size={16} /> Listen
              </button>
              <button className="btn-primary" onClick={() => setCurrentStep('retrieve')}>
                Lanjut ke Retrieve <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 4: RETRIEVE (3-4 Min) */}
      {/* ======================================================== */}
      {currentStep === 'retrieve' && (
        <div>
          <div className="paper-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="badge">Latihan Tertutup &bull; Soal {currentExIdx + 1} dari {lesson.exercises.length}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Skor: {Object.values(exResults).filter(Boolean).length} / {Object.keys(exResults).length}
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', margin: '0.75rem 0' }}>
              {currentExercise.prompt}
            </h3>

            {/* Exercise Type 1 & 3: Options (Cloze / Multiple Choice) */}
            {(currentExercise.type === 'cloze_particle' || currentExercise.type === 'audio_meaning') && currentExercise.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1rem 0' }}>
                {currentExercise.options.map((opt, oIdx) => {
                  const isAnswered = exUserInputs[currentExercise.id] !== undefined;
                  const isSelected = exUserInputs[currentExercise.id] === opt;
                  return (
                    <button
                      key={oIdx}
                      disabled={isAnswered}
                      onClick={() => handleAnswerExercise(opt)}
                      className="btn-secondary"
                      style={{
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                        backgroundColor: isAnswered && isSelected
                          ? exResults[currentExercise.id] ? 'var(--accent-green-soft)' : 'var(--accent-vermilion-soft)'
                          : 'var(--bg-card)',
                        borderColor: isAnswered && isSelected
                          ? exResults[currentExercise.id] ? 'var(--accent-green)' : 'var(--accent-vermilion)'
                          : 'var(--border-strong)',
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Exercise Type 2: Sentence Order */}
            {currentExercise.type === 'sentence_order' && (
              <div style={{ margin: '1rem 0' }}>
                <div style={{ minHeight: '52px', border: '2px dashed var(--border-strong)', borderRadius: 'var(--radius-sm)', padding: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
                  {sentenceTokens.length === 0 ? (
                    <span style={{ color: 'var(--text-subtle)', fontSize: '0.85rem' }}>Ketuk kata di bawah sesuai urutan kalimat...</span>
                  ) : (
                    sentenceTokens.map((t, i) => (
                      <span key={i} style={{ background: 'var(--accent-ink)', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  {['わたし', 'は', 'アンナ', 'です'].map((token, tIdx) => (
                    <button
                      key={tIdx}
                      className="btn-secondary"
                      onClick={() => handleSentenceTokenClick(token)}
                      disabled={sentenceTokens.includes(token)}
                      style={{ opacity: sentenceTokens.includes(token) ? 0.3 : 1 }}
                    >
                      {token}
                    </button>
                  ))}
                  <button onClick={handleResetTokens} style={{ fontSize: '0.8rem', color: 'var(--accent-vermilion)', textDecoration: 'underline' }}>
                    Reset Urutan
                  </button>
                </div>
              </div>
            )}

            {/* Exercise Type 4 & 5: Text Input (Typing recall / transform) */}
            {(currentExercise.type === 'meaning_to_jp' || currentExercise.type === 'grammar_transform') && (
              <div style={{ margin: '1rem 0' }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = (e.currentTarget.elements.namedItem('answer') as HTMLInputElement).value;
                    handleAnswerExercise(input);
                  }}
                  style={{ display: 'flex', gap: '0.5rem' }}
                >
                  <input
                    name="answer"
                    type="text"
                    placeholder="Ketik jawaban di sini (misal: こちらこそ)"
                    disabled={exUserInputs[currentExercise.id] !== undefined}
                    defaultValue={exUserInputs[currentExercise.id] || ''}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-strong)',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={exUserInputs[currentExercise.id] !== undefined}
                  >
                    Periksa
                  </button>
                </form>
              </div>
            )}

            {/* Immediate Rule Explanation */}
            {exUserInputs[currentExercise.id] !== undefined && (
              <div
                style={{
                  background: exResults[currentExercise.id] ? 'var(--accent-green-soft)' : 'var(--accent-vermilion-soft)',
                  border: `1px solid ${exResults[currentExercise.id] ? 'var(--accent-green)' : 'var(--accent-vermilion)'}`,
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  marginTop: '1rem',
                  fontSize: '0.88rem',
                }}
              >
                <div style={{ fontWeight: 700, color: exResults[currentExercise.id] ? 'var(--accent-green)' : 'var(--accent-vermilion)', marginBottom: '0.2rem' }}>
                  {exResults[currentExercise.id] ? 'Benar!' : 'Belum Tepat'}
                </div>
                <div>{currentExercise.explanation}</div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <button
                className="btn-secondary"
                disabled={currentExIdx === 0}
                onClick={() => setCurrentExIdx((p) => Math.max(0, p - 1))}
                style={{ opacity: currentExIdx === 0 ? 0.4 : 1 }}
              >
                Soal Sebelumnya
              </button>

              {currentExIdx < lesson.exercises.length - 1 ? (
                <button
                  className="btn-primary"
                  disabled={exUserInputs[currentExercise.id] === undefined}
                  onClick={() => setCurrentExIdx((p) => p + 1)}
                  style={{ opacity: exUserInputs[currentExercise.id] === undefined ? 0.5 : 1 }}
                >
                  Soal Berikutnya <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  className="btn-accent"
                  disabled={Object.keys(exUserInputs).length < lesson.exercises.length}
                  onClick={() => setCurrentStep('use')}
                  style={{ opacity: Object.keys(exUserInputs).length < lesson.exercises.length ? 0.5 : 1 }}
                >
                  Lanjut ke Use <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 5: USE (2-3 Min) */}
      {/* ======================================================== */}
      {currentStep === 'use' && (
        <div>
          <div className="paper-card">
            <span className="badge">Langkah 5 &bull; Praktik Nyata (Output Task)</span>
            <h2 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Tugas Berbicara Mandiri</h2>

            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', margin: '1rem 0' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                Skenario Situasi:
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                {lesson.outputTask.scenarioPrompt}
              </p>
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                Panduan Langkah:
              </div>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.85rem' }}>
                {lesson.outputTask.instructions.map((ins, i) => (
                  <li key={i} style={{ marginBottom: '0.2rem' }}>{ins}</li>
                ))}
              </ol>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-strong)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Contoh Jawaban Acuan (Model Answer):
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                {renderJapanese(
                  lesson.outputTask.modelAnswer.jp,
                  lesson.outputTask.modelAnswer.kana,
                  lesson.outputTask.modelAnswer.romaji,
                  lesson.outputTask.modelAnswer.rubyHtml
                )}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                "{lesson.outputTask.modelAnswer.id}"
              </div>
            </div>

            <h3 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>Daftar Periksa Mandiri (Self-Check Checklist):</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {lesson.outputTask.selfCheckList.map((item, idx) => {
                const checked = !!checklist[idx];
                return (
                  <label
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      background: checked ? 'var(--accent-green-soft)' : 'var(--bg-card)',
                      border: `1px solid ${checked ? 'var(--accent-green)' : 'var(--border-light)'}`,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecklist({ ...checklist, [idx]: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--accent-green)' }}
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn-secondary" onClick={() => setCurrentStep('retrieve')}>
                <ArrowLeft size={16} /> Retrieve
              </button>
              <button
                className="btn-accent"
                onClick={handleCompleteLesson}
                disabled={Object.values(checklist).filter(Boolean).length < 3}
                style={{ opacity: Object.values(checklist).filter(Boolean).length < 3 ? 0.5 : 1 }}
              >
                Selesaikan Pelajaran 1 <CheckCircle size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STEP 6: REVIEW (1-2 Min) */}
      {/* ======================================================== */}
      {currentStep === 'review' && (
        <div>
          <div className="paper-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
            <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '9999px', background: 'var(--accent-green-soft)', marginBottom: '1rem' }}>
              <Award size={48} color="var(--accent-green)" />
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Selamat! Sesi Pelajaran 1 Tuntas
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              Kamu telah menyelesaikan siklus 15 menit: Orient &rarr; Listen &rarr; Notice &rarr; Retrieve &rarr; Use.
            </p>

            <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'left', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.5rem', color: 'var(--accent-ink)' }}>
                🎉 Capaian yang Dikuasai:
              </div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                {lesson.canDo.map((cd, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem' }}>{cd}</li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '0.65rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <strong>8 Kartu Ulasan SRS</strong> telah otomatis ditambahkan ke antrean ulasan pengulangan berkala kamu.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={onGoToReview}>
                <RotateCcw size={16} /> Ulas 8 Kartu Sekarang
              </button>
              <button className="btn-secondary" onClick={onBack}>
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
