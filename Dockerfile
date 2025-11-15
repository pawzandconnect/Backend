# Builder stage
FROM node:22-slim AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /usr/src/app

# Copy only package manager files first for caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (dev + prod) for building
RUN pnpm install

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build the NestJS app
RUN pnpm build

# Install only production dependencies
RUN pnpm install --prod

# Final image
FROM node:22-slim

# Install PM2 globally
RUN npm install -g pm2

WORKDIR /usr/src/app

# Copy necessary files from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/package.json ./

# Expose the app port
EXPOSE 3100
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start:prod"]
