const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-dom/test-utils');
const $ = require('jquery');

const {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  // Test whether a function is OR is not called with which arguments
  it('should call onAddTodo prop with valid data', () => {
    let todoText = 'Test Todo Text';
    // create a spy
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $element = $(ReactDOM.findDOMNode(addTodo));

    // set the value of the input field before submit
    addTodo.refs.todoText.value = todoText;
    // select the first DOMNode from the jQuery object: $element.find('form')[0]
    // TestUtils.Simulate.submit(DOMNode) needs a DOMNode not a jQuery Object
    TestUtils.Simulate.submit($element.find('form')[0]);

    // assert whether spy is called with the input field value from above
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should NOT call onAddTodo prop with INVALID data', () => {
    let todoText = '';
    // create a spy
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $element = $(ReactDOM.findDOMNode(addTodo));

    // set the value of the input field before submit
    addTodo.refs.todoText.value = todoText;
    // select the first DOMNode from the jQuery object: $element.find('form')[0]
    // TestUtils.Simulate.submit(DOMNode) needs a DOMNode not a jQuery Object
    TestUtils.Simulate.submit($element.find('form')[0]);

    // assert whether spy is called with the input field value from above
    expect(spy).toNotHaveBeenCalled();
  });


});
