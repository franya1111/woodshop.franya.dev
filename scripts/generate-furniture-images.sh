#!/usr/bin/env bash
# Generate handcrafted rattan/willow/woven furniture images using z-ai image-generation CLI
set -u

OUT=/home/z/my-project/public/img
mkdir -p "$OUT"

declare -A PROMPTS=(
  [hero]="Cozy elegant living room interior with handcrafted rattan armchair and willow woven furniture, natural warm sunlight through window, oak wooden floor, plants, neutral beige and warm wood tones, editorial interior photography, magazine quality, no people"
  [cat_rattan_seating]="Handcrafted natural rattan armchair with woven seat on solid oak frame, studio product photography, warm neutral background, soft daylight, premium furniture catalog"
  [cat_wooden_tables]="Live-edge solid oak dining table with hand-rubbed oil finish, handcrafted wood furniture, warm studio lighting, premium product photography"
  [cat_woven_storage]="Walnut wood sideboard with hand-cane woven door panels, brass handles, handcrafted furniture, warm studio lighting, premium product photography"
  [cat_rattan_beds]="Solid oak bed frame with hand-woven rattan headboard, natural linen bedding, handcrafted furniture, warm bedroom interior, editorial photography"
  [cat_lighting]="Hand-woven rattan pendant lamp hanging in warm interior, soft golden light, handcrafted lighting, premium product photography"
  [cat_hall_console]="Slim solid oak console table with hand-cane front panels, brass pulls, hallway furniture, warm studio lighting, premium product photography"
  [p_willowcrest_armchair]="Hand-woven natural rattan armchair on solid oak frame with linen cushion, studio product photography on warm beige background, handcrafted furniture, soft daylight"
  [p_oakwhisper_chair]="Solid oak dining chair with hand-caned rattan seat, mortise and tenon joinery, studio product photography, warm neutral background, handcrafted furniture"
  [p_halcyon_chair]="Steam-bent plywood lounge chair in terracotta color on solid beech swivel base, handcrafted modern furniture, studio product photography, warm background"
  [p_monolith_table]="Live-edge solid European oak coffee table slab on blackened steel frame, handcrafted furniture, warm studio lighting, premium product photography"
  [p_harvest_table]="Solid European oak six-seater dining table with breadboard ends and walnut pegs, handcrafted furniture, warm studio lighting, premium product photography"
  [p_willowbed]="Solid oak bed frame with hand-woven rattan headboard, natural linen bedding, handcrafted furniture, warm bedroom interior, editorial photography"
  [p_lumen_sideboard]="Walnut wood sideboard with hand-cane woven door panels, solid brass hardware, handcrafted furniture, warm studio lighting"
  [p_studio_shelf]="Open solid oak shelving unit with hand-cane back panels on blackened steel frame, handcrafted furniture, warm studio lighting"
  [p_halo_pendant]="Hand-woven natural Indonesian rattan pendant lamp, 45cm diameter, handcrafted lighting, warm studio product photography on neutral background"
  [p_arc_lamp]="Solid brass arc floor lamp with woven rattan shade on hand-turned oak base, handcrafted lighting, warm studio product photography"
  [p_aloft_console]="Slim solid oak console table with hand-cane front panels and brass drawer pulls, handcrafted furniture, warm studio lighting"
  [p_willowvanity]="Solid oak console with bevelled mirror framed in hand-woven rattan, handcrafted furniture, warm studio lighting"
  [about]="Hands of a craftsperson weaving natural rattan reed around a solid oak chair frame in a sunlit workshop, handcrafted furniture, warm tones, documentary photography, no faces"
  [gallery1]="Cozy living room with hand-woven rattan armchair and oak side table, soft natural light, plants, handcrafted furniture, editorial interior photography"
  [gallery2]="Dining room with solid oak table and hand-cane dining chairs, warm pendant light, handcrafted furniture, editorial interior photography"
  [gallery3]="Minimalist bedroom with oak bed frame and hand-woven rattan headboard, natural linen bedding, handcrafted furniture, editorial interior photography"
  [gallery4]="Living room corner with hand-woven rattan armchair, oak coffee table, floor lamp, plants, warm light, handcrafted furniture, editorial interior photography"
  [gallery5]="Hallway with slim oak console table and hand-cane mirror frame, warm pendant light, handcrafted furniture, editorial interior photography"
  [gallery6]="Home office with hand-woven rattan chair and solid oak desk, plants, warm light, handcrafted furniture, editorial interior photography"
  [gallery7]="Reading nook with hand-woven rattan armchair, sheepskin throw, oak side table, floor lamp, warm natural light, handcrafted furniture"
  [gallery8]="Dining corner with hand-cane dining chairs around oak table, rattan pendant light overhead, handcrafted furniture, editorial interior photography"
)

# Hero is wide; about is portrait; products/gallery are square
for key in "${!PROMPTS[@]}"; do
  case "$key" in
    hero)        size="1440x720" ;;
    about)       size="1344x768" ;;
    cat_*|p_*)   size="1024x1024" ;;
    gallery*)    size="1152x864" ;;
    *)           size="1024x1024" ;;
  esac
  echo "==> $key  ($size)"
  z-ai image -p "${PROMPTS[$key]}" -o "$OUT/${key}.png" -s "$size" 2>&1 | tail -2
done

echo ""
echo "=== Generated files ==="
ls -la "$OUT"