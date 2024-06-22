import React, { useCallback, useEffect, useState } from "react";
import orderApi from "../../api/order.js";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    const res = await orderApi.getAllOrders();
    if (res.status === 200) {
      setOrders(res.data);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <main className="flex flex-col relative">
      <div className="w-full h-24 bg-blue-600" />
      <div className="px-20 mt-5">
        <h1
          className="text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
        >
          Orders
        </h1>
        <div className="mt-4 flex flex-col items-start gap-3">
          {orders.map((order) => (
            <div className="w-full border-b border-gray-400 py-4 grid-cols-3 grid">
              <div className="flex items-center gap-3">
                <p className="text-base font-medium">City:</p>
                <p>{order.city}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-base font-medium">Address:</p>
                <p>{order.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-base font-medium">Phone:</p>
                <p>{order.phone}</p>
              </div>

              <div class="relative overflow-x-auto col-span-3 mt-3">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Product image
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderProducts.map((product) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.product.name}
                        </th>
                        <td class="px-6 py-4">
                          <img
                            className="w-20 h-20 border border-gray-300 rounded-md"
                            src={product.product.image}
                            alt="product"
                          />
                        </td>
                        <td class="px-6 py-4">{product.number}</td>
                        <td class="px-6 py-4">
                          {product.product.category.name}
                        </td>
                        <td class="px-6 py-4">${product.product.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;
