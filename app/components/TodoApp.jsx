const React = require('react');
const uuid = require('node-uuid');

const {TodoList} = require('TodoList');
const {AddTodo} = require('AddTodo');
const {TodoSearch} = require('TodoSearch');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',

      todos: [
        {
          // generate a random id
          // needed by react to identify the individual todo items
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Leave mail on porch'
        },
        {
          id: uuid(),
          text: 'Play video games'
        }
      ]
    };
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
      todos: [
        ...this.state.todos,
        {
          // generate a random id
          // needed by react to identify the individual todo items
          id: uuid(),
          text: text
        }
      ]
    });
  }

  render() {
    let {todos} = this.state;

    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

module.exports = {TodoApp};
