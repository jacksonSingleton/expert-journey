/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function capitalizeFirstLetter(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	var GreeterMessage = React.createClass({
	  displayName: 'GreeterMessage',


	  render: function render() {
	    var name = this.props.name;
	    var message = this.props.message;
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Hello, ',
	        capitalizeFirstLetter(name),
	        '!'
	      ),
	      React.createElement(
	        'p',
	        null,
	        message
	      )
	    );
	  }

	});

	var GreeterForm = React.createClass({
	  displayName: 'GreeterForm',

	  onFormSubmit: function onFormSubmit(e) {
	    e.preventDefault();
	    var name = this.refs.name.value;
	    var message = this.refs.message.value;
	    console.log(message);
	    if (name.length > 0) {
	      this.refs.name.value = '';
	      this.props.onNewName(name);
	    }
	    if (message.length > 0) {
	      this.refs.message.value = '';
	      this.props.onNewMessage(message);
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'form',
	        { onSubmit: this.onFormSubmit },
	        React.createElement('input', { type: 'text', ref: 'name', placeholder: 'Enter your name here' }),
	        React.createElement('br', null),
	        React.createElement('input', { type: 'textarea', ref: 'message', placeholder: 'Type a message!' }),
	        React.createElement('br', null),
	        React.createElement('br', null),
	        React.createElement(
	          'button',
	          { className: 'btn btn-primary' },
	          'Button'
	        )
	      )
	    );
	  }

	});

	var Greeter = React.createClass({
	  displayName: 'Greeter',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      name: "React",
	      message: "Default Message!"
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      name: this.props.name,
	      message: this.props.message
	    };
	  },

	  handleNewName: function handleNewName(name) {
	    this.setState({
	      name: name
	    });
	  },
	  handleNewMessage: function handleNewMessage(message) {
	    this.setState({
	      message: message
	    });
	  },
	  render: function render() {

	    var name = this.state.name;
	    var message = this.state.message;

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(GreeterMessage, { name: name, message: message }),
	      React.createElement(GreeterForm, { onNewName: this.handleNewName, onNewMessage: this.handleNewMessage })
	    );
	  }

	});

	ReactDOM.render(React.createElement(Greeter, { name: 'Jackson', message: 'Welcome!' }), document.getElementById('app'));

/***/ }
/******/ ]);