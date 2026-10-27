// Content Validator for Nihongo Web App (Gate 2 Check)
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

// Check course map
const courseMapFile = readFileSync(resolve(rootDir, 'src/data/lessons/courseMap.ts'), 'utf8');

// Check 48 lessons
const lMatches = courseMapFile.match(/"id":\s*"L\d{2}"/g) || [];
assert(lMatches.length === 48, `Found ${lMatches.length} / 48 lessons in COURSE_MAP`);

// Check lesson 11 audio anomaly
assert(
  courseMapFile.includes('11-id-le_02.mp3'),
  'Lesson 11 correctly mapped to 11-id-le_02.mp3'
);

// Check Lesson 01
const lesson01File = readFileSync(resolve(rootDir, 'src/data/lessons/lesson01.ts'), 'utf8');

// Check QA metadata
assert(
  lesson01File.includes("status: 'machine_checked'") && lesson01File.includes("reviewedBy: 'TBD'"),
  'Lesson 01 QA metadata adheres to status: machine_checked and reviewedBy: TBD'
);

// Check timestamp
assert(
  lesson01File.includes('01:22') && lesson01File.includes('01:34') && lesson01File.includes('01:20–01:35'),
  'Lesson 01 dialogue timestamp is 01:22–01:34 with buffer 01:20–01:35'
);

// Check Link-only compliance
assert(
  lesson01File.includes('https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/01-id-le_01.mp3'),
  'Lesson 01 audio links directly to official NHK server'
);

if (errors === 0) {
  console.log('\x1b[32m%s\x1b[0m', '\nAll Content Validation checks PASSED!\n');
  process.exit(0);
} else {
  console.error('\x1b[31m%s\x1b[0m', `\n${errors} Content Validation check(s) FAILED!\n`);
  process.exit(1);
}
