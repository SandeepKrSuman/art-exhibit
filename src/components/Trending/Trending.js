import { data } from "../../utils/data";
import Card from "../Card/Card";
import styles from "./Trending.module.css";

const paintings = data.filter((painting) => painting.trending);

export default function Trending() {
  return (
    <section className={styles.trending}>
      <h1>Trending Artworks</h1>
      <div className={styles.container}>
        {paintings.map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
      </div>
    </section>
  );
}
