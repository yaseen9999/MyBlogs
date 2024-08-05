"use client"
import React,{useEffect}  from 'react'
import Link from 'next/link';
import styles from './authlink.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadUserid } from '@/app/redux/userslice';


const Authlink = () => {
  const dispatch =useDispatch();

  useEffect(()=>{
  
  const id=dispatch( loadUserid());
  console.log(id)
  },[dispatch])
  
  const status = useSelector((state) => state.user.isLoggedIn);
  console.log(status)
  return (
    <>
    {status===false || null || undefined || !status?(
    
         <Link className={styles.link} href="./login">Login</Link>
    ):(
        <>
         <Link  href="write">Write</Link>
         <span className={styles.link}>logout</span>
        
        </>
       )}
  
    </>
  )
}

export default Authlink
