import React from 'react';
import FormControlled from './components/FormControlled';
import FormUncontrolled from "./components/FormUncontrolled";

const App = () => {
  return (
    <div className='container'>
      <h1>Formularios</h1>
      {/* //! Este es un componente de un formulario no controlado, los cuales no le saca todo el provecho qie tiene react!!!! 
      <FormUncontrolled />
      */}

      <FormControlled />

    </div>
  );
};

export default App;
