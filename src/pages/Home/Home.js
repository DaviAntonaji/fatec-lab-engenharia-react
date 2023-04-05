import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container">
      <h1>Atividades em React das aulas de Laboratório de Engenharia de Software</h1>
      <h2>Davi de Melo Antonaji</h2>
      <div class="row">
        <div class="coluna offset icon-box">
          <h3 class="title">Aula 1</h3>
          <div>
            <Link to="/aula1/atividade1">Atividade 1: Relógio</Link>
          </div>
          <div>
            <Link to="/aula1/atividade2">Atividade 2: Letreiro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
