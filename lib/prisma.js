import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkPrismaConnection() {
  try {
    // Attempt to query the database
    await prisma.$connect();
    console.log('Successfully connected to the database');
    await prisma.$disconnect();
    return true;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// Example usage
checkPrismaConnection().then((isConnected) => {
  if (isConnected) {
    console.log('Prisma is connected to the database.');
  } else {
    console.log('Prisma is not connected to the database.');
  }
});
export default prisma;