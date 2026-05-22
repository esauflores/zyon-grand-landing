#!/bin/sh
set -e

if [ -f "prisma/schema.prisma" ]; then
  echo "Running Prisma migrations..."
  npx prisma migrate deploy
fi

exec "$@"
