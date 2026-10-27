import urllib.request
import re

url = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/themes/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    with open('themes_page_dump.txt', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Saved themes_page_dump.txt, len:", len(html))
except Exception as e:
    print("Error:", e)
