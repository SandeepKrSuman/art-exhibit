import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";
import ProductsContext from "./context/ProductsContext";
import BagContext from "./context/BagContext";
import App from "./App";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <ProductsContext>
        <BagContext>
          <SkeletonTheme baseColor="#EEEDEB" highlightColor="#B4B4B8">
            <App />
          </SkeletonTheme>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </BagContext>
      </ProductsContext>
    </AuthContext>
  </React.StrictMode>
);
