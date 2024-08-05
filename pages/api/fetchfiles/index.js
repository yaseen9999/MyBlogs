import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
export default async function handler(req, res) {
    const keyFilePath = path.join(process.cwd(), './apikey.json');
    const keyFile = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
    
    const auth = new google.auth.JWT(
      keyFile.client_email,
      null,
      keyFile.private_key,
      ['https://www.googleapis.com/auth/drive.file'],
      null
    );
    
    const drive = google.drive({ version: 'v3', auth });
    if (req.method === 'POST') {
        
        console.log('api hit for files')
        const { fileId} = req.body;
        if (!fileId) {
            return res.status(400).json({ error: 'fileIds should be an array' });
          }
        console.log(req.body)
        try {
           
           
              const response = await drive.files.get({
                fileId,
                alt: 'media',
              });
              console.log('response is ',response.data)
             
             
      
            console.log('file contents are ',fileContents)
            res.status(200).json({ fileContents });
          } catch (error) {
            console.error('Error fetching files:', error);
            res.status(500).json({ error: 'Failed to fetch files' });
          }
        } else {
          res.status(405).json({ message: 'Method not allowed' });
        
      }
    
}