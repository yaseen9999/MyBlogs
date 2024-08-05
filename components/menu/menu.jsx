'use client';

import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Menu = ({ posts }) => {
  const router = useRouter();
  console.log('prop for popular posts are', posts);

  const handle = (id) => {
    console.log('Navigating to single page with id:', id);
    router.push(`/singlepage/${id}`);
  };

  const staticdata = [
    {
      imgUrl: '/images/codeeditor.png',
      date: '10-9-2024',
      category: 'Coding',
      description: "Welcome to YaseenBlogs, your ultimate destination for sharing your thoughts, ideas, and experience with the world. Whether you&apos;re a seasoned writer or just starting, our platform provides an intuitive.",
    },
    {
      imgUrl: '/images/traveleditor.jpg',
      date: '10-9-2024',
      category: 'Traveling',
      description: "Welcome to YaseenBlogs, your ultimate destination for sharing your thoughts, ideas, and experience with the world. Whether you&apos;re a seasoned writer or just starting, our platform provides an intuitive.",
    },
    {
      imgUrl: '/images/travel.jpg',
      date: '10-9-2024',
      category: 'Traveling',
      description: "Welcome to YaseenBlogs, your ultimate destination for sharing your thoughts, ideas, and experience with the world. Whether you&apos;re a seasoned writer or just starting, our platform provides an intuitive.",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.editorspicks}>
          <div className={styles.subtitle}>
            <h2>What&apos;s Hot</h2>
          </div>

          <div className={styles.title}>
            <b>Most Popular</b>
            {posts.map((item) => (
              <div   onClick={() => handle(item.id)} key={item.id} className={styles.content2}>
                <div className={styles.imagecontainer}>
                  <Image src={item.imgurl} alt={item.title} className={styles.image} width={500} height={300} />
                </div>
                <div className={styles.textcontainer}>
                  <div className={styles.datecategory}></div>
                  <div className={styles.description}>{item.title}</div>
                  <div className={styles.date}>{new Date(item.createdAt).toLocaleDateString()}</div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.category}>
          <div className={styles.subtitle}>
            <h2>Discover By Topics</h2>
          </div>

          <div className={styles.title}>
            <b>Categories</b>
          </div>
          <div className={styles.content}>
            <Link href="">
              <div className={styles.categoryItem1}>
                <span className={styles.span}>Travel</span>
              </div>
            </Link>
            <div className={styles.categoryItem2}>
              <Link href="">
                <span className={styles.span}>Fashion</span>
              </Link>
            </div>
            <Link href="">
              <div className={styles.categoryItem3}>
                <span className={styles.span}>Coding</span>
              </div>
            </Link>
            <Link href="">
              <div className={styles.categoryItem4}>
                <span className={styles.span}>Food</span>
              </div>
            </Link>
            <Link href="">
              <div className={styles.categoryItem5}>
                <span className={styles.span}>Culture</span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.editorspicks}>
          <div className={styles.subtitle}>
            <h2>Choose by the Editor</h2>
          </div>

          <div className={styles.title}>
            <b>Editor&apos;s Choice</b>
            {staticdata.map((item) => (
              <div key={item.imgUrl} className={styles.content2}>
                <div className={styles.imagecontainer}>
                  <Image src={item.imgUrl} alt={item.category} className={styles.image} width={500} height={300} />
                </div>
                <div className={styles.textcontainer}>
                  <div className={styles.datecategory}>
                    <div className={styles.category}>{item.category}</div>
                  </div>
                  <div className={styles.description}>{item.description}</div>
                  <div className={styles.date}>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
