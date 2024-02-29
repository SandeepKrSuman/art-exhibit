import Card from "../Card/Card";
import { ProductsState } from "../../context/ProductsContext";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import styles from "./Collections.module.css";

export default function Collections() {
  const {
    state: { isLoading, products },
  } = ProductsState();

  return (
    <section id="collections" className={styles.collections}>
      {isLoading && <CardSkeleton cardCount={6} />}
      {products.map((painting, index) => (
        <Card key={index} painting={painting} />
      ))}
    </section>
  );
}
