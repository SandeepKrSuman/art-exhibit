import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { productsReducer } from "../reducers/productsReducer";
import { filterReducer } from "../reducers/filterReducer";
import api from "../api";

const ProdContext = createContext();

export default function ProductsContext({ children }) {
  const [state, productsDispatch] = useReducer(productsReducer, {
    isLoading: false,
    products: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    searchQuery: "",
    category: "",
    price: "",
    outofstock: false,
    rating: 0,
  });

  const getProducts = async () => {
    productsDispatch({ type: "SET_LOADING", payload: { status: true } });
    try {
      const res = await api.getProducts();
      if (res.data.error) {
        toast.error(res.data.errorMsg);
      } else {
        productsDispatch({ type: "SET_LOADING", payload: { status: false } });
        productsDispatch({ type: "ADD_PRODUCTS", payload: res.data });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.errorMsg || "Unable to fetch products"
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProdContext.Provider
      value={{ state, productsDispatch, filterState, filterDispatch }}
    >
      {children}
    </ProdContext.Provider>
  );
}

export const ProductsState = () => {
  return useContext(ProdContext);
};
