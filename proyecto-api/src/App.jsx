import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h1>Hola esto es el login</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
