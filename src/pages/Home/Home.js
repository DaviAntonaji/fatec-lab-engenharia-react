import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Atividades em React das aulas de Laboratório de Engenharia de Software</h1>
      <h2>Davi de Melo Antonaji</h2>
      <div className="row">
        <div className="offset icon-box">
          <h3 className="title">Aula 1</h3>
          <div>
            <Link to="/aula1/atividade1">Atividade 1: Relógio</Link>
          </div>
          <div>
            <Link to="/aula1/atividade2">Atividade 2: Letreiro</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 2</h3>
          <div>
            <Link to="/aula2/atividade1">Atividade 1: Contador de Generos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
