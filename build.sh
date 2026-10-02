#!/usr/bin/env bash
# ============================================================
# WOODWAVE HOME — Static site build script
# ============================================================
# Rebuilds the static site into ./out
# Requires Node.js >= 18 + bun (or npm) — only run if you
# want to rebuild. The repo already ships ./out pre-built.
# ============================================================
set -u
cd "$(dirname "$0")"

if command -v bun >/dev/null 2>&1; then
  echo "Using bun..."
  bun install
  bun run build
elif command -v npm >/dev/null 2>&1; then
  echo "Using npm..."
  npm install
  npm run build
else
  echo "Error: neither bun nor npm is installed."
  echo "Install one of them, or just use ./serve.sh to serve the pre-built ./out directory."
  exit 1
fi

echo ""
echo "✓ Static site built into ./out"
echo "  Run ./serve.sh to serve it on http://0.0.0.0:8080"
