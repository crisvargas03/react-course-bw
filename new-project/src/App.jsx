//! COMPONENTE PRINCIPAL
import React from "react";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";

const App = () => {
  // const saludar = "Saludos desde variable!";
  // const clasObj = {
  //   primary: "text-primary",
  //   danger: "text-danger",
  //   info: "text-info",
  // };
  // const user = false;
  // const Conectarse = () => <h2 className={clasObj.info}>Online</h2>;
  // const Desconectarse = () => <h2 className={clasObj.danger}>Offline</h2>;
  // const Clicker = (parametro) => {
  //   console.log("Click! con " + parametro);
  // };

  //* Variable para pasarla como props
  const fruitsArray = ["🍇", "🍑", "🥑"];

  return (
    <div className="container">
      {/* <p className={clasObj.primary}>{saludar}</p>
      {user ? <Conectarse /> : <Desconectarse />}
      <button
        className="btn btn-primary"
        onClick={() => Clicker("Un parametro")}
      >
        Clickeame!!
      </button> */}

      {/* Componente de las Frutas que resive las props del arreglo de frutas */}
      <Fruits FrutasFromApp={fruitsArray} />

      {/* Componente de Contador con State */}
      <Counter />
    </div>
  );
};
export default App;
