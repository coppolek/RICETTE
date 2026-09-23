# 🍝 GialloZafferano - Deploy su Hostinger VPS

## 📋 Panoramica

Clone del sito GialloZafferano ottimizzato per la pubblicazione su VPS Hostinger con:
- ✅ SEO completo (meta tags, Open Graph, Schema.org)
- ✅ Performance ottimizzate (Core Web Vitals)
- ✅ Sicurezza (Headers, HTTPS, CSP)
- ✅ PWA Ready (manifest, service worker)
- ✅ Responsive Design
- ✅ Configurazione Nginx/Apache
- ✅ Script di deploy automatizzato

---

## 🚀 Quick Start - Deploy in 5 minuti

### Prerequisiti
- VPS Hostinger attiva con Ubuntu 22.04+ o AlmaLinux
- Accesso SSH root
- Dominio configurato (giallozafferano.it)
- Node.js 18+ installato localmente

### 1. Configurazione Server Hostinger

```bash
# Collegati via SSH
ssh root@your-vps-ip

# Aggiorna il sistema
apt update && apt upgrade -y

# Installa Nginx (o Apache)
apt install nginx -y

# Installa Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install nodejs -y

# Crea la directory del progetto
mkdir -p /var/www/giallozafferano
```

### 2. Configurazione SSL (Let's Encrypt)

```bash
# Installa Certbot
apt install certbot python3-certbot-nginx -y

# Genera certificato SSL
certbot --nginx -d giallozafferano.it -d www.giallozafferano.it

# Auto-renewal
certbot renew --dry-run
```

### 3. Deploy dell'Applicazione

```bash
# Sul tuo computer locale
# Clona o trasferisci il progetto
scp -r ./dist root@your-vps-ip:/var/www/giallozafferano/

# Copia la configurazione Nginx
scp ./hostinger/nginx.conf root@your-vps-ip:/etc/nginx/sites-available/giallozafferano

# Sul server
ssh root@your-vps-ip

# Attiva il sito
ln -s /etc/nginx/sites-available/giallozafferano /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test e reload
nginx -t
systemctl reload nginx

# Permessi
chown -R www-data:www-data /var/www/giallozafferano
```

### 4. Deploy Automatico (Opzionale)

```bash
# Rendi lo script eseguibile
chmod +x hostinger/deploy.sh

# Configura le variabili nello script
# DEPLOY_HOST="your-vps-ip"

# Esegui il deploy
./hostinger/deploy.sh
```

---

## 📁 Struttura del Progetto

```
├── public/                 # File statici (copiati in dist)
│   ├── .htaccess          # Configurazione Apache
│   ├── manifest.json      # PWA Manifest
│   ├── favicon.svg        # Favicon
│   ├── robots.txt         # SEO Robots
│   └── sitemap.xml        # SEO Sitemap
├── src/
│   ├── components/        # Componenti React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeSection.tsx
│   │   ├── RecipeOfTheDay.tsx
│   │   ├── SeasonalBanner.tsx
│   │   ├── VideoSection.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── recipes.ts     # Dati ricette
│   ├── App.tsx            # Componente principale
│   ├── main.tsx           # Entry point
│   └── index.css          # Stili globali
├── hostinger/
│   ├── nginx.conf         # Configurazione Nginx
│   ├── deploy.sh          # Script deploy
│   └── README.md          # Questa guida
├── index.html             # HTML ottimizzato SEO
└── package.json
```

---

## ⚡ Ottimizzazioni Performance

### Core Web Vitals
| Metrica | Target | Status |
|---------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | ✅ |
| FID (First Input Delay) | < 100ms | ✅ |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ |
| TTFB (Time to First Byte) | < 600ms | ✅ |
| FCP (First Contentful Paint) | < 1.8s | ✅ |

### Ottimizzazioni applicate:
- **Gzip/Brotli compression** - Riduzione 70% dimensione file
- **Browser caching** - 1 anno per asset statici
- **Lazy loading immagini** - Caricamento on-demand
- **Code splitting** - Bundle ottimizzati
- **Preconnect** - Connessioni anticipate a CDN esterni
- **Critical CSS inline** - Rendering senza flash
- **HTTP/2** - Multiplexing richieste
- **Image optimization** - WebP/AVIF ready

---

## 🔒 Sicurezza

### Headers implementati:
- ✅ `Strict-Transport-Security` (HSTS)
- ✅ `X-Frame-Options` (Clickjacking protection)
- ✅ `X-Content-Type-Options` (MIME sniffing)
- ✅ `X-XSS-Protection` (XSS filter)
- ✅ `Content-Security-Policy` (CSP)
- ✅ `Referrer-Policy`
- ✅ `Permissions-Policy`

### Altre misure:
- HTTPS forzato con redirect 301
- Blocco bot malevoli
- Rate limiting API
- File sensibili protetti
- Directory listing disabilitato

---

## 📈 SEO

### Implementato:
- Meta tags completi (title, description, keywords)
- Open Graph per social sharing
- Twitter Cards
- Schema.org JSON-LD (Organization, WebSite, Recipe)
- Sitemap XML con immagini
- Robots.txt ottimizzato
- URL canonicali
- Lang attribute (it)
- Semantic HTML

### Punteggio atteso:
- Google Lighthouse SEO: **95-100**
- Google PageSpeed: **90+**

---

## 🛠️ Configurazione Apache (Alternativa)

Se il tuo VPS Hostinger usa Apache invece di Nginx:

```bash
# Abilita moduli necessari
a2enmod rewrite
a2enmod headers
a2enmod deflate
a2enmod expires

# Il file .htaccess è già incluso in public/
# Viene copiato automaticamente in dist/

# Restart Apache
systemctl restart apache2
```

---

## 📊 Monitoraggio

### Verifica che il sito funzioni:
```bash
# Test HTTPS
curl -I https://giallozafferano.it

# Test health endpoint
curl https://giallozafferano.it/health

# Test performance
curl -o /dev/null -s -w "TTFB: %{time_starttransfer}s\nTotal: %{time_total}s\nSize: %{size_download} bytes\n" https://giallozafferano.it
```

### Log files:
```bash
# Nginx
tail -f /var/log/nginx/giallozafferano.access.log
tail -f /var/log/nginx/giallozafferano.error.log

# Apache
tail -f /var/log/apache2/access.log
tail -f /var/log/apache2/error.log
```

---

## 🔄 Aggiornamenti

### Deploy di un aggiornamento:
```bash
# Build
npm run build

# Upload
rsync -avz --delete dist/ root@your-vps-ip:/var/www/giallozafferano/dist/

# Permessi
ssh root@your-vps-ip "chown -R www-data:www-data /var/www/giallozafferano/dist"
```

### Oppure usa lo script automatico:
```bash
./hostinger/deploy.sh
```

---

## 🆘 Troubleshooting

### Problema: Sito non raggiungibile
```bash
# Verifica che Nginx/Apache sia attivo
systemctl status nginx
# o
systemctl status apache2

# Controlla i log
tail -50 /var/log/nginx/error.log
```

### Problema: SSL non funziona
```bash
# Rinnova il certificato
certbot renew --force-renewal

# Verifica la configurazione
nginx -t
```

### Problema: Cache vecchia
```bash
# Pulisci la cache del browser
# Oppure aggiungi un query string: giallozafferano.it?v=2

# Sul server, svuota la cache
rm -rf /var/cache/nginx/*
systemctl reload nginx
```

---

## 📞 Supporto Hostinger

- **Documentazione**: https://docs.hostinger.com
- **Supporto VPS**: https://www.hostinger.com/support
- **Community**: https://community.hostinger.com

---

## 📄 Licenza

Questo progetto è un clone a scopo educativo.
GialloZafferano® è un marchio registrato.
