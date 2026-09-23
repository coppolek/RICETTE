# ============================================
# GialloZafferano - Dockerfile
# Multi-stage build per produzione
# Ottimizzato per Hostinger VPS
# ============================================

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package files per cache layer
COPY package.json package-lock.json* ./

# Installa dipendenze
RUN npm ci --only=production && npm cache clean --force

# Copia sorgente
COPY . .

# Build produzione
RUN npm run build

# Stage 2: Production con Nginx
FROM nginx:1.25-alpine AS production

# Rimuovi config default nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia config nginx ottimizzata
COPY hostinger/docker-nginx.conf /etc/nginx/conf.d/default.conf

# Copia build dal stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia file statici pubblici
COPY --from=builder /app/public/robots.txt /usr/share/nginx/html/
COPY --from=builder /app/public/sitemap.xml /usr/share/nginx/html/
COPY --from=builder /app/public/manifest.json /usr/share/nginx/html/
COPY --from=builder /app/public/favicon.svg /usr/share/nginx/html/

# Crea utente non-root per sicurezza
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nginx -u 1001 && \
    chown -R nginx:nodejs /usr/share/nginx/html && \
    chown -R nginx:nodejs /var/cache/nginx && \
    chown -R nginx:nodejs /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nodejs /var/run/nginx.pid

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1

# Esponi porta
EXPOSE 80

# Avvia nginx
CMD ["nginx", "-g", "daemon off;"]
