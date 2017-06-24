const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-dom/test-utils');
const $ = require('jquery');

const {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    let todoData = {
      id: 199,
      text: 'Test Text',
      completed: true
    }

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    let $element = $(ReactDOM.findDOMNode(todo));
    // this is the clickable div:
    TestUtils.Simulate.click($element[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });

});
