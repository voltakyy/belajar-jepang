import React, { useState, useEffect } from 'react';
import { Navbar, type View } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { LessonView } from './components/LessonView';
import { CourseMapView } from './components/CourseMapView';
import { ReviewView } from './components/ReviewView';
import { KanaView } from './components/KanaView';
import { SettingsModal } from './components/SettingsModal';
import {
  getUserProgress,
  getUserSettings,
  saveUserSettings,
  getDueCards,
  getErrorNotebook,
  markLessonCompleted,
  addCardsToSrs,
} from './utils/srs';
import { ALL_LESSONS, getLessonById, getAllReviewCards } from './data/lessons';
import { ReviewCard } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeLessonId, setActiveLessonId] = useState<string>('L01');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [progress, setProgress] = useState(getUserProgress());
  const [settings, setSettings] = useState(getUserSettings());
  const [errors, setErrors] = useState(getErrorNotebook());
  const [dueCards, setDueCards] = useState<ReviewCard[]>([]);

  const refreshData = () => {
    setProgress(getUserProgress());
    setSettings(getUserSettings());
    setErrors(getErrorNotebook());
    setDueCards(getDueCards(getAllReviewCards()));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    navigate('lesson');
  };

  const handleCompleteLesson = (canDos: string[], newCards: ReviewCard[]) => {
    markLessonCompleted(activeLessonId, canDos);
    addCardsToSrs(newCards, activeLessonId);
    refreshData();
  };

  const currentLesson = getLessonById(activeLessonId) || ALL_LESSONS[0];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        currentView={currentView}
        onNavigate={navigate}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <HomeView
            progress={progress}
            dueCards={dueCards}
            errors={errors}
            onStartLesson={handleStartLesson}
            onStartReview={() => navigate('review')}
            onOpenMap={() => navigate('map')}
          />
        )}

        {currentView === 'lesson' && (
          <LessonView
            lesson={currentLesson}
            showFurigana={settings.showFurigana}
            showRomaji={settings.showRomaji}
            onComplete={handleCompleteLesson}
            onBack={() => navigate('home')}
            onGoToReview={() => navigate('review')}
          />
        )}

        {currentView === 'map' && (
          <CourseMapView
            progress={progress}
            onSelectLesson={handleStartLesson}
          />
        )}

        {currentView === 'kana' && <KanaView />}

        {currentView === 'review' && (
          <ReviewView
            dueCards={dueCards}
            allCards={getAllReviewCards()}
            errors={errors}
            onRefreshData={refreshData}
            onBack={() => navigate('home')}
          />
        )}
      </main>

      <footer className="site-foot">
        <div className="container site-foot-inner">
          <p className="site-foot-lede">
            <strong>Penyangkalan.</strong> Nihongo adalah aplikasi pendamping
            belajar independen untuk pembelajar bahasa Jepang di Indonesia.
            Aplikasi ini tidak berafiliasi, disponsori, atau didukung oleh NHK
            WORLD. Hak cipta materi asli <em>Belajar Bahasa Jepang</em> (e-book
            PDF, rekaman MP3, naskah drama, dan ilustrasi komik) sepenuhnya
            milik NHK WORLD RADIO JAPAN.
          </p>
          <p className="site-foot-links">
            <a
              href="https://www3.nhk.or.jp/nhkworld/lesson/id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Situs kursus NHK
            </a>
            <span aria-hidden="true">/</span>
            <span>Kode berlisensi MIT</span>
          </p>
        </div>
      </footer>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={(newSet) => {
          setSettings(newSet);
          saveUserSettings(newSet);
        }}
        onDataChanged={refreshData}
      />
    </div>
  );
};
