import React from 'react';
import { BookOpen, Map, RotateCcw, Settings } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'lesson' | 'map' | 'review';
  onNavigate: (view: 'home' | 'lesson' | 'map' | 'review') => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenSettings }) => {
  return (
    <>
      <header style={{
        backgroundColor: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-light)',
        padding: '0.85rem 1.25rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div 
            onClick={() => onNavigate('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
            }}>
              日
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                Nihongo <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.9rem' }}>日本語</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)' }}>
                Pendamping Mandiri NHK 2015
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={onOpenSettings}
              className="btn-secondary"
              style={{ padding: '0.45rem 0.65rem', minHeight: '36px', fontSize: '0.85rem' }}
              title="Setelan Tampilan & Data"
            >
              <Settings size={16} />
              <span style={{ display: 'none' }}>Setelan</span>
            </button>
          </div>
        </div>
      </header>

      {/* Bottom Nav for thumb-friendly mobile access */}
      <nav className="bottom-nav">
        <button
          className={`bottom-nav-btn ${currentView === 'home' || currentView === 'lesson' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          <BookOpen size={20} />
          <span>Belajar</span>
        </button>
        <button
          className={`bottom-nav-btn ${currentView === 'map' ? 'active' : ''}`}
          onClick={() => onNavigate('map')}
        >
          <Map size={20} />
          <span>Peta</span>
        </button>
        <button
          className={`bottom-nav-btn ${currentView === 'review' ? 'active' : ''}`}
          onClick={() => onNavigate('review')}
        >
          <RotateCcw size={20} />
          <span>Ulasan</span>
        </button>
      </nav>
    </>
  );
};
