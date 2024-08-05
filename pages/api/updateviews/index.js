// pages/api/incrementViews.js
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;
    console.log(id)
  if (req.method === 'POST') {
    try {
        console.log('api call for increment')
      const post = await prisma.post.update({
        where: { id: parseInt(id) },
        data: { views: { increment: 1 } },
      });
      console.log(post)
      res.status(200).json(post.views);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update view count' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
