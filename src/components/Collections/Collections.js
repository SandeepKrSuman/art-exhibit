import { data } from "../../utils/data";
import Card from "../Card/Card";
import styles from "./Collections.module.css";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export default function Collections() {
  const paintings = shuffle(data);

  return (
    <section id="collections" className={styles.collections}>
      {paintings.map((painting, index) => (
        <Card key={index} painting={painting} />
      ))}
    </section>
  );
}
