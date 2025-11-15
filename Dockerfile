# ───────────────────────────────
# Builder Stage
# ───────────────────────────────
FROM node:22-slim AS builder
RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm prisma generate
RUN pnpm build
RUN pnpm install --prod --frozen-lockfile


# ───────────────────────────────
# Runtime Stage
# ───────────────────────────────
FROM node:22-slim AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/package.json ./package.json
EXPOSE 3100
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
