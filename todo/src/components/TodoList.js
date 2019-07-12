import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({
    todos,
    visibilytyFilter
  }) => (
  <div>
    {todos && todos.length > 0 
      ? <ul>
          {
            visibilytyFilter === 'all'
            ? todos.map((item, index) => {
                return <TodoItem todoListNumber={index} todo={item} key={`ID_${item.key}`}/>
              })
            : todos.filter(item => item.prtiority === visibilytyFilter).map((item, index) => {
                return <TodoItem todoListNumber={index} todo={item} key={`ID_${item.key}`}/>
              })
          }
        </ul>
      : <p>there is no todos hny , u are so lucky </p>
    }
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilytyFilter: state.visibilytyFilter
  }
}

export default connect (
  mapStateToProps
)(TodoList)