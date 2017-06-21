'use strict';

// webpack loads the modules:
const React = require('react');
const ReactDOM = require('react-dom');

const {TodoApp} = require('TodoApp');

// load foundation
$(document).foundation();

// add custom styles to all pages
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(

  <div>
    <TodoApp/>
  </div>,

  document.getElementById('app')
);
