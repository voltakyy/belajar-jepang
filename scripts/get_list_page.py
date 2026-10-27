import urllib.request
import re

url = 'https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Search for the lesson list table on list/
# Let's extract all list items
items = re.findall(r'<li[^>]*>(.*?)</li>', html, re.DOTALL)
print(f"Total li items: {len(items)}")

with open('list_page_dump.txt', 'w', encoding='utf-8') as f:
    f.write(html)

print("Saved list_page_dump.txt")
