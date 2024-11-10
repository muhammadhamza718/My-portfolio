import React, { useState } from "react";
import styles from "../styles/components/projects.module.css";
import "../styles/globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Projects() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>My Portfolio</h1>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.navbarLinks}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.navbarLinks}>
            <Link href="/projects">Projects</Link>
          </div>
          <div className={styles.navbarLinks}>
            <Link href="/about">About</Link>
          </div>
          <div className={styles.navbarLinks}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        )}
      </nav>

      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          <h2>My Projects</h2>
          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <Link href="https://weather-widget-kappa.vercel.app/" target='_blank'>
              <div className={styles.projectCard}>
                <img src="/project1.jpg" alt="Project One" className={styles.projectImage} />
                <h3>weather widget</h3>
                <p>Real-time weather details in a card.</p>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="https://count-down-blue-six.vercel.app/" target='_blank'>
              <div className={styles.projectCard}>
                <img src="/project2.jpg" alt="Project Two" className={styles.projectImage} />
                <h3>Countdown Timer</h3>
                <p>Countdown timer for the upcoming event</p>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="https://todo-list-blond-two.vercel.app/" target='_blank'>
              <div className={styles.projectCard}>
                <img src="/project3.jpg" alt="Project Three" className={styles.projectImage} />
                <h3>Project Three</h3>
                <p>Description of project three goes here.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
