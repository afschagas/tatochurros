import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: "https://tatochurros.herokuapp.com",
});

// Adiciona um interceptador na requisição

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };
