FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 reactuser

COPY --from=builder /app/.output ./dist
COPY --from=builder /app/content ./content
COPY --from=builder /app/package.json ./

USER reactuser
EXPOSE 3000
ENV PORT=3000

CMD ["node", "dist/server/index.mjs"]
