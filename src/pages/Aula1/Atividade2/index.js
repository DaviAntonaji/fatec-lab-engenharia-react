import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Letreiro() {
  const text = "Venha estudar na Fatec!";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 200); // tempo em milissegundos para cada letra aparecer

    return () => clearInterval(intervalId);
  }, [text.length]);

  return (
    <div>
      <div>{text.slice(0, index + 1)}</div>
      <Link to="/">Voltar a home</Link>
    </div>
  );
}

export default Letreiro;
