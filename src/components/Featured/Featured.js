import Card from "../Card/Card";
import styles from "./Featured.module.css";

export default function Featured() {
  return (
    <section className={styles.featured}>
      <h1>Featured Collections</h1>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
