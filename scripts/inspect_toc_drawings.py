import pymupdf

doc = pymupdf.open('ebook_bahasa_jepang_nhk.pdf')

# Let's inspect drawings / rects in p3 and p4
for pnum, page in [(3, doc[2]), (4, doc[3])]:
    print(f"=== Page {pnum} ===")
    drawings = page.get_drawings()
    print(f"Drawings count: {len(drawings)}")
    # Check text with positions
    words = page.get_text("words")
    # find lines starting with digits (lesson numbers)
    lesson_words = [w for w in words if w[4].isdigit() and 1 <= int(w[4]) <= 48]
    for w in sorted(lesson_words, key=lambda x: (x[1], x[0]))[:10]:
        print(f"Lesson {w[4]} at y={w[1]:.1f}, x={w[0]:.1f}")
