# Tacit Exchange

Production web platform for **Tacit** (legal entity: **Inception2c LLC d/b/a Tacit**), a specialized data broker licensing de-identified company work records (tickets, ledgers, code history, documents, domain-system records) to AI labs for model training.

---

## Tech Stack & Architecture

- **Framework**: Next.js (App Router, standalone output mode, React 19, TypeScript)
- **Styling**: Vanilla CSS with customized design system tokens (`--paper`, `--sheet`, `--ink`, `--mark`, `--teal`, `--redact`) and typography (`Bricolage Grotesque`, `IBM Plex Sans`, `IBM Plex Mono`) matching the approved brand specification
- **Database**: SQLite via `better-sqlite3` storing submissions at `/app/data/tacit.db` (in production container) or `./data/tacit.db` (locally)
- **Email Notifications**: Asynchronous SMTP dispatch via `nodemailer` (graceful fallback if unset)
- **Security & Controls**:
  - Per-IP rate limiting
  - Anti-spam honeypot fields
  - HTTP Basic Authentication for `/admin` portal
  - Zero-tracking cookie architecture
  - Health check endpoint at `/api/health`

---

## Getting Started Locally

### 1. Prerequisites
- Node.js v20+ or v24+
- npm v10+

### 2. Installation
```bash
git clone https://github.com/iamvazu/tacit.git
cd tacit
npm install
```

### 3. Environment Configuration
Copy the `.env.example` file:
```bash
cp .env.example .env.local
```

Configure your local environment variables in `.env.local`:
```env
ADMIN_USER=admin
ADMIN_PASSWORD=change-me-locally
CONTACT_EMAIL=hello@tacit.exchange
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Environment Variables

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `ADMIN_USER` | Basic auth username for `/admin` | `admin` |
| `ADMIN_PASSWORD` | Strong password for `/admin` | `[Random Secret]` |
| `DATABASE_PATH` | Path to SQLite database file | `/app/data/tacit.db` (Docker) or `./data/tacit.db` |
| `CONTACT_EMAIL` | Displayed contact address on site | `hello@tacit.exchange` |
| `NOTIFY_EMAIL` | Recipient address for form alerts | `ops@tacit.exchange` |
| `SMTP_HOST` | *(Optional)* Outgoing SMTP server | `smtp.mailgun.org` |
| `SMTP_PORT` | *(Optional)* SMTP server port | `587` |
| `SMTP_USER` | *(Optional)* SMTP username | `postmaster@...` |
| `SMTP_PASS` | *(Optional)* SMTP password | `...` |
| `SMTP_FROM` | *(Optional)* From header address | `Tacit Alerts <alerts@tacit.exchange>` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap & OG | `https://tacit.exchange` |

---

## Production Deployment (Docker Standalone)

Tacit is containerized using multi-stage Docker builds with standalone output mode.

### Directory Structure on Server
All application files and data live strictly inside `/opt/tacit`:
```
/opt/tacit/
├── data/              # Mounted volume for tacit.db SQLite database
├── .env               # chmod 600 containing ADMIN credentials
├── docker-compose.yml
├── deploy.sh          # Automated pull-and-rebuild script
└── ...
```

### Docker Compose Configuration
Run container under dedicated project `tacit`:
```bash
docker compose -p tacit up -d --build
```

### Admin Access & CSV Export
Navigate to:
```
https://tacit.exchange/admin
```
Log in using your configured `ADMIN_USER` and `ADMIN_PASSWORD` to review submissions in real-time or export them to CSV.
