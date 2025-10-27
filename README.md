# 🐾 Paws Backend

Paws Backend is the core API service powering the **Pawz** platform — built with [NestJS](https://nestjs.com), [PostgreSQL](https://www.postgresql.org/), and [Prisma](https://www.prisma.io/).  
It handles authentication, data management, and integrations with external services such as AWS S3 and Redis.

---

## ⚙️ Tech Stack

- **Runtime:** Node.js
- **Framework:** [NestJS](https://nestjs.com)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Cache:** [Redis](https://redis.io/)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git git@github.com:pawzandconnect/Backend.git
cd Backend
```

### 2️⃣ Install Dependencies

```bash
pnpm install
```

---

## 🧩 Environment Configuration

Create a `.env` file in the root directory and configure it as follows:

```bash
# BASIC
APP_NAME="Pawz and Connect"
APP_DESC="Pawz and Connect API Service"
NODE_ENV=dev
PORT=8030

# DATABASE
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pawz_db?schema=public

# AUTH
JWT_SECRET="secure_secret"
JWT_EXPIRY=15m

# CACHE
REDIS_URL=redis://localhost:6379

# SMTP
MAIL_LABEL="Pawznconnet"
MAIL_FROM=hello@mailing.domain.com
SMTP_URL=smtp://user:password@smtp_host

# FILE UPLOADS
FILE_UPLOAD_PROVIDER="aws-s3"

# AWS S3
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_S3_REGION=
AWS_S3_BUCKET=
```

> 💡 **Tip:**
>
> - Never commit your `.env` file to version control.

---

## 🗄️ Database Setup

### Run Prisma Migrations

```bash
pnpm prisma migrate dev
```

### (Optional) Generate Prisma Client

```bash
pnpm prisma generate
```

---

## 🧠 Running the Application

### Development Mode

```bash
pnpm start:dev
```

### Production Build

```bash
pnpm build
pnpm start:prod
```

---

## 🧰 Useful Commands

| Command              | Description                |
| -------------------- | -------------------------- |
| `pnpm prisma studio` | Open Prisma Studio (DB UI) |

---

## 📦 Folder Structure

```
src/
 ├── modules/          # Feature modules
 ├── common/           # interceptors, filters, guards etc.
 ├── prisma/           # Prisma schema and service
 ├── main.ts           # Application entry point
 └── app.module.ts     # Root module
 e.t.c
```

---

## Swagger Docs

You can access the Swagger docs UI by visiting http://localhost:{{PORT}}/docs in your browser. Replace PORT with the the correct value.

Thank you and happy building.
