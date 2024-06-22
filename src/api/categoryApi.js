import apiInstance, { handleRequest } from "./axios";

const categoryApi = {
  getAllCategories: () => {
    const url = "/api/common/category";
    return handleRequest(apiInstance.get(url));
  },
};

export default categoryApi;
