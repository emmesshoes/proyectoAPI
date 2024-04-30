import axios from "axios";

export const obtenerDatosAxios = () => {
  const url = "https://randomuser.me/api/";
  return axios.get(url);
};