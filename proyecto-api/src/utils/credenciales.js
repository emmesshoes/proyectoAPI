import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD_GKCAO-9xG7YmMZlLucjK1MbJotSOGM",
  authDomain: "proyecto-react-40c17.firebaseapp.com",
  projectId: "proyecto-react-40c17",
  storageBucket: "proyecto-react-40c17.appspot.com",
  messagingSenderId: "794994135946",
  appId: "1:794994135946:web:ca8a37d072972e117dae73",
  measurementId: "G-V694WEDPCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app