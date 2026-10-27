import pymupdf
import os

os.makedirs('scratch_icons', exist_ok=True)
doc = pymupdf.open('ebook_bahasa_jepang_nhk.pdf')

for xref, name in [(56, "univ"), (63, "asrama"), (64, "belanja"),
                   (922, "budaya"), (60, "tamasya"),
                   (62, "masalah"), (61, "acara")]:
    pix = doc.extract_image(xref)
    with open(f"scratch_icons/legend_{name}.png", "wb") as f:
        f.write(pix["image"])

for pnum, page in [(3, doc[2]), (4, doc[3])]:
    for img in page.get_images(full=True):
        xref = img[0]
        pix = doc.extract_image(xref)
        with open(f"scratch_icons/p{pnum}_xref_{xref}.png", "wb") as f:
            f.write(pix["image"])

print("Saved all icons")
