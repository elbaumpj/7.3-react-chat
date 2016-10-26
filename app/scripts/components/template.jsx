var React = require('react');

var TemplateComponent = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <h1>Peter's Chat App</h1>
        </header>

        {this.props.children}
      </div>
    );
  }
});


module.exports = {
  TemplateComponent: TemplateComponent
}
