# 🔧 Fix: "Docker project not found"

## ❌ Problema
Hostinger VPS mostra l'errore: **"Docker project not found"**

## ✅ Soluzione

Il progetto ora include tutti i file Docker necessari. Segui questi passaggi:

---

## 📋 File Docker Creati

```
✅ Dockerfile                    # Multi-stage build ottimizzato
✅ docker-compose.yml           # Orchestrazione servizi
✅ .dockerignore                # File esclusi dal build
✅ .hostinger.yml               # Config Hostinger (root)
✅ hostinger.yml                # Config Hostinger (dettagliata)
✅ hostinger/docker-nginx.conf  # Nginx config per Docker
```

---

## 🚀 Come Risolvere

### Opzione 1: Push su GitHub/GitLab (Consigliato)

1. **Inizializza Git**
   ```bash
   git init
   git add .
   git commit -m "Add Docker configuration for Hostinger VPS"
   ```

2. **Crea repository remoto**
   ```bash
   git remote add origin https://github.com/tuo-username/giallozafferano.git
   git push -u origin main
   ```

3. **Configura su Hostinger**
   - Vai su Hostinger → VPS → Applicazioni
   - Clicca "Nuova Applicazione"
   - Seleziona "Docker"
   - Inserisci URL del repository
   - Hostinger rileverà automaticamente `Dockerfile` e `docker-compose.yml`

### Opzione 2: Deploy Manuale via SSH

```bash
# 1. Collegati al VPS
ssh root@YOUR_VPS_IP

# 2. Installa Docker (se non presente)
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 3. Installa Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 4. Clona il progetto
cd /var/www
git clone https://github.com/tuo-username/giallozafferano.git
cd giallozafferano

# 5. Build e avvio
docker-compose up -d --build

# 6. Verifica
docker-compose ps
curl http://localhost/health
```

### Opzione 3: Upload File Manualmente

Se non vuoi usare Git:

```bash
# Dal tuo computer
scp Dockerfile root@YOUR_VPS_IP:/var/www/giallozafferano/
scp docker-compose.yml root@YOUR_VPS_IP:/var/www/giallozafferano/
scp -r . hostinger/ public/ src/ package.json package-lock.json index.html root@YOUR_VPS_IP:/var/www/giallozafferano/

# Sul VPS
ssh root@YOUR_VPS_IP
cd /var/www/giallozafferano
docker-compose up -d --build
```

---

## 🔍 Verifica File Docker

Assicurati che questi file siano presenti nella root del progetto:

```bash
ls -la | grep -E "Dockerfile|docker-compose|hostinger"
```

Dovresti vedere:
```
✅ Dockerfile
✅ docker-compose.yml
✅ .hostinger.yml
✅ hostinger.yml
✅ hostinger/
```

---

## ⚙️ Configurazione Hostinger

### Nel Pannello Hostinger:

1. **VPS** → Seleziona il tuo VPS
2. **Applicazioni** → Clicca "Nuova Applicazione"
3. **Tipo**: Seleziona "Docker"
4. **Repository**: Inserisci URL del tuo repository
5. **Branch**: `main` (o `master`)
6. **Auto Deploy**: Attiva se vuoi deploy automatico su push

### Variabili d'Ambiente (Opzionale)
```
NODE_ENV=production
TZ=Europe/Rome
```

---

## 🧪 Test Locale con Docker

Prima di fare il deploy, testa localmente:

```bash
# Build
docker build -t giallozafferano:test .

# Avvia
docker run -d -p 8080:80 --name gz-test giallozafferano:test

# Test
curl http://localhost:8080/health
# Dovrebbe rispondere: OK

# Ferma
docker stop gz-test
docker rm gz-test
```

---

## 🆘 Troubleshooting

### Errore: "Cannot connect to Docker daemon"
```bash
# Avvia Docker
sudo systemctl start docker
sudo systemctl enable docker
```

### Errore: "port is already allocated"
```bash
# Modifica porta in docker-compose.yml
ports:
  - "8080:80"  # Usa porta 8080 invece di 80
```

### Errore: "build failed"
```bash
# Verifica Dockerfile
docker build -t test .

# Vedi errori dettagliati
docker build --progress=plain -t test .
```

### Hostinger non rileva Docker
**Verifica**:
- ✅ `Dockerfile` nella root del repository
- ✅ `docker-compose.yml` nella root
- ✅ Repository è pubblico o hai configurato le credenziali
- ✅ Branch corretta (main/master)

---

## 📊 Comandi Utili Post-Deploy

```bash
# Vedi log in tempo reale
docker-compose logs -f

# Restart container
docker-compose restart

# Aggiorna applicazione
docker-compose pull
docker-compose up -d --build

# Ferma tutto
docker-compose down

# Pulizia
docker system prune -a
```

---

## ✅ Checklist Deploy

- [ ] File Docker presenti nella root
- [ ] Repository creato su GitHub/GitLab
- [ ] Codice pushato sul repository
- [ ] Hostinger configurato con URL repository
- [ ] DNS configurato (record A → IP VPS)
- [ ] SSL installato (Let's Encrypt)
- [ ] Test effettuato: `curl https://tuodominio.it/health`

---

## 📞 Supporto

Se il problema persiste:
1. Verifica che tutti i file Docker siano nel repository
2. Controlla i log su Hostinger
3. Prova il deploy manuale via SSH
4. Contatta il supporto Hostinger

**Hostinger Support**: https://www.hostinger.com/support
