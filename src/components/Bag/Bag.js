import { ImSad } from "react-icons/im";
import BagItem from "../BagItem/BagItem";
import styles from "./Bag.module.css";

export default function Bag() {
  return (
    <section className={styles.bag}>
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      {/* <p className={styles.empty}>
        Bag is Empty! <ImSad />
      </p> */}
    </section>
  );
}
