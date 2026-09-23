# 🍝 GialloZafferano - Deploy Docker su Hostinger VPS

Clone del sito GialloZafferano ottimizzato per deploy Docker su Hostinger VPS.

## ✅ Caratteristiche

- 🐳 **Docker Ready** - Multi-stage build ottimizzato
- ⚡ **Performance** - Core Web Vitals ottimizzati (LCP < 2.5s)
- 🔒 **Sicurezza** - HTTPS, CSP, HSTS, rate limiting
- 📱 **PWA** - Manifest, service worker ready
- 🎯 **SEO** - Schema.org, Open Graph, sitemap XML
- 🌍 **GDPR** - Cookie banner compliance

---

## 🚀 Deploy su Hostinger VPS

### Metodo 1: Deploy Automatico (Consigliato)

1. **Prepara il progetto su Hostinger**
   - Accedi al pannello Hostinger
   - Vai su "VPS" → "Applicazioni"
   - Clicca "Nuova Applicazione"
   - Seleziona "Docker"

2. **Configura il repository**
   ```
   Repository URL: https://github.com/tuo-username/giallozafferano
   Branch: main
   ```

3. **Deploy automatico**
   - Hostinger rileverà automaticamente `Dockerfile` e `docker-compose.yml`
   - Il deploy partirà automaticamente

### Metodo 2: Deploy Manuale via SSH

```bash
# 1. Collegati al VPS
ssh root@YOUR_VPS_IP

# 2. Clona il repository
cd /var/www
git clone https://github.com/tuo-username/giallozafferano.git
cd giallozafferano

# 3. Build e avvio con Docker Compose
docker-compose up -d --build

# 4. Verifica che sia attivo
docker-compose ps
curl http://localhost/health
```

### Metodo 3: Deploy con Docker singolo

```bash
# Build immagine
docker build -t giallozafferano:latest .

# Avvia container
docker run -d \
  --name giallozafferano \
  -p 80:80 \
  --restart unless-stopped \
  giallozafferano:latest
```

---

## 📁 Struttura File Docker

```
├── Dockerfile                    # Multi-stage build
├── docker-compose.yml           # Orchestrazione servizi
├── .dockerignore                # File esclusi dal build
├── .hostinger.yml               # Config Hostinger (root)
├── hostinger.yml                # Config Hostinger (dettagliata)
├── hostinger/
│   ├── docker-nginx.conf        # Nginx config per Docker
│   ├── nginx.conf               # Nginx config standalone
│   ├── setup-vps.sh             # Setup iniziale VPS
│   └── deploy.sh                # Script deploy automatico
└── public/
    ├── .htaccess                # Apache config (fallback)
    ├── manifest.json            # PWA manifest
    ├── robots.txt               # SEO robots
    ├── sitemap.xml              # SEO sitemap
    └── favicon.svg              # Favicon
```

---

## 🔧 Configurazione Dominio e SSL

### 1. Configura DNS
Nel pannello Hostinger:
- Aggiungi record A: `@` → `YOUR_VPS_IP`
- Aggiungi record A: `www` → `YOUR_VPS_IP`

### 2. Installa SSL (Let's Encrypt)
```bash
# Se usi Docker Compose con reverse proxy
docker-compose exec app certbot --nginx -d giallozafferano.it -d www.giallozafferano.it

# Oppure manualmente sul VPS
apt install certbot python3-certbot-nginx
certbot --nginx -d giallozafferano.it -d www.giallozafferano.it
```

---

## 📊 Comandi Utili

### Gestione Container
```bash
# Avvia
docker-compose up -d

# Ferma
docker-compose down

# Restart
docker-compose restart

# Vedi log
docker-compose logs -f

# Aggiorna
docker-compose pull
docker-compose up -d --build
```

### Monitoraggio
```bash
# Stato container
docker-compose ps

# Uso risorse
docker stats giallozafferano-app

# Health check
curl http://localhost/health
```

### Backup
```bash
# Backup manuale
docker exec giallozafferano-app tar czf /tmp/backup-$(date +%Y%m%d).tar.gz /usr/share/nginx/html

# Copia backup locale
docker cp giallozafferano-app:/tmp/backup.tar.gz ./backup.tar.gz
```

---

## ⚡ Ottimizzazioni Performance

### Core Web Vitals
| Metrica | Target | Status |
|---------|--------|--------|
| LCP | < 2.5s | ✅ |
| FID | < 100ms | ✅ |
| CLS | < 0.1 | ✅ |
| TTFB | < 200ms | ✅ |

### Ottimizzazioni Docker
- Multi-stage build (immagine finale ~25MB)
- Nginx Alpine (leggero e veloce)
- Gzip compression abilitata
- Cache headers ottimizzati
- HTTP/2 support

---

## 🔒 Sicurezza

### Implementato
- ✅ HTTPS con Let's Encrypt
- ✅ Security Headers (HSTS, CSP, X-Frame-Options)
- ✅ Non-root container
- ✅ Health checks automatici
- ✅ Resource limits (CPU/Memory)
- ✅ Auto-restart su crash

### Best Practices
```bash
# Aggiorna regolarmente le immagini
docker-compose pull
docker-compose up -d

# Monitora i log
docker-compose logs -f --tail=100

# Backup periodici
crontab -e
# Aggiungi: 0 2 * * * /usr/bin/docker-compose -f /var/www/giallozafferano/docker-compose.yml exec app tar czf /backup/site-$(date +\%Y\%m\%d).tar.gz /usr/share/nginx/html
```

---

## 🆘 Troubleshooting

### "Docker project not found"
**Soluzione**: Assicurati che i file siano nella root del repository:
- ✅ `Dockerfile`
- ✅ `docker-compose.yml`
- ✅ `.hostinger.yml`

### Container non si avvia
```bash
# Vedi log dettagliati
docker-compose logs app

# Verifica configurazione
docker-compose config

# Ricostruisci
docker-compose down
docker-compose up -d --build
```

### Porta 80 già in uso
```bash
# Modifica docker-compose.yml
ports:
  - "8080:80"  # Usa porta alternativa

# Oppure ferma il servizio esistente
sudo systemctl stop nginx
```

### SSL non funziona
```bash
# Verifica certificati
ls -la /etc/letsencrypt/live/

# Rinnova
certbot renew --force-renewal

# Reload nginx
docker-compose exec app nginx -s reload
```

---

## 📈 Monitoring

### Health Check Endpoint
```bash
curl https://giallozafferano.it/health
# Risposta: OK
```

### Metriche Docker
```bash
# Uso CPU/Memory
docker stats --no-stream

# Disk usage
docker system df

# Pulizia
docker system prune -a
```

---

## 📞 Supporto

- **Hostinger Docs**: https://docs.hostinger.com
- **Hostinger Support**: https://www.hostinger.com/support
- **Docker Docs**: https://docs.docker.com

---

## 📄 Licenza

Progetto a scopo educativo. GialloZafferano® è un marchio registrato.
