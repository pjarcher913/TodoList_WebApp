import React, {Component} from 'react';

export class addTodo extends Component {

  state = {
    title: ''
  };

  /*
  'onChange' handler for when user enters values into the "Add Todo..." field.
  (e) is the event, and contains a target that the event is happening to.
   */
  onChange = (e) => {
    // simple way of dealing with this because there is only one textField
    // this.setState({title: e.target});

    // What if you have multiple fields? e.target.name handles that (name, email address, pwd, etc...)
    this.setState({[e.target.name]: e.target.value});
  };

  /*
  Handles when user presses the SUBMIT button.
   */
  onSubmit = (e) => {
    // prevents submission to the JS file itself (DO THIS EVERY TIME)
    e.preventDefault();

    // send text in addTodo textField to todos[]
    this.props.addTodo(this.state.title);
    // clear text field
    this.setState({title: ''});
  };

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
        <input
          style={{flex: '10', padding: '5'}}
          type='text'
          name='title'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type='submit' value='SUBMIT' className='btn' style={{flex: '1'}}/>
      </form>
    )
  }
}

export default addTodo;