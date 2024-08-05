import prisma from '../../../lib/prisma';
import cache from '../../../lib/cache';
export default async function handler(req, res) {
    if(req.method==="GET"){
        try {
            console.log('api for recent posts ');
            const cachedData = cache.get('recentposts');
            if (cachedData) {
              console.log('cache for recent posts are ',cachedData)
              return res.status(200).json(cachedData);
                
            }  
                     
             const posts = await prisma.post.findMany({
              orderBy: {
                createdAt: 'desc',
              },
              take: 3,
            });
            cache.set('recentposts', posts);
            res.status(200).json(posts);
            
          
          } catch (error) {
            console.error('Error fetching posts:', error);
            
           
          }
    }
    
}

    