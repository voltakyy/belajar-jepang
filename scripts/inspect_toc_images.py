import pymupdf

doc = pymupdf.open('ebook_bahasa_jepang_nhk.pdf')

for pnum in [2, 3]:
    page = doc[pnum]
    print(f"=== Page {pnum+1} (Printed {pnum}) ===")
    img_list = page.get_images(full=True)
    print(f"Image count: {len(img_list)}")
    for img_info in img_list:
        xref = img_info[0]
        rects = page.get_image_rects(xref)
        print(f"xref {xref}: rects = {rects}")
