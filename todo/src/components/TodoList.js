import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => (
  <div>
    {todos && todos.length > 0
      ? <ul>
          { todos.map( (item) => {
            return <TodoItem todo={item.text} key={`ID_${item.key}`}/>
            })
          }
        </ul>
      : <p>there is no todos hny , u are so lucky </p>
    }
  </div>
);

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect (
  mapStateToProps
)(TodoList)