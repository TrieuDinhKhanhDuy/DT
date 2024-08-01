import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ProductProvider from "./contexts/ProductContext.tsx";
import {
  ShoppingContextProvider,
} from "./contexts/ShoppingContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingContextProvider>
        <AuthProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </AuthProvider>
      </ShoppingContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
