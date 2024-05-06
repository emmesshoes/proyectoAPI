import { getAuth, onAuthStateChanged } from "firebase/auth";
import credenciales from "./utils/credenciales";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
import { useState } from "react";
const auth = getAuth(credenciales);

const App = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else setUsuario(null);
  });

  return (
    <>
      {usuario ? (
        <Home />
      ) : (
        <div className="contenedorLogin">
          <Login />
        </div>
      )}
    </>
  );
};

export default App;
