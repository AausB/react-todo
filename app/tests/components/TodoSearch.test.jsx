const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-dom/test-utils');
const $ = require('jquery');

const {TodoSearch} = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    let searchText = 'Dog';
    let spy = expect.createSpy();

    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    let searchText = '';
    let showCompleted = true;
    let spy = expect.createSpy();

    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(showCompleted, searchText);
  });
});
