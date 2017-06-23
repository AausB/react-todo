const React = require('react');

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
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Play video games'
        }
      ]
    };

    console.log(this);
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      }
    );
  }

  handleAddTodo = (text) => {
    alert('newTodo: ' + text);
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
