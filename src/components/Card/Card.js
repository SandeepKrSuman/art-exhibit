import { IoBagAddOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import styles from "./Card.module.css";

export default function Card({ painting }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        {painting.trending && (
          <div className={styles.badge} title="trending">
            <FaArrowTrendUp />
          </div>
        )}
        <img src={`/assets/${painting.thumbnail}.jpeg`} alt="product" />
        {painting.stock === 0 && (
          <div className={styles.outOfStock}>out of stock</div>
        )}
      </div>
      <div className={styles.details}>
        <p className={styles.category}>{painting.category.join(", ")}</p>
        <h4>{painting.title}</h4>
        <p>{`by ${painting.artist}`}</p>
        <div className={styles.foot}>
          <div className={styles.price}>
            <small>{`₹${painting.price}`}</small>{" "}
            {`₹${painting.price - (painting.price * painting.discount) / 100}`}
          </div>
          <div className={styles.links}>
            <button
              className={styles.addToBagBtn}
              onClick={() => console.log("Add to Bag!")}
              title={painting.stock === 0 ? "out of stock" : "add to bag"}
              style={{
                cursor: `${painting.stock === 0 ? "not-allowed" : "pointer"}`,
              }}
              disabled={painting.stock === 0 ? true : false}
            >
              <IoBagAddOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
