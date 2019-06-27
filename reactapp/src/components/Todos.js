import React, {Component} from 'react';
import Todo_Item from './Todo_Item';
// @use to define property types (good procedure/practice, but not always necessary)
import PropTypes from 'prop-types';

export class Todos extends Component {
  render() {

    /*  v0.1  */
    // /* todos state passed as property */
    // console.log(this.props.todos);
    // return (
    //   <div className="Todos">
    //     <h1>Hello world from Todos component</h1>
    //   </div>
    // );

    /*  v1.0  */
    return this.props.todos.map((todo) => (
      /*  Returns <p> in Todo_Item.js for number of items in todoList
      *   (3 todos coming from the state being passed as props, map() thru those props,
      *   then return Todo_Item (3 times) which has a <p> of content).  */
      <Todo_Item todo={todo} key={todo.id} tickboxChanged={this.props.tickboxChanged}
      deleteTodo={this.props.deleteTodo}/>
    ));
  }
}

// PropTypes (this is good practice but is not required)
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
