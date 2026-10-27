import React from 'react';
import { COURSE_MAP, PRODUCT_ARCS } from '../data/lessons';
import { UserProgress } from '../types';
import { CheckCircle2, Lock, Play, ExternalLink, Headphones, BookOpen } from 'lucide-react';

interface CourseMapViewProps {
  progress: UserProgress;
  onSelectLesson: (id: string) => void;
}

export const CourseMapView: React.FC<CourseMapViewProps> = ({ progress, onSelectLesson }) => {
  const isDone = (id: string) => progress.completedLessons.includes(id);

  return (
    <div className="container">
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: '0.35rem' }}>Peta Pembelajaran 48 Pelajaran</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
          Struktur lengkap 48 pelajaran NHK WORLD <em>Belajar Bahasa Jepang (Edisi Anna 2015)</em>. Terbagi dalam 7 Product Arcs kurikulum bertahap.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {PRODUCT_ARCS.map((arc) => {
          const arcLessons = COURSE_MAP.filter((l) => l.productArcId === arc.id);

          return (
            <div key={arc.id} className="paper-card" style={{ padding: '1.5rem' }}>
              <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="badge badge-vermilion" style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem' }}>
                    {arc.lessonRange}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Arc {arc.order} dari 7
                  </span>
                </div>
                <h2 style={{ fontSize: '1.2rem', margin: '0.25rem 0' }}>{arc.title}</h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{arc.description}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {arcLessons.map((l) => {
                  const completed = isDone(l.id);
                  const isActive = l.id === 'L01';

                  return (
                    <div
                      key={l.id}
                      style={{
                        border: isActive ? '2px solid var(--vermilion-primary)' : '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1rem',
                        background: completed ? 'rgba(46, 125, 50, 0.04)' : isActive ? 'var(--bg-paper)' : 'var(--bg-surface)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                        transition: 'transform 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.85rem', color: isActive ? 'var(--vermilion-primary)' : 'var(--text-muted)' }}>
                            Pelajaran {l.order}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            Cetak p. {l.printedPage} / PDF p. {l.pdfPage}
                          </span>
                        </div>

                        <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                          {l.title.romaji}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                          {l.title.id}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
                          {l.situationCategories.map((sit, sIdx) => (
                            <span key={sIdx} className="badge badge-accent" style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>
                              {sit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                          <a
                            href={l.audioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--indigo-subtle)', textDecoration: 'none' }}
                            title="Buka audio resmi NHK di tab baru"
                          >
                            <Headphones size={13} /> Audio NHK <ExternalLink size={11} />
                          </a>
                          <a
                            href={l.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                            title="Buka halaman materi resmi NHK di tab baru"
                          >
                            <BookOpen size={13} /> Web NHK <ExternalLink size={11} />
                          </a>
                        </div>

                        {isActive ? (
                          <button
                            onClick={() => onSelectLesson(l.id)}
                            className="btn btn-primary"
                            style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem', justifyContent: 'center' }}
                          >
                            {completed ? (
                              <>
                                <CheckCircle2 size={16} /> Pelajari Ulang
                              </>
                            ) : (
                              <>
                                <Play size={16} /> Mulai Belajar (Gate 2)
                              </>
                            )}
                          </button>
                        ) : (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.35rem',
                              padding: '0.45rem',
                              background: 'var(--bg-paper-dim)',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--text-muted)',
                              fontSize: '0.75rem',
                            }}
                          >
                            <Lock size={13} /> Tersedia di Gate 3
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
