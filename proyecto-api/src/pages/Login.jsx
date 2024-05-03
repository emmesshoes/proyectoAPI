import React, { useState } from "react";
import imagen from "../assets/logo.png";
import appFirebase from "../utils/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);
const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const funcionDeAutenticacion = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (registrando) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {try {
      
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert("el usuario o contraseña es incorrecto")   
    }
  }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img src={imagen} alt="" className="tamaño-imagen" />
        </div>
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body">
              <form onSubmit={funcionDeAutenticacion}>
                <input type="text" placeholder="Ingresar email" id="email" />
                <input
                  type="password"
                  placeholder="Ingresar Contraseña"
                  id="password"
                />
                <button>
                  {registrando ? "Registrarse" : "Iniciar Sesion"}
                </button>
              </form>
              <h4>
                ¿ya tienes cuenta?
                <button onClick={() => setRegistrando(!registrando)}>
                  {registrando? "Iniciar Sesion": "Registrarse"}
                 
                </button>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
