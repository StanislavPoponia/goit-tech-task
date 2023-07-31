import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://64c4cc3867cfdca3b660fb64.mockapi.io",
});