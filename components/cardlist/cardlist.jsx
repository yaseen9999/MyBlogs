"use client"
import React, { useState,useEffect } from 'react'
import styles from './cardlist.module.css'
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Cardlist = ({posts}) => {
  const [Posts, setPosts] = useState(posts);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(Math.ceil(8 / 3)); // Total number of pages
  const router=useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/pagination?page=${page}&limit=3`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

      fetchPosts();
    
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log('props are ',posts)
  
  if (!posts) {
    return <div>No posts available.</div>;
    
  }

  
  
  const handleReadmore= ( id) => {
    
     
      let views=axios.post(`/api/updateviews?id=${id}`)
    
        .catch(error => console.error('Error incrementing view count:', error));

    router.push(`./singlepage/${id}`);
   
   
  };
  return (
    
    <div className={styles.container}>
      <div className={styles.title}>
       <b>Recent Posts</b> 
      </div>
     
  
        {Posts.map((item ) => ( 
        <div key={item.id}>
           <div className={styles.content}>
               <div className={styles.imagecontainer}>
                   <Image width={450} height={350} src={item.imgurl} className={styles.image} alt='nothing'/> 
              </div>
               <div className={styles.textcontainer}>
                   <div className={styles.datecategory}>
                     <div className={styles.date}>
                     <p>{new Date(item.createdAt).toLocaleDateString()}</p>
                     </div>
                     
                    
                   </div>
           
                  
                   <div className={styles.discription}>
                   <div className={styles.title}>{item.title}</div>
                
                    </div>
                 
                  
                   <Box sx={{ '& button': { m: 1 } }}>
                  <div  className={styles.btn}>
                  <Button  onClick={()=>handleReadmore(item.id)} variant="outlined" size="small">
                    ReadMore
                  </Button>
                  </div>
                  </Box>
                   </div>
           </div>
           </div>  ))}
            
           
     
        
         
     
    
    
    
      
     
    <div className={styles.content5}>
    
    <Pagination
        count={count} 
        
        onChange={handleChange}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </div>
     
    </div>
  )
}

export default Cardlist
