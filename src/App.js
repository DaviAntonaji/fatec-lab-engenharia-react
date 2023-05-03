import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Relogio from "./pages/Aula2/Atividade1";
import Letreiro from "./pages/Aula2/Atividade2";

import ContadorGenero from "./pages/Aula3";

import Gallery from "./pages/Aula4/PrimeiroComponente";
import TodoListAula4 from "./pages/Aula4/TodoListAula4";
import PackingList from "./pages/Aula4/PackingList";
import ListAula4 from "./pages/Aula4/ListAula4";
import ToolBarAula5 from "./pages/Aula5/Button";
import GalleryAula5 from "./pages/Aula5/Gallery";
import FormAula5 from "./pages/Aula5/Form";
import CounterAula5 from "./pages/Aula5/Counter";
import MovingDot from "./pages/Aula5/MovingDot";
import Form2 from "./pages/Aula5/Form2";
import Form3 from "./pages/Aula5/Form3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Aula 2 */}
        <Route path="/aula2/atividade1" element={<Relogio />} />
        <Route path="/aula2/atividade2" element={<Letreiro />} />
        {/* Aula 3 */}
        <Route path="/aula3/atividade1" element={<ContadorGenero />} />
        {/* Aula 4 */}
        <Route path="/aula4/atividade1" element={<Gallery />} />
        <Route path="/aula4/atividade2" element={<TodoListAula4 />} />
        <Route path="/aula4/atividade3" element={<PackingList />} />
        <Route path="/aula4/atividade4" element={<ListAula4 />} />
        {/* Aula 4 */}
        <Route path="/aula5/atividade1" element={<ToolBarAula5 />} />
        <Route path="/aula5/atividade2" element={<GalleryAula5 />} />
        <Route path="/aula5/atividade3" element={<FormAula5 />} />
        <Route path="/aula5/atividade4" element={<CounterAula5 />} />
        <Route path="/aula5/atividade5" element={<MovingDot />} />
        <Route path="/aula5/atividade6" element={<Form2 />} />
        <Route path="/aula5/atividade7" element={<Form3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
