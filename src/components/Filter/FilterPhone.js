import { IoFilter } from "react-icons/io5";
import { ProductsState } from "../../context/ProductsContext";
import styles from "./FilterPhone.module.css";

export default function FilterPhone() {
  const {
    state: { products },
    filterState: { searchQuery, category, price },
    filterDispatch,
  } = ProductsState();

  return (
    <div className={styles.container}>
      <h5>
        <IoFilter /> Filter
      </h5>
      <select
        onChange={(event) => {
          filterDispatch({
            type: "BY_CATEGORY",
            payload: event.target.value,
          });
        }}
        value={category}
        name="fcategory"
        id="fcategory"
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
      <input
        className={styles.search}
        type="search"
        id="fsearch"
        name="fsearch"
        placeholder="search"
        autoComplete="off"
        value={searchQuery}
        onChange={(event) =>
          filterDispatch({ type: "BY_SEARCH", payload: event.target.value })
        }
      />
      <select
        onChange={() => {}}
        name="forder"
        id="forder"
        className={styles.category}
        value={price}
        onChangeCapture={(event) =>
          filterDispatch({
            type: "BY_PRICE",
            payload: event.target.value,
          })
        }
      >
        <option value={""} disabled>
          Unsorted
        </option>
        <option value={"highToLow"}>{`Price (High - Low)`}</option>
        <option value={"lowToHigh"}>{`Price (Low - High)`}</option>
      </select>
    </div>
  );
}
