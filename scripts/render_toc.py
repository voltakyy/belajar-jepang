import fitz # PyMuPDF
import os

doc = fitz.open('ebook_bahasa_jepang_nhk.pdf')

# Save TOC pages as images
p3 = doc[2] # PDF p. 3
p4 = doc[3] # PDF p. 4

pix3 = p3.get_pixmap(dpi=150)
pix3.save('toc_p3.png')

pix4 = p4.get_pixmap(dpi=150)
pix4.save('toc_p4.png')

print("Saved toc_p3.png and toc_p4.png")
