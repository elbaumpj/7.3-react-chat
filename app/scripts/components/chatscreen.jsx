//3rd party imports
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

//local imports
var MessageCollection = require('../models/message').MessageCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;

var ChatForm = React.createClass({
  getInitialState: function(){
    return {
      content: ''
    };
  },
  handleTitle: function(e) {
    var content = e.target.value;
    this.setState({content: content});
  },
  handleSubmit: function(e){
    e.preventDefault();

    this.getCollection().create({content: this.state.content});
    this.setState({content: ''});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleTitle} name="chat" value={this.state.content} placeholder="Your Message Here" />
        <button type="submit" className="btn btn-success">Chat</button>
      </form>
    );
  }
});

var ChatListing = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: funciont(){
    var collection = this.getCollection();
    var listofMessages = collection.map(function(){
       return <li key={todo.get('_id') || todo.cid}>{todo.get('content')}</li>;
    });
  }
});

var ChatComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <TemplateComponent>
        <ChatForm />
        <ChatListing />
      </TemplateComponent>
    );
  }
});

module.exports = {
  ChatComponent: ChatComponent
}
