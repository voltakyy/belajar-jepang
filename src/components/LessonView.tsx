import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Volume2,
  CheckCircle,
  XCircle,
  Check,
  RotateCcw,
} from 'lucide-react';
import { Lesson, ReviewCard } from '../types';
import { checkAnswer } from '../utils/normalize';
import { recordError } from '../utils/srs';
import { SourceLinks } from './SourceLinks';
import { useJapaneseVoice } from '../hooks/useJapaneseVoice';

interface LessonViewProps {
  lesson: Lesson;
  showFurigana: boolean;
  showRomaji: boolean;
  onComplete: (canDos: string[], newCards: ReviewCard[]) => void;
  onBack: () => void;
  onGoToReview: () => void;
}

type Step = 'orient' | 'listen' | 'notice' | 'retrieve' | 'use' | 'review';

const STEPS: { id: Step; no: string; label: string }[] = [
  { id: 'orient', no: '01', label: 'Orientasi' },
  { id: 'listen', no: '02', label: 'Dengar' },
  { id: 'notice', no: '03', label: 'Sadari' },
  { id: 'retrieve', no: '04', label: 'Latih' },
  { id: 'use', no: '05', label: 'Pakai' },
  { id: 'review', no: '06', label: 'Tutup' },
];

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  showFurigana,
  showRomaji,
  onComplete,
  onBack,
  onGoToReview,
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('orient');
  const [gistAnswers, setGistAnswers] = useState<Record<string, number>>({});
  const [detailAnswers, setDetailAnswers] = useState<Record<string, number>>({});
  const [currentExIdx, setCurrentExIdx] = useState(0);
  const [exUserInputs, setExUserInputs] = useState<Record<string, string>>({});
  const [exResults, setExResults] = useState<Record<string, boolean>>({});
  const [sentenceTokens, setSentenceTokens] = useState<string[]>([]);
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  const { state: voiceState, speak, speaking } = useJapaneseVoice();

  const renderJapanese = (
    jp: string,
    _kana: string,
    romaji: string,
    rubyHtml?: string
  ) => (
    <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <span className="jp">
        {showFurigana && rubyHtml ? (
          <span dangerouslySetInnerHTML={{ __html: rubyHtml }} />
        ) : (
          jp
        )}
      </span>
      {showRomaji && (
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            marginTop: '0.25rem',
          }}
        >
          {romaji}
        </span>
      )}
    </span>
  );

  const goTo = (step: Step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Latihan ---
  const currentExercise = lesson.exercises[currentExIdx];
  const isLastExercise = currentExIdx === lesson.exercises.length - 1;

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

  const orderSource = Array.isArray(currentExercise.correctAnswer)
    ? currentExercise.correctAnswer[0]
    : currentExercise.correctAnswer;
  const orderTokens = orderSource.split(' ');

  const handleSentenceTokenClick = (token: string) => {
    if (sentenceTokens.includes(token)) return;
    const next = [...sentenceTokens, token];
    setSentenceTokens(next);
    // Baru periksa setelah semua kata tersusun, supaya klik pertama
    // tidak langsung tercatat sebagai kesalahan.
    if (next.length === orderTokens.length) {
      handleAnswerExercise(next.join(' '));
    }
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

  const handleCompleteLesson = () => {
    onComplete(lesson.canDo, lesson.reviewCards);
    setCurrentStep('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const gistDone = Object.keys(gistAnswers).length >= lesson.listening.gistQuestions.length;
  const checkedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="container">
      {/* Kepala pelajaran */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: '1.15rem',
        }}
      >
        <button
          onClick={onBack}
          className="nav-link"
          style={{ padding: 0, color: 'var(--on-navy-soft)', display: 'flex', gap: '0.35rem' }}
        >
          <ArrowLeft size={14} /> Beranda
        </button>

        <div style={{ textAlign: 'right' }}>
          <div className="kicker">Pelajaran {String(lesson.order).padStart(2, '0')}</div>
          <div style={{ fontSize: '0.66rem', color: 'var(--on-navy-faint)', marginTop: '0.2rem' }}>
            PDF p. {lesson.pdfPage} &middot; Cetak p. {lesson.printedPage}
          </div>
        </div>
      </div>

      <div className="rail" role="tablist" aria-label="Langkah pelajaran">
        {STEPS.map((step) => (
          <button
            key={step.id}
            role="tab"
            aria-selected={currentStep === step.id}
            className={`rail-step ${currentStep === step.id ? 'active' : ''}`}
            onClick={() => goTo(step.id)}
          >
            <span className="num">{step.no}</span>
            {step.label}
          </button>
        ))}
      </div>

      {/* ============ 01 ORIENTASI ============ */}
      {currentStep === 'orient' && (
        <section className="sheet">
          <span className="badge">Langkah 1 &middot; 1–2 menit</span>
          <h2 style={{ fontSize: '1.55rem', margin: '0.6rem 0 0.75rem' }}>
            Kenali situasinya dulu
          </h2>

          <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', maxWidth: '64ch' }}>
            Anna, mahasiswi pertukaran asal Thailand, baru tiba di Jepang. Di
            lobi kampus ia bertemu Sakura, mahasiswi Jepang yang akan menjadi
            tutornya. Perhatikan bagaimana keduanya menyebut nama.
          </p>

          <div className="note-paper" style={{ margin: '1.15rem 0' }}>
            <strong style={{ display: 'block', marginBottom: '0.35rem' }}>
              Setelah langkah ini kamu bisa
            </strong>
            <ul style={{ paddingLeft: '1.1rem', display: 'grid', gap: '0.25rem' }}>
              {lesson.canDo.map((cd, i) => (
                <li key={i}>{cd}</li>
              ))}
            </ul>
          </div>

          <div className="row-between" style={{ marginBottom: '0.35rem' }}>
            <h3 style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
              Enam kata kunci
            </h3>
            {voiceState === 'ready' && (
              <span style={{ fontSize: '0.66rem', color: 'var(--ink-faint)' }}>
                ketuk ikon untuk mendengar
              </span>
            )}
          </div>

          <div className="vocab-list">
            {lesson.vocabulary.map((v) => (
              <div className="vocab-row" key={v.id}>
                <div className="vocab-main">
                  <div className="vocab-jp">
                    {v.kanji ? (
                      <ruby>
                        {v.kanji}
                        <rt>{v.kana}</rt>
                      </ruby>
                    ) : (
                      v.kana
                    )}
                  </div>
                  {showRomaji && <div className="vocab-romaji">{v.romaji}</div>}
                </div>

                <div className="vocab-meaning">{v.idMeaning}</div>

                <button
                  className={`speak-btn ${speaking === v.kana ? 'is-speaking' : ''}`}
                  onClick={() => speak(v.kana)}
                  disabled={voiceState !== 'ready'}
                  aria-label={`Dengarkan ${v.romaji}`}
                  title={
                    voiceState === 'ready'
                      ? 'Dengarkan kata ini'
                      : 'Perangkat belum punya suara Jepang'
                  }
                >
                  <Volume2 size={15} />
                </button>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', marginTop: '0.9rem' }}>
            {voiceState === 'ready'
              ? 'Suara dari mesin perangkat, bukan penutur asli. Untuk contoh pelafalan yang benar, dengarkan audio NHK di langkah berikutnya.'
              : 'Tombol suara nonaktif karena perangkat ini belum punya suara bahasa Jepang. Audio NHK di langkah berikutnya tetap bisa dipakai.'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.4rem' }}>
            <button className="btn-primary" onClick={() => goTo('listen')}>
              Lanjut mendengar <ArrowRight size={16} />
            </button>
          </div>
        </section>
      )}

      {/* ============ 02 DENGAR ============ */}
      {currentStep === 'listen' && (
        <>
          <section className="sheet">
            <span className="badge">Langkah 2 &middot; 3–4 menit</span>
            <h2 style={{ fontSize: '1.55rem', margin: '0.6rem 0 0.6rem' }}>
              Dengarkan dialog aslinya
            </h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', marginBottom: '1.15rem', maxWidth: '62ch' }}>
              Audio pelajaran ini panjangnya sekitar sepuluh menit. Dialog Anna
              dan Sakura ada di bagian awal, jadi kamu tidak perlu
              mendengarkan semuanya.
            </p>

            <SourceLinks
              lessonPage={lesson.officialUrls.lessonPage}
              audioMp3={lesson.officialUrls.audioMp3}
              startAt={lesson.officialUrls.audioTimestamp?.start}
              withSteps
            />
          </section>

          <section className="sheet">
            <div className="row-between" style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.05rem' }}>Pertanyaan inti</h3>
              <span className="badge">
                {Object.keys(gistAnswers).length} / {lesson.listening.gistQuestions.length}
              </span>
            </div>

            {lesson.listening.gistQuestions.map((q, qIdx) => {
              const selected = gistAnswers[q.id];
              const isAnswered = selected !== undefined;

              return (
                <div
                  key={q.id}
                  style={{
                    marginBottom: '1.35rem',
                    paddingBottom: '1.15rem',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ fontSize: '0.92rem', marginBottom: '0.65rem', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--ink-faint)', marginRight: '0.4rem' }}>
                      {qIdx + 1}.
                    </span>
                    {q.question}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {q.options.map((opt, oIdx) => {
                      const isSelected = selected === oIdx;
                      const isCorrect = oIdx === q.correctIndex;
                      const cls = !isAnswered
                        ? ''
                        : isSelected
                          ? isCorrect
                            ? 'is-correct'
                            : 'is-wrong'
                          : isCorrect
                            ? 'is-correct'
                            : 'is-muted';

                      return (
                        <button
                          key={oIdx}
                          className={`choice ${cls}`}
                          disabled={isAnswered}
                          onClick={() =>
                            setGistAnswers({ ...gistAnswers, [q.id]: oIdx })
                          }
                        >
                          <span>{opt}</span>
                          {isAnswered && isSelected && (
                            isCorrect ? (
                              <CheckCircle size={15} color="var(--moss)" />
                            ) : (
                              <XCircle size={15} color="var(--vermilion)" />
                            )
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="note-paper" style={{ marginTop: '0.65rem' }}>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => goTo('orient')}>
                <ArrowLeft size={15} /> Kembali
              </button>
              <button
                className="btn-primary"
                onClick={() => goTo('notice')}
                disabled={!gistDone}
                style={{ opacity: gistDone ? 1 : 0.45 }}
              >
                Lanjut ke pola <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </>
      )}

      {/* ============ 03 SADARI ============ */}
      {currentStep === 'notice' && (
        <>
          <section className="sheet" style={{ borderLeft: '3px solid var(--amber-deep)' }}>
            <span className="badge">Langkah 3 &middot; Kalimat kunci</span>
            <div className="quote jp" style={{ margin: '0.85rem 0 0.25rem' }}>
              {renderJapanese(
                lesson.noticeShortQuotes[0].targetSentence.jp,
                lesson.noticeShortQuotes[0].targetSentence.kana,
                lesson.noticeShortQuotes[0].targetSentence.romaji,
                lesson.noticeShortQuotes[0].targetSentence.rubyHtml
              )}
            </div>
            <div className="quote-id">
              &ldquo;{lesson.noticeShortQuotes[0].targetSentence.id}&rdquo;
            </div>
            <div className="attribution">
              {lesson.noticeShortQuotes[0].attribution}. Kutipan pendek
              teratribusi &mdash; bukan klaim fair use &mdash; akan dihapus
              bila NHK meminta.
            </div>
            <div style={{ marginTop: '0.9rem' }}>
              <a
                className="text-link"
                href={lesson.officialUrls.lessonPage}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--ink)', borderBottomColor: 'var(--border-strong)' }}
              >
                Naskah lengkap di NHK <ExternalLink size={12} />
              </a>
            </div>
          </section>

          <section className="sheet">
            <span className="badge">Tata bahasa</span>

            {lesson.grammarPoints.map((gp, idx) => (
              <article
                key={gp.id}
                style={{
                  marginTop: idx === 0 ? '0.9rem' : '1.5rem',
                  paddingTop: idx === 0 ? 0 : '1.35rem',
                  borderTop: idx === 0 ? 'none' : '1px solid var(--border-light)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                  {gp.title}
                </h3>
                <div
                  className="jp"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--ink-soft)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {gp.pattern}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  {gp.explanationId}
                </p>
                <div className="note-paper" style={{ marginBottom: '0.85rem' }}>
                  <strong>Perhatikan:</strong> {gp.contrastNote}
                </div>

                <div style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.4rem' }}>
                  Contoh
                </div>
                {gp.examples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '0.55rem 0',
                      borderTop: i === 0 ? 'none' : '1px dotted var(--border-light)',
                    }}
                  >
                    <div className="jp" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                      {renderJapanese(ex.jp, ex.kana, ex.romaji, ex.rubyHtml)}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                      {ex.id}
                    </div>
                  </div>
                ))}
              </article>
            ))}
          </section>

          <section className="sheet">
            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>
              Cek rincian dialog
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--ink-faint)', marginBottom: '1rem' }}>
              Jawab dari ingatan. Kalau ragu, putar ulang bagian 01:22–01:34.
            </p>

            {lesson.listening.detailQuestions.map((dq, dIdx) => {
              const selected = detailAnswers[dq.id];
              const isAnswered = selected !== undefined;

              return (
                <div
                  key={dq.id}
                  style={{
                    marginBottom: '1.25rem',
                    paddingBottom: '1.1rem',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', marginBottom: '0.55rem', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--ink-faint)', marginRight: '0.4rem' }}>
                      {dIdx + 1}.
                    </span>
                    {dq.question}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {dq.options.map((opt, oIdx) => {
                      const isSelected = selected === oIdx;
                      const isCorrect = oIdx === dq.correctIndex;
                      const cls = !isAnswered
                        ? ''
                        : isSelected
                          ? isCorrect
                            ? 'is-correct'
                            : 'is-wrong'
                          : isCorrect
                            ? 'is-correct'
                            : 'is-muted';

                      return (
                        <button
                          key={oIdx}
                          className={`choice ${cls}`}
                          disabled={isAnswered}
                          onClick={() =>
                            setDetailAnswers({ ...detailAnswers, [dq.id]: oIdx })
                          }
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="note-paper" style={{ marginTop: '0.55rem' }}>
                      {dq.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => goTo('listen')}>
                <ArrowLeft size={15} /> Dengar lagi
              </button>
              <button className="btn-primary" onClick={() => goTo('retrieve')}>
                Mulai latihan <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </>
      )}

      {/* ============ 04 LATIH ============ */}
      {currentStep === 'retrieve' && (
        <section className="sheet">
          <div className="row-between" style={{ marginBottom: '0.75rem' }}>
            <span className="badge">
              Soal {currentExIdx + 1} dari {lesson.exercises.length}
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--ink-faint)' }}>
              benar {Object.values(exResults).filter(Boolean).length} dari{' '}
              {Object.keys(exResults).length || 0}
            </span>
          </div>

          <h2 style={{ fontSize: '1.25rem', lineHeight: 1.45, margin: '0.5rem 0 1.1rem' }}>
            {currentExercise.prompt}
          </h2>

          {(currentExercise.type === 'cloze_particle' ||
            currentExercise.type === 'audio_meaning') &&
            currentExercise.options && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {currentExercise.options.map((opt, oIdx) => {
                  const answered = exUserInputs[currentExercise.id] !== undefined;
                  const selected = exUserInputs[currentExercise.id] === opt;
                  const correct = exResults[currentExercise.id];

                  return (
                    <button
                      key={oIdx}
                      className={`choice ${answered && selected ? (correct ? 'is-correct' : 'is-wrong') : ''}`}
                      disabled={answered}
                      onClick={() => handleAnswerExercise(opt)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

          {currentExercise.type === 'sentence_order' && (
            <div style={{ margin: '0.5rem 0' }}>
              <div
                style={{
                  minHeight: '56px',
                  border: '1px dashed var(--border-strong)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.6rem',
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginBottom: '0.9rem',
                  background: 'var(--paper-hi)',
                }}
              >
                {sentenceTokens.length === 0 ? (
                  <span style={{ color: 'var(--ink-faint)', fontSize: '0.8rem' }}>
                    Ketuk kata di bawah sesuai urutan.
                  </span>
                ) : (
                  sentenceTokens.map((t, i) => (
                    <span
                      key={i}
                      className="jp"
                      style={{
                        borderBottom: '2px solid var(--amber-deep)',
                        padding: '0.1rem 0.25rem',
                        fontSize: '1.05rem',
                      }}
                    >
                      {t}
                    </span>
                  ))
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                {[...orderTokens].reverse().map((token, i) => (
                  <button
                    key={i}
                    className="btn-secondary jp"
                    onClick={() => handleSentenceTokenClick(token)}
                    disabled={sentenceTokens.includes(token)}
                    style={{
                      opacity: sentenceTokens.includes(token) ? 0.28 : 1,
                      padding: '0.45rem 0.8rem',
                      minHeight: '40px',
                    }}
                  >
                    {token}
                  </button>
                ))}
                <button
                  onClick={handleResetTokens}
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--ink-faint)',
                    textDecoration: 'underline',
                    marginLeft: '0.3rem',
                  }}
                >
                  Ulangi susunan
                </button>
              </div>
            </div>
          )}

          {(currentExercise.type === 'meaning_to_jp' ||
            currentExercise.type === 'grammar_transform') && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (
                  e.currentTarget.elements.namedItem('answer') as HTMLInputElement
                ).value;
                if (input.trim()) handleAnswerExercise(input);
              }}
              style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              <input
                name="answer"
                type="text"
                className="jp"
                placeholder="Ketik jawaban, mis. こちらこそ"
                disabled={exUserInputs[currentExercise.id] !== undefined}
                defaultValue={exUserInputs[currentExercise.id] || ''}
                style={{
                  flex: '1 1 220px',
                  padding: '0.7rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-strong)',
                  fontSize: '1rem',
                  background: 'var(--paper-hi)',
                  color: 'var(--ink)',
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
          )}

          {exUserInputs[currentExercise.id] !== undefined && (
            <div
              style={{
                marginTop: '1.1rem',
                padding: '0.75rem 0.85rem',
                borderLeft: `3px solid ${exResults[currentExercise.id] ? 'var(--moss)' : 'var(--vermilion)'}`,
                background: exResults[currentExercise.id]
                  ? 'var(--accent-green-soft)'
                  : 'var(--accent-vermilion-soft)',
                fontSize: '0.86rem',
              }}
            >
              <strong
                style={{
                  display: 'block',
                  marginBottom: '0.2rem',
                  color: exResults[currentExercise.id]
                    ? 'var(--moss)'
                    : 'var(--vermilion)',
                }}
              >
                {exResults[currentExercise.id] ? 'Tepat.' : 'Belum tepat.'}
              </strong>
              {currentExercise.explanation}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '1.5rem',
            }}
          >
            <button
              className="btn-secondary"
              disabled={currentExIdx === 0}
              onClick={() => setCurrentExIdx((p) => Math.max(0, p - 1))}
              style={{ opacity: currentExIdx === 0 ? 0.4 : 1 }}
            >
              Sebelumnya
            </button>

            {!isLastExercise ? (
              <button
                className="btn-primary"
                disabled={exUserInputs[currentExercise.id] === undefined}
                onClick={() => setCurrentExIdx((p) => p + 1)}
                style={{
                  opacity: exUserInputs[currentExercise.id] === undefined ? 0.45 : 1,
                }}
              >
                Berikutnya <ArrowRight size={15} />
              </button>
            ) : (
              <button
                className="btn-primary"
                disabled={Object.keys(exUserInputs).length < lesson.exercises.length}
                onClick={() => goTo('use')}
                style={{
                  opacity:
                    Object.keys(exUserInputs).length < lesson.exercises.length ? 0.45 : 1,
                }}
              >
                Pakai sekarang <ArrowRight size={15} />
              </button>
            )}
          </div>
        </section>
      )}

      {/* ============ 05 PAKAI ============ */}
      {currentStep === 'use' && (
        <section className="sheet">
          <span className="badge">Langkah 5 &middot; 2–3 menit</span>
          <h2 style={{ fontSize: '1.55rem', margin: '0.6rem 0 0.85rem' }}>
            Sekarang giliranmu
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '1rem', maxWidth: '62ch' }}>
            {lesson.outputTask.scenarioPrompt}
          </p>

          <ol
            style={{
              paddingLeft: '1.15rem',
              fontSize: '0.88rem',
              color: 'var(--ink-soft)',
              display: 'grid',
              gap: '0.3rem',
              marginBottom: '1.25rem',
            }}
          >
            {lesson.outputTask.instructions.map((ins, i) => (
              <li key={i}>{ins}</li>
            ))}
          </ol>

          <div
            style={{
              background: 'var(--paper-dim)',
              padding: '1rem 1.1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.35rem',
            }}
          >
            <div style={{ fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
              Contoh dari buku
            </div>
            <div className="jp" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
              {renderJapanese(
                lesson.outputTask.modelAnswer.jp,
                lesson.outputTask.modelAnswer.kana,
                lesson.outputTask.modelAnswer.romaji,
                lesson.outputTask.modelAnswer.rubyHtml
              )}
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--ink-soft)', marginTop: '0.35rem' }}>
              &ldquo;{lesson.outputTask.modelAnswer.id}&rdquo;
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginTop: '0.6rem' }}>
              Contoh ini memakai nama Anna dari dialog. Ucapkan ulang dengan
              namamu sendiri.
            </div>
          </div>

          <h3 style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.6rem' }}>
            Periksa sendiri
          </h3>

          <div style={{ display: 'grid', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {lesson.outputTask.selfCheckList.map((item, idx) => {
              const checked = !!checklist[idx];
              return (
                <label
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    padding: '0.55rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    background: checked ? 'var(--accent-green-soft)' : 'transparent',
                    border: `1px solid ${checked ? 'rgba(47,107,79,0.4)' : 'var(--border-light)'}`,
                    lineHeight: 1.5,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) =>
                      setChecklist({ ...checklist, [idx]: e.target.checked })
                    }
                    style={{
                      width: '16px',
                      height: '16px',
                      marginTop: '2px',
                      accentColor: 'var(--moss)',
                    }}
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => goTo('retrieve')}>
              <ArrowLeft size={15} /> Latihan
            </button>
            <button
              className="btn-primary"
              onClick={handleCompleteLesson}
              disabled={checkedCount < 3}
              style={{ opacity: checkedCount < 3 ? 0.45 : 1 }}
            >
              Tutup sesi <ArrowRight size={15} />
            </button>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', marginTop: '0.6rem', textAlign: 'right' }}>
            Centang minimal 3 dari 4 butir.
          </p>
        </section>
      )}

      {/* ============ 06 TUTUP ============ */}
      {currentStep === 'review' && (
        <section className="sheet" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <div className="kicker" style={{ color: 'var(--amber-deep)' }}>
            Sesi selesai
          </div>
          <h2 style={{ fontSize: '1.8rem', margin: '0.5rem 0 0.6rem' }}>
            Satu pelajaran lagi tuntas
          </h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', maxWidth: '44ch', margin: '0 auto 1.5rem' }}>
            Kamu sudah melewati enam langkah: orientasi, mendengar, menyadari
            pola, berlatih, memakai, lalu menutup.
          </p>

          <div
            style={{
              background: 'var(--paper-dim)',
              padding: '1.1rem 1.2rem',
              borderRadius: 'var(--radius-sm)',
              textAlign: 'left',
              maxWidth: '480px',
              margin: '0 auto 1.5rem',
            }}
          >
            <div style={{ fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '0.5rem' }}>
              Yang sekarang kamu bisa
            </div>
            <ul className="can-do-list">
              {lesson.canDo.map((cd, i) => (
                <li key={i}>
                  <Check size={15} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--moss)' }} />
                  <span>{cd}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '0.9rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-light)', fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
              {lesson.reviewCards.length} kartu ulasan masuk ke antrean besok.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onGoToReview}>
              <RotateCcw size={15} /> Lihat antrean ulasan
            </button>
            <button className="btn-secondary" onClick={onBack}>
              Kembali ke beranda
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
