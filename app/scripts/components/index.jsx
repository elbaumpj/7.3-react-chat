//3rd party Imports
var React = require('react');

// Local imports
var LoginComponent = require('./loginform.jsx').LoginComponent;


var AppComponent = React.createClass({
  render: function() {
    return (
      <div>
        <LoginComponent router={this.props.router}/>
      </div>
    )
  }
});


module.exports = {
  AppComponent: AppComponent
}
