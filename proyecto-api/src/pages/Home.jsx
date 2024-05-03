import React from 'react';
import{getAuth,signOut} from"firebase/auth"
import appFirebase from '../utils/credenciales';

const auth = getAuth(appFirebase)

export function Home() {
  return (
    <>
   <h1>BIENVENIDO</h1>
   <button onClick={()=>signOut(auth)}>logOut</button>
   </>
   
  );
}
export default Home
