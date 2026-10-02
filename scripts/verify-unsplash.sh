#!/usr/bin/env bash
# Verify Unsplash photo IDs return 200 before using them
set -u

URLS=(
"hero|photo-1502672260266-1c1ef2d9ed88"
"hero2|photo-1493663284031-b7e3aefcae8e"
"hero3|photo-1567016432779-094069958ea5"
"hero4|photo-1586023492125-27b2c045efd7"
"cat_tables|photo-1577140917170-285929fb55b7"
"cat_chairs|photo-1567016432779-094069958ea5"
"cat_sofas|photo-1555041461-a89c8f9c9d84"
"cat_beds|photo-1505693416388-ac5ce068fe85"
"cat_storage|photo-1532372320572-cda25697a8c3"
"cat_lighting|photo-1513506003901-1e6a229e2d15"
"p1|photo-1577140917170-285929fb55b7"
"p2|photo-1567016432779-094069958ea5"
"p3|photo-1555041461-a89c8f9c9d84"
"p4|photo-1505693416388-ac5ce068fe85"
"p5|photo-1532372320572-cda25697a8c3"
"p6|photo-1513506003901-1e6a229e2d15"
"p7|photo-1530018603906-dabd0c5bedd9"
"p8|photo-1567538096630-e0c55bd6371c"
"p9|photo-1517991104123-1d56a6e81ed9"
"p10|photo-1503602642458-232111445657"
"p11|photo-1512917774083-463c0238c6a8"
"p12|photo-1522708323590-d24dbb6b0b8b"
"p_diningchair|photo-1598300042247-d088f8ab3a91"
"p_accentchair|photo-1505740420928-5e560c06d30e"
"p_sectionalsofa|photo-1540574163026-643ea20ade25"
"p_leatherchair|photo-1558997519-83ea9252edf8"
"p_floorlamp|photo-1567496898669-ee935f5f847a"
"gallery1|photo-1507842217343-583778e64065"
"gallery2|photo-1616486338812-3dadae4b1823"
"gallery3|photo-1583845112203-29329902332e"
"gallery4|photo-1586023492125-27b2c045efd7"
"gallery5|photo-1513519245801-1615d6296f84"
"gallery6|photo-1531973576160-7125cd663d86"
"gallery7|photo-1522444690501-83c8ef5ca4d9"
"gallery8|photo-1516455590571-18256e5bb9ff"
"about|photo-1538688525198-9b88f6f53126"
)

for entry in "${URLS[@]}"; do
  key="${entry%%|*}"
  photo_id="${entry#*|}"
  url="https://images.unsplash.com/${photo_id}?w=200&auto=format&fit=crop&q=70"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$status  $key  $photo_id"
done
