import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    console.log("api hit for sign up")
  if (req.method === 'POST') {
    const {email,password }=req.body;
console.log('request receive ',email,password)
try {
  
const user= await prisma.user.findUnique(
    {
        where:{
            email:email,
        }
    }
)
if (user) {
   
   console.log(user)
   const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          console.log('user authentic')
          res.status(200).json({ message: 'User authenticated',  userId: user.id });

        } else {
          
          res.status(401).json({ message: 'Invalid credentials' });
        }
} 
else {
    
    res.status(404).json({ message: 'User not found' });
  }
 
}catch (err) {
    console.log(err);
   } 

}
}

