import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../hooks/useForm';

const Form = ({ addTodo }) => {

  //* An empty obj to init the state.
  const initialState = {
    name: '',
    description: '',
    status: 'pendient',
    priority: false
  };

  const [inputs, handleChange, reset] = useForm(initialState);

  //* Destructuring the state
  const { name, description, status, priority } = inputs;

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.trim()) {
      e.target[0].focus();

      //* Starting the alert where the name field is empty.
      Swal.fire({
        title: "Error!",
        text: "Can be a empty field!",
        icon: "error",
        iconColor: "black"
      });
      return;
    }

    if (!description.trim()) {
      e.target[1].focus();

      Swal.fire({
        title: "Error!",
        title: "Can be a empty field!",
        icon: "error",
        iconColor: "black"
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      title: "ToDo Added!",
      icon: "success",
      iconColor: "green"
    });

    addTodo({
      name: name,
      description: description,
      status: status === "pendient" ? false : true,
      priority: priority,
      id: uuidv4(),
    });

    reset();
  };

  return (
    <div>
      <h3>Add a New ToDo!</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Enter a new ToDo'
          type="text"
          className='form-control mb-2'
          name='name'
          value={name}
          onChange={handleChange}
        />
        <textarea
          placeholder='Enter a Description for the ToDo'
          className='form-control mb-2'
          name='description'
          value={description}
          onChange={handleChange}
        />
        <select
          name='status'
          className='form-control mb-2'
          value={status}
          onChange={handleChange}
        >
          <option value='pendient'>Pendient</option>
          <option value='completed'>Comepleted</option>
        </select>

        <div className='form-check mb-3'>
          <input
            id='idCheckbox'
            className='form-check-input mb-2'
            type='checkbox'
            name='priority'
            checked={priority}
            onChange={handleChange}
          />
          <label
            className='form-check-label'
            htmlFor='idCheckbox'
          >
            Priority
          </label>
        </div>

        <button type="submit" className="btn btn-dark">
          Save ToDo!
        </button>

      </form>
    </div>
  );
};

export default Form;
