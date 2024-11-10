// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/components/footer.module.css'; // Import the styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Social Media Links with Image Icons */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/muhammadhamza718" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hamza-816290320" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089787627729" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="facebook" />
          </a>
        </div>

        {/* Copyright Text */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Muhammad Hamza. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
