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
          <button className="btn btn-primary">Button</button>
        </form>
      </div>
    );
  }

});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: "React",
      message: "Default Message!"
    }
  },
  getInitialState: function() {
    return{
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewName: function(name){
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message){
    this.setState({
      message: message
    });
  },
  render: function() {

    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }

});

ReactDOM.render(
  <Greeter name="Jackson" message="Welcome!"/>,
  document.getElementById('app')
);
