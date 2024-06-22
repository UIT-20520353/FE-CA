import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { heroapi, toprateslaes } from "../../data/data";
import { Hero, Sales, Stories } from "../../components";
import productsApi from "../../api/productApi.js";
import Login from "../../components/Login.jsx";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    setProducts([]);
    const res = await productsApi.getAllProductsByCategory(
      { page: 0, size: 999 },
      searchParams.get("category")
    );
    if (res.status === 200) {
      setProducts(res.data);
    }
  }, [searchParams.get("category")]);

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

export default Products;
