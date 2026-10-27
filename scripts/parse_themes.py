import re
import json

with open('themes_page_dump.txt', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect sections
sections = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', html, re.DOTALL)
clean = lambda s: ' '.join(re.sub(r'<[^>]+>', ' ', s).split())
for s in sections:
    print("Section:", clean(s))

# Find theme blocks
blocks = re.findall(r'<div class="theme-block[^"]*"[^>]*>.*?</div>\s*</div>', html, re.DOTALL)
print("Theme blocks found:", len(blocks))

# Or find which lessons are listed under which theme
# Let's search for themes and lesson links
theme_map = {}
current_theme = "Unknown"
for line in html.split('\n'):
    if '<h3' in line or '<h2' in line:
        current_theme = clean(line)
    m = re.findall(r'href="[^"]*?/(\d+)\.html"', line)
    if m:
        for lnum in m:
            theme_map[int(lnum)] = current_theme

print(f"Total mapped lessons: {len(theme_map)}")
for i in range(1, 49):
    print(f"Lesson {i}: {theme_map.get(i, 'Not mapped')}")
