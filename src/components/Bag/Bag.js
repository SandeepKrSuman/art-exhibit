import { ImSad } from "react-icons/im";
import BagItem from "../BagItem/BagItem";
import { BagState } from "../../context/Context";
import styles from "./Bag.module.css";

export default function Bag() {
  const {
    state: { bag },
  } = BagState();

  return (
    <section className={styles.bag}>
      {bag.length === 0 ? (
        <p className={styles.empty}>
          Bag is Empty! <ImSad />
        </p>
      ) : (
        bag.map((painting, index) => (
          <BagItem key={index} painting={painting} />
        ))
      )}
    </section>
  );
}
