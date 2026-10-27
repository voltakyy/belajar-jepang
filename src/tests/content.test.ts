import { describe, it, expect } from 'vitest';
import { COURSE_MAP } from '../data/lessons';
import { lesson01 } from '../data/lessons/lesson01';

describe('Curriculum Content & Integrity Validation', () => {
  it('contains exactly 48 lessons in the course map', () => {
    expect(COURSE_MAP.length).toBe(48);
  });

  it('has consistent printed vs PDF page mapping (printedPage = pdfPage - 1)', () => {
    COURSE_MAP.forEach((entry) => {
      expect(entry.printedPage).toBe(entry.pdfPage - 1);
    });
    expect(COURSE_MAP[0].pdfPage).toBe(6);
    expect(COURSE_MAP[0].printedPage).toBe(5);
    expect(COURSE_MAP[47].pdfPage).toBe(53);
    expect(COURSE_MAP[47].printedPage).toBe(52);
  });

  it('uses verified audio URLs (lesson 11 uses _02.mp3, others use _01.mp3)', () => {
    COURSE_MAP.forEach((entry) => {
      expect(entry.audioUrl).toMatch(/^https:\/\/www3\.nhk\.or\.jp\/nhkworld\/lesson\/indonesian\/learn\/mp3\/\d{2}-id-le_0[12]\.mp3$/);
      if (entry.id === 'L11') {
        expect(entry.audioUrl).toContain('11-id-le_02.mp3');
      } else {
        expect(entry.audioUrl).toContain('_01.mp3');
      }
    });
  });

  describe('Lesson 1 Specification Compliance', () => {
    it('has 5-8 vocabulary items', () => {
      expect(lesson01.vocabulary.length).toBeGreaterThanOrEqual(5);
      expect(lesson01.vocabulary.length).toBeLessThanOrEqual(8);
      expect(lesson01.vocabulary.length).toBe(6);
    });

    it('has 4-8 practice exercises', () => {
      expect(lesson01.exercises.length).toBeGreaterThanOrEqual(4);
      expect(lesson01.exercises.length).toBeLessThanOrEqual(8);
      expect(lesson01.exercises.length).toBe(5);
    });

    it('has 8-12 SRS review cards', () => {
      expect(lesson01.reviewCards.length).toBeGreaterThanOrEqual(8);
      expect(lesson01.reviewCards.length).toBeLessThanOrEqual(12);
      expect(lesson01.reviewCards.length).toBe(8);
    });

    it('has valid can-do statements and QA metadata', () => {
      expect(lesson01.canDo.length).toBeGreaterThan(0);
      expect(lesson01.canDo[0]).toContain('Saya bisa memperkenalkan nama diri secara sopan');
      expect(lesson01.qa.status).toBe('machine_checked');
      expect(lesson01.qa.reviewedBy).toBe('TBD');
    });

    it('has Anna-Sakura dialog timestamp 01:22-01:34 with buffer 01:20-01:35', () => {
      expect(lesson01.officialUrls.audioTimestamp?.start).toBe('01:22');
      expect(lesson01.officialUrls.audioTimestamp?.end).toBe('01:34');
      expect(lesson01.officialUrls.audioTimestamp?.label).toContain('01:20');
      expect(lesson01.officialUrls.audioTimestamp?.label).toContain('01:35');
    });

    it('complies with Link-Only policy without hosting copyrighted full dialogs', () => {
      expect(lesson01.officialUrls.audioMp3).toContain('nhkworld');
      expect(lesson01.noticeShortQuotes[0].attribution).toContain('NHK WORLD');
    });
  });
});
