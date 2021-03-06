const expect = require('expect');

const {TodoAPI} = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 23,
        text: 'Test',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      // all value match
      expect(actualTodos).toEqual(todos);
    })

    it('should NOT set INvalid todos array', () => {
      let badTodos = {
        a: 'b'
      };
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    })

  });

  describe('getTodos', () => {
    it('should return empty array for bad local storage data', () => {
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      let todos = [{
        id: 23,
        text: 'Test',
        completed: false
      }];

      // it's cleaner not to call setTodos, because this could be failing
      localStorage.setItem('todos', JSON.stringify(todos));

      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    })
  });

  describe('filterTodos', () => {
    let todos = [{
        id: 1,
        text: 'Test Text 1',
        completed: true
      },
      {
        id: 2,
        text: 'Test Some Text 2',
        completed: false
      },
      {
        id: 3,
        text: 'Test Text 3',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return only uncompleted items if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      // second item should be first now
      expect(filteredTodos[0].completed).toBe(false);
    })

    it('should filter todos by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

  });

});
