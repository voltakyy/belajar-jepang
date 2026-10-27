import re
import json

with open('list_page_dump.txt', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find lessons in the list
# The list page often has tables or blocks
blocks = re.findall(r'<tr[^>]*>.*?</tr>|<div class="[^"]*lesson[^"]*"[^>]*>.*?</div>', html, re.DOTALL)
print(f"Blocks found: {len(blocks)}")

# Let's search for category names
categories = [
    "Di universitas",
    "Di asrama",
    "Perbelanjaan & Restoran",
    "Kebudayaan Jepang",
    "Bepergian & Berjalan-jalan",
    "Penyelesaian masalah",
    "Acara Khusus"
]

for cat in categories:
    count = html.count(cat)
    print(f"Category '{cat}': count {count}")

# Let's check how lessons are linked
lessons = re.findall(r'href="(\d+)\.html"[^>]*>(.*?)</a>', html, re.DOTALL)
print(f"Total lesson links: {len(lessons)}")
for lnum, lcontent in lessons[:10]:
    clean = ' '.join(re.sub(r'<[^>]+>', ' ', lcontent).split())
    print(f"L{lnum}: {clean}")
