#!/usr/bin/env bash
# Test fresh rattan/willow/woven furniture Unsplash photo IDs
set -u

# Try many fresh IDs to find good rattan/willow/woven furniture photos
CANDIDATES=(
# Rattan / wicker / woven — known good
"photo-1567016432779-094069958ea5"   # wicker armchair
"photo-1505740420928-5e560c06d30e"   # accent chair
"photo-1598300042247-d088f8ab3a91"   # dining chair
"photo-1555041461-a89c8f9c9d84"
"photo-1530018603906-dabd0c5bedd9"
"photo-1583845112203-29329902332e"
"photo-1538688525198-9b88f6f53126"
"photo-1616594039964-ae9021a400a0"
"photo-1505693416388-ac5ce068fe85"
"photo-1517991104123-1d56a6e81ed9"
"photo-1513506003901-1e6a229e2d15"
"photo-1503602642458-232111445657"
"photo-1531973576160-7125cd663d86"
"photo-1516455590571-18256e5bb9ff"
"photo-1493663284031-b7e3aefcae8e"
"photo-1540574163026-643ea20ade25"
"photo-1558997519-83ea9252edf8"
"photo-1577140917170-285929fb55b7"
"photo-1586023492125-27b2c045efd7"
# Try more new rattan/wicker specific candidates
"photo-1600210432490-2c7d5e7e9c0a"
"photo-1600210432490-2c7d5e7e9c0b"
"photo-1600210432490-2c7d5e7e9c0c"
"photo-1601584115100-2c65c8e9c108"
"photo-1601584115100-2c65c8e9c109"
"photo-1601584115100-2c65c8e9c10a"
"photo-1594035344119-6c0a1d6d2c5e"
"photo-1594035344119-6c0a1d6d2c5f"
"photo-1600218292390-3e7e9b4f7e9c"
"photo-1600218292390-3e7e9b4f7e9d"
"photo-1600218292390-3e7e9b4f7e9e"
"photo-1618220179428-22d0cbd5e658"
"photo-1618220179428-22d0cbd5e659"
"photo-1618220179428-22d0cbd5e660"
"photo-1618221195710-ddbecb78c5f9"
"photo-1618221195710-ddbecb78c5fa"
"photo-1618221195710-ddbecb78c5fb"
"photo-1600585154340-be6161a56a47"
"photo-1600585154340-be6161a56a48"
"photo-1600585154340-be6161a56a49"
# Baskets / woven
"photo-1600210434112-8c0f8f8f8f8f"
"photo-1600210434112-8c0f8f8f8f90"
"photo-1600210434112-8c0f8f8f8f91"
"photo-1600210434112-8c0f8f8f8f92"
# Rattan chairs, indoor / outdoor
"photo-1616594039964-ae9021a400a0"
"photo-1616594039964-ae9021a400a1"
"photo-1616594039964-ae9021a400a2"
"photo-1616594039964-ae9021a400a3"
"photo-1616594039964-ae9021a400a4"
"photo-1616594039964-ae9021a400a5"
"photo-1616594039964-ae9021a400a6"
# Light fixtures — woven pendant
"photo-1517991104123-1d56a6e81ed9"
"photo-1517991104123-1d56a6e81eda"
"photo-1517991104123-1d56a6e81edb"
"photo-1517991104123-1d56a6e81edc"
"photo-1517991104123-1d56a6e81edd"
# Wood furniture / dining tables
"photo-1616486338812-3dadae4b1823"
"photo-1616486338812-3dadae4b1824"
"photo-1616486338812-3dadae4b1825"
"photo-1616486338812-3dadae4b1826"
# Beds with rattan headboard
"photo-1618221195710-ddbecb78c5f9"
"photo-1618221195710-ddbecb78c5fa"
"photo-1522708323590-d24dbb6b0b8b"
"photo-1522708323590-d24dbb6b0b8c"
"photo-1522708323590-d24dbb6b0b8d"
# Pexels / Other sources (just test URLs)
# Living room with woven furniture
"photo-1586023492125-27b2c045efd7"
"photo-1505693416388-ac5ce068fe85"
"photo-1616594039964-ae9021a400a0"
"photo-1583845112203-29329902332e"
"photo-1493663284031-b7e3aefcae8e"
# Hall / vanity / console
"photo-1516455590571-18256e5bb9ff"
"photo-1616594039964-ae9021a400a0"
# Outdoor rattan
"photo-1618220179428-22d0cbd5e658"
# Hand working
"photo-1538688525198-9b88f6f53126"
"photo-1503602642458-232111445657"
)

echo "${CANDIDATES[@]}" | tr ' ' '\n' | sort -u | while read id; do
  url="https://images.unsplash.com/${id}?w=80&auto=format&fit=crop&q=50"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" = "200" ]; then
    echo "200  $id"
  fi
done