import { describe, it, expect, beforeEach } from 'vitest';
import {
  getUserProgress,
  markLessonCompleted,
  getSrsStates,
  addCardsToSrs,
  answerSrsCard,
  getDueCards,
  recordError,
  getErrorNotebook,
  resolveError,
  exportUserData,
  importUserData,
  resetUserData,
} from '../utils/srs';
import { ReviewCard } from '../types';

describe('SRS and User Data Utilities', () => {
  const memStore: Record<string, string> = {};

  beforeEach(() => {
    Object.keys(memStore).forEach((k) => delete memStore[k]);
    globalThis.localStorage = {
      getItem: (key: string) => memStore[key] || null,
      setItem: (key: string, val: string) => {
        memStore[key] = val;
      },
      removeItem: (key: string) => {
        delete memStore[key];
      },
      clear: () => {
        Object.keys(memStore).forEach((k) => delete memStore[k]);
      },
      key: (i: number) => Object.keys(memStore)[i] || null,
      length: Object.keys(memStore).length,
    } as Storage;
  });

  describe('User Progress', () => {
    it('returns default progress if none stored', () => {
      const p = getUserProgress();
      expect(p.completedLessons).toEqual([]);
      expect(p.masteredCanDos).toEqual([]);
      expect(p.streakDays).toBe(0);
    });

    it('marks lesson completed and tracks streak', () => {
      const p = markLessonCompleted('L01', ['Memperkenalkan diri']);
      expect(p.completedLessons).toContain('L01');
      expect(p.masteredCanDos).toContain('Memperkenalkan diri');
      expect(p.streakDays).toBe(1);
    });
  });

  describe('Spaced Repetition (SRS)', () => {
    const mockCards: ReviewCard[] = [
      {
        id: 'c1',
        lessonId: 'L01',
        type: 'vocab',
        front: 'watashi',
        back: 'saya',
        sourceRef: 'L01-V1',
        qaStatus: 'machine_checked',
      },
      {
        id: 'c2',
        lessonId: 'L01',
        type: 'grammar',
        front: 'Partikel wa',
        back: 'Penanda topik',
        sourceRef: 'L01-GP1',
        qaStatus: 'machine_checked',
      },
    ];

    it('adds cards with initial 1-day interval', () => {
      addCardsToSrs(mockCards, 'L01');
      const states = getSrsStates();
      expect(states['c1']).toBeDefined();
      expect(states['c1'].intervalDays).toBe(1);
      expect(states['c1'].repetitionCount).toBe(0);
    });

    it('updates intervals on "good" response (fixed schedule: 1 -> 3 -> 7 -> 14 -> 30)', () => {
      addCardsToSrs(mockCards, 'L01');

      // 1st good review -> next repetition = 1, interval = 3
      const s1 = answerSrsCard('c1', 'good');
      expect(s1.repetitionCount).toBe(1);
      expect(s1.intervalDays).toBe(3);

      // 2nd good review -> repetition = 2, interval = 7
      const s2 = answerSrsCard('c1', 'good');
      expect(s2.repetitionCount).toBe(2);
      expect(s2.intervalDays).toBe(7);
    });

    it('resets interval to 1 on "again" response', () => {
      addCardsToSrs(mockCards, 'L01');
      answerSrsCard('c1', 'good'); // rep = 1, int = 3
      const sAgain = answerSrsCard('c1', 'again');
      expect(sAgain.intervalDays).toBe(1);
      expect(sAgain.repetitionCount).toBe(0);
    });

    it('identifies due cards correctly based on review date', () => {
      addCardsToSrs(mockCards, 'L01');
      const states = getSrsStates();
      // Set c1 next review to yesterday (due)
      states['c1'].nextReviewDate = '2020-01-01';
      // Set c2 next review to future
      states['c2'].nextReviewDate = '2099-01-01';
      localStorage.setItem('nihongo_srs_states_v1', JSON.stringify(states));

      const due = getDueCards(mockCards);
      expect(due.map((c) => c.id)).toContain('c1');
      expect(due.map((c) => c.id)).not.toContain('c2');
    });
  });

  describe('Error Notebook', () => {
    it('records and resolves mistakes', () => {
      recordError({
        lessonId: 'L01',
        exerciseId: 'L01-EX1',
        prompt: 'Terjemahkan "watashi"',
        userAnswer: 'kamu',
        correctAnswer: 'saya',
        explanation: 'Watashi artinya saya',
      });

      const errors = getErrorNotebook();
      expect(errors.length).toBe(1);
      expect(errors[0].resolved).toBe(false);

      resolveError(errors[0].id);
      const updated = getErrorNotebook();
      expect(updated[0].resolved).toBe(true);
    });
  });

  describe('Export & Import', () => {
    it('exports and re-imports user progress successfully', () => {
      markLessonCompleted('L01', ['Can-do 1']);
      const backup = exportUserData();
      expect(backup).toContain('L01');

      resetUserData();
      expect(getUserProgress().completedLessons).toEqual([]);

      const success = importUserData(backup);
      expect(success).toBe(true);
      expect(getUserProgress().completedLessons).toContain('L01');
    });
  });
});
