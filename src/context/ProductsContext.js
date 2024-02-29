import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { productsReducer } from "../reducers/productsReducer";
import api from "../api";

const ProdContext = createContext();

export default function ProductsContext({ children }) {
  const [state, productsDispatch] = useReducer(productsReducer, {
    isLoading: false,
    products: [],
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
    <ProdContext.Provider value={{ state, productsDispatch }}>
      {children}
    </ProdContext.Provider>
  );
}

export const ProductsState = () => {
  return useContext(ProdContext);
};
