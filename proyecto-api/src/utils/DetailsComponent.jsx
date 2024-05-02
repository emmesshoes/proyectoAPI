
import PropTypes from "prop-types";

const DetailsComponent = ({ persona }) => {
  return (
    <div>
      <h2>Detalles de la Persona</h2>
      {persona && (
        <div>
          <img src={persona.picture.large} alt="Foto de perfil" />
          <p>Nombre: {persona.name.first} {persona.name.last}</p>
          <p>Género: {persona.gender}</p>
          <p>Nacionalidad: {persona.nat}</p>
         </div>
      )}
    </div>
  );
};

DetailsComponent.propTypes = {
  persona: PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    gender: PropTypes.string.isRequired,
    nat: PropTypes.string.isRequired,
    
  }),
};

export default DetailsComponent;
