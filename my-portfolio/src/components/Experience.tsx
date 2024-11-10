// src/components/Experience.tsx
import styles from "../styles/components/experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Professional Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Freelance Projects (2023 - Present)</div>
          <div className={styles.timelineContent}>
            <h3>Freelance Web Developer</h3>
            <ul>
              <li>Developed dynamic and responsive websites for various clients.</li>
              <li>Collaborated with clients to understand their vision and create custom websites.</li>
              <li>Worked with HTML, CSS, JavaScript, React, and Next.js to deliver polished projects.</li>
              <li>Enhanced user experience through optimized performance and SEO strategies.</li>
            </ul>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>Personal Projects (2021 - 2023)</div>
          <div className={styles.timelineContent}>
            <h3>Personal Web Development Projects</h3>
            <ul>
              <li>Built and maintained a personal portfolio website using Next.js and React.</li>
              <li>Created a blog platform to share insights on web development topics and tutorials.</li>
              <li>Designed custom UI components and developed projects to enhance technical skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
