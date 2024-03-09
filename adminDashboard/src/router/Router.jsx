import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import App from "../App";
import OneProduct from "../pages/Products/views/OneProduct";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Sidebar from "../layouts/Sidebar";
import Settings from "../pages/Settings";
import Products from "../pages/Products/views/Products";
import ProductsList from "../pages/Products/ProductsList";

function Router() {
  const [user, setUser] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<App />}>
              <Route path="products" element={<ProductsList />}>
                <Route index element={<Products />} />
                <Route path="OneProduct/:productId" element={<OneProduct />} /> //declaring productId as params
              </Route>
              <Route index element={<Dashboard />} />
              <Route path="/sana" element={<Settings />} />
            </Route>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
