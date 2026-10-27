import re

with open('list_page_dump.txt', 'r', encoding='utf-8') as f:
    c = f.read()

links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', c)
for l in links:
    if any(k in l for k in ['lesson', 'learn', 'list', '1.html', '48']):
        print(l)
