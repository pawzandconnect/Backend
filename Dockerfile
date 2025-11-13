# ==============================
# 1️⃣  Base builder stage
# ==============================
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma ./prisma
RUN pnpm exec prisma generate

COPY . .
RUN pnpm build


# ==============================
# 2️⃣  Runtime stage (slim)
# ==============================
FROM node:18-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production

# Just install production deps using pnpm logic
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy build artifacts
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/generated ./generated

EXPOSE 5675

# Run migrations with npx (no pnpm needed at runtime)
CMD npx prisma migrate deploy && node dist/src/main.js
