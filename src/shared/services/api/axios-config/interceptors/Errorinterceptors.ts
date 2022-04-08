import { AxiosError } from "axios";
import { toast } from "react-toastify";

// Função JavaScript
export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    // Adiciona um interceptador para msg.
    return toast.warn("Error de conexão.", {
      autoClose: 5000,
    });

    //Promise.reject(new Error("Error de conexão."));
  }

  if (error.response?.status === 401) {
    // Do something (Faça alguma coisa)
  }

  return Promise.reject(error);
};
