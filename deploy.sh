#!/usr/bin/env bash
set -euo pipefail

echo "=== Tacit Production Deployment ==="
cd "$(dirname "$0")"

echo "1. Pulling latest commits from git..."
git pull origin main

echo "2. Rebuilding and starting tacit-web container..."
docker compose -p tacit up -d --build

echo "3. Waiting for container to report healthy..."
sleep 5
for i in {1..12}; do
  if docker inspect --format='{{json .State.Health.Status}}' tacit-web | grep -q '"healthy"'; then
    echo "Tacit-web container is healthy!"
    break
  fi
  echo "Waiting for health check... ($i/12)"
  sleep 3
done

echo "=== Deployment Completed Successfully ==="
