#!/usr/bin/env bash
# Generate missing furniture images
set -u

OUT=/home/z/my-project/public/img
mkdir -p "$OUT"

# Map: key|size|prompt
ITEMS=(
  "hero|1440x720|Cozy elegant living room interior with handcrafted rattan armchair and willow woven furniture, natural warm sunlight through window, oak wooden floor, plants, neutral beige and warm wood tones, editorial interior photography, magazine quality, no people"
  "cat_rattan_seating|1024x1024|Handcrafted natural rattan armchair with woven seat on solid oak frame, studio product photography, warm neutral background, soft daylight, premium furniture catalog"
  "cat_wooden_tables|1024x1024|Live-edge solid oak dining table with hand-rubbed oil finish, handcrafted wood furniture, warm studio lighting, premium product photography"
  "cat_woven_storage|1024x1024|Walnut wood sideboard with hand-cane woven door panels, brass handles, handcrafted furniture, warm studio lighting, premium product photography"
  "cat_rattan_beds|1024x1024|Solid oak bed frame with hand-woven rattan headboard, natural linen bedding, handcrafted furniture, warm bedroom interior, editorial photography"
  "cat_hall_console|1024x1024|Slim solid oak console table with hand-cane front panels, brass pulls, hallway furniture, warm studio lighting, premium product photography"
  "p_willowcrest_armchair|1024x1024|Hand-woven natural rattan armchair on solid oak frame with linen cushion, studio product photography on warm beige background, handcrafted furniture, soft daylight"
  "p_oakwhisper_chair|1024x1024|Solid oak dining chair with hand-caned rattan seat, mortise and tenon joinery, studio product photography, warm neutral background, handcrafted furniture"
  "p_monolith_table|1024x1024|Live-edge solid European oak coffee table slab on blackened steel frame, handcrafted furniture, warm studio lighting, premium product photography"
  "p_harvest_table|1024x1024|Solid European oak six-seater dining table with breadboard ends and walnut pegs, handcrafted furniture, warm studio lighting, premium product photography"
  "p_lumen_sideboard|1024x1024|Walnut wood sideboard with hand-cane woven door panels, solid brass hardware, handcrafted furniture, warm studio lighting"
  "p_studio_shelf|1024x1024|Open solid oak shelving unit with hand-cane back panels on blackened steel frame, handcrafted furniture, warm studio lighting"
  "p_aloft_console|1024x1024|Slim solid oak console table with hand-cane front panels and brass drawer pulls, handcrafted furniture, warm studio lighting"
  "p_willowvanity|1024x1024|Solid oak console with bevelled mirror framed in hand-woven rattan, handcrafted furniture, warm studio lighting"
)

for entry in "${ITEMS[@]}"; do
  key="${entry%%|*}"
  rest="${entry#*|}"
  size="${rest%%|*}"
  prompt="${rest#*|}"
  if [ -f "$OUT/${key}.png" ] && [ "$(stat -c%s "$OUT/${key}.png")" -gt 30000 ]; then
    echo "skip $key (already exists)"
    continue
  fi
  echo "==> $key  ($size)"
  timeout 90 z-ai image -p "$prompt" -o "$OUT/${key}.png" -s "$size" 2>&1 | tail -1
done

echo ""
echo "=== Final list ==="
ls -la "$OUT" | head -40