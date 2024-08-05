import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>About Us</h4>
          <p>Learn more about our company.</p>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
