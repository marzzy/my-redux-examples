import React from 'react';
import  { connect } from 'react-redux';
import { RemoveTodoAcion, SetPriorityAction } from '../redux/actions';

class TodoItem extends React.Component {

  handleClick = () => {
    const { todo, RemoveTodoAcion } = this.props;
    RemoveTodoAcion(todo.key)
  };

  handleChange =(event) => {
    const {SetPriorityAction , todo } = this.props;

    SetPriorityAction(todo.key, event.target.value);
  }
  
  render(){
    const { todo,todoListNumber } = this.props;

    return(
      <li>
        <span> {todoListNumber + 1 }. {todo.text} </span>

        <select value={todo.prtiority} onChange={this.handleChange}>
          <option value="no-priority">no priority</option>
          <option value="low-priority">low priority</option>
          <option value="mid-priority">mid priority</option>
          <option value="high-priority">high priority</option>
        </select>
        
        <button onClick={this.handleClick}> X </button>
      </li>
    );
  }
} 

export default connect(
  null,
  {
    RemoveTodoAcion,
    SetPriorityAction
  }
)(TodoItem);