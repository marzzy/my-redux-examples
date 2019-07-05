import React from 'react';
import { connect } from 'react-redux';
import { AddTodoAction } from '../redux/actions';

class AddTodo extends React.Component {
  state = {
    input: ''
  };

  updateInput = (input) => {
    this.setState({input});
  }

  handleClick = () => {
    this.props.AddTodoAction(this.state.input);
    this.setState({input: ""});
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.input} 
          onChange={ e => this.updateInput(e.target.value)}
        />
        <button onClick={this.handleClick}>
          add new task
        </button>
      </div>
    );
  }
};

export default connect(
  null,
  { AddTodoAction }
)(AddTodo)