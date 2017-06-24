const $ = require('jquery');

const TodoAPI = {
  setTodos: (todos) => {
    if ($.isArray(todos)) {
      // convert array into a string for storage
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    } else {
      // just to be explicit
      return undefined;
    }
  },

  getTodos: () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      // do nothing
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      // show not completed todo OR
      // show all if showCompleted
      return !todo.completed || showCompleted;
    });

    return filteredTodos;
  }
}

module.exports = {TodoAPI};
