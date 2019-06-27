import React, {Component} from 'react';
// @ initial import
import './App.css';
// @use create custom header and associated styling
import Header from './components/layout/header';
// @use populate TodoList with entries
import Todos from './components/Todos';
// @use to perform AddTodo function
import AddTodo from './components/addTodo';
// @use to generate custom unique id numbers for each todoTask
import uuid from 'uuid';
// @use to create custom page Routes (for header bar)
import {BrowserRouter as Router, Route} from 'react-router-dom';
// @use to create ABOUT header tab page
import About from './components/pages/about';
// @use to make HTTP GET/POST requests (to backend server, in this app it is to a dummy server)
import Axios from 'axios';

class App extends Component {

  state = {
    // Initialize v1.0 of todos[]
    todos: [
      {
        /*  Use UUID npm library to generate custom id for each element in todos[]
        (not necessary but professional)  */

        // id: 1,
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        // id: 2,
        id: uuid.v4(),
        title: 'Pick up dinner',
        completed: false
      },
      {
        // id: 3,
        id: uuid.v4(),
        title: 'Vacuum the house',
        completed: false
      }
    ]
  };

  /*
  v1.0 - Handles when delete button pressed on entry in todoList.
 */
  deleteTodo = (id) => {
    // Using filter(), return array of todos only containing those with id's not matching the one being passed
    // (this effectively deletes the entry from the array of todos)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  };

  /*
  v1.0 - Handles when user types in value to addTodo textField and presses SUBMIT button
   */
  addTodo = (title) => {
    // console.log(title); // debug

    // create newTodo object to be added to todos[]
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };

    // add new todoItem to todos[]
    this.setState({todos: [...this.state.todos, newTodo]})
  };

  //===========================================================================================
  // // v2.0 - Initialize todos[] with HTTP GET data from https://jsonplaceholder.typicode.com/todos
  // state = {
  //   todos: []
  // };
  //
  // // v2.0 - Make http GET request to "backend API"
  // componentDidMount() {
  //   Axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => this.setState({todos: res.data}));
  // }

  // /*
  // v2.0 - Using HTTP POST, send data to "backend server" and update UI
  //  */
  // addTodo = (title) => {
  //   Axios.post('https://jsonplaceholder.typicode.com/todos', {
  //     title: title,
  //     completed: false
  //   }).then(response => this.setState({todos:
  //     [...this.state.todos, response.data]}));
  // };
  //
  // /*
  // v2.0 - Using HTTP POST, delete data from database then update UI
  //  */
  // deleteTodo = (id) => {
  //   // deletes on "server" and updates the UI
  //   Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(response => this.setState({todos:
  //         [...this.state.todos.filter(todo => todo.id !== id)]}));
  // };
  //===========================================================================================

  /*
  Handles when checkbox is marked as completed.
  Gets id from onChange={this.props.tickboxChanged.bind(this, id) in Todo_Items.js
  Iterates through todos[] to find the element w/ corresponding id.
  Changes completed param to the alternate Boolean (because the tickbox toggled).)
  */
  tickboxChanged = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })});
  };

  render() {
    // state in App.js passed down as a prop, so it can be accessed in Todos.js using this.props
    console.log(this.state.todos);
    return (
      // uses BrowserRouter to _________
      <Router>
        <div className='App'>
          <div className='container'>
            <Header/>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} tickboxChanged={this.tickboxChanged}
                       deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
