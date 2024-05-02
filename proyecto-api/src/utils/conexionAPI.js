import axios from "axios";

export const obtenerDatosAxios = (genero, nacionalidad) => {
  const url = "https://randomuser.me/api/";

  
  const parametros = new URLSearchParams({
    gender: genero,
    nat: nacionalidad
  });

  const urlCompleta = `${url}?${parametros}`;
  
  

  return axios.get(urlCompleta);
};
