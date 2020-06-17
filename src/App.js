import React, { useEffect } from 'react';
import './App.css';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { denormalizeData } from './utils';
import { getTodos } from './redux/TodosDuck';

function App() {
  const todos = useSelector((state) => state.todos.results);
  const loadingTodos = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
   <div className="App">
    <div>
     <Counter/>
    <div>
     {loadingTodos && <h2>Cargando...</h2>}
      {!loadingTodos && todos && (
        <ul>
        {denormalizeData(todos).map((todo) => (
          <li key={todo.id}>
            {todo.title}: {todo.body}
          </li>
        ))}
          </ul>
          )}
    </div>
    </div>
    </div>
  );
}

export default App;
