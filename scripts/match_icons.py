import pymupdf

doc = pymupdf.open('ebook_bahasa_jepang_nhk.pdf')

# Let's inspect the icon mappings
# On PDF p. 4 (legend):
# xref 56: Di universitas
# xref 63: Di asrama
# xref 64: Perbelanjaan & Restoran
# xref 922: Kebudayaan Jepang
# xref 60: Bepergian & Berjalan-jalan
# xref 62: Penyelesaian masalah
# xref 61: Acara Khusus

# Note: on PDF p. 3, images might have different xrefs, but let's check their visual image bytes/hashes or check how they match!
icon_hashes = {}
for xref, name in [(56, "Di universitas"), (63, "Di asrama"), (64, "Perbelanjaan & Restoran"),
                   (922, "Kebudayaan Jepang"), (60, "Bepergian & Berjalan-jalan"),
                   (62, "Penyelesaian masalah"), (61, "Acara Khusus")]:
    pix = doc.extract_image(xref)
    icon_hashes[hash(pix["image"])] = name
    print(f"Legend {name}: size={pix['width']}x{pix['height']}, format={pix['ext']}, len={len(pix['image'])}")

# Check xrefs on Page 3 (pindex 2)
p3 = doc[2]
p3_imgs = p3.get_images(full=True)
p3_xref_map = {}
for img in p3_imgs:
    xref = img[0]
    pix = doc.extract_image(xref)
    h = hash(pix["image"])
    if h in icon_hashes:
        p3_xref_map[xref] = icon_hashes[h]
    else:
        # compare by image bytes length or dimensions
        for l_xref, l_name in [(56, "Di universitas"), (63, "Di asrama"), (64, "Perbelanjaan & Restoran"),
                               (922, "Kebudayaan Jepang"), (60, "Bepergian & Berjalan-jalan"),
                               (62, "Penyelesaian masalah"), (61, "Acara Khusus")]:
            l_pix = doc.extract_image(l_xref)
            if pix["image"] == l_pix["image"]:
                p3_xref_map[xref] = l_name
                break
        print(f"P3 xref {xref}: mapped to {p3_xref_map.get(xref, 'UNKNOWN')}, size={pix['width']}x{pix['height']}, len={len(pix['image'])}")

# Check xrefs on Page 4 (pindex 3)
p4 = doc[3]
p4_imgs = p4.get_images(full=True)
p4_xref_map = {}
for img in p4_imgs:
    xref = img[0]
    pix = doc.extract_image(xref)
    for l_xref, l_name in [(56, "Di universitas"), (63, "Di asrama"), (64, "Perbelanjaan & Restoran"),
                           (922, "Kebudayaan Jepang"), (60, "Bepergian & Berjalan-jalan"),
                           (62, "Penyelesaian masalah"), (61, "Acara Khusus")]:
        l_pix = doc.extract_image(l_xref)
        if pix["image"] == l_pix["image"]:
            p4_xref_map[xref] = l_name
            break
    print(f"P4 xref {xref}: mapped to {p4_xref_map.get(xref, 'UNKNOWN')}, size={pix['width']}x{pix['height']}, len={len(pix['image'])}")
