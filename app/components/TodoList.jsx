const React = require('react');

const {Todo} = require('Todo');

class TodoList extends React.Component {
  render() {

    let {todos} = this.props;

    const renderTodos = () => {
      // return a new array with react jsx
      // for each item of the array
      //
      // {...todo} ES6 spread for generically deliver props
      // to Todo
      // CAUTION: use it sparingly it can be messy and to many unneeded props
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo}/>
        );
      });
    }

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
}

module.exports = {TodoList};
