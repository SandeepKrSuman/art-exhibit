import { BagState } from "../../context/Context";
import Card from "../Card/Card";
import styles from "./Featured.module.css";

export default function Featured() {
  const {
    state: { products },
  } = BagState();

  return (
    <section className={styles.featured}>
      <h1>Featured Collections</h1>
      <div className={styles.container}>
        {products
          .filter((p) => p.featured)
          .map((painting, index) => (
            <Card key={index} painting={painting} />
          ))}
      </div>
    </section>
  );
}
