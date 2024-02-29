import Skeleton from "react-loading-skeleton";
import styles from "./CardSkeleton.module.css";

export default function CardSkeleton({ cardCount }) {
  return (
    <>
      {Array(cardCount)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles.skcard}>
            <Skeleton className={styles.skthumbnail} />
            <div className={styles.skdetails}>
              <p className={styles.skcategory}>
                <Skeleton />
              </p>
              <h4>
                <Skeleton />
              </h4>
              <p>
                <Skeleton />
              </p>
              <div className={styles.skfoot}>
                <div className={styles.skprice}>
                  <Skeleton />
                </div>
                <div className={styles.skbag}>
                  <Skeleton circle width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
