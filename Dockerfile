# ==============================
# 1. Builder
# ==============================
FROM node:18 AS builder

WORKDIR /usr/src/app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma ./prisma
RUN pnpm exec prisma generate

COPY . .
RUN pnpm build


# ==============================
# 2. Runtime
# ==============================
FROM node:18 AS runner

WORKDIR /usr/src/app
ENV NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# IMPORTANT: Copy Prisma engine binaries
COPY --from=builder /usr/src/app/node_modules/.prisma /usr/src/app/node_modules/.prisma

# Copy client runtime (generated client)
COPY --from=builder /usr/src/app/generated ./generated

# Copy compiled NestJS dist
COPY --from=builder /usr/src/app/dist ./dist

# Copy schema folder (optional but recommended)
COPY --from=builder /usr/src/app/prisma ./prisma

EXPOSE 5675

CMD npx prisma migrate deploy && node dist/src/main.js
