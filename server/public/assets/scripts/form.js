var awesomePage =
  <div>
    <h1>Form Testing</h1>
    <p>Enter some stuff!</p>
    <div id="container"></div>
    <div id="container-2"></div>
  </div>
;

//Simple react component
var PageLayout = React.createClass({
  render: function () {
    return awesomePage;
  }
});

ReactDOM.render(<PageLayout/>, document.getElementById('app'));




class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      favColor: 'aqua',
      fontSize: 15,
      pStyle: {
        color: this.favColor,
        fontSize: this.fontSize
      }
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  };

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleColorChange(event) {
    this.setState({favColor: event.target.value});
    this.setState({pStyle:{color: event.target.value, fontSize: this.state.fontSize}});
  }
  handleFontSizeChange(event) {
    this.setState({fontSize: event.target.value});
    this.setState({pStyle:{fontSize: event.target.value, color: this.state.favColor}});
  }

  handleSubmit(event) {
    alert('Hey, thanks for entering in your name, ' + this.state.name);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:&nbsp;&nbsp;
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <br /><br />
          <label>
            Favorite Color:&nbsp;&nbsp;
            <input type="text" value={this.state.favColor} onChange={this.handleColorChange} />
          </label>
          <br /><br />
          <label>
            Font Size:&nbsp;&nbsp;
            <input type="text" value={this.state.fontSize} onChange={this.handleFontSizeChange} />
          </label>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <p style={this.state.pStyle}>Your name is: {this.state.name}</p>
        <p style={this.state.pStyle}>...and your favorite color is: {this.state.favColor}</p>
        <p style={this.state.pStyle}>...and you like your font size = {this.state.fontSize} px</p>
      </div>
    );
  }
};


ReactDOM.render(<MyForm />, document.getElementById('container-2'));
