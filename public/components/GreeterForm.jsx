var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    console.log(message);
    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);

    }
    if(message.length > 0){
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter your name here"></input>
          <br />
          <input type="textarea" ref="message" placeholder="Type a message!"></input>
          <br />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

});

module.exports = GreeterForm;
