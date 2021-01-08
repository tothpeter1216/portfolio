import axios from "axios";
const baseUrl = "http://localhost:3001/api/all";

const getAllData = () => {
  return axios.get(baseUrl);
};

export { getAllData };
