import { SrsState, ReviewCard, UserProgress, ErrorLog } from '../types';

const STORAGE_KEYS = {
  PROGRESS: 'nihongo_user_progress_v1',
  SRS_STATES: 'nihongo_srs_states_v1',
  ERRORS: 'nihongo_error_notebook_v1',
  SETTINGS: 'nihongo_user_settings_v1',
};

export type UserSettings = {
  showFurigana: boolean;
  showRomaji: boolean;
  audioSpeed: number;
};

export const DEFAULT_SETTINGS: UserSettings = {
  showFurigana: true,
  showRomaji: false,
  audioSpeed: 1.0,
};

// --- Progress Management ---
export function getUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading progress:', e);
  }
  return {
    completedLessons: [],
    currentLessonId: 'L01',
    masteredCanDos: [],
    lastStudyDate: '',
    streakDays: 0,
  };
}

export function saveUserProgress(progress: UserProgress): void {
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
}

export function markLessonCompleted(lessonId: string, canDos: string[]): UserProgress {
  const p = getUserProgress();
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId);
  }
  canDos.forEach((cd) => {
    if (!p.masteredCanDos.includes(cd)) {
      p.masteredCanDos.push(cd);
    }
  });

  const today = new Date().toISOString().split('T')[0];
  if (p.lastStudyDate !== today) {
    p.streakDays = (p.streakDays || 0) + 1;
    p.lastStudyDate = today;
  }
  saveUserProgress(p);
  return p;
}

// --- SRS State Management ---
// Fixed Interval Schedule: 1 -> 3 -> 7 -> 14 -> 30 days
const INTERVALS = [1, 3, 7, 14, 30];

export function getSrsStates(): Record<string, SrsState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SRS_STATES);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading SRS states:', e);
  }
  return {};
}

export function saveSrsStates(states: Record<string, SrsState>): void {
  localStorage.setItem(STORAGE_KEYS.SRS_STATES, JSON.stringify(states));
}

export function addCardsToSrs(cards: ReviewCard[], lessonId: string): void {
  const states = getSrsStates();
  const today = new Date();
  
  cards.forEach((card) => {
    if (!states[card.id]) {
      const nextDate = new Date(today);
      nextDate.setDate(nextDate.getDate() + 1); // 1st review tomorrow
      
      states[card.id] = {
        cardId: card.id,
        lessonId: lessonId,
        intervalDays: 1,
        nextReviewDate: nextDate.toISOString().split('T')[0],
        repetitionCount: 0,
        history: [],
      };
    }
  });
  saveSrsStates(states);
}

export function answerSrsCard(cardId: string, rating: 'again' | 'good' | 'easy'): SrsState {
  const states = getSrsStates();
  const current = states[cardId] || {
    cardId,
    lessonId: 'L01',
    intervalDays: 1,
    nextReviewDate: new Date().toISOString().split('T')[0],
    repetitionCount: 0,
    history: [],
  };

  const today = new Date();
  let nextInterval = 1;

  if (rating === 'again') {
    nextInterval = 1;
    current.repetitionCount = Math.max(0, current.repetitionCount - 1);
  } else if (rating === 'good') {
    const nextIdx = Math.min(current.repetitionCount + 1, INTERVALS.length - 1);
    nextInterval = INTERVALS[nextIdx];
    current.repetitionCount += 1;
  } else if (rating === 'easy') {
    const nextIdx = Math.min(current.repetitionCount + 2, INTERVALS.length - 1);
    nextInterval = INTERVALS[nextIdx];
    current.repetitionCount += 2;
  }

  const nextDate = new Date(today);
  nextDate.setDate(nextDate.getDate() + nextInterval);

  current.intervalDays = nextInterval;
  current.nextReviewDate = nextDate.toISOString().split('T')[0];
  current.lastReviewedDate = today.toISOString().split('T')[0];
  current.history = current.history || [];
  current.history.push({
    date: current.lastReviewedDate,
    rating,
  });

  states[cardId] = current;
  saveSrsStates(states);
  return current;
}

export function getDueCards(allCards: ReviewCard[]): ReviewCard[] {
  const states = getSrsStates();
  const today = new Date().toISOString().split('T')[0];

  return allCards.filter((card) => {
    const state = states[card.id];
    if (!state) return false; // not introduced yet
    return state.nextReviewDate <= today;
  });
}

// --- Error Notebook ---
export function getErrorNotebook(): ErrorLog[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ERRORS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading error notebook:', e);
  }
  return [];
}

export function recordError(log: Omit<ErrorLog, 'id' | 'timestamp' | 'resolved'>): void {
  const errors = getErrorNotebook();
  const newLog: ErrorLog = {
    ...log,
    id: 'err_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    timestamp: new Date().toISOString(),
    resolved: false,
  };
  errors.unshift(newLog);
  // Keep max 100 errors
  localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(errors.slice(0, 100)));
}

export function resolveError(id: string): void {
  const errors = getErrorNotebook().map((err) =>
    err.id === id ? { ...err, resolved: true } : err
  );
  localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(errors));
}

// --- User Settings ---
export function getUserSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Error loading settings:', e);
  }
  return DEFAULT_SETTINGS;
}

export function saveUserSettings(settings: UserSettings): void {
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

// --- Export & Import ---
export function exportUserData(): string {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    progress: getUserProgress(),
    srsStates: getSrsStates(),
    errors: getErrorNotebook(),
    settings: getUserSettings(),
  };
  return JSON.stringify(data, null, 2);
}

export function importUserData(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== 'object') return false;

    if (parsed.progress) localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(parsed.progress));
    if (parsed.srsStates) localStorage.setItem(STORAGE_KEYS.SRS_STATES, JSON.stringify(parsed.srsStates));
    if (parsed.errors) localStorage.setItem(STORAGE_KEYS.ERRORS, JSON.stringify(parsed.errors));
    if (parsed.settings) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(parsed.settings));
    return true;
  } catch (e) {
    console.error('Import failed:', e);
    return false;
  }
}

export function resetUserData(): void {
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.SRS_STATES);
  localStorage.removeItem(STORAGE_KEYS.ERRORS);
  localStorage.removeItem(STORAGE_KEYS.SETTINGS);
}
