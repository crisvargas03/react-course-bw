import React from 'react';

const Todo = ({ todo, deleteTodo, completeTodo }) => {

  const { id, name, description, status, priority } = todo;

  return (
    <>
      <li className='list-group-item d-flex justity-content-between aling-items-start'>
        <div className='ms-2 me-auto'>
          <div onClick={() => completeTodo(id)} className='fw-bold' >{name} | {status ? "Completed" : "Pendient"} </div>
          <p>{description}</p>
          <div>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)} >Delete</button>
          </div>
          <span className='badge bg-info rounded-pill'>
            {priority && "Priority!"}
          </span>
        </div>
      </li>
    </>
  );
};

export default Todo;
