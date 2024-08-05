import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  
    if(req.method==="GET"){
        try {
            console.log('api for all posts  ');
           
                 
            const posts = await prisma.post.findMany();
            console.log(posts)
           
          } catch (error) {
            console.error('Error fetching posts:', error);
            
           
          }
         
    }
    
}

    