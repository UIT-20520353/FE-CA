import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Cart, Navbar } from "./components";
import CheckoutPopup from "./components/CheckoutPopup.jsx";
import Dashboard from "./features/dashboard/dashboard.jsx";
import Products from "./features/products/products.jsx";
import Orders from "./features/order/orders.jsx";
import Profile from "./features/profile/profile.jsx";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <Navbar />
            <Cart />
            <CheckoutPopup />

            {<Outlet />}
          </Fragment>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
