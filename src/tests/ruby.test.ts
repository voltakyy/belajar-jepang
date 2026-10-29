import { describe, it, expect } from 'vitest';
import { ALL_LESSONS } from '../data/lessons';

type AnyRecord = Record<string, unknown>;

function stripRuby(html: string): string {
  return html
    .replace(/<ruby>/g, '')
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<\/ruby>/g, '');
}

function walk(value: unknown, path: string, errors: string[]) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, `${path}[${i}]`, errors));
    return;
  }
  const obj = value as AnyRecord;
  if (typeof obj.jp === 'string') {
    if (typeof obj.rubyHtml === 'string' && stripRuby(obj.rubyHtml) !== obj.jp) {
      errors.push(`${path}: rubyHtml mismatch\n  jp: ${obj.jp}\n  html: ${stripRuby(obj.rubyHtml)}`);
    }
    if (Array.isArray(obj.rubySegments)) {
      const joined = obj.rubySegments
        .map((s) => (s && typeof s === 'object' && typeof (s as AnyRecord).text === 'string' ? (s as AnyRecord).text : ''))
        .join('');
      if (joined !== obj.jp) {
        errors.push(`${path}: rubySegments mismatch\n  jp: ${obj.jp}\n  seg: ${joined}`);
      }
    }
  }
  for (const [k, v] of Object.entries(obj)) {
    if (k === 'rubyHtml' || k === 'rubySegments') continue;
    walk(v, `${path}.${k}`, errors);
  }
}

describe('ruby integrity', () => {
  it('keeps ruby HTML and segments aligned with Japanese text', () => {
    const errors: string[] = [];
    ALL_LESSONS.forEach((lesson) => walk(lesson, lesson.id, errors));
    expect(errors).toEqual([]);
  });
});
