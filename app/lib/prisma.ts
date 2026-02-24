import { PrismaClient } from "@prisma/client"
import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3"

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error("DATABASE_URL missing")

const adapter = new PrismaBetterSQLite3({ url: connectionString })

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma