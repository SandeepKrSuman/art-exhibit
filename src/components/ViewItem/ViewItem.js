import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdSwap } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { BagState } from "../../context/BagContext";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import ViewItemSkeleton from "../ViewItemSkeleton/ViewItemSkeleton";
import api from "../../api";
import styles from "./ViewItem.module.css";

export default function ViewItem() {
  const [searchParams] = useSearchParams();
  const [painting, setPainting] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [loading, setLoading] = useState(false);

  const { bag, bagDispatch } = BagState();

  useEffect(() => {
    const fetchProd = async (pid) => {
      try {
        setLoading(true);
        const res = await api.getSingleProduct({
          prodid: pid,
        });
        if (res.data.error) {
          setLoading(false);
          toast.error(res.data.errorMsg);
        } else {
          setLoading(false);
          setPainting(res.data);
          setMainImg(`/assets/${res.data.thumbnail}.jpeg`);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
        toast.error(
          error?.response?.data?.errorMsg || "Unable to fetch product"
        );
      }
    };

    const pid = searchParams.get("id");
    fetchProd(pid);
  }, [searchParams]);

  const changeImage = (imgUrl) => {
    setMainImg(imgUrl);
  };

  return (
    <section className={styles.itemview}>
      {loading ? (
        <ViewItemSkeleton />
      ) : painting ? (
        <>
          <div className={styles.images}>
            <div className={styles.singleImg}>
              <img src={mainImg} alt="product" />
            </div>
            <div className={styles.multiImg}>
              {painting.images.map((im, index) => (
                <img
                  key={index}
                  src={`/assets/${im}.jpeg`}
                  alt="product"
                  onClick={() => changeImage(`/assets/${im}.jpeg`)}
                />
              ))}
            </div>
          </div>
          <div className={styles.details}>
            <h2 className={styles.title}>{painting.title}</h2>
            <p className={styles.rating}>
              {Array(parseInt(painting.rating.star))
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <IoStar />
                  </span>
                ))}{" "}
              {`(${painting.rating.count} reviews)`}
            </p>
            <p className={styles.price}>{`Price: ₹${painting.price}`}</p>
            <p className={styles.offerPrice}>{`Get it for: ₹${
              painting.price - (painting.price * painting.discount) / 100
            }`}</p>
            <p className={styles.description}>{painting.description}</p>
            <div className={styles.icons}>
              <span>
                <span>
                  <TbTruckDelivery />
                </span>
                <br />
                Fast Delivery
              </span>
              <span>
                <span>
                  <IoMdSwap />
                </span>
                <br />7 days replacement
              </span>
              <span>
                <span>
                  <FaShieldAlt />
                </span>
                <br />
                Secure payment
              </span>
            </div>
            <h4
              className={styles.stock}
              style={{
                color: `${painting.stock === 0 ? "#D04848" : "#000"}`,
              }}
            >{`${
              painting.stock
                ? "Available: In Stock"
                : "Unavailable: Out of stock"
            }`}</h4>
            <p className={styles.artist}>{`Artist: ${painting.artist}`}</p>
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
                REMOVE FROM BAG
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
                ADD TO BAG
              </button>
            )}
          </div>
        </>
      ) : (
        <h3>Product Not Found</h3>
      )}
    </section>
  );
}
