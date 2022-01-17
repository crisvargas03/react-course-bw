import React, { useState } from "react";

const Counter = () => {
  // 📌 Forma de usar el UseState [variable, modificadorVariable] = useState(valor inicial de la variable);
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    // Para modificar el stata tenemos que hacer uso obligatorio del modificador...
    setContador(contador + 1);
    console.log(contador);
  };

  const disminuir = () => {
    // Para modificar el stata tenemos que hacer uso obligatorio del modificador...
    setContador(contador - 1);
    console.log(contador);
  };

  return (
    <div>
      <h2>El Contador con useState</h2>
      <button onClick={disminuir} className="btn btn-warning">
        -
      </button>
      <h3>{contador}</h3>
      <button onClick={aumentar} className="btn btn-warning">
        +
      </button>
    </div>
  );
};

export default Counter;
