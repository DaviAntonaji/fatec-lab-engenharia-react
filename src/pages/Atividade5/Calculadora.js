import React, { useState } from "react";
import "./Calculadora.css";

function Calculadora() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setInput("");
        setResult("");
        break;
      case "delete":
        setInput(input.slice(0, -1));
        break;
      case "=":
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult("Error");
        }
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input || "0"}</div>
      <div className="result">{result}</div>
      <button className="operator" data-value="clear" onClick={handleClick}>
        AC
      </button>
      <button className="operator" data-value="delete" onClick={handleClick}>
        &lt;
      </button>
      <button className="operator" data-value="/" onClick={handleClick}>
        ÷
      </button>
      <button className="operator" data-value="*" onClick={handleClick}>
        ×
      </button>
      <button data-value="7" onClick={handleClick}>
        7
      </button>
      <button data-value="8" onClick={handleClick}>
        8
      </button>
      <button data-value="9" onClick={handleClick}>
        9
      </button>

      <button data-value="4" onClick={handleClick}>
        4
      </button>
      <button data-value="5" onClick={handleClick}>
        5
      </button>
      <button data-value="6" onClick={handleClick}>
        6
      </button>
      <button className="operator" data-value="-" onClick={handleClick}>
        -
      </button>
      <button data-value="1" onClick={handleClick}>
        1
      </button>
      <button data-value="2" onClick={handleClick}>
        2
      </button>
      <button data-value="3" onClick={handleClick}>
        3
      </button>
      <button className="operator" data-value="+" onClick={handleClick}>
        +
      </button>
      <button data-value="0" onClick={handleClick}>
        0
      </button>

      <button data-value="." onClick={handleClick}>
        .
      </button>
      <button className="operator" data-value="=" onClick={handleClick}>
        =
      </button>
    </div>
  );
}

export default Calculadora;
