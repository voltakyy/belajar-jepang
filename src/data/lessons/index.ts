export { COURSE_MAP } from './courseMap';
import { Lesson, ProductArc } from '../../types';
import { lesson01 } from './lesson01';
import { lesson02 } from './lesson02';
import { lesson03 } from './lesson03';
import { lesson04 } from './lesson04';
import { lesson05 } from './lesson05';
import { lesson06 } from './lesson06';
import { lesson07 } from './lesson07';
import { lesson08 } from './lesson08';
import { lesson09 } from './lesson09';
import { lesson10 } from './lesson10';
import { lesson11 } from './lesson11';
import { lesson12 } from './lesson12';
import { lesson13 } from './lesson13';
import { lesson14 } from './lesson14';
import { lesson15 } from './lesson15';
import { lesson16 } from './lesson16';
import { lesson17 } from './lesson17';
import { lesson18 } from './lesson18';
import { lesson19 } from './lesson19';
import { lesson20 } from './lesson20';
import { lesson21 } from './lesson21';
import { lesson22 } from './lesson22';
import { lesson23 } from './lesson23';
import { lesson24 } from './lesson24';
import { lesson25 } from './lesson25';

export const ALL_LESSONS: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  // Lessons 26 to 48 will follow in the next content batch
];

export const PRODUCT_ARCS: ProductArc[] = [
  {
    id: 'arc-1',
    order: 1,
    title: 'Arc 1: Identitas & Fondasi Interaksi Awal',
    subtitle: 'Perkenalan, Identitas, Lokasi, dan Nomor Kontak',
    lessonRange: 'Pelajaran 1 – 6',
    description: 'Membangun kemampuan memperkenalkan diri, menunjuk benda di sekitar, menanyakan toilet, dan bertukar nomor telepon.',
  },
  {
    id: 'arc-2',
    order: 2,
    title: 'Arc 2: Kehidupan Kampus & Jadwal Kegiatan',
    subtitle: 'Kantin, Toko, Jam, dan Keberadaan Orang',
    lessonRange: 'Pelajaran 7 – 12',
    description: 'Menanyakan ketersediaan makanan di toko kue, meminta pengulangan kalimat, menanyakan jam dan presensi.',
  },
  {
    id: 'arc-3',
    order: 3,
    title: 'Arc 3: Pilihan Keseharian, Arah & Insiden Kecil',
    subtitle: 'Hobi, Izin, Petunjuk Arah, dan Tersesat',
    lessonRange: 'Pelajaran 13 – 19',
    description: 'Menyatakan minat, meminta izin beraktivitas, menavigasi gedung, dan meminta tolong saat tersesat di jalan.',
  },
  {
    id: 'arc-4',
    order: 4,
    title: 'Arc 4: Interaksi Sosial, Pengalaman & Situasi Darurat',
    subtitle: 'Pengalaman Lampau, Keterlambatan, dan Gempa Bumi',
    lessonRange: 'Pelajaran 20 – 27',
    description: 'Menceritakan hal yang pernah dialami, meminta maaf atas keterlambatan, dan merespons evakuasi gempa.',
  },
  {
    id: 'arc-5',
    order: 5,
    title: 'Arc 5: Perjalanan, Budaya Jamuan & Pilihan Alternatif',
    subtitle: 'Wisata Shizuoka, Fuji, Oleh-oleh, dan Metode Bayar',
    lessonRange: 'Pelajaran 28 – 37',
    description: 'Mendeskripsikan pemandangan alam, membandingkan preferensi futon, bertransaksi kartu kredit, dan merangkum liburan.',
  },
  {
    id: 'arc-6',
    order: 6,
    title: 'Arc 6: Komunikasi Staf, Kesehatan, Pertimbangan & Festival',
    subtitle: 'Kesantunan Kerja, Keluhan Dokter, dan Upacara Teh',
    lessonRange: 'Pelajaran 38 – 44',
    description: 'Memahami bahasa hormat kasir, mengeluhkan gejala sakit dengan onomatope, festival kampus, dan tradisi minum teh.',
  },
  {
    id: 'arc-7',
    order: 7,
    title: 'Arc 7: Pencapaian Momen, Rencana Masa Depan & Salam Perpisahan',
    subtitle: 'Ulang Tahun, Salju, Cita-cita, dan Pamitan',
    lessonRange: 'Pelajaran 45 – 48',
    description: 'Mengucapkan selamat ulang tahun, rencana sebelum kepulangan, impian menjadi guru, dan salam perpisahan berkesan.',
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getAllReviewCards(): import('../../types').ReviewCard[] {
  return ALL_LESSONS.flatMap((l) => l.reviewCards);
}
