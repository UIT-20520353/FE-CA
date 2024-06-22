import { getLocalStorage } from "../utils/sessionStorage";
import apiInstance, { handleRequest } from "./axios";
const orderApi = {
  order: (data) => {
    const url = "/api/user/order/add";
    return handleRequest(
      apiInstance.post(url, data, {
        headers: {
          Authorization: `Bearer ${getLocalStorage(
            "capstone_project_1_access_token"
          )}`,
        },
      })
    );
  },
  getAllOrders: () => {
    const url = "/api/user/order";
    return handleRequest(
      apiInstance.get(url, {
        headers: {
          Authorization: `Bearer ${getLocalStorage(
            "capstone_project_1_access_token"
          )}`,
        },
      })
    );
  },
};

export default orderApi;
