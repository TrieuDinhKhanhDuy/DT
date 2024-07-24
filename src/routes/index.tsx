import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/client/404/notFound";
import ProductEditPage from "../pages/admin/products/edit/Edit";
import ProductAddPage from "../pages/admin/products/add/Add";
import ProductList from "../pages/admin/products/List";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import LayoutAdmin from "../pages/admin/layout";
import Home from "../pages/client/Home/Home";
import LayoutWebsite from "../pages/client/layout";
import Checkout from "../components/Checkout";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Home />} />
          {/* <Route path="cart" element={<CartPage />} /> */}
        </Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<ProductAddPage />} />
          <Route path="products/:id/edit" element={<ProductEditPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
