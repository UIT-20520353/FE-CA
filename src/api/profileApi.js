import { getLocalStorage } from "../utils/sessionStorage";
import apiInstance, { handleRequest } from "./axios";

const profileApi = {
  getProfile: () => {
    const url = "/api/get-info";
    return handleRequest(
      apiInstance.post(url, null, {
        headers: {
          Authorization: `Bearer ${getLocalStorage(
            "capstone_project_1_access_token"
          )}`,
        },
      })
    );
  },
  updateProfile: (data) => {
    const url = "/api/update-info";
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
};

export default profileApi;
