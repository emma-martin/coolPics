/* eslint-disable @next/next/no-img-element */
import Button from "../components/ui/button";
import styles from "../styles/home.module.css";
function Home() {
  const picListLink = "/list";
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>CoolPics</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Are you bored?</h2>

          <p className={styles.ctaText}>
            CoolPics helps you to spend hours of your day scrolling down and
            sharing a big list of random images.
          </p>

          <Button href={picListLink} class="start">
            {"Start here".toUpperCase()}
          </Button>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src="/perrete.jpg"
            alt="a doggy covered with a blanket sitting in a forest path"
          />
          <div className={styles.square}></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
