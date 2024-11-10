"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
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
            <Link href="#contact">Contact</Link>
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
    );
}