const React = require('react');
const uuid = require('node-uuid');

const {TodoList} = require('TodoList');
const {AddTodo} = require('AddTodo');
const {TodoSearch} = require('TodoSearch');

const {TodoAPI} = require('TodoAPI');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',

      todos: TodoAPI.getTodos()
    };
  }

  componentDidUpdate = () => {
    TodoAPI.setTodos(this.state.todos);
  }

  handleToggle = (id) => {
    let updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updateTodos
    });
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      }
    );
   }

  handleAddTodo = (text) => {
    this.setState({
      // take the previous state with the ...(spread)operator
      // and add the new todo afterwards
      todos: [
        ...this.state.todos,
        {
          // generate a random id
          // needed by react to identify the individual todo items
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }

  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

module.exports = {TodoApp};
