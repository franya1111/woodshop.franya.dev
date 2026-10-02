#!/usr/bin/env bash
# Test more furniture photo IDs to find substitutes
set -u

CANDIDATES=(
# sofas
"photo-1493663284031-b7e3aefcae8e"           # interior with couch
"photo-1540574163026-643ea20ade25"           # sectional sofa (verified)
"photo-1567016432779-094069958ea5"           # lounge chair
"photo-1579722349440-3e6f8d4f9d4e"           # alt couch
"photo-1616627784592-29e2e1c0d0c1"           # couch
"photo-1581433002961-3e4f9f2f5f4f"           # couch interior
"photo-1524758631624-e2822e3046a7"           # couch
# coffee tables / side tables
"photo-1530018603906-dabd0c5bedd9"           # round coffee table (already 404)
"photo-1532372320572-cda25697a8c3"           # sideboard (already 404)
"photo-1592078612083-7647e1c0f9c1"           # coffee table
"photo-1567608181570-3dce38f8a08e"           # wood table
"photo-1534126545691-039c7d70e2e1"           # wood round table
"photo-1538688525198-9b88f6f53126"           # workshop (already 200)
# sideboards / bookshelf / cabinets
"photo-1530603907829-659ab1b0b8b9"           # sideboard
"photo-1594620302200-9a76223b8f3a"           # bookshelf
"photo-1598300042247-d088f8ab3a91"           # wood dining chair (verified)
# floor lamps / pendant lights
"photo-1517991104123-1d56a6e81ed9"           # pendant (verified)
"photo-1513506003901-1e6a229e2d15"           # floor lamp (verified)
"photo-1530021232320-687d8a3c1d4d"           # floor lamp
"photo-1567538096630-e0c55bd6371c"           # chair (404 earlier?)
# beds
"photo-1505693416388-ac5ce068fe85"           # wood bed (verified)
"photo-1522708323590-d24dbb6b0b8b"           # bed
"photo-1554459080-257b5f4c6f9b"           # bedroom
"photo-1522444690501-83c8ef5ca4d9"           # interior (404 earlier)
"photo-1616486338812-3dadae4b1823"           # dining (404 earlier)
# living room / interior
"photo-1586023492125-27b2c045efd7"           # interior (verified)
"photo-1493663284031-b7e3aefcae8e"           # interior (verified)
"photo-1567016432779-094069958ea5"           # chair (verified)
"photo-1583845112203-29329902332e"           # interior (verified)
"photo-1583845112200-29329902332e"           # interior (verified)
"photo-1502672023488-70e25813eb9e"           # modern living
"photo-1505691938895-1758d3c3d1e5"           # interior
"photo-1558997519-83ea9252edf8"           # cabinet (verified)
"photo-1493663284031-b7e3aefcae8e"           # couch (verified)
"photo-1594620302200-9a76223b8f3a"           # shelf
"photo-1484101403633-562f87dcd5b9"           # interior
"photo-1556228471-0f5cbb7b5f7f"           # shelf
"photo-1616594039964-ae9021a400a0"           # interior
"photo-1583845112203-29329902332e"           # interior (verified)
"photo-1502672023488-70e25813eb9e"           # couch interior
"photo-1534126545691-039c7d70e2e1"           # round table
"photo-1554459080-257b5f4c6f9b"           # bedroom
"photo-1484101403633-562f87dcd5b9"           # interior
"photo-1600585154340-be6161a56a47"           # bedroom
"photo-1556909212-d5b604d0c90d"           # interior
"photo-1530021232320-687d8a3c1d4d"           # lamp
"photo-1524758631624-e2822e3046a7"           # couch
"photo-1522708323590-d24dbb6b0b8b"           # bed
"photo-1505693416388-ac5ce068fe85"           # wood bed
"photo-1567608181570-3dce38f8a08e"           # wood table
"photo-1592078612083-7647e1c0f9c1"           # coffee table
"photo-1534126545691-039c7d70e2e1"           # wood table
"photo-1484101403633-562f87dcd5b9"           # interior
"photo-1558997519-83ea9252edf8"           # cabinet (verified)
"photo-1531973576160-7125cd663d86"           # office (verified)
"photo-1516455590571-18256e5bb9ff"           # entrance (verified)
"photo-1503602642458-232111445657"           # workshop (verified)
"photo-1530603907829-659ab1b0b8b9"           # sideboard
"photo-1598300042247-d088f8ab3a91"           # chair (verified)
"photo-1505740420928-5e560c06d30e"           # accent chair (verified)
"photo-1540574163026-643ea20ade25"           # sectional (verified)
"photo-1558997519-83ea9252edf8"           # wardrobe (verified)
"photo-1505691938895-1758d3c3d1e5"           # interior
"photo-1493663284031-b7e3aefcae8e"           # interior (verified)
"photo-1567016432779-094069958ea5"           # chair (verified)
"photo-1502672023488-70e25813eb9e"           # living
"photo-1600585154340-be6161a56a47"           # bedroom
"photo-1522708323590-d24dbb6b0b8b"           # bed
"photo-1530021232320-687d8a3c1d4d"           # lamp
"photo-1567608181570-3dce38f8a08e"           # table
"photo-1592078612083-7647e1c0f9c1"           # table
"photo-1534126545691-039c7d70e2e1"           # table
"photo-1616594039964-ae9021a400a0"           # interior
"photo-1524758631624-e2822e3046a7"           # couch
"photo-1556228471-0f5cbb7b5f7f"           # shelf
"photo-1554459080-257b5f4c6f9b"           # bedroom
"photo-1556909212-d5b604d0c90d"           # interior
"photo-1505691938895-1758d3c3d1e5"           # interior
"photo-1484101403633-562f87dcd5b9"           # interior
"photo-1579722349440-3e6f8d4f9d4e"           # couch
"photo-1616627784592-29e2e1c0d0c1"           # couch
"photo-1581433002961-3e4f9f2f5f4f"           # couch
"photo-1534126545691-039c7d70e2e1"           # table
)

for id in "${CANDIDATES[@]}"; do
  url="https://images.unsplash.com/${id}?w=80&auto=format&fit=crop&q=50"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$status  $id"
done | sort | uniq -c | head -100
