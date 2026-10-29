// Content validator for Nihongo.
// Checks the static syllabus, every authored lesson, and link-only compliance.
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

console.log('\x1b[36m%s\x1b[0m', '=== Running Nihongo Content Validator ===');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error('\x1b[31m[FAIL]\x1b[0m ' + message);
    errors++;
  } else {
    console.log('\x1b[32m[PASS]\x1b[0m ' + message);
  }
}

function readLesson(n) {
  return readFileSync(
    resolve(rootDir, `src/data/lessons/lesson${String(n).padStart(2, '0')}.ts`),
    'utf8'
  );
}

function countIds(source, lessonId, suffix) {
  const pattern = new RegExp(`id: '${lessonId}-${suffix}\\d+'`, 'g');
  return (source.match(pattern) || []).length;
}

// --- Syllabus ---
const courseMapFile = readFileSync(resolve(rootDir, 'src/data/lessons/courseMap.ts'), 'utf8');

const lMatches = courseMapFile.match(/"id":\s*"L\d{2}"/g) || [];
assert(lMatches.length === 48, `Found ${lMatches.length} / 48 lessons in COURSE_MAP`);

assert(
  courseMapFile.includes('11-id-le_02.mp3'),
  'Lesson 11 correctly mapped to 11-id-le_02.mp3'
);

const pdfMatches =
  courseMapFile.match(
    /"pdfUrl":\s*"https:\/\/www3\.nhk\.or\.jp\/nhkworld\/lesson\/update\/pdf\/le\d{1,2}_id_t\.pdf"/g
  ) || [];
assert(
  pdfMatches.length === 48,
  `All 48 lesson PDF URLs use the verified NHK per-lesson path (found ${pdfMatches.length})`
);

// --- Authored lessons ---
const indexFile = readFileSync(resolve(rootDir, 'src/data/lessons/index.ts'), 'utf8');
const AUTHORED_COUNT = 20;

for (let n = 1; n <= AUTHORED_COUNT; n++) {
  const lessonId = `L${String(n).padStart(2, '0')}`;
  const file = readLesson(n);
  const label = `Lesson ${String(n).padStart(2, '0')}`;

  assert(file.includes(`id: '${lessonId}'`), `${label}: lesson id present`);
  assert(
    indexFile.includes(`lesson${String(n).padStart(2, '0')}`),
    `${label}: imported in ALL_LESSONS`
  );

  const vocab = countIds(file, lessonId, 'V');
  assert(
    vocab >= 5 && vocab <= 8,
    `${label}: vocabulary within 5-8 (found ${vocab})`
  );

  const exercises = countIds(file, lessonId, 'EX');
  assert(
    exercises >= 4 && exercises <= 8,
    `${label}: exercises within 4-8 (found ${exercises})`
  );

  const cards = countIds(file, lessonId, 'RC');
  assert(
    cards >= 8 && cards <= 12,
    `${label}: review cards within 8-12 (found ${cards})`
  );

  const grammarPoints = countIds(file, lessonId, 'GP');
  assert(
    grammarPoints >= 1 && grammarPoints <= 2,
    `${label}: at most 2 active grammar targets (found ${grammarPoints})`
  );

  assert(
    file.includes("status: 'machine_checked'") && file.includes("reviewedBy: 'TBD'"),
    `${label}: QA metadata is machine_checked with reviewedBy TBD`
  );

  assert(
    (file.match(/qaStatus: 'machine_checked'/g) || []).length >= vocab + exercises + cards,
    `${label}: every item carries machine_checked status`
  );

  const audioSuffix = n === 11 ? '_02' : '_01';
  assert(
    file.includes(
      `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/${String(n).padStart(2, '0')}-id-le${audioSuffix}.mp3`
    ),
    `${label}: audio points at the official NHK server`
  );

  assert(
    file.includes(
      `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/${n}.html`
    ),
    `${label}: lesson page points at the official NHK page`
  );

  assert(
    file.includes('noticeShortQuotes') && file.includes('NHK WORLD Radio Japan'),
    `${label}: short quote carries NHK attribution`
  );

  assert(
    file.includes("type: 'speaking'") || file.includes("type: 'writing'"),
    `${label}: output task present`
  );
}

// --- Lesson 01 verified timestamp ---
const lesson01File = readLesson(1);
assert(
  lesson01File.includes('01:22') &&
    lesson01File.includes('01:34') &&
    lesson01File.includes('01:20–01:35'),
  'Lesson 01 dialogue timestamp is 01:22–01:34 with buffer 01:20–01:35'
);

// --- Link-only compliance ---
const appFiles = [
  'src/App.tsx',
  'src/components/HomeView.tsx',
  'src/components/SourceLinks.tsx',
  'src/data/lessons/index.ts',
];
const appSource = appFiles
  .map((p) => readFileSync(resolve(rootDir, p), 'utf8'))
  .join('\n');

assert(
  !/<audio[\s>]/.test(appSource),
  'No bundled audio player: audio always opens on NHK'
);

assert(
  appSource.includes('https://www3.nhk.or.jp/nhkworld/lesson/indonesian/'),
  'Official NHK course URL is present in the app'
);

if (errors === 0) {
  console.log('\x1b[32m%s\x1b[0m', '\nAll Content Validation checks PASSED!\n');
  process.exit(0);
} else {
  console.error('\x1b[31m%s\x1b[0m', `\n${errors} Content Validation check(s) FAILED!\n`);
  process.exit(1);
}
