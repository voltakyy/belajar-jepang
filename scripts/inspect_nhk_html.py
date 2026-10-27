import urllib.request
import re

url = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/1.html'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

print("=== Lesson 1 headings ===")
for tag in re.findall(r'<h[1-5][^>]*>(.*?)</h[1-5]>', html, re.DOTALL):
    clean = re.sub(r'<[^>]+>', '', tag).strip()
    if clean:
        print('H:', clean)

# look for grammar / situation
print("\n=== Classes / IDs ===")
for m in set(re.findall(r'class="([^"]+)"', html)):
    if any(k in m for k in ['point', 'grammar', 'cate', 'scene', 'theme', 'title', 'key']):
        print('Class:', m)
