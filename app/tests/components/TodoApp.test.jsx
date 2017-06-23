const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-dom/test-utils');
const $ = require('jquery');

const {TodoApp} = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the the todos state on handleAddTodo', () => {
    let todoText = 'Test text';

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test',
      completed: false
    };

    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // call handleToggle with id: 11
    todoApp.handleToggle(11);

    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
