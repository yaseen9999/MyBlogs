
import styles from "./page.module.css";
import Featured from "@/components/featured/featured";
import Categories from "@/components/categories/categories";
import Cardlist from "@/components/cardlist/cardlist";
import Menu from "@/components/menu/menu";
import axios from 'axios';
import cache from '../lib/cache';
 // Adjust the import based on your structure
 async function getrecentposts() {
  try {
    const res = await axios.get(`/api/pagination?page=1&limit=3`);
    console.log(res)
    return res.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

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


export default async function Home() {
  const recentposts = await getrecentposts ();
  const popularposts = await getpopularposts ();

 
  return (
  <div className={styles.container}>
    <Featured/>
    <Categories/>
    <div className={styles.content}>
      <div className={styles.card}>
      <Cardlist posts={recentposts}/>
      </div>
      <div  className={styles.menu}>
      <Menu posts={popularposts}/>
      </div>
     
      
    </div>
  </div>
  );
}
