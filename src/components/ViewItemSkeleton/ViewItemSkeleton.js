import Skeleton from "react-loading-skeleton";
import styles from "./ViewItemSkeleton.module.css";

export default function ViewItemSkeleton() {
  return (
    <section className={styles.iskitemview}>
      <div className={styles.iskimages}>
        <div className={styles.isksingleImg}>
          <Skeleton width={300} height={300} />
          <div className={styles.iskmultiImg}>
            <Skeleton width={80} height={80} />
            <Skeleton width={80} height={80} />
            <Skeleton width={80} height={80} />
          </div>
        </div>
      </div>
      <div className={styles.iskdetails}>
        <Skeleton width={250} height={35} />
        <Skeleton width={300} />
        <Skeleton width={200} />
        <Skeleton count={3} />
        <Skeleton height={100} />
        <Skeleton width={150} height={20} />
        <Skeleton width={200} height={30} />
      </div>
    </section>
  );
}
