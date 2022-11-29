import axios from "axios";
// import axiosInstance, { AxiosInstance } from "../utils/axios";

const API_URL = "http://localhost:2500/api/";

const getBanner = () => {
  return axios.get(API_URL + "admin/banner").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const editBanner = (banner) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.put(API_URL + "admin/banner/", { banner }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 200) {
      return res;
    }
    return res.data;
  });
};

const BannerService = {
  getBanner,
  editBanner,
};

export default BannerService;
