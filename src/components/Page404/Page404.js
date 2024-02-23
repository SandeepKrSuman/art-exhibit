import styles from "./Page404.module.css";

export default function Page404() {
  return (
    <div className={styles.container}>
      <p className={styles.first}>404</p>
      <p className={styles.second}>This page could not be found.</p>
    </div>
  );
}
