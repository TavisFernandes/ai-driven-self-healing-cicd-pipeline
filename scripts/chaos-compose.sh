#!/usr/bin/env bash
# Chaos: randomly stop/restart a service or add delay (simulated by restart storm).
# Requires: docker compose, project root as cwd.
# Run: bash scripts/chaos-compose.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SERVICES=(backend frontend ml-service)
TARGET="${SERVICES[$RANDOM % ${#SERVICES[@]}]}"

echo "Chaos: restarting $TARGET (simulated failure / delay)..."
docker compose restart "$TARGET"
sleep 4
echo "Chaos: checking health..."
curl -sf "http://localhost:5000/health" >/dev/null && echo "Backend recovered." || echo "Backend still down — run docker compose up -d"
