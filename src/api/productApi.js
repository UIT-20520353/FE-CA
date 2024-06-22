import apiInstance, { handleRequest } from "./axios";

const productApi = {
  getAllProducts: (params) => {
    const url = "/api/common/product";
    return handleRequest(apiInstance.get(url, { params }));
  },
  getAllProductsByCategory: (params, id) => {
    const url = `/api/common/product/category/${id}`;
    return handleRequest(apiInstance.get(url, { params }));
  },
};

export default productApi;
