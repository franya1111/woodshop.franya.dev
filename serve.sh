#!/usr/bin/env bash
# ============================================================
# WOODWAVE HOME — Static site runner
# ============================================================
# Serves the pre-built static site from ./out on port 8080
# Uses Python 3 (built-in on most Linux distros incl. Linux Mint)
# No need to install Node.js, Bun, or anything else.
# ============================================================
set -u

PORT="${PORT:-8080}"
DIR="$(cd "$(dirname "$0")" && pwd)/out"

if [ ! -d "$DIR" ]; then
  echo "Error: '$DIR' not found."
  echo "Run 'bash build.sh' first to build the static site."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: python3 is required but not installed."
  echo "On Debian/Ubuntu/Linux Mint, install with: sudo apt install python3"
  exit 1
fi

echo "──────────────────────────────────────────────────────────"
echo "  WOODWAVE HOME — serving on http://0.0.0.0:${PORT}"
echo "  Static directory: ${DIR}"
echo "  Press Ctrl+C to stop."
echo "──────────────────────────────────────────────────────────"

cd "$DIR"
exec python3 -m http.server "$PORT" --bind 0.0.0.0
