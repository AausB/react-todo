const React = require('react');
const PropTypes = require('prop-types');

class AddTodo extends React.Component {
  handleSubmit = (event) => {
    // prevent page reloading
    event.preventDefault();

    // get value from the input field
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      // empty input field
      this.refs.todoText.value = '';
      // call callback from parent handleAddTodo()
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return(
      <div className='container__footer'>
        <form ref='form' onSubmit={this.handleSubmit} className='addtodo-form'>
          <input type='text' ref='todoText' placeholder='What do you need to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

module.exports = {AddTodo};
