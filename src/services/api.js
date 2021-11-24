import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzieshop.herokuapp.com",
});

// https://kenzieshop.herokuapp.com/products/ GET
export default api;
