import React from 'react';
import { Settings, ExternalLink } from 'lucide-react';

export type View = 'home' | 'lesson' | 'map' | 'review' | 'kana';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onOpenSettings: () => void;
}

const LINKS: { id: View; label: string }[] = [
  { id: 'home', label: 'Belajar' },
  { id: 'map', label: 'Peta' },
  { id: 'kana', label: 'Kana' },
  { id: 'review', label: 'Ulasan' },
];

const NHK_HOME = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/';

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSettings,
}) => (
  <header className="site-nav">
    <div className="site-nav-inner">
      <button className="wordmark" onClick={() => onNavigate('home')}>
        <span className="wordmark-name">Nihongo</span>
        <span className="wordmark-jp">日本語</span>
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <nav className="nav-links" aria-label="Navigasi utama">
          {LINKS.map((link) => {
            const active =
              link.id === currentView ||
              (link.id === 'home' && currentView === 'lesson');
            return (
              <button
                key={link.id}
                className={`nav-link ${active ? 'active' : ''}`}
                onClick={() => onNavigate(link.id)}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
          <a
            className="nav-link"
            href={NHK_HOME}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--amber)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            NHK
            <ExternalLink size={10} />
          </a>
        </nav>

        <button
          onClick={onOpenSettings}
          className="nav-icon"
          aria-label="Setelan tampilan dan data"
          title="Setelan"
        >
          <Settings size={17} />
        </button>
      </div>
    </div>
  </header>
);
