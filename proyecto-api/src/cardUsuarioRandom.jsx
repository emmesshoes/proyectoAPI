import { useState, useEffect } from 'react';
import { obtenerDatosAxios } from './utils/conexionAPI'; 

const CardUsuarioRandom = () => {
  const [datosUsuario, setDatosUsuario] = useState(null); 

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await obtenerDatosAxios(); 
        setDatosUsuario(respuesta.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    obtenerDatos();
  }, []);


  return (
    <>  
    
      {datosUsuario && (
        <div>
      
          <img src={datosUsuario.results[0].picture.medium} alt="" />
          <p>{datosUsuario.results[0].name.title} {datosUsuario.results[0].name.first} {datosUsuario.results[0].name.last}</p>
        </div>
      )}
    </>
  );
};

export default CardUsuarioRandom;
