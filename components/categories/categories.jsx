import React from 'react';
import styles from './categories.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className={styles.container}>
      <h className={styles.text}>Popular Categories</h>
      <div className={styles.content}>
        <Link href="">
          <div className={styles.categoryItem1}>
            <Image src="/images/travel.png" width={20} height={20} alt="Travel" />
            <span className={styles.span}>Travel</span>
          </div>
        </Link>
        <Link href="">
          <div className={styles.categoryItem2}>
            <Image src="/images/fashion.png"width={20} height={20}  alt="Fashion" />
            <span  className={styles.span}>Fashion</span>
          </div>
        </Link>
        <Link href="">
          <div className={styles.categoryItem3}>
            <Image src="/images/coding.png" width={20} height={20}  alt="Coding" />
            <span  className={styles.span}>Coding</span>
          </div>
        </Link>
        <Link href="">
          <div className={styles.categoryItem4}>
            <Image src="/images/food.png"width={20} height={20}  alt="Food" />
            <span  className={styles.span}>Food</span>
          </div>
        </Link>
        <Link href="">
          <div className={styles.categoryItem5}>
            <Image src="/images/culture.png"width={20} height={20}  alt="Culture" />
            <span  className={styles.span}>Culture</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
