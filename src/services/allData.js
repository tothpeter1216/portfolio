import axios from "axios";
const baseUrl = "/api/all";

const getAllData = () => {
  return axios.get(baseUrl);
};

export { getAllData };
