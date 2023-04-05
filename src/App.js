import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Relogio from "./pages/Aula1/Atividade1";
import Letreiro from "./pages/Aula1/Atividade2";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aula1/atividade1" element={<Relogio />} />
      <Route path="/aula1/atividade2" element={<Letreiro />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
