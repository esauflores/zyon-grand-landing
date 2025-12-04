## Multi-stage Dockerfile for zyon-grand-landing
## - Base build stage installs dependencies and builds the Next.js app
## - Runner stage serves the built app with `next start`
## Uses Node 24 as requested

FROM node:24-slim AS deps
WORKDIR /app

# Install dependencies (including dev deps needed for build)
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps --no-audit --progress=false

# Copy source and generate Prisma client (if present), then build
COPY . .
# Generate Prisma client if schema exists
RUN if [ -f "prisma/schema.prisma" ]; then npx prisma generate; fi
# Use the direct Next.js build command inside the container to avoid any
# project-specific npm script flags (for example `--turbopack`) that may
# not be available in the container environment used by your CI/hosting.
RUN npx next build

FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only what's needed to run the app
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/public ./public
COPY --from=deps /app/prisma ./prisma

EXPOSE 3000

# Use the start script (runs `next start` per package.json)
CMD ["npm", "start"]
