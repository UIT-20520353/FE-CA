import React, { useState, useEffect, useCallback } from "react";
import Title from "./utils/Title";
import categoryApi from "../api/categoryApi";
import { Link, useSearchParams } from "react-router-dom";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();

  const getAllCategories = useCallback(async () => {
    const res = await categoryApi.getAllCategories();
    if (res.status === 200) {
      setCategories(res.data);
    }
  }, []);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <>
      <div className="nike-container">
        <div className="flex flex-col items-start gap-10 md:flex-col">
          <Title title={"Category"} />

          <div className="flex flex-row items gap-3">
            {categories.map((c) => (
              <Link
                to={`/products?category=${c.id}`}
                className={`px-8 py-2 ${
                  Number(searchParams.get("category")) === c.id
                    ? "bg-cyan-500"
                    : "bg-cyan-300"
                } rounded-lg text-white`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
