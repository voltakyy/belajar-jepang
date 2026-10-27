import urllib.request
import re
import json

base_url = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/'

lesson_data = {}

for i in range(1, 49):
    url = f'{base_url}{i}.html'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for mp3
            mp3_matches = re.findall(r'https?://[^\s"\'()<>]+\.mp3|/[^\s"\'()<>]+\.mp3', html)
            # Find title or keyphrase
            title_m = re.findall(r'<title>(.*?)</title>', html, re.I)
            lesson_data[i] = {
                'url': url,
                'title': title_m[0] if title_m else '',
                'mp3s': list(set(mp3_matches))
            }
            print(f"L{i}: {lesson_data[i]['mp3s']}")
    except Exception as e:
        print(f"L{i} error: {e}")
        lesson_data[i] = {'url': url, 'error': str(e)}

with open('scraped_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lesson_data, f, indent=2, ensure_ascii=False)

print("Scrape complete.")
