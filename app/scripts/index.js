// 3rd Party Imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local Imports

var AppComponent = require('./components/index.jsx').AppComponent;

//DOM Ready

$(function(){

  ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
  );




});
