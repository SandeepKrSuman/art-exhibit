import { ProductsState } from "../../context/ProductsContext";
import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import styles from "./Featured.module.css";

export default function Featured() {
  const {
    state: { isLoading, products },
  } = ProductsState();

  return (
    <section className={styles.featured}>
      <h1>Featured Collections</h1>
      <div className={styles.container}>
        {isLoading && <CardSkeleton cardCount={3} />}
        {products
          .filter((p) => p.featured)
          .map((painting, index) => (
            <Card key={index} painting={painting} />
          ))}
      </div>
    </section>
  );
}
