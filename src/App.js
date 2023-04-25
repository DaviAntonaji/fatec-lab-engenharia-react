import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Relogio from "./pages/Aula2/Atividade1";
import Letreiro from "./pages/Aula2/Atividade2";
import ContadorGenero from "./pages/Aula3";

import Gallery from "./pages/Aula4/PrimeiroComponente";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Aula 2 */}
      <Route path="/aula2/atividade1" element={<Relogio />} />
      <Route path="/aula2/atividade2" element={<Letreiro />} />
      {/* Aula 3 */}
      <Route path="/aula3/atividade1" element={<ContadorGenero />} />
      {/* Aula 4 */}
      <Route path="/aula4/atividade1" element={<Gallery />} />
      
      
    </Routes>
  </BrowserRouter>);
}

export default App;
