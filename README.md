## Getting Started

First, run the development server:

```bash
npm install
cp .env.example .env
# (Edit .env with DATABASE_URL)
npx prisma db pull  # or npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

