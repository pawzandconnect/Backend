# ==============================
# 1️⃣  Base builder stage
# ==============================
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only dependency files first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install all deps (including dev) for build
RUN pnpm install --frozen-lockfile

# Copy schema for Prisma
COPY prisma ./prisma

# Generate Prisma client for type safety during build
RUN npx prisma generate

# Copy the rest of the source
COPY . .

# Build Nest app -> dist/
RUN pnpm build


# ==============================
# 2️⃣  Runtime stage (slim)
# ==============================
FROM node:18-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency manifests and install only production deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy only built artifacts from builder
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/generated ./generated

# Expose the app port (change if needed)
EXPOSE 5675

# Deploy pending migrations, then start app
CMD pnpm prisma migrate deploy && pnpm start:prod
