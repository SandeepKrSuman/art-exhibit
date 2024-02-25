import { MdDelete } from "react-icons/md";
import styles from "./BagItem.module.css";

export default function BagItem() {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img src="/wallpainting.jpeg" alt="product thumbnail" />
      </div>
      <div className={styles.details}>
        <h2>Ancient Indian Street</h2>
        <p>by Anton Guzaro</p>
        <p className={styles.price}>₹2500</p>
      </div>
      <div className={styles.stock}>
        <button>
          <MdDelete />
        </button>
        <h2>
          <span className={styles.decrease}>-</span>
          {1}
          <span className={styles.increase}>+</span>
        </h2>
      </div>
    </div>
  );
}
