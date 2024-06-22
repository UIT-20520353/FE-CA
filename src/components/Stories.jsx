import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { truncate } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../app/CartSlice";
import Title from "./utils/Title";
import { setShowForm } from "../app/LoginSlice";
import { getLocalStorage } from "../utils/sessionStorage";

const Stories = ({ title, products }) => {
  const dispatch = useDispatch();
  const token = getLocalStorage("capstone_project_1_access_token");

  const splideOptions = {
    perPage: 2,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 2 },
    },
  };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        {products.length > 0 ? (
          <div className="mt-7">
            <Splide options={splideOptions}>
              {products.map((val, i) => (
                <SplideSlide key={i} className="mb-0.5">
                  <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                    <div className="flex items-center justify-center">
                      <img
                        src={val.image}
                        alt={`img/story/${i}`}
                        className="w-full max-h-[340px] object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      />
                    </div>

                    <div className="grid items-center justify-items-start px-4">
                      <h1 className="text-base font-semibold lg:text-sm min-h-[80px]">
                        {val.name}
                      </h1>
                      <p className="text-sm text-justify lg:text-xs min-h-[80px]">
                        {truncate(val.description, { length: 175 })}
                      </p>
                    </div>
                    <div className="flex items-center justify-center px-4 w-full">
                      <button
                        onClick={() => {
                          if (!token || token === "") {
                            dispatch(setShowForm(true));
                            return;
                          }

                          dispatch(
                            setAddItemToCart({
                              id: val.id,
                              name: val.name,
                              banner: val.image,
                              price: val.amount,
                            })
                          );
                        }}
                        className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 mb-4 button-theme"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        ) : (
          <div className="text-md mt-3">
            Don't have any product in this category
          </div>
        )}
      </div>
    </>
  );
};

export default Stories;
