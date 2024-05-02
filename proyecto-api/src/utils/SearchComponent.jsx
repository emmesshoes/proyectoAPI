import { useState } from "react";
import { obtenerDatosAxios } from "./conexionAPI";

const SearchComponent = ({ onSearch }) => {
  const [genero, setGenero] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");

  const handleSearch = () => {
    console.log("Filtro de género:", genero);
    console.log("Filtro de nacionalidad:", nacionalidad);
  
    obtenerDatosAxios(genero, nacionalidad)
      .then((response) => {
        let personas = response.data.results;
       
        const persona = personas[0];
        onSearch(persona);
      })
      .catch((error) => {
        console.error("Error al buscar:", error);
      });
  };

        // Seleccionar la primera persona después de filtrar
    
  return (
    <div>
      <h2>Buscar Persona</h2>
      <label>
        Género:
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
      </label>
      
      
      <label>
        Nacionalidad:
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchComponent;
