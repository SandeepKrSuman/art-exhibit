import Card from "../Card/Card";
import styles from "./Trending.module.css";

export default function Trending() {
  return (
    <section className={styles.trending}>
      <h1>Trending Artworks</h1>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
