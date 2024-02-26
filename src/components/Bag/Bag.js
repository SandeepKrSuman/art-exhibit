import { useEffect, useState } from "react";
import { ImSad } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";
import BagItem from "../BagItem/BagItem";
import { BagState } from "../../context/Context";
import styles from "./Bag.module.css";

export default function Bag() {
  const {
    state: { bag },
  } = BagState();

  const [bagTotal, setBagTotal] = useState();

  useEffect(() => {
    setBagTotal(
      bag.reduce(
        (acc, curr) =>
          acc +
          Number(curr.price - (curr.price * curr.discount) / 100) * curr.qty,
        0
      )
    );
  }, [bag]);

  return (
    <section className={styles.bag}>
      {bag.length === 0 ? (
        <p className={styles.empty}>
          Bag is Empty! <ImSad />
        </p>
      ) : (
        <>
          <div className={styles.items}>
            {bag.map((painting, index) => (
              <BagItem key={index} painting={painting} />
            ))}
          </div>
          <div className={styles.container}>
            <h3>Bill Details</h3>
            <div className={styles.bill}>
              <p>
                <span>Item Total</span>
                <span>{`₹${bagTotal}`}</span>
              </p>
              <p>
                <span>Shipping Fee</span>
                <span>₹200</span>
              </p>
              <p>
                <span>To Pay</span>
                <span>{`₹${bagTotal + 200}`}</span>
              </p>
            </div>
            <button>
              Proceed to Checkout &nbsp; <FaArrowRightLong />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
