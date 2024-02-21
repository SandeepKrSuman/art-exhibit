import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.col1}>
        <h1 className={styles.heading}>
          Elevate your space with inspired artistry.
        </h1>
        <Link className={styles.navigate} to="/collections">
          <button className={styles.exploreBtn}>Explore Collections</button>
        </Link>
      </div>
      <div className={styles.col2}>
        <img
          className={`${styles.headerimg} ${styles.img1}`}
          src="/roompainting.jpeg"
          alt="wall painting inside a room"
        />
        <img
          className={`${styles.headerimg} ${styles.img2}`}
          src="/wallpainting.jpeg"
          alt="wall painting inside a room"
        />
        <img
          className={`${styles.headerimg} ${styles.img3}`}
          src="/canvaspainting.jpeg"
          alt="wall painting inside a room"
        />
        <img
          className={`${styles.headerimg} ${styles.img4}`}
          src="/roomview.jpeg"
          alt="wall painting inside a room"
        />
      </div>
    </header>
  );
}
