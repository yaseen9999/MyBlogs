
import React from 'react'
import styles from './blogpage.module.css'
import Menu from '@/components/menu/menu'
import axios from 'axios'
import Image from 'next/image'
async function getpopularposts() {
  try {
    const res = await axios.get('http://localhost:3000/api/popularposts');
    console.log(res)
    return res.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
 }
async function blogdetails(id){
  try {
    const response = await axios.post(`http://localhost:3000/api/singlepage/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}




const Singlepage = async ({params}) => {
  const popularposts= await getpopularposts() 

  const { id } = params;
  console.log('Page ID:',id)
  const data=await blogdetails(id)
  console.log(data)
  const formattedDate =data?.createdAt ? new Date(data?.createdAt).toLocaleDateString() : '';
      
    
  return (
    <div className={styles.container}>
      <div className={styles.topsection}>
          <div className={styles.textcontainer}>
            <div className={styles.title2} >
            {data?.posts?.title}
            </div>
           
          <div className={styles.namedate}>
          <div className={styles.name}>
            {/* {staticdata.username} */}
            </div>
            <div className={styles.date}>
            {formattedDate}
            </div>
          </div>
          </div>
          <div className={styles.imagecontainer}>
            <Image alt='' height={450} width={500} className={styles.image} src={data?.posts?.imgurl} at='empty'/>
            </div>
      </div>
      <div className={styles.bottomsection}>
      <div className={styles.leftsection}>
        <div >
     
        <div dangerouslySetInnerHTML={{ __html:data.fileContent}} />
     
          
        </div>
       
      
      </div>                
               
               
       
     
      <div  className={styles.menu}>
      <Menu posts={popularposts}/>
      </div>
      </div>
      
       
    </div>
    
  )
}

export default Singlepage
