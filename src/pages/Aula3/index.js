import React, { useState } from "react";
import "./ContadorGenero.css";
import Contador from "./Contador";
import { Link } from 'react-router-dom';

const ContadorGenero = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [total, setTotal] = useState(0);

  const handleHomensChange = (value) => {
    if(value < 0) {
        value = 0;
    }
    setHomens(value);
    setTotal(value + mulheres);
  };

  const handleMulheresChange = (value) => {
    if(value < 0) {
        value = 0;
    }
    setMulheres(value);
    setTotal(homens + value);
  };
  const reset = () => {
    setHomens(0);
    setMulheres(0);
    setTotal(0);
  }

  return (
    
    <div className="contador-genero">
      <Link to="/">Voltar a home</Link>
      <button className="contador-button-decrement" onClick={reset}>
          Reset
        </button>
      <div className="contador-genero-row">
     
        <div className="contador-genero-column">
          <div className="contador-genero-icon homem-icon"></div>
          <div className="contador-genero-titulo">Homens</div>
          <Contador value={homens} onChange={handleHomensChange} />
        </div>
        <div className="contador-genero-column">
          <div className="contador-genero-icon mulher-icon"></div>
          <div className="contador-genero-titulo">Mulheres</div>
          <Contador value={mulheres} onChange={handleMulheresChange} />
        </div>
      </div>
      <div className="contador-genero-row">
        <label htmlFor="contador-total-input">Total:</label>
        <input id="contador-total-input" type="number" value={total} disabled />
      </div>
    </div>
  );
};

export default ContadorGenero;
