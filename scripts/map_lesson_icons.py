import pymupdf
from PIL import Image
import numpy as np

doc = pymupdf.open('ebook_bahasa_jepang_nhk.pdf')

# Load legends
legends = {
    "Di universitas": Image.open("scratch_icons/legend_univ.png").convert("RGBA"),
    "Di asrama": Image.open("scratch_icons/legend_asrama.png").convert("RGBA"),
    "Perbelanjaan & Restoran": Image.open("scratch_icons/legend_belanja.png").convert("RGBA"),
    "Kebudayaan Jepang": Image.open("scratch_icons/legend_budaya.png").convert("RGBA"),
    "Bepergian & Berjalan-jalan": Image.open("scratch_icons/legend_tamasya.png").convert("RGBA"),
    "Penyelesaian masalah": Image.open("scratch_icons/legend_masalah.png").convert("RGBA"),
    "Acara Khusus": Image.open("scratch_icons/legend_acara.png").convert("RGBA"),
}
target_size = (40, 40)
legend_arrays = {k: np.array(v.resize(target_size)) for k, v in legends.items()}

def identify_icon(pix_bytes):
    import io
    img = Image.open(io.BytesIO(pix_bytes)).convert("RGBA").resize(target_size)
    arr = np.array(img)
    best_name = None
    best_diff = float("inf")
    for lname, larr in legend_arrays.items():
        diff = np.mean((arr.astype(float) - larr.astype(float))**2)
        if diff < best_diff:
            best_diff = diff
            best_name = lname
    return best_name

# For Page 3 (Lessons 1-27)
p3 = doc[2]
# Words in Page 3: find each lesson number position
# Lesson 1 to 27
p3_text_instances = {}
for i in range(1, 28):
    # search for "i WATASHI" or just "i " at the start
    # Let's inspect words
    words = [w for w in p3.get_text("words") if w[4] == str(i)]
    # filter words on the left column (x < 100)
    left_words = [w for w in words if w[0] < 80]
    if left_words:
        p3_text_instances[i] = left_words[0][1] # y0

# For each image placed on p3, find which lesson y it belongs to
img_placements_p3 = []
for img_info in p3.get_images(full=True):
    xref = img_info[0]
    pix = doc.extract_image(xref)
    if pix["width"] > 100: continue
    icon_name = identify_icon(pix["image"])
    rects = p3.get_image_rects(xref)
    for r in rects:
        img_placements_p3.append((r.y0, r.x0, icon_name, xref))

print("=== LESSONS 1-27 ICONS ===")
for i in range(1, 28):
    y = p3_text_instances.get(i)
    if y:
        # find icons with abs(r.y0 - y) < 15
        nearby = [p for p in img_placements_p3 if abs(p[0] - y) < 15]
        # sort by x0
        nearby_sorted = sorted(nearby, key=lambda x: x[1])
        icons = [p[2] for p in nearby_sorted]
        print(f"L{i}: y={y:.1f} -> {icons}")

# For Page 4 (Lessons 28-48)
p4 = doc[3]
p4_text_instances = {}
for i in range(28, 49):
    words = [w for w in p4.get_text("words") if w[4] == str(i)]
    left_words = [w for w in words if w[0] < 100]
    if left_words:
        p4_text_instances[i] = left_words[0][1]

img_placements_p4 = []
for img_info in p4.get_images(full=True):
    xref = img_info[0]
    pix = doc.extract_image(xref)
    if pix["width"] > 100: continue
    icon_name = identify_icon(pix["image"])
    rects = p4.get_image_rects(xref)
    for r in rects:
        # ignore legend at bottom (y > 700)
        if r.y0 < 700:
            img_placements_p4.append((r.y0, r.x0, icon_name, xref))

print("\n=== LESSONS 28-48 ICONS ===")
for i in range(28, 49):
    y = p4_text_instances.get(i)
    if y:
        nearby = [p for p in img_placements_p4 if abs(p[0] - y) < 15]
        nearby_sorted = sorted(nearby, key=lambda x: x[1])
        icons = [p[2] for p in nearby_sorted]
        print(f"L{i}: y={y:.1f} -> {icons}")
