import { MdDelete } from "react-icons/md";
import { BagState } from "../../context/Context";
import styles from "./BagItem.module.css";

export default function BagItem({ painting }) {
  const { dispatch } = BagState();

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img
          src={`/assets/${painting.thumbnail}.jpeg`}
          alt="product thumbnail"
        />
      </div>
      <div className={styles.details}>
        <h2>{painting.title}</h2>
        <p>{`by ${painting.artist}`}</p>
        <p className={styles.price}>{`₹ ${
          painting.price - (painting.price * painting.discount) / 100
        }`}</p>
      </div>
      <div className={styles.stock}>
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_BAG",
              payload: painting,
            })
          }
        >
          <MdDelete />
        </button>
        <select
          onChange={(e) =>
            dispatch({
              type: "CHANGE_ITEM_QTY",
              payload: {
                id: painting.id,
                qty: e.target.value,
              },
            })
          }
          value={painting.qty}
          name="qty"
          id={`qty${painting.id}`}
          className={styles.quantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
    </div>
  );
}
