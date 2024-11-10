// src/pages/about.tsx
import React, { useState } from "react";
import styles from "../styles/components/about.module.css";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function About() {
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
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.profileImage}>
                    <Image
                        src="/image.png"
                        alt="Muhammad Hamza, Web Developer"
                        width={150}
                        height={150}
                    />
                </div>
                <div className={styles.intro}>
                    <h2>About Me</h2>
                    <p>
                        Hello! I’m Muhammad Hamza, a passionate web developer focused on
                        crafting engaging and user-friendly experiences. With expertise
                        in JavaScript, Next.js, and React, I build web applications that
                        are both visually appealing and highly functional.
                    </p>
                    <p>
                        In my free time, I love exploring new technologies, working on
                        open-source projects, and enhancing my skills to stay at the
                        forefront of the industry.
                    </p>
                </div>
                <div className={styles.skills}>
                <h3>Technical Skills</h3>
                    <ul>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>Typescript</span>
                            <div className={styles.skillPercentage}>60%</div>
                        </li>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>React</span>
                            <div className={styles.skillPercentage}>45%</div>
                        </li>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>Next.js</span>
                            <div className={styles.skillPercentage}>70%</div>
                        </li>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>HTML & CSS</span>
                            <div className={styles.skillPercentage}>60%</div>
                        </li>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>Responsive Design</span>
                            <div className={styles.skillPercentage}>50%</div>
                        </li>
                        <li className={styles.skillItem}>
                            <span className={styles.skillName}>Git & Version Control</span>
                            <div className={styles.skillPercentage}>75%</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
    </>
  );
}
 