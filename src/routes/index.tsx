import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/client/404/notFound";
import ProductList from "../pages/admin/products/List";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import LayoutAdmin from "../pages/admin/layout";
import Home from "../pages/client/Home/Home";
import LayoutWebsite from "../pages/client/layout";
import ProductForm from "../pages/admin/products/ProductForm";
import Checkout from "../components/Checkout";
import AuthForm from "../components/AuthForm";
import Detail from "../components/Detail";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<Home />} />
                    {/* <Route path="cart" element={<CartPage />} /> */}
                </Route>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/login" element={<AuthForm isLogin />} />
				<Route path="/register" element={<AuthForm />} />




                <Route path="admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<ProductForm />} />
                    <Route path="products/edit/:id" element={<ProductForm />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Router;
