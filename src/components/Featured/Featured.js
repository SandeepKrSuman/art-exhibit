import { data } from "../../utils/data";
import Card from "../Card/Card";
import styles from "./Featured.module.css";

const paintings = data.filter((painting) => painting.featured);

export default function Featured() {
  return (
    <section className={styles.featured}>
      <h1>Featured Collections</h1>
      <div className={styles.container}>
        {paintings.map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
      </div>
    </section>
  );
}
