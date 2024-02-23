import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <h1 className={styles.heading}>
          <p>Elevate your space</p>
          <p>with inspired</p>
          <p>artistry</p>
        </h1>
        <Link className={styles.navigate} to="/collections">
          <button className={styles.exploreBtn}>Explore Collections</button>
        </Link>
      </div>
      <div className={styles.col2}>
        <div className={styles.container}>
          <img
            className={`${styles.headerimg} ${styles.img1}`}
            src="/roompainting.jpeg"
            alt="wall painting inside a room"
          />
        </div>
      </div>
    </header>
  );
}
