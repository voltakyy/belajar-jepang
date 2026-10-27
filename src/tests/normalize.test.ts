import { describe, it, expect } from 'vitest';
import { normalizeAnswer, checkAnswer } from '../utils/normalize';

describe('normalizeAnswer', () => {
  it('should trim and lowercase standard romaji input', () => {
    expect(normalizeAnswer('  Watashi wa Anna desu.  ')).toBe('watashi wa anna desu');
  });

  it('should remove punctuation (periods, commas, question marks, fullwidth Japanese punctuation)', () => {
    expect(normalizeAnswer('わたしはあんなです。')).toBe('わたしはあんなです');
    expect(normalizeAnswer('さくらさんですか？')).toBe('さくらさんですか');
    expect(normalizeAnswer('hai, sou desu!')).toBe('hai sou desu');
  });

  it('should collapse fullwidth and multiple whitespaces', () => {
    expect(normalizeAnswer('わたし　は   あんな')).toBe('わたし は あんな');
  });

  it('should handle empty or null string gracefully', () => {
    expect(normalizeAnswer('')).toBe('');
  });
});

describe('checkAnswer', () => {
  it('should match single exact and normalized answers', () => {
    expect(checkAnswer('watashi', 'watashi')).toBe(true);
    expect(checkAnswer('Watashi!', 'watashi')).toBe(true);
    expect(checkAnswer('わたしです。', 'わたしです')).toBe(true);
  });

  it('should match against multiple acceptable answers', () => {
    const accepted = ['watashi', 'わたし', 'saya'];
    expect(checkAnswer('Watashi', accepted)).toBe(true);
    expect(checkAnswer('わたし。', accepted)).toBe(true);
    expect(checkAnswer('saya', accepted)).toBe(true);
    expect(checkAnswer('anata', accepted)).toBe(false);
  });
});
