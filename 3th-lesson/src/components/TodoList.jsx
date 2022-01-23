import React, { useEffect, useState } from 'react';
import Form from './Form';
import Todo from './Todo';

const TodoList = () => {

  //* state that will have the todos of the form
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setAllTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }, [allTodos]);

  const addTodo = (todo) => {
    console.log(todo)
    setAllTodos((old) => [...old, todo]);
  };

  const deleteTodo = (id) => {
    setAllTodos((old) => old.filter(item => item.id !== id));
  }

  const completeTodo = id => {
    const edit = allTodos.map(item => (
      item.id === id ? { ...item, status: !item.status } : item
    ));

    setAllTodos(edit);
  }

  return (
    <div>
      {/* //* Al componente Form le vamos a pasar por props la funcion de agregar todos */}
      <Form addTodo={addTodo} />
      <ul className='list-group list-group-numbered mt-3'>
        {
          allTodos.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo} />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
