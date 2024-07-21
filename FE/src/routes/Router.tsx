

import { Route, Routes } from "react-router-dom";
import LayOutAdmin from "../pages/Admin/LayOutAdmin";
import DashboardPage from "../pages/Admin/Dashboard/DashboardPage";
import ProductList from "../pages/Admin/Products/ProductList";
import Add from "../pages/Admin/Products/Add/Add";
import Edit from "../pages/Admin/Products/Edit/Edit";
import NotFoundPage from "../pages/Website/404/page";

const Router = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="cart" element={<CartPage />} />
                </Route> */}
                <Route path="admin" element={<LayOutAdmin />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<Add />} />
                    <Route path="products/:id/edit" element={<Edit />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Router;
