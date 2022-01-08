import styles from "./loader.module.css";
function Loader() {
  return (
    <div className={styles.dotsLoader}>
      <div className={styles.dotsContainer}>
        <div className={`${styles.pulseDot} ${styles.pulseDot1}`}></div>
        <div className={`${styles.pulseDot} ${styles.pulseDot2}`}></div>
        <div className={`${styles.pulseDot} ${styles.pulseDot3}`}> </div>
      </div>
    </div>
  );
}
export default Loader;
