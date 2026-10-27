import os
from PIL import Image
import numpy as np

legends = {
    "Di universitas": Image.open("scratch_icons/legend_univ.png").convert("RGBA"),
    "Di asrama": Image.open("scratch_icons/legend_asrama.png").convert("RGBA"),
    "Perbelanjaan & Restoran": Image.open("scratch_icons/legend_belanja.png").convert("RGBA"),
    "Kebudayaan Jepang": Image.open("scratch_icons/legend_budaya.png").convert("RGBA"),
    "Bepergian & Berjalan-jalan": Image.open("scratch_icons/legend_tamasya.png").convert("RGBA"),
    "Penyelesaian masalah": Image.open("scratch_icons/legend_masalah.png").convert("RGBA"),
    "Acara Khusus": Image.open("scratch_icons/legend_acara.png").convert("RGBA"),
}

# Resize all legends to 40x40
target_size = (40, 40)
legend_arrays = {k: np.array(v.resize(target_size)) for k, v in legends.items()}

# Match each file
icon_matches = {}
for fname in sorted(os.listdir("scratch_icons")):
    if not fname.startswith("p"):
        continue
    if "870" in fname:
        continue
    img = Image.open(f"scratch_icons/{fname}").convert("RGBA").resize(target_size)
    arr = np.array(img)
    best_name = None
    best_diff = float("inf")
    for lname, larr in legend_arrays.items():
        diff = np.mean((arr.astype(float) - larr.astype(float))**2)
        if diff < best_diff:
            best_diff = diff
            best_name = lname
    icon_matches[fname] = (best_name, best_diff)
    print(f"{fname} -> {best_name} (diff={best_diff:.1f})")
