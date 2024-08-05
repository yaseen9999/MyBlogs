import prisma from '../../../lib/prisma';
import cache from '../../../lib/cache';
export default async function handler(req, res) {
    if(req.method==="GET"){
        try {
          const cachedData = cache.get('popularposts');
         if (cachedData) {
          console.log('cache for popular posts are ',cachedData)
        return res.status(200).json(cachedData);
          }
            console.log('api call for popular posts ');
            const posts = await prisma.post.findMany({
              orderBy: {
               views: 'desc',
              },
              take: 3,
            });
            cache.set('popularposts', posts);
            console.log('popular posts :',posts)
            res.status(200).json(posts);
            
          
          } catch (error) {
            console.error('Error fetching posts:', error);
            
           
          }
    }
    
}

    