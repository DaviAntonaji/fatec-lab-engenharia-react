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
import ListAula5 from "./pages/Aula5/List";
import List2Aula5 from "./pages/Aula5/List2";
import ShapeEditor from "./pages/Aula5/ShapeEditor";
import List3Aula5 from "./pages/Aula5/List3";
import CounterList from "./pages/Aula5/CounterList";
import List4Aula5 from "./pages/Aula5/List4";
import BucketList from "./pages/Aula5/BucketList";
import FormQuiz from "./pages/Aula6/FormQuiz";
import FormTicket from "./pages/Aula6/FormTicket";
import Accordion from "./pages/Aula6/Accordion";
import Messenger from "./pages/Aula6/Messenger";
import Calculadora from "./pages/Atividade5/Calculadora";
import JogoDaMemoria from "./pages/Atividade6/JogoDaMemoria";

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
        {/* Aula 5 */}
        <Route path="/aula5/atividade1" element={<ToolBarAula5 />} />
        <Route path="/aula5/atividade2" element={<GalleryAula5 />} />
        <Route path="/aula5/atividade3" element={<FormAula5 />} />
        <Route path="/aula5/atividade4" element={<CounterAula5 />} />
        <Route path="/aula5/atividade5" element={<MovingDot />} />
        <Route path="/aula5/atividade6" element={<Form2 />} />
        <Route path="/aula5/atividade7" element={<Form3 />} />
        <Route path="/aula5/atividade8" element={<ListAula5 />} />
        <Route path="/aula5/atividade9" element={<List2Aula5 />} />
        <Route path="/aula5/atividade10" element={<ShapeEditor />} />
        <Route path="/aula5/atividade11" element={<CounterList/>} />
        <Route path="/aula5/atividade12" element={<List3Aula5 />} />
        <Route path="/aula5/atividade13" element={<List4Aula5 />} />
        <Route path="/aula5/atividade14" element={<BucketList />} />
        {/* Aula 6 */}
        <Route path="/aula6/atividade1" element={<FormQuiz/>} />
        <Route path="/aula6/atividade2" element={<FormTicket/>} />
        <Route path="/aula6/atividade3" element={<Accordion/>} />
        <Route path="/aula6/atividade4" element={<Messenger/>} />
        {/* Atividade 5 */}
        <Route path="/atividade5" element={<Calculadora/>} />
        {/* Atividade 6 */}
        <Route path="/atividade6" element={<JogoDaMemoria/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
