import React from 'react';
import { connect } from 'react-redux';
import { SetVisibilityFilter } from '../redux/actions';

class VisibilityFilter extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.SetVisibilityFilter(event.target.innerText);
  }
  render(){
    return(
      <div>
        <h4>filter base on priority: </h4>
        <button onClick={this.handleClick} >all</button>
        <button onClick={this.handleClick} >no-priority</button>
        <button onClick={this.handleClick} >low-priority</button>
        <button onClick={this.handleClick} >mid-priority</button>
        <button onClick={this.handleClick} >high-priority</button>
        <br/>
        <br/>
      </div>
    );
  }
}

export default connect(
  null,
  { SetVisibilityFilter }
)(VisibilityFilter);