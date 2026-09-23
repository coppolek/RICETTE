#!/bin/bash
# ============================================
# GialloZafferano - Deploy Script per Hostinger VPS
# ============================================
# Utilizzo: ./deploy.sh
# Prerequisiti: SSH configurato, Node.js installato
# ============================================

set -e

# Configurazione
DOMAIN="giallozafferano.it"
DEPLOY_USER="root"
DEPLOY_HOST="your-vps-ip"
DEPLOY_PATH="/var/www/giallozafferano"
BACKUP_PATH="/var/backups/giallozafferano"
NODE_VERSION="20"

# Colori output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🚀 Deploy GialloZafferano - Inizio...${NC}"

# 1. Build locale
echo -e "\n${GREEN}📦 Step 1: Build produzione...${NC}"
npm run build

# 2. Verifica build
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Errore: Cartella dist non trovata!${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build completata con successo${NC}"

# 3. Backup remoto
echo -e "\n${GREEN}🔄 Step 2: Backup versione precedente...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "
    mkdir -p ${BACKUP_PATH}
    if [ -d '${DEPLOY_PATH}/dist' ]; then
        BACKUP_NAME=\$(date +%Y%m%d_%H%M%S)
        cp -r ${DEPLOY_PATH}/dist ${BACKUP_PATH}/backup_\${BACKUP_NAME}
        echo 'Backup creato: backup_\${BACKUP_NAME}'
        # Mantieni solo gli ultimi 5 backup
        cd ${BACKUP_PATH} && ls -dt backup_* | tail -n +6 | xargs -r rm -rf
    fi
"
echo -e "${GREEN}✅ Backup completato${NC}"

# 4. Upload file
echo -e "\n${GREEN}📤 Step 3: Upload su server...${NC}"
rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='.env' \
    dist/ \
    ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/dist/

# Upload file di configurazione
rsync -avz \
    public/.htaccess \
    ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/dist/.htaccess

echo -e "${GREEN}✅ Upload completato${NC}"

# 5. Permessi file
echo -e "\n${GREEN}🔐 Step 4: Configurazione permessi...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "
    chown -R www-data:www-data ${DEPLOY_PATH}/dist
    find ${DEPLOY_PATH}/dist -type d -exec chmod 755 {} \;
    find ${DEPLOY_PATH}/dist -type f -exec chmod 644 {} \;
"
echo -e "${GREEN}✅ Permessi configurati${NC}"

# 6. Verifica configurazione Nginx
echo -e "\n${GREEN}⚙️ Step 5: Verifica configurazione server...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "
    # Test nginx config
    nginx -t 2>/dev/null && echo 'Nginx config OK' || echo 'Apache detected'
    
    # Reload web server
    if command -v nginx &> /dev/null; then
        systemctl reload nginx
        echo 'Nginx ricaricato'
    elif command -v apache2 &> /dev/null; then
        systemctl reload apache2
        echo 'Apache ricaricato'
    fi
"
echo -e "${GREEN}✅ Server aggiornato${NC}"

# 7. Pulizia cache
echo -e "\n${GREEN}🧹 Step 6: Pulizia cache...${NC}"
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "
    # Pulizia cache OPCache se PHP è installato
    if command -v php &> /dev/null; then
        php -r 'if(function_exists("opcache_reset")) opcache_reset();' 2>/dev/null || true
    fi
    
    # Pulizia file temporanei
    find /tmp -name 'giallozafferano*' -mtime +7 -delete 2>/dev/null || true
"
echo -e "${GREEN}✅ Cache pulita${NC}"

# 8. Health check
echo -e "\n${GREEN}🏥 Step 7: Health check...${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://${DOMAIN}/health 2>/dev/null || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Health check: OK (HTTP ${HTTP_STATUS})${NC}"
else
    echo -e "${YELLOW}⚠️ Health check: HTTP ${HTTP_STATUS} - Verifica manuale necessaria${NC}"
fi

# 9. Performance test
echo -e "\n${GREEN}📊 Step 8: Verifica performance...${NC}"
echo "Verifica dimensioni build:"
du -sh dist/
echo ""
echo "File più grandi:"
find dist/ -type f -exec du -h {} + | sort -rh | head -5

echo -e "\n${GREEN}============================================${NC}"
echo -e "${GREEN}🎉 Deploy completato con successo!${NC}"
echo -e "${GREEN}🌐 Sito: https://${DOMAIN}${NC}"
echo -e "${GREEN}============================================${NC}"
