import urllib.request
import re
import json

base_url = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/'

all_lessons = []

# Map of TOC situation categories from PDF page 4
# Let's see what is in each page
for i in range(1, 49):
    url = f'{base_url}{i}.html'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Title
            h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
            h2 = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.DOTALL)
            h3 = re.findall(r'<h3[^>]*>(.*?)</h3>', html, re.DOTALL)
            
            # Clean tags
            clean = lambda s: re.sub(r'<[^>]+>', '', s).strip()
            
            # Grammar points usually in h3 or h4 after 'Petunjuk tata bahasa'
            # Let's find section between 'Petunjuk tata bahasa' and 'Sensei Oshiete' or next section
            grammar_section = ""
            if 'Petunjuk tata bahasa' in html:
                grammar_part = html.split('Petunjuk tata bahasa')[1]
                if 'Sensei Oshiete' in grammar_part:
                    grammar_section = grammar_part.split('Sensei Oshiete')[0]
                elif 'Kata Tiruan Bunyi' in grammar_part:
                    grammar_section = grammar_part.split('Kata Tiruan Bunyi')[0]
                else:
                    grammar_section = grammar_part[:2000]
            
            grammar_pts = [clean(g) for g in re.findall(r'<h[3-5][^>]*>(.*?)</h[3-5]>', grammar_section, re.DOTALL)]
            grammar_pts = [g for g in grammar_pts if g and not g.startswith('Pelajaran')]
            
            # Key phrase
            key_phrase = ""
            key_m = re.findall(r'class="key-phrase"[^>]*>(.*?)</div>', html, re.DOTALL)
            if key_m:
                key_phrase = clean(key_m[0])
            
            # Scene / situation
            scene = ""
            scene_m = re.findall(r'class="scene"[^>]*>(.*?)</div>', html, re.DOTALL)
            if scene_m:
                scene = clean(scene_m[0])
                
            pdf_page = i + 5
            printed_page = i + 4
            
            # MP3
            mp3_matches = re.findall(r'/nhkworld/lesson/indonesian/learn/mp3/[^\s"\'()<>]+\.mp3', html)
            mp3_url = f"https://www3.nhk.or.jp{mp3_matches[0]}" if mp3_matches else ""
            
            all_lessons.append({
                'lesson': i,
                'pdf_page': pdf_page,
                'printed_page': printed_page,
                'h2': [clean(x) for x in h2],
                'grammar_points': grammar_pts,
                'grammar_count': len(grammar_pts),
                'lesson_url': url,
                'audio_url': mp3_url
            })
            print(f"L{i} (PDF {pdf_page}/Cetak {printed_page}): {len(grammar_pts)} grammar pts -> {grammar_pts}")
    except Exception as e:
        print(f"L{i} error: {e}")

with open('all_lessons_nhk.json', 'w', encoding='utf-8') as f:
    json.dump(all_lessons, f, indent=2, ensure_ascii=False)

print("Saved all_lessons_nhk.json")
