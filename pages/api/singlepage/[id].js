import prisma from '../../../lib/prisma';
import { drive } from '../../../lib/googleDriveClient';
import cache from '../../../lib/cache';
export default async function handler(req, res) {
  
    if(req.method==="POST"){
        try {
          const {id}=req.query;
                 console.log(id)
            console.log('api for detailpage ');
            const cachedData = cache.get('singlepagedata'+id);
            if (cachedData) {
             console.log('cache for singlepage are ',cachedData)
           return res.status(200).json(cachedData);
             }
                
                 
            const posts = await prisma.post.findUnique({
              where:{
                id:parseInt(id),
              }
            });
            console.log(posts)
            const fileId=posts.fileId;
            console.log(fileId)
            
            if (!posts.fileId) {
              return res.status(400).json({ error: 'fileIds should be an array' });
            }
            let fileContent = null;
             if(posts.fileId){
              try {
                  const response = await drive.files.get({
                  fileId,
                  alt: 'media',
                });
                console.log('response is ',response.data)
                fileContent = response.data;
             
            } catch (error) {
              console.error('Error fetching files:', error);
              res.status(500).json({ error: 'Failed to fetch files' });
            }
            }
            res.status(200).json({ posts, fileContent });
            cache.set('singlepagedata'+id,{posts, fileContent} );
          } catch (error) {
            console.error('Error fetching posts:', error);
            
           
          }
         
    }
    
}

    