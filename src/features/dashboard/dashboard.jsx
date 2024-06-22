import React, { useCallback, useEffect, useState } from "react";
import productsApi from "../../api/productApi.js";
import Hero from "../../components/Hero.jsx";
import Login from "../../components/Login.jsx";
import Sales from "../../components/Sales.jsx";
import Stories from "../../components/Stories.jsx";
import { heroapi, toprateslaes } from "../../data/data.js";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const res = await productsApi.getAllProducts({ page: 0, size: 999 });
    if (res.status === 200) {
      setProducts(res.data);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={toprateslaes} />
      <Stories products={products} title="Products" />
      <Login />
    </main>
  );
};

export default Dashboard;
