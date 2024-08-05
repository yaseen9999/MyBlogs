import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Authlink from '../Authlinks/authlink'

import Menuicon from '../icon/menuicon'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Image alt='' src="/images/face.png" width={24} height={24} />
      <Image alt='' src="/images/tik.png"  width={24} height={24}/>
      <Image alt='' src="/images/insta.png"  width={24} height={24}/>
      </div>
      <div className={styles.logo}>
        YaseenBlogs
      </div>
      
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link  href="">Contact</Link>
        <Link  href="">About</Link>
       <Authlink/>
       
      </div>
     
    
      </div>
    
  )
}

export default Navbar
