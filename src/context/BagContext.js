import { createContext, useContext, useEffect, useReducer } from "react";
import { bagReducer } from "../reducers/bagReducer";

const BgContext = createContext();

const getStoredBag = () => {
  let storedBag = localStorage.getItem("artExhibitBag");
  if (!storedBag || storedBag === "[]") {
    return [];
  } else {
    return JSON.parse(storedBag);
  }
};

export default function BagContext({ children }) {
  const [bag, bagDispatch] = useReducer(bagReducer, getStoredBag());

  useEffect(() => {
    localStorage.setItem("artExhibitBag", JSON.stringify(bag));
  }, [bag]);

  return (
    <BgContext.Provider value={{ bag, bagDispatch }}>
      {children}
    </BgContext.Provider>
  );
}

export const BagState = () => {
  return useContext(BgContext);
};
