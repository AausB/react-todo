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

    // filter by searchText
    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        let text = todo.text.toLowerCase();
        return text.indexOf(searchText) > -1 ? true : false;
      })
    }

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed ) {
        // a before b
        return -1;
      } else if (a.completed && !b.completed) {
        // a after b
        return 1;
      } else {
        // do nothing
        return 0;
      }
    });

    return filteredTodos;
  }
}

module.exports = {TodoAPI};
