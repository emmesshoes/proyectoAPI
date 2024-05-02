 import {useState}  from 'react';
// import { Home } from "./pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SearchComponent from "./SearchComponent";
// import DetailsComponent from "./DetailsComponent";



// const App = () => {
//   const [selectedPersona, setSelectedPersona] = useState(null);

//   return (
//     <>
//     <div>
//       <SearchComponent onSearch={handleSearch} />
//       <DetailsComponent persona={selectedPersona} />
//     </div>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<h1>Hola esto es el login</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import SearchComponent from "./utils/SearchComponent";
import DetailsComponent from "./utils/DetailsComponent";

const App = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);

  const handleSearch = (persona) => {
    setSelectedPersona(persona);
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} /> {/* Pasando handleSearch como onSearch */}
    
    
      <DetailsComponent persona={selectedPersona} />
    </div>
  );
};

export default App;

