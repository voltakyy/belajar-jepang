import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { LessonView } from './components/LessonView';
import { CourseMapView } from './components/CourseMapView';
import { ReviewView } from './components/ReviewView';
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
  const [currentView, setCurrentView] = useState<'home' | 'lesson' | 'map' | 'review'>('home');
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
    const allCards = getAllReviewCards();
    setDueCards(getDueCards(allCards));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleStartLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <HomeView
            progress={progress}
            dueCards={dueCards}
            errors={errors}
            onStartLesson={handleStartLesson}
            onStartReview={() => setCurrentView('review')}
            onOpenMap={() => setCurrentView('map')}
          />
        )}

        {currentView === 'lesson' && (
          <LessonView
            lesson={currentLesson}
            showFurigana={settings.showFurigana}
            showRomaji={settings.showRomaji}
            onComplete={handleCompleteLesson}
            onBack={() => setCurrentView('home')}
            onGoToReview={() => setCurrentView('review')}
          />
        )}

        {currentView === 'map' && (
          <CourseMapView
            progress={progress}
            onSelectLesson={handleStartLesson}
          />
        )}

        {currentView === 'review' && (
          <ReviewView
            dueCards={dueCards}
            allCards={getAllReviewCards()}
            errors={errors}
            onRefreshData={refreshData}
            onBack={() => setCurrentView('home')}
          />
        )}
      </main>

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
