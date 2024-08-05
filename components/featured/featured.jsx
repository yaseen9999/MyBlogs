import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          <b>Hey Yaseen here!</b> Discover my stories and creative ideas
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            alt='Featured image' 
            src='/images/pic.jpg' 
            className={styles.Image} 
            width={340} 
            height={340} 
          />
        </div>
        <div className={styles.post}>
          <div className={styles.posttitle}>
            <b>Your Blog, Your Voice</b>
          </div>
          <div className={styles.postdescription}>
            <div>
              Welcome to YaseenBlogs, your ultimate destination for sharing your thoughts, ideas, and experiences 
              with the world. Whether you&apos;re a seasoned writer or just starting, our platform provides an intuitive
              and engaging space to publish your blog posts, connect with readers, and discover inspiring content. 
              Join our vibrant community, explore diverse topics, and make your voice heard. Start blogging today 
              and be part of something extraordinary!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
