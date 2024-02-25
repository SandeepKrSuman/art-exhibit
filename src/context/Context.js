import { createContext, useContext, useEffect, useReducer } from "react";
import { bagReducer } from "../reducers/bagReducer";
import { data } from "../utils/data";

const BagContext = createContext();

const getStoredBag = () => {
  let storedBag = localStorage.getItem("artExhibitBag");
  if (!storedBag || storedBag === "[]") {
    return [];
  } else {
    return JSON.parse(storedBag);
  }
};

export default function Context({ children }) {
  const products = data;

  const [state, dispatch] = useReducer(bagReducer, {
    products: products,
    bag: getStoredBag(),
  });

  useEffect(() => {
    localStorage.setItem("artExhibitBag", JSON.stringify(state.bag));
  }, [state.bag]);

  return (
    <BagContext.Provider value={{ state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
}

export const BagState = () => {
  return useContext(BagContext);
};
