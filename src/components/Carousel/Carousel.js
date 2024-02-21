import styles from "./Carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.slider}>
      <img className={styles.slide1} src="/slide1.png" alt="slide" />
      <img className={styles.slide2} src="/slide2.png" alt="slide" />
      <img className={styles.slide3} src="/slide3.png" alt="slide" />
      <img className={styles.slide4} src="/slide4.png" alt="slide" />
    </div>
  );
}
