import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import VisibilityFilter from './components/Filtertodos';

function App() {
  return (
    <div className="App">
      <h1>
        ------------ TODO List ------------
      </h1>
      <VisibilityFilter />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
