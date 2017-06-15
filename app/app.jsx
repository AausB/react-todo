'use strict';

// webpack loads the modules:
const React = require('react');
const ReactDOM = require('react-dom');

const {BrowserRouter, Route, Switch} = require('react-router-dom');
const Router = BrowserRouter;

// load foundation
$(document).foundation();

// add custom styles to all pages
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(

  <Router>
    <p>Boilerplate 3 Projekt</p>
  </Router>,

  document.getElementById('app')
);
