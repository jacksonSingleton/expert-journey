
var GreeterMethod = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Some h1</h1>
        <p>Some paragraph</p>
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
      name: this.props.name
    }
  },

  onButtonClick: function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name == 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }
  },
  render: function() {

    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" placeholder="Your name here"/>
          <br />
          <br />
          <button className="btn">Set Name!</button>
        </form>
      </div>
    );
  }

});

ReactDOM.render(
  <Greeter name="Jackson" message="Welcome!"/>,
  document.getElementById('app')
);
