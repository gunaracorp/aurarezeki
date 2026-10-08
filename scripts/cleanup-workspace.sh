#!/usr/bin/env bash
# Cleanup script to keep workspace small and downloadable.
# Run: bash scripts/cleanup-workspace.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "🧹 Cleaning workspace for faster download..."

# 1. Remove verification screenshots from download/
if [ -d download ]; then
  find download -type f ! -name "README.md" -delete 2>/dev/null || true
  echo "  ✓ Cleared download/ artifacts"
fi

# 2. Truncate dev.log (keep last 50 lines so server context isn't fully lost)
if [ -f dev.log ]; then
  tail -50 dev.log > dev.log.tmp && mv dev.log.tmp dev.log
  echo "  ✓ Truncated dev.log"
fi

# 3. Compact git: expire reflog + aggressive gc (removes unreachable objects)
if [ -d .git ]; then
  rm -rf .git/refs/original 2>/dev/null || true
  git reflog expire --expire=now --all >/dev/null 2>&1 || true
  git gc --prune=now --aggressive >/dev/null 2>&1 || true
  echo "  ✓ Compacted .git"
fi

echo ""
echo "✨ Done. Workspace sizes:"
du -sh --exclude=node_modules --exclude=.next --exclude=skills . 2>/dev/null || du -sh .
