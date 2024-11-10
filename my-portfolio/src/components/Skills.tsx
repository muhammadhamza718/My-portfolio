// src/components/Skills.tsx
import styles from "../styles/components/skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills Overview</h2>
      <ul>
        <li>CSS/HTML</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Git/Github</li>
      </ul>
    </section>
  );
}
