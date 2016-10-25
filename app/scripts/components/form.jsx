var React = require('react');


var ChatForm = React.createClass({
  render: function() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
        </div>
      </form>
    );
  }
});

module.exports = {
  ChatForm: ChatForm
}
