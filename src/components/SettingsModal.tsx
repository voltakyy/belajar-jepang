import React, { useState } from 'react';
import { X, Download, Upload, Trash2, CheckCircle, ExternalLink } from 'lucide-react';
import { UserSettings, exportUserData, importUserData, resetUserData } from '../utils/srs';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onUpdateSettings: (newSettings: UserSettings) => void;
  onDataChanged: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onDataChanged,
}) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExport = () => {
    const jsonStr = exportUserData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nihongo_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importUserData(content);
      if (success) {
        setImportStatus('Data berhasil dipulihkan!');
        onDataChanged();
        setTimeout(() => setImportStatus(null), 3000);
      } else {
        setImportStatus('Format berkas tidak valid.');
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (window.confirm('Yakin ingin mereset seluruh riwayat progres belajar dan kartu SRS?')) {
      resetUserData();
      onDataChanged();
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Setelan & Data Pribadi</h2>
          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Toggles */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Tampilkan Furigana</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Teks bacaan kana di atas kanji</div>
            </div>
            <input
              type="checkbox"
              checked={settings.showFurigana}
              onChange={(e) => onUpdateSettings({ ...settings, showFurigana: e.target.checked })}
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-vermilion)' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Tampilkan Rōmaji</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tulisan alfabet latin sebagai bantuan</div>
            </div>
            <input
              type="checkbox"
              checked={settings.showRomaji}
              onChange={(e) => onUpdateSettings({ ...settings, showRomaji: e.target.checked })}
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-vermilion)' }}
            />
          </div>
        </div>

        {/* Data Backup */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Cadangan Progres (Export / Import)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Seluruh data progres dan SRS disimpan secara lokal di peramban tanpa akun/login. Ekspor berkas cadangan secara rutin.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={handleExport} style={{ flex: 1, minWidth: '140px' }}>
              <Download size={16} /> Ekspor JSON
            </button>
            <label className="btn-secondary" style={{ flex: 1, minWidth: '140px', cursor: 'pointer' }}>
              <Upload size={16} /> Impor JSON
              <input type="file" accept=".json" onChange={handleImportFile} style={{ display: 'none' }} />
            </label>
          </div>

          {importStatus && (
            <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle size={16} /> {importStatus}
            </div>
          )}
        </div>

        {/* Danger Zone */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
          <button
            onClick={handleReset}
            style={{ color: 'var(--accent-vermilion)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 600 }}
          >
            <Trash2 size={16} /> Reset Semua Progres Belajar
          </button>
        </div>

        {/* Disclaimer Note */}
        <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <strong>Penyangkalan Resmi (Disclaimer):</strong>
          <br />
          Nihongo adalah materi pendamping belajar mandiri independen berbasis silabus kursus *Belajar Bahasa Jepang (2015)*. Aplikasi ini tidak berafiliasi atau disponsori oleh NHK WORLD Radio Japan.
          <br />
          <a
            href="https://www3.nhk.or.jp/nhkworld/lesson/indonesian/download/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.3rem' }}
          >
            Kunjungi Laman Resmi NHK WORLD <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
