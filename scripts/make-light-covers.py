"""Generate light-mode variants of dark project cover images.

Approach: invert HSL luminance (L' = 1 - L) while preserving hue and
saturation, so dark backgrounds become light and white text becomes dark
without shifting brand/graphic colors.
"""

import numpy as np
from PIL import Image

PROJECTS = "public/projects"


def invert_luminance(src: str, dst: str) -> None:
    img = Image.open(src)
    has_alpha = img.mode == "RGBA"
    rgba = np.asarray(img.convert("RGBA")).astype(np.float64) / 255.0
    arr = rgba[..., :3]

    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    cmax = arr.max(-1)
    cmin = arr.min(-1)
    delta = cmax - cmin
    L = (cmax + cmin) / 2

    chroma = delta > 1e-9
    d = np.where(chroma, delta, 1.0)

    H = np.zeros_like(L)
    idx_r = chroma & (cmax == r)
    idx_g = chroma & (cmax == g) & ~idx_r
    idx_b = chroma & ~idx_r & ~idx_g
    H[idx_r] = (60.0 * (((g - b) / d) % 6.0))[idx_r]
    H[idx_g] = (60.0 * ((b - r) / d) + 120.0)[idx_g]
    H[idx_b] = (60.0 * ((r - g) / d) + 240.0)[idx_b]

    S = np.where(chroma, delta / np.maximum(1.0 - np.abs(2 * L - 1), 1e-9), 0.0)

    L2 = 1.0 - L
    C = (1.0 - np.abs(2 * L2 - 1)) * S
    X = C * (1.0 - np.abs((H / 60.0) % 2.0 - 1.0))
    m = L2 - C / 2.0
    Z = np.zeros_like(C)

    out = np.zeros_like(arr)
    sectors = [
        ((H >= 0) & (H < 60), (C, X, Z)),
        ((H >= 60) & (H < 120), (X, C, Z)),
        ((H >= 120) & (H < 180), (Z, C, X)),
        ((H >= 180) & (H < 240), (Z, X, C)),
        ((H >= 240) & (H < 300), (X, Z, C)),
        ((H >= 300) & (H <= 360), (C, Z, X)),
    ]
    for cond, vals in sectors:
        for i in range(3):
            out[..., i][cond] = (vals[i] + m)[cond]

    result = np.clip(out * 255.0, 0, 255).astype(np.uint8)
    if has_alpha:
        alpha = (rgba[..., 3] * 255.0).astype(np.uint8)
        result = np.dstack([result, alpha])
        Image.fromarray(result, "RGBA").save(dst)
    else:
        Image.fromarray(result, "RGB").save(dst)
    print(f"wrote {dst}")


def recolor_white_to_dark(src: str, dst: str, rgb=(17, 17, 17)) -> None:
    img = Image.open(src).convert("RGBA")
    arr = np.asarray(img).copy()
    arr[..., 0] = rgb[0]
    arr[..., 1] = rgb[1]
    arr[..., 2] = rgb[2]
    Image.fromarray(arr, "RGBA").save(dst)
    print(f"wrote {dst}")


if __name__ == "__main__":
    invert_luminance(f"{PROJECTS}/KBAI-thumbnail.png", f"{PROJECTS}/KBAI-thumbnail-light.png")
    invert_luminance(f"{PROJECTS}/ML4T.png", f"{PROJECTS}/ML4T-light.png")
    invert_luminance(
        f"{PROJECTS}/Android-demo-thumbnail-edited.png",
        f"{PROJECTS}/Android-demo-thumbnail-light.png",
    )
    recolor_white_to_dark(f"{PROJECTS}/unity-logo-dark.png", f"{PROJECTS}/unity-logo-light.png")
