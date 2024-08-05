import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
export default async function handler(req, res) {
    console.log("api hit for sign up")
  if (req.method === 'POST') {
    const { firstname, lastname,email,password} = req.body;
console.log( firstname, lastname,email,password,'request recieved');
try {
  
    const hashpass=await bcrypt.hash(password,10);
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password:hashpass
      }
    });
    console.log(newUser)
    res.status(200).json(newUser);
  
  } catch (err) {
   console.log(err);
  } 
 
}
else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
