import { PrismaClient } from '../../generated/prisma/index.js';

import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

// In Prisma v7, you pass a config object instead of the Database instance directly
const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db'
});
const prisma = new PrismaClient({ adapter });

export default prisma;