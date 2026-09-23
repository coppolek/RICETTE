#!/bin/bash
# ============================================
# GialloZafferano - Setup Iniziale VPS Hostinger
# Script di configurazione server
# ============================================
# Utilizzo: sudo bash setup-vps.sh
# ============================================

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}🔧 Setup Iniziale VPS Hostinger per GialloZafferano${NC}"
echo -e "${YELLOW}=============================================${NC}\n"

# Verifica root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Esegui questo script come root (sudo)${NC}"
    exit 1
fi

# 1. Aggiornamento sistema
echo -e "${GREEN}📦 Step 1: Aggiornamento sistema...${NC}"
apt update && apt upgrade -y
echo -e "${GREEN}✅ Sistema aggiornato${NC}\n"

# 2. Installazione pacchetti essenziali
echo -e "${GREEN}📦 Step 2: Installazione pacchetti...${NC}"
apt install -y \
    nginx \
    curl \
    wget \
    git \
    unzip \
    htop \
    fail2ban \
    ufw \
    certbot \
    python3-certbot-nginx \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    gnupg \
    lsb-release
echo -e "${GREEN}✅ Pacchetti installati${NC}\n"

# 3. Installazione Node.js 20
echo -e "${GREEN}📦 Step 3: Installazione Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"
echo -e "${GREEN}✅ Node.js installato${NC}\n"

# 4. Configurazione Firewall UFW
echo -e "${GREEN}🔒 Step 4: Configurazione Firewall...${NC}"
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow http
ufw allow https
ufw allow 'Nginx Full'
echo "y" | ufw enable
ufw status
echo -e "${GREEN}✅ Firewall configurato${NC}\n"

# 5. Configurazione Fail2Ban
echo -e "${GREEN}🔒 Step 5: Configurazione Fail2Ban...${NC}"
systemctl enable fail2ban
systemctl start fail2ban
echo -e "${GREEN}✅ Fail2Ban attivo${NC}\n"

# 6. Creazione directory progetto
echo -e "${GREEN}📁 Step 6: Creazione directory progetto...${NC}"
mkdir -p /var/www/giallozafferano
mkdir -p /var/backups/giallozafferano
mkdir -p /var/log/nginx
echo -e "${GREEN}✅ Directory create${NC}\n"

# 7. Ottimizzazioni kernel
echo -e "${GREEN}⚡ Step 7: Ottimizzazioni kernel...${NC}"
cat >> /etc/sysctl.conf << 'EOF'

# === GialloZafferano Performance Tuning ===
# TCP optimization
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.core.netdev_max_backlog = 65535

# File descriptors
fs.file-max = 2097152
fs.nr_open = 2097152

# TCP keepalive
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_keepalive_intvl = 15

# TCP timestamps off for performance
net.ipv4.tcp_timestamps = 0

# Enable TCP Fast Open
net.ipv4.tcp_fastopen = 3

# Buffer sizes
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216

# Connection tracking
net.netfilter.nf_conntrack_max = 1000000
EOF

sysctl -p
echo -e "${GREEN}✅ Kernel ottimizzato${NC}\n"

# 8. Ottimizzazioni Nginx globali
echo -e "${GREEN}⚡ Step 8: Ottimizzazione Nginx...${NC}"
cat > /etc/nginx/nginx.conf << 'EOF'
user www-data;
worker_processes auto;
worker_rlimit_nofile 65535;
pid /run/nginx.pid;

events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}

http {
    # Basic
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    types_hash_max_size 2048;
    server_tokens off;
    client_max_body_size 16M;
    
    # Timeouts
    keepalive_timeout 65;
    keepalive_requests 1000;
    send_timeout 30;
    client_body_timeout 30;
    client_header_timeout 30;
    
    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for" '
                    'rt=$request_time';
    access_log /var/log/nginx/access.log main buffer=16k;
    error_log /var/log/nginx/error.log warn;
    
    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml
        application/xml+rss
        image/svg+xml;
    
    # Open file cache
    open_file_cache max=200000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;
    
    # Virtual hosts
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
EOF

nginx -t
systemctl restart nginx
echo -e "${GREEN}✅ Nginx ottimizzato${NC}\n"

# 9. Configurazione SSL (se dominio disponibile)
echo -e "${GREEN}🔒 Step 9: Configurazione SSL...${NC}"
echo -e "${YELLOW}⚠️ Per configurare SSL, esegui:${NC}"
echo -e "   certbot --nginx -d TUO-DOMINIO.it -d www.TUO-DOMINIO.it\n"

# 10. Creazione swap file
echo -e "${GREEN}💾 Step 10: Configurazione Swap...${NC}"
if [ ! -f /swapfile ]; then
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    echo -e "${GREEN}✅ Swap da 2GB configurato${NC}"
else
    echo -e "${YELLOW}⚠️ Swap già esistente${NC}"
fi

echo -e "\n${GREEN}=============================================${NC}"
echo -e "${GREEN}✅ Setup VPS completato con successo!${NC}"
echo -e "${GREEN}=============================================${NC}"
echo -e "\n${YELLOW}Prossimi passi:${NC}"
echo -e "1. Configura il DNS del dominio puntando al VPS IP"
echo -e "2. Esegui: certbot --nginx -d TUO-DOMINIO.it"
echo -e "3. Deploy l'applicazione con: ./deploy.sh"
echo -e "4. Verifica: https://TUO-DOMINIO.it"
