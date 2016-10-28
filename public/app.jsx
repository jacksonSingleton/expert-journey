var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')
ReactDOM.render(
  <Greeter name="Jackson" message="Welcome!"/>,
  document.getElementById('app')
);
