import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Relogio() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <div>{time.toLocaleDateString()} {time.toLocaleTimeString()}</div>
        <Link to="/">Voltar a home</Link>
    </div>

    
  );
}

export default Relogio;
