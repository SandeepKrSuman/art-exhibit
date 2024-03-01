import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import FilterPhone from "../Filter/FilterPhone";
import { ProductsState } from "../../context/ProductsContext";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import styles from "./Collections.module.css";

export default function Collections() {
  const {
    state: { isLoading, products },
    filterState: { searchQuery, category, price, outofstock, rating },
  } = ProductsState();

  const filteredProducts = () => {
    let prods = products;

    if (searchQuery) {
      prods = prods.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      prods = prods.filter((prod) => prod.category.includes(category));
    }

    if (price) {
      prods = prods.sort((a, b) =>
        price === "lowToHigh"
          ? a.price -
            (a.price * a.discount) / 100 -
            (b.price - (b.price * b.discount) / 100)
          : b.price -
            (b.price * b.discount) / 100 -
            (a.price - (a.price * a.discount) / 100)
      );
    }

    if (outofstock) {
      prods = prods.filter((prod) => prod.stock > 0);
    }

    if (rating) {
      prods = prods.filter((prod) => prod.rating.star >= rating);
    }

    return prods;
  };

  return (
    <section id="collections" className={styles.collections}>
      <div className={styles.col1}>
        <Filter />
        <FilterPhone />
      </div>
      <div className={styles.col2}>
        {isLoading && <CardSkeleton cardCount={6} />}
        {filteredProducts().map((painting, index) => (
          <Card key={index} painting={painting} />
        ))}
        {products.length > 0 && filteredProducts().length === 0 && (
          <h2>Sorry, no results found!</h2>
        )}
      </div>
    </section>
  );
}
