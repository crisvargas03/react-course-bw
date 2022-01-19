import React, { useState } from 'react'

const FormControlled = () => {

  const [todo, setTodo] = useState({
    todoName: '',
    todoDescription: '',
    todoStatus: 'Pendient',
    todoPriority: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    //* Validaciones
    //? Descructurando el todo
    const { todoName, todoDescription, todoStatus, todoPriority } = todo;

    if (!todoName.trim() || !todoDescription.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };

  const handleChange = (e) => {

    //? Destructurando el "e.targert"
    const { name, value, checked, type } = e.target;

    //? Los corchetes se usan [] crear propiedades de objetos de manera 
    setTodo((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    })
    );

  };

  const ShowError = () => (
    <div className="alert alert-danger">
      Can't be a empty field!
    </div>
  )

  return (
    <div>
      <h2>Form Controlled</h2>

      {
        error && <ShowError />
      }

      {/* Se le pasa la constante que creamo al ref */}
      <form onSubmit={handleSubmit}>
        <input
          name='todoName'
          type="text"
          placeholder='Enter a new To Do'
          className='form-control mb-2'
          onChange={handleChange}
          value={todo.todoName}
        />

        <textarea
          name='todoDescription'
          className='form-control mb-2'
          placeholder='Enter the To Do Description'
          onChange={handleChange}
          value={todo.todoDescription}
        />

        <select name="todoStatus" className='form-control mb-2' onChange={handleChange} value={todo.todoStatus}>
          <option value="Pendient">Pendient</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={todo.todoPriority}
            onChange={handleChange}
            name="todoPriority"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Priority
          </label>
        </div>

        <button type='submit' className='btn btn-dark'>Save To Do</button>
      </form>
    </div>
  )
}

export default FormControlled
