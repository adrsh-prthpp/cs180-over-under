## Getting Started

First, run the development server:

```bash
npm install
npm install prisma @prisma/client

create the .env file in the root directory
add this in it:

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMmRiZmZlYTYtNjVmNS00MmJiLWJiNWYtZDc1ODJhYWQ1ZTUyIiwidGVuYW50X2lkIjoiYjc0MTBjNDg0MmY0YTRjMGIxMjIwNmQxYjQ5YmIwOGQ4ZmM3MjMwY2I4YjQ1MDAzOGMzZWI3NTg1ZTM1N2E5NiIsImludGVybmFsX3NlY3JldCI6IjliYTIyNDZhLTUwZTQtNDE4ZS1iZTI1LTNhM2I2M2M2MWRiMSJ9.4ju_tG0dJBXJVb-Z0mh8ZoJB_0RnMdc2ts488pwcpDc"
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://neondb_owner:npg_NaGCjkY6ETR4@ep-fragrant-paper-aa9p40ju.westus3.

# run these lines below in terminal
npx prisma generate
npx prisma migrate dev

npx prisma db push

npm run dev


```
To run test case run npm install vitest then npx vitest on 1.test.js only 
(if other test case files exist they can be ignored)

