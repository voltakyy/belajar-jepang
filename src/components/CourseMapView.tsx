import React from 'react';
import { COURSE_MAP, PRODUCT_ARCS } from '../data/lessons';
import { UserProgress } from '../types';
import { Check, Play, Headphones, BookOpen, ExternalLink } from 'lucide-react';

interface CourseMapViewProps {
  progress: UserProgress;
  onSelectLesson: (id: string) => void;
}

export const CourseMapView: React.FC<CourseMapViewProps> = ({
  progress,
  onSelectLesson,
}) => {
  const isDone = (id: string) => progress.completedLessons.includes(id);

  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Kurikulum</div>
        <h1>Empat puluh delapan pelajaran</h1>
        <p>
          Seluruh silabus NHK WORLD edisi Anna 2015, disusun menjadi tujuh
          tahap. Setiap kartu menyediakan tautan ke audio dan naskah resmi di
          situs NHK &mdash; keduanya gratis dan tanpa akun.
        </p>
      </header>

      <div className="note" style={{ marginBottom: '2rem' }}>
        Audio tidak diputar di dalam aplikasi ini. Tekan{' '}
        <strong>Audio NHK</strong> pada kartu pelajaran, tab baru akan terbuka
        di situs resmi NHK.
      </div>

      {PRODUCT_ARCS.map((arc) => {
        const arcLessons = COURSE_MAP.filter((l) => l.productArcId === arc.id);

        return (
          <section className="arc" key={arc.id}>
            <div className="arc-head">
              <h2>{arc.title.replace(/^Arc \d+:\s*/, '')}</h2>
              <span className="range">{arc.lessonRange}</span>
            </div>
            <p className="arc-desc">{arc.description}</p>

            <div className="lesson-grid">
              {arcLessons.map((lesson) => {
                const completed = isDone(lesson.id);
                const isActive = lesson.id === 'L01';

                return (
                  <article
                    key={lesson.id}
                    className={`lesson-card ${isActive ? 'is-active' : ''} ${completed ? 'is-done' : ''}`}
                  >
                    <div className="top">
                      <span className="no">
                        {String(lesson.order).padStart(2, '0')}
                      </span>
                      <span className="pages">
                        cetak {lesson.printedPage} &middot; pdf {lesson.pdfPage}
                      </span>
                    </div>

                    <div>
                      <div
                        className="romaji"
                        style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.01em' }}
                      >
                        {lesson.title.romaji}
                      </div>
                      <div className="id-title">{lesson.title.id}</div>
                    </div>

                    <div className="chip-row">
                      {lesson.situationCategories.map((sit, i) => (
                        <span className="chip" key={i}>
                          {sit}
                        </span>
                      ))}
                    </div>

                    <div className="card-actions">
                      <a
                        href={lesson.audioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Buka audio resmi NHK di tab baru"
                      >
                        <Headphones size={12} /> Audio NHK{' '}
                        <ExternalLink size={10} />
                      </a>
                      <a
                        href={lesson.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Buka naskah resmi NHK di tab baru"
                      >
                        <BookOpen size={12} /> Naskah{' '}
                        <ExternalLink size={10} />
                      </a>
                    </div>

                    {isActive ? (
                      <button
                        className="btn-primary"
                        onClick={() => onSelectLesson(lesson.id)}
                        style={{
                          width: '100%',
                          minHeight: '38px',
                          padding: '0.4rem',
                          fontSize: '0.74rem',
                        }}
                      >
                        {completed ? (
                          <>
                            <Check size={13} /> Ulangi pelajaran
                          </>
                        ) : (
                          <>
                            <Play size={13} /> Mulai pelajaran
                          </>
                        )}
                      </button>
                    ) : (
                      <div
                        style={{
                          textAlign: 'center',
                          fontSize: '0.66rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--on-navy-faint)',
                          padding: '0.4rem',
                          borderTop: '1px solid var(--rule-navy)',
                        }}
                      >
                        Belum tersedia
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
