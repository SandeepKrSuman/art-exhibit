import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { ProductsState } from "../../context/ProductsContext";
import styles from "./Trending.module.css";

export default function Trending() {
  const {
    state: { isLoading, products },
  } = ProductsState();

  return (
    <section className={styles.trending}>
      <h1>Trending Artworks</h1>
      <div className={styles.container}>
        {isLoading && <CardSkeleton cardCount={3} />}
        {products
          .filter((p) => p.trending)
          .map((painting, index) => (
            <Card key={index} painting={painting} />
          ))}
      </div>
    </section>
  );
}
