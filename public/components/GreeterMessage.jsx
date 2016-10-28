var React = require('react');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var GreeterMessage = React.createClass({

  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello, {capitalizeFirstLetter(name)}!</h1>
        <p>{message}</p>
      </div>
    );
  }

});
module.exports = GreeterMessage;
