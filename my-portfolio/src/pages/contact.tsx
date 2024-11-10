"use client";
import React, { useState } from 'react';
import "../styles/globals.css";
import styles from "../styles/components/contact.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // To handle submitting state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (formData.name && validateEmail(formData.email) && formData.message) {
      setIsSubmitting(true); // Set submitting state to true

      // Use EmailJS to send the email
      emailjs
        .send(
          'service_xrfxi5n',  // Replace with your EmailJS service ID
          'template_0647fby',  // Replace with your EmailJS template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'aGp_ldt94_65TG_mr'  // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            setIsSubmitted(true); // Show success message
            setFormData({ name: '', email: '', message: '' }); // Clear form after submission
            setIsSubmitting(false); // Reset submitting state
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('There was an error sending your message. Please try again.');
            setIsSubmitting(false); // Reset submitting state in case of error
          }
        );
    } else {
      alert('Please fill out all fields with valid information.');
    }
  };

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
      </nav>

      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2>Contact Me</h2>
          {isSubmitted ? (
            <div className={styles.thankYouMessage}>
              <h3>Thank you for reaching out!</h3>
              <p>I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={styles.inputField}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={styles.inputField}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={styles.textareaField}
                required
              />
              <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={isSubmitting} // Disable the button during submission
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
