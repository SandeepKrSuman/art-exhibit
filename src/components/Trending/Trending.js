import Card from "../Card/Card";
import { BagState } from "../../context/Context";
import styles from "./Trending.module.css";

export default function Trending() {
  const {
    state: { products },
  } = BagState();

  return (
    <section className={styles.trending}>
      <h1>Trending Artworks</h1>
      <div className={styles.container}>
        {products
          .filter((p) => p.trending)
          .map((painting, index) => (
            <Card key={index} painting={painting} />
          ))}
      </div>
    </section>
  );
}
