import React, { useState } from "react";
import imagen from "../../assets/logo.png";
import appFirebase from "../../utils/credenciales";
import "./login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
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
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert("el usuario o contraseña es incorrecto", error);
      }
    }
  };

  async function registrarseConGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error al autenticarse con Google:", error);
      // Maneja el error adecuadamente (p. ej., muestra un mensaje al usuario)
    }
  }

  return (
    <div className="h-100">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-5 col-sm-3">
          <img src={imagen} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="registro row gap-2 text-center m-2">
            <h1 className="titulo display-6">Lo que está pasando ahora</h1>
            <h4 className="subtitulo">Unete Hoy</h4>
            <button type="button" class="btn btn-light" onClick={registrarseConGoogle}>
              Registrarse con Google
            </button>
            <button type="button" class="btn btn-light" onClick={registrarseConGoogle}>
              Registrarse con Apple
            </button>
            <p>o</p>
            <button>Crear cuenta</button>
            <p>
              Al registrarte, aceptas los Términos de servicio y la Política de
              privacidad, incluida la política de Uso de Cookies.
            </p>
          </div>
          <div className="card card-body">
            <form onSubmit={funcionDeAutenticacion}>
              <input type="text" placeholder="Ingresar email" id="email" />
              <input
                type="password"
                placeholder="Ingresar Contraseña"
                id="password"
              />
              <button>{registrando ? "Registrarse" : "Iniciar Sesion"}</button>
            </form>
            <h4>
              ¿ya tienes cuenta?
              <button onClick={() => setRegistrando(!registrando)}>
                {registrando ? "Iniciar Sesion" : "Registrarse"}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
