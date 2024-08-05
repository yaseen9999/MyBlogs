import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const totalPosts = await prisma.post.count();
      res.status(200).json(totalPosts);
    } catch (error) {
      console.error('Error fetching total posts:', error);
      res.status(500).json({ error: 'Failed to fetch total posts count' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
