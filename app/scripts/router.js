//3rd party imports
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//Local imports
var AppComponent = require('./components/index.jsx').AppComponent;
// var MessageCollection = require('./models/message').MessageCollection;
// var ChatCollection = require('./components/chatscreen.jsx').ChatCollection;



var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat/': 'chat'
  },
  initialize: function() {
    this.username = '';
  },
  index: function() {
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
  },
  chat: function() {
    var collection = new MessageCollection();
    collection.fetch();

    ReactDOM.render(
      React.createElement(ChatCollection, {collection: collection, username: this.username}),
      document.getElementById('app')
    );
  }
});





var router = new AppRouter();

module.exports = {
  router: router
};
