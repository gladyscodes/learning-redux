import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { denormalizeData } from './utils';
// import { getTodos } from './redux/TodosDuck';
// import { TodoList } from './'

function App() {
  // const todos = useSelector((state) => state.todos.results);
  // const loadingTodos = useSelector((state) => state.todos.loading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch]);

  return (
   <div className="App">
   <h1>gladys todos</h1>
   <div>
     <Counter/>
     <TodoList/>
   </div>
    {/* <div>
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
    </div> */}
    </div>
  );
}

export default App;
