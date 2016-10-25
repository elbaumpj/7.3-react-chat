//3rd party Imports
var React = require('react');

//Local imports
var ChatForm = require('./form.jsx').ChatForm;


var AppComponent = React.createClass({
  render: function() {
    return (
      <div>
        <ChatForm />
      </div>
    );
  }
});


module.exports = {
  AppComponent: AppComponent
}
