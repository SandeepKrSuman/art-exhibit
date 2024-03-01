import { IoBagAddOutline, IoBagRemoveOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate, createSearchParams } from "react-router-dom";
import { BagState } from "../../context/BagContext";
import styles from "./Card.module.css";

export default function Card({ painting }) {
  const navigate = useNavigate();
  const { bag, bagDispatch } = BagState();

  const handleClick = () => {
    navigate({
      pathname: "/collections/item",
      search: `?${createSearchParams({ id: painting.id })}`,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail} onClick={handleClick}>
        {painting.trending && (
          <div className={styles.badge} title="trending">
            <FaArrowTrendUp />
          </div>
        )}
        <img src={`/assets/${painting.thumbnail}.jpeg`} alt="product" />
        {painting.stock > 0 && (
          <div className={styles.rating}>
            {`${painting.rating.star}`}
            <IoMdStar />
          </div>
        )}
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
            {bag.some((p) => p.id == painting.id) ? (
              <button
                className={styles.addToBagBtn}
                onClick={() =>
                  bagDispatch({
                    type: "REMOVE_FROM_BAG",
                    payload: painting,
                  })
                }
              >
                <IoBagRemoveOutline title="remove from bag" />
              </button>
            ) : (
              <button
                className={styles.addToBagBtn}
                onClick={() =>
                  bagDispatch({
                    type: "ADD_TO_BAG",
                    payload: painting,
                  })
                }
                style={{
                  cursor: `${painting.stock === 0 ? "not-allowed" : "pointer"}`,
                }}
                disabled={painting.stock === 0 ? true : false}
              >
                <IoBagAddOutline
                  title={painting.stock === 0 ? "out of stock" : "add to bag"}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
