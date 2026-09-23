# 🚀 Guida Rapida Deploy - Hostinger VPS

## ⚡ Deploy in 3 Step

### Step 1: Setup Server (una volta sola)
```bash
# Sul tuo VPS Hostinger
ssh root@YOUR_VPS_IP
sudo bash setup-vps.sh
```

### Step 2: Configura Dominio e SSL
```bash
# Sul VPS
certbot --nginx -d giallozafferano.it -d www.giallozafferano.it
```

### Step 3: Deploy
```bash
# Dal tuo computer
chmod +x deploy.sh
./deploy.sh
```

---

## 📋 Checklist Pre-Deploy

- [ ] VPS Hostinger attiva
- [ ] DNS configurato (A record → IP del VPS)
- [ ] SSH key configurata
- [ ] Dominio verificato
- [ ] SSL installato (Let's Encrypt)
- [ ] Firewall attivo (UFW)
- [ ] Node.js installato
- [ ] Nginx configurato

---

## 🔧 Comandi Utili

### Verifica stato server
```bash
systemctl status nginx
ufw status
htop
```

### Vedi log in tempo reale
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Pulisci cache
```bash
rm -rf /var/cache/nginx/*
systemctl reload nginx
```

### Backup manuale
```bash
cp -r /var/www/giallozafferano/dist /var/backups/giallozafferano/backup_$(date +%Y%m%d)
```

### Rollback
```bash
cp -r /var/backups/giallozafferano/backup_YYYYMMDD/* /var/www/giallozafferano/dist/
systemctl reload nginx
```

---

## 📊 Performance Targets

| Metrica | Target | Come verificare |
|---------|--------|-----------------|
| Lighthouse Score | 90+ | Chrome DevTools |
| LCP | < 2.5s | webpagetest.org |
| TTFB | < 200ms | curl -w '%{time_starttransfer}' |
| Page Size | < 2MB | Chrome DevTools |
| Requests | < 30 | Chrome DevTools |

---

## 🆘 Troubleshooting Rapido

### Sito non carica
```bash
# Verifica nginx
nginx -t && systemctl restart nginx

# Verifica firewall
ufw allow 80 && ufw allow 443

# Verifica permessi
chown -R www-data:www-data /var/www/giallozafferano
chmod -R 755 /var/www/giallozafferano
```

### SSL errore
```bash
# Rinnova certificato
certbot renew --force-renewal

# Verifica config
nginx -t
```

### Performance lenta
```bash
# Verifica risorse
htop
df -h
free -m

# Pulisci
apt autoremove && apt clean
rm -rf /var/log/nginx/*.gz
```

---

## 📞 Contatti Hostinger

- Support: https://www.hostinger.com/support
- Docs: https://docs.hostinger.com
- Status: https://status.hostinger.com
