import React, {Component} from 'react';
import Todos from "./Todos";
import PropTypes from 'prop-types';

class Todo_Item extends Component {

  /*
  getStyle()::
  Method to set styling of individual todo entries
  */
  /*  Shorthand  version  */
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  };

/*
  /!*  Longhand version  *!/
  getStyle = () => {
    if(this.props.todo.completed == true) {
      return {
        textDecoration: 'line-through',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted'
      }
    } else {
      return {
        textDecoration: 'none',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted'
      }
    }
  };
*/



  render() {
    /*  Pull id and title from todo property  ("destructuring") */
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.tickboxChanged.bind(this, id)}/> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes (this is good practice but is not required)
Todo_Item.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default Todo_Item;