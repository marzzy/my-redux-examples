import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({todos}) => (
  <div>
    {todos && todos.length > 0
      ? <ul>
          { todos.map( (item,index) => {
              return <TodoItem todo={item} key={`id_${index}`}/>
            })}
        </ul>
      : <p>there is no todos hny , u are so lucky </p>
    }
  </div>
);

export default TodoList;