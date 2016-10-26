var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var UserLoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    };
  },
  handleUserName: function(e) {
    var username = e.target.value;
    this.setState({username: username});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var router = this.props.router;

    router.username = this.state.username;
    router.navigate('chat/', {trigger: true});
    this.setState({username: ''});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-md-6">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleUserName} type="text" className="form-control" id="username" value={this.state.username} placeholder="Enter your username"/>
          <button type="submit" className="btn btn-success">Login</button>
        </div>
      </form>
    );
  }
});

var LoginComponent = React.createClass({
  render: function() {
    return (
      <TemplateComponent>
      <UserLoginForm router={this.props.router} />
      </TemplateComponent>
    );
  }
});

module.exports = {
  LoginComponent: LoginComponent
}
