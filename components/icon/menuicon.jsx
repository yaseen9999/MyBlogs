"use client"
import React,{useState} from 'react'
import styles from './menuicon.module.css'
import Authlink from '../Authlinks/authlink'
import Link from 'next/link'
const Menuicon = () => {
    const [open,setopen]=useState(false);
    const handleicon=()=>{
        console.log('icon click');
        setopen(!open);
    }
  return (

    <>
      <div>
       <div className={styles.menuicon} onClick={()=>handleicon()} >
        &#9776; {/* Unicode character for menu icon */}
      </div>
    
    </div>
    <div className={styles.container}>
          {open&& (
        <div className={styles.content}>
         <Link href="/">Homepage</Link>
        <Link  href="">Contact</Link>
        <Link  href="">About</Link>
       <Authlink/>
        </div>
      )

      }
    </div>
    


    </>
  )}
  
export default Menuicon
