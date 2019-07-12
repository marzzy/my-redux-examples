import React from 'react';
import  { connect } from 'react-redux';
import { RemoveTodoAcion } from '../redux/actions';

class TodoItem extends React.Component {

  handleClick = () => {
    const { todoKey, RemoveTodoAcion } = this.props;
    RemoveTodoAcion(todoKey)
  };
  
  render(){
    const { txt } = this.props;

    return(
      <li>
        <span> {txt} </span>
        <button onClick={this.handleClick}> X </button>
      </li>
    );
  }
} 

export default connect(
  null,
  {RemoveTodoAcion}
)(TodoItem);