import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.url = `${BASE_URL}${config.url}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
