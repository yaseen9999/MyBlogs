import prisma from '../../../lib/prisma';
import { IncomingForm } from 'formidable';
import cloudinary from '../../../lib/cloudinary';
import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';
//do not parse the request body automatically 
export const config = {
    api: {
      bodyParser: false,
    },
  };
  const keyFilePath = path.join(process.cwd(), './apikey.json');
 
const keyFile = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
console.log(keyFile)


const auth = new google.auth.JWT(
  keyFile.client_email,
  null,
  keyFile.private_key,
  ['https://www.googleapis.com/auth/drive.file'],
  null
);

const drive = google.drive({ version: 'v3', auth });

export async function uploadHtmlContent(htmlContent) {
  try {
    const fileMetadata = {
      name: 'document.html',
      mimeType: 'text/html',
      parents:['12frcHi0ZwlbomKfNQtsoiAbX6ekVCM6g']
    };
    const media = {
      mimeType: 'text/html',
      body: htmlContent,
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });

    return response.data.id;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}


export default async function handler(req, res) {
    console.log("api hit for blog")
  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Form parsing error:', err);
          return res.status(500).json({ error: 'Form parsing error' });
        }
        console.log('Fields:', fields);
        try {
             const {  title,content,userid } = fields;
             const titleString = Array.isArray(title) ? title[0] : title;
             const userId = Array.isArray(userid) ? userid[0] : userid;
            const contentString = Array.isArray(content) ? content[0] : content;
           
            const imageFile = files.imageUrl ? files.imageUrl[0] : null;

            console.log(titleString,contentString,imageFile,userId );
            if (!titleString || typeof titleString !== 'string') {
                return res.status(400).json({ error: 'Valid title is required' });
              }
              if (!contentString || typeof contentString !== 'string') {
                return res.status(400).json({ error: 'Valid content is required' });
              }
              else if (contentString){
                var fileId = await uploadHtmlContent(contentString);
                res.status(200).json({ fileId });
              }
              if (!imageFile) {
                return res.status(400).json({ error: 'Title is required' });
              }
             
              const cloudinaryResponse = await cloudinary.v2.uploader.upload(imageFile.filepath);
              if(cloudinaryResponse){
                console.log("successfully added to cloudinary")
              }
              const imgurl = cloudinaryResponse.secure_url;
              console.log("cloud url is:",imgurl)
              const newpost=await prisma.post.create({
                data: {
                title: titleString,
                
                imgurl,
                fileId,
                author: {
                    connect: {id:parseInt(userId) } 
                  } 
                },
              });
      
              
              res.status(200).json({ message: 'Post created successfully!',newpost });
    }catch(error){
        console.error('Error handling form submission:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
   });
    
   
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
