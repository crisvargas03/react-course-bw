import React, { useRef } from 'react';

const FormUncontrolled = () => {

  //? Forma del uso de las referencias
  const formTodo = useRef(null);

  //? Creando la funcion que resive el evento del submit 
  const handleSubmit = e => {
    e.preventDefault();
    console.log("processing...");

    const datos = new FormData(formTodo.current);

    const obtDatos = Object.fromEntries([...datos.entries()]);
    console.log(obtDatos);

    //? Destructurando las propiedades del objeto
    const { todoName, todoDescription, todoStatus } = obtDatos;

    //? La funcion trim limpia los espacion en blaco del string
    if (!todoName.trim() || !todoDescription.trim()) {
      console.log("Can't be a empty field!");
      return;
    }

    console.log("Go!");
  }

  



  return (
    <div>
      <h2>Formulario No Controlado</h2>
      {/* Se le pasa la constante que creamo al ref */}
      <form ref={formTodo} onSubmit={handleSubmit}>
        <input
          name='todoName'
          type="text"
          placeholder='Enter a new To Do'
          className='form-control mb-2'
        />

        <textarea
          name='todoDescription'
          className='form-control mb-2'
          placeholder='Enter the To Do Description'
        />

        <select name="todoStatus" className='form-control mb-2'>
          <option value="Pendient">Pendient</option>
          <option value="Completed">Completed</option>
        </select>

        <button className='btn btn-dark'>Save To Do</button>
      </form>
    </div>
  );
};

export default FormUncontrolled;
