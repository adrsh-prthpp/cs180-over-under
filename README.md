## Getting Started

First, run the development server:

```bash
npm install
create the .env file in the root directory
add this in it:

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://neondb_owner:npg_NaGCjkY6ETR4@ep-fragrant-paper-aa9p40ju-pooler.westus3.azure.neon.tech/neondb?sslmode=require"
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://neondb_owner:npg_NaGCjkY6ETR4@ep-fragrant-paper-aa9p40ju.westus3.azure.neon.tech/neondb?sslmode=require"

# run these lines below in terminal
npx prisma generate
npx prisma migrate dev

npx prisma db push

npm run dev


```

