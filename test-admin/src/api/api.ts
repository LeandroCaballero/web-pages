import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://api.example.com";

interface RequestConfig<T> {
  url: string;
  method: "get" | "post" | "put" | "delete";
  config?: AxiosRequestConfig;
  data?: T;
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const isTokenValid = (token: string) => {
  // Decodificar el token y verificar su validez
  if (!token) return false;
  const payload = JSON.parse(atob(token.split(".")[1])); // Suponiendo que el token es un JWT
  return payload.exp * 1000 > Date.now(); // Comparar con la fecha actual
};

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      if (!isTokenValid(token)) {
        // Si el token no es válido, redirigir al login
        window.location.href = "/login"; // O usa el history.push
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const request = async <T>({
  method,
  url,
  data,
  config,
}: RequestConfig<T>) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
