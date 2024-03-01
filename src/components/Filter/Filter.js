import { IoFilter } from "react-icons/io5";
import { ProductsState } from "../../context/ProductsContext";
import styles from "./Filter.module.css";

export default function Filter() {
  const {
    state: { products },
    filterState: { searchQuery, category, price, outofstock, rating },
    filterDispatch,
  } = ProductsState();

  return (
    <div className={styles.container}>
      <h5>
        <IoFilter /> Filter
      </h5>
      <div className={styles.filters}>
        <input
          className={styles.search}
          type="search"
          id="search"
          name="search"
          placeholder="search"
          autoComplete="off"
          value={searchQuery}
          onChange={(event) =>
            filterDispatch({ type: "BY_SEARCH", payload: event.target.value })
          }
        />
        <select
          onChange={(event) => {
            filterDispatch({
              type: "BY_CATEGORY",
              payload: event.target.value,
            });
          }}
          value={category}
          name="category"
          id="category"
          className={styles.category}
        >
          <option value={""}>All Categories</option>
          {[...new Set(products.flatMap((product) => product.category))].map(
            (c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            )
          )}
        </select>
        <span>
          <input
            type="radio"
            id="pricehl"
            name="pricehl"
            onChange={() =>
              filterDispatch({ type: "BY_PRICE", payload: "highToLow" })
            }
            checked={price === "highToLow" ? true : false}
          />
          <label htmlFor="pricehl">{`Price (High - Low)`}</label>
        </span>
        <span>
          <input
            type="radio"
            id="pricelh"
            name="pricelh"
            onChange={() =>
              filterDispatch({ type: "BY_PRICE", payload: "lowToHigh" })
            }
            checked={price === "lowToHigh" ? true : false}
          />
          <label htmlFor="pricelh">{`Price (Low - High)`}</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="stock"
            name="stock"
            onChange={() => filterDispatch({ type: "OUT_OF_STOCK" })}
            checked={outofstock ? true : false}
          />
          <label htmlFor="stock">Hide out of stock</label>
        </span>
        <div className={styles.rate}>
          <p>Rating:</p>
          <input
            type="radio"
            id="star5"
            name="rate"
            value="5"
            onChange={(event) =>
              filterDispatch({ type: "BY_RATING", payload: event.target.value })
            }
            checked={rating === 5}
          />
          <label htmlFor="star5" title="text">
            5 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value="4"
            onChange={(event) =>
              filterDispatch({ type: "BY_RATING", payload: event.target.value })
            }
            checked={rating === 4}
          />
          <label htmlFor="star4" title="text">
            4 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value="3"
            onChange={(event) =>
              filterDispatch({ type: "BY_RATING", payload: event.target.value })
            }
            checked={rating === 3}
          />
          <label htmlFor="star3" title="text">
            3 stars
          </label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value="2"
            onChange={(event) =>
              filterDispatch({ type: "BY_RATING", payload: event.target.value })
            }
            checked={rating === 2}
          />
          <label htmlFor="star2" title="text">
            2 stars
          </label>
          <input
            type="radio"
            id="star1"
            name="rate"
            value="1"
            onChange={(event) =>
              filterDispatch({ type: "BY_RATING", payload: event.target.value })
            }
            checked={rating === 1}
          />
          <label htmlFor="star1" title="text">
            1 star
          </label>
        </div>
        <button
          className={styles.clearbtn}
          onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
