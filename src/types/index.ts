export type RubySegment = {
  text: string;
  reading?: string; // Furigana pembacaan kana jika teks berupa kanji
};

export type LanguageString = {
  jp: string;           // Teks kanji/kana asli: e.g. "私はアンナです"
  kana: string;         // Bacaan kana lengkap: e.g. "わたしはアンナです"
  romaji: string;       // Transliterasi Hepburn: e.g. "Watashi wa Anna desu"
  id: string;           // Terjemahan orisinal bahasa Indonesia
  rubySegments?: RubySegment[]; // Segmentasi furigana presisi
  rubyHtml?: string;    // String HTML ruby yang sudah tervalidasi
};

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type VocabItem = {
  id: string;
  kanji?: string;
  kana: string;
  romaji: string;
  idMeaning: string;
  contextSentence?: LanguageString;
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type GrammarPoint = {
  id: string;
  title: string;           // e.g. "A wa B desu"
  pattern: string;         // e.g. "[Subjek] wa [Predikat] desu"
  explanationId: string;   // Penjelasan orisinal bahasa Indonesia
  contrastNote: string;    // Catatan kontras pola pikir dengan bahasa Indonesia
  examples: LanguageString[]; // Contoh kalimat orisinal
  role: "active_target" | "recognition_reference";
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type Exercise = {
  id: string;
  type: "cloze_particle" | "sentence_order" | "dictation" | "audio_meaning" | "meaning_to_jp" | "grammar_transform";
  prompt: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

export type OutputTask = {
  type: "speaking" | "writing";
  scenarioPrompt: string;
  instructions: string[];
  modelAnswer: LanguageString;
  selfCheckList: string[]; // 3-4 kriteria evaluasi mandiri
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

// Konten statis kartu ulasan
export type ReviewCard = {
  id: string;
  lessonId: string;
  front: string;
  back: string;
  type: "vocab" | "grammar" | "particle" | "listening" | "output";
  audioRef?: string;       // Tautan resmi untuk rujukan dengar (Mode A)
  sourceRef: string;
  qaStatus: "draft" | "machine_checked" | "human_reviewed" | "published";
};

// State dinamis SRS pengguna (disimpan di localStorage)
export type SrsState = {
  cardId: string;
  lessonId: string;
  intervalDays: number;
  nextReviewDate: string;  // Format ISO Date (YYYY-MM-DD)
  repetitionCount: number;
  easeFactor?: number;
  lastReviewedDate?: string;
  history?: { date: string; rating: "again" | "good" | "easy" }[];
};

export type Lesson = {
  id: string;                  // e.g. "L01"
  order: number;               // 1..48
  title: LanguageString;
  situationSummary: string;    // Ringkasan situasi dialog dalam bahasa Indonesia
  pdfPage: number;             // Nomor halaman PDF sumber (PDF p. 6)
  printedPage: number;         // Nomor halaman cetak sumber (Cetak p. 5)
  situationCategories: string[]; // Multi-label dari TOC resmi
  productArcId: string;        // e.g. "arc-1"
  officialUrls: {
    lessonPage: string;        // URL resmi pelajaran NHK
    audioMp3: string;          // URL resmi file MP3 NHK
    audioTimestamp?: { start: string; end: string; label: string }; // e.g. "01:22" - "01:34"
  };
  canDo: string[];             // Pernyataan capaian fungsional
  grammarPoints: GrammarPoint[];
  vocabulary: VocabItem[];     // Batas: 5–8 kosakata aktif
  listening: {
    gistQuestions: Question[];   // Pertanyaan pemahaman esensi global
    detailQuestions: Question[]; // Pertanyaan pemahaman detail percakapan
  };
  noticeShortQuotes: {
    targetSentence: LanguageString;
    attribution: string;
  }[];                         // Maksimal 1–2 kalimat kutipan teratribusi
  exercises: Exercise[];       // Batas: 4–8 butir latihan aktif
  outputTask: OutputTask;
  reviewCards: ReviewCard[];   // Batas: 8–12 kartu ulasan
  qa: {
    status: "draft" | "machine_checked" | "human_reviewed" | "published";
    reviewedBy: string;        // Nama reviewer atau "TBD"
    verifiedDate?: string;
  };
};

export type ProductArc = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  lessonRange: string;
  description: string;
};

export type UserProgress = {
  completedLessons: string[]; // Array of lesson IDs e.g. ["L01"]
  currentLessonId: string;
  masteredCanDos: string[];
  lastStudyDate: string;
  streakDays: number;
};

export type ErrorLog = {
  id: string;
  lessonId: string;
  exerciseId: string;
  prompt: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  timestamp: string;
  resolved: boolean;
};


export interface CourseMapEntry {
  id: string;
  order: number;
  title: {
    romaji: string;
    id: string;
  };
  printedPage: number;
  pdfPage: number;
  audioUrl: string;
  /** PDF dua halaman milik pelajaran ini di NHK; `pdfPage` merujuk halaman eBook gabungan. */
  pdfUrl: string;
  webUrl: string;
  situationCategories: string[];
  productArcId: string;
  pointsCount: number;
  strategy: string;
  status: 'active' | 'coming_soon';
}
