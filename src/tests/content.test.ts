import { describe, it, expect } from 'vitest';
import { COURSE_MAP, ALL_LESSONS } from '../data/lessons';
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
});

describe.each(ALL_LESSONS.map((lesson) => [lesson.id, lesson] as const))(
  'Lesson specification: %s',
  (lessonId, lesson) => {
    it('has 5-8 vocabulary items', () => {
      expect(lesson.vocabulary.length).toBeGreaterThanOrEqual(5);
      expect(lesson.vocabulary.length).toBeLessThanOrEqual(8);
    });

    it('has 4-8 practice exercises', () => {
      expect(lesson.exercises.length).toBeGreaterThanOrEqual(4);
      expect(lesson.exercises.length).toBeLessThanOrEqual(8);
    });

    it('has 8-12 SRS review cards', () => {
      expect(lesson.reviewCards.length).toBeGreaterThanOrEqual(8);
      expect(lesson.reviewCards.length).toBeLessThanOrEqual(12);
    });

    it('has at most 2 active grammar targets', () => {
      const active = lesson.grammarPoints.filter(
        (gp) => gp.role === 'active_target'
      );
      expect(active.length).toBeGreaterThan(0);
      expect(active.length).toBeLessThanOrEqual(2);
    });

    it('has an output task with a self-check list', () => {
      expect(lesson.outputTask.selfCheckList.length).toBeGreaterThanOrEqual(3);
      expect(lesson.outputTask.modelAnswer.jp.length).toBeGreaterThan(0);
    });

    it('uses machine-checked content pending human review', () => {
      expect(lesson.qa.status).toBe('machine_checked');
      expect(lesson.qa.reviewedBy).toBe('TBD');
      lesson.vocabulary.forEach((v) => expect(v.qaStatus).toBe('machine_checked'));
      lesson.exercises.forEach((e) => expect(e.qaStatus).toBe('machine_checked'));
      lesson.reviewCards.forEach((c) => expect(c.qaStatus).toBe('machine_checked'));
    });

    it('links audio and script only to the official NHK server', () => {
      expect(lesson.officialUrls.audioMp3).toMatch(
        /^https:\/\/www3\.nhk\.or\.jp\/nhkworld\/lesson\/indonesian\/learn\/mp3\/\d{2}-id-le_0[12]\.mp3$/
      );
      expect(lesson.officialUrls.lessonPage).toMatch(
        /^https:\/\/www3\.nhk\.or\.jp\/nhkworld\/lesson\/indonesian\/learn\/list\/\d+\.html$/
      );
    });

    it('attributes every short quote to NHK', () => {
      expect(lesson.noticeShortQuotes.length).toBeGreaterThan(0);
      lesson.noticeShortQuotes.forEach((q) => {
        expect(q.attribution).toContain('NHK WORLD');
      });
    });

    it('has a situation summary in Indonesian', () => {
      expect(lesson.situationSummary.length).toBeGreaterThan(40);
    });

    it('matches its course-map entry', () => {
      const entry = COURSE_MAP.find((item) => item.id === lessonId);
      expect(entry).toBeDefined();
      expect(entry?.order).toBe(lesson.order);
      expect(entry?.audioUrl).toBe(lesson.officialUrls.audioMp3);
      expect(entry?.webUrl).toBe(lesson.officialUrls.lessonPage);
      expect(entry?.pdfPage).toBe(lesson.pdfPage);
    });
  }
);

describe('Lesson 1 Specification Compliance', () => {
  it('has 6 vocabulary items, 5 exercises and 8 review cards', () => {
    expect(lesson01.vocabulary.length).toBe(6);
    expect(lesson01.exercises.length).toBe(5);
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
});
