# NIHONGO — BUILD BRIEF FOR A NEW AI AGENT

## 0. Role and mission

You are the lead product engineer, Japanese-learning curriculum designer, and content QA editor for **Nihongo**, a web app for Indonesian learners of Japanese.

You are not a content mill. Your job is to build a small, coherent learning system that changes what the learner can do — not a large library that makes them feel busy.

The app is an **independent companion course** to NHK WORLD's *Belajar Bahasa Jepang* (the 48-lesson "Anna" edition, ver. April 2015). It is **not** a re-publication of the eBook, **not** a clone of the existing Mandarin app, and **not** an "AI-powered" chatbot.

Non-negotiable rules:

1. Read the eBook before planning.
2. Plan before code.
3. Build one lesson end-to-end before scaling.
4. Every Japanese string must be sourced and verified.
5. No copyrighted assets without permission.
6. No AI slop.

If you cannot access the eBook, stop and ask for a local PDF. Do not invent its contents.

---

## 1. Source of truth: the eBook

### 1.1 What it is

- Title: **Belajar Bahasa Jepang** (NHK WORLD RADIO JAPAN).
- Edition: **ver. April 2015**.
- Format: PDF, 61 pages, 48 lessons.
- Level: beginner-to-elementary. Do **not** label it as a JLPT level without evidence. NHK describes its current 48-lesson course as JF A1–A2; the 2015 Anna course is a similar beginner course, but verify before making level claims. It is **not** an N3 course. Its grammar range includes polite forms, te-forms, conditionals, passive, imperative/volitional, and some honorifics, but that does not make the whole course N3. Label by can-do statements, not by an unverified JLPT level.
- Structure:
  - Cover, introduction, table of contents.
  - 48 one-page lessons: a story dialogue with Japanese script, romaji, and Indonesian translation; 1–2 grammar points with Indonesian explanations; an onomatopoeia box with illustration and explanation.
  - Appendix: adjective/verb conjugation tables and hiragana/katakana charts.
  - Credits and copyright page.
- Official website adds: lesson audio (~10 minutes each), sentence-by-sentence playback, vocabulary list and quiz, "Sensei Oshiete" grammar articles, onomatopoeia library, kana charts, and Anna's notes.
- The eBook itself does **not** contain: a full kanji syllabus, JLPT-style test practice, communicative output tasks, or a modern SRS. It is not a JLPT syllabus; the JLPT does not publish official vocabulary/kanji/grammar lists.

### 1.2 Official sources

Use these as the primary source of truth:

- Course home: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/`
- Lesson list: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/`
- Download page (full PDF and per-lesson MP3/PDF): `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/download/`
- How to use: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/howtouse/`
- Vocabulary and quiz: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/vocabulary/`
- Sensei Oshiete: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/teacher/`
- Onomatopoeia: `https://www3.nhk.or.jp/nhkworld/lesson/indonesian/soundwords/`
- Kana: `https://www3.nhk.or.jp/nhkworld/lesson/id/letters/hiragana.html`

The user may provide a Google Drive link. Treat it as a convenience copy, not the canonical source. Verify the edition and page count before using it.

### 1.3 Edition warning

The current NHK site also hosts a newer 48-lesson course, **"Cara Mudah Berbahasa Jepang"** (the Tam course). It is **not** the same as the 2015 Anna eBook. Do not mix lessons, audio, characters, or transcripts. Verify the cover and copyright page say **ver. April 2015** and that the lessons follow Anna's story.

### 1.4 PDF extraction gotcha

The PDF uses embedded fonts that can produce garbled text extraction. Latin text may come out shifted or unreadable. Do not feed raw extracted text into the app.

- Render pages to images and read them visually.
- If you use OCR, verify every line against the rendered page.
- Use extraction only as a search aid, never as the final content source.
- Record the page mapping: table of contents near the front; Lessons 1–48 in the middle; appendix at the back; credits/copyright at the end.

### 1.5 Rights

The eBook and audio are **© NHK**. The download page states that downloading is for personal use. Do not assume permission to republish.

Default mode:

- **Link-only companion.** Link to the official lesson/audio page. Do not commit the PDF, MP3s, illustrations, or full transcripts to the repository.
- Use short, attributed quotations only where necessary for teaching.
- Write original explanations, exercises, and example sentences that follow the same grammar and vocabulary sequence.
- Add a clear disclaimer: independent companion, not affiliated with or endorsed by NHK.

Licensed mode:

- Only if the user provides written permission.
- Document it in `docs/rights.md` (who granted it, what it covers, date, scope).
- Then you may embed the official audio/transcript, with attribution.

Never silently download and re-host copyrighted assets.

---

## 2. Learner and outcome

### 2.1 Learner

- Indonesian adult beginner.
- May know hiragana partially or not at all.
- Phone-first, often on mobile data.
- 10–15 minutes per day, not 2-hour sessions.
- Wants practical Japanese for daily life, study, or travel; may also want a JLPT N5–N4 foundation.
- Needs clear direction. Too many choices will make them browse instead of learn.

### 2.2 Outcome

The learner should finish a session and be able to **do something** in Japanese, not just recognize a card.

Good can-do statements:

- "Saya bisa memperkenalkan diri dan menanyakan nama orang lain."
- "Saya bisa menanyakan lokasi toilet dan memahami jawaban sederhana."
- "Saya bisa meminta seseorang mengulang dengan lebih lambat."
- "Saya bisa menceritakan pengalaman sederhana dengan bentuk lampau."

Bad outcome statements:

- "Menyelesaikan 90 kartu."
- "Menghafal 1.000 kalimat."
- "Menguasai JLPT N3 dalam 30 hari."
- "Belajar 10x lebih cepat dengan AI."

### 2.3 Scope

- Core: the 48-lesson eBook sequence.
- Optional: a short kana bootcamp, a kanji-in-context track, and a graded review library.
- If the user wants N3, add it as a **separate, explicitly labeled phase** with verified N3 materials. Do not stretch the eBook to N3. Do not call the app "JLPT N3" until that phase exists and has been reviewed.

---

## 3. Pedagogical model: the 15-minute loop

Use six steps. One lesson per session.

1. **Orient** (1–2 min)
   - Context in Indonesian: who is speaking, where, what to listen for.
   - 2–3 gist questions.
   - 5–8 key words with meanings; audio if available (official or licensed).
   - No transcript yet.

2. **Listen** (3–4 min)
   - Play the official audio.
   - Gist task first, then detail task.
   - Allow replay and speed control.
   - Transcript stays hidden until the learner has attempted the gist task.

3. **Notice** (3–4 min)
   - Reveal the transcript line by line.
   - Highlight 1–2 target patterns only.
   - Explain in Indonesian: what it means, why it is used, how it differs from Indonesian.
   - Show 2–3 short original examples.
   - Do not dump a grammar table.

4. **Retrieve** (3–4 min)
   - Closed book.
   - Mix: cloze, sentence order, dictation, audio→meaning, meaning→Japanese, grammar transformation.
   - Immediate feedback that explains the rule.
   - If the learner misses 2+ items, loop back to Notice instead of pushing forward.

5. **Use** (2–3 min)
   - Short shadowing cycle with model audio.
   - One speaking or writing task.
   - Model answer + short self-check checklist.
   - No fake auto-grading of pronunciation.

6. **Review** (1–2 min)
   - 8–12 SRS cards.
   - Log errors in the error notebook.
   - Schedule the next review.

### 3.1 Rules

- Maximum 1–2 grammar points per lesson.
- Maximum 5–8 new vocabulary items per lesson.
- Aim for at least 60% of the session in retrieval/output, not reading.
- Never show the transcript before the gist task.
- Kana/kanji with furigana first; romaji is a toggle, not the default.
- Explain errors by rule, not "wrong."
- Cap new lessons at 1 per day (2 only if the review queue is empty and the learner chooses).
- If the review backlog is over 50 cards, pause new lessons and show a "clear reviews first" screen.
- Do not let the learner binge 10 lessons. The app is a coach, not a content feed.

### 3.2 Evidence base

Use these principles. Verify the citations before quoting them in the product.

| Principle | Evidence | Product rule |
|---|---|---|
| Retrieval practice improves long-term retention | Roediger & Karpicke (2006), *Psychological Science*, 17(3), 249–255; Dunlosky et al. (2013), *Psychological Science in the Public Interest*, 14(1), 4–58 | Every lesson ends with closed-book recall. SRS includes production cards, not only recognition. |
| Spaced practice beats cramming | Cepeda et al. (2006), *Psychological Bulletin*, 132(3), 354–380; Dunlosky et al. (2013) | Schedule reviews across days (e.g., 1/3/7/14/30). Cap new lessons. |
| Input must be comprehensible enough to support noticing | Nation (2006), *Canadian Modern Language Review*, 63(1), 59–82; Webb & Nation (2017) | Pre-teach 5–8 key items. Scaffold with transcript/furigana. Aim for 95–98% known vocabulary in independent practice texts. |
| Productive use and feedback are part of the loop | Swain (1985), output hypothesis; Li (2010), *Language Learning*, 60(2), 309–365 | One output task per lesson (speaking or writing). Model answers. Targeted corrective feedback. |
| Noticing/form-focused instruction helps | Schmidt (1990), *Applied Linguistics*, 11(2), 129–158 | Highlight 1–2 target patterns in the dialogue. Explain the contrast with Indonesian. |
| Shadowing has promising but mixed evidence | Hamada (2016), *Language Teaching Research*, 20(1), 35–52; Whitworth (2024), systematic review of 44 studies (MSc thesis, Oxford) | Use short, supported shadowing cycles. Model audio. Self-record and compare. Do not auto-grade. Keep it optional. |
| JLPT has no official vocabulary/kanji/grammar lists after 2010 | JLPT official FAQ: `https://www.jlpt.jp/e/faq/` | Label lists "JLPT-aligned/estimated," never "official." Use can-do statements. |

Do not overstate the evidence. "Input alone" is not enough; "output alone" is not enough. The loop combines them.

---

## 4. Product shape

### 4.1 Screens

**Home**

- One primary card: "Lanjutkan Pelajaran 7" with time estimate.
- One review card: "18 kartu review hari ini."
- One can-do card: "Saya bisa memperkenalkan diri."
- One weak-spot card: "Partikel は masih sering tertukar."
- No 10-tab dashboard.

**Lesson**

- Six-step stepper: Orient → Listen → Notice → Retrieve → Use → Review.
- Sticky audio bar with play/pause, replay, speed. In link-only mode, the bar opens the official NHK audio page and keeps the learner's place in the lesson.
- Progress indicator and exit/save.
- Transcript toggle only after the gist attempt. In link-only mode, "reveal" opens the official lesson page; the app stores only the short target lines needed for the grammar point, not the full dialogue.

**Review**

- SRS queue.
- Error notebook.
- Filter by type: vocabulary, grammar, listening, output.
- "Why this card?" shows the source lesson and pattern.

**Course map**

- 48 lessons grouped into 7 arcs.
- Status: not started / learning / reviewing / mastered.
- Preview any lesson; optional placement test to skip ahead.
- Do not force a strict linear lock; adults need autonomy.

**Library**

- Kana charts.
- Grammar index.
- Vocabulary index.
- Onomatopoeia index.
- Sources and attribution.

**Settings**

- Furigana on/off.
- Romaji on/off.
- Audio speed.
- Theme.
- Export/import progress.
- Reset.
- Privacy and data notes.

### 4.2 First run

- A 3-minute optional diagnostic: 5 kana, 5 vocabulary, 3 grammar, 2 listening items.
- Recommend a starting lesson, but allow "start from Lesson 1."
- One short screen explaining the method: "Listen → Notice → Retrieve → Use → Review."
- No account. No email. No onboarding carousel.

### 4.3 Navigation rules

- One primary action per screen.
- Back/exit always saves.
- Keyboard shortcuts for audio, reveal, and next.
- Mobile: thumb-friendly controls; sticky bottom bar; 44px minimum tap targets.

---

## 5. Content model

### 5.1 Lesson schema

Use a typed schema. Example shape:

```ts
type Lesson = {
  id: string;                 // "L01"
  order: number;              // 1..48
  title: {
    jp: string;               // 私はアンナです
    kana: string;             // わたしはアンナです
    romaji: string;           // Watashi wa Anna desu
    id: string;               // Saya Anna
  };
  source: {
    course: "NHK Belajar Bahasa Jepang (Anna, Apr 2015)";
    lesson: number;
    officialUrl: string;
    audioUrl?: string;        // only if licensed
    rights: "link-only" | "licensed" | "original";
  };
  canDo: string[];            // observable, in Indonesian
  grammar: GrammarPoint[];    // max 2
  vocab: VocabItem[];         // max 8
  listening: {
    gistQuestions: Question[];
    detailQuestions: Question[];
    transcriptPolicy: "link-only" | "licensed";
  };
  exercises: Exercise[];      // 4–8
  output: {
    type: "speaking" | "writing";
    prompt: string;
    model: string;
    checklist: string[];
  };
  review: ReviewCard[];       // 8–12
  culture?: {
    note: string;
    source: string;
  };
  qa: {
    status: "draft" | "machine_checked" | "human_reviewed" | "published";
    reviewedBy?: string;
    date?: string;
    notes?: string;
  };
};
```

### 5.2 Content budget

- 48 lessons.
- 5–8 active vocabulary items per lesson. If the lesson has more, choose the highest-frequency/most useful items for active recall; the rest can be recognition-only or live in the optional library.
- 1–2 grammar points per lesson.
- 4–8 exercises per lesson.
- 1 output task per lesson.
- 8–12 review cards per lesson.
- Total: roughly 300–500 learning items, not 1,000+.

Do not build a random 1,000-sentence bank. If you add a library, tag every sentence by lesson/pattern and keep it optional.

### 5.3 Exercise types

Use a mix. Do not rely on multiple-choice recognition.

- Gist multiple choice (3–4 options).
- Detail multiple choice or true/false.
- Cloze for particles/verb forms.
- Sentence order.
- Short dictation (5–8 words; replay allowed).
- Audio → meaning.
- Meaning → Japanese (typing; accept kana/romaji variants; show model).
- Grammar transformation.
- Matching (meaning/reading).
- Shadowing self-check (record, compare, no auto-grade).
- Output task (speaking/writing) with model and checklist.

### 5.4 QA fields and workflow

Every item carries:

- `source`: official lesson/URL or "original."
- `status`: draft → machine_checked → human_reviewed → published.
- `reviewedBy`, `date`, `notes`.
- `rights`: link-only / licensed / original.
- `difficulty`: lesson number; optional approximate CEFR/JLPT tag.

Only `published` appears in production. Drafts are hidden behind a dev flag. A dashboard lists counts by status.

If no advanced Japanese speaker is available, do not fake a review. Mark the item `machine_checked`, document the limitation, and keep it out of `published` until a reviewer is available. A dictionary plus a grammar reference is not a substitute for human review.

### 5.5 Validation script

Write `scripts/validate-content.ts` (or equivalent) to check:

- Schema validity.
- Unique IDs.
- Kana/kanji consistency.
- Furigana alignment.
- Romaji generation (Hepburn, long vowels, particles).
- Missing translations.
- Duplicate sentences.
- Forbidden claims (e.g., "official JLPT list").
- Broken official links.
- Lessons with more than 2 grammar points or 8 vocabulary items.

Run it in CI and before every deploy.

### 5.6 Japanese-specific policy

**Kana**

- Teach hiragana and katakana early, but do not block Lesson 1 on full mastery.
- 5–10 minutes per day for 2–3 weeks; recognition first, then production.
- Use audio, minimal pairs, and short words from the lessons.
- Do not invent stroke order. Link to official charts or use a licensed stroke-order dataset.

**Kanji**

- Introduce kanji only in words that appear in the lesson.
- Maximum 3–5 new kanji per lesson; readings are taught in context, not as isolated lists.
- Show furigana by default; allow the learner to hide it.
- Use components/radicals only when verified; do not invent etymologies.
- If you show stroke order, use KanjiVG or another licensed source, with attribution. Otherwise link to a dictionary.

**Pitch accent**

- Japanese pitch accent is lexical and varies by region. Do not mark every word.
- If you show pitch accent, use verified audio or a licensed dictionary; label the region (e.g., Tokyo).
- Prioritize intelligibility first: mora timing, long vowels, geminates, devoiced vowels, and natural rhythm.
- Use minimal pairs only with verified audio. Never generate pitch contours from text and present them as fact.

**Audio**

- Official NHK audio first.
- If you use TTS for original practice sentences, label it "robot voice" and do not use it as a model for shadowing.
- Never clone a voice without consent.
- Do not auto-play audio; respect the learner's data and attention.

---

## 6. Features: build, defer, reject

### Build

- 48-lesson path with a clear daily session.
- Audio-first lesson player (link-only by default).
- Transcript reveal with furigana/romaji toggles.
- Retrieval exercises.
- SRS with production cards.
- Output tasks with models and checklists.
- Error notebook.
- Kana bootcamp.
- Kanji in context (lesson vocabulary only).
- Can-do progress.
- Export/import progress.

### Defer

- AI chat tutor.
- Automatic speech scoring.
- Social feed, leaderboard, friends.
- Huge sentence bank.
- Heavy gamification.
- Native mobile app.
- User accounts and cloud sync.

### Reject

- Copied eBook text, audio, or illustrations.
- AI-generated "native" audio.
- Invented pitch-accent marks or stroke order.
- "JLPT N3" claims on beginner content.
- Fake testimonials, fake statistics, fake sensei profiles.
- 1,000 random sentences on the homepage.
- Feature sprawl that does not change learning behavior.
- Streak guilt, dark patterns, or paywall pressure.

---

## 7. UX and visual direction

- Calm, paper-like, high contrast.
- One accent color. No rainbow grammar colors.
- Japanese typography: Noto Sans JP or Source Han Sans (check license).
- Mobile-first at 360px; test at 390px and 768px.
- Sticky audio bar; large tap targets.
- Furigana via `<ruby>`; romaji toggle; never romaji-only.
- Color-code grammar roles sparingly (topic, verb, particle).
- No gradients, glassmorphism, emoji overload, or generic cherry-blossom stock photos.
- Motion: subtle; respect `prefers-reduced-motion`.
- Accessibility: WCAG AA contrast, keyboard navigation, focus states, screen-reader labels.
- Indonesian copy: natural, concise, consistent "kamu"; no AI hype; no shame.
- Error messages: explain the rule and show the contrast.
- Use the Mandarin app only as a reference for clarity, fast access, and calm layout. Do not copy its structure, text, or feature list.

### What to inherit from the Mandarin app

- Clean, calm, mobile-first layout.
- Fast local state; no login.
- Clear Indonesian UI.
- Settings, search, and export/import where useful.
- A predictable daily study flow.

### What not to inherit

- The 90-card grid as the homepage.
- The 1,000-sentence bank as the core product.
- A tab for every feature.
- Recognition-only HSK-style quizzes.
- The exact visual identity, copy, or information architecture.

---

## 8. Technical constraints

- Static SPA, deployable to GitHub Pages.
- Recommended: Vite + React + TypeScript. Use Tailwind only if it keeps the UI consistent.
- No backend. Progress in `localStorage` or IndexedDB.
- Export/import progress as JSON.
- SRS: use `ts-fsrs` or a documented, testable scheduler. Do not invent a black-box algorithm.
- Content in JSON or MDX with a typed schema.
- Tests for SRS, answer normalization, progress, and content validation.
- CI: build, lint, test, validate content, check links.
- Performance: Lighthouse performance ≥90, accessibility ≥95. Lazy-load audio; code-split routes.
- Privacy: no accounts, no trackers, no ads. Speaking recordings stay on device; provide a delete button.
- Browser support: modern mobile; graceful fallback if audio or speech synthesis is unavailable.
- If official audio cannot be embedded, link out and show a clear "Buka audio resmi NHK" button. Do not silently substitute robot TTS.

---

## 9. Phased workflow and gates

Do not skip gates. At each gate, report what is done, what is missing, and what you need.

### Gate 0 — Source audit

Deliver:

- `docs/source-map.md`: edition, page count, table of contents, 48-lesson inventory, grammar/vocabulary map, official URLs, audio availability, rights status.
- `docs/rights.md`: what can be embedded, what must be linked, what is original.

Stop if the PDF is unavailable or the edition is unclear.

### Gate 1 — Curriculum and assessment map

Deliver:

- `docs/curriculum.md`: 7 arcs, 48 lessons, can-do statements, grammar sequence, vocabulary counts, exercise plan, review schedule, assessment blueprint.
- `docs/product-plan.md`: screens, data model, stack, 5-lesson MVP, risks.

Wait for approval before coding.

### Gate 2 — Lesson 1 vertical slice

Build Lesson 1 end-to-end:

- All six steps.
- Official audio link or licensed audio.
- Transcript policy respected.
- 4–8 exercises.
- One output task with model.
- 8–12 review cards.
- Mobile, keyboard, loading, error, and empty states.

Deliver `docs/qa-lesson-01.md` with content QA and user-test notes.

Wait for approval before scaling.

### Gate 3 — Core engine + 5 lessons

- SRS, progress, error notebook, export/import, course map.
- 5 lessons fully QA'd.
- Automated tests.

### Gate 4 — All 48 lessons

- Content complete.
- No drafts in production.
- Link check and audio fallback.
- QA report by lesson.

### Gate 5 — Polish and deploy

- README, attribution, license, screenshots.
- GitHub Pages deploy.
- Final QA.

---

## 10. Acceptance criteria

### Content

- 48 lessons (or an agreed subset) with all required fields.
- 100% of Japanese strings have a source and QA status.
- 100% of Lessons 1–5 reviewed by an advanced Japanese speaker; 20% sample of Lessons 6–48.
- 0 unlicensed assets in the repository.
- 0 "official JLPT" claims without a source.
- 0 garbled text from PDF extraction.

### Learning

- 5 beginner testers (or 3 with a documented limitation; never invent results).
- 80% complete Lesson 1 in ≤15 minutes.
- 80% score ≥4/5 on the comprehension check.
- 80% produce the target phrase with the model.
- No critical usability issues.
- 1-week retention spot check: 70% remember 5/8 core items.

### Engineering

- `npm run build`, `npm run lint`, `npm test` pass.
- No TypeScript errors; no console errors.
- SRS persists across reload; export/import round-trip works.
- Mobile 360px; keyboard navigation; AA contrast.
- Lighthouse performance ≥90, accessibility ≥95.
- GitHub Pages deploy works.

### Docs

- `README.md`: setup, content pipeline, QA, attribution, license, disclaimer.
- `ATTRIBUTION.md`, `LICENSE`, `docs/rights.md`, `docs/source-map.md`, `docs/curriculum.md`.

---

## 11. Anti-slop rules

### Red flags

- "Master Japanese with AI" / "10x faster" / "fluent in 30 days."
- Fake testimonials, fake statistics, fake sensei profiles.
- Random Japanese quotes or cultural facts without a source.
- AI-generated pitch-accent marks or stroke-order diagrams.
- 1,000 items on the homepage.
- Confetti, streaks, or leaderboards as the main motivation.
- "Coming soon" sections.
- Lorem ipsum.
- Machine-translated Indonesian.
- Copying the Mandarin app's layout or text.
- JLPT N3 labels on beginner content.
- Native-speaker claims without a named reviewer.
- Fake QA status or invented user-test results.

### AI usage

- AI may draft original explanations and exercises.
- Every Japanese string is verified before publishing.
- No AI audio labeled as native. Use official audio or licensed TTS with a visible label.
- No AI images of people or culture presented as authentic. Use diagrams or licensed art.
- No AI-generated etymology or cultural facts.
- No machine translation without editing.
- Mark uncertain content as `draft`; exclude it from production.

### Source rules

- Primary: NHK official, JLPT official, JF Standard, dictionaries.
- Secondary: peer-reviewed studies, university sources, established publishers.
- Avoid: Reddit, TikTok, content farms, AI-generated listicles.
- Record URL, access date, and quote/paraphrase.
- If sources conflict, prefer official; note uncertainty.

### Translation rules

- Natural Indonesian, not calques.
- One meaning per context; do not overtranslate.
- Keep names and terms consistent via a glossary.
- Read explanations aloud; if they sound like a translated manual, rewrite.
- Second pass for tone and register.

---

## 12. Sources and attribution

Include in `ATTRIBUTION.md`:

- NHK *Belajar Bahasa Jepang* course and eBook (link; copyright notice; no redistribution).
- JLPT official level summary, test sections, FAQ, CEFR reference.
- Research citations used in the product or docs.
- Data licenses: JMdict, KANJIDIC2, KanjiVG, Tatoeba, fonts. Check each license before use.
- A disclaimer: "This is an independent companion. It is not affiliated with or endorsed by NHK."

Recommended licenses:

- Code: MIT.
- Original content: CC BY-SA 4.0, or the user's choice.
- Third-party assets: their own licenses; do not relicense them.
- NHK content: not included unless written permission is documented.

---

## 13. First response

Do not write code yet. Reply with:

1. **Source audit**: edition, page count, table of contents, 48-lesson inventory, rights status.
2. **Curriculum map**: 7 arcs, grammar/vocabulary inventory, can-do statements.
3. **Product plan**: screens, data model, stack, 5-lesson MVP.
4. **Content QA plan**: verification steps, tools, review workflow.
5. **Risks and blockers**.
6. **Only the blocking questions**: rights (can you embed NHK assets?), deployment (public GitHub Pages or private/local?), scope (full 48 or subset?).

Then wait for approval at Gate 1.

---

## Appendix A — Expected curriculum spine (verify against the PDF)

| Arc | Lessons | Themes | Grammar examples |
|---|---|---|---|
| First contacts | 1–6 | Introductions, identity, places, home, possessions, phone numbers | `N wa N desu`; `kore/sore/are`; `doko`; `arimasu`; `no` |
| Campus and routines | 7–12 | Shopping, classroom, schedule, health check, invitation, past events | `arimasu ka`; `onegai shimasu`; `kara`; `imasu`; `te kudasai`; `mashita` |
| Everyday choices | 13–19 | Preferences, permission, routines, directions, recommendations, getting lost | `ga suki`; `te mo ii`; `te imasu`; `te kudasai`; `osusume`; `te shimaimashita` |
| Social life and mishaps | 20–27 | Experiences, lateness, passive, prohibitions, commands, intentions, weddings | `ta koto ga arimasu`; `nai de kudasai`; passive; command; volitional |
| Travel and hospitality | 28–37 | Shizuoka, Fuji, gifts, food, potential, obligation, examples | `tara/to`; `o/go`; `agemasu/kuremasu`; potential; `nakereba narimasen`; `tari` |
| Health, honorifics, school | 38–44 | Illness, honorifics, speculation, body, festival, comparison, tea ceremony | `keigo`; `to omoimasu`; `koto ga dekite`; `ichiban`; `te kara` |
| Milestones and farewell | 45–48 | Birthday, snow, dreams, farewell | `te kara`; `mae ni`; `no ga`; `osewa ni narimashita` |

This table is a planning aid, not a substitute for reading the PDF. Correct it against the actual table of contents.

---

## Appendix B — Lesson 1 vertical slice (expected shape; verify)

- **Can-do**: introduce yourself; ask "Are you Anna?"; respond to a first meeting.
- **Grammar**: `N wa N desu`; topic marker `wa`; polite copula `desu`. Introduce `ka` only if the lesson needs it.
- **Vocabulary**: use 5–8 items that actually appear in the lesson (for example わたし、はじめまして、よろしくおねがいします、こちらこそ、アンナ、さくら). Do not pad the list with words that do not appear.
- **Listening**: 2 gist questions, 2 detail questions.
- **Retrieval**: 4 items mixing cloze, sentence order, audio→meaning, and typing.
- **Output**: record a 20-second self-introduction; model + checklist.
- **Review**: 8 cards.
- **UI**: all states, mobile, keyboard, audio fallback.

Use the actual eBook page for the dialogue and grammar. Do not copy the full dialogue into the app unless you have permission.

---

## Appendix C — Content QA rubric

Score each item 0–2:

- **Japanese accuracy**: kana/kanji, readings, grammar, naturalness.
- **Indonesian accuracy**: meaning, naturalness, no calque.
- **Pedagogical fit**: one target pattern, appropriate difficulty, unambiguous answer.
- **Audio alignment**: timestamps/transcript match, if audio is used.
- **Source/provenance**: verified, licensed, documented.
- **Accessibility**: furigana, alt text, keyboard, contrast.

Pass threshold: 2/2 on accuracy; no unresolved `draft`; no unlicensed asset.

---

## Appendix D — Anti-slop checklist before deploy

- [ ] No fake claims, stats, or testimonials.
- [ ] No unverified Japanese.
- [ ] No invented pitch accent or stroke order.
- [ ] No copied eBook/audio/illustrations.
- [ ] No machine-translated Indonesian.
- [ ] No 1,000-item dump on the homepage.
- [ ] No feature that does not support the 15-minute loop.
- [ ] No "JLPT N3" label on beginner content.
- [ ] No generic AI aesthetic: gradients, glass, emoji overload, cherry blossoms.
- [ ] Every lesson has a can-do statement and a retrieval task.
- [ ] Every review card has a source and a reason.
- [ ] Every page works on a 360px phone.
- [ ] Every error message teaches the rule.
- [ ] The app tells the learner what to do next in one glance.
