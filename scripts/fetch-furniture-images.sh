#!/usr/bin/env bash
# Fetch furniture images via z-ai image-search, save JSON results to disk.
set -u

OUT=/home/z/my-project/download/img
mkdir -p "$OUT"

declare -A QUERIES=(
  [hero]="warm cozy living room interior with wooden furniture and natural light"
  [cat_tables]="elegant wooden dining table in modern interior"
  [cat_chairs]="designer wooden chair studio shot"
  [cat_sofas]="modern fabric sofa in cozy living room"
  [cat_beds]="wooden bed frame in minimalist bedroom"
  [cat_storage]="scandinavian wooden sideboard cabinet"
  [cat_lighting]="modern floor lamp warm light interior"
  [p1]="modern wooden dining table with four chairs in light interior"
  [p2]="velvet accent chair gold legs studio product shot"
  [p3]="modern beige fabric three seater sofa in bright living room"
  [p4]="wooden slatted bed frame in minimalist bedroom warm tones"
  [p5]="walnut wood sideboard cabinet with brass handles"
  [p6]="black metal floor lamp with warm shade"
  [p7]="round marble coffee table with oak legs"
  [p8]="vintage leather lounge club chair"
  [p9]="rattan pendant light hanging in dining room"
  [p10]="oak bookshelf with books and decorative objects"
  [p11]="marble dining table set for six in luxury interior"
  [p12]=" upholstered bench at the foot of a wooden bed"
  [gallery1]="cozy reading nook with wooden armchair and floor lamp"
  [gallery2]="dining room with long wooden table and pendant lights"
  [gallery3]="minimalist bedroom with oak bed and warm bedding"
  [gallery4]="living room with grey sofa and wooden coffee table"
  [gallery5]="wooden sideboard styled with vases and books"
  [gallery6]="home office with wooden desk and leather chair"
  [gallery7]="scandinavian living room with sheepskin on chair"
  [gallery8]="entrance hall with wooden console table and mirror"
  [about]="craftsman working on wooden furniture in workshop warm tones"
)

for key in "${!QUERIES[@]}"; do
  echo "==> $key : ${QUERIES[$key]}"
  z-ai image-search -q "${QUERIES[$key]}" -c 3 --no-rank --gl us -o "$OUT/${key}.json" 2>&1 | tail -2
done

echo "Done."
ls -la "$OUT"