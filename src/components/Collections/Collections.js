import Card from "../Card/Card";
import { BagState } from "../../context/Context";
import styles from "./Collections.module.css";

export default function Collections() {
  const {
    state: { products },
  } = BagState();

  return (
    <section id="collections" className={styles.collections}>
      {products.map((painting, index) => (
        <Card key={index} painting={painting} />
      ))}
    </section>
  );
}
