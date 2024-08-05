// import React from 'react';
// import dynamic from 'next/dynamic';

// import Cardlist from '@/components/cardlist/cardlist';
// import axios from 'axios';
// export async function getServerSideProps(){
//   const res=await axios.get('http://localhost:3000/api/recentposts',{
//       method:'GET',
      
//   });
 
//   console.log(res.data)
//   const posts=res.data;
//   return{
//       props:{
//           posts,
//       }
//   }
// }

// const index = ({posts}) => {

// console.log(posts)

//   return (
//     <div>
//       <Cardlist posts={posts}/>
//     </div>
//   )
// }

// export default index
