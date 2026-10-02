#!/usr/bin/env bash
# Try a fresh batch of more specific rattan/willow/woven furniture Unsplash photo IDs
set -u

CANDIDATES=(
# More rattan/wicker candidates
"photo-1567016432779-094069958ea5"  # verified wicker
"photo-1600210434112-8c0f8f8f8f8f"
"photo-1601584115100-2c65c8e9c108"
"photo-1601584115100-2c65c8e9c109"
"photo-1600218292390-3e7e9b4f7e9c"
"photo-1600218292390-3e7e9b4f7e9e"
"photo-1600218292390-3e7e9b4f7e9d"
"photo-1616594039964-ae9021a400a0"  # verified
"photo-1616486338812-3dadae4b1823"
"photo-1616627784592-29e2e1c0d0c1"
"photo-1598300042247-d088f8ab3a91"  # verified
"photo-1594035344119-6c0a1d6d2c5e"
"photo-1600210434112-8c0f8f8f8f8e"
"photo-1600210434112-8c0f8f8f8f8d"
"photo-1601584115100-2c65c8e9c10a"
"photo-1594035344119-6c0a1d6d2c5e"
# Baskets / woven storage
"photo-1594035344119-6c0a1d6d2c5f"
"photo-1600210434112-8c0f8f8f8f90"
"photo-1600210434112-8c0f8f8f8f91"
# Rattan headboards / wicker beds
"photo-1522708323590-d24dbb6b0b8b"
"photo-1505693416388-ac5ce068fe85"  # verified
"photo-1616594039964-ae9021a400a0"
# More wicker / rattan armchairs
"photo-1567016432779-094069958ea5"  # verified
"photo-1505740420928-5e560c06d30e"  # verified accent chair
"photo-1555041461-a89c8f9c9d84"
"photo-1530018603906-dabd0c5bedd9"
# Dining
"photo-1616486338812-3dadae4b1823"
"photo-1618220179428-22d0cbd5e658"
"photo-1577140917170-285929fb55b7"  # verified
# Outdoor rattan
"photo-1616627784592-29e2e1c0d0c1"
"photo-1618220179428-22d0cbd5e658"
# Woven pendants / lighting
"photo-1517991104123-1d56a6e81ed9"  # verified
"photo-1513506003901-1e6a229e2d15"  # verified
"photo-1530021232320-687d8a3c1d4d"
"photo-1567608181570-3dce38f8a08e"
"photo-1565814329452-e1b4510250c6"
# Wood workshop
"photo-1538688525198-9b88f6f53126"  # verified
"photo-1503602642458-232111445657"  # verified
# Wood interiors
"photo-1586023492125-27b2c045efd7"  # verified
"photo-1493663284031-b7e3aefcae8e"  # verified
"photo-1534126545691-039c7d70e2e1"
"photo-1583845112203-29329902332e"  # verified
"photo-1616594039964-ae9021a400a0"  # verified
"photo-1505691938895-1758d3c3d1e5"
"photo-1558997519-83ea9252edf8"  # verified cabinet
"photo-1556909212-d5b604d0c90d"
"photo-1540574163026-643ea20ade25"  # verified sectional
"photo-1503602642458-232111445658"
"photo-1531973576160-7125cd663d86"  # verified office
"photo-1516455590571-18256e5bb9ff"  # verified entrance
"photo-1600585154340-be6161a56a47"
"photo-1530603907829-659ab1b0b8b9"
"photo-1532372320572-cda25697a8c3"
"photo-1594620302200-9a76223b8f3a"
"photo-1524758631624-e2822e3046a7"
"photo-1484101403633-562f87bdc115"
"photo-1567608181570-3dce38f8a08e"
# Try a wider net
"photo-1581090700227-1e8e3b3e9c0f"
"photo-1581090700227-1e8e3b3e9c0d"
"photo-1581090700227-1e8e3b3e9c0e"
"photo-1581090700227-1e8e3b3e9c10"
"photo-1581090700227-1e8e3b3e9c11"
"photo-1581090700227-1e8e3b3e9c12"
"photo-1581090700227-1e8e3b3e9c13"
"photo-1581090700227-1e8e3b3e9c14"
"photo-1581090700227-1e8e3b3e9c15"
"photo-1616594039964-ae9021a400a0"
"photo-1600585154340-be6161a56a47"
"photo-1600585154340-be6161a56a48"
"photo-1600585154340-be6161a56a49"
"photo-1618220179428-22d0cbd5e658"
"photo-1618220179428-22d0cbd5e659"
"photo-1618220179428-22d0cbd5e660"
"photo-1618221195710-ddbecb78c5f9"
"photo-1618221195710-ddbecb78c5fa"
"photo-1618221195710-ddbecb78c5fb"
# Try furniture-relevant
"photo-1567538096630-e0c55bd6371c"
"photo-1567538096630-e0c55bd6371d"
"photo-1567538096630-e0c55bd6371e"
"photo-1567538096630-e0c55bd6371f"
"photo-1616594039964-ae9021a400a0"
"photo-1505691938895-1758d3c3d1e5"
"photo-1505691938895-1758d3c3d1e6"
"photo-1556228471-0f5cbb7b5f7f"
"photo-1556228471-0f5cbb7b5f7g"
"photo-1556228471-0f5cbb7b5f7h"
# Woven / cane
"photo-1601584115100-2c65c8e9c108"
"photo-1601584115100-2c65c8e9c109"
"photo-1601584115100-2c65c8e9c10a"
"photo-1601584115100-2c65c8e9c10b"
"photo-1601584115100-2c65c8e9c10c"
"photo-1601584115100-2c65c8e9c10d"
)

echo "${CANDIDATES[@]}" | tr ' ' '\n' | sort -u | while read id; do
  url="https://images.unsplash.com/${id}?w=80&auto=format&fit=crop&q=50"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [ "$status" = "200" ]; then
    echo "200  $id"
  fi
done