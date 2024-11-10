import styles from "../styles/components/introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.videoWrapper}>
        <video src="/background-video.mp4" autoPlay loop muted className={styles.backgroundVideo}></video>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Hello! I'm Muhammad Hamza</h1>
          <p>
            I'm a dedicated web developer specializing in crafting dynamic, responsive, and engaging websites. With a keen eye for detail and a commitment to quality, I aim to deliver user-centered digital experiences that not only look great but also perform efficiently.
          </p>
          <p>
            Welcome to my portfolio! Here, you can explore my projects, learn about my experience, and see how I bring creative ideas to life through code.
          </p>
        </div>
        <div className={styles.image}>
          <img src="/image.png" alt="Muhammad Hamza, Web Developer" />
        </div>
      </div>
    </section>
  );
}
