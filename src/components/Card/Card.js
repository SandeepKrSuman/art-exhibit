import { IoBagAddOutline } from "react-icons/io5";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>Hot</div>
      <div className={styles.thumbnail}>
        <img src="/canvaspainting.jpeg" alt="product" />
      </div>
      <div className={styles.details}>
        <span className={styles.category}>Women,bag</span>
        <h4>
          <a href="">Women leather bag</a>
        </h4>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p> */}
        <div className={styles.foot}>
          <div className={styles.price}>
            {/* <small>$96.00</small>$230.99 */} ₹2500
          </div>
          <div className={styles.links}>
            <a href="/">
              <IoBagAddOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
